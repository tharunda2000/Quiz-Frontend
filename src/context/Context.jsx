import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'


export const appContext = createContext();


export const Context = ({children}) => {

  const [logedIn,setLogedIn]=useState(false);
  const [users,setUsers]=useState([]);
  const [currentUser,setCurrentUser]=useState({});

  const values ={logedIn,setLogedIn,users,setUsers,currentUser,setCurrentUser};
  

  useEffect(()=>{
    fetch(`http://localhost:9005/users`)
      .then(res=>res.json())
      .then(data=>{
        setUsers(data);
        console.log(users);
    })
      
      
      

  },[]);

  


  
  return <appContext.Provider value={values}>
    {children}
  </appContext.Provider>
}

export  const useAppContext = () =>{
  return useContext(appContext);
} 

export default Context;
