import React, { FC, useState } from 'react';
import { Tab, TabPanel, TabList, Tabs } from 'react-tabs';
import { useSelector } from 'react-redux';
import { PageSearchbar } from '@components/page-contents/PageSearchbar';
import { Table } from '@components/page-contents/Table';
import { Footer } from '@components/modules/Footer';
import classNames from 'classnames';
import { Preloader } from '@components/common/Preloader';
import { Btn } from '@components/common/form-controls/Btn';
import { selectColumnsWithDropdownList } from '@/store/selectors/columns';
import { threatsTabs } from '@/constants/tabsLists';

export const ThreatsPage: FC = () => {
  const customizedColumns = useSelector(selectColumnsWithDropdownList);

  const [searchText, setSearchText] = useState<string>('');

  const [loading, setLoading] = useState(true);

  const [selectedFindingsTabIndex, setSelectedFindingsTabIndex] = useState(0);

  return (
    <Tabs
      className="content"
      id="threats"
      onSelect={setSelectedFindingsTabIndex}
      selectedIndex={selectedFindingsTabIndex}
      selectedTabPanelClassName="box-table box-not-radius"
    >
      <div className="box page-controls">
        <PageSearchbar
          searchText={searchText}
          onSearch={setSearchText}
          onCustomizeColumnsClick={() => console.log('temp')} // temp
          btnText="Create Threat"
          btnIcon="icon-plus"
          showFilterBtn={false}
        />
      </div>

      <TabList className="tabs-box">
        {threatsTabs.map((tab, i) => (
          <Tab key={tab.name}>
            <Btn
              btnStatus={classNames('btn-stretch', selectedFindingsTabIndex === i ? 'btn-lg-primary' : 'btn-lg-info')}
              btnText={tab.name}
            />
          </Tab>
        ))}
      </TabList>

      {threatsTabs.map((tab) => (
        <TabPanel key={tab.name}>
          <Table
            changeLoadingState={setLoading}
            columns={customizedColumns}
            setSearchText={setSearchText}
            searchText={searchText}
            tableType={tab.type}
          />
        </TabPanel>
      ))}
      {loading ? <Preloader /> : null}
      <Footer />
    </Tabs>
  );
};
