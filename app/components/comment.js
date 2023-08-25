"use client"

import { useEffect, useState } from 'react';
import { createComment } from '@/sanity/lib/client';


export default function Comment({ _id, setNewComment }) {
    let [id, setId] = useState(_id)

    
    useEffect(() => {
        if (_id !== undefined && _id !== '') {
            setId(_id)
        }
    }, [_id])
    
    const [commentData, setCommentData] = useState({
        name: '',
        comment: '',
        _id: id
    })


    const onSubmit = () => {
        setNewComment(prev => !prev)
        createComment(commentData)

    };

    const handleName = (e) => {
        setCommentData({
            ...commentData,
            name: e.target.value,
        });
    }
    const handleComment = (e) => {
        setCommentData({
            ...commentData,
            comment: e.target.value
        });
    }


    return (

        <>


            <form onSubmit={() => onSubmit()} className="w-full max-w-lg" >


                <label className="block mb-2 mt-8">
                    <span className="text-gray-700">Full Name</span>
                    <input
                        value={commentData.name}
                        onChange={(e) => handleName(e)}
                        className="text-gray-700 w-full p-2 border border-gray-500 mb-4 rounded-md " 
                         />
                </label>




                <label className="block mb-5">
                    <span className="text-gray-700">Comment</span>
                    <textarea
                        value={commentData.comment}
                        onChange={(e) => handleComment(e)}
                        className="p-2 rounded-md text-gray-700 border border-gray-500 form-textarea mt-1 block w-full" 
                        rows="8"></textarea>
                </label>



                <button  type="submit" className="shadow color-custom hover:bg-purple-400 
                focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
                    Submit
                </button>
            </form>
        </>
    )
}
