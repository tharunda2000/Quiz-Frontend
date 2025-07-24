import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const appContext = createContext();


export const Context = ({children}) => {

  

  const values ={};

  
  return <appContext.Provider value={values}>
    {children}
  </appContext.Provider>
}

export const useAppContext = () =>{
  return useContext(appContext);
} 
