import React, { useContext, useState } from 'react'
import NavBar from '../components/NavBar'
import { useAppContext } from '../context/Context';
import toast, { Toaster } from 'react-hot-toast';

const CreateQuizPage = () => {

  const {logedIn,currentUser,setQuizes} = useAppContext();
  const [newQuiz,setNewQuiz] = useState(
    {
      quizName :"",
      duration :0,
      accessKey:"",
      quizType:""
    }
  );

  const success = () => toast.success('Quiz successfully created', {
                          duration: 2000
                          })

  const notifyFail = () => toast.error('Failed to create ', {
                          duration: 2000
                        })
  const passError = () => toast.error('Password should be at least 8 characters ', {
                          duration: 2000
                        })
  const typeError = () => toast.error('Please choose a catagory ', {
                          duration: 2000
                        })
  const durationError = () => toast.error('Please enter a valid duration ', {
                          duration: 2000
                        })



  async function createQuiz(){

    if(!isNaN(newQuiz.duration)&&newQuiz.duration!==""){
      if(newQuiz.quizType!=="Choose a Catagory"){

      if(newQuiz.accessKey.length>7){
        let res = await fetch(`http://localhost:9005/quiz?userId=${currentUser.userId}`,
        {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(newQuiz)
        }
        )

        if(res.ok){
            success();
            let res = await fetch("http://localhost:9005/allQuiz");
            let data = await res.json();
            await setQuizes(data)
          }else{
            notifyFail();
          }
        }else{
          passError();
        }

      }else{
        typeError();
      }
    }else{
      durationError();
    }
  }

  console.log(newQuiz);
  
 
  return (
    <div className='flex flex-col '>
        <NavBar/>
        <h1 className='relative lg:mt-50 text-center text-5xl changareg text-shadow-lg'>create quiz</h1>
        <div className='flex bg-blue-200  justify-evenly p-10 lg:mx-120 mt-15  rounded-3xl shadow-xl '>

          <div className='flex flex-col text-2xl changaita-low text-blue-800 mb-10  py-5'>
            <label htmlFor="" className='mt-8'>Quiz Name</label>
            <label htmlFor="" className='mt-12'>Quiz Catagory</label>
            <label htmlFor="" className='mt-12' >Quiz Duration</label>
            <label htmlFor="" className='mt-10'>Access Key</label>

          </div>

          <div className='flex flex-col ms-0 '>
            <input type="text" name="" id="" className='bg-white mt-10 h-10 w-100 rounded-lg px-5 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Quiz name' onChange={(e)=>setNewQuiz({...newQuiz,quizName:e.target.value})}/>
            <form class="max-w-sm ">
              <select id="countries" class="bg-white border mt-10 border-gray-300 text-black text-sm rounded-lg  focus:border-blue-500 block w-50 p-2.5  shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>setNewQuiz({...newQuiz,quizType:e.target.value})}>
                <option selected>Choose a Catagory</option>
                <option value="General Knowledge">General Knowledge</option>
                <option value="Science & Technology">Science & Technology</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Programming & IT">Programming & IT</option>
                <option value="Language & Literature">Language & Literature</option>
                <option value="History & Culture">History & Culture</option>
                <option value="Entertainment & Media">Entertainment & Media</option>
                <option value="Sports & Games">Sports & Games</option>
              </select>
            </form>
            <input type="text" name="" id="" className='bg-white mt-10 h-10 rounded-lg w-50 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 px-5' placeholder='Duration in minutes' onChange={(e)=>setNewQuiz({...newQuiz,duration:e.target.value})}/>
            <input type="text" name="" id="" className='bg-white mt-10 h-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 px-5' placeholder='Atleast add 8 digits key' onChange={(e)=>setNewQuiz({...newQuiz,accessKey:e.target.value})}/>

          </div> 

        </div>

        <div className='flex items-center justify-center mt-10'>
          <input 
            type="button" 
            value="Create"
            onClick={createQuiz} 
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
