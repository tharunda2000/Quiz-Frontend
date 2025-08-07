import React from 'react'
import NavBar from '../components/NavBar'

const CreateQuizPage = () => {
  return (
    <div className='flex flex-col '>
        <NavBar/>
        <h1 className='relative lg:mt-50 text-center text-5xl changareg text-shadow-lg'>create quiz</h1>
        <div className='flex bg-blue-200  justify-evenly p-10 lg:mx-120 mt-15  rounded-3xl shadow-xl '>

          <div className='flex flex-col text-2xl changaita-low text-blue-800 mb-10  py-5'>
            <label htmlFor="" className='mt-8'>Quiz Name</label>
            <label htmlFor="" className='mt-12'>Quiz Catagory</label>
            <label htmlFor="" className='mt-12' >Quiz Duration</label>
            <label htmlFor="" className='mt-10'>Aaccess Key</label>

          </div>

          <div className='flex flex-col ms-0 '>
            <input type="text" name="" id="" className='bg-white mt-10 h-10 w-100 rounded-lg px-5 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Quiz name'/>
            <form class="max-w-sm ">
              <select id="countries" class="bg-white border mt-10 border-gray-300 text-black text-sm rounded-lg  focus:border-blue-500 block w-50 p-2.5  shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option selected>Choose a Catagory</option>
                <option value="">General Knowledge</option>
                <option value="">Science & Technology</option>
                <option value="">Mathematics</option>
                <option value="">Language & Literature</option>
                <option value="">History & Culture</option>
                <option value="">Entertainment & Sports</option>
              </select>
            </form>
            <input type="text" name="" id="" className='bg-white mt-10 h-10 rounded-lg w-50 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 px-5' placeholder='Duration in minutes' />
            <input type="text" name="" id="" className='bg-white mt-10 h-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 px-5' placeholder='Atleast add 8 digits key'/>

          </div> 

        </div>

        <div className='flex items-center justify-center mt-10'>
          <input 
            type="button" 
            value="Create" 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 
                      text-white font-bold py-3 px-8 rounded-2xl shadow-xl 
                      transform hover:scale-105 active:scale-95 
                      transition-all duration-300 ease-in-out tracking-wide cursor-pointer
                      w-50 h-15 te"
          />
        </div>
    </div>
  )
}

export default CreateQuizPage
