"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {

  const API_URL = "https://patpug-backend.onrender.com"

  const [blogsData, setBlogsData] = useState<any>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const options = {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      };

      try {
        const res = await fetch(`${API_URL}/api/blogs?populate=*`);
        const response = await res.json();
        setBlogsData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  console.log(blogsData);

  return (
    <div>
      { blogsData?.data?.map((blog: any) => (
          <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Blogs;
