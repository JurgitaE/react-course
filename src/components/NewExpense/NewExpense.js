import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const [isEditting, setIsEditting] = useState(false);
    const startEdittingHandler = () => {
        setIsEditting(true);
    };
    const stopEdditingHandler = () => setIsEditting(false);

    const saveExpenseDataHandler = (eneterdExpenseData) => {
        const expenseData = {
            ...eneterdExpenseData,
            id: Math.random().toString(),
        };
        onAddExpense(expenseData);
        setIsEditting(false);
    };

    return (
        <div className="new-expense">
            {!isEditting && <button onClick={startEdittingHandler}>Add New Expense</button>}
            {isEditting && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEdditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
