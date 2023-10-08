import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios" 
import { BASE_URL } from '../common'
import { useDispatch } from 'react-redux'
import { loggedInSeller } from '../store/RegisterSlice'

function Auth() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
const [isLogin,setLogin] = useState(true)
const [register,setRegister] = useState({
  name:"",
  email:"",
  password:""
})
const [loginDetails,setLoginDetails] = useState({
  email:"",
  password: ""
})


const registerSeller = async()=>{
  try{
const registerResponse = await axios.post(`${BASE_URL}seller/register`,register)
if(registerResponse.status === 200){
  alert("Registered Successfully , Please login")
  setLogin(true)
}

  }catch(err){
    alert(err?.response?.data?.message)
    console.log(err?.response?.data?.message)
  }

}


const login  = async()=>{
  try{
  const loggedInResponse = await axios.post(`${BASE_URL}seller/login`,loginDetails)

if(loggedInResponse.status === 200){
  
  dispatch(loggedInSeller(loggedInResponse?.data))
  navigate("/seller")
  
}

  }catch(err){
    alert(err?.response?.data?.message)
    console.log(err?.response?.data.message,"err")
    
  }
}


// Register
const handleRegisterChange = (e)=>{
  setRegister((prev)=>({...prev,[e.target.name]:e.target.value}))
}

const handleRegister = (e)=>{
  e.preventDefault()
  registerSeller()
} 

// login 

const handleLoginChange  = (e)=>{
  setLoginDetails((prev)=>({...prev,[e.target.name]:e.target.value}))
}

const handleLogin = (e)=>{
 
  e.preventDefault()
 login()
}

  return (

    <>
    {isLogin ?
    <div className='justify-center items-center grid mt-10'>
<div className='text-center'>
  <p className='text-[30px]'>Login</p>
</div>
<div className="w-full max-w-xs">
  <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="">
     Email
      </label>
      <input onChange={(e)=>handleLoginChange(e)} name='email' value={loginDetails.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Email"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="">
        Password
      </label>
      <input onChange={(e)=>handleLoginChange(e)} name='password' value={loginDetails.password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Password"/>
    </div>
  
    <div className="flex items-center justify-between">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
      Login In
      </button>
      <Link className="ml-2 inline-block align-baseline font-bold text-[11px] text-blue-500 hover:text-blue-800" >
        Forgot Password?
      </Link>
  
    </div>
    <div className=' mt-10 flex items-center'>
<Link onClick={()=>setLogin(false)} className='underline text-[10px] text-[blue]'>
Dont have an account? register
</Link>
    </div>
  </form>

</div>


    </div>


: 
<div className='justify-center items-center grid mt-10'>
<div className='text-center'>
  <p className='text-[30px]'>Register</p>
</div>
<div className="w-full max-w-xs">
  <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="">
    Name
      </label>
      <input value={register.name} name='name' onChange={(e)=>handleRegisterChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="">
     Email
      </label>
      <input name='email' value={register.email} onChange={(e)=>handleRegisterChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Email"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="">
        Password
      </label>
      <input name='password' value={register.password} onChange={(e)=>handleRegisterChange(e)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Password"/>
    </div>
  
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Register
      </button>
      <Link className="ml-2 inline-block align-baseline font-bold text-[11px] text-blue-500 hover:text-blue-800" >
        Forgot Password?
      </Link>
  
    </div>
    <div className=' mt-10 flex items-center'>
<Link onClick={()=>setLogin(true)} className='underline text-[10px] text-[blue]'>
Already have an account? Login
</Link>
    </div>
  </form>

</div>


    </div>



}

    </>
  )
}

export default Auth