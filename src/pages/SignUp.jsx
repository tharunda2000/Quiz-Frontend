import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='flex justify-center items-center bg-blue-100 w-screen h-screen text-shadow-lg'>

        <NavLink to={'/'} className='mt-10 changareg  text-xl'>
            <i className=" absolute top-20 right-20 text-4xl bg-blue-400 rounded-full p-5 cursor-pointer ri-home-4-fill hover:bg-blue-500"></i>
        </NavLink>

        <div className='flex flex-col items-center  bg-blue-200 w-200 h-180 rounded-4xl shadow-lg'>
            <h1 className='mt-10 mb-10 changareg text-6xl text-blue-900'>Signup</h1>
            <input type="email" name="" id=""  placeholder='Enter your email' className='bg-white p-3 rounded-full w-100 h-15 px-10 changareg'/>
            <input type="text" name="" id=""  placeholder='Enter your user name' className='bg-white p-3 rounded-full w-100 h-15 px-10 changareg mt-10'/>
            <input type="password" name="" id=""  placeholder='Enter your password' className='bg-white p-3 rounded-full w-100 px-10 h-15 mt-10 changareg'/>
            <input type="password" name="" id=""  placeholder='confirm your password' className='bg-white p-3 rounded-full w-100 px-10 h-15 mt-10 changareg'/>
            <input type="button" value="Signup" className='bg-blue-500 p-3 rounded-full w-100 px-10 h-15 mt-10 changareg text-3xl cursor-pointer hover:bg-blue-600' />
            <NavLink to={'/login'} className='text-blue-800 mt-10 changareg hover:text-blue-900 text-xl'>already have an account</NavLink>   

        </div>
      
    </div>
  )
}

export default SignUp
