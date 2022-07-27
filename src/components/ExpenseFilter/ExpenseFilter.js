import React, {useState} from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({onYearChange, selectedYear: selYear}) => {
  const [selectedYear, setSelectedYear] = useState(selYear.toString());

  const onYearChangeHandler = ({target: {value}}) => {
    setSelectedYear(value);
    onYearChange(value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={event => onYearChangeHandler(event)}>
          <option value="2023">2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;