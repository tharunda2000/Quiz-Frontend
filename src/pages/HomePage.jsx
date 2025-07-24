import React from 'react'
import { useAppContext } from '../context/Context'
import NavBar from '../components/NavBar';

const HomePage = () => {

    const {logedIn,setLogedIn} = useAppContext();
  return (
    <div>
        <NavBar/>
      
    </div>
  )
}

export default HomePage
