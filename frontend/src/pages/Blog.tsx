import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import BlogHeader from "../pages/BlogHeader";
import { getRandomDateIn2024 } from "./BlogStructure";
import Loading from "./loading";

export default function Blog() {
  const { id } = useParams();

  const { blog, loading } = useBlog({ id: id as string });
  console.log(blog?.content);

  return (
    <div>
      <BlogHeader />

      {loading ? (
        <Loading />
      ) : blog ? (
        <div>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
                <div className="space-y-2 not-prose">
                  <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {blog.title}
                  </h1>
                  <p className="text-muted-foreground">
                    {getRandomDateIn2024()}
                  </p>
                </div>
                <p className="mt-10">{blog.content}</p>
              </article>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <p>Blog post not found</p>
        </div>
      )}
    </div>
  );
}
