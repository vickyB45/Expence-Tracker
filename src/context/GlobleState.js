import React,{ createContext, useReducer} from "react";
import AppReduser from "./AppReduser"

// Initial state

const initialState = {
        transactions:[]
}
//Create context

export const GlobalContext = createContext(initialState);

// Provider Component

 export const GlobalProvider = ({ children })=>{
    const [state, dispatch]= useReducer(AppReduser, initialState);


//Action


function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload: id
    })
}



function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload: transaction
    })
}



    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        { children }
    </GlobalContext.Provider>)
}