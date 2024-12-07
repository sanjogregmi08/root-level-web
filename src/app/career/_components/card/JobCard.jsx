import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { LuArrowRight } from "react-icons/lu";

const JobCard = ({ job }) => {
  return (
    <div className="border h-fit border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] p-4 rounded-2xl hover:shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] transition-all duration-200 cursor-pointer">
      <h2 className="text-headlineSmall font-bold">{job.position}</h2>
      <div className="text-sm my-2 flex gap-1 items-center">
        <span className="px-2 font-medium text-labelMedium rounded-full border-[1px] border-custom-primary">
          {job.location}
        </span>
        <span className="px-2 font-medium text-labelMedium rounded-full border-[1px] border-custom-primary">
          {job.type}
        </span>
      </div>
      <p className="text-sm text-gray-600 text-pretty mt-6">
        {job.description}
      </p>
      <Link href="#about-us" className="float-right mt-4">
        <Button className="bg-custom-primary rounded-xl">
          See Position <LuArrowRight />
        </Button>
      </Link>
    </div>
  );
};

export default JobCard;
