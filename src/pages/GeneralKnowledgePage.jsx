import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

import general from '../assets/CatagoryPhotos/general.jpg'

const GeneralKnowledgePage = () => {

    const [allGeneral,setAllGeneral] = useState([]);
    
    useEffect(()=>{

    let getAllQuizes = async () =>{
      let res = await fetch("http://localhost:9005/allQuiz")
      let data = await res.json();
        console.log(data);
        let generalQuizes = data.filter((item)=>item.quizType === "General Knowledge")
        setAllGeneral(generalQuizes);

        console.log(allGeneral)
    }
    getAllQuizes();
    },[])



  return (
    <div>
        <NavBar/>

        <div className='flex justify-between mt-50 mx-20 '>
          <h1 className='text-3xl changareg text-shadow-lg '>General Knowledge</h1>
          <div className='space-x-2'>
            <input type="text" name="" id="" className='focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm border border-gray-300 rounded-full h-10 w-70 px-4' />
            <input type="button" value="Search" className='bg-blue-300 rounded-full p-2 w-30 hover:bg-blue-400 cursor-pointer'/>
          </div>
        </div>

        <div className='grid grid-cols-6 mx-20  gap-100 mt-15 ' id='generalKnowlwdge'>

            {
                allGeneral.map((item,index)=>{

                    return (
                    
                        <div className="flex flex-col w-80 bg-blue-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-xl transition duration-300  " key={index}>

            
                            <img
                                src={general}
                                alt="Quiz"
                                className="w-full h-48 object-cover"
                            />

                        
                            <div className="p-6 space-y-2">
                                <h1 className="text-2xl font-bold text-gray-800">{item.quizName}</h1>
                                <p className="text-gray-700"><i class="ri-timer-line font-bold"></i> Duration: {item.duration} minutes</p>

                                <input
                                type="button"
                                value="Attempt"
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 cursor-pointer w-full font-semibold"
                                />
                            </div>

                        </div>
                    )
                })
            }

        </div>
      
    </div>
  )
}

export default GeneralKnowledgePage
