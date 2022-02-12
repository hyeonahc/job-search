import './Dashboard.scss';
import React, { useMemo, useContext } from 'react';
import { useTable, usePagination } from 'react-table';
import JobPostContext from '../context/job-post-context';

const DashboardContext = () => {
  const { state } = useContext(JobPostContext);

  const Columns = [
    {
      Header: '제목',
      accessor: 'title',
    },
    {
      Header: '회사이름',
      accessor: 'companyName',
    },
    {
      Header: '설립일',
      accessor: 'foundingDate',
    },
    {
      Header: '매출액',
      // accessor: 'revenue',
      accessor: r => {
        console.log(r.revenue);
        if (r.revenue) {
          return r.revenue / 100000000 + '억';
        }
      },
    },
    {
      Header: '회사사원수',
      accessor: 'employee',
    },
  ];

  const columns = useMemo(() => Columns, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: state.posts,
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
    <div className="dashboard">
      {state.posts.length ? (
        <>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, rowIndex) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell, cellIndex) => {
                      // console.log(cell, cellIndex);
                      // if (cellIndex === 3 && cell.value !== undefined) {
                      //   console.log(cell.value / 100000000 + '억');
                      //   // cell.values.revenue = '';
                      // }
                      return (
                        <td {...cell.getCellProps()}>
                          {/* {cellIndex === 3 && cell.value !== undefined
                            ? (cell.value = cell.value / 100000000 + '억')
                            : (cell.value = undefined)} */}

                          {cellIndex === 0 ? (
                            <a
                              href={state.posts[rowIndex].url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {cell.render('Cell')}
                            </a>
                          ) : (
                            cell.render('Cell')
                          )}

                          {/* {cellIndex === 3 && cell.value !== undefined
                            ? (cell.value = cell.value / 100000000 + '억')
                            : (cell.value = undefined)} */}
                        </td>
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
      ) : (
        '로딩중'
      )}
    </div>
  );
};

export default DashboardContext;
