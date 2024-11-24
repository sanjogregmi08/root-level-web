import Link from "next/link";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="py-10 md:py-20 px-3 xl:px-[8rem] bg-custom-darkLight w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-custom-primary font-bold uppercase">
          What We Do
        </span>
        <h1 className="text-black font-black text-[2rem] md:text-[3rem] text-center xl:max-w-[50%]">{`Empowering Businesses with Innovative IT & Business Solutions`}</h1>
      </div>
      <div className="mt-10 grid gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-4 justify-center items-center w-full bg-white px-10 py-14">
            <div className="h-[5rem] w-[5rem] bg-red-100/50"></div>
            <h2 className="font-bold">IT & Software Solutions</h2>
            <p className="text-center">{`Root Level offers cutting-edge IT solutions that are customized to meet your business needs. Our services include custom software development, mobile app creation, and website development that enhance user experiences and streamline business operations. We also deliver cloud-based solutions that are secure, scalable, and designed to grow alongside your business.`}</p>
            <div>
              <Link href={`/services`}>
                <button className="bg-[#b20779] text-white font-medium tracking-wide px-6 py-3">
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="h-[25rem] w-full bg-custom-primary/50"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-[25rem] w-full bg-custom-primary/50"></div>
          <div className="flex flex-col gap-4 justify-center items-center w-full bg-white px-10 py-14">
            <div className="h-[5rem] w-[5rem] bg-red-100/50"></div>
            <h2 className="font-bold">Business Consulting Services</h2>
            <p className="text-center">{`We provide expert business consulting services to help you optimize workflows, improve operational efficiency, and align your strategies with the latest technological advancements. From strategic planning and financial analysis to technology integration, our consultants deliver actionable solutions that empower businesses to achieve their goals and adapt to industry changes.`}</p>
            <div>
              <Link href={`/services`}>
                <button className="bg-[#b20779] text-white font-medium tracking-wide px-6 py-3">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
