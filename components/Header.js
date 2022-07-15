import React from "react";

const Header = () => {
  return (
    <div className="mb-2 py-2 md:justify-center md:max-w-6xl overflow-hidden mx-auto md:h-96 flex-col group md:flex-row-reverse md:flex md:items-center  justify-between rounded shadow-2xl shadow-gray-600/25">
      <div className=" text-left capitalize  h-64 md:h-auto  text-white  flex flex-col md:items-center justify-center md:justify-start  w-full rounded-md  group  space-y-2 md:p-2  ">
        <div className=" md:space-y-2 text-center md:text-left">
          <h1 className="text-center md:text-left text-transparent  bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 text-2xl md:text-3xl font-bold  transition-colors duration-100 ease-in">
            Get pornstar&apos;s info⚡
          </h1>
          <p className=" md:text-xl ">
            From the world means from
            <span className=" p-2 md:pt-4 underline inline-block">
              {" "}
              everywhere
            </span>{" "}
            <br />
            <p className="font-serif  text-2xl mt-3 inline-block text-sky-500 md:text-6xl font-semibold  py-1 ">
              M <span>(●&apos;◡&apos;●)</span>{" "}
            </p>
          </p>
        </div>
      </div>
      <div className="hidden md:block w-full rounded-md overflow-auto object-cover">
        <img
          src="img/main.jpg"
          alt=""
          className="w-full bg-slate-100  h-full object-contain mt-96"
        />
      </div>
    </div>
  );
};

export default Header;
