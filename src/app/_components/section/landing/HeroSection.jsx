"use client";
import Link from "next/link";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MdRocketLaunch } from "react-icons/md";
import { IoCodeSlashOutline } from "react-icons/io5";

const HeroSection = () => {
  const [isFirstCardClicked, setIsFirstCardClicked] = React.useState(false);
  const [isSecondCardClicked, setIsSecondCardClicked] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="h-auto xl:min-h-[calc(100%-5rem)] w-full pt-2 sm:pt-8 px-8 sm:px-16 xl:px-[7.5rem]">
      <div className="xl:flex items-center justify-between xl:gap-[6rem] xl:h-[39rem] w-full mt-11 py-16">
        <div className="w-full h-full place-content-center text-custom-primary">
          <p className="text-[1rem] md:text-lg font-medium pb-2">{`"Innovating Solutions, Elevating Success."`}</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold md:leading-[2.575rem] tracking-wide py-2">
            Transforming ideas <br />
            into exceptional software solutions.
          </h1>
          <p className="text-[1rem] md:text-lg font-medium py-4 md:py-8 break-words">
            <strong>The Root Level </strong> is a trusted IT partner focused on
            building robust, tailored digital solutions that drive growth and
            innovation, transforming your vision into a competitive advantage.
          </p>
          <div className="flex items-center gap-4">
            <Link href={`/`} className="flex items-center gap-1 group">
              <span className="relative font-medium text-custom-neutral20">
                Send Inquiry
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
              <LuArrowUpRight className="w-4 h-4" />
            </Link>

            <Link href="#">
              <button className="bg-custom-primary text-white rounded-xl px-4 py-2 flex gap-2 md:gap-4 items-center hover:bg-black transition-all duration-200">
                <span className="text-titleSmall md:text-titleMedium text-nowrap">
                  Learn More
                </span>
                <LuArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
        <div
          className="w-full h-full flex xl:block flex-col gap-6 md:gap-4 md:flex-row justify-between pt-8 xl:pt-0 xl:relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* First Card */}
          <Card
            className={`xl:absolute xl:w-[22.313rem] md:h-[22rem] top-10 drop-shadow-xl xl:drop-shadow-2xl bg-[rgba(255,255,251,0.33)] transition-transform duration-300 ease-in-out cursor-pointer xl:bg-[rgba(255,255,251,0.80)] !shadow-lg ${
              isFirstCardClicked
                ? "xl:z-10 xl:rotate-[-18deg] xl:scale-110"
                : isSecondCardClicked
                ? "xl:rotate-[-12deg] xl:group-hover:rotate-[-18deg] xl:scale-105"
                : !isHovered
                ? ""
                : "xl:group-hover:rotate-[-18deg] xl:scale-105 xl:translate-y-[3rem]"
            }xl:
    `}
            onMouseDown={() => {
              setIsFirstCardClicked(true);
              setIsSecondCardClicked(false);
              setIsHovered(false);
            }}
          >
            <div className="flex flex-col h-full justify-between px-[1.75rem] py-6 gap-8 md:gap-0">
              <div className="">
                <div className="flex items-center gap-2 justify-between text-black">
                  <h1 className="text-[1rem] font-semibold ">
                    Custom Software Development
                  </h1>
                  <IoCodeSlashOutline className="w-8 h-8 " />
                </div>
                <p className="py-6 text-[1rem] font-regular text-[#777777] break-words">
                  {`"Tailored software solutions built to solve your unique challenges and drive business growth. Root Level delivers quality code and innovative design.
        "`}
                </p>
              </div>
              <div className="w-full flex justify-start">
                <Button className="basis-1/2 bg-custom-primary rounded-xl">Learn More</Button>
              </div>
            </div>
          </Card>

          {/* Second Card */}
          <Card
            className={`xl:absolute xl:w-[22.313rem] md:h-[22rem] drop-shadow-xl bg-[rgba(255,255,251,0.33)] xl:bg-[rgba(255,255,251,0.80)] !shadow-lg  left-16 xl:translate-x-[10rem] top-10 xl:drop-shadow-2xl xl:rotate-[12deg] transition-transform duration-300 ease-in-out cursor-pointer 
      !flex !flex-col !justify-between
      ${
        isSecondCardClicked
          ? "xl:z-10 xl:rotate-[18deg] xl:scale-110"
          : isFirstCardClicked
          ? "xl:rotate-[12deg] xl:group-hover:rotate-[18deg] xl:scale-105"
          : !isHovered
          ? ""
          : "xl:group-hover:rotate-[18deg] xl:scale-105 xl:translate-y-[3rem]"
      }
    `}
            onMouseDown={() => {
              setIsFirstCardClicked(false);
              setIsSecondCardClicked(true);
              setIsHovered(false);
            }}
          >
            <div className="flex flex-col h-full justify-between px-[1.75rem] py-6 gap-8 md:gap-0">
              <div className="">
                <div className="flex items-center gap-2 justify-between text-black">
                  <h1 className="text-[1rem] font-semibold ">
                    Startup-Driven Innovation
                  </h1>
                  <MdRocketLaunch className="w-8 h-8 " />
                </div>
                <p className="py-6 text-[1rem] font-regular text-[#777777] break-words">
                  {`"We treat every project like our own product, delivering agile
        and scalable solutions with a startup mindset to meet your
        goals."`}
                </p>
              </div>
              <div className="w-full flex md:justify-end">
                <Button className="basis-1/2 bg-custom-primary rounded-xl">Contact us</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
