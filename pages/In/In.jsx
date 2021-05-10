import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header/index.js';
import TopCarousel from '../../components/TopCarousel/index.js';
import in_module_scss from './In.module.scss';
import Link from 'next/link';
import Image from 'next/image'

function WebsiteInfo(props) {

    const set_website_info_tag = () => {
        props.set_website_info_tag(props.website_info_list_value.website_info_tag)
    }

    return (<div className={in_module_scss.website_info_atom} onClick={set_website_info_tag}>

        <div className={in_module_scss.td_website_info}>

            {props.select === true && <div className={in_module_scss.website_info_hover}>
                <div className={in_module_scss.website_info_text} dangerouslySetInnerHTML={{ __html: props.website_info_list_value.website_info_name }}></div>
            </div>}

            {props.select === false && <div className={in_module_scss.website_info}>
                <div className={in_module_scss.website_info_text} dangerouslySetInnerHTML={{ __html: props.website_info_list_value.website_info_name }}></div>
            </div>}

        </div>


    </div>)
}

function In(props) {


    const [website_info_tag, set_website_info_tag] = useState("all");
    return (
        <div className={in_module_scss.in}>
            <Header title_key={"index"} />

            <div className={in_module_scss.in_body}>



                <TopCarousel />
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
                            <a  target="_blank" className={in_module_scss.website_info_list_atom_container_a}>
                                <div className={in_module_scss.website_info_list_atom}>
                                    <div className={in_module_scss.website_info_list_atom_icon}>
                                        {website_info_list_value.website_icon.length > 0 && <Image

                                            src={website_info_list_value.website_icon}
                                            alt={website_info_list_value.website_name}
                                            width={50}
                                            height={50}
                                        />}
                                    </div>
                                    <div>
                                        <div className={in_module_scss.website_info_list_atom_title}>
                                            {website_info_list_value.website_name}
                                        </div>
                                    </div>
                                    <div className={in_module_scss.website_info_list_atom_description}>
                                        {website_info_list_value.website_description}
                                    </div>

                                    {website_info_list_value.website_keywords && <div className={in_module_scss.website_keywords}>
                                        {website_info_list_value.website_keywords.map((value) => {
                                            return <span key={value}>#{value}&nbsp;&nbsp;</span>
                                        })}
                                    </div>}

                                    {website_info_list_value.website_more.length > 0 && <div className={in_module_scss.website_more_a}>

                                        <Link href={website_info_list_value.website_more}>
                                            <a  target="_blank">使用说明书</a>
                                        </Link>
                                    </div>}
                                </div>
                            </a>
                        </Link>)
                    })}
                </div>
            </div>


        </div>
    )
}


In.getInitialProps = async (ctx) => {

    const all_website_info_list = [
        {
            website_info_name: "展示<br/>全部",
            website_info_tag: "all",
            website_info_list: [
            ]
        },
        {
            website_info_name: "字体<br/>研究社",
            website_info_tag: "font_research_society",
            website_info_list: [
                {
                    website_name: "字魂网",
                    website_href: "https://izihun.com/",
                    website_description: "字体下载_免费字体下载_商用字体设计定制--字魂网",
                    website_icon: "/in/zihunwang_icon.png",
                    website_more: ""
                },
                {
                    website_name: "求字体网",
                    website_href: "https://www.qiuziti.com/",
                    website_description: "字体下载-求字体网提供中文和英文字体库下载、识别与预览服务，找字体的好帮手",
                    website_icon: "/in/qiuziti_icon.png",
                    website_more: ""
                },
                {
                    website_name: "字体之家",
                    website_href: "https://www.homefont.cn/",
                    website_description: "包含17400多种有效字体下载,频道分类220个。用户覆盖各国,字体下载自带预览,查找方便,国内老牌字体下载站之一。",
                    website_icon: "/in/zitizhijia_icon.png",
                    website_more: ""
                },
                {
                    website_name: "松鼠字体",
                    website_href: "https://www.fontsquirrel.com/",
                    website_description: "松鼠字体（Font Squirrel）搜寻互联网上高质量的合法免费字体。下载数千种完全合法，高质量的免费字体。",
                    website_icon: "/in/zitisongshu_icon.png",
                    website_more: ""
                },
                {
                    website_name: "字由",
                    website_href: "https://www.hellofont.cn/",
                    website_description: "字由是为设计师量身定做的一款字体下载管理工具。这里收集了国内外上千款精选字体，不仅让你轻松、自由和高效的使用字体，还为你展示了每款字体的详细信息和精选的字体文章。字由将成为你设计中的好帮手，让你领略字体在设计中的更多精彩。",
                    website_icon: "/in/ziyou_icon.png",
                    website_more: ""
                },
                {
                    website_name: "fontfabric",
                    website_href: "https://www.hellofont.cn/",
                    website_description: "一个数字型铸造厂，为各种品牌制作零售字体和自定义字体。分享对高级字体，书法和刻字的热情。",
                    website_icon: "/in/font_fabric_icon.png",
                    website_more: ""
                },
                {
                    website_name: "100Font",
                    website_href: "https://www.100font.com/",
                    website_description: "一个专门收集“免费商用字体”的网站",
                    website_icon: "/in/100font_icon.png",
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
                    website_icon: "/in/colorhunt_icon.png",
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
                    website_icon: "/in/compress_image_icon.png",
                    website_more: ""
                }
            ]
        },
        {
            website_info_name: "资源<br/>集市",
            website_info_tag: "resource_bazaar",
            website_info_list: [
                {
                    website_name: "懒得勤快",
                    website_href: "https://masuit.com/",
                    website_description: "拥有马克丁封禁全家桶，懒得勤快，互联网分享精神，勤于发现，乐于分享",
                    website_icon: "/in/idpk_icon.png",
                    website_more: "https://www.v2fy.com/p/S001_masuit_com/"
                },{
                    website_name: "I tell you",
                    website_href: "https://msdn.itellyou.cn/",
                    website_description: "Windows系统各版本纯净镜像",
                    website_icon: "/in/itellyou_icon.png",
                    website_more: "https://www.v2fy.com/p/S002_itellyou_cn/"
                },{
                    website_name: "Windows系统一句命令激活",
                    website_href: "https://v0v.bid/",
                    website_description: "Windows系统激活",
                    website_icon: "/in/vov_bid_icon.png",
                    website_more: "https://www.v2fy.com/p/S003_v0v_bid/"
                },{
                    website_name: "抖音短视频无水印解析下载",
                    website_href: "http://tool.liumingye.cn/douyin/",
                    website_description: "通过抖音视频分享链接下载抖音原片~",
                    website_icon: "/in/liumingye_icon.png",
                    website_more: "https://www.v2fy.com/p/S004_tool_liumingye_cn/"
                },{
                    website_name: "哔哩哔哩壁纸站",
                    website_href: "https://space.bilibili.com/6823116#/album",
                    website_description: "找哔哩哔哩壁纸娘领壁纸",
                    website_icon: "/in/bilibili_icon.png",
                    website_more: "https://www.v2fy.com/p/S005_space_bilibili_album/"
                },{
                    website_name: "Pixiv福利插画!year!",
                    website_href: "https://www.pixiv.net/ranking.php?mode=male",
                    website_description: "插画P站最受男性喜欢排行榜资源",
                    website_icon: "/in/pixiv_icon.png",
                    website_more: "https://www.v2fy.com/p/S007_pixiv_net_ranking_php_mode_mal/"
                }
            ]
        },
        {
            website_info_name: "在线<br/>神器",
            website_info_tag: "online_tools_book",
            website_info_list: [{
                website_name: "开源表情包",
                website_href: "https://www.v2fy.com/asset/0i/ChineseBQB/",
                website_description: "在线查找Github开源表情包",
                website_keywords: ["斗图小王子", "表情包"],
                website_icon: "/in/chinese_bqb_icon.png",
                website_more: "https://www.v2fy.com/p/000readme-chinesebqb/"
            },{
                website_name: "在线PhotoShop",
                website_href: "https://photopea.com",
                website_description: "功能强大的网页版PhotoShop",
                website_keywords: ["在线神器", "Photoshop"],
                website_icon: "/in/photopea_icon.png",
                website_more: "https://www.v2fy.com/p/T001-photopea/"
            }, {
                website_name: "GIF到MP4转换器",
                website_href: "https://convertio.co/zh/gif-mp4/",
                website_description: "可以将100MB以内的gif图片转换为MP4",
                website_icon: "/in/convertio_icon.png",
                website_more: "https://www.v2fy.com/p/T002-gif-to-mp4/"
            }, {
                website_name: "求字体",
                website_href: "https://www.qiuziti.com/",
                website_description: "快速识别图片中的文字字体",
                website_icon: "/in/qiu_icon.png",
                website_more: "https://www.v2fy.com/p/T003-qiuziti/"
            }, {
                website_name: "Word Art",
                website_href: "https://wordart.com/create",
                website_description: "创建二维码文字云!",
                website_icon: "/in/wordart_icon.png",
                website_more: "https://www.v2fy.com/p/T004-word-art/"
            }, {
                website_name: "百度脑图",
                website_href: "https://naotu.baidu.com/",
                website_description: "好用到不像百度产品的产品",
                website_icon: "/in/naotu_baidu.png",
                website_more: "https://www.v2fy.com/p/T005-baidunaotu/"
            }, {
                website_name: "微信Markdown编辑器",
                website_href: "https://doocs.gitee.io/md/#/",
                website_description: "转化Markdown到微信特制的HTML",
                website_icon: "/in/doocs_gitee_icon.png",
                website_more: "https://www.v2fy.com/p/T006-md2wx/"
            }, {
                website_name: "Upuptoyou拍立得",
                website_href: "https://upuptoyou.com/",
                website_description: "举牌小人在此为您服务",
                website_icon: "/in/upuptoyou_icon.png",
                website_more: "https://www.v2fy.com/p/T007-upuptoyou/"
            }, {
                website_name: "诺基亚短信图片生成器",
                website_href: "https://www.noddl.me/",
                website_description: "有内鬼，终止交易！",
                website_icon: "/in/noddl_icon.png",
                website_more: "https://www.v2fy.com/p/T008-noddl/"
            }, {
                website_name: "智能简笔画",
                website_href: "https://www.autodraw.com/",
                website_description: "实力画渣, 在线画鱼",
                website_icon: "/in/autodraw_icon.png",
                website_more: "https://www.v2fy.com/p/T010-autodraw/"
            }, {
                website_name: "Artbreeder",
                website_href: "https://artbreeder.com/",
                website_description: "艺术投食者,机器学习合成艺术图片,在线融合人物面部",
                website_icon: "/in/artbreeder_icon.png",
                website_more: "https://www.v2fy.com/p/T011-artbreeder/"
            }, {
                website_name: "截图拼接工具",
                website_href: "https://join-screenshots.zhanghai.me/",
                website_description: "在线电影字幕拼接",
                website_icon: "/in/screenshots_icon.png",
                website_more: "https://www.v2fy.com/p/T013-join-screenshots/"
            }, {
                website_name: "俄罗斯方块",
                website_href: "https://chvin.github.io/react-tetris/?lan=zh-cn",
                website_description: "开源俄罗斯方块小游戏",
                website_icon: "/in/react_tetris_icon.png",
                website_more: "https://www.v2fy.com/p/T014-tetris/"
            }, {
                website_name: "这是什么番?",
                website_href: "https://trace.moe/",
                website_description: "根据截图查找番剧来源",
                website_icon: "/in/trace_icon.png",
                website_more: "https://www.v2fy.com/p/T015-trace-moe/"
            }, {
                website_name: "拷贝兔",
                website_href: "https://cp.anyknew.com/",
                website_description: "一款在线传输文件或文字的工具",
                website_icon: "/in/anyknew_icon.png",
                website_more: "https://www.v2fy.com/p/T016-copy-tool/"
            }, {
                website_name: "MyFreeMP3",
                website_href: "http://tool.liumingye.cn/music/?page=searchPage",
                website_description: "在线下载QQ音乐，网易云音乐所有VIP歌曲",
                website_icon: "/in/tool_liumingye_icon.png",
                website_more: "https://www.v2fy.com/p/T017-liumingye_download_music/"
            }, {
                website_name: "蓝奏云",
                website_href: "https://lanzou.com/",
                website_description: "无需登录即可下载的无限速网盘",
                website_icon: "/in/lanzou_icon.png",
                website_more: "https://www.v2fy.com/p/T018-lanzou/"
            }, {
                website_name: "船长解析",
                website_href: "http://czjx8.com/",
                website_description: "vip视频在线解析,免费在线查看爱奇艺，腾讯，优酷，芒果，bilibili vip视频",
                website_icon: "/in/czjx8_icon.png",
                website_more: "https://www.v2fy.com/p/T019-vip-movie/"
            }, {
                website_name: "I Love Img",
                website_href: "https://www.iloveimg.com/zh-cn/compress-image",
                website_description: "在线批量无损压缩gif png jpg图片",
                website_icon: "/in/compress_image_icon.png",
                website_more: "https://www.v2fy.com/p/T020-iloveimg/"
            }, {
                website_name: "Base64在线加密解密",
                website_href: "https://www.base64encode.org/",
                website_description: "解密技术论坛中的神秘邮箱",
                website_icon: "/in/base64encode_icon.png",
                website_more: "https://www.v2fy.com/p/T021-b64/"
            }, {
                website_name: "谷歌免费OCR",
                website_href: "https://docs.google.com/document/",
                website_description: "谷歌免费OCR在线中英文识别",
                website_icon: "/in/docs_google_icon.png",
                website_more: "https://www.v2fy.com/p/T022-ocr/"
            }, {
                website_name: "Savefrom",
                website_href: "https://zh.savefrom.net/",
                website_description: "下载YouTube视频",
                website_icon: "/in/zh_savefrom_icon.png",
                website_more: "https://www.v2fy.com/p/T023-netfrom/"
            }, {
                website_name: "简洁艺术二维码生成",
                website_href: "http://qrbtf.com/",
                website_description: "参数化二维码生成器",
                website_icon: "/in/qrbtf_icon.png",
                website_more: "https://www.v2fy.com/p/T024-qrbtf/"
            }, {
                website_name: "Bitly",
                website_href: "https://bitly.com/",
                website_description: "可能是全球最好用的短链接生成工具",
                website_icon: "/in/bitly_icon.png",
                website_more: "https://www.v2fy.com/p/T025-bitly/"
            }, {
                website_name: "Bigjpg",
                website_href: "https://bigjpg.com/",
                website_description: "AI人工智能图片无损放大",
                website_icon: "/in/bigjpg_icon.png",
                website_more: "https://www.v2fy.com/p/T026-bigjpg/"
            }, {
                website_name: "彩虹屁生成器",
                website_href: "https://chp.shadiao.app/",
                website_description: "快夸夸我!彩虹屁生成器",
                website_icon: "/in/chp_icon.png",
                website_more: "https://www.v2fy.com/p/T027-chp/"
            }, {
                website_name: "蔡徐坤打篮球",
                website_href: "https://cxk.ssrr.one/",
                website_description: "蔡徐坤!出来打球!",
                website_icon: "/in/cxk_icon.png",
                website_more: "https://www.v2fy.com/p/T028-cxk/"
            }, {
                website_name: "云网盘之家",
                website_href: "https://wowenda.com/",
                website_description: "搜索百度网盘的小姐姐",
                website_icon: "/in/wowenda_icon.png",
                website_more: "https://www.v2fy.com/p/T028-cxk/"
            }, {
                website_name: "图壳",
                website_href: "https://imgkr.com/",
                website_description: "免费超好用的图床，图片最稳定的家",
                website_icon: "/in/imgkr_icon.png",
                website_more: "https://www.v2fy.com/p/T030-imgkr/"
            }, {
                website_name: "中国传统颜色在线手册",
                website_href: "https://colors.ichuantong.cn/",
                website_description: "中国古代如何命名颜色",
                website_icon: "/in/ichuantong_icon.png",
                website_more: "https://www.v2fy.com/p/T031-colors-ichuantong/"
            }, {
                website_name: "webp2jpg",
                website_href: "https://renzhezhilu.gitee.io/webp2jpg-online/",
                website_description: "让图片尺寸薄如蝉翼",
                website_icon: "/in/renzhezhilu_icon.png",
                website_more: "https://www.v2fy.com/p/T032-webp2jog/"
            }, {
                website_name: "最优图像优化",
                website_href: "https://zh.recompressor.com/",
                website_description: "文件尺寸和质量之间选择完美平衡，适合摄影师使用的图片压缩工具",
                website_icon: "/in/zh_recompressor_icon.png",
                website_more: "https://www.v2fy.com/p/T033-recompressor/"
            }, {
                website_name: "九格切图",
                website_href: "https://www.ygktool.cn/app/img_split",
                website_description: "在线制作微信朋友圈九宫格切图",
                website_icon: "/in/ygktool_icon.png",
                website_more: "https://www.v2fy.com/p/T034-9-img-split/"
            }, {
                website_name: "MdNice",
                website_href: "http://editor.mdnice.com",
                website_description: "偷懒完成微信公众号，哔哩哔哩，知乎，掘金发文排版,让Markdown排版更nice！",
                website_icon: "/in/mdnice_icon.png",
                website_more: "https://www.v2fy.com/p/T035-mdnice-2020-09-27/"
            }, {
                website_name: "个性化装饰头像合成",
                website_href: "https://www.iloveimg.com/zh-cn/photo-editor",
                website_description: "无需小程序，无需注册登录，手机网页完成超清头像合成",
                website_icon: "/in/compress_image_icon.png",
                website_more: "https://www.v2fy.com/p/T036-photo-editor-2020-09-29/"
            },{
                website_name: "小码助手",
                website_href: "https://xiaomark.com/",
                website_description: "小码助手是一款短链接生成工具，可以为相同的链接生成不同的N个短链接",
                website_icon: "/in/xiaomark_icon.png",
                website_more: "https://www.v2fy.com/p/T038-xiaomark-2020-10-12/"
            },{
                website_name: "世界时间",
                website_href: "https://24timezones.com/",
                website_description: "小现在世界各地是什么时间？",
                website_icon: "/in/24timezones_icon.png",
                website_more: "https://www.v2fy.com/p/T039-24timezones-2020-11-06/"
            },{
                website_name: "KinhDownload",
                website_href: "https://pan.kdbaidu.com/",
                website_description: "百度网盘免会员高速下载破解",
                website_icon: "/in/kinh_icon.png",
                website_more: "https://www.v2fy.com/p/T040-kdbaidu/"
            },
            {
                website_name: "SimilarSites",
                website_href: "https://www.similarsites.com/",
                website_description: "让你直呼“好人一生平安”的网站！查找类似网站",
                website_icon: "/in/similarsites_icon.png",
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
                    website_icon: "/in/fangyuanstu_icon.png",
                    website_more: ""
                },
                {
                    website_name: "V2方圆",
                    website_href: "https://v2fy.com",
                    website_description: "发掘稀缺资源",
                    website_icon: "/in/v2fy_icon.png",
                    website_more: ""
                },
                {
                    website_name: "方圆小站",
                    website_href: "https://fangyuanxiaozhan.com",
                    website_description: "zhaoolee不聊技术的杂谈站",
                    website_icon: "/in/fangyuanxiaozhan_icon.png",
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
                    website_icon: "/in/chromeappheroes_icon.png",
                    website_more: ""
                },
                {
                    website_name: "中国的表情包",
                    website_href: "https://github.com/zhaoolee/ChineseBQB",
                    website_description: "🇨🇳 表情包的博物馆, Github最有毒的仓库, 中国表情包大集合, 聚欢乐~",
                    website_icon: "/in/chinese_bqb_icon.png",
                    website_more: ""
                },
                {
                    website_name: "在线工具秘籍",
                    website_href: "https://github.com/zhaoolee/OnlineToolsBook",
                    website_description: "🍭在线工具秘籍,为在线工具写一本优质说明书,让在线工具造福人类~",
                    website_icon: "/in/onlinetoolsbook_icon.png",
                    website_more: ""
                }, {
                    website_name: "嘎!RSS",
                    website_href: "https://github.com/zhaoolee/garss",
                    website_description: "Github Actions采集RSS, 打造无广告内容优质的头版头条超赞宝藏页",
                    website_icon: "/in/garss_icon.png",
                    website_more: ""
                }
            ]
        },
        {
            website_info_name: "游戏<br/>相关",
            website_info_tag: "game_info",
            website_info_list: [
                {
                    website_name: "Crazy Game",
                    website_href: "https://www.crazygames.com/",
                    website_description: "一个更高级的4399",
                    website_icon: "/in/crazygames_icon.png",
                    website_more: ""
                }, {
                    website_name: "网页小霸王合集",
                    website_href: "https://www.yikm.net/",
                    website_description: "小霸王其乐无穷",
                    website_icon: "/in/yikm_icon.png",
                    website_more: ""
                }, {
                    website_name: "在线DOS游戏",
                    website_href: "https://dos.zczc.cz/",
                    website_description: "可以在线玩各种DOS游戏，也支持下载",
                    website_icon: "/in/zczc_icon.png",
                    website_more: ""
                },
            ]
        },{
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
        }
    ];


    let website_info_tag_and_list_obj = {};



    all_website_info_list.map((website_info_value) => {
        website_info_tag_and_list_obj[website_info_value["website_info_tag"]] = website_info_value["website_info_list"]
        // 添加到查看全部all
        website_info_value["website_info_list"].map((value) => {
            website_info_tag_and_list_obj["all"].push(value)
        })

    })











    return {

        all_website_info_list,
        website_info_tag_and_list_obj


    }


}



export default In;