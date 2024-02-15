/* eslint-disable @next/next/no-img-element */
import { Recentblogs, giveShortDateComponent, truncatedTitle } from '@/utils/utils'
import Link from 'next/link';
import React from 'react'

const RecentBlogs = ({id}: any) => {

    const { recentBlogs } = Recentblogs(id);


  return (
      <div className='my-4 border-b-2 md:border-none md:px-5'>
        <div >RECENT POSTS</div>{
        recentBlogs.map((blog: any)=> (
            <Link href={`/blog/${blog.id}`} key={blog.id} className='m-5 p-5 flex justify-center items-center md:w-[80%]'>
                    <img className="h-[110px] w-[110px] object-cover" src={blog.attributes?.image?.data?.attributes.url} alt="" fetchPriority='high'/>
                
                <div className='flex flex-col mx-5'>
                    <div className='font-light text-[#1b1b1b]'>

                {truncatedTitle( blog.attributes?.title)}
                    </div>
                    <div className='text-sm font-light mt-4 text-[#595959]'>

                    {giveShortDateComponent(blog.attributes?.createdAt)}
                    </div>
                    </div>
       

            </Link>
        ))}
        </div>
  )
}

export default RecentBlogs