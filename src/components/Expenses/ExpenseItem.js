import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const ExpenseItem = (props) => {

  const [expenseId] = useState(props.expenseId)

  const deleteButtonHandler = () => {
    props.onDelete(expenseId);
  }

  return (
    <Card className="expense-item">
      <div className="expense-item-date">
          <ExpenseDate date = {props.date} />
      </div>
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button value={expenseId} onClick={deleteButtonHandler} type='submit'>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
