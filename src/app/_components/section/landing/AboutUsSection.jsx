import Link from "next/link";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const AboutUsSection = () => {
  return (
    <div className="py-16 px-4 flex justify-center bg-[#fffffb]">
      <div className="max-w-[68.375rem] flex flex-col items-center text-custom-primary">
        <div className="mb-5 text-center">
          <span className="text-titleMediumLarge font-medium">{`innovative-solutions - elevating-success`}</span>
        </div>
        <div>
          <h1 className="text-displaySmall font-bold mb-5 text-center">{`About Us at a Glance`}</h1>
          <div className="space-y-4">
            <p className="text-center">
              {`Root Level is a dedicated team of innovators, strategists, and developers. Our mission is to deliver software solutions that combine cutting-edge technology, startup agility, and unparalleled attention to detail—all while offering competitive pricing.`}
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="border border-[#ecf4f8] rounded-xl p-3 md:col-span-2">
                <div className="flex gap-2 items-center">
                  <div className="bg-[#dee5ef] rounded-full w-8 h-8 grid place-content-center">
                    <span className="font-medium">1</span>
                  </div>
                  <p className="font-medium">{`What We Do`}</p>
                </div>
                <ul className="list-disc ml-[2rem]">
                  <li>{`Custom Software Development: Tailored solutions to meet your business needs.`}</li>
                  <li>{`Prototyping and MVP Creation: Rapid development for startups and product launches.`}</li>
                  <li>{`Dedicated Teams: Experienced professionals to integrate seamlessly with your operations.`}</li>
                  <li>{`Tech Consulting: Expert advice to navigate challenges and optimize technology investments.`}</li>
                </ul>
              </div>
              <div className="border border-[#ecf4f8] rounded-xl p-3">
                <div className="flex gap-2 items-center">
                  <div className="bg-[#dee5ef] rounded-full w-8 h-8 grid place-content-center">
                    <span className="font-medium">2</span>
                  </div>
                  <p className="font-medium">{`Our Expertise`}</p>
                </div>
                <ul className="list-disc ml-[2rem]">
                  <li>{`Advanced tech stacks (Python, JavaScript, Cloud services, etc.)`}</li>
                  <li>{`Agile methodologies for fast and iterative development.`}</li>
                  <li>{`Deep industry experience across fintech, healthcare, e-commerce, and more.`}</li>
                </ul>
              </div>
              <div className="border border-[#ecf4f8] rounded-xl p-3">
                <div className="flex gap-2 items-center">
                  <div className="bg-[#dee5ef] rounded-full w-8 h-8 grid place-content-center">
                    <span className="font-medium">3</span>
                  </div>
                  <p className="font-medium">{`Why Root Level?`}</p>
                </div>
                <ul className="list-disc ml-[2rem]">
                  <li>{`Quality craftsmanship with cost efficiency.`}</li>
                  <li>{`Start-to-finish project management.`}</li>
                  <li>{`Agile development principles for speed and flexibility.`}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-14">
          <Link href={`/`} className="flex items-center gap-1 group">
            <span className="relative font-medium text-custom-neutral20">
              Send Inquiry
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </span>
            <LuArrowUpRight className="w-4 h-4" />
          </Link>

          <Link href="#">
            <button className="bg-custom-primary text-white rounded-xl px-4 py-2 flex gap-2 md:gap-4 items-center hover:bg-black transition-all duration-200   ">
              <span className="text-titleSmall md:text-titleMedium text-nowrap">
                Get Started Today
              </span>
              <LuArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
