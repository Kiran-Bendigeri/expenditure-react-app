import './App.css';
import Expenses from './components/Expenses/Expenses'
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense'


const DUMMY_EXPENSES = [
  { id:2,
    title:"Item-1",
    amount:300,
    date : new Date(2021, 0, 2)
  },
  { id:3,
    title:"Item-2",
    amount:60,
    date : new Date(2021, 0, 1)
  },
  { id:1,
    title:"Item-3",
    amount:50,
    date : new Date(2021, 0, 2)
  }
]
function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const AddExpenseHandler = (expense) => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    });
    // console.log(expense);
  }

  const ItemDeleteHandler = (expenseId) => {
    for(let expense of expenses){
      if(expense.id === expenseId){
        let index = expenses.indexOf(expense);
        expenses.splice(index, 1);
        // console.log("Executed");
        // console.log(expenses);
      }
    }
    setExpenses(expenses => {
      return [...expenses];
    });
  }

  return (
    <div className='app'>
      <header className='Header'>
        <NewExpense onAddExpense = {AddExpenseHandler}/>
        <Expenses items = {expenses} onItemDelete={ItemDeleteHandler}/>
      </header>
    </div>   
  );
}

export default App;
