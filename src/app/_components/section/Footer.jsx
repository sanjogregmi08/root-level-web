import Link from "next/link";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/svg/logo-white.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-14 px-8 xl:px-32 text-white bg-[#17191b]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="font-extrabold text-3xl">
          <Image src={logo} width={150} height={50} alt="logo" />
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-titleMedium">Main Office</h2>
          <div>
            <div className="flex items-start gap-2">
              <LuMapPin className="w-4 h-4" />
              <span className="-mt-1">
                Hattigauda, Budhanilkantha, Kathmandu
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-titleMedium">Userful Links</h2>
          <div className="grid gap-3">
            <Link href={`/`} className="text-titleSmall">
              Home
            </Link>
            <Link href={`/about-us`} className="text-titleSmall">
              About Us
            </Link>
            <Link href={`/services`} className="text-titleSmall">
              Our Services
            </Link>
            <Link href={`/contact-us`} className="text-titleSmall">
              Contact Us
            </Link>
            <Link href={`/career`} className="text-titleSmall">
              Career
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-titleMedium">Useful Links</h2>
          <div className="flex items-center gap-4">
            <Link href={`#`} className="text-titleSmall">
              <TbBrandFacebook className="w-4 h-4" />
            </Link>
            <Link href={`#`} className="text-titleSmall">
              <IoLogoInstagram className="w-4 h-4" />
            </Link>
            <Link href={`#`} className="text-titleSmall">
              <AiOutlineYoutube className="w-4 h-4" />
            </Link>
            <Link href={`#`} className="text-titleSmall">
              <FaWhatsapp className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <span className="text-titleSmall">{`Logo@${new Date().getFullYear()}, All Right Reserved.`}</span>
      </div>
    </div>
  );
};

export default Footer;
