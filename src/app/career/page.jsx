"use client";

import Image from "next/image";
import React from "react";
import rocket from "@/assets/svg/rocket.svg";

const CareerPage = () => {
  const [email, setEmail] = React.useState("");

  const handleButtonClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="py-10 md:py-20 px-3 xl:px-[10rem] w-full">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full">
          <h1 className="text-displayMedium md:text-displayLarge font-extrabold">
            All Good Things Come to Those who wait...
          </h1>
          <div className="mt-10">
            <label htmlFor="email" className="text-titleMedium font-medium">
              Get notified when we lunch
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 w-full border-custom-neutral20 rounded-xl h-12 pl-4 pr-32"
              />
              <div className="absolute top-0 right-0">
                <button
                  className="bg-custom-primary hover:bg-[#b20779] h-12 rounded-r-xl px-6 text-white font-semibold transition-all duration-200"
                  onClick={handleButtonClick}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Image src={rocket} alt="rocket" width={300} height={300} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CareerPage;
