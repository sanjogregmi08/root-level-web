"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { blogData } from "@/app/dummyData";
import { useParams } from "next/navigation";

const BlogDetailsPage = () => {
  const { slug } = useParams();

  // Find blog details based on slug
  const blogDetail = blogData.find((blog) => blog.slug === slug);

  if (!blogDetail) {
    return <p>Loading...</p>; // Display a loading state or a 404 message
  }

  return (
    <div className="pt-5 pb-20 px-3 xl:px-[8rem] w-full bg-gray-100 flex flex-col-reverse md:flex-row gap-10 md:gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
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
      <div className="mx-auto bg-white shadow-md overflow-hidden h-fit">
        {/* Header */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {blogDetail.title}
          </h1>
          <div className="flex items-center justify-between mt-4 text-gray-500">
            <div>
              <span className="text-sm">By {blogDetail.author}</span> |{" "}
              <span className="text-sm">{blogDetail.date}</span>
            </div>
            <div className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md text-sm">
              {blogDetail.category}
            </div>
          </div>
          <p className="mt-4 text-gray-700">{blogDetail.summary}</p>
        </div>

        {/* Tags */}
        <div className="px-6 py-4 border-t">
          <div className="flex gap-2">
            {blogDetail.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 px-2 py-1 text-sm rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {blogDetail.content.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p key={index} className="text-gray-700 mt-4">
                  {block.content}
                </p>
              );
            } else if (block.type === "image") {
              return (
                <div key={index} className="mt-6">
                  <Image
                    src={block.content}
                    alt="Blog Content"
                    className="w-full rounded-lg shadow-sm"
                    width={800}
                    height={600}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
