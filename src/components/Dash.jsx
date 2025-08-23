import React from 'react'
import { NavLink } from 'react-router-dom'

const Dash = () => {
  return (
    <div className='bg-black w-full h-30 bg-gradient-to-l from-blue-400 to-purple-400 flex items-center justify-center gap-40 text-4xl text-white changareg text-shadow-lg  '>

        <NavLink to={'/'} className='hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl'>Account</NavLink>
        <NavLink to={'/'} className='hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl'>My Quizes</NavLink>
        <NavLink to={'/'} className='hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl'>My Performance</NavLink>
        <NavLink to={'/'} className='hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl'>About</NavLink>
            
      
    </div>
  )
}

export default Dash
