import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobleState'

const Balance = () => {
const {transactions} = useContext(GlobalContext)

const amount = transactions.map(transaction => transaction.amount) 
const total = amount.reduce((acc,item)=> (acc+=item),0).toFixed(2)

  return (
    <div className='text-left my-4 mt-5'>
      <h1 className='text-lg font-semibold'>Your Balance</h1>
      <h1 id='balance' className='text-2xl font-bold'>${total}</h1>
    </div>
  )
}

export default Balance
