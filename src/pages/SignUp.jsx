import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {

  const navigate = useNavigate();

  const success = () => toast.success('Signed up Successfully', {
                          duration: 2000
                        })

  const notifyFail = () => toast.error('Signup Failed', {
                          duration: 2000
                        })

  const emptyField = () => toast.error('Empty Field/s', {
                          duration: 2000
                        })
  const passLength = () => toast.error('Password should be atleast 8 characters', {
                          duration: 3000
                        })
  const passMismatch = () => toast.error('Passwords does not match', {
                          duration: 3000
                        })
  const userDuplicate = () => toast.error('Username or password already exist', {
                          duration: 3000
                        })
  

  const [newUser,setNewUser] = useState({
      name:"",
      email:"",
      password:""
  })

   const {setUsers,users} =useAppContext();

  function register(){

    const checkDuplicate = users.find((user)=> user.email===newUser.email && user.name ===newUser.name);

        if(!checkDuplicate){

          if(newUser.name!="" && newUser.email!="" && newUser.password!=""){
          if(newUser.password.length>7){
            if(document.getElementById("pass1").value===document.getElementById("pass2").value){
              fetch(`http://localhost:9005/user`,
                {
                  method:"POST",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(newUser)
                }
                ).then(res=>{
                if(res.ok){

                  fetch(`http://localhost:9005/users`)
                  .then(res=>res.json())
                  .then(data=>{
                    setUsers(data);
                  })

                  success();
                  navigate('/login')

                }else{
                  notifyFail();
                }
              })

            }else{

              passMismatch();

            }
          }else{
            passLength();
          }

        }else{
          emptyField();
        }

        }else{
          userDuplicate();
        }
      
        
      
    }
  

  return (
    <div className='flex justify-center items-center bg-blue-100 w-screen h-screen text-shadow-lg'>

        <NavLink to={'/'} className='mt-10 changareg  text-xl'>
            <i className=" absolute top-20 right-20 text-4xl bg-blue-400 rounded-full p-5 cursor-pointer ri-home-4-fill hover:bg-blue-500"></i>
        </NavLink>

        <div className='flex flex-col items-center  bg-blue-200 w-200 h-180 rounded-4xl shadow-lg'>
            <h1 className='mt-10 mb-10 changareg text-6xl text-blue-900'>Signup</h1>
            <input type="email" name="" id="1"  placeholder='Enter your email' className='bg-white p-3 rounded-full w-100 h-15 px-10 changareg' onChange={(e)=>setNewUser({...newUser,email:e.target.value})}/>
            <input type="text" name="" id="2"  placeholder='Enter your user name' className='bg-white p-3 rounded-full w-100 h-15 px-10 changareg mt-10' onChange={(e)=>setNewUser({...newUser,name:e.target.value})}/>
            <input type="password" name="" id="pass1"  placeholder='Enter your password' className='bg-white p-3 rounded-full w-100 px-10 h-15 mt-10 changareg'/>
            <input type="password" name="" id="pass2"  placeholder='confirm your password' className='bg-white p-3 rounded-full w-100 px-10 h-15 mt-10 changareg' onChange={(e)=>setNewUser({...newUser,password:e.target.value})}/>
            <input type="button" value="Signup" className='bg-blue-500 p-3 rounded-full w-100 px-10 h-15 mt-10 changareg text-3xl cursor-pointer hover:bg-blue-600' onClick={register}/>
            <NavLink to={'/login'} className='text-blue-800 mt-10 changareg hover:text-blue-900 text-xl'>already have an account</NavLink>   

        </div>
      
    </div>
  )
}

export default SignUp
