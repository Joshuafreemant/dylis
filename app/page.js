// "use client";
import Image from "next/image";
import Link from "next/link";
import { FaClipboardCheck, FaStar } from "react-icons/fa";
// import { useEffect, useState } from "react";

export default function Home() {
  const today = new Date();

  return (
    <main className=" h-full w-full bg-white">
      <div className="bg-image hidden md:flex items-center">
        <div className="px-20">
          <h1
            data-aos="fade-down"
            className="px-6 text-white font-semibold heading-landing text-left text-[120px]"
          >
            Empowered
          </h1>
          <p
            data-aos="fade-down"
            className=" text-white font-bold p-3 mt-2 text-6xl heading-top pr-[200px]"
          >
            Your Journey to Wholeness and Greatness
          </p>
          <button
            data-aos="fade-down"
            className="px-12 bg-pink-800 text-white text-xl outline-none rounded-3xl py-3 ml-3 mt-4"
          >
            <Link rel="prefetch" href="/join">
              BE EMPOWERED !!!
            </Link>
          </button>
        </div>
      </div>

      <div className="md:hidden pt-12 bg-[#EDE8E2] flex flex-col items-center justify-center">
        <h1 className="px-6 text-black font-medium heading-landing text-center text-5xl mt-3">
          Empowered
        </h1>

        <p className="bg-pink-800 text-white p-3 text-center mt-6 text-xl heading-top">
          The Extraordinary Growth and Expansion Coaching Program
        </p>
        <img src="/dylis.jpeg" className=" w-full h-full object-cover" />
      </div>
      <div className="px-10 text-black text-left md:text-center mt-5 font-medium md:px-[350px] md:mt-20 md:mb-20">
        <p className="text-xl leading-8">
          Join me on this transformative journey and experience where I help you
          break through self-doubt, overcome stagnation, heal past wounds, and
          release unresolved emotional burdens.
        </p>
        <p className="mt-5 text-xl leading-8">
          Together, we'll unravel limiting patterns and beliefs, turning fears
          into courage and uncertainties into crystal-clear clarity.
        </p>
      </div>

      <div className="px-10 bg-image-two py-12 mt-8 md:px-[300px] md:text-center">
        <p className="">
          In today's challenging times, I've helped countless individuals
          grappling with intensifying internal struggles. Many find themselves
          at a crossroads, feeling trapped in a cycle of adversity, unable to
          envision a fulfilling life or take decisive action.
          {/*   
             It’s time to Live
          again and live BIG You my friend are worthy of peace, support, love,
          happiness and financial abundance. So, click to send me an email for a
          free consultation NOW. I cannot wait to support you and champion you
          into your next level. */}
        </p>

        <p className="mt-4 text-lg leading-6 md:mt-8">
          It's as though they've reached the edge of themselves, but in truth,
          it's the edge of their former selves - the end of an outdated vision.
        </p>

        <p className="mt-4 text-lg leading-6 md:mt-8">
          Yet, here you stand, at the precipice of something remarkable—a new,
          powerful version of yourself waiting to be discovered and unleashed.
        </p>

        <p className="mt-4 text-lg leading-6 md:mt-8">
          Every experience you've weathered has led you to this moment, poised
          to transition into an awe-inspiring new chapter.
        </p>

        <p className="mt-4 text-lg leading-6 md:mt-8">
          This coaching program is crafted precisely with you in mind, to guide
          you beyond the constraints of your former self and into an
          extraordinary, uncharted realm of possibilities. A place called ease,
          joy, freedom and peace
        </p>

        <p className="mt-4 text-lg leading-6 md:mt-8">
          You're on the brink of a beautiful transformation—a metamorphosis into
          a version of yourself you've yet to encounter.
        </p>

        <p className="mt-4 text-lg leading-6 md:mt-8">
          All your past experiences will fortify and propel you toward creating
          an unbelievable life filled with remarkable experiences.
        </p>

        <p className="mt-4 text-lg leading-6 md:mt-8">
          It's time for you to savour life's joys, bask in tranquillity, revel
          in financial abundance, foster enriching relationships, and embrace a
          profound love you've yet to discover.
        </p>

        <p className="mt-4 text-lg leading-6 ">
          Join me and many others on this life changing coaching experience,
          where you'll unlock your greatness and fulfil your greatest and most
          extraordinary life and purpose; unlocking your potential in ways
          you've never imagined possible.
        </p>
      </div>

      <div className="mt-12  px-12  md:px-20 md:mt-20">
        <div className="text-center">
          <button className="bg-pink-800 md:w-[250px]  text-white outline-none rounded-3xl px-4 py-2 mt-4">
            <Link rel="prefetch" href="/join">
              Join Now!
            </Link>
          </button>
        </div>

        <h2 className="md:mt-20 mt-12 text-pink-800   mb-4 font-bold text-center moon-dance text-3xl md:text-4xl">
          What we offer
        </h2>

        <div className="md:grid-cols-2 grid lg:grid-cols-4 gap-4">
          <div className="bg-[#EDE8E2] shadow-md p-4 md:p-6 ">
            <div className="flex items-center gap-4">
              <img
                className="h-3 w-3"
                src="https://www.lenkalutonska.com/wp-content/uploads/2021/06/dot.png"
              />
              <h1 className="text-black text-md font-semibold">
                Comprehensive Healing
              </h1>
            </div>
            <p className="text-black text-md leading-7 pl-7 mt-3">
              Discover how past experiences might hinder your foundational
              well-being, creativity, personal empowerment, relationships,
              expression, and spiritual connection.
            </p>
          </div>

          <div className="bg-[#EDE8E2] shadow-md p-6 mt-5 md:mt-0  ">
            <div className="flex items-center gap-4">
              <img
                className="h-3 w-3"
                src="https://www.lenkalutonska.com/wp-content/uploads/2021/06/dot.png"
              />
              <h1 className="text-black text-md font-semibold">
                Empowerment Tools
              </h1>
            </div>
            <p className="text-black text-md leading-7 pl-7 mt-3">
              Acquire tools to liberate yourself from anxiety's grasp and
              reignite your self-worth, authenticity, and self-assurance.
            </p>
          </div>

          <div className="bg-[#EDE8E2] shadow-md p-6 mt-5 md:mt-0  ">
            <div className="flex items-center gap-4">
              <img
                className="h-3 w-3"
                src="https://www.lenkalutonska.com/wp-content/uploads/2021/06/dot.png"
              />
              <h1 className="text-black text-md font-semibold">
                Transformational Journey
              </h1>
            </div>
            <p className="text-black text-md leading-7 pl-7 mt-3">
              Embark on a guided expedition towards self-acceptance,
              forgiveness, effective communication, and a rekindled spiritual
              connection. It's about rewriting your life's narrative!
            </p>
          </div>
          <div className="bg-[#EDE8E2] shadow-md p-6 mt-5 md:mt-0  ">
            <div className="flex items-center gap-4">
              <img
                className="h-3 w-3"
                src="https://www.lenkalutonska.com/wp-content/uploads/2021/06/dot.png"
              />
              <h1 className="text-black text-md font-semibold">
                Live the life of your dreams
              </h1>
            </div>
            <p className="text-black text-md leading-7 pl-7 mt-3">
              Manifesting your deepest aspirations and desires. Embracing every
              moment with purpose, crafting a reality where passion, fulfilment,
              and joy intersect harmoniously.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center md:mt-20 mt-12">
        <button className="bg-pink-800 md:w-[250px]  text-white outline-none rounded-3xl px-4 py-2 mt-4">
          <Link rel="prefetch" href="/join">
            Join Now!
          </Link>
        </button>
      </div>
      <div className="mt-12 px-8 md:px-[350px] md:mt-20">
        <h1 className="moon-dance text-3xl md:text-4xl  text-center text-pink-800  font-bold">
          Why this Coaching program ?
        </h1>
        <p className="text-black text-center mt-4 text-md">
          This program isn't just about healing; it's about seizing control from
          the shadows of anxiety and past traumas. I guide you from uncertainty
          to clarity, from self-doubt to unwavering confidence, and from fear
          into inspired action.
        </p>

        <p className="text-black text-center mt-4 text-md">
          Bid farewell to overwhelming anxiety and embrace a life filled with
          confidence, creativity, self-love, and spiritual awakening.
        </p>

        <p className="text-black text-center mt-4 text-md">
          Ready to break free from the chains and unlock your transformation?
          Join{" "}
          <span className="text-pink-800 heading-top text-xl">EMPOWERED</span>{" "}
          today!
        </p>

        <p>
          ENROLL NOW to ignite a lasting change in your life and unlock your
          fullest and greatest potential!
        </p>
      </div>

      <div className="bg-[#EDE8E2] py-12 px-8 md:px-[300px]">
        <h1 className="moon-dance font-bold  text-pink-800 text-3xl md:text-4xl text-center px-4">
          My transformative coaching steps:
        </h1>
        <div className="flex flex-col items-start justify-start">
          <div className="flex gap-4 mt-8">
            <FaClipboardCheck className="text-pink-800 text-3xl" />
            <p className="text-black text-xl">
              Foundation for Transformation: Open up, identify patterns, heal
              past wounds and emotions
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <FaClipboardCheck className="text-pink-800 text-3xl" />
            <p className="text-black text-xl">
              Reclaiming Your true identity: Reclaim your power, step into new
              version of yourself, Take control, honour your needs, activate
              support.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <FaClipboardCheck className="text-pink-800 text-3xl" />
            <p className="text-black text-xl">
              Self-Acceptance: Love yourself, embrace worth, let go, and accept.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <FaClipboardCheck className="text-pink-800 text-3xl" />
            <p className="text-black text-xl">
              Relationships and Growth: Evolve connections, deepen desires, set
              big bold intentions.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <FaClipboardCheck className="text-pink-800 text-3xl" />
            <p className="text-black text-xl">
              Empowerment and Vision: Clarify purpose, create new vision, make
              choices, commit, and become unstoppable
            </p>
          </div>
        </div>

        <p className="text-pink-800 text-left font-semibold mt-8 text-4xl heading-landing px-6 ">
          It’s time to embrace your journey towards growth, self-empowerment,
          and a life filled with purpose.
        </p>
      </div>

      <div className="bg-[#EDE8E2] py-12 px-8 md:px-[250px] md:py-24">
        <h1 className="moon-dance px-10 text-pink-800 md:text-4xl text-3xl font-bold text-center ">
          Explore the Best Fit for You
        </h1>
        <p className="text-center text-black mt-4 text-md">
          At our coaching hub, we recognise that everyone’s journey is unique.
          That’s why I offer two distinct pathways to guide you along your
          transformational journey: One-to-One Coaching and Group Coaching.
        </p>

        <p className="mt-4 text-center text-black text-md">
          Select the pathway that aligns best with your preferences, pace, and
          desired support system. Start your journey to self-empowerment and
          growth today!
        </p>

        <div className="mt-4 md:grid grid-cols-2 gap-6">
          <div className="bg-white text-black p-6 text-center">
            <h3 className="font-bold heading-top text-xl">
              Twelve One-to-One Coaching sessions:
            </h3>
            <p className="mt-4 leading-6">
              Experience personalised attention and tailored support with my
              one-to-one coaching sessions. I provide dedicated guidance, custom
              strategies, and focused attention, catering specifically to your
              needs and vision. Dig deeper into your personal journey,
              addressing your unique challenges, and unlock your fullest
              potential with undivided attention.
            </p>

            <button className="bg-pink-800 text-white outline-none rounded-3xl px-4 py-2 mt-4">
              <Link rel="prefetch" href="/join">
                Join Now
              </Link>
            </button>
          </div>

          <div className="bg-white text-black p-6 text-center mt-8 md:mt-0">
            <h3 className="font-bold heading-top text-xl">
              Six months Group Coaching:
            </h3>
            <p className="mt-4 leading-6">
              Engage in a supportive community environment with my group
              coaching sessions. Join a vibrant group of individuals on a
              similar path, fostering connection, shared experiences, and mutual
              support. In these sessions, you’ll benefit from collective wisdom,
              diverse perspectives, and shared growth. Explore topics together,
              gain insights from various viewpoints, and harness the power of a
              collaborative journey towards personal transformation.
            </p>

            <button className="bg-pink-800 text-white outline-none rounded-3xl px-4 py-2 mt-4">
              <Link rel="prefetch" href="/join">
                Join Now
              </Link>
            </button>
          </div>
        </div>
        <div>
          <p className="mt-6 text-black">
            No matter the pathway you choose, both One-to-One Coaching and Group
            Coaching options are designed to empower and guide you through your
            unique journey of Awakening, extraordinary growth, and
            transformative. You can do both.
          </p>

          <p className="text-black mt-6 ">The world Needs YOU </p>
          <p className="text-black ">Let’s do this</p>
          <p className="text-black ">See you on the other side</p>
          <p className="text-black ">I love you</p>
          <p className="text-black ">Dylis</p>

          {/* <p className="heading-landing text-pink-800 mt-12 text-4xl text-center px-8 font-medium">
            Welcome to your next version of yourself{" "}
          </p> */}
        </div>
      </div>

      <div className="text-center  bg-[#ede8e2]">
        <button className="bg-pink-800 md:w-[250px]  text-white outline-none rounded-3xl px-4 py-2 mt-4">
          <Link rel="prefetch" href="/join">
            Join Now!
          </Link>
        </button>
      </div>

      <h1 className="text-center text-pink-800 moon-dance bg-[#EDE8E2] md:pt-20 pt-12 md:text-5xl  text-3xl font-bold">
        Testimonials
      </h1>
      <div className="p-8 bg-[#EDE8E2] -mt-2  md:grid grid-cols-3 md:px-32 gap-6">
        <div className="bg-white p-5 mt-6">
          <p className="text-pink-800 text-6xl mb-0 custom-font">&quot;</p>
          <p className="text-black mt-0">
            &quot;I have been a Christian for 20 years. I have been to every
            deliverance meeting, every prayer line. For the past 8 years I have
            periodically had 5 different counsellors, signed off from work with
            PTSD. But it was the coaching I received from Dylis that gave me the
            biggest Breakthrough of my life. Because of the love and support
            from Dylis and the community I was able to face extreme occult
            darkness in my past. I am thriving in this new life that is my new
            identity/reality and wait with anticipation for my next coaching
            session.Thank you Dylis !
          </p>
          <div className=" flex items-center justify-between mt-4">
            <div className="text-yellow-500 flex items-center ">
              <FaStar className="" />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-pink-800 font-bold">C S</p>
          </div>
        </div>

        <div className="bg-white p-5 mt-6">
          <p className="text-pink-800 text-6xl mb-0 custom-font">&quot;</p>
          <p className="text-black mt-0">
            For years I was sexually, physically, emotionally abused by my
            Father. My household was ruled by fear, I knew nothing but fear. But
            now I can&#39;t even remember what was done to me and fear has left
            me. I have to ask God did that really happen to me. I want to thank
            Dylis for her coaching, because it goes to those real deep places in
            me and heals and transforms me. Now I am in deep union and
            relationship with Papa God
          </p>
          <div className=" flex items-center justify-between mt-4">
            <div className="text-yellow-500 flex items-center ">
              <FaStar className="" />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-pink-800 font-bold">S H</p>
          </div>
        </div>

        <div className="bg-white p-5 mt-6">
          <p className="text-pink-800 text-6xl mb-0 custom-font">&quot;</p>
          <p className="text-black mt-0">
            When I think about it, three years ago I didn&#39;t have this level
            of confidence. But now I have come to that place of knowing who I
            am, a child of God and my worth. To have this kind of hope for
            myself and my family. I am grateful for Dylis and her dedication to
            coaching us. I am grateful for this community because we don&#39;t
            just gather, our lives are literally transformed
          </p>
          <div className=" flex items-center justify-between mt-4">
            <div className="text-yellow-500 flex items-center ">
              <FaStar className="" />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-pink-800 font-bold">E M</p>
          </div>
        </div>

        <div className="bg-white p-5 mt-6">
          <p className="text-pink-800 text-6xl mb-0 custom-font">&quot;</p>
          <p className="text-black mt-0">
            I love this community. I feel so loved, heard and seen. This
            coaching has changed me so much, people do not recognise me. I am so
            grateful to you Dylis. I knew she had something for me, my next
            level and I got it!
          </p>
          <div className=" flex items-center justify-between mt-4">
            <div className="text-yellow-500 flex items-center ">
              <FaStar className="" />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-pink-800 font-bold">D</p>
          </div>
        </div>

        <div className="bg-white p-5 mt-6">
          <p className="text-pink-800 text-6xl mb-0 custom-font">&quot;</p>
          <p className="text-black mt-0">
            There was a lot of warfare around me. There had to be a breakdown to
            get the breakthrough. I am more grounded and focused, I have more
            peace, joy, faith and confidence. This where I have wanted to be for
            so long and I have finally arrived. I am crying with tears of joy. I
            thank Dylis
          </p>
          <div className=" flex items-center justify-between mt-4">
            <div className="text-yellow-500 flex items-center ">
              <FaStar className="" />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-pink-800 font-bold">M</p>
          </div>
        </div>

        <div className="bg-white p-5 mt-6">
          <p className="text-pink-800 text-6xl mb-0 custom-font">&quot;</p>
          <p className="text-black mt-0">
            I could feel the love coming from Dylis. Even though I never met her
            physically, I experienced the love and acceptance it was so
            tangible. I had never experienced such love before, I was
            overwhelmed by it
          </p>
          <div className=" flex items-center justify-between mt-4">
            <div className="text-yellow-500 flex items-center ">
              <FaStar className="" />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-pink-800 font-bold">B</p>
          </div>
        </div>
      </div>
    </main>
  );
}
