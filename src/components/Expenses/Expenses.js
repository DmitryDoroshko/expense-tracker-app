import "./Expenses.css";
import Card from "../UI/Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {DEFAULT_SELECTED_YEAR} from "../../utils/constants";
import {useEffect, useState} from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses({expenses}) {
  const getInitialSelectedExpenses = () => {
    return expenses.filter(expense => {
      return expense.date.getFullYear() === DEFAULT_SELECTED_YEAR;
    });
  };

  const [selectedYear, setSelectedYear] = useState(DEFAULT_SELECTED_YEAR);
  const [filteredExpenses, setFilteredExpenses] = useState(getInitialSelectedExpenses());

  const yearChangeHandler = (year) => {
    const selectedExpenses = expenses.filter(expense => {
      return expense.date.getFullYear().toString() === year;
    });

    setSelectedYear(year);
    setFilteredExpenses(selectedExpenses);
  };

  useEffect(() => {
    const selectedExpenses = expenses.filter(expense => {
      return expense.date.getFullYear().toString() === selectedYear;
    });
    setFilteredExpenses(selectedExpenses);
  }, [expenses, selectedYear]);

  return <Card className="expenses">
    <ExpenseFilter onYearChange={yearChangeHandler} selectedYear={selectedYear}/>
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses} selectedYear={selectedYear}/>
  </Card>
}

export default Expenses;