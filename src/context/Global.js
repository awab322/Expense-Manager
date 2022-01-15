import React, { createContext, useReducer } from 'react';
import {AppReducer} from './AppReducer';

const initialState = {transactions:[]}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

//   Actions Here

function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANS',
      payload: transaction
    });
  }

function deleteTransaction(id){
    dispatch({
        type:"DELETE_TRANS",
        payload:id
    })
}

  return (<GlobalContext.Provider value={{transactions: state.transactions , addTransaction , deleteTransaction }}>
    {children}
  </GlobalContext.Provider>);
}