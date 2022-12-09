import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <div id="modal-root"></div>
    </React.Fragment>
  );
}

export default MyApp;
