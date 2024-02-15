import Card from "@/components/common/Card/Card";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import React from "react";
import ch1 from "/public/about/ch1.webp";
import ch2 from "/public/about/ch2.webp";
import Image from "next/image";

const About = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex items-center m-5 justify-center pt-10 ">
        <Card
          title="Who are We?"
          decription={`We are a couple of IIMA Graduates (The Best B-School in Asia), who are on a mission to make India, the global textile hub by giving best possible procurement experience to our clients in terms of price, quality, commitment and transparency at every point of the journey!`}
          image={ch1}
        />
      </div>

      <div className="flex m-5 flex-col items-center justify-center pt-5 lg:gap-10 lg:flex-row ">
        <Card
          title="Our Experience"
          decription="We have a combined experience of more that 25 years in creating brands, partnerships, running huge teams in India, Africa, US, UK, Middle East and South East Asia. As global citizens, we realise the needs of our clients and are poised to become the one stop solution for anything textile in the next 3 years."
          
        />

        <Card
          title="Our Partnerships"
          decription={`At PatPug, we believe in building strong relationships with our partners. We have a network of reputed manufacturers, logistics suppliers and designers to cater to all your need while sitting at your location without moving even a needle! Just tell us what you need and leave the rest to us! `}
        
        />
      </div>

      <div className="pt-10 md:pt-20 m-5">
        <Image src={ch2} alt="" />
      </div>
      <div className="tracking-[0.2rem] pt-10 text-[#627478] m-5">
        OUR VALUES
      </div>
      <div className="flex justify-center items-center m-5">
        <div className="max-w-2xl flex flex-col">
          <div className="text-2xl font-light py-5">
            At PatPug, we believe in the 5F set of values
          </div>
          <div className="px-5 text-[#5e5e5e] font-light">
            <ul className="list-disc">
              <li className="py-4">
                <span className="font-bold">Fairness:</span> We are always fair
                with our vendors, employees and customers alike. We protect our
                reputations as much as we protect our interests.
              </li>

              <li className="py-4">
                <span className="font-bold">Forthrightness:</span> We believe in
                complete transparency with our clients. We do not shy from
                admitting mistakes and appreciating honesty.
              </li>
              <li className="py-4">
                <span className="font-bold">Frugality:</span> We maintain a
                frugal culture in our operations! We understand how important
                costs are for our customers and we keep ours low.{" "}
              </li>
              <li className="py-4">
                <span className="font-bold">Feedback:</span> We always value
                feedback from all our stakeholders and strive to act and improve
                ourselves and our business.{" "}
              </li>
              <li className="py-4">
                <span className="font-bold">Fun:</span> We are not boring people
                and we believe that business can be run in a fun way!{" "}
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </MaxWidthWrapper>
  );
};

export default About;
