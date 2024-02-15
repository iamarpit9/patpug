import React from 'react'
import { extractDateComponents } from "@/utils/utils";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';


const BlogPost = ({ title, description, createdAt, imgUrl, }: any) => {

    const { year, month, day } = extractDateComponents(createdAt);

    return (
        <article className="p-4 border-b-2 md:border-b-0 md:border-r-2  md:px-10" >   
            <h2 className='text-3xl my-2 font-play'>{title}</h2>
            <p className="text-gray-500 font-light py-2">{`${day} ${month} ${year}`}</p>
            <div className='relative w-[260px] h-[180px] md:w-[500px] md:h-[400px]'>

                <Image src={imgUrl} alt="" fill className='object-contain' priority/>
            </div>

            <ReactMarkdown rehypePlugins={[rehypeRaw]} className="mt-10 text-gray-500 font-light">

            {description}
</ReactMarkdown>
           

            </article>
    )
}

export default BlogPost