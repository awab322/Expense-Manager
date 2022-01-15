import React,{useReducer , useContext , useState} from 'react'
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import AddTrans from "./AddTrans";
import TransList from "./TransList";
import ExpensesList from "./ExpensesList";

import { GlobalContext } from "../context/Global";

const MainScreen = () => {

    let {transactions} = useContext(GlobalContext);

    return (
        <>
        <div className="container">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 center_card" >
                <div className="card">
                    <h1 className="center_it">Expense Manager</h1>
                    <Balance/>
                    <IncomeExpense/>
                    <AddTrans/>
                </div>
            </div>

            {
                transactions.length > 0 ? <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 center_card">
                <div className="card">
                    <TransList/>
                </div>
            </div> : ""
            }

            {
                transactions.length > 0 ? <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 center_card">
                <div className="card">
                <ExpensesList/>
                </div>
            </div> : ""
            }

        </div>
        </div>
        </>
    )
}

export default MainScreen
