import React, { useEffect } from "react";
import "../styles/globals.css";
import "../styles/loader.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const spinner = document.getElementById("globalLoader");
      if (spinner) spinner.style.display = "none";
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
