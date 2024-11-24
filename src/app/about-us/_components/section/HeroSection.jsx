import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-custom-primary/50">
      <div className="flex items-center flex-col justify-center py-32 space-y-5">
        <h1 className="text-center text-[3rem] md:text-[6rem] font-black xl:px-72 text-white">{`About Us`}</h1>
      </div>
    </div>
  );
};

export default HeroSection;
