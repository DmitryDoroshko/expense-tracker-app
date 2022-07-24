import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card";

function Expenses({expenses}) {
  return <Card className="expenses">
    {expenses.map(expense => <ExpenseItem
      key={expense.id}
      date={expense.date}
      amount={expense.amount}
      title={expense.title}/>)}
  </Card>
}

export default Expenses;