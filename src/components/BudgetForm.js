import {useContext} from "react";
import {AppContext} from "../context/AppContext";

const BudgetForm = ({budget,onSubmit,...props}) => {
    const {dispatch} = useContext(AppContext);

function handleSubmit (e) {
    e.preventDefault()
    console.log(e)
    console.log(e.target.budget.value)
    dispatch({
        type: 'CHANGE_BUDGET',
        payload: e.target.budget.value,
    });
}

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label>Budget</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control mt-2 mr-sm-2'
                        id='budget'
                        defaultValue={budget}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>Change Budget</button>
                </div>
            </div>
        </form>
    );
};

export default BudgetForm;