import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  console.log("Expense item evaluated by React")
  const [title, setTitle] = useState(props.title);
  

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <div className="expense-item-date">
          <ExpenseDate date = {props.date} />
      </div>
      <div className="expense-item__description">
        <h3>{title}</h3>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update</button>
    </Card>
  );
}

export default ExpenseItem;
