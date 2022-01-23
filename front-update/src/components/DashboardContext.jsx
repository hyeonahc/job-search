import './Dashboard.scss';
// import MOCK_DATA from '../data/MOCK_DATA.json';
import React, { useState, useMemo, useEffect, useContext } from 'react';
import { useTable, usePagination } from 'react-table';
import axios from 'axios';
import JobPostContext from '../context/job-post-context';

const DashboardContext = () => {
  const { state } = useContext(JobPostContext);
  console.log(state);

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
      accessor: 'employee',
    },
  ];

  // const [jobs, setJobs] = useState([]);

  // newsapi를 사용해서 만든 예전 코드
  // const tableData =apiKey=493d2c43063547bb8cd4e80316432f85';
  // useEffect(() => {
  //   axios.get(tableData).then(response => {
  //     console.log(response.data.articles);
  //     setJobs(response.data.articles);
  //   });
  // }, []);

  // 테이블에 초기 데이터를 가져올 백엔드 주소: localhost:8080
  // 접근할때는 루트 폴더 경로로 접근: /
  // const tableData = '/MOCK_DATA.json';
  // console.log(tableData.contents);
  // console.log(tableData.contents)에서 값이 받아와지는데 axios를 사용하면 값이 받아와지지 않고 에러가 뜬다
  // try 구문은 실행되지 않고 catch에서 에러메세지만 보여줌
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(tableData);
  //       console.log(response.data);
  //       setJobs(response.data.contents);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // !! useEffect 함수의 두번째 파라미터 배열에 어떤 값을 넣어주어야할지 공부
  //   'https://newsapi.org/v2/top-headlines?country=kr&

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
              {page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell, index) => {
                      console.log(cell);

                      // let test;
                      // if (index === 0) {
                      //   test = (
                      //     <a
                      //       href="https://dict.naver.com/"
                      //       target="_blank"
                      //       rel="noreferrer"
                      //     >
                      //       {cell.render('Cell')}
                      //     </a>
                      //   );
                      // } else {
                      //   test = cell.render('Cell');
                      // }

                      // const test = index ? (
                      //   cell.render('Cell')
                      // ) : (
                      //   <a
                      //     href="https://dict.naver.com/"
                      //     target="_blank"
                      //     rel="noreferrer"
                      //   >
                      //     {cell.render('Cell')}
                      //   </a>
                      // );

                      return (
                        <td {...cell.getCellProps()}>
                          {index ? (
                            cell.render('Cell')
                          ) : (
                            <a
                              href={state.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {cell.render('Cell')}
                            </a>
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
