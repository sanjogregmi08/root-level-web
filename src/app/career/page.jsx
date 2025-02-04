"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhatWeOffer from "../_components/career/WhatWeOffer";
import ValueSection from "../_components/career/ValueSection";
import Technical from "../_components/career/TechnicalSection";
import LifeAtRootLevel from "../_components/career/LifeAtRootLevel";
import { TypingAnimation } from "@/components/ui/typing-animation";

const Career = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header section */}
      <header className="w-full py-2.5 bg-[#323B38]">
        <div className="container mx-auto px-4">
          <p className="text-white font-medium text-center">Header</p>
        </div>
      </header>

      <div className="flex-1">
        {/* Main content container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero section */}
          <section className="py-16 sm:py-20 lg:py-32">
            <div className="max-w-7xl mx-auto text-center">
              <div className="space-y-4 mb-8">
                <TypingAnimation className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Dare to Dream Big? Curious. Agile. Driven.
                </TypingAnimation>

                <h1>
                  <TypingAnimation 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold" 
                    delay={4000}
                  >
                    Is This You? Join Us.....
                  </TypingAnimation>
                </h1>
              </div>

              <p className="text-sm sm:text-base text-gray-600 mx-auto max-w-prose mb-8 sm:mb-10">
                We are looking for individuals who thrive on challenges, embrace curiosity, 
                and have a passion for innovation. If you have a relentless drive to learn, 
                grow, and make an impact, you are in the right place. Being a leader in the 
                outsourcing industry, we place a high value on employee support. To maintain 
                consistency and competitiveness in the worldwide market, we give their input 
                first priority when improving our overall rewards.
              </p>

              <Link 
                href="/seeopenrole" 
                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md 
                  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 
                  focus:ring-offset-2 transition-colors duration-200"
              >
                See open roles
              </Link>
            </div>

            <div className="max-w-7xl mx-auto">
              <hr className="border-gray-200 mt-16 sm:mt-20" />
            </div>
          </section>

          {/* Other sections */}
          <section>
            <WhatWeOffer />
          </section>

          <section>
            <ValueSection />
          </section>

          <section>
            <Technical />
          </section>
        </div>

        <section>
          <LifeAtRootLevel />
        </section>
      </div>
    </main>
  );
};

export default Career;













// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import WhatWeOffer from "../_components/career/WhatWeOffer";
// import ValueSection from "../_components/career/ValueSection";
// import Technical from "../_components/career/TechnicalSection";
// import LifeAtRootLevel from "../_components/career/LifeAtRootLevel";
// import { TypingAnimation } from "@/components/ui/typing-animation";

// const Career = () => {
//   return (
//     <div>
//       {/* header section */}
//       <div className="w-full sm:h-12 font-medium text-center py-2.5 bg-[#323B38] text-white ">
//         Header
//       </div>
//     <div className="px-4 lg:px-24">
    
//       {/* hero section */}
//       <div className="px-8" >
//         <div className="flex flex-col items-center justify-center text-center pt-32 pb-12  bg-white">
//           <div className="flex flex-col items-center ">
//         <TypingAnimation className="text-xl md:text-3xl lg:text-4xl font-semibold " >
//           Dare to Dream Big? Curious. Agile. Driven.
//         </TypingAnimation>

//         <h1><TypingAnimation className="text-xl md:text-3xl  lg:text-4xl font-semibold mb-4" delay={4000}>
//               Is This You? Join Us.....
//         </TypingAnimation>
//         </h1> 
//           </div>
//           <p className="text-sm w-9/12 md:w-8/12 lg:w-5/12  md:text-base text-gray-600 mb-6">
//           We’re looking for individuals who thrive on challenges, embrace curiosity, and have a passion for innovation. If you have a relentless drive to learn, grow, and make an impact, you’re in the right place. Being a leader in the outsourcing industry, we place a high value on employee support. To maintain consistency and competitiveness in the worldwide market, we give their input first priority when improving our overall rewards.
//           </p>
//           <Link href="/seeopenrole" className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 focus:outline-none">
//             See open roles
//           </Link>
//         </div>
//         <hr className="border-solid border-1 border-[#bcbbbe] mt-2 " />
//       </div>
//       <div>
//         <WhatWeOffer/>
//       </div>
//       <div>
//         <ValueSection/>
//       </div>
//       <div>
//         <Technical/>
//       </div>
//     </div>
//     <div>
//         <LifeAtRootLevel/>
//       </div>
//     </div>
//   );
// };

// export default Career;
