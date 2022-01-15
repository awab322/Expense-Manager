import React,{useContext} from 'react'
import { GlobalContext } from "../context/Global";

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction=>transaction.amount)

    const income = amounts.filter(item => item > 0).reduce((total, curValue) => (total += curValue), 0);
    const expense = (amounts.filter(item => item < 0).reduce((total, curValue) => (total += curValue), 0) *-1);

    return (
        <>
            <div className="income_expense center_it">
                <h3 >INCOME <br/> <span className="green">${(income)}</span> </h3>
                <h3 >EXPENSE <br/><span className="red">${(expense)}</span></h3>
            </div>
            
        </>
    )
}

export default IncomeExpense
