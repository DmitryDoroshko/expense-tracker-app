import "./ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = ({onAddNewExpense}) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const enteredTitleChangeHandler = ({target: {value}}) => {
    setEnteredTitle(value);
  };
  const enteredAmountChangeHandler = ({target: {value}}) => {
    setEnteredAmount(value);
  };
  const enteredDateChangeHandler = ({target: {value}}) => {
    setEnteredDate(value);
  };

  const expenseFormSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.trim().length > 0 && enteredAmount.trim().length > 0 && enteredDate) {
     onAddNewExpense({title: enteredTitle, amount: enteredAmount, date: new Date(enteredDate)});
     setEnteredDate("");
     setEnteredTitle("");
     setEnteredAmount("");
    } else {
      throw new Error("Invalid Data Input");
    }
  };

  return <form onSubmit={expenseFormSubmitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={enteredTitleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={enteredAmountChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={enteredDateChangeHandler}/>
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
};

export default ExpenseForm;
