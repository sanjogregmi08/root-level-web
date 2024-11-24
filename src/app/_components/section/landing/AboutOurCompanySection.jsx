import Link from "next/link";
import React from "react";

const AboutOurCompanySection = () => {
  return (
    <div className="py-10 md:py-20 px-3 xl:px-[8rem] flex flex-col md:flex-row gap-6 md:gap-10">
      <div className="w-full">
        <span className="text-custom-primary font-bold uppercase">
          About Our Company
        </span>
        <h1 className="w-full text-black font-black text-[2rem] md:text-[3rem]">{`Your Success Is Our Mission`}</h1>
        <p className="text-custom-neutral60">{`At Root Level, we believe that our success is deeply rooted in your success. Since our founding in 2020, we have been dedicated to empowering businesses with cutting-edge technology solutions that deliver measurable results.

Our mission is to provide tailored IT services that help businesses streamline their operations, grow their online presence, and achieve their goals with confidence. Whether you’re a startup or an established enterprise, Root Level is here to guide you through every step of your digital journey.`}</p>
        <Link href={`/about-us`}>
          <button className="px-6 py-2 bg-custom-primary text-white transition-all duration-200 font-bold tracking-wide mt-5">
            Read More
          </button>
        </Link>
      </div>
      <div className="bg-custom-primary/50 h-[20rem] md:h-[30rem] w-full"></div>
    </div>
  );
};

export default AboutOurCompanySection;
