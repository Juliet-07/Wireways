import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import styles from "../styles/Home.module.css";
const Splashscreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Image src={Logo} width={400} height={400} />
      </div>
    </div>
  );
};
export default Splashscreen;
