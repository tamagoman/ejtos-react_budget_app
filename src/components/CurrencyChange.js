
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChange = (props) => {
    const { dispatch } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.unitprice * item.quantity));
    // }, 0);
    const [currencySel, setCurrencySel] = useState("Currency (£ Pound)");

    const currencies = [
        {"sign":"$", "name":"Dollar"},
        {"sign":"£", "name":"Pound"},
        {"sign":"€", "name":"Euro"},
        {"sign":"₹", "name":"Ruppee"}
    ];

    const handleCurrency = (val) => {

        setCurrencySel(currencies.map((value, key) => {
            let valNew = '';
            if(value.sign===val) {
                valNew = "Currency ("+value.sign +" " +value.name+")";
            }
            console.log("val"+valNew);
            return valNew;
        }));

        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
        
    };
    return (
        <div className={`alert text-white ${props.className}`} style={{"background-color":"#94e59a"}}>
            <span>
                <select defaultValue="£" className={`text-white w-100 border-0`} onChange={event=>handleCurrency(event.target.value)} style={{"background-color":"#94e59a"}}>
                    {
                        currencies.map((val, key) => {
                            return (<option value={val.sign}>{val.sign} {val.name}</option>);
                        })
                    }
                </select>
                <p className='p_top_less' style={{"margin-top":"-43px", "background-color":"#94e59a","display":"table-caption","width":"150px"}}>{currencySel}</p>
            </span>
        </div>
    );
};

export default CurrencyChange;