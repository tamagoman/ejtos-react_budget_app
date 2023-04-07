

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = (props) => {
    const { spend, currency } = useContext(AppContext);
    
    return (
        <div className={`alert alert-primary ${props.className}`}>
            <span>Spend so far: {currency}{spend}</span>
        </div>
    );
};

export default ExpenseTotal;
