import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobleState'

const Transactions = ({ transition }) => {

    const {deleteTransaction}=useContext(GlobalContext)
    const [isDisplay, setIsDisplay] = useState(false)




    const handleMouseEnter = () => {
        setIsDisplay(true)
    }
    const handleMouseLeave = () => {
        setIsDisplay(false)
    }


    const sign = transition.amount < 0 ? '-' : '+'

    return (
     <> 
     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`font-medium item text-left py-1.5 px-3 border-r-2 flex justify-between ${transition.amount <0 ? "minis":""}`}>
        {transition.text}<span className='font-medium'>{sign}${Math.abs(transition.amount)}</span> <button className={ !isDisplay === true? "hide": 'display' } onClick={()=>deleteTransaction(transition.id)} >x</button>
       </li>
     </>
)
}

export default Transactions
