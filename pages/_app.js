import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>方圆灵感导航</title>
      <link rel="shortcut icon" href="/in/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp;
