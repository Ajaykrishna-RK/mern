import React, { useState } from "react";

function CreateProduct() {

const [data,setData] = useState({
  productName:"",
  description:"",
  price:"",
  sizes:"",
  category:""
})

const handleChange = (e)=>{
  setData((prevData)=>({...prevData,[e.target.name]:e.target.value}))
}

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(data,"data")
}

  return (
    <div className="max-w-[90%] sm:max-w-[80%] pb-10 shadow-2xl mx-auto">
      <div className="w-full px-3">
        <p className="text-center text-[30px]"> Create Your Product </p>
        <form className="mt-10"  onSubmit={handleSubmit}>
        <label className="   text-gray-700 text-xs font-bold mb-2">
          Product Name
        </label>
        <input onChange={(e)=>handleChange(e)} value={data?.productName} name="productName" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />

        <label className="   text-gray-700 text-xs font-bold mb-2">
          Description
        </label>
        <input onChange={(e)=>handleChange(e)} value={data?.description} name="description" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />

        <label className="   text-gray-700 text-xs font-bold mb-2">Price</label>
        <input  onChange={(e)=>handleChange(e)} value={data?.price} name="price" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
        <label className="   text-gray-700 text-xs font-bold mb-2">Sizes</label>
        <input onChange={(e)=>handleChange(e)} value={data?.sizes} name="sizes" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
        <label className="   text-gray-700 text-xs font-bold mb-2">Category</label>
        <input onChange={(e)=>handleChange(e)} value={data?.category} name="category" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
        <label className="   text-gray-700 text-xs font-bold mb-2">image</label>
        <input type="file"  className="w-full"/>
      <div className="justify-center flex items-center mt-10 ">
        <button type="submit" className="bg-[blue]  text-white px-5 rounded-lg py-2 "> submit </button>
        </div>
        </form> 
      </div>
    </div>
  );
}

export default CreateProduct;
