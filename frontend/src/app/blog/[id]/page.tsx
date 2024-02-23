"use client";
import BlogPost from "@/components/blog/BlogPost";
import RecentBlogs from "@/components/blog/RecentBlogs";
import Loader from "@/components/common/Loader";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { GetBlog } from "@/utils/utils";
import Link from "next/link";
import React from "react";
import { MdArrowLeft } from "react-icons/md";

const Article = ({ params }: any) => {
  const { title, description, createdAt, imgUrl, error, isLoading } = GetBlog(
    params.id,
  );
  if (isLoading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <MaxWidthWrapper>
      <div className="py-20 overflow-hidden md:overflow-visible">
        <div className="tracking-[0.2rem] text-[#627478]">
          WE SHARE WHAT WE BELIEVE IN!
        </div>
        <div className="m-10 text-left">
          <Link
            href="/blog"
            className="flex items-center text-[#627478] hover:text-[#3f4a48]"
          >
            <MdArrowLeft size={30} /> <div>ALL Posts</div>
          </Link>
        </div>

        <div className="container mx-auto md:flex w-screen">
          <main className="md:w-3/5 pr-4 ">
            <BlogPost
              title={title}
              description={description}
              createdAt={createdAt}
              imgUrl={imgUrl}
            />
          </main>
          <aside className="md:w-2/5 md:pt-0">
            <RecentBlogs id={params.id} />
          </aside>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Article;
