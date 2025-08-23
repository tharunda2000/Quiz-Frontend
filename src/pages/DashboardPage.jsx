import React from 'react'
import NavBar from '../components/NavBar'
import Dash from '../components/Dash'

const DashboardPage = () => {
  return (
    <div className='relative'>
      <NavBar/>
      <div className='relative mt-35 '><Dash/></div>
      
    </div>
  )
}

export default DashboardPage
