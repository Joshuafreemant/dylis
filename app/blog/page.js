"use client";
import Image from 'next/image'
import { fetchBooks, fetchComments, fetchPosts, getAllPostsWithSlug } from "@/sanity/lib/client";
import Link from 'next/link';
import moment from 'moment';
import { AiOutlineComment } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function Page() {

    // const posts =  fetchPosts()
    const [blogPosts, setBlogPosts] = useState(null);

    useEffect(() => {
        const posts = fetchPosts();
        posts.then((response) => {

            setBlogPosts(response);
            console.log(response)

        });
    }, []);

    return (
        <main className="bg-white mt-0 pt-6 pb-40 flex items-center justify-center flex-col">



            {
                blogPosts?.map((post, i) => {
                    const contentPreview = post?.content.split(' ').slice(0, 50).join(' ');
                    return (
                        <div key={post?._id} className="md:w-8/12 w-full  px-8 my-4 flex flex-col">
                            <h1 className="text-2xl font-bold text-gray-600 text-left pt-4">{post?.title}</h1>
                            <div className='flex flex-col items-start justify-start'>
                                <label className="text-gray-400 text-center mt-2 text-[14px] font-semibold bg-gray-900 w-[100px] py-1 px-2 rounded">By {' ' + post?.author}</label>
                                <label className="text-gray-600  mt-2 text-[13px] font-semibold  ">
                                    {moment(post?._createdAt).format('DD-MM-YYYY')}
                                </label>

                                <Link className='text-gray-600 gap-2 mt-2 flex items-center text-xl' href={`/singleBlog/${post?.slug?.current}`} >
                                    <AiOutlineComment />
                                </Link>



                            </div>

                            <p className="text-gray-500 text-left mt-4 mb-6">
                                {contentPreview + "..."}
                            </p>

                            <Image
                                src={post?.image}
                                alt={post?.image}
                                className="w-full mb-6"
                                width={100}
                                height={300}
                            />

                            <Link href={`/singleBlog/${post?.slug?.current}`} className='w-7/12'>
                                <button className="w-full color-custom px-4 py-2 mt-4 shadow-md text-white font-semibold text-md">Read More</button>
                            </Link>
                        </div>
                    );
                })
            }



        </main >

    )
}
