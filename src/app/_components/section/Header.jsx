import Link from "next/link";
import React from "react";
import { SidebarSheet } from "../ui/SiderbarSheet";
import GetInTouchModal from "../ui/GetInTouchModal";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5 px-8 xl:px-32">
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
      <div className="hidden md:flex gap-14">
        <div className="flex items-center gap-6">
          <Link
            href={`/about-us`}
            className="font-medium text-custom-neutral20 hover:text-custom-primary"
          >
            About Us
          </Link>
          <Link
            href={`/services`}
            className="font-medium text-custom-neutral20 hover:text-custom-primary"
          >
            Our Services
          </Link>
          <Link
            href={`/career`}
            className="font-medium text-custom-neutral20 hover:text-custom-primary"
          >
            Career
          </Link>
          <Link
            href={`/contact-us`}
            className="font-medium text-custom-neutral20 hover:text-custom-primary"
          >
            Contact Us
          </Link>
        </div>
        <div>
          <GetInTouchModal />
        </div>
      </div>
      <div className="md:hidden">
        <SidebarSheet />
      </div>
    </div>
  );
};

export default Header;
