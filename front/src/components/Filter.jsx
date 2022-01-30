import './Filter.scss';
import React, { useState } from 'react';
import logo from '../img/logo.png';
import produce from 'immer';
import axios from 'axios';

const foundingDates = [
  {
    id: -1,
    name: 'foundingDate',
    label: '무관',
  },
  {
    id: 0,
    name: 'foundingDate',
    label: '신생',
  },
  {
    id: 5,
    name: 'foundingDate',
    label: '5년 이상',
  },
  {
    id: 10,
    name: 'foundingDate',
    label: '10년 이상',
  },
  {
    id: 20,
    name: 'foundingDate',
    label: '20년 이상',
  },
];

const revenues = [
  {
    id: -1,
    name: 'revenue',
    label: '무관',
  },
  {
    id: 'between-0-to-10',
    name: 'revenue',
    label: '0 - 10억 사이',
  },
  {
    id: 10,
    name: 'revenue',
    label: '10억 이상',
  },
  {
    id: 50,
    name: 'revenue',
    label: '50억 이상',
  },
  {
    id: 100,
    name: 'revenue',
    label: '100억 이상',
  },
  {
    id: 500,
    name: 'revenue',
    label: '500억 이상',
  },
];

const employees = [
  {
    id: 1,
    name: 'employee',
    label: '무관',
  },
  {
    id: 'loe',
    name: 'employee',
    label: '10인 미만',
  },
  {
    id: 49,
    name: 'employee',
    label: '10 - 49인',
  },
  {
    id: 499,
    name: 'employee',
    label: '50 - 499인',
  },
  {
    id: 500,
    name: 'employee',
    label: '500인 이상',
  },
];

const Filter = () => {
  const [form, setForm] = useState({
    foundingDate: '',
    revenue: '',
    employees: '',
  });

  const onChange = event => {
    console.log(event.target.value);
    setForm(
      produce(form, draft => {
        draft[event.target.name] = event.target.value;
      })
    );
  };

  // 필터링 보내줄 백엔드 주소: localhost:8080/search
  // const filterUrl = process.env.REACT_APP_SERVER_SEARCH;
  const filterUrl = '';
  const onClick = () => {
    axios.get(filterUrl, form).then(response => {
      console.log(response.data);
      // setForm
    });
  };

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
            <div key={foundingDate.id}>
              <input
                type="radio"
                id={foundingDate.id}
                value={foundingDate.id}
                name={foundingDate.name}
              />
              <label htmlFor={foundingDate.id}>{foundingDate.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3>매출액</h3>
        <div onChange={onChange}>
          {revenues.map(revenue => (
            <div key={revenue.id}>
              <input
                type="radio"
                id={revenue.id}
                value={revenue.id}
                name={revenue.name}
              />
              <label htmlFor={revenue.id}>{revenue.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3>회사사원수</h3>
        <div onChange={onChange}>
          {employees.map(employee => (
            <div key={employee.id}>
              <input
                type="radio"
                id={employee.id}
                value={employee.id}
                name={employee.name}
              />
              <label htmlFor={employee.id}>{employee.label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* 백앤드 주소 생기면 onClick={onSubmit} 넣기 */}
      <button onClick={onClick}>필터 적용하기</button>
    </div>
  );
};

export default Filter;
