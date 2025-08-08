import { useNavigate } from 'react-router-dom';
import banner from '../assets/banner.jpg'
import { useAppContext } from '../context/Context'

const HomeBanner = () => {

  const {logedIn} =useAppContext();
  const navigate = useNavigate();

  let makeQuiz=()=>logedIn?navigate('/createQuiz'):navigate('/login');

  return (
    <div className='flex flex-col lg:flex-row mt-45 items-center lg:mx-30 absolute bg-gray-800 lg:bg-gray-800 lg:rounded-full pe-25 lg:shadow-purple-300 lg:shadow-xl'>

      <div className='flex '>
        <img src={banner} alt="" srcset="" className='w-120 h-80 lg:rounded-l-full  lg:w-220 lg:h-180 '/>
      </div>

      <div className='flex flex-col lg:ms-20 mt-10 items-center lg:items-start '>
        <h1 className='changareg lg:text-7xl bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent'>Quiz Time</h1>
        <p className='lg:text-3xl changaita lg:w-170 mt-10 text-gray-400'>QuizTime is a smart platform for creating, sharing, and taking quizzes. Built for educators and students, it streamlines assessments and supports better learning.</p>
        <div className='flex flex-col changaita text-2xl lg:text-4xl mt-15'>
        <h2 className='lg:ms-10 text-white'>< i class="ri-checkbox-fill text-purple-500 text-shadow-lg animate-pulse"></i> Design powerful quizzes with ease</h2>
        <h2 className='lg:mt-5 ms-10 text-white'>< i class="ri-checkbox-fill text-purple-500 text-shadow-lg animate-pulse"></i> Track performance - Boost learning</h2>
        <h2 className='lg:mt-5 ms-10 text-white'>< i class="ri-checkbox-fill text-purple-500 text-shadow-lg animate-pulse"></i> QuizTime simplifies testing for all</h2>
        </div>

        <div className='flex mt-20 gap-10 text-xl'>

          <input type="button" value="Make Quiz" className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-5 rounded-2xl hover:animate-pulse w-40 cursor-pointer' onClick={makeQuiz} />
          <input type="button" value="Face Quiz" className='bg-gradient-to-l from-indigo-500 to-purple-600 text-white p-5 rounded-2xl hover:animate-pulse w-40 cursor-pointer' onClick={()=>navigate('/allQuizes')}  />

        </div>

      </div>

      

    </div>
  )
}

export default HomeBanner
