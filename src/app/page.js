import AboutOurCompanySection from "./_components/section/landing/AboutOurCompanySection";
import AboutSection from "./_components/section/landing/AboutSection";
import Testimonial from "./_components/section/landing/Testimonial";
import WhatWeDo from "./_components/section/landing/WhatWeDo";
import WhyBusinessChooseUsSection from "./_components/section/landing/WhyBusinessChooseUsSection";
import WhyChooseUsSection from "./_components/section/landing/WhyChooseUsSection";

import AboutUsSection from "./_components/section/landing/AboutUsSection";
import ContactUsSection from "./_components/section/landing/ContactUsSection";
import HeroSection from "./_components/section/landing/HeroSection";
import OurProcessSection from "./_components/section/landing/OurProcessSection";
import PortFolioSection from "./_components/section/landing/PortfolioSection";
import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <>
    <ToastContainer />
      <HeroSection />
      <AboutUsSection />
      <PortFolioSection />
      <OurProcessSection />
      <ContactUsSection />

      {/* old section */}
      {/* <WhyChooseUsSection />
      <AboutOurCompanySection />
      <WhatWeDo />
      <Testimonial />
      <WhyBusinessChooseUsSection /> */}
    </>
  );
}
