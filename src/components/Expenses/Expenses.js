import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';


function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterHandler = (year) => {
        setFilteredYear(year);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter onFilter={filterHandler} selected={filteredYear} />
            {expenses.map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)}
        </Card>

    );
};

export default Expenses;