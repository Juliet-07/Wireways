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
        <div className="flex flex-col items-center justify-center bg-gray-100">
          {/* Header */}
          <div className="header">
            <Image src={Logo} width={100} height={100} />
            <Link href="/Auth/signup">
              <button
                type="button"
                className="inline-block px-4 py-2 primaryColor text-white font-medium text-xs rounded-full"
              >
                Get Started
              </button>
            </Link>
          </div>
          {/* Header Ends */}
          <div className="mb-5">
            <h2 className="font-bold text-center text-2xl">Login</h2>
            <p className="text-sm">Welcome back, sign in to your dashboard</p>
          </div>
          {/* The form */}
          <form className="w-full max-w-lg mt-10">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                  id="grid-password"
                  type="text"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-sky-500 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                  id="grid-password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="signup">
              <button
                type="button"
                className="inline-block px-4 py-2 primaryColor text-white text-xs rounded-full w-full"
              >
                Login
              </button>
            </div>
            <div>
              <a href="#" className="forgot">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
