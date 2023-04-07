


import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { expenses, currency } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.unitprice * item.quantity));
    // }, 0);

    // const Departments = props => 
    //     <select>{
    //         props.expenses.map( (data,index) => 
    //         <option key={data.id}>{data.name}</option> )
    //     }</select>;

    return (
        <div className='row mt-3 gap-3' >
            <h3>Change allocation </h3>

            <div className='col'>
                <div className='alert alert-secondary'>
                    Department
                    
                    {/* {Departments} */}
                    <select name="departments" defaultValue="choose">
                        <option key="choose" value="choose">Choose one...</option>
                        {expenses.map(expen =>
                        <option key={expen.id} value={expen.id}>{expen.name}</option>
                        )};
                    </select>
                </div>
            </div>

            <div className='col'>
                <div className='alert alert-secondary'>
                    Allocation
                    <select>
                        <option value="add">Add</option>
                        <option value="add">Subtract</option>
                    </select>
                </div>
            </div>

            <div className='col'>
                <div className="alert form-group form-inline">
                    <label htmlFor="allocation_val" style={{ float:"left" ,  "margin-right":"5px"}}>{currency}</label>
                    <input type="number" id="allocation_val" className='form-control' style={{ float:"left" ,  "margin-right":"5px", width:"200px" }}/>
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
            </div>
            

        </div>
    );
};

export default AllocationForm;