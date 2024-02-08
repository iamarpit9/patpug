import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col m-5 pt-10 ">
        <Link href="/blog">{" < Back"}</Link>
        <div>
          <Image src="" alt="" />
        </div>

        <div>
          <div>{"title"}</div>
          <div>{"article"}</div>
        </div>

        <span>{"Date published"}</span>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
