import { useState } from "react";
import BlogHeader from "./BlogHeader";
import { CreateBlogInputType } from "@neerajk11/blog-common";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const BACKEND_URL = "https://backend.nirajkumarpatel21.workers.dev";

export default function Create() {
    const navigate = useNavigate();
  const [post, setPost] = useState<CreateBlogInputType>({
    title: "",
    content: "",
  });

  async function submitPost(event : any) {
    event.preventDefault();

    try {
    const result = await axios.post(`${BACKEND_URL}/api/v1/blog`, post, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(result.data.blogId);
     navigate(`/blog/${result.data.blogId}`)
   }
   catch(err){
    alert("Try after some time");
   }
     
  }

  return (
    <div>
      <BlogHeader />

      <div>
        <section className="w-full py-6 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
              <div className="space-y-2 not-prose">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Create your blog here!
                </h1>
              </div>
              <form className="space-y-4 mt-5" onSubmit={submitPost}>
                <div>
                  <label htmlFor="title" className="block font-medium">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    placeholder="Enter the blog post title "
                    onChange={(e) => {
                      setPost({ ...post, title: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block font-medium">
                    Content
                  </label>
                  <textarea
                    id="content"
                    rows={10}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    placeholder="Enter the blog post content"
                    onChange={(e) => {
                      setPost({ ...post, content: e.target.value });
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
