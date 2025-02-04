import React from 'react';
import { MdOutlineLaptopWindows } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { FaRegFlag } from "react-icons/fa6";

const InterviewProcess = () => {
  const steps = [
    {
      icon: <MdOutlineLaptopWindows/>,
      step: "Step 1",
      title: "Apply Online",
      description: "Start your adventure by completing the online application. We urge you to select jobs that genuinely interest you and fit your goals and skill set."
    },
    {
      icon: <FaRegUser/>,
      step: "Step 2",
      title: "Profile Review",
      description: "Following receipt of your submission, your qualifications will be assessed by our committed talent acquisition team, which will also analyze your résumé and portfolio, if appropriate. "
    },
    {
      icon: <MdOutlineEmail />,
      step: "Step 3",
      title: "Transmitting an email",
      description: "You will be contacted for a scheduled interviews and inform through email. If your qualifications match our requirements. We have the chance to find out more about your history, experiences, and desired professional path. Additionally, it's an opportunity to learn more about Root Level."
    },
    {
      icon: <FiVideo/>,
      step: "Step 4",
      title: "Face-to-face virtual or onsite interview",
      description: "We may ask you to an interview, which may take place in person or electronically, for certain positions. We can learn more about your skills and determine how well you mesh with Root Level's culture through this interview."
    },
    {
      icon: <BiSolidOffer/>,
      step: "Step 5",
      title: "Offer",
      description: "Well done! We'll make you an offer to become a member of our team if everything works out. We'll offer instructions on what to do next, including the onboarding procedure."
    },
    {
      icon: <FaRegFlag/>,
      step: "Step 6",
      title: "Onboarding",
      description: "Our people management team will make sure that your move to Root Level goes well as you start your journey. We'll go over everything you need to know to get started in your new position."
    },
   
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Interview Process</h1>
      <p className="text-center mb-12 text-gray-600">
        The goal of our hiring procedure is to make sure that you and Root Level are a good fit. Here is a summary of what to expect when you apply to join our team, while our procedure may differ based on the position.
      </p>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
        
        {steps.map((step, index) => (
          <div key={index} className="flex mb-12 relative">
            {/* Icon circle */}
            <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 z-10">
              {step?.icon}

              {/* {step.icon && (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
              {step.icon1  && (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
              {step.icon2 && (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {step.icon3  && (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
              {step.icon4 && (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
              {step.icon5 && (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )} */}
            </div>
            
            {/* Content */}
            <div className="ml-8">
              <p className="text-gray-500 mb-1">{step.step}</p>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
        <hr className="border-solid border border-gray-200 mt-12 sm:mt-16" />
      </div>
    </div>
  );
};

export default InterviewProcess;


























// import React from 'react'

// const TechnicalSection =() =>{
//   return (
//     <div className='px-4 mt-12'>
//     <div className='grid md:grid-cols-2 gap-2 md:px-8'>
//        <div className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#323B38] items-start  md:w-96'>Your Interviews Process</div> 
//        <div className='text-sm md:test-base lg:text-base grid gap-4 '>
//         <div>The novel challenges we think about at Root Level demand diverse expertise and perspectives, Our interview process is designed to identify thoughtful candidates who bring unique strengths to our multidisciplinary team. If you think this may describe you, we would love to hear from your regardless of your background or experience.</div>
//         <div>One of the most common questions we get is about whether it is worth applying to work at Root Level if you have not worked on modern machine learning systems in the past. Yes! For some roles, Ml experience is expected, but many technical staff have arrived at Root Level with no machine learning experience. If you are not sure about the ML experience needed for your role, ask your recruiter</div>
//         <div>Our interviews are centered on programming and take place in collaborative spaces such as Replit and Colab. In addition to expecting you to create, run, and debug your solutions, we will be particularly interested in how you approach each challenge and weigh the trade-offs between potential answers. Although you will have the same access to documentation and the internet as usual (which is why we will ask you to share your screen during each interview), it is still necessary to be familiar with the fundamental syntax, standard libraries, and common idioms of the language you are interviewing in so that searching for information would not take up too much time. In addition to non-technical questions about your background and motivations, you will, of course, have time during the interview.</div>           
//        </div>
       
//        </div>
//        <hr className="border-solid border-1 border-[#c2c1c4] mt-16 mb-8"/>
//        </div>
//   )
// }

// export default TechnicalSection;