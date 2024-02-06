import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "/public/logo.webp"
import MaxWidthWrapper from '../MaxWidthWrapper'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <div className='bg-white h-36 z-50 top-0 inset-x-0 sticky'>
      <header className='relative bg-white'>
        <MaxWidthWrapper>


          <div className='flex items-center'>
            <div className="ml-4 flex py-8 lg:ml-0">
              <Link href="/">
                <Image src={logo} alt='logo' className='h-[80px] w-[96px] object-contain md:w-[124px] lg:h-[104px]' />
              </Link>
            </div>
            <div className=' ml-auto flex items-center'>
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <NavItem href="/" route='HOME' />
                <NavItem href="/b2bexports" route='B2B/EXPORTS' />
                <NavItem href="/" route='BUY PATPUG' />
                <NavItem href="/blog" route='BLOG' />
                <NavItem href="/about-us" route='ABOUT US' />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

      </header>
    </div>
  )
}

export default Navbar