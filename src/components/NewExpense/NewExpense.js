import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'
const NewExpense = (props) =>{

    const saveExpendDataHandler = (enteredExpendData) =>{
        const expense = {
            ...enteredExpendData,
            id: Math.random().toString()
        };
        props.onAddExpense(expense);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpendData={saveExpendDataHandler} />
        </div>
    );
}

export default NewExpense;