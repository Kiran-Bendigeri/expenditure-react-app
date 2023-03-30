import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <p className="expense-list__fallback">No expense found</p>
  } else {
    return (
      <ul className="expense-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    )
  }
}

export default ExpenseList
