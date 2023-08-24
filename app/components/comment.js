"use client"
import Image from 'next/image'
import { CiMenuFries } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { PiSquaresFour } from "react-icons/pi";
import { Bebas_Neue, Dancing_Script, Inter } from 'next/font/google'
import Link from 'next/link';
import { AiFillInstagram, AiFillFacebook, AiFillYoutube, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import Photo from './photo';
import { useForm } from 'react-hook-form';
import { createComment } from '@/sanity/lib/client';


export default function Comment({ _id }) {
    const [commentData, setCommentData] = useState({
        name:'',
        comment:'',
        _id:_id
    })


   
    const onSubmit =  () => {

        createComment(commentData)

    };

    const handleName=(e)=>{
        setCommentData({
            ...commentData,  
            name: e.target.value,  
        });
    }
    const handleComment=(e)=>{
        setCommentData({
            ...commentData,  
            comment: e.target.value  
        }); 
    }


    return (

        <>
          

            <form onSubmit={()=>onSubmit()} className="w-full max-w-lg" >
                

                <label className="block mb-2 mt-8">
                    <span className="text-gray-700">Full Name</span>
                    <input
                        value={commentData.name}
                        onChange={(e)=>handleName(e)}
                        className="text-gray-700 w-full p-2 border border-gray-500 mb-4 rounded-md " placeholder="John Appleseed" />
                </label>
               



                <label className="block mb-5">
                    <span className="text-gray-700">Comment</span>
                    <textarea
                         value={commentData.comment}
                         onChange={(e)=>handleComment(e)}
                         className="p-2 text-gray-700 border border-gray-500 form-textarea mt-1 block w-full" rows="8" placeholder="Enter some long form content."></textarea>
                </label>
                


                <button type="submit" className="shadow bg-purple-500 hover:bg-purple-400 
                focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
                    Submit
                </button>
            </form>
        </>
    )
}
