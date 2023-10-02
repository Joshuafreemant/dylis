import Image from 'next/image'
import Link from 'next/link';
export default function Home() {

  const today = new Date()

 
  return (

    <main className="flex flex-col color-custom md:flex-row-reverse md:h-screen items-center">


      <div className='md:w-7/12 h-[50vh] md:h-full w-full  flex justify-center items-center flex-col '>
        {/* <h3 className='text-[#918f6f] shadow-inner text-2xl font-bold text-center'>AVAILABLE AUGUST 30TH</h3> */}

        <img src='/book.jpg' className='w-full h-full object-cover'/>

      
      </div>


      <div className='md:w-5/12 md:flex-1 md:p-12 md:h-full mt-0   w-full p-3 flex justify-center items-center flex-col'>
        <h4 className='text-white my-6 font-semibold'>#THEPROPPHETICBLUEPRINT</h4>
        <h1 className='text-6xl text-center text-white font-bold'>ORDER NOW</h1>
        <p className='my-4 font-normal text-white text-center'>
        Are you grappling with doubts about your prophetic calling? Are you 
exhausted being a passive bystander to your own potential? Tired of playing 
small? Are you ready to step into the greatness that’s within your reach? Do 
you feel an intense desire to make an undeniable impact and touch lives?
Dylis takes you on an inspiring journey, guiding you through a transformative 
process that leads to profound impact and purposeful living.
       
        </p>
        <div className='flex gap-3 mt-2 mb-16'>
          <Link href="https://www.amazon.co.uk/Prophetic-Blueprint-Unlock-Activate-Unstoppable/dp/1982287551/ref=sr_1_1?crid=3MSM2K1AZ0D75&keywords=the+prophetic+blueprint&qid=1695631523&sprefix=the+prophetic+blueprint%2Caps%2C58&sr=8-1" className='bg-black text-white px-6 py-2 rounded-full'>Get Yours Today</Link>
          <Link href="/home" className='bg-black text-white px-6 py-2 rounded-full'>Go to Website</Link>
        </div>
      </div>

    </main>

  )
}
