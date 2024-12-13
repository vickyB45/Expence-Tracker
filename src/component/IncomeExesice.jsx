import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobleState'

const IncomeExesice = () => {

const {transactions} = useContext(GlobalContext)

const amount = transactions.map((transaction=> transaction.amount))

const income = amount.filter(item => item > 0).reduce((acc,item)=>(acc += item),0).toFixed(2)
const expense = (amount.filter(item => item < 0).reduce((acc,item)=>(acc += item),0)* -1).toFixed(2)


  return (
    <div className='inc-exp-container'>
      <div>
        <h4 className='text-base font-medium'>Income</h4>
        <p style={{color:'green',fontWeight:'800px'}} className='money-plus font-medium'>${income}</p>
      </div>
      <div>
        <h4 className='text-base font-medium'>Expense</h4>
        <p style={{color:'red',fontWeight:'800px'}} className='money-plus font-medium'> ${expense}</p>

      </div>
    </div>
  )
}

export default IncomeExesice
