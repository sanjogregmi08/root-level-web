"use client"

import CareerHeroSection from "./_components/section/CareerHeroSection";
import GlimpseSection from "./_components/section/GlimpseSection";
import OfferSection from "./_components/section/OfferSection";
import TechnicalInterviewSection from "./_components/section/TechnicalInterviewSection";
import ValueSection from "./_components/section/ValueSection";
import { Separator } from "@/components/ui/separator"

const CareerPage = () => {
  const seperatorCss="w-full border-t border-gray-600"

  return (
    <>
      <CareerHeroSection />
      <div className="px-6 lg:px-32">
      <Separator className={`${seperatorCss} mb-12`}/>
      </div>
      <OfferSection />
      <div className="px-6 lg:px-32">
      <Separator className={`${seperatorCss} mb-12`}/>
      </div>
      <ValueSection />
      <div className="px-6 lg:px-32">
      <Separator className={`${seperatorCss} mb-12`}/>
      </div>
      <TechnicalInterviewSection />
       <div className="px-6 lg:px-32">
       <Separator className={`${seperatorCss} mb-12`}/>
       </div>
      <GlimpseSection />
    </>
  );
};

export default CareerPage;
