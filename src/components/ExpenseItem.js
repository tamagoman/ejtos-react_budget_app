

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle, FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    
    const { dispatch, currency } = useContext(AppContext);

    const handlePlus = (name) => { 
        dispatch({
            type: 'ADD_EXPENSE',
            payload: {
                "name":name,
                "cost":10
            }
        });
    };
    const handleSustract = (name) => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: {
                "name":name,
                "cost":10
            }
        });
    }
    const handleRemove = (name) => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: name
        });
    };

    return (
        <tr key={props.key}>
            <td key={props.val.id}>{props.val.name}</td>
            <td>{currency}{props.val.cost}</td>
            <td><FaPlusCircle size='2.2em' color="green" onClick={event=>handlePlus(props.val.name)}></FaPlusCircle></td>
            <td><FaMinusCircle size='2.2em' color="red" onClick={event=>handleSustract(props.val.name)}></FaMinusCircle></td>
            <td><FaTimesCircle size='1em' color="black" onClick={event=>handleRemove(props.val.name)}></FaTimesCircle></td>
        </tr>
        
    );
};

export default ExpenseItem;
