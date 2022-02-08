import React, { FC, useState } from 'react';
import { Tab, TabPanel, TabList, Tabs } from 'react-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { PageFilter } from '@components/page-contents/PageFilter';
import { PageSearchbar } from '@components/page-contents/PageSearchbar';
import { Table } from '@components/page-contents/Table';
import { elementsTabsList } from '@constants/tabsLists';
import { ModalCenter } from '@components/modules/ModalCenter';
import { CustomiseModalContent } from '@components/modal-content/CustomiseModalContent';
import { selectColumnsInitialValues, selectColumnsList, selectColumnsFieldsList } from '@store/selectors/columns';
import { updateDisplayedColumns } from '@store/slices/columnsSlice';
import { Preloader } from '@components/common/Preloader';
import { Footer } from '@components/modules/Footer';

export const ElementsPage: FC = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const [isOpenCustomizeModal, setIsOpenCustomizeColumnsModal] = useState<boolean>(false);
  const initialValues = useSelector(selectColumnsInitialValues);
  const columnsList = useSelector(selectColumnsList);
  const columnsFields = useSelector(selectColumnsFieldsList);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(updateDisplayedColumns({ displayColumnsList: values }));
    },
  });

  const onOpenCustomizeModal = () => {
    setIsOpenCustomizeColumnsModal(true);
  };

  const onApplyCustomizeModal = () => {
    formik.submitForm();
    setIsOpenCustomizeColumnsModal(false);
  };

  const onCloseCustomizeModal = () => {
    formik.resetForm();
    setIsOpenCustomizeColumnsModal(false);
  };

  return (
    <>
      <Tabs className="content" id="elements" selectedTabPanelClassName="box-table elements-content">
        <div className="box page-controls">
          <PageSearchbar
            searchText={searchText}
            onSearch={setSearchText}
            onCustomizeColumnsClick={onOpenCustomizeModal}
            btnText="Customize Columns"
            btnIcon="icon-columns"
          />
          <PageFilter />
          <TabList className="page-tabs">
            {elementsTabsList.map((tab) => (
              <Tab className="page-tabs-item" selectedClassName="page-tabs-item active" key={tab.name}>
                {tab.name}
              </Tab>
            ))}
          </TabList>
        </div>

        {elementsTabsList.map((tab) => (
          <TabPanel key={tab.name}>
            <Table
              columns={columnsList}
              changeLoadingState={setLoading}
              setSearchText={setSearchText}
              searchText={searchText}
              tableType={tab.type}
              showHeader
            />
          </TabPanel>
        ))}
        <Footer />
      </Tabs>

      {loading ? <Preloader /> : null}

      <ModalCenter
        title="Customize columns"
        isOpen={isOpenCustomizeModal}
        onApply={onApplyCustomizeModal}
        onClose={onCloseCustomizeModal}
      >
        <CustomiseModalContent columns={columnsFields} {...formik} />
      </ModalCenter>
    </>
  );
};
