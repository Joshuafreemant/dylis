// "use client"; 
import Image from 'next/image'
// import { fetchBooks, fetchComments, fetchPosts, getAllPostsWithSlug } from "@/sanity/lib/client";
import Link from 'next/link';

export default async function Page() {

    // const books = await fetchPosts()
    // const posts = await fetchComments()


    // console.log(posts)


    return (
        <main className="bg-white mt-0 pt-6 pb-40 flex items-center justify-center flex-col">


            <div className="md:w-8/12 w-full mb-20 px-8 my-4 flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-600 text-left pt-4">The Economics of Inflation: Causes, Effects, and Solutions</h1>
                <p className="text-gray-500 text-left my-6">
                    Inflation is an economic phenomenon that touches the lives of individuals, businesses, and governments alike. It's a term that often appears in headlines and financial discussions, but its implications can be complex and far-reaching. In this blog post, we'll delve into the basics of inflation, explore its causes and effects, and discuss potential solutions.

                   
                </p>

                <Image
                    src="/book.jpg"
                    alt='{post?.image}'
                    className="w-full mb-6"
                    width={100}
                    height={300}
                    // priority
                />


                <label className="text-gray-400 text-left text-[14px] font-semibold">By Dylis Chi</label>


            </div>



        </main>

    )
}
