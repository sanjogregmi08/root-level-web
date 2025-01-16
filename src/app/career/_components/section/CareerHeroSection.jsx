// import Link from 'next/link'
// import React from 'react'

// const CareerHeroSection = () => {
//   return (
//     <div className="pt-25 max-w-4xl mb-12">
//       <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
//         Join the team <br /> making AI safe
//       </h1>
//       <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
//         {`We are a Kathmandu-based public benefit corporation. From physics and
//         machine learning to public policy and business, our team has
//         experience in a wide range of fields. Together, we estimate the impact
//         and tractability of research ideas in furthering our objective as a
//         cohesive team.`}
//       </p>
//       <Link href="/roles">
//         <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
//           See open roles
//         </button>
//       </Link>
//     </div>
//   )
// }

// export default CareerHeroSection

import Link from 'next/link';
import React from 'react';

const CareerHeroSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-4">
      <h1
        className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight 
        opacity-0 translate-y-8 animate-fade-in-up"
      >
        Join the team <br /> making AI safe
      </h1>
      <p
        className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl 
        opacity-0 translate-y-8 animate-fade-in-up animation-delay-200"
      >
        {`We are a Kathmandu-based public benefit corporation. From physics and
        machine learning to public policy and business, our team has
        experience in a wide range of fields. Together, we estimate the impact
        and tractability of research ideas in furthering our objective as a
        cohesive team.`}
      </p>
      <Link href="/roles">
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all 
          opacity-0 translate-y-8 animate-fade-in-up animation-delay-400"
        >
          See open roles
        </button>
      </Link>
    </div>
  );
};

export default CareerHeroSection;
