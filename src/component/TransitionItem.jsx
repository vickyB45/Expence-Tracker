import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const TransitionItem = () => {
    // const [isShow, setIsShow] = useState(false)
    // const [isActiveLi, setIsActiveLi] = useState(true)
  
  
    const {userName} = useContext(UserContext)
    console.log(userName.text)
    // const handleClick=()=>{


    //   if(isActiveLi){
    //     setIsActiveLi(false)
    //   }
    //   else{
    //     setIsActiveLi(true)
    //   }
    // }
  

  return (
    <div>
       {/* {isActiveLi?  */}
        <li className={`font-medium item text-left py-1.5 px-3 border-r-2 flex justify-between`}>
            {userName.text} {}<span>${userName.amount}.00</span>
             {/* <button onClick={handleClick} className={isShow===true? 'delete-btn': 'delete'}>X</button> */}
          </li>
          {/* : ""} */}
    </div>
  )
}

export default TransitionItem
