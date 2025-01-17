import Link from "next/link";
import React from "react";

const CareerHeroSection = () => {
  return (
    <div className="pt-24 pb-14 md:pt-24 lg:h-screen flex flex-col justify-center items-center text-center px-4">
      <h1
        className="text-4xl md:text-6xl lg:pr-40 font-semibold text-neutral-700 mb-6 leading-tight 
        opacity-0 translate-y-8 animate-fade-in-up"
      >
        Join the team
      </h1>
      <span
        className="text-4xl md:text-6xl lg:pl-40 font-semibold text-neutral-700 mb-6 leading-tight 
        opacity-0 translate-y-8 animate-fade-in-up"
      >
        making AI safe
      </span>
      <p
        className="text-base lg:text-xl text-black mb-8 leading-relaxed max-w-2xl 
        opacity-0 translate-y-8 animate-fade-in-up animation-delay-200"
      >
        {`We are a Kathmandu-based public benefit corporation. From physics and
        machine learning to public policy and business, our team has
        experience in a wide range of fields. Together, we estimate the impact
        and tractability of research ideas in furthering our objective as a
        cohesive team.`}
      </p>
      <Link href="/roles">
        <button
          className="bg-neutral-700 hover:bg-gray-700 text-white font-medium text-base py-4 px-10 rounded-2xl transition-all 
          opacity-0 translate-y-8 animate-fade-in-up animation-delay-400"
        >
          See open roles
        </button>
      </Link>
    </div>
  );
};

export default CareerHeroSection;
