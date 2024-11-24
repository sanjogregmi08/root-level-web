import React from "react";

const WhyChooseUsSection = () => {
  return (
    <div className="py-10 md:py-20 px-3 xl:px-[8rem] bg-custom-darkLight flex flex-col md:flex-row gap-6 md:gap-10">
      <div className="bg-custom-primary/50 h-[20rem] md:h-[40rem] w-full"></div>
      <div className="w-full">
        <span className="text-custom-primary font-bold uppercase">
          Why Choose Root Level?
        </span>
        <h1 className="w-full text-black font-black text-[2rem] md:text-[3rem]">{`Benefits of Partnering with Our IT Agency`}</h1>
        <p className="text-custom-neutral60">{`At Root Level, we are dedicated to helping businesses succeed through innovative and reliable IT solutions. Here’s why businesses trust us:
We are proud to be highly recommended by local businesses for our commitment to quality and tailored solutions. Our expertise ensures every client gets the attention they deserve.
With a focus on excellence, we have successfully completed numerous projects, delivering measurable results for our clients. Your success is our priority.`}</p>
        <div className="mt-10 space-y-4">
          <div className="space-y-2">
            <span className="font-medium tracking-wide text-[1rem]">
              Locally Recommended
            </span>
            <div className="w-full bg-white h-8 relative">
              <div className="w-[80%] relative bg-custom-primary h-8 flex justify-end px-5 items-center">
                <span className="text-white">{`80%`}</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <span className="font-medium tracking-wide text-[1rem]">
              Projects Completed Successfully
            </span>
            <div className="w-full bg-white h-8 relative">
              <div className="w-[80%] relative bg-custom-primary h-8 flex justify-end px-5 items-center">
                <span className="text-white">{`95%`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
