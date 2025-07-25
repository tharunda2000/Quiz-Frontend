import React from 'react'
import { useAppContext } from '../context/Context'
import NavBar from '../components/NavBar';
import HomeBanner from '../components/HomeBanner';

const HomePage = () => {

    const {logedIn,setLogedIn} = useAppContext();
  return (
    <div className='bg-blue-100 w-full h-screen'>
        <NavBar/>
        <HomeBanner/>
      
    </div>
  )
}

export default HomePage
