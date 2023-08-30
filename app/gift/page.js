
"use client";
import Image from 'next/image'
import { fetchGifts } from "@/sanity/lib/client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

import MailchimpSubscribe from "react-mailchimp-subscribe";


const CustomForm = ({ status, message, onValidated }) => {
    // let [submitted, setSubmitted] = useState(false)

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            firstName &&
            lastName &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                MERGE1: firstName,
                MERGE2: lastName,
            });
        // setSubmitted(true)
    }


    return (

        <div className='md:px-20 px-6'>

            <p className=' text-white text-left font-medium text-md'>
                Thank you for purchasing my book, 'The Prophetic Blueprint.' As a token of my appreciation, I've prepared a special journal just for you. This powerful journal and devotional have been crafted to complement your transformative journey through 'The Prophetic Blueprint.'
            </p>

            <p className='my-4  text-white text-left font-medium text-md'>

                Simply provide your name and email below, and you will have access to download your personal copy of this journal by clicking the download link when you submit

            </p>
            <p className=' text-white text-left font-medium text-md'>

                Enjoy your reading and reflection!


            </p>
            <form className="  pt-6 pb-4 mb-5    w-full"
                onSubmit={(e) => handleSubmit(e)}
            >



                {status === "sending" && (
                    <div className="text-purple-500">
                        sending...
                    </div>
                )}
                {status === "error" && (
                    <div
                        className="text-red-500"
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                {status === "success" && (
                    <div
                        className="text-green-600"
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}

                <div className="flex flex-col gap-3 w-full">
                    <input
                        label="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        value={firstName}
                        placeholder="First Name"
                        className='p-3 rounded-md border border-gray-300 w-full text-gray-700'

                    />

                    <input
                        label="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        value={lastName}
                        placeholder="Last Name"
                        className='p-3 rounded-md border border-gray-300 w-full text-gray-700'

                    />

                    <input
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        placeholder="Email Address"
                        className='p-3 rounded-md border border-gray-300 w-full text-gray-700'

                    />

                </div>

                <input
                    label="subscribe"
                    type="submit"
                    className='bg-black text-white rounded-md py-3 text-center w-full mt-3'
                    formValues={[email, firstName, lastName]}
                />
            </form>

            {status === "success" &&
            <div className=''>


                <div className='flex gap-3 mt-1 mb-16'>
                    <Link href="/gift.pdf" download className='border color-custom text-white  px-6 py-2 rounded-full'>Download Gift</Link>
                    <Link href="/home" className=' text-white border border-white hover:bg-black hover:text-white px-6 py-2 rounded-full'>Back to Website</Link>
                </div>
            </div>
           }

        </div>
    );
};

export default function Page() {
    const postUrl = "https://gmail.us14.list-manage.com/subscribe/post?u=b470af5223467252474b3d574&id=1737f4b1c5";

    const [gifts, setGifts] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const gift = fetchGifts();
        gift.then((response) => {

            setGifts(response);

        });
    }, []);

    console.log(gifts)

    const handleFormSubmit = () => {
        // Handle your form submission logic, then set submitted to true
        setSubmitted(true);
        console.log('first')
    };


    return (



        <main className="flex flex-col md:flex-row-reverse md:h-screen color-custom items-center gap-6 md:gap-0">


            <div className='md:w-7/12 h-[50vh] md:h-full w-full  flex justify-center items-center flex-col '>
                {/* <h3 className='text-[#918f6f] shadow-inner text-2xl font-bold text-center'>AVAILABLE AUGUST 30TH</h3> */}

                <img src='/giftBook.jpg' className='w-full h-full object-cover' />


            </div>


            <div className="w-full md:w-5/12 ">
                <MailchimpSubscribe url={postUrl}
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />


            </div>

        </main>



    )
}
