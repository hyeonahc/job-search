import React, { useState } from 'react';
import './SelectFilter.scss';
import produce from 'immer';
import axios from 'axios';

// foundingDates의 갑은 고정값이므로 컴포넌트 밖으로 빼주었다 (값이 변하지 않으니 안에 있을 필요가 없고 안에 있으면 스테이트 값이 바꼈을때 읽는 코드만 늘어남)
const foundingDates = [
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
    checked: false,
  },
  {
    id: 'revenue-0',
    name: 'revenue',
    label: '0 - 10억 사이',
    checked: false,
  },
  {
    id: 'revenue-1b',
    name: 'revenue',
    label: '10억 이상',
    checked: false,
  },
  {
    id: 'revenue-5b',
    name: 'revenue',
    label: '50억 이상',
    checked: false,
  },
  {
    id: 'revenue-10b',
    name: 'revenue',
    label: '100억 이상',
    checked: false,
  },
  {
    id: 'revenue-50b',
    name: 'revenue',
    label: '500억 이상',
    checked: false,
  },
];

const SelectFilter = () => {
  // 백엔드에서 key이름이 같아야한다 foundingDate, revenue
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

  // 필터링 다 선택하고 버튼 눌렀을때
  // const filterUrl = '주소'
  // const onSubmit = () => {
  //   axios.post(filterUrl, form).then(res=> {
  //     console.log(res.data)
  //   })
  // };

  // const workforces = [
  //   {
  //     id: 'workforce-10',
  //     name: 'workforce',
  //     label: '10인 미만',
  //     checked: false,
  //   },
  //   {
  //     id: 'workforce-49',
  //     name: 'workforce',
  //     label: '10 - 49인',
  //     checked: false,
  //   },
  //   {
  //     id: 'workforce-499',
  //     name: 'workforce',
  //     label: '50 - 499인',
  //     checked: false,
  //   },
  //   {
  //     id: 'workforce-500',
  //     name: 'workforce',
  //     label: '500인 이상',
  //     checked: false,
  //   },
  // ];

  return (
    <div className="select-filter">
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

      {/* <button onClick={onSubmit}>필터 적용하기</button> */}
    </div>
  );
};

export default SelectFilter;
