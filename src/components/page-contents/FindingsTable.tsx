import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import classNames from 'classnames';
import { Table } from '@components/page-contents/Table';
import { Btn } from '@components/common/form-controls/Btn';
import { selectColumnsList } from '@store/selectors/columns';
import { EFindings } from '@/interfaces/enums';
import { findingsTabs } from '@/constants/tabsLists';
import { Preloader } from '../common/Preloader';

interface IFindingsTableProps {
  selectedTabIndex: number;
  onSelectTab: (index: number) => void;
}

export const FindingsTable: FC<IFindingsTableProps> = ({ selectedTabIndex, onSelectTab }) => {
  const columns = useSelector(selectColumnsList);
  const [loading, setLoading] = useState(true);

  return (
    <Tabs onSelect={onSelectTab} selectedIndex={selectedTabIndex} className="box-table">
      <TabList className="tabs-box">
        {findingsTabs.map((tab, i) => (
          <Tab>
            <Btn
              btnStatus={classNames('btn-stretch', selectedTabIndex === i ? 'btn-lg-primary' : 'btn-lg-info')}
              btnText={tab.name}
            />
          </Tab>
        ))}
      </TabList>

      {findingsTabs.map((tab) => (
        <TabPanel className="tab-content" key={tab.name}>
          {tab.name === EFindings.detailed && <div className="table-panel-info">General Information</div>}
          <div className="box-table"> 
          <Table
              changeLoadingState={setLoading}
              tableType={tab.type}
              columns={columns}
              params={tab.params}
              showHeader
            />
          </div>
        </TabPanel>
      ))}
      {loading ? <Preloader /> : null}
    </Tabs>
  );
};
