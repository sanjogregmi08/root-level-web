import React from "react";

const OurServicesSection = () => {
  return (
    <div>
      <div className="py-16 px-4 flex justify-center">
        <div className="max-w-[64.375rem] flex flex-col items-center text-custom-primary">
          <div className="mb-5 text-center">
            <span className="text-titleMediumLarge font-medium">{`service-we-provide`}</span>
          </div>
          <div>
            <h1 className="text-displaySmall font-bold mb-5 text-center">{`Our Services - Tailored to Your Business`}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
