import React from 'react';
import CareerPageCarousel from '../ui/CareerPageCarousel';
import {LuUser} from "react-icons/lu";
import {LuRouter} from "react-icons/lu";
import {LiaHandsHelpingSolid} from "react-icons/lia";
import {LiaSun} from "react-icons/lia";
import {GoProjectRoadmap} from "react-icons/go";
import {MdOutlineComputer} from "react-icons/md";


const ValuesGrid = () => {
  const values = [
    {
      icon:<MdOutlineComputer/>,
      title: "Take action for the benefit of the world.",
      description: "We try to make choices that will ultimately benefit humanity as much as possible. This indicates that we spy unwanted but take numerous risky measures to guarantee that our technology is a powerfully constructive force for good."
    },
    {
      icon: <LiaSun/>,
      title: "Hold shade and light.",
      description: "If things go wrong, AI might present humanity with hitherto unheard-of dangers. If all goes according to plan it could also bring about hitherto unheard-of advantages for humans. To comprehend and guard against the possibility of negative consequences"
    },
    {
      icon: <LuRouter/>,
      title: "Take the easy route that yields results",
      description: "We tackle issues empirically, and we are more concerned with the magnitude of our influence than the complexity of our techniques. This does not imply that we come up with random fixes; it indicates that we iterate after attempting to find the most straightforward solution."
    },
    {
      icon: <LuUser/>,
      title: "Treat our users well.",
      description: "We define 'users' broadly at Root Level. Customers, legislators, ants, and anybody else affected by the technology we develop or the decisions we make are examples of users. We strive to be kind and giving in all of our dealings with one another."
    },
    {
      icon: <LiaHandsHelpingSolid/>,
      title: "Be helpful, truthful, and innocuous.",
      description: "Root Level is a low-ego, high-trust organization. Even when we disagree, we assume good intentions and communicate openly and directly. We respond with consideration, preventing injury and mending relationships where necessary."
    },
    {
      icon: <GoProjectRoadmap/>,
      title: "Put the mission first.",
      description: "At the end of the day, the mission is what we're all here for. It gives us a shared purpose and allows us to act with urgency, rather than being pulled in multiple directions by competing concerns. This engenders trust and collaboration."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">What we value and how we act ?</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl">
                {value.icon}
              </div>
              
              <h3 className="text-lg font-semibold">
                {value.title}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <CareerPageCarousel/>
      </div>
      <hr className="border-solid border border-gray-200 mt-12 sm:mt-16" />
    </div>
  );
};

export default ValuesGrid;








// import Image from 'next/image'
// import React from 'react'
// import CareerPageCarousel from '../ui/CareerPageCarousel'

// const value =[
//     {
//         title: 'Take action for the benefit of the world.',
//         description:
//           'We try to make choices that will ultimately benefit humanity as much as possible. This indicates that we are prepared to take extremely risky measures to guarantee that our technology is a powerfully constructive force for good. We are dedicated to making this transition successful because we take seriously the responsibility of responsibly leading the globe through a technology revolution that could alter the path of human history.',
//       },
    
//       {
//         title: 'Hold shade and light.',
//         description:
//           'If things go wrong, AI might present humanity with hitherto unheard-of dangers. If all goes according to plan, it could also bring about hitherto unheard-of advantages for humans. To comprehend and guard against the possibility of negative consequences, we require shade. Light is necessary for us to see the positive results.',
//       },
//       {
//         title: 'Take the easy route that yields results.',
//         description:
//           ' We tackle issues empirically, and we are more concerned with the magnitude of our influence than the complexity of our techniques. This does not imply that we come up with random fixes. It indicates that we iterate after attempting to find the most straightforward solution. If we only need a bicycle, we donot create a spacecraft.',
//       },
//       {
//       title: 'Treat our users well',
//       description:
//         'We define "users" broadly at Root Level. Customers, legislators, ants, and anybody else affected by the technology we develop or the decisions we make are examples of users. We strive to be kind and giving in all of our dealings with one another, our users, and the wider community. Meeting expectations means going above and above for one another, our clients, and everyone impacted by our technology.',
//       },
//       {
//         title: 'Be helpful, truthful, and innocuous',
//         description:
//           'Root Level is a low-ego, high-trust organization. Even when we disagree, we assume good intentions and communicate politely and directly. We respond with consideration, preventing injury and mending relationships where necessary. Regardless of role, everyone contributes. You are probably the best person to complete everything that needs to be done immediately!',
//       },
//       {
//         title: 'Put the mission first.',
//         description:
//           'At the end of the day, the mission is what we’re all here for. It gives us a shared purpose and allows us to act swiftly together, rather than being pulled in multiple directions by competing goals. It engenders trust and collaboration and is the final arbiter in our decisions. When it comes to our mission, none of us are bystanders. We each take personal ownership over making our mission successful.',
//       },
// ]




// const ValueSection = () => {
//   return (
//     <div  className='px-4'>
//     <div  className='grid px-4 '>
//         <div className='grid md:grid-cols-2 lg:grid-cols-2 space-y-4 md:px-8'>
//         <div className='text-2xl md:text-3xl lg-text-4xl font-semibold text-[#323B38] items-start  md:w-96'>What we value and how we act </div>
//         <div className=' text-sm md:text-base grid gap-4 md:w-full'>
//             {value.map((value,index)=>(
//                 <div key={index}>
//                     <div className='font-semibold'>{value.title}</div>
//                     <div className='text-sm md:text-base'>{value.description}</div>
//                 </div>
//             ))}
//         </div> 
//         </div> 
       

       
//     </div>
//     <div>
//       <CareerPageCarousel/>
//     </div>
//     <hr className="border-solid border-1 border-[#ceced0] mt-16"/>
//     </div>
//   )
// }

// export default ValueSection;