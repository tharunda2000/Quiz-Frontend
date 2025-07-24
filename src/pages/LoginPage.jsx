import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center bg-blue-100 w-screen h-screen'>

        <div className='flex flex-col items-center  bg-blue-200 w-200 h-170 rounded-4xl shadow-lg'>
            <h1 className='mt-30 mb-10 changareg text-6xl text-blue-900'>Login</h1>
            <input type="email" name="" id=""  placeholder='Enter your email' className='bg-white p-3 rounded-full w-100 h-15 px-10 changareg'/>
            <input type="password" name="" id=""  placeholder='Enter your password' className='bg-white p-3 rounded-full w-100 px-10 h-15 mt-10 changareg'/>
            <input type="button" value="Login" className='bg-blue-500 p-3 rounded-full w-100 px-10 h-15 mt-10 changareg text-3xl cursor-pointer hover:bg-blue-600' />
            <NavLink to={'/signup'} className='text-blue-800 mt-10 changareg hover:text-blue-900 text-xl'>don't have an account</NavLink>   

        </div>
      
    </div>
  )
}

export default LoginPage
