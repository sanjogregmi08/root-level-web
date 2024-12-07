import Link from "next/link";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import logo from "@/assets/svg/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-14 px-8 xl:px-32 border-t-[1px] border-[#ecf4f8] text-custom-primary bg-[#fffffb]">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div className="font-extrabold text-3xl">
          <Image src={logo} width={150} height={50} alt="logo" />
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-titleMedium">USEFUL LINKS</h2>
          <div className="grid gap-3">
            <Link href={`/`} className="text-titleSmall group w-fit">
              <span className="relative font-medium text-custom-neutral20">
                home
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
            <Link href={`#about-us`} className="text-titleSmall group w-fit">
              <span className="relative font-medium text-custom-neutral20">
                about-us
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
            <Link href={`#services`} className="text-titleSmall group w-fit">
              <span className="relative font-medium text-custom-neutral20">
                our-services
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
            <Link href={`#contact-us`} className="text-titleSmall group w-fit">
              <span className="relative font-medium text-custom-neutral20">
                contact-us
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
            <Link href={`/career`} className="text-titleSmall group w-fit">
              <span className="relative font-medium text-custom-neutral20">
                careers
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-titleMedium">BLOG</h2>
          <div className="grid gap-3">
            <Link href={`/`} className="text-titleSmall group w-fit">
              <span className="relative font-medium text-custom-neutral20">
                cyber-security
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
            <Link href={`/`} className="text-titleSmall group w-fit">
              <span className="relative font-medium text-custom-neutral20">
                idea-product
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
          </div>
        </div>
        <div className="space-y-2 sm:col-start-2 md:col-span-1">
          <h2 className="font-bold text-titleMedium ">OTHERS</h2>
          <div className="grid gap-3">
            <Link href={`/`} className="text-titleSmall group w-fit">
              <span className="relative font-medium text-custom-neutral20">
                terms-and-conditions
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
            <Link href={`/`} className="text-titleSmall group w-fit">
              <span className="relative font-medium text-custom-neutral20">
                privacy-policy
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <span className="text-titleSmall">{`TheRootLevel@${new Date().getFullYear()}, All Right Reserved.`}</span>
      </div>
    </div>
  );
};

export default Footer;
