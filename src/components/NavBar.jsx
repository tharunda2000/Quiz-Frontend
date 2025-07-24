import React from 'react'
import logo from '../assets/mainLogo.png'
import { useAppContext } from '../context/Context'
import { NavLink,useNavigate } from 'react-router-dom';

const NavBar = () => {

const {logedIn,setLogedIn} =useAppContext();
const navigate = useNavigate();


  return (
    <div className='flex fixed bg-blue-200 w-screen h-35 justify-between items-center shadow-lg'>
        <img src={logo} className='w-35 ms-15' />
        <div className='flex gap-20 text-3xl text-blue-950 changareg text-shadow-lg '>
            <NavLink to={'/'} className='hover:text-blue-800'>Home</NavLink>
            <NavLink to={'/'} className='hover:text-blue-800'>Quizes</NavLink>
            <NavLink to={'/'} className='hover:text-blue-800'>About</NavLink>

        </div>

        <div className='changareg text-xl'>
            <input type="button" value={"Login"} className={logedIn ?'hidden ':'me-10 bg-blue-400 rounded-4xl p-2 w-30 h-13 hover:bg-blue-500 cursor-pointer'} onClick={()=>navigate('/login')}/>
            <input type="button" value={"Logout"} className={!logedIn ?'hidden ':'me-10 bg-blue-400 rounded-4xl p-2 w-30 h-13 hover:bg-blue-500 cursor-pointer'} onClick={()=>setLogedIn(!logedIn)} />
        </div>
      
    </div>
  )
}

export default NavBar
