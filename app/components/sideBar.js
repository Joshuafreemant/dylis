import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";

import BottomHeader from './bottomHeader'
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
import { fetchBooks, fetchCommunities, fetchCommunity } from '@/sanity/lib/client';
import { useEffect, useState } from "react";

export default function SideBar({ menu }) {

  const [books, setBooks] = useState([])
  const [communities, setCommunities] = useState([])
  useEffect(() => {
    const book = fetchBooks()
    const community = fetchCommunities()

    book.then((books) => {
      setBooks(books)
    });

    community.then((community) => {
      setCommunities(community)
    });

  }, [])
  





  return (
    <div className={menu === true ? 'color-custom sidebar-show' : 'sidebar-hide bg-gray-50'}>

      <nav className='flex flex-col mt-16'>
        <div className='text-white border-b border-gray-400  py-3 px-8 '>
          <Link rel="prefetch" href="/about">About Dylis</Link>
        </div>
        <div className='text-white border-b border-gray-400  py-3 px-8 mt-0 '>
          <Link rel="prefetch" href="/appointment">Book an Appointment</Link>
        </div>
        <div className='text-white border-b border-gray-400  pt-3  mt-0 '>

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
        <div className='text-white border-b border-gray-400  py-3 px-8 mt-0 '>
          <Link rel="prefetch" href="/blog">Blog</Link>
        </div>
        <div className='text-white border-b border-gray-400  py-3 px-8 mt-0 '>
          <Link rel="prefetch" href="/messages">Messages</Link>
        </div>
        <div className='text-white border-b border-gray-400  py-3 px-8 mt-0 '>
          <Link rel="prefetch" href="/events">Events</Link>
        </div>

        <div className='text-white border-b border-gray-400  pt-3  mt-0 '>

          <div className='flex items-center justify-between px-8'>
            <Link rel="prefetch" href="/books">Community</Link>
            <BsChevronDown />
          </div>

          <div className='mt-4 text-xs mb-0'>
            {/* {titles?.title} */}
            {communities?.map((community, i) => {
              return <p key={i} className='border-gray-400 border-t  mb-0 pl-12 py-3'>
                <Link rel="prefetch" href={`/community/${community?._id}`}> {community?.title}</Link>

              </p>
            })}
          </div>
        </div>

        <div className='text-white border-b border-gray-400  py-3 px-8 mt-0 '>
          <Link rel="prefetch" href="/photo">Photo Gallery</Link>
        </div>
        <div className='flex gap-4 items-center text-white py-4 px-8 border-b border-gray-400'>
          {/* <FaSquareFacebook className='text-2xl'/> */}
          <AiFillInstagram className='text-3xl text-white' />
          <Link rel="prefetch" href={'https://web.facebook.com/eaglesariseglobal'}>

            <AiFillFacebook className='text-3xl text-white' />
          </Link>
          <AiFillYoutube className='text-3xl text-white' />

        </div>
      </nav>


    </div>

  )
}
