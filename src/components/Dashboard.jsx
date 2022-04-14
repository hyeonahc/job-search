import './Dashboard.scss';
import React, { useMemo, useContext } from 'react';
import { useTable, usePagination } from 'react-table';
import JobPostContext from '../context/job-post-context';

const DashboardContext = () => {
  const { jobState } = useContext(JobPostContext);

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
      accessor: r => {
        if (r.foundingDate) {
          return r.foundingDate + '년';
        }
      },
    },
    {
      Header: '매출액',
      accessor: r => {
        if (r.revenue) {
          return r.revenue / 100000000 + '억';
        }
      },
    },
    {
      Header: '회사사원수',
      accessor: r => {
        if (r.employee) {
          return r.employee + '명';
        }
      },
    },
  ];

  const columns = useMemo(() => Columns, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: jobState.posts,
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
    pageOptions,
    state,
    gotoPage,
    pageCount,
  } = tableInstance;

  const { pageIndex } = state;

  return (
    <div className="dashboard">
      {jobState.posts.length ? (
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
                      return (
                        <td {...cell.getCellProps()}>
                          {cellIndex === 0 ? (
                            <a
                              href={jobState.posts[rowIndex].url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {cell.render('Cell')}
                            </a>
                          ) : (
                            cell.render('Cell')
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <span>
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {'>>'}
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
