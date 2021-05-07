import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header/index.js';
import in_module_scss from './In.module.scss';
import Link from 'next/link';


function WebsiteInfo(props) {

    const set_website_info_tag = () => {
        props.set_website_info_tag(props.website_info_list_value.website_info_tag)
    }

    return (<div className={in_module_scss.website_info_container} onClick={set_website_info_tag}>
        <table>
            <tbody>
                <tr>
                    <td>
                        <div style={{ width: 30, height: 30 }}></div>
                    </td>
                    <td>
                        <div className={in_module_scss.td_website_info}>

                        {props.select === true && <div className={in_module_scss.website_info_hover}>
                            <div className={in_module_scss.website_info_text} dangerouslySetInnerHTML={{ __html: props.website_info_list_value.website_info_name }}></div>
                        </div>}

                        {props.select === false && <div className={in_module_scss.website_info}>
                            <div className={in_module_scss.website_info_text} dangerouslySetInnerHTML={{ __html: props.website_info_list_value.website_info_name }}></div>
                        </div>}

                        </div>


                    </td>
                </tr>
            </tbody>
        </table>
    </div>)
}

function In(props) {


    const [website_info_tag, set_website_info_tag] = useState("font_research_society");
    return (
        <div className="in">
            <Header title_key={"index"} />
            <div className={in_module_scss.website_info_container}>
                {props.all_website_info_list.map((website_info_list_value, website_info_list_index) => {
                    return (
                        (website_info_tag === website_info_list_value.website_info_tag) ? <WebsiteInfo
                            key={website_info_list_value.website_info_name}
                            set_website_info_tag={set_website_info_tag}
                            website_info_list_value={website_info_list_value}
                            select={true}
                        /> : <WebsiteInfo
                            key={website_info_list_value.website_info_name}
                            set_website_info_tag={set_website_info_tag}
                            website_info_list_value={website_info_list_value}
                            select={false}
                        />)
                })}
            </div>

            <div className={in_module_scss.website_info_list_atom_container}>
                {props.website_info_tag_and_list_obj[website_info_tag].map((website_info_list_value) => {
                    return (<Link key={website_info_list_value.website_name} href={website_info_list_value.website_href}>
                        <a className={in_module_scss.website_info_list_atom_container_a}>
                            <div className={in_module_scss.website_info_list_atom}>
                                <div className={in_module_scss.website_info_list_atom_title}>
                                    {website_info_list_value.website_name}
                                </div>
                                <div className={in_module_scss.website_info_list_atom_description}>
                                    {website_info_list_value.website_description}
                                </div>
                            </div>
                        </a>
                    </Link>)
                })}
            </div>



        </div>
    )
}


In.getInitialProps = async (ctx) => {

    const all_website_info_list = [
        {
            website_info_name: "字体<br/>研究社",
            website_info_tag: "font_research_society",
            website_info_list: [
                {
                    website_name: "100Font",
                    website_href: "https://www.100font.com/",
                    website_description: "一个专门收集“免费商用字体”的网站",
                    webiste_icon: "",
                    website_more: ""
                }
            ]
        },
        {
            website_info_name: "色彩<br/>实验室",
            website_info_tag: "color_lab",
            website_info_list: [
                {
                    website_name: "色彩猎人",
                    website_href: "https://colorhunt.co/",
                    website_description: "提供现成的优质配色示例",
                    webiste_icon: "",
                    website_more: ""
                }
            ]
        },
        {
            website_info_name: "图片<br/>工厂",
            website_info_tag: "picture_factory",
            website_info_list: [
                {
                    website_name: "在线压缩图片",
                    website_href: "https://www.iloveimg.com/zh-cn/compress-image",
                    website_description: "压缩 JPG, PNG 或 GIF时保持最佳文件质量和压缩程度。一次缩小多个图片文件的尺寸。",
                    webiste_icon: "",
                    website_more: ""
                }
            ]
        },
        {
            website_info_name: "资源<br/>集市",
            website_info_tag: "resource_bazaar",
            website_info_list: [
                {
                    website_name: "在线拟态",
                    website_href: "https://neumorphism.io/",
                    website_description: "天是方的，地是圆的",
                    webiste_icon: "",
                    website_more: ""
                }
            ]
        },
        {
            website_info_name: "在线<br/>神器",
            website_info_tag: "online_tools_book",
            website_info_list: [{
                website_name: "在线PhotoShop",
                website_href: "https://photopea.com",
                website_description: "在线PhotoSho",
                webiste_icon: "",
                website_more: ""
            }, {
                website_name: "在线拟态",
                website_href: "https://neumorphism.io/",
                website_description: "在线生成拟态风格的CSS",
                webiste_icon: "",
                website_more: ""
            }
            ]
        },
        {
            website_info_name: "方圆<br/>栏目",
            website_info_tag: "fangyuan_column",
            website_info_list: [
                {
                    website_name: "方圆STU",
                    website_href: "https://fangyuanstu.com",
                    website_description: "天是方的，地是圆的",
                    webiste_icon: "",
                    website_more: ""
                },
                {
                    website_name: "V2方圆",
                    website_href: "https://v2fy.com",
                    website_description: "发掘稀缺资源",
                    webiste_icon: "",
                    website_more: ""
                }, 
                {
                    website_name: "方圆小站",
                    website_href: "https://fangyuanxiaozhan.com",
                    website_description: "zhaoolee不聊技术的杂谈站",
                    webiste_icon: "",
                    website_more: ""
                }
            ]
        },
        {
            website_info_name: "Github<br/>开源",
            website_info_tag: "github_open_source",
            website_info_list: [
                {
                    website_name: "Chrome插件英雄榜",
                    website_href: "https://github.com/zhaoolee/ChromeAppHeroes",
                    website_description: "🌈谷粒-Chrome插件英雄榜, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类~",
                    webiste_icon: "",
                    website_more: ""
                },
                {
                    website_name: "中国的表情包",
                    website_href: "https://github.com/zhaoolee/ChineseBQB",
                    website_description: "🇨🇳 表情包的博物馆, Github最有毒的仓库, 中国表情包大集合, 聚欢乐~",
                    webiste_icon: "",
                    website_more: ""
                },
                {
                    website_name: "在线工具秘籍",
                    website_href: "https://github.com/zhaoolee/OnlineToolsBook",
                    website_description: "🍭在线工具秘籍,为在线工具写一本优质说明书,让在线工具造福人类~",
                    webiste_icon: "",
                    website_more: ""
                }, {
                    website_name: "嘎!RSS",
                    website_href: "https://github.com/zhaoolee/OnlineToolsBook",
                    website_description: "Github Actions采集RSS, 打造无广告内容优质的头版头条超赞宝藏页",
                    webiste_icon: "",
                    website_more: ""
                }
            ]
        },
        {
            website_info_name: "行业<br/>雷达",
            website_info_tag: "industry_radar",
            website_info_list: [

            ]
        },
        {
            website_info_name: "数据<br/>查询",
            website_info_tag: "data_query",
            website_info_list: [

            ]
        },
    ];


    let website_info_tag_and_list_obj = {};

    all_website_info_list.map((website_info_value) => {
        website_info_tag_and_list_obj[website_info_value["website_info_tag"]] = website_info_value["website_info_list"]
    })









    return {

        all_website_info_list,
        website_info_tag_and_list_obj


    }


}



export default In;