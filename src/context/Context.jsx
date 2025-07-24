import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const appContext = createContext();


export const Context = ({children}) => {

  const [logedIn,setLogedIn]=useState(false)

  const values ={logedIn,setLogedIn};

  
  return <appContext.Provider value={values}>
    {children}
  </appContext.Provider>
}

export  const useAppContext = () =>{
  return useContext(appContext);
} 

export default Context;
