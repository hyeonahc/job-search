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

  // console.log(saramin);

  // 테이블에 초기 데이터를 가져올 백엔드 주소: localhost:8080
  const filterUrl =
    // saramin;
    // 가짜 JSON: news api
    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=493d2c43063547bb8cd4e80316432f85';
  useEffect(() => {
    axios.get(filterUrl).then(response => {
      // console.log(response);
      setJobs(response.data.articles);
    });
  }, []);
  // !! useEffect 함수의 두번째 파라미터 배열에 어떤 값을 넣어주어야할지 공부

  const columns = useMemo(() => Columns, []);

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
