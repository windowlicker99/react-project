import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Heading } from '@components/common/Heading';
import { Table } from '@components/page-contents/Table';
import { Aside } from '@components/common/Aside';
import { CardAlert } from '@components/common/CardAlert';
import { ETableTypes, IAlert } from '@interfaces/interfaces';
import { selectColumnsWithExpandAllDropdownList } from '@store/selectors/columns';
import { getData } from '@utils/getElements';
import { API_PATHS } from '@constants/paths';
import { Preloader } from '@components/common/Preloader';

export const ExternalFeedsPage: FC = () => {
  const [alerts, setAlerts] = useState<IAlert[]>([]);
  const [loading, setLoading] = useState(true);

  const columns = useSelector(selectColumnsWithExpandAllDropdownList);

  const getAlerts = async () => {
    const newAlerts: IAlert[] = await getData(API_PATHS.alerts);
    setAlerts(newAlerts);
  };

  useEffect(() => {
    getAlerts();
  }, []);

  return (
    <Tabs className="page-holder" id="feeds">
      <div className="aside-holder">
        {!loading ? <Heading headingText="Car Alerts" headingNumber={`(${alerts.length})`} /> : null}
        <Aside asideStatus="small transparent">
          <TabList>
            {alerts.map((alert) => (
              <Tab className="tab-item" selectedClassName="active" key={`tab-${alert.name}`}>
                <CardAlert alert={alert} />
              </Tab>
            ))}
          </TabList>
        </Aside>
      </div>

      {alerts.map((alert) => (
        <TabPanel className="tab-content" key={`tabpanel-${alert.name}`}>
          <Heading headingText="Vehicle Types" headingNumber={`(${alert?.vehicleIds.length})`} subtitle={alert.name} />
          <div className="box-table">
            <Table
              changeLoadingState={setLoading}
              tableType={ETableTypes.feeds}
              columns={columns}
              params={{ alertId: alert.id }}
              showHeader
            />
          </div>
        </TabPanel>
      ))}
      {loading ? <Preloader /> : null}
    </Tabs>
  );
};
