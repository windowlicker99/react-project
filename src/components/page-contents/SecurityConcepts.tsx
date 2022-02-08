import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Aside } from '@components/common/Aside';
import { Heading } from '@components/common/Heading';
import { Table } from '@components/page-contents/Table';
import { totalElement } from '@store/selectors/pagination';
import { selectColumnsWithDropdownList } from '@store/selectors/columns';
import { convertSecurityConceptsToTabs } from '@utils/converters';
import { getData } from '@utils/getElements';
import { API_PATHS } from '@constants/paths';
import { Preloader } from '../common/Preloader';

export const SecurityConcepts: FC = () => {
  const [conceptsTabs, setConceptsTabs] = useState([]);

  const [loading, setLoading] = useState(true);

  const threatsQuantity = useSelector(totalElement);
  const columns = useSelector(selectColumnsWithDropdownList);

  const getConcepts = async () => {
    const newConcepts = await getData(API_PATHS.securityConcepts);
    const tabs = convertSecurityConceptsToTabs(newConcepts);
    setConceptsTabs(tabs);
  };

  useEffect(() => {
    getConcepts();
  }, []);

  return (
    <Tabs className="page-holder">
      <div className="aside-holder">
        <Heading headingText="Security Concepts" headingNumber={`(${conceptsTabs.length})`} />
        <Aside asideStatus="small">
          <TabList>
            {conceptsTabs.map((tab) => (
              <Tab className="tab-item" selectedClassName="active" key={tab.name}>
                <div className="tab-panel">
                  <span className="tab-content-name">{tab.name}</span>
                </div>
              </Tab>
            ))}
          </TabList>
        </Aside>
      </div>

      {conceptsTabs.map((tab) => (
        <TabPanel className="tab-content" key={tab.name}>
          <Heading headingText="Threats" headingNumber={`(${threatsQuantity})`} />
          <div className="box-table">
            <Table
              changeLoadingState={setLoading}
              tableType={tab.type}
              columns={columns}
              params={tab.params}
              showHeader
              withoutPagination
            />
          </div>
        </TabPanel>
      ))}
      {loading ? <Preloader /> : null}
    </Tabs>
  );
};
