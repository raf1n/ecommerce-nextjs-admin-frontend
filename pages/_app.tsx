import React, { useState } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import { controller, store } from "../src/state/StateController";
import Sidebar from "../components/pages/AdminPage/Sidebar/Sidebar";
import { HiOutlineUser } from "react-icons/hi";
import { FaBars, FaHome, FaSignOutAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import styles from "../components/pages/AdminPage/Dashboard/Dashboard.module.css";
import Layout from "../components/Layout/Layout";

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    </Provider>
  );
}
