import React from "react";

const WhyBusinessChooseUsSection = () => {
  return (
    <div className="py-10 md:py-20 px-3 xl:px-[10rem] bg-custom-darkLight w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-custom-primary font-bold uppercase">
          Why Business Choose Us
        </span>
        <h1 className="text-black font-black text-[2rem] md:text-[3rem] text-center xl:max-w-[50%]">{`Accelerate Your Business Growth with Root Level`}</h1>
        <p className="text-center md:max-w-[70%] mt-3">{`At Root Level, we combine innovation, expertise, and dedication to help businesses achieve their full potential. Here’s what makes us the preferred partner for our clients:`}</p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center gap-4">
          <div className="h-[5rem] w-[5rem] bg-red-100/50 rounded-full"></div>
          <h2 className="font-bold text-[1.1rem]">{`We’re Dedicated`}</h2>
          <p className="text-center md:max-w-[80%] text-titleSmall">{`"Our team is committed to building strong, lasting relationships with our clients. Your goals become our goals, and we go the extra mile to ensure your success.`}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="h-[5rem] w-[5rem] bg-red-100/50 rounded-full"></div>
          <h2 className="font-bold text-[1.1rem]">{`We’re Resourceful`}</h2>
          <p className="text-center md:max-w-[80%] text-titleSmall">{`"With our expertise and creative problem-solving, we provide practical and effective solutions tailored to your unique challenges. Whatever your needs, we have the tools and strategies to make it happen.`}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="h-[5rem] w-[5rem] bg-red-100/50 rounded-full"></div>
          <h2 className="font-bold text-[1.1rem]">{`We’re Adaptive`}</h2>
          <p className="text-center md:max-w-[80%] text-titleSmall">{`"We understand that the business landscape is constantly changing. Our agile approach allows us to adjust to your specific requirements, ensuring that our solutions evolve with your business.`}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyBusinessChooseUsSection;
