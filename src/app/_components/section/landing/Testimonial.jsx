import React from "react";

const Testimonial = () => {
  return (
    <div className="py-10 md:py-20 px-3 xl:px-[8rem] bg-white w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-custom-primary font-bold uppercase">
          Testimonials
        </span>
        <h1 className="text-black font-black text-[2rem] md:text-[3rem] text-center xl:max-w-[50%]">{`What Our Clients Say`}</h1>
      </div>
      <div className="mt-10">
        <div className="flex flex-col items-center gap-6">
          <div className="h-[5rem] w-[5rem] bg-red-100/50 rounded-full"></div>
          <p className="text-center md:max-w-[50%]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-[1.1rem]">Carolyn Stewart</h2>
            <span>United States</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
