import React, { useState } from 'react'
import HeaderNavBar from '../components/Header'
import { addNewBlog } from '../data/addData';



export default function AddNewBlog() {
  const [Image,setImage] = useState();
  const [Author,setAuthor] =useState();
  const [Title,setTitle] = useState();
  const [Content,setContent] =useState();

  const editImage = (e) =>{
    setImage(e.target.value)
  }
  const editAuthor = (e) =>{
    setAuthor(e.target.value)
  }
  const editTitle = (e) =>{
    setTitle(e.target.value)
  }
  const editContent = (e) =>{
    setContent(e.target.value)
  }

   const handleSubmit= async ()=>{
     try{
      const response = await addNewBlog(author, content, title, image);
      Navigate(`/single_blog/${response.id}`)
    } catch (err){
      console.log(`Error occured is: ${err}`);
    }
    
      
    }
  
  return (
    
      <div className="  bg-gray-900 h-[100vh]  w-[100%]  text-gray-300 text-center">
        <HeaderNavBar />
    
    <div>
    <div className=" rounded-sm bg-blue-300 py-4">
      <div className=" w-[100%] text-black mb-3">
        <h1 className=' text-[2rem] font-bold'>Add New Blog</h1>
      </div>
      <input type="text" placeholder='Image' value={Image} 
              onChange={(event)=>editImage(event)} 
              className='w-[90%] my-4 px-2 py-3 bg-[rgb(0,0,0,0.6)] outline-none rounded-md  '/>
      <input  type="text" placeholder='Title' 
              value={Title}
              onChange={(event)=>editTitle(event)}
              className='w-[90%] my-4 px-2 py-3 bg-[rgb(0,0,0,0.6)] outline-none rounded-md ' />
      <input type="text" placeholder='Author'
              value={Author} 
              onChange={(event)=>editAuthor(event)} 
              className='w-[90%] my-4 px-2 py-3 bg-[rgb(0,0,0,0.6)] outline-none rounded-md' />
      <textarea name='Content' 
                value={Content}
                onChange={(event)=>editContent(event)}
                className='w-[90%] my-4 px-2 py-3 bg-[rgb(0,0,0,0.6)] outline-none rounded-md '></textarea><br />
      <button className='border rounded px-6 py-2 hover:bg-black bg-[rgb(0,0,0,0.6)]' onClick={handleSubmit}>Sign up</button>
    </div>
    <div className=' bg-blue-400 h-[20vh]'/>    
    </div>
  </div>
  
  )
}
