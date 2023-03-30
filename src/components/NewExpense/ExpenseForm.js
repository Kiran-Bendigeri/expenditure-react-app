import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [titleEntered, setTitleEntered] = useState('')
  const [amountEntered, setAmountEntered] = useState('')
  const [dateEntered, setDateEntered] = useState('')

  const CancelButtonHandler = () => {
    props.onCancel();
  }

  // const [enteredUserInput, setEnteredUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount : '',
  //     enteredDate : ''
  // })

  const InputEventHandler = (event) => {
    setTitleEntered(event.target.value)
    // setEnteredUserInput({
    //     ...enteredUserInput,
    //     enteredTitle:event.target.value
    // });

    // setEnteredUserInput((PreviousInput) => {
    //     return {...PreviousInput, enteredTitle:event.target.value}
    // });
  }

  const AmountChangeHandler = (event) => {
    setAmountEntered(event.target.value)
    // setEnteredUserInput({
    //     ...enteredUserInput,
    //     enteredAmount:event.target.value
    // });

    // setEnteredUserInput((PreviousInput) => {
    //     return {...PreviousInput, enteredAmount:event.target.value}
    // });
  }

  const DateChangeHandler = (event) => {
    setDateEntered(event.target.value)
    // setEnteredUserInput({
    //     ...enteredUserInput,
    //     enteredDate:event.target.value
    // });

    // setEnteredUserInput((PreviousInput) => {
    //     return {...PreviousInput, enteredAmount:event.target.value}
    // });
  }

  const SubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleEntered,
      amount: amountEntered,
      date: new Date(dateEntered)
    }

    props.onSaveExpenseData(expenseData);

    setTitleEntered("");
    setAmountEntered("");
    setDateEntered("");
  }

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense-control">
          <label>Item Name : </label>
          <input
            className="input"
            onChange={InputEventHandler}
            type="text"
            placeholder="Name"
            value={titleEntered}
            required="true"
          />
        </div>

        <div className="new-expense-control">
          <label>Buy Date : </label>
          <input
            className="input"
            onChange={DateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={dateEntered}
            required="true"
          />
        </div>

        <div className="new-expense-control">
          <label>Amount ($) : </label>
          <input
            className="input"
            onChange={AmountChangeHandler}
            step="0.1"
            type="number"
            placeholder="Dollers"
            value={amountEntered}
            required="true"
          />
        </div>
      </div>

      <div className="buttons">
        <button className="submit-button" type="submit">Submit</button>
        <button onClick={CancelButtonHandler}>Cancel</button>
      </div>
    </form>
  )
}

export default ExpenseForm
