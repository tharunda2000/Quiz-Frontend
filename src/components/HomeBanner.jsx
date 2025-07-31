import React from 'react'
import banner from '../assets/banner.jpg'

const HomeBanner = () => {
  return (
    <div className='flex mt-45 mx-30 absolute bg-gray-800 rounded-full pe-25 shadow-blue-300 shadow-xl'>

      <div className='flex '>
        <img src={banner} alt="" srcset="" className='rounded-l-full  w-220 h-180 '/>
      </div>

      <div className='flex flex-col ms-20 mt-10 '>
        <h1 className='changareg text-7xl  text-blue-300 '>Quiz Time</h1>
        <p className='text-3xl changaita w-170 mt-10 text-gray-400'>QuizTime is a smart platform for creating, sharing, and taking quizzes. Built for educators and students, it streamlines assessments and supports better learning.</p>
        <div className='flex flex-col changaita text-4xl mt-15'>
        <h2 className='ms-10 text-white'>< i class="ri-checkbox-fill text-green-400 text-shadow-lg animate-pulse"></i> Design powerful quizzes with ease</h2>
        <h2 className='mt-5 ms-10 text-white'>< i class="ri-checkbox-fill text-green-400 text-shadow-lg animate-pulse"></i> Track performance - Boost learning</h2>
        <h2 className='mt-5 ms-10 text-white'>< i class="ri-checkbox-fill text-green-400 text-shadow-lg animate-pulse"></i> QuizTime simplifies testing for all</h2>
        </div>

        <div className='flex mt-20 gap-10 text-xl'>

          <input type="button" value="Make Quiz" className='bg-blue-500 text-white p-5 rounded-2xl hover:animate-pulse w-40 cursor-pointer' />
          <input type="button" value="Face Quiz" className='bg-green-500 text-white p-5 rounded-2xl hover:animate-pulse w-40 cursor-pointer' />

        </div>

      </div>

      

    </div>
  )
}

export default HomeBanner
