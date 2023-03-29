import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Card from '../UI/Card'
const NewExpense = (props) => {

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
        </Card>
    );
};

export default NewExpense;