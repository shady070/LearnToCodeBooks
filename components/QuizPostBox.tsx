"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Post } from "../types";
import { motion } from "framer-motion";

const reqUrl = 'https://freeresources.learntocodebooks.com/wp-json/wp/v2/quiz?acf_format=standard&_fields=acf,id';

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
          <motion.div initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.2, duration:0.6 }} className="hover:drop-shadow-2xl" key={index}>
            <div>
              <img
                className="rounded-t-lg w-full h-[268px] md:w-[330px] object-cover lg:mt-[30px]"
                src={post.acf.post_thumbnail}
                alt={post.acf.title}
              />
            </div>
            <div className='w-full md:w-[330px] h-[176px] font-light rounded-b-lg px-[31px] pt-[8px] bg-[#1B222C] text-white mb-[30px] md:mb-[0px]'>
              <motion.h1 initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.5 }} className='text-[20px] font-light pb-[5px] text-white hover:text-[#FB8B01] active:text-[#FB7712] cursor-pointer '>{post.acf.title}</motion.h1>
              <div className='w-[272px] text-[16px] flex flex-col gap-[6px] items-start  text-white font-thin'>
               <motion.p initial={{ opacity: 0, y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.5, duration:0.5 }} >{post.acf.description}</motion.p>
               <a  href='/startquiz' ><button className='text-[14px] w-[102px] h-[34px] text-black bg-white rounded-full hover:bg-[#FB8B01] hover:text-white  active:text-black '>Start Quiz</button></a> 
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default QuizPostBox;

