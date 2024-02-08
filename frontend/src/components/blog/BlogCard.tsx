import Image from "next/image";
import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const BlogCard = ({ blog }: any) => {

    const { id, attributes } = blog;
    const { title, description, image } = attributes;

  const truncatedDesc =
     description.length > 80
          ? description.substring(0, 80) + "..."
          :description;

  return (
      <Link href="/blog/1">
          <div><Image src={`http://127.0.0.1:1337${image?.data?.attributes.url}`} width={50}  height={50} alt=''/></div>
              <h1>{title}</h1>

        <div>{truncatedDesc }</div>
      </Link>
  );
};

export default BlogCard;
