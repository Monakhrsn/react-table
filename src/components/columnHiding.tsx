import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS, GROUPED_COLUMNS } from './columns';
import './table.css';
import CheckBox from './checkBox'

export const ColumnHiding = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable<object>({
    columns,
    data,
  });

  return (
      <>
      <div>
          <div>
            <CheckBox {...getToggleHideAllColumnsProps()} /> Toggle All
          </div>
          {allColumns.map((column) => {
            return (
              <div key={column.id}>
                  <label>
                      <CheckBox type={'checkbox'} {...column.getToggleHiddenProps()} />
                      {column.Header}
                  </label>
              </div>
            )
          })}
      </div>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps}>{column.render('Footer')}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
    </>
  );
};

export default ColumnHiding;
