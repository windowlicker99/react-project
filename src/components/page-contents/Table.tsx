import React, { FC, useEffect, useState } from 'react';
import { useTable, CellValue, Column, useExpanded, usePagination } from 'react-table';
import { useDispatch } from 'react-redux';
import { ControlDropdown } from '@components/common/ControlDropdown';
import { TableDropdown } from '@components/common/TableDropdown';
import { RequirementDropdown } from '@components/common/RequirementDropdown';
import { PropertiesCard } from '@components/common/PropertiesCard';
import { ControlListDropdown } from '@components/common/ControlListDropdown';
import { FeedsECUDropdown } from '@components/common/FeedsECUDropdown';
import {
  setNextPage,
  setPrevPage,
  currentPage,
  pageAmount,
  pickPage,
  disableNext,
  disablePrev,
  currentTab,
  totalElement,
  totalElementOnPage,
} from '@store/slices/paginationSlice';
import { changeType } from '@store/slices/columnsSlice';
import { getTableItems, getSearchResults } from '@utils/getTableItems';
import { getColumnsWithFilter } from '@utils/getColumnsWithFilter';
import { ETableTypes, IParams } from '@interfaces/interfaces';
import { TRows } from '@interfaces/types';
import { EThreatsControlsPath } from '@interfaces/enums';

interface ITableProps {
  tableType: ETableTypes;
  changeLoadingState: (props: boolean) => void;
  columns: Column[];
  searchText?: string;
  setSearchText?: (arg0: string) => void;
  updateContent?: boolean;
  params?: IParams;
  showHeader?: boolean;
  withoutPagination?: boolean;
}

export const Table: FC<ITableProps> = ({
  updateContent,
  changeLoadingState,
  tableType,
  params = {},
  columns,
  searchText,
  setSearchText,
  showHeader = false,
  withoutPagination = false,
}) => {
  const dispatch = useDispatch();
  const [tableRows, setTableRows] = useState<TRows>([]);
  const [previousExpandedRows, setPreviousExpandedRows] = useState([]);
  const [columnsWithFilter, setColumnsWithFilter] = useState([]);

  const getRows = async () => {
    changeLoadingState(true);

    const items = await getTableItems(tableType, params);
    setTableRows(items);
    changeLoadingState(false);
  };

  const getSearchedRows = async () => {
    changeLoadingState(true);

    const items = await getSearchResults(tableType, searchText);
    setTableRows(items);

    changeLoadingState(false);
  };

  useEffect(() => {
    if (searchText) {
      getSearchedRows();
      return;
    }
    getRows();
  }, [searchText]);

  useEffect(() => {
    getRows();
    dispatch(changeType({ type: tableType }));
    const columnsNames = getColumnsWithFilter(tableType);
    setColumnsWithFilter(columnsNames);

    if (searchText !== undefined) {
      setSearchText('');
    }
  }, [tableType, updateContent]);

  const {
    rows,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    gotoPage,
    prepareRow,
    setHiddenColumns,
    state: { pageIndex },
    setPageSize,
  } = useTable(
    {
      columns,
      data: tableRows,
      initialState: {
        pageIndex: 0,
        pageSize: 8,
      },
    },
    useExpanded,
    usePagination
  );

  useEffect(() => {
    if (withoutPagination && rows?.length) {
      setPageSize(rows.length);
    }
  }, [rows]);

  const collapseSubRows = () =>
    previousExpandedRows.forEach((row) => {
      const idParts = row.id.split('.');

      if (idParts.length < 2) {
        return;
      }

      const parent = rows.find((row) => row.id === idParts[0]);

      if (parent && !parent.isExpanded && row.isExpanded) {
        row.toggleRowExpanded();
      }
    });

  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

  useEffect(() => {
    if (
      tableType === ETableTypes.conceptThreats ||
      tableType === ETableTypes.securityConcepts ||
      tableType === ETableTypes.controlGroups
    ) {
      collapseSubRows();
      setPreviousExpandedRows(rows);
    }
  }, [rows]);

  dispatch(setNextPage(nextPage));
  dispatch(setPrevPage(previousPage));
  dispatch(pickPage(gotoPage));
  dispatch(currentPage(pageIndex));
  dispatch(pageAmount(Math.ceil(tableRows.length / 8)));
  dispatch(disablePrev(canPreviousPage));
  dispatch(disableNext(canNextPage));
  dispatch(
    currentTab(
      (tableType === 'controlGroups' && 'Controls') ||
        (tableType === 'threatsOem' && 'Threats') ||
        (tableType === 'controlGroupsOem' && 'Controls') ||
        capitalizeFirstLetter(tableType)
    )
  );
  dispatch(totalElement(tableRows.length));
  dispatch(totalElementOnPage(page.length));

  useEffect(() => {
    let columnsToHide: string[] = [];
    if (tableType === ETableTypes.vehicles) {
      columnsToHide = ['name', 'id'];
    }
    setHiddenColumns([
      'photo',
      'logo',
      'control',
      'controlInfo',
      'details',
      'ECUs',
      'development',
      'production',
      'testing',
      'compliancy',
      ...columnsToHide,
    ]);
  }, [columns]);

  return (
    <>
      <table className="table" {...getTableProps()}>
        {showHeader && (
          <thead className="table-header">
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()} className="table-row">
                {headerGroup.headers.map((column) => (
                  <th className="table-col" {...column.getHeaderProps()} key={column.id}>
                    <div className="table-header-inner">
                      <span className="table-header-title">{column.render('Header')}</span>
                      <div className="table-filter">
                        {columnsWithFilter.includes(column.id) && (
                          <>
                            <button type="button" className="table-filter-btn">
                              <span className="icon-arrow-full-up" />
                            </button>
                            <button type="button" className="table-filter-btn">
                              <span className="icon-arrow-full-down" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        )}
        <tbody className="table-body" {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            switch (tableType) {
              case ETableTypes.vehicles:
                return (
                  <React.Fragment key={row.id}>
                    <tr {...row.getRowProps()} className="table-row">
                      {row.cells.map((cell: CellValue) => (
                        <td className="table-col" {...cell.getCellProps()} key={cell.column.id}>
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                    {row.isExpanded && (
                      <tr>
                        <td colSpan={99}>
                          <TableDropdown
                            id={row.values.id}
                            name={row.values.name}
                            logo={row.values.logo}
                            photo={row.values.photo}
                            model={row.values.model}
                            currentPhase={row.values.phase}
                            percentage={row.values.complianceLevel.props.percentage}
                          />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              case ETableTypes.conceptThreats:
                return (
                  <React.Fragment key={row.id}>
                    {row.values.control ? (
                      <ControlDropdown
                        control={row.values.control}
                        showExpandedInfo={row.isExpanded}
                        expander={row.cells[0]}
                      />
                    ) : (
                      <tr {...row.getRowProps()} className="table-row" key={row.id}>
                        {row.cells.map((cell: CellValue) => (
                          <td className="table-col" {...cell.getCellProps()} key={cell.id}>
                            {cell.render('Cell')}
                          </td>
                        ))}
                      </tr>
                    )}
                  </React.Fragment>
                );
              case ETableTypes.securityConcepts:
                return (
                  <React.Fragment key={row.id}>
                    {row.values.subRequirement ? (
                      <RequirementDropdown
                        requirement={row.values.subRequirement}
                        showExpandedInfo={row.isExpanded}
                        expander={row.cells[0]}
                      />
                    ) : (
                      <tr {...row.getRowProps()} className="table-row" key={row.id}>
                        {row.cells.map((cell: CellValue) => (
                          <td className="table-col" {...cell.getCellProps()} key={cell.id}>
                            {cell.render('Cell')}
                          </td>
                        ))}
                      </tr>
                    )}
                  </React.Fragment>
                );
              case ETableTypes.threats:
                return (
                  <React.Fragment key={row.id}>
                    <tr {...row.getRowProps()} className="table-row">
                      {row.cells.map((cell: CellValue) => (
                        <td className="table-col" {...cell.getCellProps()} key={cell.column.id}>
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                    {row.isExpanded && (
                      <tr>
                        <td colSpan={99}>
                          <PropertiesCard type={EThreatsControlsPath.threats} content={row.values.details} />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );

              case ETableTypes.controlGroups:
                return (
                  <React.Fragment key={row.id}>
                    {row.values.control ? (
                      <ControlListDropdown
                        control={row.values.control}
                        showExpandedInfo={row.isExpanded}
                        expander={row.cells[0]}
                      />
                    ) : (
                      <tr key={row.id} {...row.getRowProps()} className="table-row">
                        {row.cells.map((cell: CellValue) => (
                          <td className="table-col controls" {...cell.getCellProps()} key={cell.column.id}>
                            {cell.render('Cell')}
                          </td>
                        ))}
                      </tr>
                    )}
                  </React.Fragment>
                );

              case ETableTypes.feeds:
                return (
                  <React.Fragment key={row.id}>
                    <tr key={row.id} {...row.getRowProps()} className="table-row">
                      {row.cells.map((cell: CellValue) => (
                        <td className="table-col" {...cell.getCellProps()} key={cell.column.id}>
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                    {row.isExpanded && (
                      <tr>
                        <td colSpan={99}>
                          <FeedsECUDropdown ECUs={row.values.ECUs} />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );

              default:
                return (
                  <tr key={row.id} {...row.getRowProps()} className="table-row">
                    {row.cells.map((cell: CellValue) => (
                      <td key={cell.id} className="table-col" {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
            }
          })}
        </tbody>
      </table>
    </>
  );
};
