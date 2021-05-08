import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header/index.js';
import contactscss from './Contact.module.scss';
import Image from 'next/image'

function Contact({ Component, pageProps }) {
    return(
    <div className={contactscss.contact}>
        <Header title_key={"contact"}/>
        <div className={contactscss.linggan_panda}>
        <Image
                    src={"/in/linggan_panda.png"}
                    alt={"灵感熊猫"}
                    width={1364}
                    height={928}
                />


        </div>
    </div>)
}

export default Contact;
