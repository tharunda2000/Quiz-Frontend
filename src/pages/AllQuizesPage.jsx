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

  

  return (
    <div>
        <NavBar/>
        

        <div className='grid grid-cols-4 mx-90 mt-85 ' id='allQuizes'>

          <div className='flex items-center justify-center cursor-pointer'>

            <img src={general} alt="" srcset="" className='absolute w-70 h-60 rounded-4xl shadow-2xl  hover:opacity-50 hover:shadow-blue-500' />
            <h1 className='relative w-50 text-4xl font-bold text-white  z-10  drop-shadow-[6px_6px_6px_black] text-center'>General Knowledge</h1>
          </div>

          <div className='flex items-center justify-center cursor-pointer'>

            <img src={science} alt="" srcset="" className='absolute w-70 h-60 rounded-4xl cursor-pointer  hover:opacity-50  shadow-2xl hover:shadow-blue-500' />
            <h1 className='relative w-50 text-4xl font-bold text-white  z-10  drop-shadow-[6px_6px_6px_black] text-center'>Science & Technology</h1>

          </div>

          <div className='flex items-center justify-center cursor-pointer'>

            <img src={maths} alt="" srcset="" className='absolute w-70 h-60 rounded-4xl cursor-pointer  hover:opacity-50  shadow-2xl hover:shadow-blue-500' />
            <h1 className='relative w-50 text-4xl font-bold text-white  z-10  drop-shadow-[6px_6px_6px_black] text-center'>Mathematics</h1>

          </div>

          <div className='flex items-center justify-center cursor-pointer'>

            <img src={it} alt="" srcset="" className='absolute w-70 h-60 rounded-4xl cursor-pointer  hover:opacity-50  shadow-2xl hover:shadow-blue-500' />
            <h1 className='relative w-50 text-4xl font-bold text-white  z-10  drop-shadow-[6px_6px_6px_black] text-center'>Programming & IT</h1>

          </div>

          <div className='flex items-center justify-center mt-45 cursor-pointer'>

            <img src={litarature} alt="" srcset="" className='absolute w-70 h-60 rounded-4xl cursor-pointer  hover:opacity-50  shadow-2xl hover:shadow-blue-500' />
            <h1 className='relative w-50 text-4xl font-bold text-white  z-10  drop-shadow-[6px_6px_6px_black] text-center'>Language & Literature</h1>

          </div>

          <div className='flex items-center justify-center mt-45 cursor-pointer'>

            <img src={history} alt="" srcset="" className='absolute w-70 h-60 rounded-4xl cursor-pointer  hover:opacity-50  shadow-2xl hover:shadow-blue-500' />
            <h1 className='relative w-50 text-4xl font-bold text-white  z-10  drop-shadow-[6px_6px_6px_black] text-center'>History & Culture</h1>

          </div>

          <div className='flex items-center justify-center mt-45 cursor-pointer'>

            <img src={media} alt="" srcset="" className='absolute w-70 h-60 rounded-4xl cursor-pointer  hover:opacity-50  shadow-2xl hover:shadow-blue-500' />
            <h1 className='relative w-50 text-4xl font-bold text-white  z-10  drop-shadow-[6px_6px_6px_black] text-center'>Entertainment & Media</h1>

          </div>
          
          <div className='flex items-center justify-center mt-45 cursor-pointer'>

            <img src={sports} alt="" srcset="" className='absolute w-70 h-60 rounded-4xl cursor-pointer  hover:opacity-50  shadow-2xl hover:shadow-blue-500' />
            <h1 className='relative w-50 text-4xl font-bold text-white  z-10  drop-shadow-[6px_6px_6px_black] text-center'>Sports & Games</h1>

          </div>

        </div>
      
    </div>
  )
}

export default AllQuizesPage
