import Link from "next/link";
import React from "react";

const ServiceSection = () => {
  return (
    <div className="py-10 md:py-20 px-3 xl:px-[10rem] w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-14 md:gap-8">
        <div className="flex flex-col items-center justify-end gap-6">
          <div className="bg-custom-primary/50 w-full h-[20rem]"></div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-titleLarge font-bold">Software Development</h1>
            <p>
              {`From concept to deployment, we build software solutions tailored to solve your unique business challenges. Our robust and scalable applications streamline operations and improve productivity.`}
            </p>
            <Link href={`#`}>
              <button className="bg-custom-primary hover:bg-[#b20779] transition-all duration-200 text-white font-medium tracking-wide px-6 py-3">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-6">
          <div className="bg-custom-primary/50 w-full h-[20rem]"></div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-titleLarge font-bold">UI/UX Design</h1>
            <p>
              {`We create visually stunning and user-friendly designs that captivate your audience. From wireframes to prototypes, our design process ensures intuitive interfaces and exceptional user experiences that align with your brand.`}
            </p>
            <Link href={`#`}>
              <button className="bg-custom-primary hover:bg-[#b20779] transition-all duration-200 text-white font-medium tracking-wide px-6 py-3">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-6">
          <div className="bg-custom-primary/50 w-full h-[20rem]"></div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-titleLarge font-bold">Mobile App Development</h1>
            <p>
              {`We design and develop intuitive, high-performance mobile applications tailored to your business needs. Whether it's iOS, Android, or cross-platform, our apps are crafted to enhance user engagement and deliver a seamless experience.`}
            </p>
            <Link href={`#`}>
              <button className="bg-custom-primary hover:bg-[#b20779] transition-all duration-200 text-white font-medium tracking-wide px-6 py-3">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
