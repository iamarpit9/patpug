import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper';
import NavItem from '../Navbar/NavItem';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <div className="bg-white h-36 z-50 inset-x-0 py-10">
            <footer className="relative bg-white">
                <MaxWidthWrapper>

                    <div className="flex flex-col items-center justify-center md:space-x-6 md:flex-row decoration-none">
                        <NavItem href="/" route="HOME" setActive={false} />
                        <NavItem href="/b2bexports" route="B2B/EXPORTS" setActive={false} />
                        <NavItem href="amazon" route="BUY PATPUG" setActive={false} />
                        <NavItem href="/blog" route="BLOG" setActive={false} />
                        <NavItem href="/about-us" route="ABOUT US" setActive={false} />
                    </div>
                    <div className='font-light text-center py-16 text-[#595959] text-xs tracking-widest md:tracking-[0.15rem]'>
                        COPYRIGHT © {year} PATPUG - PATPUG IS A REGISTERED TRADEMARK OF PGAG ENTERPRISES PRIVATE LIMITED | ALL RIGHTS RESERVED.
                    </div>
                </MaxWidthWrapper>
            </footer>
        </div>)
}

export default Footer;