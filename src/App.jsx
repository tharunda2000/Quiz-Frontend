import React, { useState } from 'react'
import Context from './context/Context'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import { Toaster } from 'react-hot-toast';

const App = () => {

  const router = createBrowserRouter([

    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/login',
      element:<LoginPage/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    },

  ]);
  
  return (
    <div>
      <Toaster position="top-center" />
      <RouterProvider router={router}/>

      
    </div>
  )
}

export default App
