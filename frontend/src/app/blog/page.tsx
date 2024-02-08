import Blogs from "@/components/blog/Blogs";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import React from "react";

const Blog = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex items-center m-5 justify-center pt-10 ">
        <Blogs />
      </div>
    </MaxWidthWrapper>
  );
};

export default Blog;
