import './App.css';
import Expenses from './components/Expenses/Expenses'
import Card from './components/UI/Card'
import NewExpense from './components/NewExpense/NewExpense'

function App() {

  const expenses = [
    { id:1,
      title:"Sugar",
      amount:50,
      date : new Date(2021, 0, 1)
    },
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

  const AddExpenseHandler = (props) => {
    const new_expense={
      ...props
    };
    // console.log(new_expense);
    expenses.push(new_expense);
    console.log(expenses);
  }
  return (
    <div className='app'>
      <header className='Header'>
      {/* <Card className="app-title">
        <h1  className='title'>Expense Items</h1>
      </Card> */}
        <NewExpense onAddExpense = {AddExpenseHandler}/>
        <Expenses items = {expenses} />
      </header>
    </div>   
  );
}

export default App;
