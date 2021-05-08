import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header/index.js';
import about_module_scss from './About.module.scss';

function About({ Component, pageProps }) {
    return (<div className="about">
        <Header title_key={"about"}/>

        <div className={about_module_scss.content}>
            <div className={about_module_scss.about_title}>About</div>
            <div className={about_module_scss.desc_container}>

                <div className={about_module_scss.desc_container_fangyuan_red}>
                    

                </div>

                <div className={about_module_scss.desc}>
                    <p>天方，地圆，共生；</p>
                    <p>方圆有度，开物不止；</p>
                    <p>方外有圆，圆中有方，方圆相济。</p>
                </div>
                <div className={about_module_scss.desc}>
                    <p>壹里，壹生万物；</p>
                    <p>方圆，基础的图形元素；</p>
                    <p>联合，组合，拆分，相交，剪除，演绎；</p>
                    <p>方生圆，圆生方，方圆生万物。</p>
                </div>
                <div className={about_module_scss.desc}>
                    <p>贰里，贰生方圆；</p>
                    <p>叁里，叁生万象。</p>
                </div>
                <div className={about_module_scss.desc}>
                    <p>人们常说，天圆地方，</p>
                    <p>而方圆（FANGYUAN STUDIO）主张，</p>
                    <p>天是方的，地是圆的。</p>

                </div>



            </div>

        </div>
    </div>)
}

export default About;
