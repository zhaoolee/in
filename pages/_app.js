import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import '../styles/global.css'
import { Router } from 'next/router';


function MyApp({ Component, pageProps }) {
  const getAnalyticsTag = () => {
    return {
      __html: `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?34564f2837e4e2fb61052ac26a09b689";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`,
    }
  }

  Router.events.on('routeChangeComplete', (url) => {
    try {
      window._hmt.push(['_trackPageview', url]);
    } catch (e) { }
  })

  return (<>
    <Head>
      <title>方圆灵感导航</title>
      <link rel="shortcut icon" href="/in/favicon.ico" />
      <script dangerouslySetInnerHTML={getAnalyticsTag()} />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp;
