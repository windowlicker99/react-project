import React, { FC, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Aside } from '@components/common/Aside';
import { Heading } from '@components/common/Heading';
import { convertTestsToTabs } from '@utils/converters';
import { getData } from '@utils/getElements';
import { API_PATHS } from '@constants/paths';
import { FindingsTable } from './FindingsTable';

export const PenetrationTests: FC = () => {
  const [testTabs, setConceptsTabs] = useState([]);
  const [selectedFindingsTabIndex, setSelectedFindingsTabIndex] = useState(0);

  const getTests = async () => {
    const newTests = await getData(API_PATHS.tests);
    const tabs = convertTestsToTabs(newTests);
    setConceptsTabs(tabs);
  };

  const onSelectFindingsTab = (index: number) => {
    setSelectedFindingsTabIndex(index);
  };

  useEffect(() => {
    getTests();
  }, []);

  return (
    <Tabs className="page-holder">
      <div className="aside-holder">
        <Heading headingText="Penetration Tests" headingNumber={`(${testTabs.length})`} />
        <Aside asideStatus="small">
          <TabList>
            {testTabs.map((tab) => (
              <Tab className="tab-item" selectedClassName="active" key={tab.name}>
                <div className="tab-panel">
                  <span className="tab-content-name">{tab.name}</span>
                </div>
              </Tab>
            ))}
          </TabList>
        </Aside>
      </div>

      {testTabs.map((tab) => (
        <TabPanel className="tab-content mt-43" key={tab.name}>
          <FindingsTable selectedTabIndex={selectedFindingsTabIndex} onSelectTab={onSelectFindingsTab} />
        </TabPanel>
      ))}
    </Tabs>
  );
};
