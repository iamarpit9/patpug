"use client"
import BlogCard from "@/components/blog/BlogCard";
import Loader from "@/components/common/Loader";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { GetBlogs } from "@/utils/utils";



const Blog = () => {


  const { blogs, error, isLoading } = GetBlogs()

  if (isLoading) return <Loader/>
  if (error) return <div>{error}</div>

  return (
    <MaxWidthWrapper>
      <div className="pt-20 md:max-w-3xl">
        <div className="tracking-[0.2rem] text-[#627478]">
          WE SHARE WHAT WE BELIEVE IN!
        </div>
        </div>
      <div className="flex flex-col items-center justify-center lg:min-w-[338px]">
        {blogs.map((blog: any) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>

    </MaxWidthWrapper>
  );
};

export default Blog;
