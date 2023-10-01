import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loggedOutSeller } from '../store/RegisterSlice'
import { Link } from 'react-router-dom'


function SellerHome() {

const dispatch = useDispatch()
const {token,seller} = useSelector((state)=>state.registerReducer)

console.log(token,seller,"opooooo")
  return (
    <div>
<div className='justify-end items-end flex'>
<Link to={`${token ? "/seller/createProduct": "/seller" } `}> 
<button   className='bg-[#6565e9] p-1 mr-2 mt-3 rounded-lg text-center text-[white]'> Create Product </button>
</Link>    
</div>


        <p onClick={()=>dispatch()} className='text-[50px] text-[black]'> Home Page </p>
    </div>
  )
}

export default SellerHome