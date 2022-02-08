import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Aside } from '@components/common/Aside';
import { Heading } from '@components/common/Heading';
import { Table } from '@components/page-contents/Table';
import { totalElement } from '@store/selectors/pagination';
import { selectColumnsWithDropdownList } from '@store/selectors/columns';
import { convertRequirementsToTabs } from '@utils/converters';
import { getData } from '@utils/getElements';
import { API_PATHS } from '@constants/paths';
import { Preloader } from '../common/Preloader';

export const SecurityRequirements: FC = () => {
  const [requirementsTabs, setRequirementsTabs] = useState([]);

  const [loading, setLoading] = useState(true);

  const threatsQuantity = useSelector(totalElement);
  const columns = useSelector(selectColumnsWithDropdownList);

  const getRequirements = async () => {
    const requirements = await getData(API_PATHS.securityRequirements);
    const tabs = convertRequirementsToTabs(requirements);
    setRequirementsTabs(tabs);
  };

  useEffect(() => {
    getRequirements();
  }, []);

  return (
    <Tabs className="page-holder">
      <div className="aside-holder">
        <Heading headingText="Security Requirements" headingNumber={`(${requirementsTabs.length})`} />
        <Aside asideStatus="small">
          <TabList>
            {requirementsTabs.map((tab) => (
              <Tab className="tab-item" selectedClassName="active" key={tab.name}>
                <div className="tab-panel">
                  <span className="tab-content-name">{tab.name}</span>
                  <span className="tab-content-subname">Hardware Hardning</span>
                </div>
              </Tab>
            ))}
          </TabList>
        </Aside>
      </div>

      {requirementsTabs.map((tab) => (
        <TabPanel className="tab-content" key={tab.name}>
          <Heading headingText="Security Concepts" headingNumber={`(${threatsQuantity})`} />
          <div className="box-table">
            <Table
              changeLoadingState={setLoading}
              tableType={tab.type}
              columns={columns}
              params={tab.params}
              withoutPagination
            />
          </div>
        </TabPanel>
      ))}

      {loading ? <Preloader /> : null}
    </Tabs>
  );
};
