import React, { useState } from 'react'
import Context from './context/Context'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

const App = () => {

  const router = createBrowserRouter([

    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/login',
      element:<LoginPage/>
    }

  ]);
  
  return (
    <div>

      <RouterProvider router={router}/>

      
    </div>
  )
}

export default App
