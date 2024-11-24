import Link from "next/link";
import React from "react";

const OfferingSection = () => {
  return (
    <div className="py-10 md:py-20 px-3 xl:px-[10rem] w-full bg-custom-darkLight flex flex-col md:flex-row gap-10">
      <div className="w-full space-y-5">
        <span className="text-custom-primary font-bold uppercase">
        Our Services
        </span>
        <h1 className="text-black font-black text-[2rem] md:text-[3rem]">
          {`Delivering Tailored Solutions for Your Business Needs`}
        </h1>
        <div className="h-[23rem] w-full bg-red-100/50"></div>
      </div>
      <div className="w-full space-y-6">
        <div className="bg-custom-primary/50 h-[20rem] w-full"></div>
        <p className="text-custom-neutral60">{`At Root Level, we are committed to delivering innovative and tailored solutions that drive business success. Our web development services focus on creating dynamic, responsive, and visually stunning websites that align with your brand identity and business goals, ensuring seamless user experiences. For businesses aiming to enhance their reach and engagement, our mobile app development services deliver user-friendly and high-performance apps for iOS and Android, designed to provide flawless experiences across devices. Additionally, our digital marketing solutions are crafted to boost your online presence through effective SEO strategies, content marketing, and targeted social media campaigns, helping you connect with your audience and achieve measurable results. Whatever your business needs, Root Level has the expertise to transform your ideas into impactful solutions.`}</p>
        <Link href={`#`}>
          <button className="px-6 py-2 bg-custom-primary text-white transition-all duration-200 font-bold tracking-wide mt-5">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OfferingSection;
