import React, { useEffect, useState } from 'react'
import HeaderNavBar from '../components/Header'
import { addNewBlog } from '../data/addData';
import db from '../data/FirebaseData';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';



export default function EditBog() {
  const [Image,setImage] = useState();
  const [Author,setAuthor] =useState();
  const [Title,setTitle] = useState();
  const [Content,setContent] =useState();

  const navigate = useNavigate()
  const blogId = useParams()

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

    const washingtonRef = doc(db, "Blog_DB", blogId.id);

    try {
      const res = await updateDoc(washingtonRef, { 
      img: Image,
      title: Title,
      content: Content,
      author: Author
      } );
    } catch (err) {
      console.log(`Error occured on update: ${err}`);
      }

      navigate(`/single_blog/${blogId.id}`)
    }

    
    

    const getSingleData =async () => {
      const Sinlgedata = doc(db, "Blog_DB", blogId.id);
      const docSnap = await getDoc(Sinlgedata);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setImage(docSnap.data().img)
        setAuthor(docSnap.data().author)
        setTitle(docSnap.data().title)
        setContent(docSnap.data().content)
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
    
      <div className="  bg-gray-900 h-[100vh]  w-[100%]  text-gray-300 text-center">
        <HeaderNavBar />
    
    <div>
    <div className=" rounded-sm bg-gradient-to-t from-blue-300 to-blue-700 py-4">
      <div className=" w-[100%] text-black mb-3">
        <h1 className=' text-[2rem] font-bold'>Edit Blog</h1>
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
      <button className='border rounded px-6 py-2 hover:bg-black bg-[rgb(0,0,0,0.6)]' onClick={handleSubmit}>Submit Blog</button>
    </div>
    <div className=' bg-blue-400 h-[20vh]'/>    
    </div>
  </div>
  
  )
}
