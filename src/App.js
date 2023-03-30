import './App.css';
import Expenses from './components/Expenses/Expenses'
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense'


const DUMMY_EXPENSES = [
  // { id:1,
  //   title:"Sugar",
  //   amount:50,
  //   date : new Date(2021, 0, 1)
  // },
  { id:2,
    title:"Towel",
    amount:300,
    date : new Date(2021, 0, 2)
  },
  { id:3,
    title:"Jaggery",
    amount:60,
    date : new Date(2021, 0, 1)
  },
  { id:1,
    title:"Soap",
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

    console.log(expense);
  }

  return (
    <div className='app'>
      <header className='Header'>
        <NewExpense onAddExpense = {AddExpenseHandler}/>
        <Expenses items = {expenses} />
      </header>
    </div>   
  );
}

export default App;
