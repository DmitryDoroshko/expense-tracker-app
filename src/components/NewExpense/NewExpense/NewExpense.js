import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = ({onAddNewExpense}) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={onAddNewExpense}/>
    </div>
  );
};

export default NewExpense;