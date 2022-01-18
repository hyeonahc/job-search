import './Filter.scss';
import React, { useState } from 'react';
import logo from '../img/logo.png';
import produce from 'immer';
// import axios from 'axios';

const foundingDates = [
  {
    id: 'founding-date-none',
    name: 'foundingDate',
    label: '무관',
  },
  {
    id: 'founding-date-new',
    name: 'foundingDate',
    label: '신생',
  },
  {
    id: 'founding-date-5years',
    name: 'foundingDate',
    label: '5년 이상',
  },
  {
    id: 'founding-date-10years',
    name: 'foundingDate',
    label: '10년 이상',
  },
  {
    id: 'founding-date-20years',
    name: 'foundingDate',
    label: '20년 이상',
  },
];

const revenues = [
  {
    id: 'revenue-none',
    name: 'revenue',
    label: '무관',
  },
  {
    id: 'revenue-0',
    name: 'revenue',
    label: '0 - 10억 사이',
  },
  {
    id: 'revenue-1b',
    name: 'revenue',
    label: '10억 이상',
  },
  {
    id: 'revenue-5b',
    name: 'revenue',
    label: '50억 이상',
  },
  {
    id: 'revenue-10b',
    name: 'revenue',
    label: '100억 이상',
  },
  {
    id: 'revenue-50b',
    name: 'revenue',
    label: '500억 이상',
  },
];

const employees = [
  {
    id: 'employee-none',
    name: 'employee',
    label: '무관',
  },
  {
    id: 'employee-10',
    name: 'employee',
    label: '10인 미만',
  },
  {
    id: 'employee-49',
    name: 'employee',
    label: '10 - 49인',
  },
  {
    id: 'employee-499',
    name: 'employee',
    label: '50 - 499인',
  },
  {
    id: 'employee-500',
    name: 'employee',
    label: '500인 이상',
  },
];

const Filter = () => {
  const [form, setForm] = useState({
    foundingDate: '',
    revenue: '',
  });

  const onChange = event => {
    console.log(event.target.value);
    setForm(
      produce(form, draft => {
        draft[event.target.name] = event.target.value;
      })
    );
  };

  // 필터링 보내줄 백엔드 주소 필요
  // const filterUrl = '주소';
  // const onSubmit = () => {
  //   axios.get(filterUrl, form).then(response => {
  //     console.log(response.data);
  //   });
  // };

  return (
    <div className="filter">
      <h1>
        <img src={logo} alt="" width="200" />
      </h1>
      <h2>Filter</h2>
      <div>
        <h3>설립일</h3>
        <div onChange={onChange}>
          {foundingDates.map(foundingDate => (
            <>
              <input
                type="radio"
                id={foundingDate.id}
                value={foundingDate.id}
                name={foundingDate.name}
              />
              <label htmlFor={foundingDate.id}>{foundingDate.label}</label>
            </>
          ))}
        </div>
      </div>

      <div>
        <h3>매출액</h3>
        <div onChange={onChange}>
          {revenues.map(revenue => (
            <>
              <input
                type="radio"
                id={revenue.id}
                value={revenue.id}
                name={revenue.name}
              />
              <label htmlFor={revenue.id}>{revenue.label}</label>
            </>
          ))}
        </div>
      </div>

      <div>
        <h3>회사사원수</h3>
        <div onChange={onChange}>
          {employees.map(employee => (
            <>
              <input
                type="radio"
                id={employee.id}
                value={employee.id}
                name={employee.name}
              />
              <label htmlFor={employee.id}>{employee.label}</label>
            </>
          ))}
        </div>
      </div>

      {/* 백앤드 주소 생기면 onClick={onSubmit} 넣기 */}
      <button>필터 적용하기</button>
    </div>
  );
};

export default Filter;
