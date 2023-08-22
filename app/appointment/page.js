"use client";
import React, { useState } from "react";

import { useForm } from "react-hook-form";



export default function Page() {

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <main className="bg-white mt-0 pt-6 about px-4 flex items-center justify-center">


            <div className="md:mb-28 w-full md:w-8/12 lg:w-7/12 bg-white opacity-95">
                <h1 className="text-4xl font-bold text-gray-600 text-center py-12 md:py-20 header">Booking</h1>
                <div className="p-4">
                    <p className="text-black text-center font-regular">
                        For booking, collaborations, and press inquiries please fill out the form below. Team Dylis will return your email within 7-10 business days.
                    </p>
                </div>

                <form
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/joshuafreemant@gmail.com"
                    method="POST"
                    className="px-5 flex flex-col items-start mt-8 pb-28">
                    <div className="flex items-center  w-full justify-between px-3 gap-2">
                        <div className="flex flex-col gap-2 w-[180px] md:w-1/2">
                            <label className="text-gray-600 font-semibold">First Name</label>
                            <input
                                {...register("firstname", {
                                    required: true,
                                    maxLength: 50,
                                })}
                                type="text"
                                className="border border-gray-300 px-2 py-[14px] rounded-lg w-full shadow-md focus:outline-none "
                            />
                            {errors.firstname && (
                                <p className="text-red-500 mt-1 text-xs">
                                    {errors.firstname.type === "required" &&
                                        "This field is required."}
                                    {errors.firstname.type === "maxLength" &&
                                        "Max length is 2000 char."}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 w-[180px] md:w-1/2">
                            <label className="text-gray-600 font-semibold">Last Name</label>
                            <input
                                {...register("lastname", {
                                    required: true,
                                    maxLength: 50,
                                })}
                                type="text"
                                className="border border-gray-300 px-2 py-[14px] rounded-lg w-full shadow-md focus:outline-none " />
                            {errors.lastname && (
                                <p className="text-red-500 mt-1 text-xs">
                                    {errors.lastname.type === "required" &&
                                        "This field is required."}
                                    {errors.lastname.type === "maxLength" &&
                                        "Max length is 2000 char."}
                                </p>
                            )}

                        </div>

                    </div>
                    <div className="flex w-full  mt-8 px-3">


                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-gray-600 font-semibold">Email Address</label>
                            <input
                                {...register("email", {
                                    required: true,
                                    maxLength: 50,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                                })}
                                type="text" className="border border-gray-300 px-2 py-[14px] rounded-lg w-full shadow-md focus:outline-none " />
                            {errors.email && (
                                <p className="text-red-500 mt-1 text-xs">
                                    {errors.email.type === "required" && "This field is required."}
                                    {/* {errors.email.type === "maxLength" && "Max length is 100 char."} */}
                                    {errors.email.type === "pattern" && "Invalid email address."}

                                </p>
                            )}

                        </div>

                    </div>

                    <div className="flex w-full  mt-8 flex-col gap-2 px-3">
                        <label className="text-gray-600 font-semibold">Purpose</label>

                        <div className="text-gray-500 relative w-full cursor-default rounded-lg bg-white py-[14px] border border-gray-300 px-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2  sm:text-sm ">
                            <select className="w-full outline-none"
                                {...register("purpose", {
                                    required: true,


                                })}

                            >
                                <option value='Teaching'>Teaching</option>
                                <option value='Prayer'>Prayer</option>
                            </select>
                        </div>

                        {errors.purpose && (
                            <p className="text-red-500 mt-1 text-xs">
                                {errors.purpose.type === "required" && "This field is required."}

                            </p>
                        )}

                    </div>


                    <div className="flex w-full  mt-8 flex-col gap-2 px-3">
                        <label className="text-gray-600 font-semibold">Date of Event</label>

                        <input
                            {...register("date", {
                                required: false,
                                maxLength: 100,
                            })}
                            type="date"

                            className="text-black border border-gray-300 px-2 py-[14px] rounded-lg w-full shadow-md focus:outline-none " />

                    </div>

                    <div className="flex w-full  mt-8 flex-col gap-2 px-3">
                        <label className="text-gray-600 font-semibold">Address</label>

                        <input
                            {...register("address", {
                                required: true,
                                maxLength: 100,
                            })}
                            type="text" className="text-black border border-gray-300 px-2 py-[14px] rounded-lg w-full shadow-md focus:outline-none " />

                    </div>


                    <div className="flex w-full  mt-8 flex-col gap-2 px-3">
                        <label className="text-gray-600 font-semibold">Organisation</label>

                        <textarea

                            rows={5} className="text-black border border-gray-300 px-2 py-[14px] rounded-lg w-full shadow-md focus:outline-none " {...register("organisation", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.organisation && (
                            <p className="text-red-500 mt-1">
                                {errors.organisation.type === "required" &&
                                    "This field is required."}
                                {errors.organisation.type === "maxLength" &&
                                    "Max length is 2000 char."}
                            </p>
                        )}
                    </div>


                    <button type="submit" className="bg-[#ffa100] text-black mt-8 px-5 rounded-lg ml-3 py-2 text-lg">Submit</button>
                </form>

            </div>


        </main>

    )
}
