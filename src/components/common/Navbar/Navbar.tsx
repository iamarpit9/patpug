import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/logo.webp";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavItem from "./NavItem";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="bg-white h-36 z-50 top-0 inset-x-0">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="flex items-center">
            <div className="ml-4 flex py-6 lg:ml-0">
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  className="h-[80px] w-[96px] object-contain md:w-[124px] lg:h-[104px]"
                />
              </Link>
            </div>
            <div className=" ml-auto flex items-center">
              {/* Mobile Nav */}

              <MobileNav />
              {/* Normal Nav */}
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <NavItem href="/" route="HOME" setActive={true} />
                <NavItem
                  href="/b2bexports"
                  route="B2B/EXPORTS"
                  setActive={true}
                />
                <NavItem
                  href="https://www.amazon.in/PatPug-Indian-Absorbent-Friendly-70x140cm/dp/B09DTDFZVF/ref=sr_1_4?crid=V84JVDDJL1TX&keywords=patpug%2Btowel&qid=1698989537&s=kitchen&sprefix=patpug%2Btowel%2Ckitchen%2C192&sr=1-4&th=1"
                  route="BUY PATPUG"
                  setActive={true}
                />
                <NavItem href="/blog" route="BLOG" setActive={true} />
                <NavItem href="/about-us" route="ABOUT US" setActive={true} />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
