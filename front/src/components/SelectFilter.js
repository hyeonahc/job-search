import React from 'react';
import './SelectFilter.scss';
import RadioButton from './RadioButton';

const SelectFilter = () => {
  const foundingDates = [
    {
      id: 'founding-date-new',
      name: 'founding-date',
      label: '신생',
    },
    {
      id: 'founding-date-5years',
      name: 'founding-date',
      label: '5년 이상',
    },
    {
      id: 'founding-date-10years',
      name: 'founding-date',
      label: '10년 이상',
    },
    {
      id: 'founding-date-20years',
      name: 'founding-date',
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

  const workforces = [
    {
      id: 'workforce-10',
      name: 'workforce',
      label: '10인 미만',
    },
    {
      id: 'workforce-49',
      name: 'workforce',
      label: '10 - 49인',
    },
    {
      id: 'workforce-499',
      name: 'workforce',
      label: '50 - 499인',
    },
    {
      id: 'workforce-500',
      name: 'workforce',
      label: '500인 이상',
    },
  ];

  return (
    <div className="select-filter">
      <div>
        <h3>설립일</h3>
        {foundingDates.map(foundingDate => (
          <RadioButton
            id={foundingDate.id}
            name={foundingDate.name}
            label={foundingDate.label}
            key={foundingDate.id}
          />
        ))}
      </div>

      <div>
        <h3>설립일</h3>
        {revenues.map(revenue => (
          <RadioButton
            id={revenue.id}
            name={revenue.name}
            label={revenue.label}
            key={revenue.id}
          />
        ))}
      </div>

      <div>
        <h3>회사사원수</h3>
        {workforces.map(workforce => (
          <RadioButton
            id={workforce.id}
            name={workforce.name}
            label={workforce.label}
            key={workforce.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectFilter;
