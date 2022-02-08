const jsonServer = require('json-server');

const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 8080;
const hostname = '0.0.0.0';
const { format } = require('date-fns');

const entities = {
  users: 'users',
  domains: 'domains',
  ecus: 'ecus',
  functions: 'functions',
  data: 'data',
  controls: 'controls',
  threats: 'threats',
};

const getUserInfo = (db, id) => {
  const user = db.get('users').find({ id }).value();
  return user;
};

const getTicketWithUser = (db, ticket) => {
  let user;
  let vehicle;

  if (ticket?.userId) {
    user = getUserInfo(db, ticket.userId);
  }

  if (ticket?.vehicleId) {
    vehicle = db.get('vehicles').find({ id: ticket.vehicleId }).value();
  }

  return {
    user,
    vehicle,
    ...ticket,
  };
};

const getVehicleWithAuthor = (db, vehicle) => {
  const author = getUserInfo(db, vehicle.authorId);
  const brand = db.get('brands').find({ id: vehicle?.brandId });
  const { authorId, ...vehicleRest } = vehicle;
  return { ...vehicleRest, author, brand };
};

const getControllerWithVehicle = (db, controller) => {
  const vehicle = db.get('vehicles').find({ id: controller?.vehicleId }).value();
  return { ...controller, vehicle };
};

const getDomainWithVehicle = (db, domain) => {
  let result = { ...domain };

  const vehicleInfo = db.get('vehicles').find({ id: domain?.vehicleId }).value();
  if (vehicleInfo) {
    const vehicleWithAuthor = getVehicleWithAuthor(db, vehicleInfo);
    const { model, platform, author, riskLevel, ...vehicle } = vehicleWithAuthor;
    result = {
      ...domain,
      author,
      riskLevel,
      model,
      platform,
      vehicle,
    };
  }

  return result;
};

const getECUWithDomain = (db, ECU) => {
  const domains = ECU.domains?.map(({ id, communication }) => ({
    ecuCommunication: communication,
    ...db.get('domains').find({ id }).value(),
  }));
  const vehicle = db.get('vehicles').find({ id: ECU.vehicleId }).value();

  const supplier = db.get('suppliers').find({ id: ECU.supplierId }).value();
  const connectedECUs = ECU.connectedECUs
    ? ECU.connectedECUs.map(({ id, communication }) => ({
        communication,
        ...db.get('ecus').find({ id }).value(),
      }))
    : [];
  let ticket = null;

  if (ECU.ticketId !== 'Null') {
    const ticketData = db.get('tickets').find({ id: ECU.ticketId }).value();
    ticket = getTicketWithUser(db, ticketData);
  }

  const { domains: connectedDomains, supplierId, ...ECURest } = ECU;

  return { domains, vehicle, supplier, ticket, ...ECURest, connectedECUs };
};

const getFunctionsWithDomain = (db, functionItem) => {
  const ECU = db.get('ecus').find({ id: functionItem?.ecuId }).value();
  const domains = ECU?.domains?.map((domain) => db.get('domains').find({ id: domain?.id }).value());
  const { authorId, ...functionRest } = functionItem;

  return { ...functionRest, domains, ecu: ECU };
};

const getDataWithDomain = (db, data) => {
  const functionItem = db.get('functions').find({ id: data.functionId }).value();
  const { domains, ecu, ...functionData } = getFunctionsWithDomain(db, functionItem);

  const { authorId, ...dataRest } = data;

  return { ...dataRest, domains, ecu, functions: functionData };
};

const getCommentWithAuthor = (db, commentId) => {
  if (!commentId) {
    return null;
  }

  const comment = db.get('comments').find({ id: commentId });

  if (!comment || !comment.authorId) {
    return comment;
  }

  const { authorId, ...commentRest } = comment;
  const author = db.get('users').find({ id: authorId });
  return { ...commentRest, author };
};

app.use(jsonServer.bodyParser);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/vehicles/', (req, res) => {
  const { db } = req.app;

  const vehicles = db.get('vehicles').value();

  if (!vehicles) {
    res.status(404).send('Vehicles not found.');
    return;
  }

  const vehiclesWithAuthor = vehicles.map((vehicle) => getVehicleWithAuthor(db, vehicle));

  res.json(vehiclesWithAuthor);
});

app.get('/vehicles/:id', (req, res) => {
  const { db } = req.app;
  const { id } = req.params;

  const vehicle = db.get('vehicles').find({ id }).value();

  if (!vehicle) {
    res.status(404).send('Vehicle not found.');
    return;
  }

  const vehicleWithAuthor = getVehicleWithAuthor(db, vehicle);

  res.json(vehicleWithAuthor);
});

app.get('/gateways', (req, res) => {
  const { db } = req.app;

  const gateways = db.get('gateways').value();

  if (!gateways) {
    res.status(404).send('Controller not found.');
    return;
  }

  const gatewaysWithVehicle = gateways.map((controller) => getControllerWithVehicle(db, controller));

  res.json(gatewaysWithVehicle);
});

app.get('/gatewayForVehicle/:id', (req, res) => {
  const { id } = req.params;
  const { db } = req.app;

  if (!id) {
    res.status(404).send('Pass the vehicle ID.');
    return;
  }
  const gateway = db.get('gateways').find({ vehicleId: id }).value();

  if (gateway) {
    res.json({ type: 'gateway', gateway });
    return;
  }
  const ECUasGateway = { ...db.get('ecus').find({ vehicleId: id, isGateway: true }).value() };

  if (!Object.keys(ECUasGateway).length) {
    res.status(404).send('Gateway not found.');
    return;
  }
  ECUasGateway.domains = ECUasGateway.domains?.map(({ id }) => db.get('domains').find({ id }).value());
  if (ECUasGateway.domains?.length) {
    const { color, background } = ECUasGateway.domains[0];
    ECUasGateway.color = color;
    ECUasGateway.background = background;
  }

  ECUasGateway.connectedVMs = ECUasGateway.connectedVMs?.map(({ id }) => db.get('ecus').find({ id }).value());

  res.json({ type: 'ECUasGateway', gateway: ECUasGateway });
});

app.get('/gateways/:id', (req, res) => {
  const { db } = req.app;
  const { id } = req.params;

  const gateway = db.get('gateways').find({ id }).value();

  if (!gateway) {
    res.status(404).send('Controller not found.');
    return;
  }

  const gatewayWithVehicle = getControllerWithVehicle(db, gateway);

  res.json(gatewayWithVehicle);
});

app.get('/:entity/search', (req, res, next) => {
  const partialName = req.query.name.toLowerCase();

  const { db } = req.app;
  const records = db.get(req.params.entity).value();

  if (!records) {
    res.json([]);
    return;
  }
  const searchResult = records.filter(({ name }) => name.toLowerCase().includes(partialName));

  let fullResultData;
  switch (req.params.entity) {
    case entities.domains:
      fullResultData = searchResult.map((domain) => getDomainWithVehicle(db, domain));
      break;
    case entities.ecus:
      fullResultData = searchResult.map((ECU) => getECUWithDomain(db, ECU));
      break;
    case entities.functions:
      fullResultData = searchResult.map((functionItem) => getFunctionsWithDomain(db, functionItem));
      break;
    case entities.data:
      fullResultData = searchResult.map((data) => getDataWithDomain(db, data));
      break;
    case entities.users:
      fullResultData = searchResult;
      break;
    case entities.controls:
      fullResultData = searchResult;
      break;
    case entities.threats:
      fullResultData = searchResult;
      break;
    default:
      fullResultData = [];
  }
  res.json(fullResultData);
});

app.get('/domains', (req, res) => {
  const { vehicleId } = req.query;

  const { db } = req.app;
  const domains = db.get('domains').value();

  const domainsWithVehicles = domains.map((domain) => getDomainWithVehicle(db, domain));

  if (vehicleId) {
    const domainsForCurrentVehicle = domainsWithVehicles.filter((domain) => domain.vehicleId === vehicleId);
    res.json(domainsForCurrentVehicle);
    return;
  }

  res.json(domainsWithVehicles);
});

app.post('/domains', (req, res) => {
  const { db } = req.app;
  const domains = db.get('domains');
  const id = String(+new Date());
  const lastUpdate = format(new Date(), 'MM/dd/yyyy');

  domains.push({ id, lastUpdate, ...req.body }).write();

  res.status(200).send('Domain created successfully.');
});

app.get('/vehicleScheme/:id', (req, res) => {
  const { id } = req.params;
  const { db } = req.app;

  // temporary solution: without a deep copy, the entire schema is written in the entity domain and ECU
  const domains = JSON.parse(JSON.stringify(db.get('domains').value()));
  const ECUs = JSON.parse(JSON.stringify(db.get('ecus').value()));

  // don't display a direct link to the domain for nested ECUs
  const ECUsForDomain = ECUs.filter(
    ({ id }) =>
      !ECUs.some((ECU) => {
        const isConnected = ECU?.connectedECUs?.some((connectedECU) => connectedECU?.id === id);
        if (isConnected) {
          return true;
        }
        const isVM = ECU?.connectedVMs?.some((connectedVM) => connectedVM?.id === id);
        return isVM;
      })
  );

  const vehicleDomains = domains.filter(({ vehicleId }) => vehicleId === id);

  const architectureData = vehicleDomains?.map((vehicleDomain) => {
    const domainECUs = [];
    ECUsForDomain?.map((ECU) => {
      if (ECU.isGateway) {
        return ECU;
      }
      const ECUDomains = ECU.domains?.map((ecuDomain) => ecuDomain.id);
      if (ECUDomains.includes(vehicleDomain.id)) {
        const connectedECUsList = [];
        ECU.connectedECUs?.map((connectedECU) => {
          const connectedECUData = db.get('ecus').find({ id: connectedECU.id }).value();
          if (connectedECUData) {
            connectedECUsList.push(connectedECUData);
          }
          return connectedECU;
        });

        if (connectedECUsList.length) {
          ECU.connectedECUs = connectedECUsList;
        }

        const connectedVMsList = [];
        ECU.connectedVMs?.map((connectedVM) => {
          const connectedVMData = db.get('ecus').find({ id: connectedVM.id }).value();
          if (connectedVMData) {
            connectedVMsList.push(connectedVMData);
          }
          return connectedVMData;
        });

        if (connectedVMsList.length) {
          ECU.connectedVMs = connectedVMsList;
        }

        const { domains, ...restECU } = ECU;
        domainECUs.push(restECU);
      }
      return ECUDomains;
    });

    if (domainECUs.length) {
      vehicleDomain.ECUs = [...domainECUs];
    }
    return vehicleDomain;
  });

  res.json(architectureData);
});

app.post('/ecus', (req, res) => {
  const { db } = req.app;
  const ECUs = db.get('ecus');
  const id = String(+new Date());

  ECUs.push({ id, complianceLevel: 0, riskLevel: 'noInfo', safetyCriticalityLevel: 0, ...req.body }).write();

  res.status(200).send('ECU created successfully.');
});

app.get('/ecus', (req, res) => {
  const { vehicleId } = req.query;
  const { db } = req.app;
  const ECUs = db.get('ecus').value();
  if (vehicleId) {
    const ECUsForCurrentVehicle = ECUs.filter((ECU) => ECU?.vehicleId === vehicleId);
    res.json(ECUsForCurrentVehicle);
    return;
  }

  const ECUsWithDomains = ECUs.map((ECU) => getECUWithDomain(db, ECU));
  res.json(ECUsWithDomains);
});

app.get('/ecus/:id', (req, res) => {
  const { db } = req.app;
  const { id } = req.params;

  const ECU = db.get('ecus').find({ id }).value();

  if (!ECU) {
    res.status(404).send('ECU not found.');
    return;
  }

  const ECUWithDomains = getECUWithDomain(db, ECU);

  res.json(ECUWithDomains);
});

app.put('/ecus/:id', (req, res) => {
  const { db } = req.app;
  const { riskLevel, complianceLevel } = req.body;
  const { id } = req.params;
  const ecus = db.get('ecus');

  if (!ecus) {
    res.status(404).send(`ecus not found`);
    return;
  }

  ecus.find({ id }).assign({ riskLevel }).write();
  ecus.find({ id }).assign({ complianceLevel }).write();

  res.status(200).json(ecus);
});

app.get('/users', (req, res) => {
  const { db } = req.app;
  const users = db.get('users').value();

  const usersWithoutAdmin = users.filter(({ name }) => name !== 'admin');

  res.json(usersWithoutAdmin);
});

app.post('/tickets', (req, res) => {
  const { db } = req.app;
  const { name, type, elementId, elementName, elementType, status, userId, message, vehicleId } = req.body;

  const tickets = db.get('tickets');
  const id = Number(Date.now());

  const data = {
    id,
    name,
    type,
    elementId,
    elementName,
    elementType,
    status,
    userId,
    message,
    vehicleId,
    created: format(new Date(), 'MM/dd/yyyy'),
  };

  if (!tickets) {
    res.status(404).send('Tickets not found');
    return;
  }

  const elements = db.get(elementType);

  if (!elements) {
    res.status(404).send(`${elementType} not found`);
    return;
  }

  tickets.push(data).write();
  // update ECU/function ticketId
  elements.find({ id: elementId }).assign({ ticketId: id }).write();

  res.status(200).send('Ticket assigned successfully.');
});

app.post('/vehicles', (req, res) => {
  const { db } = req.app;
  const vehicleId = Number(Date.now()).toString();

  const vehicles = db.get('vehicles');
  const gateways = db.get('gateways');

  const { gateway, development, testing, compliancy, production, ...vehicle } = req.body;

  if (!vehicles) {
    res.status(404).send('Vehicles not found');
    return;
  }

  const photo = vehicle.photo ? 'https://rostov.masmotors.ru/colors/skoda-octaviacombi/1.png' : vehicle.logo;

  vehicles
    .push({
      ...vehicle,
      photo,
      riskLevel: 'noData',
      complianceLevel: null,
      raProgress: null,
      id: vehicleId,
      lastUpdate: new Date(),
      development: format(new Date(development), 'dd/MM/YYY'),
      testing: format(new Date(testing), 'dd/MM/YYY'),
      compliancy: format(new Date(compliancy), 'dd/MM/YYY'),
      production: format(new Date(production), 'dd/MM/YYY'),
    })
    .write();

  if (vehicle.haveGateway && gateways) {
    const id = Number(Date.now()).toString();
    gateways.push({ ...gateway, vehicleId, id }).write();
  }

  res.status(200).send('Vehicle is created successfully.');
});

app.post('/login', (req, res) => {
  const { name, password: pwd } = req.body;
  const { db } = req.app;
  const user = db.get('users').find({ name, password: pwd }).value();
  if (!user) {
    return res.status(404).send('User with given credentials does not exist');
  }
  const { password, ...userRest } = user;
  return res.json(userRest);
});

app.get('/functions', (req, res) => {
  const { db } = req.app;
  const functions = db.get('functions').value();

  const functionsWithDomains = functions.map((functionItem) => getFunctionsWithDomain(db, functionItem));

  res.json(functionsWithDomains);
});

app.get('/data', (req, res) => {
  const { db } = req.app;
  const data = db.get('data').value();

  const dataWithDomains = data.map((data) => getDataWithDomain(db, data));

  res.json(dataWithDomains);
});

app.get('/tickets', (req, res) => {
  const { db } = req.app;
  const tickets = db.get('tickets').value();
  const fullData = tickets.map((ticket) => getTicketWithUser(db, ticket));
  res.json(fullData);
});

app.get('/tickets/:id', (req, res) => {
  const { db } = req.app;
  const { id } = req.params;

  const ticket = db
    .get('tickets')
    .find({ id: Number(id) })
    .value();

  if (!ticket) {
    res.status(404).send('Ticket not found.');
    return;
  }

  const ticketWithUser = getTicketWithUser(db, ticket);

  res.json(ticketWithUser);
});

app.get('/vehicles/:id/tickets', (req, res) => {
  const { db } = req.app;
  const { id } = req.params;

  const allTickets = db.get('tickets').value();

  const vehicleTickets = allTickets.filter(({ vehicleId }) => vehicleId === id);

  const openTickets = vehicleTickets.filter(({ status }) => status === 'open');
  const inProgressTickets = vehicleTickets.filter(({ status }) => status === 'progress');
  const closedTickets = vehicleTickets.filter(({ status }) => status === 'closed');

  res.status(200).json({
    open: openTickets?.length,
    inProgress: inProgressTickets?.length,
    closed: closedTickets?.length,
  });
});

app.get('/threats', (req, res) => {
  const { db } = req.app;
  const { conceptId } = req.query;

  const threats = db.get('threats');

  if (conceptId) {
    const controlThreats = db.get('controlThreats').value();

    const securityConceptTreats = threats
      .filter((threat) => threat.securityConceptId === conceptId)
      .map((threat) => {
        const controls = controlThreats
          .filter(({ threatId }) => threatId === threat.id)
          .map(({ controlId }) => db.get('controls').find({ id: controlId }));
        return { ...threat, controls };
      });

    res.status(200).json(securityConceptTreats || []);
    return;
  }
  res.status(200).json(threats);
});

app.get('/threats/:id', (req, res) => {
  const { db } = req.app;
  const { id } = req.params;

  const threat = db.get('threats').find({ id }).value();

  let authorName = getUserInfo(db, threat.comment.authorId)?.name;

  if (!authorName) {
    authorName = 'admin';
  }
  const { comment, checked } = threat;

  const commentWithAuthorName = { comment, checked, authorName };

  res.status(200).json(commentWithAuthorName);
});

app.get('/controls/:id', (req, res) => {
  const { db } = req.app;
  const { id } = req.params;

  const threat = db.get('controls').find({ id }).value();

  let authorName = getUserInfo(db, threat.comment.authorId)?.name;

  if (!authorName) {
    authorName = 'admin';
  }
  const { comment, checked } = threat;

  const commentWithAuthorName = { comment, checked, authorName };

  res.status(200).json(commentWithAuthorName);
});

app.get('/controlThreats', (req, res) => {
  const { controlId } = req.query;

  const { db } = req.app;

  const controlThreats = db.get('controlThreats').value();

  const threatsId = controlThreats.filter((el) => el.controlId === controlId).map(({ threatId }) => threatId);

  const allThreats = threatsId.map((id) => db.get('threats').find({ id }).value());

  res.json(allThreats);
});

app.put('/threats', (req, res) => {
  const { db } = req.app;
  const { elementType, comment, id, checked, dueDate } = req.body;

  const items = db.get(elementType.toLowerCase());
  if (!items) {
    res.status(404).send('threats not found');
    return;
  }

  const elements = db.get(elementType.toLowerCase());

  if (!elements) {
    res.status(404).send(`${elementType} not found`);
    return;
  }

  if (comment) {
    elements.find({ id }).assign({ comment }).write();
  }

  if (checked !== undefined) {
    elements.find({ id }).assign({ checked }).write();
  }
  if (dueDate) {
    elements.find({ id }).assign({ dueDate }).write();
  }
  res.status(200).json(comment);
});

app.get('/controls', (req, res) => {
  const { db } = req.app;
  const { threatId } = req.query;

  let controls;

  if (threatId) {
    const controlThreats = db.get('controlThreats').value();

    const controlIds = controlThreats.filter((el) => el.threatId === threatId).map(({ controlId }) => controlId);

    controls = controlIds.map((id) => db.get('controls').find({ id }).value());
  } else {
    controls = db.get('controls').value();
  }

  if (!controls) {
    res.status(404).send('Controls not found');
    return;
  }

  const securityConceptsComments = db.get('securityConceptsControls').value();

  const controlsWithConceptComments = controls.map((control) => {
    const commentsIds = securityConceptsComments
      .filter(({ controlId }) => controlId === control.id)
      .map(({ commentId }) => commentId);
    const comments = commentsIds.map((id) => getCommentWithAuthor(db, id));
    return { ...control, securityConceptComments: comments };
  });

  res.status(200).json(controlsWithConceptComments);
});

app.put('/vehicles/:id', (req, res) => {
  const { db } = req.app;
  const { riskLevel, complianceLevel, raProgress } = req.body;
  const { id } = req.params;
  const vehicles = db.get('vehicles');

  if (!vehicles) {
    res.status(404).send(`vehicles not found`);
    return;
  }

  vehicles.find({ id }).assign({ riskLevel }).write();
  vehicles.find({ id }).assign({ raProgress }).write();
  vehicles.find({ id }).assign({ complianceLevel }).write();

  res.status(200).json(vehicles);
});

app.get('/securityConcepts', (req, res) => {
  const { db } = req.app;
  const { requirementId } = req.query;
  const concepts = db.get('securityConcepts').value();

  if (!concepts) {
    res.status(404).send('Security concepts not found');
    return;
  }

  if (requirementId) {
    const subRequirements = db.get('subRequirements').value();
    const conceptsByRequirement = concepts.filter((concept) => concept.requirementId === requirementId);

    const conceptsWithSubReqs = conceptsByRequirement.map((concept) => ({
      ...concept,
      subRequirements: subRequirements.filter(({ conceptId }) => conceptId === concept.id),
    }));

    res.status(200).json(conceptsWithSubReqs);
  }

  res.status(200).json(concepts);
});

app.put('/controls', (req, res) => {
  const { db } = req.app;
  const { elementType, comment, id, checked, dueDate } = req.body;

  const items = db.get(elementType.toLowerCase());
  if (!items) {
    res.status(404).send('Controls not found');
    return;
  }

  const elements = db.get(elementType.toLowerCase());

  if (!elements) {
    res.status(404).send(`${elementType} not found`);
    return;
  }
  if (comment) {
    elements.find({ id }).assign({ comment }).write();
  }
  if (checked !== undefined) {
    elements.find({ id }).assign({ checked }).write();
  }
  if (dueDate) {
    elements.find({ id }).assign({ dueDate }).write();
  }
  res.status(200).json(comment);
});

app.put('/domains', (req, res) => {
  const { db } = req.app;
  const { id, riskLevel } = req.body;

  const items = db.get('domains');
  if (!items) {
    res.status(404).send('domains not found');
    return;
  }

  items.find({ id }).assign({ riskLevel }).write();

  res.status(200).json(items);
});

app.get('/groups', (req, res) => {
  const { db } = req.app;
  const groups = db.get('groups').value();
  const controls = db.get('controls');

  const sortedGroup = groups.map((group) => ({
    ...group,
    controls: group.controlId.map((id) => controls.find({ id })),
  }));
  res.json(sortedGroup);
});

app.get('/alertFeeds', (req, res) => {
  const { db } = req.app;
  const { alertId } = req.query;
  if (!alertId) {
    res.status(404).send('Pass alert id.');
    return;
  }
  const alert = db.get('alerts').find({ id: alertId }).value();
  const riskLevelProgress = db.get('riskLevelProgress');
  const ECUs = db.get('ecus').value();
  const vehicleFeeds = alert?.vehicleIds?.map((id) => {
    const vehicle = db.get('vehicles').find({ id }).value();
    const vehicleProgress = riskLevelProgress.find({ id: vehicle?.riskLevelProgressId }).value();
    return {
      ...getVehicleWithAuthor(db, vehicle),
      ECUs: ECUs.filter((ECU) => ECU?.vehicleId === vehicle.id),
      riskLevelProgress: vehicleProgress?.progress,
    };
  });
  res.json(vehicleFeeds);
});

app.get('/ecusForVehicle/:id', (req, res) => {
  const { id } = req.params;
  const { db } = req.app;

  if (!id) {
    res.status(404).send('Pass the vehicle ID.');
    return;
  }
  const ECUs = db.get('ecus').value();

  if (!ECUs?.length) {
    res.status(404).send('Controller not found.');
    return;
  }

  const vehicleECUs = ECUs?.filter((ECU) => ECU.vehicleId === id);

  res.json(vehicleECUs);
});

app.db = router.db;
app.use(middlewares);
app.use(router);
app.listen(port, hostname, () => console.log(`🟢 Server running at http://${hostname}:${port}/ 🟢`));
