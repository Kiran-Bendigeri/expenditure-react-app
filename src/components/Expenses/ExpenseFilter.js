import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

    const filterEventHandler = (event) => {
        // console.log(event.target.value);
        props.onYearChange(event.target.value);
    }
     
    return  <div className="expenses-filter">
                <div className="expenses-filter__control">
                <lable>Filter by year</lable>
                    <select value = {props.selectedYear} onChange={filterEventHandler}>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>                
                    </select>
                </div>
            </div>
}


export default ExpenseFilter