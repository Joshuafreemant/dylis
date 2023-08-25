
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

        <div className='pb-28'>
            <form className="mc__form bg-white px-3 py-12 mb-5 border border-gray-100 w-full"
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
                    className='color-custom text-white rounded-md text-center w-full mt-3'
                    formValues={[email, firstName, lastName]}
                />
            </form>

            {status === "success" && 
            <div className='w-full text-center color-custom p-2 mt-3 rounded-md'>
                <a href="/gifts.pdf" className='text-white' download>
                    Click this button to Claim Your Gift
                </a>
                </div>}
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
        <main className='flex flex-col bg-gray-300 items-center justify-center  w-full h-screen p-4 mailchimp'>
            <div className="w-full md:w-5/12">
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
