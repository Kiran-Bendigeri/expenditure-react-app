import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Card from '../UI/Card'
import React, { useState } from 'react'


const NewExpense = (props) => {
  const [IsEditing, setIsEditing] = useState(false)

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHnadler = () => {
    setIsEditing(false);
  }

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }

  let button = !IsEditing && (
    <button className='add-button' onClick={startEditingHandler}>Add Expense</button>
  )
  let expenseform = IsEditing && (
  <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHnadler}/>)
  
  return (
    <Card className="new-expense">
      {button}
      {expenseform}
    </Card>
  )
}

export default NewExpense
