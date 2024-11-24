import Link from "next/link";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { blogData } from "@/app/dummyData";

const BlogPage = () => {
  return (
    <div className="pt-5 pb-20 px-3 xl:px-[8rem] w-full bg-custom-darkLight">
      <h1 className="text-black font-black text-[2rem]">{`Recent Blogs`}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {blogData.map((blog) => (
          <div
            key={blog.blog_id}
            className="flex flex-col space-y-4 bg-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <div className="bg-custom-primary/50 h-[14rem] w-full"></div>
            <div className="px-4 pb-4 flex flex-col gap-3">
              <div>
                <span className="text-bodySmall font-medium">{blog?.date}</span>
                <Link href={`/blog/${blog.slug}`}>
                  <div className="flex items-top justify-between">
                    <h2 className="text-titleMedium font-bold">{blog.title}</h2>
                    <LuArrowUpRight className="mt-2 hover:text-custom-primary" />
                  </div>
                </Link>
              </div>
              <span className="text-custom-neutral60">
                {blog.summary.length > 100
                  ? blog.summary.substring(0, 100) + "..."
                  : blog.summary}
              </span>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-custom-primary text-white px-2 py-1 rounded-full text-xs font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
