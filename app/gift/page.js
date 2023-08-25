
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

        <div className=''>
            <form className=" px-6 pt-12 pb-4 mb-5 border  md:px-20 w-full"
                onSubmit={(e) => handleSubmit(e)}
            >
                <h1 className="text-black text-2xl font-semibold mb-4">
                    Subscribe to Claim</h1>

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
                        className='p-2 rounded-md border border-gray-300 w-full text-gray-700'

                    />

                    <input
                        label="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        value={lastName}
                        placeholder="Last Name"
                        className='p-2 rounded-md border border-gray-300 w-full text-gray-700'

                    />

                    <input
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        placeholder="Email Address"
                        className='p-2 rounded-md border border-gray-300 w-full text-gray-700'

                    />

                </div>

                <input
                    label="subscribe"
                    type="submit"
                    className='color-custom text-white rounded-md py-2 text-center w-full mt-3'
                    formValues={[email, firstName, lastName]}
                />
            </form>

            {status === "success" &&
                <div className='md:px-20 px-3'>


                    <div className='flex gap-3 mt-1 mb-16'>
                        <Link href="/gifts.pdf" download className='border color-custom text-white  px-6 py-2 rounded-full'>Download Gift</Link>
                        <Link href="/home" className=' text-gray-800 border border-gray-400 px-6 py-2 rounded-full'>Back to Website</Link>
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



        <main className="flex flex-col md:flex-row-reverse md:h-screen bg-gray-200 items-center">


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
