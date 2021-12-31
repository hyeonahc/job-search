import React, { useMemo } from 'react';
import './Table.scss';
import { useTable, usePagination } from 'react-table';
import Saramin from '../saramin.json';
import { Columns } from './Columns';

const Table = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Saramin, []);

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable(
  //     {
  //       columns: columns,
  //       data: data,
  //     },
  //     usePagination
  //   );

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canPreviousPage,
    canNextPage,
  } = tableInstance;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default Table;
