import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header/index.js';

function About({ Component, pageProps }) {
    return (<div className="about">
        <Header />
        <span>About关于内容</span>
    </div>)
}

export default About;
