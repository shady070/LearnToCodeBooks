"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DOMPurify from 'dompurify';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Post } from "../../../types";



const Page = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); 
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchPostDetails = async () => {
        try {
          const req = await fetch(`https://freeresources.learntocodebooks.com/wp-json/wp/v2/exercises/${id}?acf_format=standard&_fields=acf`);
          const postData = await req.json();
          setPost(postData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching post details:', error);
          setLoading(false);
        }
      };

      fetchPostDetails();
    }
  }, [id]);

  if (loading) {
    return <div className="spinner1"></div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div className="md:px-[65px] px-[30px] py-[80px]  md:py-[42px] bg-[#12151C] md:pt-[130px]">
    <div>
      <h1 className="text-[32px] text-white font-medium">{post.acf.title}</h1>
      <p className="md:text-[24px] pt-[16px] pb-[16px] text-white font-light">{post.acf.subtitle}</p>
    </div>
    <div>
      <img className="w-full md:h-[481px] h-[200px] object-cover md:rounded-[20px] rounded-md" src={post.acf.post_thumbnail} alt={post.acf.title} />
    </div>
    <div className="text-[32px] text-white pt-[10px] md:pb-[20px] md:pt-[46px]">
      <h1>{post.acf.inline_title}</h1>
    </div>
    <div className="w-full md:text-[24px] text-white pt-[30px] font-light">
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.details.replace(/\r\n/g, '<br/>')) }}></p>
    </div>
    <div className="text-[32px] text-white pb-[20px] md:pt-[46px]">
      <h1 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.inline_title_1.replace(/\r\n/g, '<br/>')) }}></h1>
    </div>
    <div className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text.replace(/\r\n/g, '<br/>')) }}></p>
    </div>
    <div className="text-[32px] text-white pb-[20px] md:pt-[46px]">
      <h1 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.inline_title_2.replace(/\r\n/g, '<br/>')) }}></h1>
    </div>
    {post.acf.code && (
    <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      {post.acf.code}
    </SyntaxHighlighter>
    )}
    <div className="text-[32px] text-white pb-[20px] md:pt-[46px]">
      <h1 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.inline_title_3.replace(/\r\n/g, '<br/>')) }}></h1>
    </div>
    <div className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_1.replace(/\r\n/g, '<br/>')) }}></p>
    </div>
    <div className="text-[32px] text-white pb-[20px] md:pt-[46px]">
      <h1 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.inline_title_4.replace(/\r\n/g, '<br/>')) }}></h1>
    </div>
    {post.acf.code_1 && (
    <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      {post.acf.code_1}
    </SyntaxHighlighter>
    )}
    <div className="text-[32px] text-white pb-[20px] md:pt-[46px]">
      <h1 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.inline_title_5.replace(/\r\n/g, '<br/>')) }}></h1>
    </div>
    <div className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_2.replace(/\r\n/g, '<br/>')) }}></p>
    </div>
    <div className="text-[32px] text-white pb-[20px] md:pt-[46px]">
      <h1 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.inline_title_6.replace(/\r\n/g, '<br/>')) }}></h1>
    </div>
    <div className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_3.replace(/\r\n/g, '<br/>')) }}></p>
    </div>
  </div>
  );
};

export default Page;
