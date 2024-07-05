import axios from "axios"
import { useEffect, useState } from "react";


const BACKEND_URL = "https://backend.nirajkumarpatel21.workers.dev"

export interface Blog {
    "title" : string,
    "content" : string,
     "id" : string,
     "author" : {
        "name" : string,
     }
}

export const useBlog = ( {id} : {id : string}) =>{
    const [blog, setBlog] = useState<Blog>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => {
            console.log(response.data.blog);
            setBlog(response.data.blog);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [id]);

    return {blog, loading};
}


export const useBlogs = () =>{
   const [blogs, setBlogs] = useState<Blog[]>([]);
   const [loading,setLoading] = useState(true);
   
   useEffect ( () =>{
      axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers : {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }) . then( response =>{
                setBlogs(response.data.blogs);
                setLoading(false);
      })
   }, []) 
   
   return { blogs , loading}
}

