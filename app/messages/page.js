"use client";

import { fetchMessages } from "@/sanity/lib/client"

import {  Dancing_Script  } from 'next/font/google'
import { useEffect, useState } from 'react';

const dancing_s = Dancing_Script({
    weight: ["400"],

    subsets: ['latin']
})
export default  function Page() {

    const [messages, setMessages] = useState(null);
 
    useEffect(() => {
        const message = fetchMessages();
        message.then((response) => {

            setMessages(response);

        });
    }, []);
    return (
        <main className="about  mt-0   px-4 flex items-start justify-center">
            <div className="w-full md:w-8/12 bg-white opacity-95 pb-40">
            <h1 className={`${dancing_s.className} px-6  text-4xl font-bold text-gray-600 text-center py-8 md:py-16`}>Messages</h1>
                
                 {/* <h1 className="text-4xl font-bold text-gray-600 text-center md:py-16 py-12   header">Messages</h1> */}
            <div className="px-6 mt-4">
                <p className="text-gray-500 text-center mb-4 md:mb-8">
                    Searching for encouragement? Check out some of Dylis's most recent sermons here:
                </p>



                {
                messages?.map((message, i) => {

                    return <iframe
                    ke={message?._id}
                    className="w-[100%] h-[240px] md:h-[500px] mb-8 md:mb-12"
                    src={message?.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                })
            }
                

                
            </div>
            </div>
           
        </main>

    )
}
