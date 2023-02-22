import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterHandler = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = expenses.filter((e) => e.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses">
            <ExpensesFilter
                onFilter={filterHandler}
                selected={filteredYear}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
