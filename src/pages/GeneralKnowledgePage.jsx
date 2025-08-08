import React from 'react'
import NavBar from '../components/NavBar'

const GeneralKnowledgePage = () => {

    useEffect(()=>{

    let getAllQuizes = async () =>{
      let res = await fetch("http://localhost:9005/allQuiz")
      let data = await res.json();

      console.log(data);
    }

    getAllQuizes();

  },[])

  return (
    <div>
        <NavBar/>

        <div className='flex justify-between mt-50 mx-20 '>
          <h1 className='text-3xl changareg text-shadow-lg '>all quizes</h1>
          <div className='space-x-2'>
            <input type="text" name="" id="" className='focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm border border-gray-300 rounded-full h-10 w-70 px-4' />
            <input type="button" value="Search" className='bg-blue-300 rounded-full p-2 w-30 hover:bg-blue-400 cursor-pointer'/>
          </div>
        </div>
      
    </div>
  )
}

export default GeneralKnowledgePage
