import React, {useContext, useEffect, useState} from 'react';
import ExpenseItem from './ExpenseItem';
import {AppContext} from "../context/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    const [ filteredExpenses, setFilteredExpenses ] = useState(expenses || []);

    useEffect(() => {
        setFilteredExpenses(expenses);
    }, [expenses]);

    function handleChange(e) {
        const searchInput = expenses.filter((filteredExpenses) =>
                filteredExpenses.name.toLowerCase().includes(e.target.value)
        );
        setFilteredExpenses(searchInput);
    }

    return (
        <>
        <input
            type='text'
            className='form-control mb-2 mr-sm-2'
            placeholder='Search...'
            onChange={handleChange}
        />
        <ul className='list-group'>
            {filteredExpenses.map((expense) => (
                <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost}/>
            ))}
        </ul>
        </>
    )
}

export default ExpenseList;