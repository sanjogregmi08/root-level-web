"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhatWeOffer from "../_components/career/WhatWeOffer";
import ValueSection from "../_components/career/ValueSection";
import Technical from "../_components/career/TechnicalSection";
import LifeAtRootLevel from "../_components/career/LifeAtRootLevel";
import { TypingAnimation } from "@/components/ui/typing-animation";

const Career = () => {
  return (
    <div>
      {/* header section */}
      <div className="w-full sm:h-12 font-medium text-center py-2.5 bg-[#323B38] text-white ">
        Header
      </div>
    <div className="px-4 " >
    
      {/* hero section */}
      <div >
        <div className="flex flex-col items-center justify-center text-center pt-32 pb-12 px-4 bg-white">
          <div>
        <TypingAnimation className="text-xl md:text-3xl lg:text-4xl font-semibold " >
          Dare to Dream Big? Curious. Agile. Driven.
          </TypingAnimation>

           <h1><TypingAnimation className="text-xl md:text-3xl  lg:text-4xl font-semibold mb-4" delay={4000}>
              Is This You? Join Us.....
            </TypingAnimation>
            </h1> 
          </div>
          <p className="text-sm w-9/12 md:w-8/12 lg:w-5/12 md:text-base text-gray-600 mb-6">
          We’re looking for individuals who thrive on challenges, embrace curiosity, and have a passion for innovation. If you have a relentless drive to learn, grow, and make an impact, you’re in the right place. Being a leader in the outsourcing industry, we place a high value on employee support. To maintain consistency and competitiveness in the worldwide market, we give their input first priority when improving our overall rewards.
          </p>
          <Link href="/seeopenrole" className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 focus:outline-none">
            See open roles
          </Link>
        </div>
        <hr className="border-solid border-1 border-[#bcbbbe] mt-2" />
      </div>
      <div>
        <WhatWeOffer/>
      </div>
      <div>
        <ValueSection/>
      </div>
      <div>
        <Technical/>
      </div>
    </div>
    <div>
        <LifeAtRootLevel/>
      </div>
    </div>
  );
};

export default Career;
