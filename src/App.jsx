import React, { useState } from 'react'
import Context from './context/Context'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {

  const router = createBrowserRouter([

    {
      path:'/',
      element:<HomePage/>
    }

  ]);
  
  return (
    <div>

      <RouterProvider router={router}/>

      
    </div>
  )
}

export default App
