"use client";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Dancing_Script } from "next/font/google";

const dancing_s = Dancing_Script({
  weight: ["400"],

  subsets: ["latin"],
});
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
        {/* <h1 className="text-4xl font-bold text-gray-600 text-center py-12 md:py-20 header">Booking</h1> */}
        <h1
          className={`moon-dance  text-4xl font-semibold text-gray-600 text-center py-6 md:py-12`}
        >
          Empowers coaching program
        </h1>
        <div className="p-4">
          <p className="text-black text-center font-regular">
            Your one step away from an extraordinary life Fill the form below
            and I will be in touch with you soon
          </p>
        </div>

        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/admin@dylischi.com"
          method="POST"
          className="px-5 flex flex-col items-start mt-8 pb-28"
        >
          <div className="flex items-center  w-full justify-between px-3 gap-2">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-gray-600 font-regular text-sm ">
                Name
              </label>
              <input
                {...register("name", {
                  required: true,
                  maxLength: 50,
                })}
                type="text"
                className="border text-black border-gray-300 px-2 py-[14px] rounded-lg w-full shadow-md focus:outline-none "
              />
              {errors.name && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
            </div>
          </div>
          <div className="flex w-full  mt-8 px-3">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-gray-600 font-regular text-sm">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: true,
                  maxLength: 50,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                type="text"
                className="text-black border border-gray-300 px-2 py-[14px] rounded-lg w-full shadow-md focus:outline-none "
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {/* {errors.email.type === "maxLength" && "Max length is 100 char."} */}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
            </div>
          </div>

          <div className="flex w-full  mt-8 flex-col gap-2 px-3">
            <label className="text-gray-600 font-regular text-sm">
              Background and goals
            </label>

            <textarea
              rows={3}
              className="text-black border border-gray-300 px-2 py-[14px] rounded-lg w-full shadow-md focus:outline-none "
              {...register("Background_and_goals", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.background_and_goals && (
              <p className="text-red-500 mt-1">
                {errors.background_and_goals.type === "required" &&
                  "This field is required."}
                {errors.background_and_goals.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
          </div>

          <div className="flex w-full  mt-8 flex-col gap-2 px-3">
            <label className="text-gray-600 font-regular text-sm">
              Expectations and challenges
            </label>

            <textarea
              rows={3}
              className="text-black border border-gray-300 px-2 py-[14px] rounded-lg w-full shadow-md focus:outline-none "
              {...register("Expectations_and_challenges", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.Expectations_and_challenges && (
              <p className="text-red-500 mt-1">
                {errors.Expectations_and_challenges.type === "required" &&
                  "This field is required."}
                {errors.Expectations_and_challenges.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
          </div>

          <div className="flex w-full  mt-8 flex-col gap-2 px-3">
            <label className="text-gray-600 font-regular text-sm">
              Availability and commitment:
            </label>

            <div className="text-gray-500 relative w-full cursor-default rounded-lg bg-white py-[14px] border border-gray-300 px-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2  sm:text-sm ">
              <select
                className="w-full outline-none"
                {...register("Availability_and_commitment", {
                  required: true,
                })}
              >
                <option value="6 months of 121 coaching ( £6000 )">
                  6 months of 121 coaching ( £6000 )
                </option>
                <option value="6 months group coaching ( £3000)">6 months group coaching ( £3000)</option>
                <option value="Both ( £7000)">Both ( £7000)</option>
              </select>
            </div>

            {errors.availability_and_commitment && (
              <p className="text-red-500 mt-1 text-xs">
                {errors.availability_and_commitment.type === "required" &&
                  "This field is required."}
              </p>
            )}
          </div>
          <div className="flex items-center px-4 mt-4 gap-4 ">
            <input type="checkbox" />
            <p className="text-black">Consent and agreement</p>
          </div>
          <button
            type="submit"
            className="bg-pink-800 text-white mt-8 px-5 md:px-10 rounded-lg ml-3 py-2 text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
