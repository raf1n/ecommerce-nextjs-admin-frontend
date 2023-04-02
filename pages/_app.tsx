import React, { useState } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import { controller, store } from "../src/state/StateController";
import Layout from "../components/Layout/Layout";
import { SocialLogin } from "./../components/helpers/SocialLogin";
import { Toaster } from "react-hot-toast";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  //   const states = useSelector(() => controller.states);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
    SocialLogin.initFirebase();
  }, []);

  return (
    <Provider store={store}>
      <React.Fragment>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    </Provider>
  );
}
