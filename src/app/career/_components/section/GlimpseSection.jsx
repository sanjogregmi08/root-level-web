// "use client"

// import React from "react";
// import DefaultImage from "@/assets/images/Glimpse.png";
// import Image from "next/image";
// import { Fullscreen } from "lucide-react";
// import Link from "next/link";
// import useImageDimension from "@/utils/useImageDimension";
// import loaderProp from "@/utils/imageLoader";

// const GlimpseSection = () => {

// const {getImageDimensions} = useImageDimension();

//   return (
//     <div>

//       <div className="flex justify-center items-center gap-1 bg-slate-400 rounded-xl">
//         <Image
//           src={DefaultImage}
//           alt="agent"
//           width={getImageDimensions().width}
//           height={getImageDimensions().height}
//           loader={loaderProp}
//           className="object-cover h-full"
//         />
//       </div>

//       <div>
//         <h1>
//           Catch a glimpse of
//           <span>#LifeAtRootLevel</span>
//         </h1>
//         <p>
//           {`Work at Root Level is more than just work; it’s an exciting journey
//           full with friendship, humor, and unending support. Enter our world and
//           see how work and play may coexist together.`}
//         </p>
//         <small>
//           Step into our world and witness the perfect blend of work and fun
//         </small>
//         <Link href={`/`}>Find Out more &#8594;</Link>
//       </div>
//     </div>
//   );
// };

// export default GlimpseSection;


"use client";

import React from "react";
import DefaultImage from "@/assets/images/Glimpse.png";
import Image from "next/image";
import Link from "next/link";

const GlimpseSection = () => {
  return (
    <div className="relative w-full h-[600px] my-12">
      {/* Background Image */}
      <Image
        src={DefaultImage}
        alt="Glimpse of Life at Root Level"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Overlay Text Section */}
      <div className="absolute my-10 mx-5 lg:my-28 lg:ml-28 bg-white rounded-br-3xl p-8 max-w-lg shadow-lg">
        <h1 className="text-base md:text-xl lg:text-4xl lg:text font-bold text-gray-900 mb-6 leading-tight">
          Catch a glimpse of <br /><span className="text-blue-900">#LifeAtRootLevel</span>
        </h1>
        <p className="text-xs md:text-sm lg:text-base text-gray-700 mb-6">
          {`Work at Root Level is more than just work; it’s an exciting journey
          full of friendship, humor, and unending support. Enter our world and
          see how work and play may coexist together.`}
        </p>
        <small className="block font-light text-xs text-black mb-6">
          Step into our world and witness the perfect blend of work and fun.
        </small>
        <Link
          href="/"
          className="text-lg md:text-xl lg:text-2xl font-semibold text-black hover:text-blue-800 transition-all flex items-center"
        >
          Find Out more <span className="ml-2">&#8594;</span>
        </Link>
      </div>
    </div>
  );
};

export default GlimpseSection;
