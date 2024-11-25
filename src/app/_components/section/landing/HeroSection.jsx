import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full group transition-all duration-500 hover:bg-purple-600 bg-blue-500">
      <div className="relative z-10 flex items-center flex-col justify-center py-32 space-y-5">
        <span className="uppercase font-bold text-white group-hover:text-yellow-400 transition-all duration-300 cursor-pointer">
          {`Welcome to The Root Level`}
        </span>
        <h1 className="text-center text-[3rem] md:text-[6rem] font-black xl:px-72 text-white group-hover:text-black drop-shadow-2xl transition-all duration-300 cursor-pointer">
          {`The Leading IT Solutions Company`}
        </h1>
        <Link href={`/about-us`}>
          <button className="bg-white text-custom-primary px-6 py-2 hover:bg-custom-primary hover:text-white transition-all duration-200 font-bold tracking-wide">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
