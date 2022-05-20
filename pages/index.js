import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";
const Splashscreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Link href={"/Auth/signup"}>
          <Image src={Logo} width={400} height={400} />
        </Link>
        <Loader />
      </div>
    </div>
  );
};
export default Splashscreen;
