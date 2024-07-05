import { useBlogs } from "@/hooks";
import Header from "./BlogHeader";
import BlogStructure from "./BlogStructure";
import Loading from "./loading";


export default function Blogs() {
  const { blogs, loading } = useBlogs();

  return (
    <div className="flex flex-col">
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mx-10">
          {blogs.map((blog) => (
            <BlogStructure 
              key={blog.id} 
              blog={blog} 
            />
          ))}
        </div>
      )}
    </div>
  );
}


