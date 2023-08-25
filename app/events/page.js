"use client";

import Image from 'next/image'
import { fetchEvents } from "@/sanity/lib/client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default  function Page() {

    const [events, setEvents] = useState(null);
 
    useEffect(() => {
        const event = fetchEvents();
        event.then((response) => {

            setEvents(response);

        });
    }, []);

    return (
        <main className=" mt-0 pt-6 pb-40 px-4 about items-center justify-center flex flex-col">


            {
                events?.map((event, i) => {



                    return <div key={event?._id} className="w-full md:flex-row md:w-8/12 h-full flex flex-col items-center shadow-md bg-white mb-6">

                        <Image
                            src={event?.image}
                            alt={event?.image}
                            className="w-full  md:mb-0 md:flex-1 md:w-full md:h-[400px]"
                            width={100}
                            height={300}
                            priority
                        />

                        <div className='p-4  md:flex-1 md:flex md:flex-col md:items-start md:justify-between md:h-full '>
                            <h1 className="md:text-4xl text-3xl font-bold text-gray-600  mb-4">{event?.title}</h1>

                            <label className="text-gray-500 text-center md:text-left">
                                {event?.description}
                            </label>

                            <div>
                                <Link href={event?.reg_link} className='w-full '>
                                    <button className="rounded-sm  w-6/12 md:w-full md:px-4 color-custom py-2 mt-4 shadow-md 
                                text-white font-regular text-md">Register for Event</button></Link>
                            </div>

                        </div>

                    </div>
                })
            }



        </main>

    )
}
