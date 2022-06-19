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
        <div className="flex flex-col items-center justify-center">
          {/* Header */}
          <div className="header">
            <Image src={Logo} width={200} height={200} />
            <Link href="/Auth/signup">
              <button
                type="button"
                className="inline-block px-4 py-3 primaryColor text-white font-medium text-xs rounded-full"
              >
                Get Started
              </button>
            </Link>
          </div>
          {/* Header Ends */}
          <div className="mb-5">
            <h2 className="font-bold text-center text-3xl">Login</h2>
            <p className="text-xm">Welcome back, sign in to your dashboard</p>
          </div>
          {/* The form */}
          <section className="h-screen">
            <div className="container px-6 py-12 h-100 bg-white mt-5">
              {/* <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> */}
              {/* <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    class="w-full"
                    alt="Phone image"
                  />
                </div> */}
              <div className="w-full max-w-lg">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white border border-solid border-blue-300 rounded-full focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email address"
                    />
                  </div>

                  <div class="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white border border-solid border-blue-300 rounded-full focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-block px-4 py-2 mt-5 text-white primaryColor hover:bg-blue-700 w-full rounded-full"
                  >
                    Login
                  </button>
                  <div class="flex mt-6">
                    {/* <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck3"
                        checked
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div> */}
                    <a
                      href="#!"
                      class="text-blue-600 hover:text-blue-700 active:text-blue-800 mt-5"
                    >
                      Forgot password?
                    </a>
                  </div>
                </form>
              </div>
              {/* </div> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Signup;
