import Image from 'next/image'
import { CiMenuFries } from "react-icons/ci";
import { PiSquaresFour } from "react-icons/pi";
import { Bebas_Neue, Dancing_Script, Inter } from 'next/font/google'
import Link from 'next/link';
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { useState } from 'react';
import Photo from './photo';

const dancing_s = Dancing_Script({
    weight: ["400"],

    subsets: ['latin']
})


const bebas_n = Bebas_Neue({
    weight: ["400"],
    subsets: ['latin']
});
export default function BottomHeader({ menu, setMenu }) {
    const [photo, setPhoto] = useState(false)

    return (

        <>
            <div className={menu ? 'bg-white border-b md:hidden border-gray-300 shadow-4xl z-50 fixed top-0 w-full py-2 px-6 flex justify-between items-center' : 'bg-white md:hidden z-50 border-t border-gray-300 shadow-4xl fixed bottom-0 w-full py-2 px-6 flex justify-between items-center'}>
                {/* <CiMenuFries onClick={() => handleMenu()} className='text-black text-3xl font-extrabold' /> */}
                {menu === false && <CiMenuFries onClick={() => setMenu(true)} className='text-gray-500 text-3xl font-extrabold' />}
                {menu === true && <CiMenuFries onClick={() => setMenu(false)} className='text-gray-500 text-3xl font-extrabold' />}
                <Link rel="prefetch" href="/home" >

                    <p className={`${dancing_s.className} text-gray-500 text-3xl`}>Dylis Chi</p>
                </Link>

                <Link href="/photo" className=' text-3xl'>
                    <PiSquaresFour className='text-gray-500 text-3xl font-extrabold' />
                </Link>
            </div>



            {/* dessktop */}
            <div className={photo ? 'bg-white border-b md:flex border-black shadow-4xl z-50 fixed top-0 w-full h-[140px] px-6 hidden justify-between items-center' : 'bg-white md:flex z-50 border-t border-black shadow-4xl fixed bottom-0 w-full h-[140px] px-6 hidden justify-between items-center'}>


                <div className='flex items-center gap-4'>
                    <Link rel="prefetch" href="/home" >

                        <p className={`${dancing_s.className} text-gray-800 text-4xl mr-6`}>Dylis Chi</p>
                    </Link>

                    <Link rel="prefetch" href="/about" >

                        <p className={`${bebas_n.className} text-gray-800 text-xl font-bold tracking-wider`}>About Dylis </p>
                    </Link>

                    <Link rel="prefetch" href="/appointment" >

                        <p className={`${bebas_n.className} text-gray-800 text-xl font-bold tracking-wider`}>Booking</p>
                    </Link>

                    <Link rel="prefetch" href="/books" >

                        <p className={`${bebas_n.className} text-gray-800 text-xl font-bold tracking-wider`}>Books</p>
                    </Link>

                    <Link rel="prefetch" href="/books" >

                        <p className={`${bebas_n.className} text-gray-800 text-xl font-bold tracking-wider`}>Messages</p>
                    </Link>

                    <Link rel="prefetch" href="/events" >

                        <p className={`${bebas_n.className} text-gray-800 text-xl font-bold tracking-wider`}>Events</p>
                    </Link>

                    <p onClick={() => setPhoto(prev => !prev)} className={`${bebas_n.className} text-gray-800 text-xl font-bold tracking-wider`}>Photo Gallery</p>
                </div>


                <div className='flex items-center gap-4'>

                    <AiFillInstagram className='text-2xl text-gray-600' />
                    <Link rel="prefetch" href={'https://web.facebook.com/eaglesariseglobal'}>
                        <AiFillFacebook className='text-2xl text-gray-600' />

                    </Link>
                    <AiFillYoutube className='text-2xl text-gray-600' />
                    <div className='w-[1.5px] bg-black h-[40px]'></div>
                    {/* <Link href="" className=' text-3xl'> */}
                    <PiSquaresFour onClick={() => setPhoto(prev => !prev)} className='text-gray-700 text-3xl font-extrabold' />
                    {/* </Link> */}
                </div>



            </div>

            {
                photo &&
                <div className='bg-white w-full fixed top-[140px] min-h-screen z-50 bottom-0'>
                    <Photo />
                </div>
            }
        </>
    )
}
