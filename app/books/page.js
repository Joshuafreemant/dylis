// "use client";
import Image from 'next/image'
import { fetchBooks } from "@/sanity/lib/client";
import Link from 'next/link';

export default async function Page() {

    const books = await fetchBooks()
    




    return (
        <main className="bg-white mt-0 pt-6 pb-40 flex items-center justify-center flex-col">


            {
                books?.map((book, i) => {



                    return <div key={book?._id} className="md:w-8/12 w-full mb-20 px-8 my-4 flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-gray-600 text-center pt-4">{book?.title}</h1>
                        <p className="text-gray-500 text-center my-6">
                            {book?.short_description}
                        </p>

                        <Image
                            src={book?.image}
                            alt={book?.image}
                            className="w-full mb-6"
                            width={100}
                            height={300}
                            priority
                        />

                        <label className="text-gray-400 text-center">
                            {book?.short_description}
                        </label>
                        <label className="text-gray-400 text-center text-[14px] font-semibold">By {book?.author}</label>

                        <Link href={book?.amazon_link} className='w-7/12'>
                            <button className="w-full bg-gray-200 px-4 py-2 mt-4 shadow-md text-black font-semibold text-md">BUY ON AMAZON</button></Link>
                    </div>
                })
            }



        </main>

    )
}
