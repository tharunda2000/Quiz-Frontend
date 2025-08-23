import React from 'react'
import logo from '../assets/mainLogo.png'
import { useAppContext } from '../context/Context'
import { NavLink,useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const NavBar = () => {

const {logedIn,setLogedIn,currentUser} =useAppContext();
const navigate = useNavigate();

const notifyOut = () => toast.success('Logged Out', {
                          duration: 2000
                        })
const logOutFunc = () =>{
  setLogedIn(!logedIn);
  notifyOut();
}


  return (
    <div className='flex fixed top-0 bg-gradient-to-r from-indigo-500 to-purple-600 w-screen h-35 justify-between items-center shadow-lg shadow-purple-300'>
        <img src={logo} className='w-35 ms-15' />
        <div className='flex gap-20 text-3xl text-white changareg text-shadow-lg '>
            <NavLink to={'/'} className='hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl'>Home</NavLink>
            <NavLink to={'/allQuizes'} className='hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl'>Quizes</NavLink>
            <NavLink to={'/dashboard'} className={logedIn?'hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl':'hidden'}>Dashboard</NavLink>
            <NavLink to={'/'} className='hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl'>About</NavLink>
            

        </div>

       <div className='flex  items-center me-10 justify-center'>

          <div className='changareg text-xl'>
            <input type="button" value={"Login"} className={logedIn ?'hidden ':' bg-white rounded-4xl p-2 w-30 h-13 hover:bg-black hover:text-white cursor-pointer'} onClick={()=>navigate('/login')}/>
            <input type="button" value={"Logout"} className={!logedIn ?'hidden ':' bg-white rounded-4xl p-2 w-30 h-13 hover:bg-black hover:text-white cursor-pointer'} onClick={()=>logOutFunc()} />
          </div>
          < i class="ri-account-circle-fill text-5xl ms-5"></i>

       </div> 
      
    </div>
  )
}

export default NavBar
