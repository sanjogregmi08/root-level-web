'use client'
import React, { useState } from "react";
import Link from 'next/link';

const JobListings = () => {
  const jobCategories = [
    {
      title: "Frontend Developer",
      openRoles: 3,
      roles: [
        { title: "Senior Frontend Developer" },
        { title: "Junior Frontend Developer" },
        { title: "Intern for Frontend" },
      ],
    },
    {
      title: "Backend Developer",
      openRoles: 2,
      roles: [
        { title: "Senior Backend Developer" },
        { title: "Junior Backend Developer" },
        { title: "Intern for Backend " },
      ],
    },
    {
        title: "Ui/Ux Designer",
        openRoles: 2,
        roles: [
          { title: "Senior Ui/Ux Designer" },
          { title: "Junior Ui/Ux Designer" },
          { title: "Intern for Ui/Ux Designer" },
        ],
      },
  ];

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div>
    <div className="w-full sm:h-12 font-medium text-center py-2.5 bg-[#323B38] text-white ">
        Header
      </div>
    
    <div className=" my-12 p-8 max-w-4xl md:max-w-4xl lg:max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">Open Roles</h1>
      {jobCategories.map((category, index) => (
        <div key={index} className="border-b last:border-none pb-4 mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCategory(index)}
          >
            <div>
              <h2 className="text-lg font-medium">{category.title}</h2>
              <p className="text-sm text-gray-500">{category.openRoles} Open Roles</p>
            </div>
            <button
              className="text-xl md:text-3xl font-bold text-gray-500 hover:text-black"
              aria-label="Toggle Category"
            >
              {expandedCategory === index ? "−" : "+"}
            </button>
          </div>
          {expandedCategory === index && (
            <div className="mt-4 space-y-2">
              {category.roles.map((role, roleIndex) => (
                <div
                  key={roleIndex}
                  className="flex justify-between items-center border rounded-lg p-2"
                >
                  <p className="text-sm font-medium">{role.title}</p>
                  <Link href="/apply" className="bg-gray-200 hover:bg-gray-300 text-sm py-1 px-4 rounded-full">
                    Apply
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default JobListings;
