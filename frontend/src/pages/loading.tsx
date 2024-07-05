import BlogSkeleton from "./BlogSkeleton";

export default function Loading() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mx-10">
    
      {Array.from({ length: 9 }).map((_, index) => (
        <BlogSkeleton key={index} />
      ))}
    </div>
  );
}
  