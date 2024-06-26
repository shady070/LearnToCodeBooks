"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Post } from "../types";

const reqUrl = 'https://freeresources.learntocodebooks.com/wp-json/wp/v2/recentpost?acf_format=standard&_fields=acf,id';

const QuizPostBox = () => {
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
    <div className='md:flex md:gap-[50px] flex-wrap'>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        recentPosts.map((post, index) => (
          <div className="hover:drop-shadow-2xl" key={index}>
            <div>
              <img
                className="rounded-t-lg w-full h-[268px] md:w-[330px] object-cover lg:mt-[30px]"
                src={post.acf.post_thumbnail}
                alt={post.acf.title}
              />
            </div>
            <div className='w-full md:w-[330px] h-[176px] rounded-b-lg px-[31px] pt-[8px] bg-[#1B222C] text-white mb-[30px] md:mb-[0px]'>
              <h1 className='text-[20px] font-medium pb-[5px] text-white hover:text-[#FB8B01] active:text-[#FB7712] cursor-pointer '>{post.acf.title}</h1>
              <div className='w-[272px] text-[16px] flex flex-col gap-[6px] items-start  text-white'>
               <p>{post.acf.description}</p>
               <a  href='/' ><button className='text-[14px] w-[102px] h-[34px] text-black bg-white rounded-full hover:bg-[#FB8B01] hover:text-white  active:text-black '>Start Quiz</button></a> 
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default QuizPostBox;

