// "use client"; 
import Image from 'next/image'
import { fetchBooks, fetchComments, fetchPosts, getAllPostsWithSlug } from "@/sanity/lib/client";
import Link from 'next/link';

export default async function Page() {

    const posts = await fetchPosts()
    // const posts = await fetchComments()


    console.log(posts)


    return (
        <main className="bg-white mt-0 pt-6 pb-40 flex items-center justify-center flex-col">



{
    posts?.map((post, i)=>{
        return    <div ke={post?._id} className="md:w-8/12 w-full mb-20 px-8 my-4 flex flex-col">
                <h1 className="text-2xl font-bold text-gray-600 text-left pt-4"> {post?.title}</h1>
                <label className="text-gray-400 text-center mt-2 text-[14px] font-semibold bg-gray-900 w-[100px] py-1 px-2 rounded">By {' '+ post?.author}</label>

                <p className="text-gray-500 text-left mt-4 mb-6">
                   {post?.content}


                </p>

                <Image
                    src={post?.image}
                    alt={post?.image}
                    className="w-full mb-6"
                    width={100}
                    height={300}
                // priority
                />


                <Link  href={`/singleBlog/${post?.slug?.current}`} className='w-7/12'>
                    <button className="w-full bg-gray-200 px-4 py-2 mt-4 shadow-md text-black font-semibold text-md">Read More</button></Link>

            </div>

    })
}
         


        </main>

    )
}
