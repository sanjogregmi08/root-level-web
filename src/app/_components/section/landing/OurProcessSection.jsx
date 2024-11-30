import Link from "next/link";
import React from "react";
import { FaCompass } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";

import { PiCodeSimpleFill } from "react-icons/pi";
import { FaBug } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";

const OurProcessSection = () => {
  return (
    <div className="" id="services">
      <div className="pt-20 pb-16 px-8 flex justify-center">
        <div className="max-w-[64.375rem] flex flex-col items-center text-custom-primary">
          <div className="mb-5 text-center">
            <span className="text-titleMediumLarge font-medium">{`let’s-build-your-digital-future-together`}</span>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:text-center">{`At Root Level, we transform your vision into reality with a process built on collaboration, innovation, and precision, ensuring every project delivers exceptional quality and impact.`}</h1>
          </div>

          <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 group *:cursor-pointer">
            <div className="border border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] md:rotate-[12deg] group-hover:rotate-[0deg] p-2 rounded-2xl hover:shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] transition-all duration-200">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex gap-2 items-center md:w-[40%]">
                  <div className="bg-custom-primary rounded-xl text-white w-[3.125rem] min-w-[3.125rem] h-[3.125rem] grid place-items-center">
                    <FaCompass className="w-5 h-5" />
                  </div>
                  <div className="">
                    <h2 className="text-titleMediumLarge font-medium">
                      Discovery Phase
                    </h2>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-pretty">{`We begin by understanding your goals, challenges, and requirements. This step ensures we align with your vision and build a solid foundation for success.`}</p>
                </div>
              </div>
            </div>
            <div className="border border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] p-2 rounded-2xl hover:shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] transition-all duration-200">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex gap-2 items-center md:w-[40%]">
                  <div className="bg-custom-primary rounded-xl text-white w-[3.125rem] min-w-[3.125rem] h-[3.125rem] grid place-items-center">
                    <FaLightbulb className="w-5 h-5" />
                  </div>
                  <div className="">
                    <h2 className="text-titleMediumLarge font-medium">
                      Planning and Strategy
                    </h2>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-pretty">{`We create a roadmap, define the scope, set timelines, and allocate resources, ensuring every aspect of the project is meticulously planned for efficient execution.`}</p>
                </div>
              </div>
            </div>
            <div className="border border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] p-2 rounded-2xl hover:shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] transition-all duration-200 mt-5">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex gap-2 items-center md:w-[40%]">
                  <div className="bg-custom-primary rounded-xl text-white w-[3.125rem] min-w-[3.125rem] h-[3.125rem] grid place-items-center">
                    <FaPencilRuler className="w-5 h-5" />
                  </div>
                  <div className="">
                    <h2 className="text-titleMediumLarge font-medium">
                      Design and Prototyping
                    </h2>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-pretty">{`Our team crafts innovative designs and prototypes, allowing you to visualize the solution and provide feedback before development begins.`}</p>
                </div>
              </div>
            </div>
            <div className="border border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] p-2 rounded-2xl hover:shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] transition-all duration-200 mt-5">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex gap-2 items-center md:w-[40%]">
                  <div className="bg-custom-primary rounded-xl text-white w-[3.125rem] min-w-[3.125rem] h-[3.125rem] grid place-items-center">
                    <PiCodeSimpleFill className="w-5 h-5" />
                  </div>
                  <div className="">
                    <h2 className="text-titleMediumLarge font-medium">
                      Development
                    </h2>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-pretty">{`With cutting-edge tools and technologies, we bring your project to life, delivering clean, scalable, and efficient code that meets industry standards.`}</p>
                </div>
              </div>
            </div>
            <div className="border border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] p-2 rounded-2xl hover:shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] transition-all duration-200 mt-5">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex gap-2 items-center md:w-[40%]">
                  <div className="bg-custom-primary rounded-xl text-white w-[3.125rem] min-w-[3.125rem] h-[3.125rem] grid place-items-center">
                    <FaBug className="w-5 h-5" />
                  </div>
                  <div className="">
                    <h2 className="text-titleMediumLarge font-medium">
                      Testing and QA
                    </h2>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-pretty">{`Rigorous testing ensures that your product is free of errors, highly functional, and provides a seamless user experience.`}</p>
                </div>
              </div>
            </div>
            <div className="border border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] p-2 rounded-2xl hover:shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] transition-all duration-200 mt-5">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex gap-2 items-center md:w-[40%]">
                  <div className="bg-custom-primary rounded-xl text-white w-[3.125rem] min-w-[3.125rem] h-[3.125rem] grid place-items-center">
                    <FaRocket className="w-5 h-5" />
                  </div>
                  <div className="">
                    <h2 className="text-titleMediumLarge font-medium">
                      Launch and Support
                    </h2>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-pretty">{`We deploy your project seamlessly and provide ongoing support to ensure your solution evolves with your business needs.`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcessSection;
