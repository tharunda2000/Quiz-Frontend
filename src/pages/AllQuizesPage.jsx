import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'

import general from '../assets/CatagoryPhotos/general.jpg'
import history from '../assets/CatagoryPhotos/history.jpg'
import it from '../assets/CatagoryPhotos/it.jpg'
import litarature from '../assets/CatagoryPhotos/literature.jpg'
import maths from '../assets/CatagoryPhotos/maths.jpg'
import media from '../assets/CatagoryPhotos/media.jpg'
import science from '../assets/CatagoryPhotos/science.jpg'
import sports from '../assets/CatagoryPhotos/sports.jpg'

const AllQuizesPage = () => {

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

        <div className='grid grid-cols-4 mx-50 mt-10 ' id='allQuizes'>

          <div>

            <img src={general} alt="" srcset="" className='w-70 h-60 rounded-4xl' />

          </div>

          <div>

            <img src={science} alt="" srcset="" className='w-70 h-60 rounded-4xl' />

          </div>
          <div>

            <img src={maths} alt="" srcset="" className='w-70 h-60 rounded-4xl' />

          </div>
          <div>

            <img src={it} alt="" srcset="" className='w-70 h-60 rounded-4xl' />

          </div>
          <div>

            <img src={litarature} alt="" srcset="" className='w-70 h-60 rounded-4xl mt-15' />

          </div>
          <div>

            <img src={history} alt="" srcset="" className='w-70 h-60 rounded-4xl mt-15' />

          </div>
          <div>

            <img src={media} alt="" srcset="" className='w-70 h-60 rounded-4xl mt-15' />

          </div>
          
          <div>

            <img src={sports} alt="" srcset="" className='w-70 h-60 rounded-4xl mt-15' />

          </div>

        </div>
      
    </div>
  )
}

export default AllQuizesPage
