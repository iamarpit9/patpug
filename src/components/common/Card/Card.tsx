import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProps {
  title: string;
  decription: string;
  comment: string;
  image: StaticImageData | "";
}

const Card = ({ title, decription, comment, image }: IProps) => {
  return (
    <div className="bg-[#EFF5F6] text-center mt-5 text-[#5e5e5e] font-light md:mr-10 md:min-w-[338px]">
      <Image src={image} alt="image" />
      <div className="px-5">
        <div className="py-8 text-[22px] text-[#1b1b1b]">{title}</div>
        <div className="pb-5">{decription}</div>
        <div className="pb-5">{comment}</div>
      </div>
    </div>
  );
};

export default Card;
