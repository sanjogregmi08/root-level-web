import Link from "next/link";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="py-10 md:py-20 px-3 xl:px-[8rem] bg-custom-darkLight w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-custom-primary font-bold uppercase">
          What We Do
        </span>
        <h1 className="text-black font-black text-[2rem] md:text-[3rem] text-center xl:max-w-[60%]">{`We're provide invest & business services`}</h1>
      </div>
      <div className="mt-10 grid gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-4 justify-center items-center w-full bg-white px-10 py-14">
            <div className="h-[5rem] w-[5rem] bg-red-100/50"></div>
            <h2>Mobile App Development</h2>
            <p className="text-center">{`We design and develop intuitive, high-performance mobile applications tailored to your business needs. Whether it's iOS, Android, or cross-platform, our apps are crafted to enhance user engagement and deliver a seamless experience.`}</p>
          </div>
          <div className="h-[25rem] w-full bg-custom-primary/50"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-[25rem] w-full bg-custom-primary/50"></div>
          <div className="flex flex-col gap-4 justify-center items-center w-full bg-white px-10 py-14">
            <div className="h-[5rem] w-[5rem] bg-red-100/50"></div>
            <h2>UI/UX Design</h2>
            <p className="text-center">{`We create visually stunning and user-friendly designs that captivate your audience. From wireframes to prototypes, our design process ensures intuitive interfaces and exceptional user experiences that align with your brand.`}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-4 justify-center items-center w-full bg-white px-10 py-14">
            <div className="h-[5rem] w-[5rem] bg-red-100/50"></div>
            <h2>Digital Marketing</h2>
            <p className="text-center">{`Boost your online presence with our digital marketing strategies, including search engine optimization, social media campaigns, and content marketing. We help your brand reach the right audience and drive measurable results.`}</p>
          </div>
          <div className="h-[25rem] w-full bg-custom-primary/50"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-[25rem] w-full bg-custom-primary/50"></div>
          <div className="flex flex-col gap-4 justify-center items-center w-full bg-white px-10 py-14">
            <div className="h-[5rem] w-[5rem] bg-red-100/50"></div>
            <h2>Cloud Solutions</h2>
            <p className="text-center">{`We provide cloud-based solutions that enhance efficiency and security for your business. From migration to ongoing management, our services ensure seamless access to your data and systems anywhere, anytime.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
