import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../../components/Header/index.js';

function In({ Component, pageProps }) {
    return (
        <div className="in">
            <Header/>
            <div>Index首页内容</div>

        </div>


    )
}

export default In;
