"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavItem from "./NavItem";

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div onClick={handleClick} className="lg:hidden cursor-pointer mr-5">
        <AiOutlineMenu size={25} />
      </div>

      <div
        className={
          navOpen
            ? "fixed left-0 lg:hidden top-0 w-screen h-screen bg-[#EFF5F6] p-10 ease-in duration-300"
            : "fixed left-[-200%] top-0 p-10 ease-in duration-300 w-screen h-screen"
        }
      >
        <div
          onClick={handleClick}
          className="flex justify-end cursor-pointer my-2 ml-6 "
        >
          <AiOutlineClose size={25} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="my-5" onClick={handleClick}>
            <NavItem
              href="/"
              route="HOME"
              setActive={true}
              setTracking={true}
            />
          </div>
          <div className="my-5" onClick={handleClick}>
            <NavItem
              href="/b2bexports"
              route="B2B/EXPORTS"
              setActive={true}
              setTracking={true}
            />
          </div>
          <div className="my-5" onClick={handleClick}>
            <NavItem
              href="https://www.amazon.in/PatPug-Indian-Absorbent-Friendly-70x140cm/dp/B09DTDFZVF/ref=sr_1_4?crid=V84JVDDJL1TX&keywords=patpug%2Btowel&qid=1698989537&s=kitchen&sprefix=patpug%2Btowel%2Ckitchen%2C192&sr=1-4&th=1"
              route="BUY PATPUG"
              setActive={true}
              setTracking={true}
            />
          </div>
          <div className="my-5" onClick={handleClick}>
            <NavItem
              href="/blog"
              route="BLOG"
              setActive={true}
              setTracking={true}
            />
          </div>
          <div className="my-5" onClick={handleClick}>
            <NavItem
              href="/about-us"
              route="ABOUT US"
              setActive={true}
              setTracking={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
