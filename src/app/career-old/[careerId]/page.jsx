"use client";

import React, { useState } from "react";
import DetailSection from "./_components/section/DetailSection";
import Link from "next/link";
import SimilarJobCard from "./_components/card/SimilarJobCard";

const TabList = [
  { title: "Description", id: "description" },
  { title: "What you will do", id: "what-you-will-do" },
  { title: "Our expectation", id: "our-expectation" },
  { title: "Benefits", id: "benefits" },
];

const SimilarJobs = [
  {
    id: 1,
    position: "Software Engineer",
    location: "Remote",
    type: "Full-Time",
    description:
      "We are looking for a talented software engineer to join our team. The ideal candidate will have experience in Python, JavaScript, and cloud services.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of experience in software development",
      "Proficiency in Python, JavaScript, and cloud services",
      "Strong problem-solving skills",
    ],
    responsibilities: [
      "Develop software solutions to meet client needs",
      "Collaborate with team members to design and implement new features",
      "Troubleshoot and debug code to ensure optimal performance",
      "Contribute to all phases of the development lifecycle",
    ],
    applyLink: "#",
  },
  {
    id: 2,
    position: "Data Scientist",
    location: "Remote",
    type: "Full-Time",
    description:
      "We are seeking a data scientist to join our team. The ideal candidate will have experience in data analysis, machine learning, and statistical modeling.",
    requirements: [
      "Master's degree in Data Science, Statistics, or related field",
      "3+ years of experience in data analysis",
      "Proficiency in Python, R, and SQL",
      "Strong analytical and problem-solving skills",
    ],
    responsibilities: [
      "Analyze and interpret complex data sets",
      "Develop predictive models to optimize business processes",
      "Collaborate with cross-functional teams to drive data-driven decision-making",
      "Present findings to stakeholders in a clear and concise manner",
    ],
    applyLink: "#",
  },
  {
    id: 3,
    position: "DevOps Engineer",
    location: "Hybrid",
    type: "Full-Time",
    description:
      "We are looking for a DevOps Engineer to enhance our CI/CD pipelines and improve deployment efficiency.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in DevOps roles",
      "Strong experience with Docker, Kubernetes, and cloud platforms (AWS, Azure, GCP)",
      "Proficiency in scripting languages like Bash or Python",
    ],
    responsibilities: [
      "Maintain and optimize CI/CD pipelines",
      "Collaborate with developers to ensure smooth deployment processes",
      "Monitor infrastructure and ensure high availability of services",
      "Implement security best practices in deployment workflows",
    ],
    applyLink: "#",
  },
  {
    id: 4,
    position: "Front-End Developer",
    location: "Remote",
    type: "Contract",
    description:
      "We are seeking a skilled front-end developer with expertise in React.js and modern web development practices.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of experience with front-end development",
      "Proficiency in React.js, HTML, CSS, and JavaScript",
      "Strong knowledge of responsive design principles",
    ],
    responsibilities: [
      "Build intuitive and responsive user interfaces",
      "Optimize components for maximum performance",
      "Collaborate with designers and backend developers to implement new features",
      "Write clean, maintainable, and efficient code",
    ],
    applyLink: "#",
  },
];

const CareerPage = () => {
  const [tabLink, setTabLink] = useState("description");

  const handleCategoryClick = (link) => {
    setTabLink(link);
  };

  return (
    <div className="pt-20 pb-20 px-8 xl:px-32 w-full relative !scroll-smooth">
      <div className="w-full">
        <div className="flex flex-col md:flex-row mt-10 gap-4 md:gap-10">
          {/* Sidebar with categories */}
          <div className="hidden md:flex md:flex-col gap-4 md:h-full md:max-w-[18rem] bg-[#FFFFFB] pb-4 sticky top-[4.8rem] md:top-24">
            <div
              className="flex flex-row md:flex-col overflow-y-auto gap-4 md:gap-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {TabList.map((tab) => (
                <Link
                  href={`#${tab.id}`}
                  key={tab.id}
                  className={`${
                    tabLink === tab.id
                      ? "border-b-4 md:border-l-4 border-custom-primary"
                      : "border-l-4 border-transparent"
                  } md:border-b-0 py-[0.875rem] md:px-4 cursor-pointer`}
                  onClick={() => handleCategoryClick(tab.id)}
                >
                  <span className="text-nowrap">{tab.title}</span>
                </Link>
              ))}
            </div>
            <div className="hidden md:grid gap-4">
              <p className="text-titleSmall text-custom-primary">{`We are always seeking talented people. In case you cannot find your desired position here, please send us your LinkedIn profile and give us your contact information. We will be in touch. `}</p>

              <div>
                <button className="w-full text-titleSmall font-medium py-2 border border-custom-primary hover:bg-custom-primary hover:text-white transition-all duration-200 rounded-xl">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="flex-1 grid gap-4">
            <DetailSection />
            <div className="mb-8 mt-32">
              <h2 className="text-headlineSmall font-bold">{`Similar Jobs`}</h2>
              <div className="h-fit mt-4 grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {SimilarJobs.map((job) => (
                  <SimilarJobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
