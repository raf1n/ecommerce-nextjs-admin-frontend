import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Provider } from "react-redux";
import { store } from '../src/state/StateController';


export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <Provider store={store}>
            <React.Fragment>
                <Component {...pageProps} />
            </React.Fragment>
        </Provider>
    );
}

