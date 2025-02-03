import React from "react";
import InputFieldSection from "../_components/apply/InputFieldSection";
import Link from "next/link";

const JobDescription = () => {
  return ( 
    <div>
    <div className="w-full sm:h-12 font-medium text-center py-2.5 bg-[#323B38] text-white ">
        Header
      </div>
      {/* apply page */}
    <div className="max-w-4xl md:max-w-4xl lg:max-w-7xl mx-auto p-6 my-12 ">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="md:text-2xl text-xl lg:text-3xl font-semibold mb-2">Senior Frontend Developer</h1>
          <p className="text-gray-600">Golfutar | Kathmandu</p>
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="" className="bg-gray-200 hover:bg-gray-300 text-sm font-medium py-2 px-4 rounded">
            View all roles
          </Link>
          <Link href="#input" className="bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium py-2 px-4 rounded">
            Apply Now
          </Link>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-base md:text-md lg:text-xl font-semibold mb-2">About Root Level</h2>
        <p className="text-gray-700 leading-relaxed text-base">
         {`At Root Level Pvt. Ltd., we specialize in delivering top-notch IT solutions, including website
          development, app development, and a wide range of digital services. Our mission is to help businesses
          thrive in the digital age by providing innovative, scalable, and user-centric technology solutions.
          Whether you're looking to build a new online presence or develop a custom application, our team of
          experts is here to turn your vision into reality.`}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-base md:text-md lg:text-xl font-semibold mb-2">Role Description</h2>
        <p className="text-gray-700 leading-relaxed text-base">
         {` This is a full-time on-site role for a Senior Frontend Developer at Root Level AI. The Senior Frontend
          Developer will be responsible for tasks like front-end development, responsive web design, and
          software development in the office located in Kathmandu.`}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-base md:text-md lg:text-xl font-semibold mb-2">Responsibilities:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
          <li>
            Lead creative strategy and execution for our full events portfolio, ensuring cohesive experiences
            across industry conferences, hosted events, and executive experiences.
          </li>
          <li>
            Build flexible design systems that maintain brand integrity while adapting to different contexts and
            event sizes.
          </li>
          <li>
            Transform technical concepts into compelling narratives through environmental design,
            presentations, and interactive elements that engage our audiences.
          </li>
          <li>
            Direct and collaborate with agencies and vendors to scale programs effectively.
          </li>
          <li>
            Work cross-functionally to align creative execution with our business strategy and core messaging.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 text-base">
          <strong>Deadline to apply:</strong> None. Applications will be reviewed on a rolling basis.
        </p>
        <p className="text-gray-700 text-base">
          <strong>Salary:</strong> Negotiable
        </p>
      </div>

      <div>
        <h2 className="text-base md:text-md lg:text-xl font-semibold mb-2">Come work with us!</h2>
        <p className="text-gray-700 leading-relaxed text-base">
          {`Root Level is a public benefit corporation headquartered in Kathmandu. We offer competitive
          compensation and benefits, optional equity donation matching, generous vacation and parental leave,
          flexible working hours, and a lovely office space in which to collaborate with colleagues.`}
        </p>
      </div>

      <hr className="border-solid border-1 border-[#bcbbbe] my-12" />

      <div id="input">
        <InputFieldSection/>
      </div>
      
    </div>
    
    </div>
  );
};

export default JobDescription;
