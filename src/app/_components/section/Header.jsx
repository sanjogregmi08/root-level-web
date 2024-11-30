import Link from "next/link";
import React from "react";
import { SidebarSheet } from "../ui/SiderbarSheet";
import GetInTouchModal from "../ui/GetInTouchModal";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import { TbCone } from "react-icons/tb";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlCallOut } from "react-icons/sl";

const Header = () => {
  return (
    <div className="bg-white py-5 px-8 xl:px-32 fixed w-full z-10 border-b shadow-sm">
      <div className="flex justify-between items-center">
        <div className="font-extrabold text-3xl">
          <Link href={`/`}>
            <Image
              src={logo}
              width={150}
              height={50}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href={`/about-us`} className="flex items-center gap-1 group">
            <span className=" relative font-medium text-custom-neutral20">
              About Us
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </span>
            <TbCone className="w-4 h-4" />
          </Link>
          <Link href={`/services`} className="flex items-center gap-1 group">
            <span className=" relative font-medium text-custom-neutral20">
              Services
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </span>
            <IoCodeSlashOutline className="w-4 h-4" />
          </Link>
          <Link href={`/career`} className="flex items-center gap-1 group">
            <span className=" relative font-medium text-custom-neutral20">
              Career
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </span>
            <IoBriefcaseOutline className="w-4 h-4" />
          </Link>
          <Link href={`/contact-us`} className="flex items-center gap-1 group">
            <span className=" relative font-medium text-custom-neutral20">
              Contact Us
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </span>
            <SlCallOut className="w-4 h-4" />
          </Link>
        </div>
        <div className="hidden md:flex gap-14">
          <div>
            <GetInTouchModal />
          </div>
        </div>
        <div className="md:hidden">
          <SidebarSheet />
        </div>
      </div>
    </div>
  );
};

export default Header;
