import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense/NewExpense";
import {DUMMY_EXPENSES} from "./utils/dummy";
import uuid from 'react-uuid';

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpenseHandler = (newExpense) => {
    if (newExpense.title && newExpense.amount && newExpense.date) {
      const expenseToAdd = {
        id: uuid(),
        title: newExpense.title,
        amount: newExpense.amount,
        date: newExpense.date,
      };

      setExpenses(prevExpenses => {
        return [expenseToAdd, ...prevExpenses];
      })
    }
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
