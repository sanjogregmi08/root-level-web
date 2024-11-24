import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-custom-primary/50">
      <div className="flex items-center flex-col justify-center py-32 space-y-5">
        <span className="uppercase font-bold text-white">{`Welcome to The Root Level`}</span>
        <h1 className="text-center text-[3rem] md:text-[6rem] font-black xl:px-72 text-white">{`The Leading IT Solutions Company`}</h1>
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
