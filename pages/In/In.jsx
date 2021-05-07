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
                website_description: "功能强大的网页版PhotoShop",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T001-photopea/"
            }, {
                website_name: "GIF到MP4转换器",
                website_href: "https://convertio.co/zh/gif-mp4/",
                website_description: "可以将100MB以内的gif图片转换为MP4",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T002-gif-to-mp4/"
            }, {
                website_name: "求字体",
                website_href: "https://www.qiuziti.com/",
                website_description: "快速识别图片中的文字字体",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T003-qiuziti/"
            }, {
                website_name: "Word Art",
                website_href: "https://wordart.com/create",
                website_description: "创建二维码文字云!",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T004-word-art/"
            }, {
                website_name: "百度脑图",
                website_href: "https://naotu.baidu.com/",
                website_description: "好用到不像百度产品的产品",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T005-baidunaotu/"
            }, {
                website_name: "微信Markdown编辑器",
                website_href: "https://doocs.gitee.io/md/#/",
                website_description: "转化Markdown到微信特制的HTML",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T006-md2wx/"
            }, {
                website_name: "Upuptoyou拍立得",
                website_href: "https://upuptoyou.com/",
                website_description: "举牌小人在此为您服务",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T007-upuptoyou/"
            }, {
                website_name: "诺基亚短信图片生成器",
                website_href: "https://www.noddl.me/",
                website_description: "有内鬼，终止交易！",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T008-noddl/"
            }, {
                website_name: "Urlgot视频下载",
                website_href: "https://www.urlgot.com/",
                website_description: "全能视频在线下载工具",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T009-urlgot/"
            }, {
                website_name: "智能简笔画",
                website_href: "https://www.autodraw.com/",
                website_description: "实力画渣, 在线画鱼",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T010-autodraw/"
            }, {
                website_name: "Artbreeder",
                website_href: "https://artbreeder.com/",
                website_description: "艺术投食者,机器学习合成艺术图片,在线融合人物面部",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T011-artbreeder/"
            }, {
                website_name: "截图拼接工具",
                website_href: "https://join-screenshots.zhanghai.me/",
                website_description: "在线电影字幕拼接",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T013-join-screenshots/"
            }, {
                website_name: "俄罗斯方块",
                website_href: "https://chvin.github.io/react-tetris/?lan=zh-cn",
                website_description: "开源俄罗斯方块小游戏",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T014-tetris/"
            }, {
                website_name: "这是什么番?",
                website_href: "https://trace.moe/",
                website_description: "根据截图查找番剧来源",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T015-trace-moe/"
            }, {
                website_name: "拷贝兔",
                website_href: "https://cp.anyknew.com/",
                website_description: "一款在线传输文件或文字的工具",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T016-copy-tool/"
            }, {
                website_name: "MyFreeMP3",
                website_href: "http://tool.liumingye.cn/music/?page=searchPage",
                website_description: "在线下载QQ音乐，网易云音乐所有VIP歌曲",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T017-liumingye_download_music/"
            }, {
                website_name: "蓝奏云",
                website_href: "https://lanzou.com/",
                website_description: "无需登录即可下载的无限速网盘",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T018-lanzou/"
            }, {
                website_name: "船长解析",
                website_href: "http://czjx8.com/",
                website_description: "vip视频在线解析,免费在线查看爱奇艺，腾讯，优酷，芒果，bilibili vip视频",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T019-vip-movie/"
            }, {
                website_name: "I Love Img",
                website_href: "https://www.iloveimg.com/zh-cn/compress-image",
                website_description: "在线批量无损压缩gif png jpg图片",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T020-iloveimg/"
            },{
                website_name: "Base64在线加密解密",
                website_href: "https://www.base64encode.org/",
                website_description: "解密技术论坛中的神秘邮箱",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T021-b64/"
            }, {
                website_name: "谷歌免费OCR",
                website_href: "https://docs.google.com/document/",
                website_description: "谷歌免费OCR在线中英文识别",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T022-ocr/"
            },{
                website_name: "Savefrom",
                website_href: "https://zh.savefrom.net/",
                website_description: "下载YouTube视频",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T023-netfrom/"
            }, {
                website_name: "简洁艺术二维码生成",
                website_href: "http://qrbtf.com/",
                website_description: "参数化二维码生成器",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T024-qrbtf/"
            },{
                website_name: "Bitly",
                website_href: "https://bitly.com/",
                website_description: "可能是全球最好用的短链接生成工具",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T025-bitly/"
            },{
                website_name: "Bigjpg",
                website_href: "https://bigjpg.com/",
                website_description: "AI人工智能图片无损放大",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T026-bigjpg/"
            },{
                website_name: "彩虹屁生成器",
                website_href: "https://chp.shadiao.app/",
                website_description: "快夸夸我!彩虹屁生成器",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T027-chp/"
            }, {
                website_name: "蔡徐坤打篮球",
                website_href: "https://cxk.ssrr.one/",
                website_description: "蔡徐坤!出来打球!",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T028-cxk/"
            }, {
                website_name: "云网盘之家",
                website_href: "https://wowenda.com/",
                website_description: "搜索百度网盘的小姐姐",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T028-cxk/"
            }, {
                website_name: "图壳",
                website_href: "https://imgkr.com/",
                website_description: "免费超好用的图床，图片最稳定的家",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T030-imgkr/"
            },{
                website_name: "中国传统颜色在线手册",
                website_href: "https://colors.ichuantong.cn/",
                website_description: "中国古代如何命名颜色",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T031-colors-ichuantong/"
            },{
                website_name: "webp2jpg",
                website_href: "https://renzhezhilu.gitee.io/webp2jpg-online/",
                website_description: "让图片尺寸薄如蝉翼",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T032-webp2jog/"
            },{
                website_name: "最优图像优化",
                website_href: "https://zh.recompressor.com/",
                website_description: "文件尺寸和质量之间选择完美平衡，适合摄影师使用的图片压缩工具",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T033-recompressor/"
            },{
                website_name: "九格切图",
                website_href: "https://www.ygktool.cn/app/img_split",
                website_description: "在线制作微信朋友圈九宫格切图",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T034-9-img-split/"
            },{
                website_name: "MdNice",
                website_href: "http://editor.mdnice.com",
                website_description: "偷懒完成微信公众号，哔哩哔哩，知乎，掘金发文排版,让Markdown排版更nice！",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T035-mdnice-2020-09-27/"
            },{
                website_name: "个性化装饰头像合成",
                website_href: "https://www.iloveimg.com/zh-cn/photo-editor",
                website_description: "无需小程序，无需注册登录，手机网页完成超清头像合成",
                webiste_icon: "",
                website_more: "https://www.v2fy.com/p/T036-photo-editor-2020-09-29/"
            },
            {
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