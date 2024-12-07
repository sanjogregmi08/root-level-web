"use client";

import Link from "next/link";
import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { TbBrandWhatsapp } from "react-icons/tb";
import { LuSend } from "react-icons/lu";
import { LuYoutube } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { PiFacebookLogoBold } from "react-icons/pi";

const ContactUsSection = () => {
  return (
    <div className="" id="contact-us">
      <div className="py-16 px-8 flex justify-center">
        <div className="max-w-[68.375rem] pb-96 xs:pb-72 md:pb-36 xl:pb-0  flex flex-col items-center text-custom-primary relative">
          <div className="mb-5 text-center">
            <span className="text-titleMediumLarge font-medium">{`contact-us`}</span>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-center">{`We are happy to answer all your questions!`}</h1>
            <p className=" text-xl sm:text-2xl md:text-3xl font-bold mb-5 text-center">
              The Root Level
            </p>
          </div>
          <div>
            <Link
              href={`https://maps.app.goo.gl/zH7DnBUeH2XgK6nE9`}
              target="_blank"
            >
              <div className="border border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] py-4 px-4 rounded-2xl hover:shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] transition-all duration-200 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex gap-2 items-center md:w-[40%]">
                    <div className="bg-custom-primary rounded-xl text-white w-[3.125rem] min-w-[3.125rem] h-[3.125rem] grid place-items-center">
                      <LuBuilding2 className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-titleMedium font-medium text-nowrap">
                        Hattigauda Budhanilkantha
                      </span>
                      <span className="text-labelLarge font-medium text-nowrap">
                        kathmandu, Nepal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="absolute bottom-48 xs:bottom-20 xl:bottom-20 left-10   xl:left-[-11rem] w-[9.5rem] rotate-[6.555deg] border border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] p-[0.625rem] rounded-2xl shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] hover:shadow-none transition-all duration-200 space-y-1">
            <div
              className="border border-[#ecf4f8] bg-[#fffffb] rounded-xl py-[0.625rem] px-[0.875rem] flex items-center justify-between text-custom-primary cursor-pointer"
              onClick={() => window.open("https://wa.me/9860168661", "_blank")}
            >
              <span className="text-labelLarge text-nowrap">whats-app</span>
              <TbBrandWhatsapp className="w-4 h-4" />
            </div>
            <div
              className="border border-[#ecf4f8] bg-[#fffffb] rounded-xl py-[0.625rem] px-[0.875rem] flex items-center justify-between text-custom-primary cursor-pointer"
              onClick={() =>
                window.open("mailto:adrian.abhishek@gmail.com", "_self")
              }
            >
              <span className="text-labelLarge text-nowrap">email-us</span>
              <LuSend className="w-4 h-4" />
            </div>
            <Link
              className="border border-[#ecf4f8] bg-[#fffffb] rounded-xl py-[0.625rem] px-[0.875rem] flex items-center justify-between text-custom-primary cursor-pointer"
              href={`https://www.youtube.com/`}
              target="_blank"
            >
              <span className="text-labelLarge text-nowrap">youtube</span>
              <LuYoutube className="w-4 h-4" />
            </Link>
          </div>
          <div className="absolute bottom-12 xs:bottom-20 xl:bottom-20 right-10  xl:right-[-11rem]  w-[9.5rem] rotate-[-10.48deg] border border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] p-[0.625rem] rounded-2xl shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] hover:shadow-none transition-all duration-200 space-y-1">
            <Link
              className="border border-[#ecf4f8] bg-[#fffffb] rounded-xl py-[0.625rem] px-[0.875rem] flex items-center justify-between text-custom-primary cursor-pointer"
              href={`https://www.instagram.com/`}
              target="_blank"
            >
              <span className="text-labelLarge text-nowrap">instagram</span>
              <FaInstagram className="w-4 h-4" />
            </Link>
            <Link
              className="border border-[#ecf4f8] bg-[#fffffb] rounded-xl py-[0.625rem] px-[0.875rem] flex items-center justify-between text-custom-primary cursor-pointer"
              href={`https://www.facebook.com/`}
              target="_blank"
            >
              <span className="text-labelLarge text-nowrap">facebook</span>
              <PiFacebookLogoBold className="w-4 h-4" />
            </Link>
            <Link
              href={`https://www.linkedin.com/company/root-level-pvt-ltd/`}
              target="_blank"
              className="border border-[#ecf4f8] bg-[#fffffb] rounded-xl py-[0.625rem] px-[0.875rem] flex items-center justify-between text-custom-primary cursor-pointer"
            >
              <span className="text-labelLarge text-nowrap">linked-in</span>
              <TbBrandLinkedin className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
