import React, { FC, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { securityDevelopmentTabsList } from '@constants/tabsLists';
import { currentElementSelector } from '@/store/selectors/element';
import { EAside, ESecurityTypes } from '@/interfaces/enums';
import { getElement } from '@/utils/getElement';
import { setHeader } from '@/store/slices/headerSlice';
import { Btn } from '../common/form-controls/Btn';

export const SecurityPage: FC = () => {
  const dispatch = useDispatch();
  const [showButtons, setShowButtons] = useState(false);
  const currentElement = useSelector(currentElementSelector);

  const getECU = async () => {
    const ECU = await getElement(currentElement);
    dispatch(setHeader([ECU.name]));
  };

  const onSelect = (index: number) => {
    if (securityDevelopmentTabsList[index].type === ESecurityTypes.penetrationTests) {
      setShowButtons(true);
      return;
    }
    setShowButtons(false);
  };

  useEffect(() => {
    if (currentElement.type === EAside.ecu) {
      getECU();
    }
  }, []);

  return (
    <Tabs className="content" id="security" selectedTabPanelClassName="page-content" onSelect={onSelect}>
      <div className="box page-controls">
        <div className="page-controls-content tabs-bottom">
          <TabList className="page-tabs">
            {securityDevelopmentTabsList.map((tab) => (
              <Tab className="page-tabs-item" selectedClassName="page-tabs-item active" key={tab.name}>
                {tab.name}
              </Tab>
            ))}
          </TabList>
          {showButtons && (
            <div className="page-controls-item mb-20">
              <Btn btnStatus="btn-lg-primary" btnIcon="icon-plus" btnText="Add Report" />
              <Btn btnStatus="btn-lg-outline ml-15" btnIcon="" btnText="Initiate PT" />
              <Btn btnStatus="btn-xs-primary ml-15" btnIcon="icon-user-plus" />
            </div>
          )}
        </div>
      </div>

      {securityDevelopmentTabsList.map((tab) => (
        <TabPanel key={tab.name}>{tab.component}</TabPanel>
      ))}
    </Tabs>
  );
};
