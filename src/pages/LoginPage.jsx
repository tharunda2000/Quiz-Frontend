import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context'

const LoginPage = () => {
  const {logedIn,setLogedIn,users} =useAppContext();
  const [email,setEmail] = useState("");
  const [password,setPass] = useState("");
 

  const login = () => {

    

    const output = users.find((u)=>u.email === email && u.password === password);

    if(output){
      alert("success")
    }else{
      alert("fail")
      setLogedIn(false);
    }
    
    
  }

  
  return (
    <div className='flex justify-center items-center bg-blue-100 w-screen h-screen text-shadow-lg'>
        <NavLink to={'/'} className='mt-10 changareg  text-xl'>
             <i className=" absolute top-20 right-20 text-4xl bg-blue-400 rounded-full p-5 cursor-pointer ri-home-4-fill hover:bg-blue-500"></i>
        </NavLink>
       
        <div className='flex flex-col items-center  bg-blue-200 w-200 h-170 rounded-4xl shadow-lg'>
            <h1 className='mt-30 mb-10 changareg text-6xl text-blue-900'>Login</h1>

            <input 
              type="email" 
              id="userEmail"  
              placeholder='Enter your email' 
              className='bg-white p-3 rounded-full w-100 h-15 px-10 changareg'
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input 
              type="password" 
              id="userPass"  
              placeholder='Enter your password' 
              className='bg-white p-3 rounded-full w-100 px-10 h-15 mt-10 changareg' 
              onChange={(e)=>setPass(e.target.value)}
            />

            <input 
              type="button" 
              value="Login" 
              className='bg-blue-500 p-3 rounded-full w-100 px-10 h-15 mt-10 changareg text-3xl cursor-pointer hover:bg-blue-600'
              onClick={login} 
            />
            <NavLink to={'/signup'} className='text-blue-800 mt-10 changareg hover:text-blue-900 text-xl'>don't have an account</NavLink>   

        </div>
      
    </div>
  )
}

export default LoginPage
