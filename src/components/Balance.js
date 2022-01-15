import React,{useContext} from 'react'
import { GlobalContext } from "../context/Global";

const Balance = () => {
const {transactions} = useContext(GlobalContext)
const amounts=transactions.map(transaction=>transaction.amount)
const total = amounts.reduce((total,curValue) => (total+=curValue),0)

    return (
        <>
            <h3 className="center_it">Your Balance : ${(total)}</h3>
        </>
    )
}

export default Balance
