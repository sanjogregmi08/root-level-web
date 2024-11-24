import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div className="py-10 md:pt-20 px-3 xl:px-[8rem] pb-[15rem]">
      <span className="text-custom-primary font-black">About Us</span>
      <h1 className="w-full xl:w-1/2 text-black font-black text-[2rem] md:text-[3rem]">{`Root Level: Delivering Only Exceptional Quality Work`}</h1>
      <div className="relative">
        <div className="mt-10 md:flex md:gap-6">
          <div className="bg-custom-primary/50 w-full h-[30rem]"></div>
          <div className="mt-5 md:mt-0 w-4/6">
            <p className="mb-5">{`At Root Level, we are committed to providing innovative IT solutions that empower businesses to achieve their goals. Since our inception in 2020, we have been known for delivering exceptional quality across all our projects.

Our mission is simple: to combine creativity, technology, and expertise to provide custom solutions that meet our clients' needs. From software development and web design to cloud solutions and digital marketing, we focus on creating value and driving results.

We pride ourselves on our attention to detail, dedication to excellence, and a customer-centric approach that ensures every project we undertake exceeds expectations.`}</p>
            <Link href={`/about-us`}>
              <button className="bg-white text-custom-primary font-bold tracking-wide">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="md:absolute md:right-20 md:top-[24rem] flex flex-col md:flex-row gap-4 md:gap-20 p-3 md:p-14  bg-custom-primary *:text-white mt-10 md:mt-0">
          <div className="w-full">
            <span className="font-medium tracking-wide text-[1rem]">
              Projects Completed
            </span>
            <h1 className="text-[3rem] font-black">{`20+`}</h1>
            <span className="font-medium tracking-wide">{`Successfully delivered across various industries.`}</span>
          </div>
          <div className="w-full">
            <span className="font-medium tracking-wide text-[1rem]">
              Clients Served
            </span>
            <h1 className="text-[3rem] font-black">{`10+`}</h1>
            <span className="font-medium tracking-wide">{`Happy clients across the globe.`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
