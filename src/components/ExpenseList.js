
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    const { expenses } = useContext(AppContext);
    
    return (
        <div>
            <h3>Allocation</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Department</th>
                        <th scope="col">Allocated Budget</th>
                        <th scope="col">Increase by 10</th>
                        <th scope="col">Decrease by 10</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((val, key) => {
                    return (
                        <ExpenseItem key={key} val={val}/>
                    )
                    })}
                </tbody>
                </table>
        </div>
    );
};

export default ExpenseList;
