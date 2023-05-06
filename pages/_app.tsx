import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import { controller, store } from "../src/state/StateController";
import Layout from "../components/Layout/Layout";
import { SocialLogin } from "./../components/helpers/SocialLogin";
import { Toaster } from "react-hot-toast";
import SharedLoadingModal from "../components/shared/SharedLoadingModal/SharedLoadingModal";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const [isMounted, setMounted] = useState(false);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
    SocialLogin.initFirebase();
  }, []);

  useEffect(() => {
    if (isMounted) {
      // console.log("hash", window.location.hash);
    } else {
      setMounted(true);
    }
  }, [isMounted]);

  if (!isMounted)
    return (
      <Provider store={store}>
        <SharedLoadingModal />{" "}
      </Provider>
    );

  return (
    <Provider store={store}>
      <React.Fragment>
        <Layout>
          <Toaster />
          <NextNProgress
            color="#1d4ed8"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
            showOnShallow={true}
            options={{ showSpinner: false }}
          />
          <SharedLoadingModal />
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    </Provider>
  );
}
