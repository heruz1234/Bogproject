import { collection ,addDoc } from "firebase/firestore";
import db from './firebaseData'

// export const addBlog = async (input_author,input_content,input_title,input_img) => {
//     const newItem = await addDoc(collection(db, "Blog_DB"), {
//         author: input_author,
//         content: input_content,
//         title: input_title,
//         img: input_img,
//       }
//     );
 
//       return newItem

export const getFirebaseBlog = async (input_author,input_content,input_title,input_img)=> {
    const getAllBlogsFromFirebase = await getDocs(collection(db, 'Blog_DB'));
    let allBlog = []
      getAllBlogsFromFirebase.forEach((item, index) => {
        const blogData = {
            id: item.id,
            img: item.data().img,
            title: item.data().title,
            content: item.data().content,
            author: item.data().author
        }
        allBlog.push(blogData)
      }
    )};
 
      return Item








