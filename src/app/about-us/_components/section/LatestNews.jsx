import Link from "next/link";
import React from "react";

const LatestNews = () => {
  return (
    <div className="py-10 md:py-20 px-3 xl:px-[10rem] w-full bg-custom-darkLight">
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-custom-primary font-bold uppercase">
          Our Articles
        </span>
        <h1 className="text-black font-black text-[2rem] md:text-[3rem] text-center">{`Over Latest News`}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        <div className="flex flex-col space-y-4 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <div className="bg-custom-primary/50 h-[14rem] w-full"></div>
          <div className="p-2 flex flex-col gap-3">
            <h2 className="text-titleMedium font-bold">
              Business Intelligence In Mobile Application
            </h2>
            <span className="text-custom-neutral60">
              The world of website development brings changes every single year
              and makes it...
            </span>
            <Link href={`#`}>
              <button className="bg-custom-primary hover:bg-[#b20779] text-white font-medium tracking-wide px-6 py-3">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <div className="bg-custom-primary/50 h-[14rem] w-full"></div>
          <div className="p-2 flex flex-col gap-3">
            <h2 className="text-titleMedium font-bold">
              Business Intelligence In Mobile Application
            </h2>
            <span className="text-custom-neutral60">
              The world of website development brings changes every single year
              and makes it...
            </span>
            <Link href={`#`}>
              <button className="bg-custom-primary hover:bg-[#b20779] text-white font-medium tracking-wide px-6 py-3">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <div className="bg-custom-primary/50 h-[14rem] w-full"></div>
          <div className="p-2 flex flex-col gap-3">
            <h2 className="text-titleMedium font-bold">
              Business Intelligence In Mobile Application
            </h2>
            <span className="text-custom-neutral60">
              The world of website development brings changes every single year
              and makes it...
            </span>
            <Link href={`#`}>
              <button className="bg-custom-primary hover:bg-[#b20779] text-white font-medium tracking-wide px-6 py-3">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4 bg-white shadow-sm hover:shadow-md transition-all duration-200">
          <div className="bg-custom-primary/50 h-[14rem] w-full"></div>
          <div className="p-2 flex flex-col gap-3">
            <h2 className="text-titleMedium font-bold">
              Business Intelligence In Mobile Application
            </h2>
            <span className="text-custom-neutral60">
              The world of website development brings changes every single year
              and makes it...
            </span>
            <Link href={`#`}>
              <button className="bg-custom-primary hover:bg-[#b20779] text-white font-medium tracking-wide px-6 py-3">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
