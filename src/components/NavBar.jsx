import React from 'react'
import logo from '../assets/mainLogo.png'
import { useAppContext } from '../context/Context'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

const {logedIn,setLogedIn} =useAppContext();


  return (
    <div className='flex fixed bg-blue-200 w-screen h-25 justify-between items-center'>
        <img src={logo} alt="" srcset="" className='w-20 ms-15' />
        <div className='flex'>
            
        </div>
        <input type="button" value={logedIn?"Log Out":"Login"} className='me-10'/>
      
    </div>
  )
}

export default NavBar
