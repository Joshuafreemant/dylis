import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";

import BottomHeader from './bottomHeader'
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
import { fetchBooks, fetchCommunities, fetchCommunity } from '@/sanity/lib/client';
import { useEffect, useState } from "react";

export default function SideBar({ menu }) {

  const [more, setMore] = useState(true)
  const [moreCommunity, setMoreCommunity] = useState(true)
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

    <div className="relative">
      <div className={menu === true ? 'color-custom sidebar-show' : 'sidebar-hide bg-gray-50'}>

        <nav className='flex flex-col mt-12'>
          <div className='text-white border-b mt-1 border-gray-400  py-3 px-8 '>
            <Link rel="prefetch" href="/about text-xs">About Dylis</Link>
          </div>
          <div className='text-white border-b border-gray-400  py-3 px-8 mt-0 '>
            <Link rel="prefetch" href="/appointment">Book an Appointment</Link>
          </div>
          <div className={more ? 'text-white border-b border-gray-400  pt-3  mt-0 relative overflow-hidden' : 'text-white border-b border-gray-400  pt-3  mt-0 relative overflow-scroll'}>

            <div className={more ? 'flex items-center justify-between px-8 mb-24' : 'flex items-center justify-between px-8 mb-3'}>
              <Link rel="prefetch" href="/books">Books</Link>
              <BsChevronDown onClick={() => setMore(prev => !prev)} />
            </div>

            <div className={more ? 'mt-12 text-sm mb-0 open' : 'mt-4 text-sm mb-0 close'}>
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

          <div className={moreCommunity ? 'text-white border-b border-gray-400  pt-3  mt-0 relative overflow-hidden' : 'text-white border-b border-gray-400  pt-3  mt-0 relative overflow-scroll'}>

            <div className={moreCommunity ? 'flex items-center justify-between px-8 pb-[60px]' : 'flex items-center justify-between px-8 mb-3'}>
              <Link rel="prefetch" href="#">Community</Link>
              <BsChevronDown onClick={() => setMoreCommunity(prev => !prev)} />
            </div>

            <div className={moreCommunity ? 'mt-12 text-sm mb-0 open' : 'mt-4 text-sm mb-0 close'}>
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
          {/* <div className='text-white border-b border-gray-400  py-3 px-8 mt-0 '>
          <Link rel="prefetch" href="/gift">Claim Free Gift</Link>
        </div> */}
          <div className='flex gap-4 items-center text-white py-2 px-8 border-b border-gray-400'>
            {/* <FaSquareFacebook className='text-2xl'/> */}
            <AiFillInstagram className='text-3xl text-white' />
            <Link rel="prefetch" href={'https://web.facebook.com/eaglesariseglobal'}>

              <AiFillFacebook className='text-3xl text-white' />
            </Link>
            <AiFillYoutube className='text-3xl text-white' />

          </div>
        </nav>


      </div>
    </div>
  )
}
