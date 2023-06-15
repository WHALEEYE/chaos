import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Languages} from "../lib/enums";
import React from "react";

function MyApp({Component, pageProps}: AppProps) {

    const [curLan, setCurLan] = React.useState(Languages.ENG);

    return <Component {...pageProps} curLan={curLan} setCurLan={setCurLan}/>
}

export default MyApp
