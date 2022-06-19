import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import styles from "../../styles/Home.module.css";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Wireways</title>
        <link rel="icon" href="/wireways.png" />
      </Head>
      <div className={styles.container}>
        <div className="h-screen flex flex-col items-center justify-center">
          {/* Header */}
          <div className="header">
            <Image src={Logo} width={200} height={200} />
            <Link href="/Auth/signin">
              <button
                type="button"
                className="inline-block px-5 py-2 primaryColor text-white font-medium text-xs rounded-full"
              >
                Sign in
              </button>
            </Link>
          </div>
          {/* Header Ends */}
          <div className="mb-5">
            <h2 className="font-bold text-center text-3xl">Get Started</h2>
            <p className="text-xm">Create account for your business already</p>
          </div>
          {/* The form */}
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-4 mt-5">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 focus:outline-none focus:bg-white focus:border-sky-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4 mt-5">
              <div className="w-full px-3">
                <input
                  className="block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="grid-password"
                  type="text"
                  placeholder="Business Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4 mt-4">
              <div className="w-full px-3">
                <input
                  className="block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="grid-password"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <input
                  class="block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 focus:outline-none focus:bg-white focus:border-sky-500"
                  id="grid-password"
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <input
                  className="block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 focus:outline-none focus:bg-white focus:border-sky-500"
                  id="grid-password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            {/* SELECTION */}
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <select
                  className="form-select form-select-sm block w-full bg-white bg-no-repeat text-gray-700 border border-sky-500 rounded-full py-2 px-4
                  transition ease-in-out m-0 focus:outline-none focus:bg-white focus:border-sky-500"
                  id="grid-first-name"
                  aria-label="form-select-sm example"
                  placeholder="Type of Business"
                >
                  <option selected>Type of Business</option>
                  <option value="1">Registered Business</option>
                  <option value="2">Starter Business</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <select
                  className="form-select form-select-sm block w-full bg-white bg-no-repeat text-gray-700 border border-sky-500 rounded-full py-2 px-4
                  transition ease-in-out m-0 focus:outline-none focus:bg-white focus:border-sky-500"
                  id="grid-first-name"
                  aria-label="form-select-sm example"
                  placeholder="Business Category"
                >
                  <option selected>Business Category</option>
                  <option value="1"> Education Technology</option>
                  <option value="2">Information Technology</option>
                  <option value="3">Logistics</option>
                </select>
              </div>
            </div>
            <div className="flex -mx-3 mb-2 mt-6">
              <div className="w-full px-3">
                <input
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-sky-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault"
                >
                  I agree to the terms of service stated
                </label>
                <a href="#" className="terms">
                  here
                </a>
              </div>
            </div>
            <div className="signup">
              <button
                type="button"
                className="inline-block px-4 py-2 primaryColor text-white font-medium text-xs rounded-full w-full"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
