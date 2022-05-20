import React from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "../../assets/logo.png";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Wireways</title>
        <link rel="icon" href="/wireways.png" />
      </Head>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        {/* Header */}
        <div className="header mb-0">
          <Image src={Logo} width={200} height={200} />
          <a
            href="#"
            className="border-3 rounded-full px-5 py-2 inline-block primaryColor text-white"
          >
            Sign in
          </a>
        </div>
        {/* Header Ends */}
        <div className="mb-10">
          <h2 className="font-bold text-center text-3xl">Get Started</h2>
          <p className="text-2xl">Create account for your business already</p>
        </div>
        {/* The form */}
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                id="grid-first-name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <input
                class="appearance-none block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                id="grid-password"
                type="text"
                placeholder="Business Name"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <input
                class="appearance-none block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                id="grid-password"
                type="email"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signup;
