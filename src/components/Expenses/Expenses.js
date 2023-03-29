import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import React, { useState } from 'react'

const Expenses = (props) => {
  const [selectedYear, SetSelectedYear] = useState('2022')

  const YearChangeHandler = (SelectedYear) => {
    SetSelectedYear(SelectedYear)
  }

  const filteredExpenseYear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={selectedYear}
        onYearChange={YearChangeHandler}
      />
      {filteredExpenseYear.map((expense) => {
        return <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      })}
    </Card>
  )
}

export default Expenses
