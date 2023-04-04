import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import React, { useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpensesChart from '../Chart/ExpensesChart'
import TotalExpense from './TotalExpense'

const Expenses = (props) => {
  const [selectedYear, SetSelectedYear] = useState("2019");

  const YearChangeHandler = (SelectedYear) => {
    SetSelectedYear(SelectedYear)
  }

  const filteredExpenseYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  })

  const ItemDeleteHandler =(expenseId) => {
    props.onItemDelete(expenseId);
  }

  return (
      <Card className="expenses">

        <ExpenseFilter
          selectedYear={selectedYear}
          onYearChange={YearChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenseYear}/>
        <li>
          <ExpenseList items = {filteredExpenseYear} onDeleteItem={ItemDeleteHandler} />
        </li>
        <TotalExpense 
          items = {filteredExpenseYear}
        />
      </Card>
  )
}

export default Expenses
