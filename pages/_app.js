import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
