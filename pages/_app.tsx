import React, { useState } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import { controller, store } from "../src/state/StateController";
import Layout from "../components/Layout/Layout";
import LayoutForSeller from "../components/Layout/LayoutForSeller";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  //   const states = useSelector(() => controller.states);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <React.Fragment>
        {/* <LayoutForSeller>
          <Component {...pageProps} />
        </LayoutForSeller> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    </Provider>
  );
}
