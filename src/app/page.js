import AboutOurCompanySection from "./_components/section/landing/AboutOurCompanySection";
import AboutSection from "./_components/section/landing/AboutSection";
import AboutUsSection from "./_components/section/landing/AboutUsSection";
import HeroSection from "./_components/section/landing/HeroSection";
import OurServicesSection from "./_components/section/landing/OurServicesSection";
import Testimonial from "./_components/section/landing/Testimonial";
import WhatWeDo from "./_components/section/landing/WhatWeDo";
import WhyBusinessChooseUsSection from "./_components/section/landing/WhyBusinessChooseUsSection";
import WhyChooseUsSection from "./_components/section/landing/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />

      {/* old section */}
      {/* <WhyChooseUsSection />
      <AboutOurCompanySection />
      <WhatWeDo />
      <Testimonial />
      <WhyBusinessChooseUsSection /> */}
    </>
  );
}
