import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";

import BottomHeader from './bottomHeader'
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
import { fetchBooks } from '@/sanity/lib/client';
import { useEffect, useState } from "react";

export default function SideBar({ menu }) {

  const [books, setBooks] = useState([])
  useEffect(() => {
    const book = fetchBooks()

    book.then((books) => {
      setBooks(books)
    });

  }, [])




  return (
    <div className={menu === true ? 'bg-gray-50 sidebar-show' : 'sidebar-hide bg-gray-50'}>

      <nav className='flex flex-col mt-16'>
        <div className='text-black border-b border-gray-400  py-3 px-8 '>
          <Link rel="prefetch" href="/about">About Dylis</Link>
        </div>
        <div className='text-black border-b border-gray-400  py-3 px-8 mt-0 '>
          <Link rel="prefetch" href="/appointment">Book an Appointment</Link>
        </div>
        <div className='text-black border-b border-gray-400  pt-3  mt-0 '>

          <div className='flex items-center justify-between px-8'>
            <Link rel="prefetch" href="/books">Books</Link>
            <BsChevronDown />
          </div>

          <div className='mt-4 text-xs mb-0'>
            {/* {titles?.title} */}
            {books?.map((book, i) => {
              return <p key={i} className='border-gray-400 border-t  mb-0 pl-12 py-3'>
                <Link rel="prefetch" href={`/book/${book?._id}`}> {book?.title}</Link>

              </p>
            })}
          </div>
        </div>
        <div className='text-black border-b border-gray-400  py-3 px-8 mt-0 '>
          <Link rel="prefetch" href="/home">Blog</Link>
        </div>
        <div className='text-black border-b border-gray-400  py-3 px-8 mt-0 '>
          <Link rel="prefetch" href="/messages">Messages</Link>
        </div>
        <div className='text-black border-b border-gray-400  py-3 px-8 mt-0 '>
          <Link rel="prefetch" href="/events">Events</Link>
        </div>
        <div className='text-black border-b border-gray-400  py-3 px-8 mt-0 '>
          <Link rel="prefetch" href="/photo">Photo Gallery</Link>
        </div>
        <div className='flex gap-4 items-center text-black py-4 px-8 border-b border-gray-400'>
          {/* <FaSquareFacebook className='text-2xl'/> */}
          <AiFillInstagram className='text-3xl text-gray-600' />
          <Link rel="prefetch" href={'https://web.facebook.com/eaglesariseglobal'}>

            <AiFillFacebook className='text-3xl text-gray-600' />
          </Link>
          <AiFillYoutube className='text-3xl text-gray-600' />

        </div>
      </nav>


    </div>

  )
}
