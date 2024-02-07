"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
  route: string;
  href: string;
  setActive: boolean;
}

const NavItem = ({ route, href, setActive }: IProps) => {
  const currentPath = usePathname();
  let isActive = false;
  if (setActive) {
    isActive = currentPath === href;
  }

  return (
    <Link
      href={href}
      className={`p-1 text-[#151515] hover:text-[#627478] tracking-[0.2rem] text-sm font-light ${isActive ? "border-b border-[#151515]" : null}`}
      target={href.includes("www.amazon") ? "_blanl" : ""}
    >
      {route}
    </Link>
  );
};

export default NavItem;
