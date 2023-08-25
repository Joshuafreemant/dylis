// "use client";
import Image from 'next/image'
import { fetchCommunity } from "@/sanity/lib/client";
import Link from 'next/link';

export default async function Page({ params }) {

    const slug = params.community
    const community = await fetchCommunity(slug)



    console.log(community, 'new')

    return (
        <main className="bg-white mt-0 pt-6 md:pb-40 pb:32 about px-4 flex justify-center items-center">


            {
                <div className="bg-white opacity-95 px-6 md:px-8 my-4 md:py-20 pt-8 pb-16 mb-20 w-full  md:w-8/12 ">
                    <div className="overflow-hidden">
                        <h1 className="text-3xl font-bold text-gray-600 text-left pt-4">{community?.title}</h1>
                        <p className="text-gray-500 text-left my-6 whitespace-normal">
                            {community?.content}
                        </p>


                        {community?.image &&
                            <img src={community?.image} width='auto' height={150} />}



                    </div>

                    <div className=''>

                        <p className='text-gray-500 text-left my-6 '>

                            Thank you for being a part of this remarkable journey. I look forward to welcoming you to our vibrant community!
                        </p>

                        <p className='text-gray-500 text-left mt-2 font-semibold'>Dylis Chi</p>
                        <p className='text-gray-500 text-left mt-2 font-semibold'>admin@dylischi.com</p>
                        <p className='text-gray-500 text-left mt-2 font-semibold'>www.dylischi.com </p>



                    </div>


                    <Link href={community?.community_link} className='w-7/12'>
                        <button className="w-full bg-blue-700 px-4 py-2 mt-4 shadow-md text-white font-semibold text-md">Join Community</button></Link>

                    <Link href="http://eepurl.com/iyrenY" className='w-7/12'>
                        <button className="w-full bg-gray-400 px-4 py-2 mt-4 shadow-md text-black font-semibold text-md">Join our Mailing List</button></Link>
                </div>

            }



        </main>

    )
}
