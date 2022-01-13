import './Dashboard.scss';
import React, { useState, useMemo, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import axios from 'axios';

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
    accessor: 'revenue',
  },
  {
    Header: '회사사원수',
    accessor: 'workforce',
  },
];

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  const filterUrl =
    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=493d2c43063547bb8cd4e80316432f85';
  useEffect(() => {
    axios.get(filterUrl).then(response => {
      console.log(response.data.articles);
      setJobs(response.data.articles);
    });
  }, []);

  const columns = useMemo(() => Columns, []);
  // const data = useMemo(() => Saramin, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: jobs,
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
    </div>
  );
};

export default Dashboard;
