import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import HeaderNavBar from '../components/Header'
import { doc, getDoc } from "firebase/firestore";
import db from '../data/firebaseData';
export default function SingleBlogPage() {
   const blogId = useParams()
   const [data, setData] =useState([])
   

    const getSingleData =async () => {
      const Sinlgedata = doc(db, "Blog_DB", blogId.id);
      const docSnap = await getDoc(Sinlgedata);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data(),);
        setData(docSnap.data())
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    useEffect(() =>{
      console.log('id', blogId.id, typeof(blogId))

      getSingleData() 

    },[])
  return (
    <div className='bg-black h-[100%] text-white '>
      <HeaderNavBar/>
      <div className='h-[90vh]  bg-gradient-to-t from-black to-white  md:py-[80px] md:px-[100px] md:flex justify-between w-[100%]'>
          <img src={data.img} alt="" className='md:w-[45%] h-[] md:h-[70%] md:rounded-[20px]'/>
          <br />
          <div className='md:w-[50%] mx-4 md:h-[70%] rounded-[20px]'>
            < h2 className=' text-[30px] text-gray-500'>{data.title}</h2>
            <div className=' pt-6 pb-3  text-gray-800 border border-b-2 border-t-0 border-x-0' >{data.content}</div>
            <div className='py-6 text-2xl md:text-xl text-[red]'>{data.author}</div>
          </div>
       </div>
    
    
    </div>
  
  )
}
