import React from "react";
import HeroSection from "./_components/section/HeroSection";
import ServiceSection from "./_components/section/ServiceSection";
import OfferingSection from "./_components/section/OfferingSection";
import OurTeamSection from "./_components/section/OurTeamSection";
import LatestNews from "./_components/section/LatestNews";

const AboutUsPage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <OfferingSection />
      <OurTeamSection />
      <LatestNews />
    </div>
  );
};

export default AboutUsPage;
