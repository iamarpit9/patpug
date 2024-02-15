/* eslint-disable @next/next/no-img-element */
import { extractDateComponents, truncatedDesc } from "@/utils/utils";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {

  const { id, attributes } = blog;
  const { title, description, image, createdAt } = attributes;

  const imgUrl = image?.data?.attributes.url

 const {year, month ,day} = extractDateComponents(createdAt);
  return (


<Link href={`blog/${id}`}>

      <div className="md:flex md:w-[750px] w-screen mt-10">
        <div className="md:flex-shrink-0 flex items-center justify-center">
          <img src={imgUrl} alt="Blog" className="h-48  w-60 object-contain md:w-48" fetchPriority="high"/>
        </div>
        <div className="p-8">
          <div className="text-sm font-light">{`${day} ${month} ${year}`}</div>
          <div className="block mt-1 text-[22px] font-light">{title}</div>
          <p className="mt-2 c">{truncatedDesc(description)}</p>
          <div className="text-gray-500 hover:text-[#3f484a] font-light pt-5">Continue Reading</div>
        </div>
      </div>
        <hr className="w-full "/>
</Link>
  );
};

export default BlogCard;
