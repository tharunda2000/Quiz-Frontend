import React from 'react'
import logo from '../assets/mainLogo.png'
import { useAppContext } from '../context/Context'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

const {logedIn,setLogedIn} =useAppContext();


  return (
    <div className='flex fixed bg-blue-200 w-screen h-25 justify-between items-center'>
        <img src={logo} className='w-20 ms-15' />
        <div className='flex gap-20 text-2xl'>
            

        </div>

        <div>
            <input type="button" value={"Login"} className={logedIn ?'hidden me-10':'me-10 '}/>
            <input type="button" value={"Logout"} className={!logedIn ?'hidden me-10':'me-10 '}/>
        </div>
      
    </div>
  )
}

export default NavBar
