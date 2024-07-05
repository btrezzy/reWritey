import { useEffect, useState } from "react";
import Header from "./BlogHeader";
import BlogStructure from "./BlogStructure";
import Loading from "./loading";



export default function Blogs() {

   const [loading, setLoading] = useState(true);
   const [blogs, setBlogs] = useState({});
   

  return (
       
      <div className="flex flex-col">
        <Header />
      
  
        <Loading/>
          
      
          


      
      </div>

  );
}

