"use client";
import BlogCard from "@/components/blog/BlogCard";
import Loader from "@/components/common/Loader";
import { GetBlogs } from "@/utils/utils";

const Blogs = () => {
  const { blogs, error, isLoading } = GetBlogs();

  if (isLoading) return <Loader />;
  if (error) return <div>{error}</div>;
  return (
    <div>
      {" "}
      {blogs?.map((blog: any) => <BlogCard blog={blog} key={blog.id} />)}
    </div>
  );
};

export default Blogs;
