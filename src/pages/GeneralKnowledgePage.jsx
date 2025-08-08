import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

import general from '../assets/CatagoryPhotos/general.jpg'
import { data } from 'react-router-dom';

const GeneralKnowledgePage = () => {

    const [allGeneral,setAllGeneral] = useState([]);
    const [searchQuery,setSearch] = useState("");
    const [allQuizes,setAllQuizes] = useState([]);
    const [allFiltered,setAllFiltered] = useState([]);
    
    useEffect(()=>{

    let getAllQuizes = async () =>{
      let res = await fetch("http://localhost:9005/allQuiz")
      let data = await res.json();
      setAllQuizes(data);
        let generalQuizes =  data.filter((item)=>item.quizType === "General Knowledge")
        setAllGeneral(generalQuizes);
        setAllFiltered(generalQuizes);

        console.log(allGeneral)
    }
    getAllQuizes();
    },[])

    let search = ()=>{

      const result = allGeneral.filter((item)=>{
        return item.quizName.toLowerCase().includes(searchQuery.toLowerCase())
      })

      setAllFiltered(result);

    }



  return (
    <div>
        <NavBar/>

        <div className='flex justify-between mt-50 mx-20 '>
          <h1 className='text-3xl changareg text-shadow-lg '>General Knowledge</h1>
          <div className='space-x-2'>

            <input 
              type="text" 
              name="" id="" 
              className='focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm border border-gray-300 rounded-full h-10 w-70 px-4'
              onChange={(e)=>{setSearch(e.target.value)}} 
            />

            <input 
              type="button" 
              value="Search" 
              className='bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-2 w-30 hover:opacity-80 cursor-pointer text-white'
              onClick={search}
            />

          </div>
        </div>

        <div className='grid grid-cols-5 mx-20  gap-20 mt-5 ' id='generalKnowlwdge'>

            {
                allFiltered.map((item,index)=>{

                    return (
                    
                        <div className="flex flex-col w-80 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-xl transition duration-300  " key={index}>

            
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
                                className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-80 cursor-pointer w-full font-semibold"
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
