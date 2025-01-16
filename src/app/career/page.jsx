import CareerHeroSection from "./_components/section/CareerHeroSection";
import GlimpseSection from "./_components/section/GlimpseSection";
import OfferSection from "./_components/section/OfferSection";
import TechnicalInterviewSection from "./_components/section/TechnicalInterviewSection";
import ValueSection from "./_components/section/ValueSection";

const CareerPage = () => {
  return (
    <>
      <CareerHeroSection />
      <hr className="w-full border-t border-gray-600 mb-12" />
      <OfferSection />
      <hr className="w-full border-t border-gray-600 mb-12" />
      <ValueSection />
      <hr className="w-full border-t border-gray-600 mb-12" />
      <TechnicalInterviewSection />
      <hr className="w-full border-t border-gray-600 mb-12" />
      <GlimpseSection />
    </>
  );
};

export default CareerPage;
