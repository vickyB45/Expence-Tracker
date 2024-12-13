
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobleState'

const AddTransition = () => {

const {addTransaction} = useContext(GlobalContext)

const onSubmit=(e)=>{
e.preventDefault()

if(text===""){
  alert('Text is Required')
}

else if(amount === 0){
  alert('Amount Required')

}
else{
  
const newTransaction = {
  id: Math.floor(Math.random() * 10000000000000000),
  text,
  amount: parseInt(amount)
}
addTransaction(newTransaction)
}

}


const[text,setText] = useState('')
const[amount,setAmount] = useState(0)





  return (
    <>
<h2 className=' border-b-2 text-left mt-7 font-medium text-xl mb-3'>Add New Transition</h2>
<form onSubmit={onSubmit}>
  <div className="form-control">
    <label className='text-lg text-left mb-2' htmlFor="text">Text</label>
    <input  type="text" placeholder='Enter Text... ' value={text} onChange={(e)=>setText(e.target.value)}/>
  </div>
  <div className="form-control">
    <label className='text-lg text-left mb-2 ' htmlFor="amount">Amount <br/>
    <span className='text-sm mb-3 '>(nagative - Expense, positive - income)</span> </label>
    <input type="number" placeholder='Enter Amount...' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
  </div>
  <button id='show' className='mt-3 text-white '>Add Transaction</button>
</form>
    </>
  )
}

export default AddTransition;
