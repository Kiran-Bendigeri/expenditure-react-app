import './TotalExpense.css'
import Card from '../UI/Card'

const TotalExpense = (props) => {
  let totalExpense = 0;

      props.items.forEach(item => {
          totalExpense += Number(item.amount);
      });

   

  return (
    <Card className="total-expense">
      <label className="total-expense__lable">Total Expense ($) : </label>
      <div className="total-expense__value">{totalExpense}</div>
    </Card>
  )
}

export default TotalExpense
