"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Post } from "../types";

const reqUrl = 'https://freeresources.learntocodebooks.com/wp-json/wp/v2/projects?acf_format=standard&_fields=acf,id';

const ProjectPostBox = () => {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const req = await fetch(reqUrl);
        const recentPostsData: Post[] = await req.json();
        setRecentPosts(recentPostsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <div className='md:flex md:gap-[50px] flex-wrap '>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        recentPosts.map((post, index) => (
          <div className="hover:drop-shadow-2xl" key={index}>
            <div>
              <img
                className="rounded-t-lg w-full h-[156px] md:w-[330px] object-cover lg:mt-[30px]"
                src={post.acf.post_thumbnail}
                alt={post.acf.title}
              />
            </div>
            <div className='w-full md:w-[330px] h-[111px] rounded-b-lg px-[31px] pt-[8px] bg-[#1B222C] text-white mb-[30px] md:mb-[0px] '>
              <Link href={`/projectdetails/${post.id}`} className='text-[20px] font-medium pb-[11px] text-white cursor-pointer hover:text-[#FB8B01] active:text-[#FB7712]'>{post.acf.title}</Link>
              <div className='flex justify-between '>
                <p className="text-[16px]">By <span className='font-medium underline text-white cursor-pointer hover:text-[#FB8B01] active:text-[#FB7712]'>{post.acf.auther_}</span></p>
                <p className='font-[100] '>{post.acf.date}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectPostBox;

