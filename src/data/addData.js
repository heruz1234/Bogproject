import { collection ,addDoc } from "firebase/firestore";
import db from "./firebaseData";

export const addNewBlog = async (input_author,input_content,input_title,input_img) => {
    const newItem = await addDoc(collection(db, "Blog_DB"), {
        author: input_author,
        content: input_content,
        title: input_title,
        img: input_img,
        
      }
    )
 
      return newItem
}