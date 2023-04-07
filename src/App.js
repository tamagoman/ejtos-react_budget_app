import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import CurrencyChange from './components/CurrencyChange';
import ExpenseList from './components/ExpenseList';

import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3 gap-3'>
                        <Budget className="col" />

                        <Remaining className="col"/>

                        <ExpenseTotal className="col"/>

                        <CurrencyChange className="col"/>

                    </div>
                    <div className='row mt-3 gap-3'>
                        <ExpenseList/>
                    </div>   
                    <div className='row mt-3' style={{"width":"82%"}}>
                        <AllocationForm />
                    </div>
            </div>
        </AppProvider>
    );
};
export default App;
