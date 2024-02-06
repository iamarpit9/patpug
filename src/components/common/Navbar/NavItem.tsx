"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface IProps {
    route: string,
    href: string
}


const NavItem = ({ route, href }: IProps) => {

    const currentPath = usePathname();

    const isActive = currentPath === href;


    return (
        <Link href={href} className={`p-1 text-[#151515] hover:text-[#627474] tracking-[0.2rem] text-sm font-light ${isActive ? "border-b border-[#151515]" : null}`}>
            {route}
        </Link>)
}

export default NavItem