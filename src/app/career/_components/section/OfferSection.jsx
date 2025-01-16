// import React from 'react'
// import Image from 'next/image'

// const OfferSection  = () => {
//   return (
//     <div className="max-w-6xl">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           What We Offer
//         </h2>

//         <div className="flex flex-col md:flex-row items-center mb-12">
//           <div className="mb-6 md:mb-0 md:mr-8">
//             <Image
//               src="/career_image_1.png"
//               width={500}
//               height={800}
//               alt="Health & Wellness"
//               className="rounded-lg shadow-md"
//             />
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Health & Wellness
//             </h3>
//             <p className="text-gray-700 mb-4">
//               {`At Root Level, we believe that supporting our employees is crucial
//               to our collective success and wellbeing. That's why we offer a
//               range of benefits to best support you and your family, now and in
//               the future.`}
//             </p>
//             <ul className="list-disc list-inside text-left text-gray-700">
//               <li>
//                 {`Comprehensive health, dental, and vision insurance for you and
//                 your dependents`}
//               </li>
//               <li>Inclusive fertility benefits via Carrot Fertility</li>
//               <li>22 weeks of paid parental leave</li>
//               <li>Flexible paid time off and absence policies</li>
//               <li>
//                 Generous mental health support for you and your dependents
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row-reverse items-center mb-12">
//           <div className="mb-6 md:mb-0 md:ml-8">
//             <Image
//               src="/career_image_2.png"
//               width={500}
//               height={800}
//               alt="Compensation & Support"
//               className="rounded-lg shadow-md"
//             />
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Compensation & Support
//             </h3>
//             <p className="text-gray-700 mb-4">
//               {`Our goal is to foster an environment where you can thrive
//               professionally while feeling confident that you and your loved
//               ones are taken care of.`}
//             </p>
//             <ul className="list-disc list-inside text-left text-gray-700">
//               <li>Competitive salary and equity packages</li>
//               <li>
//                 {`Optional equity donation matching at a 1:1 ratio, up to 25% of
//                 your equity grant`}
//               </li>
//               <li>
//                 {`Robust retirement plans and salary sacrifice programs with
//                 market competitive matching`}
//               </li>
//               <li>Life and income protection plans</li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row items-center">
//           <div className="mb-6 md:mb-0 md:mr-8">
//             <Image
//               src="/career_image_3.png"
//               width={300}
//               height={600}
//               alt="Additional Benefits"
//               className="rounded-lg shadow-md"
//             />
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Additional Benefits
//             </h3>
//             <ul className="list-disc list-inside text-left text-gray-700">
//               <li>$500/month flexible wellness and time saver stipend</li>
//               <li>Commuter benefits</li>
//               <li>Annual education stipend</li>
//               <li>Home office stipends</li>
//               <li>Relocation support for those moving for Anthropic</li>
//               <li>Daily meals and snacks in the office</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default OfferSection

import React from 'react';
import Image from 'next/image';

const OfferSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold text-gray-900">
            What We Offer
          </h2>
        </div>
      <div className="flex flex-col mt-10 md:flex-row items-start">
        {/* Left Section: Title */}
        

        {/* Right Section: Content */}
        <div className="md:w-2/3">
          {/* Health & Wellness Section */}
          <div className="flex gap-10 pl-20 flex-col md:flex-row items-center mb-12">
            <div className="mb-6 md:mb-0 md:mr-8">
              <Image
                src="/career_image_1.png"
                width={1500}
                height={800}
                alt="Health & Wellness"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Health & Wellness
              </h3>
              <p className="text-gray-700 mb-4">
                {`At Root Level, we believe that supporting our employees is crucial
                to our collective success and wellbeing. That's why we offer a
                range of benefits to best support you and your family, now and in
                the future.`}
              </p>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li>
                  {`Comprehensive health, dental, and vision insurance for you and
                  your dependents`}
                </li>
                <li>Inclusive fertility benefits via Carrot Fertility</li>
                <li>22 weeks of paid parental leave</li>
                <li>Flexible paid time off and absence policies</li>
                <li>
                  Generous mental health support for you and your dependents
                </li>
              </ul>
            </div>
          </div>

          {/* Compensation & Support Section */}
          <div className="flex flex-col pl-20 md:flex-row-reverse items-center mb-12">
            <div className="mb-6 md:mb-0 md:ml-8">
              <Image
                src="/career_image_2.png"
                width={1000}
                height={800}
                alt="Compensation & Support"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Compensation & Support
              </h3>
              <p className="text-gray-700 mb-4">
                {`Our goal is to foster an environment where you can thrive
                professionally while feeling confident that you and your loved
                ones are taken care of.`}
              </p>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li>Competitive salary and equity packages</li>
                <li>
                  {`Optional equity donation matching at a 1:1 ratio, up to 25% of
                  your equity grant`}
                </li>
                <li>
                  {`Robust retirement plans and salary sacrifice programs with
                  market competitive matching`}
                </li>
                <li>Life and income protection plans</li>
              </ul>
            </div>
          </div>

          {/* Additional Benefits Section */}
          <div className="flex flex-col pl-20 md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <Image
                src="/career_image_3.png"
                width={500}
                height={600}
                alt="Additional Benefits"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Additional Benefits
              </h3>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li>$500/month flexible wellness and time saver stipend</li>
                <li>Commuter benefits</li>
                <li>Annual education stipend</li>
                <li>Home office stipends</li>
                <li>Relocation support for those moving for Anthropic</li>
                <li>Daily meals and snacks in the office</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
