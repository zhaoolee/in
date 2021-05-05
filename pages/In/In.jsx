import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header/index.js';
import in_module_scss from './In.module.scss';
import Link from 'next/link';

function In(props) {
    return (
        <div className="in">
            <Header />
            <div>Index-首页内容</div>


            {props.all_website_info_list.map((website_info_list_value, website_info_list_index) => {
                return   (
                    <div key={website_info_list_value.website_info_name}>
                        <div>{website_info_list_value.website_info_name}</div>
                        <div className={in_module_scss.website_con}>
                            {website_info_list_value.website_info_list.map((website_info_value, website_info_index)=>{
                                return (<Link  key={website_info_value.website_name} href={website_info_value.website_href}>
                                    <a>
                                        <div className={in_module_scss.web_atom}>{website_info_value.website_name}</div>
                                    </a>
                                </Link>)

                            })}

                        </div>

                    </div>
                
                )
            })}
            
        </div>
    )
}


In.getInitialProps = async (ctx) => {

    return {

        all_website_info_list: [
            {
                website_info_name: "设计",
                website_info_list: [
                    {
                        website_name: "方圆STU",
                        website_href: "https://fangyuanstu.com",
                        website_description: "天是方的，地是圆的",
                        webiste_icon: "",
                        website_more: ""
                    }, {
                        website_name: "在线PhotoShop",
                        website_href: "https://photopea.com",
                        website_description: "在线PhotoSho",
                        webiste_icon: "",
                        website_more: ""
                    }, {
                        website_name: "在线压缩图片",
                        website_href: "https://www.iloveimg.com/zh-cn/compress-image",
                        website_description: "压缩 JPG, PNG 或 GIF时保持最佳文件质量和压缩程度。一次缩小多个图片文件的尺寸。",
                        webiste_icon: "",
                        website_more: ""
                    }
                ]
            },
            {
                website_info_name: "编程开发",
                website_info_list: [
                    {
                        website_name: "在线拟态",
                        website_href: "https://neumorphism.io/",
                        website_description: "天是方的，地是圆的",
                        webiste_icon: "",
                        website_more: ""
                    }
                ]
            }
        ]
    }


}



export default In;