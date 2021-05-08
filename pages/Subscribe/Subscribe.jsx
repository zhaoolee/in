import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header/index.js';
import subscribe_module_scss from './Subscribe.module.scss';
import Image from 'next/image'

function Subscribe({ Component, pageProps }) {
    return (<div className="subscribe">
        <Header title_key={"subscribe"}/>

        <div className={subscribe_module_scss.content}>
            订阅页面开发中...
        </div>
    </div>)
}

export default Subscribe;
