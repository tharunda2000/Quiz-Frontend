import React, { useState } from 'react'
import Context from './context/Context'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import { Toaster } from 'react-hot-toast';
import AllQuizesPage from './pages/AllQuizesPage'
import CreateQuizPage from './pages/CreateQuizPage'
import GeneralKnowledgePage from './pages/GeneralKnowledgePage'

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
    {
      path:'/allQuizes',
      element:<AllQuizesPage/>
    },
    {
      path:'/createQuiz',
      element:<CreateQuizPage/>
    },
    {
      path:'/catagoty/general',
      element:<GeneralKnowledgePage/>
    }

  ]);
  
  return (
    <div>
      <Toaster position="top-center" />
      <RouterProvider router={router}/>

      
    </div>
  )
}

export default App
