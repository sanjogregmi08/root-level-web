'use client';

import Image from "next/image";
import React from "react";
import Image1 from "@/assets/images/Image1.png";
import Image2 from "@/assets/images/Image2.png";
import Image3 from "@/assets/images/Image3.png";
import { motion } from 'framer-motion'; 

const weOffer = [
  {
    id:1,
    title: "Daily assistance with work",
    image: Image1,
    description: [
      "At Root Level, we believe that supporting our employees is crucial to our collective success and wellbeing. That's why we offer a range of benefits to best support with work",
      "Flexibility to work from office or home.",
      "Receive a monthly laptop and internet allowance, and ask for resources for easy work-from-home options.",
      "During your stay, eat a nutritious lunch and snacks that are provided twice a day.",
    ],
  },
  {
    id:2,
    title: "Professional development",
    image: Image2,
    description: [
      "Our goal is to foster an environment where you can thrive professionally while feeling confident that you and your loved ones are taken care of.",
      "Fund for Growth mindset",
      "Salary advance",
      "Bonus every two years",
      "Life and income protection plans",
    ],
  },
  {
    id:3,
    title: "Additional Benefits",
    image: Image3,
    description: [
      "Additional Benefits include:",
      "Annual, sick, compensation, and bereavement leaves.",
      "Social security fund with health and accidental insurance.",
      "Celebrate festivals, go on workplace outings",
      "Have a team lunch or dinner with your favorite coworkers!",
      
    ],
  },
];

const getInitialAnimation = (index) => {

  const xOffset = index % 2 === 0 ? -100 : 100;
  return {
    x: xOffset,
    opacity: 0
  };
};


const getHoverAnimation = (index) => {
 
  return {
    scale: 1.05,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    rotate: index % 2 === 0 ? 0 : 5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  };
};




const WhatWeOffer = () => {
  return (
    <div className="px-24 py-12 pb-12 bg-white">
        <div className="px-8">

      <h1 className="text-3xl md:text-4xl font-semibold text-start mb-8 text-gray-800">What We Offer</h1>

      <div className="space-y-12">
        {weOffer.map((offer, index) => (
          <div
            key={index}
            className={` flex flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"} items-center gap-8 lg:gap-16`}
          >
           <motion.div
            key={weOffer.id}
            initial={getInitialAnimation(index)}
            animate={{ x: 0, opacity: 1 }}
            whileHover={getHoverAnimation(index)}
            transition={{
              duration: 1,
              ease: "easeOut",
              // Add stagger effect based on index
              delay: index * 2
            }}
            className="relative overflow-hidden  bg-white/5 backdrop-blur-sm p-6 cursor-pointer"
          >
            <div className="relative md:w-72 w-64 h-96 rounded-lg overflow-hidden">
              <Image
                src={offer.image}
                alt={offer.title}
                className="object-cover rounded-lg"
                layout="fill"
              />
            </div>
            </motion.div>
            <div className="w-full space-y-1 lg:w-10/12 ">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">{offer.title}</h2>
              <p className="text-gray-700 text-sm md:text-base ">{offer.description[0]}</p>
              {offer.description.length > 1 && (
                <ul className="list-disc list-inside text-gray-700 ">
                  {offer.description.slice(1).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <hr className="border-solid border-1 border-[#bcbbbe] mt-16" />
      </div>
    </div>
  );
};

export default WhatWeOffer;










// 'use client'
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Image1 from "@/assets/images/Image1.png";
// import Image2 from "@/assets/images/Image2.png";
// import Image3 from "@/assets/images/Image3.png";
// import loaderProp from "@/utils/imageLoader";
// import useImageDimensions from "../../hooks/useImageDimensions";


// const weOffer = [ 
//     {      
//       title: "Health & Wellness",
//       image: Image1,
//       description: [
//         "At Root Level, we believe that supporting our employees is crucial to our collective success and wellbeing. That's why we offer a range of benefits to best support you and your family, now and in the future.",
//         "Comprehensive health, dental, and vision insurance for you and your dependents.",
//         "Inclusive fertility benefits via Carrot Fertility.",
//         "22 weeks of paid parental leave.",
//         "Flexible paid time off and absence policies.",
//         "Generous mental health support for you and your dependents.",
//       ],
//     },
  
//     {
//       title: "Compensation & Support",
//       image: Image2,
//       description: [
//         "Our goal is to foster an environment where you can thrive professionally while feeling confident that you and your loved ones are taken care of.",
//         "Competitive salary and equity packages",
//         "Optional equity donation matching at a 1:1 ratio, up to 25% of your equity grant",
//         "Robust retirement plans and salary sacrifice programs with market competitive matching",
//         "Life and income protection plans",
//       ],
//     },
  
//     {
//       title: "Additional Benefits",
//       image: Image3,
//       description: [
//         "Additional Benifits like:",
//         "$500/month flexible wellness and time saver stipend",
//         "Commuter benefits",
//         "Annual education stipend",
//         "Life and income protection plans",
//         "Home office stipends",
//         "Relocation support for those moving for Anthropic",
//         "Daily meals and snacks in the office",
//       ],
//     },
//   ];

// const WhatWeOffer = () => {
//     const {getImageDimensions } = useImageDimensions();
//   return (
//     <div>
//           <div className="text-start text-[#323B38] grid gap-6">
//             <div className="font-semibold text-2xl ">What we offer</div>
//             <div className="grid gap-8">
//               {weOffer.map((offer, index) => (
//                 <div key={index}>
//                   <div className={
//                     `flex ${index%2==0 ? "flex-row" : "flex-row-reverse"}`
//                   }>
//                     <div className="relative w-32 h-32 overflow-hidden">
//                       <Image
//                         className="w-full object-cover"
//                         src={offer?.image}
//                         alt="agent_profile"
//                         loader={loaderProp}
//                         width={getImageDimensions().width}
//                         height={getImageDimensions().height}
//                       />
//                     </div>
//                     <div className="grid gap-3">
//                       <div className="text-xl font-semibold">
//                         {offer?.title}
//                       </div>

//                       <div>
//                         <p className="mb-4 text-gray-700 text-base">
//                           {offer?.description[0]}
//                         </p>
//                         {offer?.description.length > 1 && (
//                           <ul className="list-disc list-inside space-y-1 text-gray-700 text-base">
//                             {offer?.description.slice(1).map((item, i) => (
//                               <li key={i}>{item}</li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <hr className="border-solid border-1 border-[#919094]" />
//         </div>
//   )
// }

// export default WhatWeOffer