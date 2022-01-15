import React,{useState , useContext} from 'react'
import { GlobalContext } from "../context/Global";

const AddTrans = () => {

    let[text , setText] = useState('')
    let[amount , setAmount] = useState('')
    
    const {addTransaction} = useContext(GlobalContext)

    const handleAdd = e => {
        e.preventDefault();
    
        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount
        }
    
        addTransaction(newTransaction);
        setText("")
        setAmount("")
      }
    
    return (
        <>
            <form onSubmit={handleAdd}>
                <div className="form add_transaction center_it" >
                    <h3>Add Transaction</h3>
                    <input className="add_transaction_input shadow-none" value={text} onChange={(bb)=>{setText(bb.target.value)}} type="text" placeholder="Enter Transaction Detail" required/><br/>
                    <input className="add_transaction_input shadow-none" value={amount} onChange={(bb)=>{Number(setAmount(bb.target.value))}} type="number" placeholder="Enter Amount" required/><br/>                   
                    <div className="btn-group">
                        <button className=" btn btn-outline-success shadow-none" type="submit">ADD</button>
                        {/* <button className=" btn btn-outline-danger shadow-none" type="submit">Expense</button> */}
                    </div>
                </div>
            </form>
            
        </>
    )
}

export default AddTrans
