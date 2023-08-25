import Image from 'next/image'
import Link from 'next/link';
export default function Home() {

  const today = new Date()

 
  return (

    <main className="flex flex-col md:flex-row-reverse md:h-screen items-center">


      <div className='md:w-7/12 h-[50vh] md:h-full w-full  flex justify-center items-center flex-col '>
        {/* <h3 className='text-[#918f6f] shadow-inner text-2xl font-bold text-center'>AVAILABLE AUGUST 30TH</h3> */}

        <img src='/book.jpg' className='w-full h-full object-cover'/>

      
      </div>


      <div className='md:w-5/12 md:flex-1 md:p-12 md:h-full mt-0  bg-gray-200 w-full p-3 flex justify-center items-center flex-col'>
        <h4 className='text-black my-6 font-semibold'>#ALLHOPEISFOUNDBOOK</h4>
        <h1 className='text-6xl text-center text-[#a1a07eff] font-bold'>PREORDER NOW</h1>
        <p className='my-4 font-normal text-black text-center'>
          Inspiring you towards the pursuit of hope with a lens of compassion, Sarah serves as a guide who exposes the hidden hope that awaits you each day. Sarah is not shaking up your life with renewed expectation and the epic pursuit of hope for you to go back to your norm. She wants you to get out of your comfort zone and into your go zone—the space where the abnormal eventually becomes comfortable because you refused to give up!
        </p>
        <div className='flex gap-3 mt-2 mb-16'>
          <Link href="/posts/first-post" className='color-custom px-6 py-2 rounded-full'>Get Your Today</Link>
          <Link href="/home" className='color-custom px-6 py-2 rounded-full'>Go to Website</Link>
        </div>
      </div>

    </main>

  )
}
