import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  name: Yup.string().required('Required').min(4, 'Minimum 4 symbols').max(15, 'Maximum 15 symbols'),
  password: Yup.string().required('Required').min(6, 'Minimum 6 symbols').max(50, 'Maximum 50 symbols'),
});

const validationShapeForSelect = Yup.object().shape({
  value: Yup.string().required('Required'),
});

export const ECUDetailsValidationScheme = Yup.object().shape({
  name: Yup.string().required('Required'),
  operationSystem: Yup.string().required('Required'),
  firmwareVersion: Yup.string().required('Required'),
  domains: Yup.array()
    .of(
      Yup.object().shape({
        id: validationShapeForSelect.required('Required'),
        communication: validationShapeForSelect.required('Required'),
      })
    )
    .required('Required'),
});

export const ECUQuestionnaireValidationScheme = Yup.object().shape({
  connectedECUs: Yup.array().when('indirectCommunicationChannel', {
    is: true,
    then: Yup.array().of(
      Yup.object().shape({
        id: validationShapeForSelect.required('Required'),
        communication: validationShapeForSelect.required('Required'),
      })
    ),
  }),
});

export const InitiateRiskAssessmentValidationSchema = Yup.object().shape({
  relatedThreats: Yup.array().of(
    Yup.object()
      .default({})
      .shape({
        comment: Yup.string().when('checked', {
          is: false,
          then: Yup.string().required('Please, add a comment'),
        }),
      })
  ),
  relatedControls: Yup.array().of(
    Yup.object()
      .default({})
      .shape({
        comment: Yup.string().when('checked', {
          is: false,
          then: Yup.string().required('Please, add a comment'),
        }),
      })
  ),
});

export const domainValidationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  domainUsage: Yup.string().required('Required'),
  communication: Yup.array().of(validationShapeForSelect.required('Required')).required('Required'),
});

export const vehicleBasicInfoValidationScheme = Yup.object().shape({
  brand: Yup.object().required('Required'),
  model: Yup.string().required('Required'),
  platform: Yup.string().required('Required'),
  phase: Yup.object().required('Required'),
  gateway: Yup.object().when('haveGateway', {
    is: true,
    then: Yup.object({
      name: Yup.string().required('Required'),
    }),
  }),
});

export const vehicleMilestoneDatesValidationScheme = Yup.object().shape({
  development: Yup.date().required('Required'),
  testing: Yup.date().min(Yup.ref('development'), 'Incorrect date').required('Required'),
  compliancy: Yup.date().min(Yup.ref('testing'), 'Incorrect date').required('Required'),
  production: Yup.date().min(Yup.ref('compliancy'), 'Incorrect date').required('Required'),
});
