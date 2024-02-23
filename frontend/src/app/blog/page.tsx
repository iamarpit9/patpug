import Blogs from "@/components/blog/Blogs";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PatPug - Blog",
  description:
    "We are the industry leaders in the bath linen/Towel space using different type of fibers! We share our knowledge with our clients/customers periodically.",
};

const Blog = () => {
  return (
    <MaxWidthWrapper>
      <div className="pt-20 md:max-w-3xl">
        <div className="tracking-[0.2rem] text-[#627478]">
          WE SHARE WHAT WE BELIEVE IN!
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:min-w-[338px]">
        <Blogs />
      </div>
    </MaxWidthWrapper>
  );
};

export default Blog;
