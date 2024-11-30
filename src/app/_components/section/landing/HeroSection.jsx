import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#FFFFFB] min-h-[calc(100%-5rem)] w-full pt-8 xl:px-[7.5rem]">
      <div className="flex items-center justify-between gap-[3rem] h-[39rem] w-full mt-11 py-16 ">
        <div className="w-full h-full place-content-center text-custom-primary">
          <p className="text-lg font-medium pb-2">{`"The ideas are yours. The solutions are ours."`}</p>
          <h1 className="text-4xl font-bold leading-[2.575rem] tracking-wide ">
            Digital partnerships
            <br />
            that make a difference
          </h1>
          <p className="text-lg font-medium pt-4 break-words">
            <strong>The Root Level </strong> is an IT company dedicated to
            building robust digital solutions that transform your vision into a
            competitive advantage.{" "}
          </p>
        </div>
        <div className="bg-blue-400 w-full h-full">s</div>
      </div>
    </div>
  );
};

export default HeroSection;
