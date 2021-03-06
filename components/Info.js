import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Info = ({ url, name, age, nationality, slug }) => {
  return (
    <>
      <Link href={`/about/${slug}`}>
        <div className="md:max-w-sm  group rounded-lg mt-2  shadow-md dark:bg-gray-800">
          <Image
            alt={name}
            src={
              url
                ? url
                : "https://cdni.pornpics.com/460/7/552/82264078/82264078_004_40c7.jpg"
            }
            layout="responsive"
            width={530}
            height={600}
            objectFit="cover"
            className="rounded-t-sm md:group-hover:rounded-t-sm cursor-pointer md:group-hover:scale-110 transition-all duration-100 ease-in dark:bg-gray-800/20 "
          />

          <h5 className="px-2 py-1 md:group-hover:text-blue-500 md:mb-2 text-lg md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name},{age}
          </h5>

          <div className="flex p-2 items-center full justify-between">
            <p className="md:mb-3  font-normal text-gray-700 dark:text-gray-400">
              {nationality}
            </p>
            <a
              href="#"
              className=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 md:hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 md:dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full"
            >
              get more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Info;
