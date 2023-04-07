
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const handleBudget = (val) => {
        const budget = val;

        dispatch({
            type: 'SET_BUDGET',
            payload: budget,
        });
    };

    return (
        <div className={`alert alert-secondary ${props.className}`}>
            <span>
                Budget: { currency }
                <input type='number' value={budget} onChange={event=>handleBudget(event.target.value)}></input>
            </span>
        </div>
    );
};

export default Budget;