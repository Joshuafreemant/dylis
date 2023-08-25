"use client";
import Image from 'next/image'
import { fetchSingleBlog } from "@/sanity/lib/client";
import Link from 'next/link';
import Comment from '@/app/components/comment';
import { useEffect, useState } from "react";
import { RWebShare } from "react-web-share";
import { BsShare } from 'react-icons/bs';
import moment from 'moment';

export default function Page({ params }) {

    const slug = params.singleBlog


    const [blogPost, setBlogPost] = useState(null); // Set a default value for id
    const [newComment, setNewComment] = useState(false);

    useEffect(() => {
        const blog = fetchSingleBlog(slug);
        blog.then((blogP) => {
            if (blogP && blogP.length > 0) {
                setBlogPost(blogP[0]);
                console.log(blogP[0])
            }
        });
    }, [slug, newComment]);

    const comm = blogPost?.comments?.map((comme) => {
        return comme
    })


    return (
        <main className="bg-white mt-0 pt-6 md:pb-40 pb:32 about px-4 flex items-center justify-center">


            {
                <div className="bg-white opacity-95 px-6 md:px-8 my-4 md:py-20 pt-8 pb-16 mb-20  md:w-8/12 ">
                    <div className="overflow-hidden">
                        <h1 className="text-3xl font-bold text-gray-600 text-left pt-4">{blogPost?.title}</h1>

                        <div className='flex flex-col items-start justify-start'>
                                <label className="text-gray-400 text-center mt-2 text-[14px] font-semibold bg-gray-900 w-[100px] py-1 px-2 rounded">By {' ' + blogPost?.author}</label>
                                <label className="text-gray-600  mt-2 text-[13px] font-semibold  ">
                                {moment(blogPost?._createdAt).format('DD-MM-YYYY')}
                                </label>

                            </div>
                        <p className="text-gray-500 text-left my-6 whitespace-normal">
                            {blogPost?.content}
                        </p>


                        {blogPost?.image &&
                            <img src={blogPost?.image} width='auto' height={150} />}



                    </div>

                    <RWebShare
                        data={{
                            text: `${blogPost?.title}`,
                            url: `https://dylischi.com//singleBlog/${blogPost?.slug}`,
                            title: "Dylis Chi Blog",
                        }}
                    >
                        <button className='bg-gray-100 shadow-md rounded p-2 my-4 text-black w-[100px] flex items-center gap-4 justify-center'>Share <BsShare /></button>
                    </RWebShare>


                    {
                        blogPost?._id !== undefined && <Comment
                            _id={blogPost?._id}
                            setNewComment={setNewComment} />
                    }


                    <h1 className='text-[#aa755f] mt-12 mb-4 text-2xl text-semibold underline '>Comments <span className='text-xl'>{"(" + comm?.length + ")"}</span></h1>

                    <div className='md:h-[400px] h-[300px] overflow-y-scroll'>
                        {comm?.map((co) => {
                            return <div key={co?._id} className='flex flex-col items-start mb-4 ml-4'>
                                <label className='text-gray-700 font-semibold'>{co?.name}</label>
                                <p className='text-gray-700'>{co?.comment}</p>
                                <p className='text-gray-700 text-xs'>
                                {moment(co?._createdAt).format('DD-MM-YYYY')}
                                </p>


                            </div>
                        })}
                    </div>



                </div>

            }



        </main>

    )
}
