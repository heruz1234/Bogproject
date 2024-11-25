import React from 'react'

export default function () {
  return (
    <div className="  bg-blue-400 ">
    <div className=" ">
      
      <div className='w-[90%] m-[auto] py-16 '> 
        <h1 className='text-center text-[2rem] w-[90%] font-bold'>Edit Blog</h1>
        <input type="text"   className='w-[90%] my-4 px-2 py-3 bg-[rgb(0,0,0,0.6)] outline-none rounded-md' />
        <input type="text"   className='w-[90%] my-4 px-2 py-3 bg-[rgb(0,0,0,0.6)] outline-none rounded-md' />
        <textarea name="" className='w-[90%] my-4 px-2 py-3 bg-[rgb(0,0,0,0.6)] outline-none rounded-md' id=""></textarea>
        
       <br /><button className='border rounded px-6 py-2 hover:bg-black bg-[rgb(0,0,0,0.6)] m-[auto]'>Sign up</button>
      </div>
    </div>
   
    
  </div>
  )
}
