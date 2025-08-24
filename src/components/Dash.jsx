import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Dash = () => {

  let [accState,setAccState] = useState(true);
  let [myQuiz,setMyQuiz] = useState(false);
  let [performance,setperformance] = useState(false);
  let [makeQuiz,setmakeQuiz] = useState(false); 


  let accClick = () =>{
    setAccState(true);
    setMyQuiz(false);
    setperformance(false);
    setmakeQuiz(false);
  }

  let quizClick = () =>{
    setAccState(false);
    setMyQuiz(true);
    setperformance(false);
    setmakeQuiz(false);
  }

  let performanceClick = () =>{
    setAccState(false);
    setMyQuiz(false);
    setperformance(true);
    setmakeQuiz(false);
  }

  let makeClick = () =>{
    setAccState(false);
    setMyQuiz(false);
    setperformance(false);
    setmakeQuiz(true);
  }

  return (
    

    <div className='flex flex-col '>

      <div className='bg-black w-full h-30 bg-gradient-to-l from-blue-400 to-purple-400 flex items-center justify-center gap-40 text-4xl text-white changareg text-shadow-lg  '>
        <NavLink to={'#'} className='hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl' onClick={accClick}>Account</NavLink>
        <NavLink to={'#'} className='hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl' onClick={quizClick}>My Quizes</NavLink>
        <NavLink to={'#'} className='hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl' onClick={performanceClick}>My Performance</NavLink>
        <NavLink to={'#'} className='hover:text-shadow-purple-300 hover:text-shadow-xs hover:text-4xl' onClick={makeClick}>Make a Quiz</NavLink> 
      </div>

      {
          accState && <div className='mt-7'>
            <h1>account</h1>
          </div>
      }

      {
          myQuiz && <div className='mt-7'>
            <h1>My Quizes</h1>
          </div>
      }

      {
          performance && <div className='mt-7'>
            <h1>my performance</h1>
          </div>
      }

      {
          makeQuiz && <div className='mt-7'>
            <h1>Make Quiz</h1>
          </div>
      }
    </div>
  )
}

export default Dash
