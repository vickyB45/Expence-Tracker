import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobleState'
import Transactions from './Transactions'

const TrangitionComponent = () => {
  
 const {transactions} =  useContext(GlobalContext)

  return (
    <div>
        <h2 className='py-3 border-b-2 text-left mt-3 font-medium text-xl'>History</h2>
        <ul>
          {transactions.map(transition => (
             <Transactions key={transactions.id} transition = {transition}/>
          )
             )}
          
        </ul>
    </div>
  )
}

export default TrangitionComponent
