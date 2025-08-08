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
        

        <div className='grid grid-cols-4 mx-50 mt-65 ' id='allQuizes'>

          <div className='flex items-center justify-center cursor-pointer'>

            <img src={general} alt="" srcset="" className='absolute w-70 h-60 rounded-4xl   hover:opacity-50 ' />
            <h1 className='relative w-50 text-4xl font-bold text-white  z-10  drop-shadow-[6px_6px_6px_black]'>General Knowledge</h1>
          </div>

          <div className='flex items-center justify-center '>

            <img src={science} alt="" srcset="" className='absolute w-70 h-60 rounded-4xl cursor-pointer  hover:opacity-50 ' />
            <h1 className='relative w-50 text-4xl font-bold text-white  z-10  drop-shadow-[6px_6px_6px_black]'>Science & Technology</h1>

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
