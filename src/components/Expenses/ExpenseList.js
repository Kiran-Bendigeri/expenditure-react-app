import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {



  const DeleteEventHandler = (expenseId) => {
    // console.log(itemId);
    props.onDeleteItem(expenseId);
  }


  if (props.items.length === 0) {
    return <p className="expense-list__fallback">No expense found</p>
  } else {
    return (
      <ul className="expense-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expenseId={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onDelete = {DeleteEventHandler}
          />
        ))}
      </ul>
    )
  }
}

export default ExpenseList
