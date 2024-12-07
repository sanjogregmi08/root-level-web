"use client";

import React, { useState } from "react";
import { careerData } from "../dummyData";
import JobCard from "./_components/card/JobCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CareerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All positions");

  // Calculate total jobs and category-wise jobs
  const totalJobs = careerData.reduce(
    (total, category) => total + category.jobList.length,
    0
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="pt-32 pb-20 px-8 xl:px-32 w-full relative">
      <div className="w-full">
        <h1 className="text-headlineLarge md:text-displaySmall text-center font-extrabold">
          We have {totalJobs} open positions now!
        </h1>
        <div className="flex flex-col md:flex-row mt-10 gap-4 md:gap-10">
          {/* Sidebar with categories */}
          <div className="flex md:flex-col gap-4 md:h-full md:max-w-[18rem] bg-[#FFFFFB] pb-4 sticky top-[4.8rem] md:top-24">
            <div
              className="flex flex-row md:flex-col overflow-y-auto gap-4 md:gap-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div
                className={`${
                  selectedCategory === "All positions"
                    ? "border-b-4 md:border-l-4 border-custom-primary"
                    : "border-l-4 border-transparent"
                } md:border-b-0 py-[0.875rem] md:px-4 cursor-pointer`}
                onClick={() => handleCategoryClick("All positions")}
              >
                <span className="text-nowrap">{`All positions ${totalJobs}`}</span>
              </div>
              {careerData.map((category, index) => (
                <div
                  key={index}
                  className={`${
                    selectedCategory === category.title
                      ? "border-b-4 md:border-l-4 border-custom-primary"
                      : "border-l-4 border-transparent"
                  } md:border-b-0 py-[0.875rem] md:px-4 cursor-pointer`}
                  onClick={() => handleCategoryClick(category.title)}
                >
                  <span className="text-nowrap">{`${category.title} ${category.jobList.length}`}</span>
                </div>
              ))}
            </div>
            <div className="hidden md:grid gap-4">
              <p className="text-titleSmall text-custom-primary">{`We are always seeking talented people. In case you cannot find your desired position here, please send us your LinkedIn profile and give us your contact information. We will be in touch. `}</p>
              <Link
                href={`https://www.linkedin.com/company/root-level-pvt-ltd/`}
                target="_blank"
              >
                <div>
                  <button className="w-full text-titleSmall font-medium py-2 border border-custom-primary hover:bg-custom-primary hover:text-white transition-all duration-200 rounded-xl">
                    Share your linkedin profile
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Job Listings */}
          <div className="flex-1 grid gap-4">
            {selectedCategory === "All positions" &&
              careerData.map((category, index) =>
                category.jobList.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))
              )}
            {careerData
              .filter((category) => category.title === selectedCategory)
              .map((filteredCategory) =>
                filteredCategory.jobList.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
