import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const ExpenseItem = (props) => {

  return (
    <Card className="expense-item">
      <div className="expense-item-date">
          <ExpenseDate date = {props.date} />
      </div>
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
