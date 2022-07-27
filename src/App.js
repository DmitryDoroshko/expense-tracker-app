import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense/NewExpense";
import {DUMMY_EXPENSES} from "./utils/dummy";
import uuid from 'react-uuid';
import Modal from "./components/UI/Modal/Modal";

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [isModalShown, setIsModalShown] = useState(false);
  const [expensesError, setExpensesError] = useState(null);

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

  const hideModalHandler = () => {
    setIsModalShown(false);
    setExpensesError(null);
  };

  const newExpenseErrorHandler = (error) => {
    // If Error has not been populated with appropriate content
    if (!error.title || !error.body || !error.footer) {
      return;
    }
    setExpensesError(error);
    // show modal is error is valid
    setIsModalShown(true);
  };

  return (
    <div>
      <NewExpense
        onAddNewExpense={addNewExpenseHandler}
        onError={newExpenseErrorHandler}
      />
      <Expenses expenses={expenses}/>
      {expensesError &&
        <Modal
          showModal={isModalShown}
          titleContent={expensesError.title}
          bodyContent={expensesError.body}
          footerContent={expensesError.footer}
          onHideModal={hideModalHandler}
        />}
    </div>
  );
}

export default App;
