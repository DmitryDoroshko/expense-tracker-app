import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = ({onAddNewExpense, onError}) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={onAddNewExpense} onError={onError}/>
    </div>
  );
};

export default NewExpense;