import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { LuArrowRight } from "react-icons/lu";

const SimilarJobCard = ({ job }) => {
  return (
    <div className="flex flex-col justify-between border border-[#ecf4f8] hover:border-[#fffffb] bg-[#fffffb] p-4 rounded-2xl hover:shadow-[2px_2px_27px_-6px_rgba(0,_0,_0,_0.1)] transition-all duration-200 cursor-pointer">
      <div>
        <h2 className="text-headlineSmall font-bold">{job.position}</h2>
        <p className="text-sm text-gray-600 text-pretty mt-6">
          {job.description}
        </p>
      </div>
      <Link href={`/career/${job.id}`}>
        <div className="flex items-center mt-6">
          <Button
            variant="outline"
            className="text-titleSmall font-medium py-2 border border-custom-primary text-custom-primary hover:bg-custom-primary hover:text-white transition-all duration-200 rounded-xl"
            icon={<LuArrowRight />}
          >
            View Details
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default SimilarJobCard;
