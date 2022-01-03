import React, { useState } from 'react';
import './SelectFilter.scss';
import RadioButton from './RadioButton';

const SelectFilter = () => {
  const onChange = event => {
    const test = event.target.id;

    setFoundingDates(
      foundingDates.map(foundingDate =>
        foundingDate.id === test
          ? { ...foundingDate, checked: !foundingDate.checked }
          : foundingDate
      )
    );
  };

  const [foundingDates, setFoundingDates] = useState([
    {
      id: 'founding-date-new',
      name: 'founding-date',
      label: '신생',
      checked: false,
    },
    {
      id: 'founding-date-5years',
      name: 'founding-date',
      label: '5년 이상',
      checked: false,
    },
    {
      id: 'founding-date-10years',
      name: 'founding-date',
      label: '10년 이상',
      checked: false,
    },
    {
      id: 'founding-date-20years',
      name: 'founding-date',
      label: '20년 이상',
      checked: false,
    },
  ]);

  // const revenues = [
  //   {
  //     id: 'revenue-none',
  //     name: 'revenue',
  //     label: '무관',
  //     checked: false,
  //   },
  //   {
  //     id: 'revenue-0',
  //     name: 'revenue',
  //     label: '0 - 10억 사이',
  //     checked: false,
  //   },
  //   {
  //     id: 'revenue-1b',
  //     name: 'revenue',
  //     label: '10억 이상',
  //     checked: false,
  //   },
  //   {
  //     id: 'revenue-5b',
  //     name: 'revenue',
  //     label: '50억 이상',
  //     checked: false,
  //   },
  //   {
  //     id: 'revenue-10b',
  //     name: 'revenue',
  //     label: '100억 이상',
  //     checked: false,
  //   },
  //   {
  //     id: 'revenue-50b',
  //     name: 'revenue',
  //     label: '500억 이상',
  //     checked: false,
  //   },
  // ];

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
        {foundingDates.map(foundingDate => (
          <RadioButton
            type="radio"
            foundingDate={foundingDate}
            onChange={onChange}
          />
        ))}
      </div>

      {/* <div>
        <h3>매출액</h3>
        {revenues.map(revenue => (
          <RadioButton type="radio" revenue={revenue} onChange={onChange} />
        ))}
      </div>

      <div>
        <h3>회사사원수</h3>
        {workforces.map(workforce => (
          <RadioButton type="radio" revenue={workforce} onChange={onChange} />
        ))}
      </div> */}
    </div>
  );
};

export default SelectFilter;
