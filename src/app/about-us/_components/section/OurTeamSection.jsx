import React from "react";

const OurTeamSection = () => {
  return (
    <div className="py-10 md:py-20 px-3 xl:px-[10rem] w-full bg-white">
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-custom-primary font-bold uppercase">
          Our Teams
        </span>
        <h1 className="text-black font-black text-[2rem] md:text-[3rem] text-center">{`Meet Our Team`}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-custom-primary/50 h-[20rem] w-full"></div>
          <div className="text-center">
            <h2 className="text-titleMedium font-bold">Nicole Adams</h2>
            <span>nicole.adams@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-custom-primary/50 h-[20rem] w-full"></div>
          <div className="text-center">
            <h2 className="text-titleMedium font-bold">Nicole Adams</h2>
            <span>nicole.adams@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-custom-primary/50 h-[20rem] w-full"></div>
          <div className="text-center">
            <h2 className="text-titleMedium font-bold">Nicole Adams</h2>
            <span>nicole.adams@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-custom-primary/50 h-[20rem] w-full"></div>
          <div className="text-center">
            <h2 className="text-titleMedium font-bold">Nicole Adams</h2>
            <span>nicole.adams@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
