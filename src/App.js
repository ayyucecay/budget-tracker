import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import {AppContext, AppProvider} from "./context/AppContext";
import BudgetForm from "./components/BudgetForm";

function App() {
    const { budget,dispatch } = useContext(AppContext)

    function handleSubmit(e){
        e.preventDefault();
        console.log(e)
        console.log(e.target.budget.value)
        dispatch({
            type: 'CHANGE_BUDGET',
            payload: e.target.budget.value,
        });
    }

  return (
      <AppProvider>
          <div className='container'>

            <h1>My Budget Planner</h1>
            <div className='row'>
                <div className='col-sm-4'>
                    <BudgetForm onSubmit={handleSubmit}  budget={budget}/>
                </div>
            </div>

            <div className='row mt-3'>
              <div className='col-sm'>
                <Budget/>
              </div>

              <div className='col-sm'>
                <Remaining/>
              </div>

              <div className='col-sm'>
                <ExpenseTotal/>
              </div>
            </div>

              <h3 className='mt-3'>Expenses</h3>
              <div className='row mt-3'>
                  <div className='col-sm'>
                      <ExpenseList/>
                  </div>
              </div>
              <h3 className='mt-3'>Add Expenses</h3>
              <div className='row mt-3'>
                  <div className='col-sm'>
                      <AddExpenseForm/>
                  </div>
              </div>
          </div>
      </AppProvider>
  );
}

export default App;
