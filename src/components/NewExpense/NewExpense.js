import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    
    const [ isEditing, setIsEditing ] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(!isEditing);
    }

    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={clickHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={clickHandler} />
            )}
        </div>
    )
}

export default NewExpense;