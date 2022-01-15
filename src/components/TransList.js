import React,{useContext} from 'react'
import { GlobalContext } from "../context/Global";

const TransList = () => {

    let {transactions} = useContext(GlobalContext);
    const {deleteTransaction} = useContext(GlobalContext)

    return (
        <>
        <div className="transaction_history">
            <h3 className="center_it">Income List</h3>
                <ul className="transaction_history_1">
                {
                    transactions.map((transaction,ind) =>( transaction.amount >= 0 ? 
                    <>                       
                        <li key={ind} className={transaction.amount>=0 ? "green" : "red"}>
                            <span>{transaction.text} </span>
                            <span>{transaction.amount>=0 ? "+" : "-"}${Math.abs(transaction.amount)} <a onClick={()=>deleteTransaction(transaction.id)} className="icon1" ><i className="fas fa-trash-alt icon1"></i></a></span>
                        </li>
                        </> : ""
                    ))
                }
                </ul>
            </div>
            
        </>
    )
}

export default TransList