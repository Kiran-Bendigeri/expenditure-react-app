import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import React, { useState } from 'react'
import ExpenseList from './ExpenseList'

const Expenses = (props) => {
  const [selectedYear, SetSelectedYear] = useState("2022")

  const YearChangeHandler = (SelectedYear) => {
    SetSelectedYear(SelectedYear)
  }

  const filteredExpenseYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  })

  return (
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={selectedYear}
          onYearChange={YearChangeHandler}
        />
        <li>
          <ExpenseList items = {filteredExpenseYear}/>
        </li>
      </Card>
  )
}

export default Expenses
