// "use client";
import Image from 'next/image'
import { fetchSingleBlog } from "@/sanity/lib/client";
import Link from 'next/link';
import Comment from '@/app/components/comment';

export default async function Page({ params }) {

    const slug = params.singleBlog
    const blog = await fetchSingleBlog(slug)


    async function pollBlogData(slug, interval) {
        while (true) {
            const blog = await fetchSingleBlog(slug);
            console.log('Fetched updated data:', blog);
    
            // Wait for the specified interval before polling again
            await new Promise(resolve => setTimeout(resolve, interval));
        }
    }
    const pollingInterval = 60000; // Poll every 60 seconds (adjust as needed)

    pollBlogData(slug, pollingInterval);

    

    const comm = blog[0]?.comments?.map((comme) => {
        return comme
    })



    return (
        <main className="bg-white mt-0 pt-6 md:pb-40 pb:32 about px-4">


            {
                <div className="bg-white opacity-95 px-6 md:px-8 my-4 py-20 mb-20  md:w-8/12 ">
                    <div className="overflow-hidden">
                        <h1 className="text-3xl font-bold text-gray-600 text-left pt-4">{blog[0]?.title}</h1>
                        <p className="text-gray-500 text-left my-6 whitespace-normal">
                            {blog[0]?.content}
                        </p>


                        {blog[0]?.image &&
                            <img src={blog[0]?.image} width='auto' height={150} />}



                    </div>

                  


                 <Comment _id={blog[0]?._id}/>
                    <h1 className='text-[#aa755f] mt-12 mb-4 text-3xl text-semibold underline '>Comments</h1>

                    <div className='md:h-[400px] h-[300px] overflow-y-scroll'>
                        {comm?.map((co) => {
                            return <div key={co?._id} className='flex flex-col items-start mb-4 ml-4'>
                                <label className='text-gray-700 font-semibold'>{co?.name}</label>
                                <p className='text-gray-700'>{co?.comment}</p>
                                <p className='text-gray-700 text-xs'>{co?._createdAt}</p>


                            </div>
                        })}
                    </div>


                   
                </div>

            }



        </main>

    )
}
