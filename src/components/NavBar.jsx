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
    <div className='flex fixed bg-blue-300 w-screen h-35 justify-between items-center shadow-lg'>
        <img src={logo} className='w-35 ms-15' />
        <div className='flex gap-20 text-3xl text-blue-950 changareg text-shadow-lg '>
            <NavLink to={'/'} className='hover:text-blue-800'>Home</NavLink>
            <NavLink to={'/'} className='hover:text-blue-800'>Quizes</NavLink>
            <NavLink to={'/'} className={logedIn?'hover:text-blue-800':'hidden'}>Dashboard</NavLink>
            <NavLink to={'/'} className='hover:text-blue-800'>About</NavLink>
            

        </div>

       <div className='flex flex-col items-end me-10'>

          <div className='changareg text-xl'>
            <input type="button" value={"Login"} className={logedIn ?'hidden ':' bg-blue-400 rounded-4xl p-2 w-30 h-13 hover:bg-blue-500 cursor-pointer'} onClick={()=>navigate('/login')}/>
            <input type="button" value={"Logout"} className={!logedIn ?'hidden ':' bg-blue-400 rounded-4xl p-2 w-30 h-13 hover:bg-blue-500 cursor-pointer'} onClick={()=>logOutFunc()} />
          </div>
          <div className='mt-3 changareg text-purple-900'>
            Welcome {logedIn?currentUser.name:"guest"}
          </div>
       </div> 
      
    </div>
  )
}

export default NavBar
