import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

function ExpensesList({items, selectedYear}) {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses for selected {selectedYear} year available...</h2>;
  } else {
    const content = items.map(expense => <ExpenseItem
      key={expense.id}
      date={expense.date}
      amount={expense.amount}
      title={expense.title}/>);
    return <ul className="expenses-list">
      {content}
    </ul>;
  }

}

export default ExpensesList;