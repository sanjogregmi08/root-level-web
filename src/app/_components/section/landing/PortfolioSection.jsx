import Link from "next/link";
import React from "react";
import { LuTerminalSquare } from "react-icons/lu";
import { servicesData } from "@/app/dummyData";

const PortFolioSection = () => {
  return (
    <div className="">
      <div className="py-16 px-8 flex justify-center">
        <div className="max-w-[68.375rem] flex flex-col items-center text-custom-primary">
          <div className="mb-5 text-center">
            <span className="text-titleMediumLarge font-medium">{`our-work – driving-innovation-and-success`}</span>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:text-center">{`Explore how Root Level has empowered businesses with innovative, high-quality software solutions tailored to their unique challenges.`}</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="border border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] p-4 xl:p-6 rounded-2xl flex flex-col justify-between hover:shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-5">
                    <h2 className="text-titleMediumLarge font-medium">
                      {service.title}
                    </h2>
                    <LuTerminalSquare className="text-xl" />
                  </div>
                  <p className="text-pretty mt-5">{service.description}</p>
                </div>
                <div className="flex flex-col md:flex-row w-full justify-between mt-5 gap-2">
                  {service.links.map((link, index) => (
                    <Link key={index} href={link.url} className="w-full">
                      <button className={`${link.buttonStyle} w-full`}>{link.text}</button>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolioSection;
