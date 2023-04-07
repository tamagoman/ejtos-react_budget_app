

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = (props) => {
    const { remaining, currency } = useContext(AppContext);
    
    return (
        <div className={`alert alert-success ${props.className}`}>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};

export default Remaining;