import "./ExpenseForm.css";
import React, {useState} from "react";

const ExpenseForm = ({onAddNewExpense, onError}) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [shouldFormBeShown, setShouldFormBeShown] = useState(false);

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

    // If everything is valid, proceed with the adding new expense
    if (enteredTitle.trim().length > 0 && enteredAmount.trim().length > 0 && enteredDate) {
      onAddNewExpense({title: enteredTitle, amount: +enteredAmount, date: new Date(enteredDate)});
      setEnteredDate("");
      setEnteredTitle("");
      setEnteredAmount("");
      setShouldFormBeShown(false);
      return;
    }

    // if something is invalid, trigger the error modal
    let error = {
      title: 'Error',
      body: 'Invalid title or/and amount, or/and date',
      footer: 'Cancel',
    };
    onError(error);
  };

  const hideFormHandler = () => {
    setShouldFormBeShown(false);
  };

  const showFormHandler = () => {
    setShouldFormBeShown(true);
  };

  const formShownPlaceholder = (<form onSubmit={expenseFormSubmitHandler}>
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
      <button onClick={hideFormHandler}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>);

  const formNotShownPlaceholder = (
    <div className="new-expense__actions--center">
      <button onClick={showFormHandler}>Add New Expense</button>
    </div>
  );

  return (
    <React.Fragment>
      {shouldFormBeShown && formShownPlaceholder}
      {!shouldFormBeShown && formNotShownPlaceholder}
    </React.Fragment>
  );
};

export default ExpenseForm;
