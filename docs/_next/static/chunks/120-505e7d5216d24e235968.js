(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[120],{4230:function(e,t,i){"use strict";i.d(t,{Z:function(){return b}});var s=i(7294),_=(i(3935),i(1664)),o=i(4725),n=i.n(o),w=i(5675);var b=function(e){return console.log("props==>>",e),s.createElement("div",{className:n().header},s.createElement("div",{className:n().logo_container},s.createElement(_.default,{href:"/"},s.createElement("a",null,s.createElement(w.default,{src:"/in/fangyuan.png",alt:"fangyuan",width:"auto",height:40})))),s.createElement("div",{className:n().link_container},[{href:"/",title:"\u8ba2 \u9605",title_key:"feed"},{href:"/about.html",title:"\u5173 \u4e8e",title_key:"about"},{href:"/contact.html",title:"\u4f60 \u7684",title_key:"contact"}].map((t=>s.createElement("div",{className:n().a_container,key:t.href},e.title_key===t.title_key&&s.createElement(_.default,{href:t.href},s.createElement("a",{className:n().a_title_hover},t.title)),e.title_key!==t.title_key&&s.createElement(_.default,{href:t.href},s.createElement("a",{className:n().a_title},t.title))))),s.createElement("div",{className:n().fangyuan_icon},s.createElement(w.default,{src:"/in/fangyuan_icon.png",alt:"fangyuan",width:40,height:40}))))}},3120:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var s=i(7294),_=(i(3935),i(4230)),o=i(1664),n=i(8997),w=i.n(n),b=i(5675);var r=function(e){return s.createElement("div",{className:w().container},s.createElement(b.default,{src:"/in/linggan_in.png",alt:"\u65b9\u5706\u7075\u611f\u5bfc\u822a",width:1440,height:778}))},a=i(1889),c=i.n(a);function m(e){return s.createElement("div",{className:c().website_info_atom,onClick:()=>{e.set_website_info_tag(e.website_info_list_value.website_info_tag)}},s.createElement("div",{className:c().td_website_info},!0===e.select&&s.createElement("div",{className:c().website_info_hover},s.createElement("div",{className:c().website_info_text,dangerouslySetInnerHTML:{__html:e.website_info_list_value.website_info_name}})),!1===e.select&&s.createElement("div",{className:c().website_info},s.createElement("div",{className:c().website_info_text,dangerouslySetInnerHTML:{__html:e.website_info_list_value.website_info_name}}))))}function p(e){const[t,i]=(0,s.useState)("all");return s.createElement("div",{className:"in"},s.createElement(_.Z,{title_key:"index"}),s.createElement(r,null),s.createElement("div",{className:c().website_info_container},e.all_website_info_list.map(((e,_)=>t===e.website_info_tag?s.createElement(m,{key:e.website_info_name,set_website_info_tag:i,website_info_list_value:e,select:!0}):s.createElement(m,{key:e.website_info_name,set_website_info_tag:i,website_info_list_value:e,select:!1})))),s.createElement("div",{className:c().website_info_list_atom_container},e.website_info_tag_and_list_obj[t].map((e=>s.createElement(o.default,{key:e.website_name,href:e.website_href},s.createElement("a",{className:c().website_info_list_atom_container_a},s.createElement("div",{className:c().website_info_list_atom},s.createElement("div",{className:c().website_info_list_atom_icon},e.website_icon.length>0&&s.createElement(b.default,{src:e.website_icon,alt:e.website_name,width:50,height:50})),s.createElement("div",null,s.createElement("div",{className:c().website_info_list_atom_title},e.website_name)),s.createElement("div",{className:c().website_info_list_atom_description},e.website_description),e.website_keywords&&s.createElement("div",{className:c().website_keywords},e.website_keywords.map((e=>s.createElement("span",null,"#",e,"\xa0\xa0")))),e.website_more.length>0&&s.createElement("div",{className:c().website_more_a},s.createElement(o.default,{href:e.website_more},s.createElement("a",null,"\u4f7f\u7528\u8bf4\u660e\u4e66"))))))))))}p.getInitialProps=async e=>{const t=[{website_info_name:"\u5c55\u793a<br/>\u5168\u90e8",website_info_tag:"all",website_info_list:[]},{website_info_name:"\u5b57\u4f53<br/>\u7814\u7a76\u793e",website_info_tag:"font_research_society",website_info_list:[{website_name:"\u5b57\u9b42\u7f51",website_href:"https://izihun.com/",website_description:"\u5b57\u4f53\u4e0b\u8f7d_\u514d\u8d39\u5b57\u4f53\u4e0b\u8f7d_\u5546\u7528\u5b57\u4f53\u8bbe\u8ba1\u5b9a\u5236--\u5b57\u9b42\u7f51",website_icon:"/in/zihunwang_icon.png",website_more:""},{website_name:"\u6c42\u5b57\u4f53\u7f51",website_href:"https://www.qiuziti.com/",website_description:"\u5b57\u4f53\u4e0b\u8f7d-\u6c42\u5b57\u4f53\u7f51\u63d0\u4f9b\u4e2d\u6587\u548c\u82f1\u6587\u5b57\u4f53\u5e93\u4e0b\u8f7d\u3001\u8bc6\u522b\u4e0e\u9884\u89c8\u670d\u52a1\uff0c\u627e\u5b57\u4f53\u7684\u597d\u5e2e\u624b",website_icon:"/in/qiuziti_icon.png",website_more:""},{website_name:"\u5b57\u4f53\u4e4b\u5bb6",website_href:"https://www.homefont.cn/",website_description:"\u5305\u542b17400\u591a\u79cd\u6709\u6548\u5b57\u4f53\u4e0b\u8f7d,\u9891\u9053\u5206\u7c7b220\u4e2a\u3002\u7528\u6237\u8986\u76d6\u5404\u56fd,\u5b57\u4f53\u4e0b\u8f7d\u81ea\u5e26\u9884\u89c8,\u67e5\u627e\u65b9\u4fbf,\u56fd\u5185\u8001\u724c\u5b57\u4f53\u4e0b\u8f7d\u7ad9\u4e4b\u4e00\u3002",website_icon:"/in/zitizhijia_icon.png",website_more:""},{website_name:"\u677e\u9f20\u5b57\u4f53",website_href:"https://www.fontsquirrel.com/",website_description:"\u677e\u9f20\u5b57\u4f53\uff08Font Squirrel\uff09\u641c\u5bfb\u4e92\u8054\u7f51\u4e0a\u9ad8\u8d28\u91cf\u7684\u5408\u6cd5\u514d\u8d39\u5b57\u4f53\u3002\u4e0b\u8f7d\u6570\u5343\u79cd\u5b8c\u5168\u5408\u6cd5\uff0c\u9ad8\u8d28\u91cf\u7684\u514d\u8d39\u5b57\u4f53\u3002",website_icon:"/in/zitisongshu_icon.png",website_more:""},{website_name:"\u5b57\u7531",website_href:"https://www.hellofont.cn/",website_description:"\u5b57\u7531\u662f\u4e3a\u8bbe\u8ba1\u5e08\u91cf\u8eab\u5b9a\u505a\u7684\u4e00\u6b3e\u5b57\u4f53\u4e0b\u8f7d\u7ba1\u7406\u5de5\u5177\u3002\u8fd9\u91cc\u6536\u96c6\u4e86\u56fd\u5185\u5916\u4e0a\u5343\u6b3e\u7cbe\u9009\u5b57\u4f53\uff0c\u4e0d\u4ec5\u8ba9\u4f60\u8f7b\u677e\u3001\u81ea\u7531\u548c\u9ad8\u6548\u7684\u4f7f\u7528\u5b57\u4f53\uff0c\u8fd8\u4e3a\u4f60\u5c55\u793a\u4e86\u6bcf\u6b3e\u5b57\u4f53\u7684\u8be6\u7ec6\u4fe1\u606f\u548c\u7cbe\u9009\u7684\u5b57\u4f53\u6587\u7ae0\u3002\u5b57\u7531\u5c06\u6210\u4e3a\u4f60\u8bbe\u8ba1\u4e2d\u7684\u597d\u5e2e\u624b\uff0c\u8ba9\u4f60\u9886\u7565\u5b57\u4f53\u5728\u8bbe\u8ba1\u4e2d\u7684\u66f4\u591a\u7cbe\u5f69\u3002",website_icon:"/in/ziyou_icon.png",website_more:""},{website_name:"fontfabric",website_href:"https://www.hellofont.cn/",website_description:"\u4e00\u4e2a\u6570\u5b57\u578b\u94f8\u9020\u5382\uff0c\u4e3a\u5404\u79cd\u54c1\u724c\u5236\u4f5c\u96f6\u552e\u5b57\u4f53\u548c\u81ea\u5b9a\u4e49\u5b57\u4f53\u3002\u5206\u4eab\u5bf9\u9ad8\u7ea7\u5b57\u4f53\uff0c\u4e66\u6cd5\u548c\u523b\u5b57\u7684\u70ed\u60c5\u3002",website_icon:"/in/font_fabric_icon.png",website_more:""},{website_name:"100Font",website_href:"https://www.100font.com/",website_description:"\u4e00\u4e2a\u4e13\u95e8\u6536\u96c6\u201c\u514d\u8d39\u5546\u7528\u5b57\u4f53\u201d\u7684\u7f51\u7ad9",website_icon:"",website_more:""}]},{website_info_name:"\u8272\u5f69<br/>\u5b9e\u9a8c\u5ba4",website_info_tag:"color_lab",website_info_list:[{website_name:"\u8272\u5f69\u730e\u4eba",website_href:"https://colorhunt.co/",website_description:"\u63d0\u4f9b\u73b0\u6210\u7684\u4f18\u8d28\u914d\u8272\u793a\u4f8b",website_icon:"",website_more:""}]},{website_info_name:"\u56fe\u7247<br/>\u5de5\u5382",website_info_tag:"picture_factory",website_info_list:[{website_name:"\u5728\u7ebf\u538b\u7f29\u56fe\u7247",website_href:"https://www.iloveimg.com/zh-cn/compress-image",website_description:"\u538b\u7f29 JPG, PNG \u6216 GIF\u65f6\u4fdd\u6301\u6700\u4f73\u6587\u4ef6\u8d28\u91cf\u548c\u538b\u7f29\u7a0b\u5ea6\u3002\u4e00\u6b21\u7f29\u5c0f\u591a\u4e2a\u56fe\u7247\u6587\u4ef6\u7684\u5c3a\u5bf8\u3002",website_icon:"",website_more:""}]},{website_info_name:"\u8d44\u6e90<br/>\u96c6\u5e02",website_info_tag:"resource_bazaar",website_info_list:[{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",website_icon:"",website_more:""}]},{website_info_name:"\u5728\u7ebf<br/>\u795e\u5668",website_info_tag:"online_tools_book",website_info_list:[{website_name:"\u5728\u7ebfPhotoShop",website_href:"https://photopea.com",website_description:"\u529f\u80fd\u5f3a\u5927\u7684\u7f51\u9875\u7248PhotoShop",website_keywords:["\u5728\u7ebf\u795e\u5668","Photoshop"],website_icon:"",website_more:"https://www.v2fy.com/p/T001-photopea/"},{website_name:"GIF\u5230MP4\u8f6c\u6362\u5668",website_href:"https://convertio.co/zh/gif-mp4/",website_description:"\u53ef\u4ee5\u5c06100MB\u4ee5\u5185\u7684gif\u56fe\u7247\u8f6c\u6362\u4e3aMP4",website_icon:"",website_more:"https://www.v2fy.com/p/T002-gif-to-mp4/"},{website_name:"\u6c42\u5b57\u4f53",website_href:"https://www.qiuziti.com/",website_description:"\u5feb\u901f\u8bc6\u522b\u56fe\u7247\u4e2d\u7684\u6587\u5b57\u5b57\u4f53",website_icon:"",website_more:"https://www.v2fy.com/p/T003-qiuziti/"},{website_name:"Word Art",website_href:"https://wordart.com/create",website_description:"\u521b\u5efa\u4e8c\u7ef4\u7801\u6587\u5b57\u4e91!",website_icon:"",website_more:"https://www.v2fy.com/p/T004-word-art/"},{website_name:"\u767e\u5ea6\u8111\u56fe",website_href:"https://naotu.baidu.com/",website_description:"\u597d\u7528\u5230\u4e0d\u50cf\u767e\u5ea6\u4ea7\u54c1\u7684\u4ea7\u54c1",website_icon:"",website_more:"https://www.v2fy.com/p/T005-baidunaotu/"},{website_name:"\u5fae\u4fe1Markdown\u7f16\u8f91\u5668",website_href:"https://doocs.gitee.io/md/#/",website_description:"\u8f6c\u5316Markdown\u5230\u5fae\u4fe1\u7279\u5236\u7684HTML",website_icon:"",website_more:"https://www.v2fy.com/p/T006-md2wx/"},{website_name:"Upuptoyou\u62cd\u7acb\u5f97",website_href:"https://upuptoyou.com/",website_description:"\u4e3e\u724c\u5c0f\u4eba\u5728\u6b64\u4e3a\u60a8\u670d\u52a1",website_icon:"",website_more:"https://www.v2fy.com/p/T007-upuptoyou/"},{website_name:"\u8bfa\u57fa\u4e9a\u77ed\u4fe1\u56fe\u7247\u751f\u6210\u5668",website_href:"https://www.noddl.me/",website_description:"\u6709\u5185\u9b3c\uff0c\u7ec8\u6b62\u4ea4\u6613\uff01",website_icon:"",website_more:"https://www.v2fy.com/p/T008-noddl/"},{website_name:"Urlgot\u89c6\u9891\u4e0b\u8f7d",website_href:"https://www.urlgot.com/",website_description:"\u5168\u80fd\u89c6\u9891\u5728\u7ebf\u4e0b\u8f7d\u5de5\u5177",website_icon:"",website_more:"https://www.v2fy.com/p/T009-urlgot/"},{website_name:"\u667a\u80fd\u7b80\u7b14\u753b",website_href:"https://www.autodraw.com/",website_description:"\u5b9e\u529b\u753b\u6e23, \u5728\u7ebf\u753b\u9c7c",website_icon:"",website_more:"https://www.v2fy.com/p/T010-autodraw/"},{website_name:"Artbreeder",website_href:"https://artbreeder.com/",website_description:"\u827a\u672f\u6295\u98df\u8005,\u673a\u5668\u5b66\u4e60\u5408\u6210\u827a\u672f\u56fe\u7247,\u5728\u7ebf\u878d\u5408\u4eba\u7269\u9762\u90e8",website_icon:"",website_more:"https://www.v2fy.com/p/T011-artbreeder/"},{website_name:"\u622a\u56fe\u62fc\u63a5\u5de5\u5177",website_href:"https://join-screenshots.zhanghai.me/",website_description:"\u5728\u7ebf\u7535\u5f71\u5b57\u5e55\u62fc\u63a5",website_icon:"",website_more:"https://www.v2fy.com/p/T013-join-screenshots/"},{website_name:"\u4fc4\u7f57\u65af\u65b9\u5757",website_href:"https://chvin.github.io/react-tetris/?lan=zh-cn",website_description:"\u5f00\u6e90\u4fc4\u7f57\u65af\u65b9\u5757\u5c0f\u6e38\u620f",website_icon:"",website_more:"https://www.v2fy.com/p/T014-tetris/"},{website_name:"\u8fd9\u662f\u4ec0\u4e48\u756a?",website_href:"https://trace.moe/",website_description:"\u6839\u636e\u622a\u56fe\u67e5\u627e\u756a\u5267\u6765\u6e90",website_icon:"",website_more:"https://www.v2fy.com/p/T015-trace-moe/"},{website_name:"\u62f7\u8d1d\u5154",website_href:"https://cp.anyknew.com/",website_description:"\u4e00\u6b3e\u5728\u7ebf\u4f20\u8f93\u6587\u4ef6\u6216\u6587\u5b57\u7684\u5de5\u5177",website_icon:"",website_more:"https://www.v2fy.com/p/T016-copy-tool/"},{website_name:"MyFreeMP3",website_href:"http://tool.liumingye.cn/music/?page=searchPage",website_description:"\u5728\u7ebf\u4e0b\u8f7dQQ\u97f3\u4e50\uff0c\u7f51\u6613\u4e91\u97f3\u4e50\u6240\u6709VIP\u6b4c\u66f2",website_icon:"",website_more:"https://www.v2fy.com/p/T017-liumingye_download_music/"},{website_name:"\u84dd\u594f\u4e91",website_href:"https://lanzou.com/",website_description:"\u65e0\u9700\u767b\u5f55\u5373\u53ef\u4e0b\u8f7d\u7684\u65e0\u9650\u901f\u7f51\u76d8",website_icon:"",website_more:"https://www.v2fy.com/p/T018-lanzou/"},{website_name:"\u8239\u957f\u89e3\u6790",website_href:"http://czjx8.com/",website_description:"vip\u89c6\u9891\u5728\u7ebf\u89e3\u6790,\u514d\u8d39\u5728\u7ebf\u67e5\u770b\u7231\u5947\u827a\uff0c\u817e\u8baf\uff0c\u4f18\u9177\uff0c\u8292\u679c\uff0cbilibili vip\u89c6\u9891",website_icon:"",website_more:"https://www.v2fy.com/p/T019-vip-movie/"},{website_name:"I Love Img",website_href:"https://www.iloveimg.com/zh-cn/compress-image",website_description:"\u5728\u7ebf\u6279\u91cf\u65e0\u635f\u538b\u7f29gif png jpg\u56fe\u7247",website_icon:"",website_more:"https://www.v2fy.com/p/T020-iloveimg/"},{website_name:"Base64\u5728\u7ebf\u52a0\u5bc6\u89e3\u5bc6",website_href:"https://www.base64encode.org/",website_description:"\u89e3\u5bc6\u6280\u672f\u8bba\u575b\u4e2d\u7684\u795e\u79d8\u90ae\u7bb1",website_icon:"",website_more:"https://www.v2fy.com/p/T021-b64/"},{website_name:"\u8c37\u6b4c\u514d\u8d39OCR",website_href:"https://docs.google.com/document/",website_description:"\u8c37\u6b4c\u514d\u8d39OCR\u5728\u7ebf\u4e2d\u82f1\u6587\u8bc6\u522b",website_icon:"",website_more:"https://www.v2fy.com/p/T022-ocr/"},{website_name:"Savefrom",website_href:"https://zh.savefrom.net/",website_description:"\u4e0b\u8f7dYouTube\u89c6\u9891",website_icon:"",website_more:"https://www.v2fy.com/p/T023-netfrom/"},{website_name:"\u7b80\u6d01\u827a\u672f\u4e8c\u7ef4\u7801\u751f\u6210",website_href:"http://qrbtf.com/",website_description:"\u53c2\u6570\u5316\u4e8c\u7ef4\u7801\u751f\u6210\u5668",website_icon:"",website_more:"https://www.v2fy.com/p/T024-qrbtf/"},{website_name:"Bitly",website_href:"https://bitly.com/",website_description:"\u53ef\u80fd\u662f\u5168\u7403\u6700\u597d\u7528\u7684\u77ed\u94fe\u63a5\u751f\u6210\u5de5\u5177",website_icon:"",website_more:"https://www.v2fy.com/p/T025-bitly/"},{website_name:"Bigjpg",website_href:"https://bigjpg.com/",website_description:"AI\u4eba\u5de5\u667a\u80fd\u56fe\u7247\u65e0\u635f\u653e\u5927",website_icon:"",website_more:"https://www.v2fy.com/p/T026-bigjpg/"},{website_name:"\u5f69\u8679\u5c41\u751f\u6210\u5668",website_href:"https://chp.shadiao.app/",website_description:"\u5feb\u5938\u5938\u6211!\u5f69\u8679\u5c41\u751f\u6210\u5668",website_icon:"",website_more:"https://www.v2fy.com/p/T027-chp/"},{website_name:"\u8521\u5f90\u5764\u6253\u7bee\u7403",website_href:"https://cxk.ssrr.one/",website_description:"\u8521\u5f90\u5764!\u51fa\u6765\u6253\u7403!",website_icon:"",website_more:"https://www.v2fy.com/p/T028-cxk/"},{website_name:"\u4e91\u7f51\u76d8\u4e4b\u5bb6",website_href:"https://wowenda.com/",website_description:"\u641c\u7d22\u767e\u5ea6\u7f51\u76d8\u7684\u5c0f\u59d0\u59d0",website_icon:"",website_more:"https://www.v2fy.com/p/T028-cxk/"},{website_name:"\u56fe\u58f3",website_href:"https://imgkr.com/",website_description:"\u514d\u8d39\u8d85\u597d\u7528\u7684\u56fe\u5e8a\uff0c\u56fe\u7247\u6700\u7a33\u5b9a\u7684\u5bb6",website_icon:"",website_more:"https://www.v2fy.com/p/T030-imgkr/"},{website_name:"\u4e2d\u56fd\u4f20\u7edf\u989c\u8272\u5728\u7ebf\u624b\u518c",website_href:"https://colors.ichuantong.cn/",website_description:"\u4e2d\u56fd\u53e4\u4ee3\u5982\u4f55\u547d\u540d\u989c\u8272",website_icon:"",website_more:"https://www.v2fy.com/p/T031-colors-ichuantong/"},{website_name:"webp2jpg",website_href:"https://renzhezhilu.gitee.io/webp2jpg-online/",website_description:"\u8ba9\u56fe\u7247\u5c3a\u5bf8\u8584\u5982\u8749\u7ffc",website_icon:"",website_more:"https://www.v2fy.com/p/T032-webp2jog/"},{website_name:"\u6700\u4f18\u56fe\u50cf\u4f18\u5316",website_href:"https://zh.recompressor.com/",website_description:"\u6587\u4ef6\u5c3a\u5bf8\u548c\u8d28\u91cf\u4e4b\u95f4\u9009\u62e9\u5b8c\u7f8e\u5e73\u8861\uff0c\u9002\u5408\u6444\u5f71\u5e08\u4f7f\u7528\u7684\u56fe\u7247\u538b\u7f29\u5de5\u5177",website_icon:"",website_more:"https://www.v2fy.com/p/T033-recompressor/"},{website_name:"\u4e5d\u683c\u5207\u56fe",website_href:"https://www.ygktool.cn/app/img_split",website_description:"\u5728\u7ebf\u5236\u4f5c\u5fae\u4fe1\u670b\u53cb\u5708\u4e5d\u5bab\u683c\u5207\u56fe",website_icon:"",website_more:"https://www.v2fy.com/p/T034-9-img-split/"},{website_name:"MdNice",website_href:"http://editor.mdnice.com",website_description:"\u5077\u61d2\u5b8c\u6210\u5fae\u4fe1\u516c\u4f17\u53f7\uff0c\u54d4\u54e9\u54d4\u54e9\uff0c\u77e5\u4e4e\uff0c\u6398\u91d1\u53d1\u6587\u6392\u7248,\u8ba9Markdown\u6392\u7248\u66f4nice\uff01",website_icon:"",website_more:"https://www.v2fy.com/p/T035-mdnice-2020-09-27/"},{website_name:"\u4e2a\u6027\u5316\u88c5\u9970\u5934\u50cf\u5408\u6210",website_href:"https://www.iloveimg.com/zh-cn/photo-editor",website_description:"\u65e0\u9700\u5c0f\u7a0b\u5e8f\uff0c\u65e0\u9700\u6ce8\u518c\u767b\u5f55\uff0c\u624b\u673a\u7f51\u9875\u5b8c\u6210\u8d85\u6e05\u5934\u50cf\u5408\u6210",website_icon:"",website_more:"https://www.v2fy.com/p/T036-photo-editor-2020-09-29/"},{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5728\u7ebf\u751f\u6210\u62df\u6001\u98ce\u683c\u7684CSS",website_icon:"",website_more:""}]},{website_info_name:"\u65b9\u5706<br/>\u680f\u76ee",website_info_tag:"fangyuan_column",website_info_list:[{website_name:"\u65b9\u5706STU",website_href:"https://fangyuanstu.com",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",website_icon:"",website_more:""},{website_name:"V2\u65b9\u5706",website_href:"https://v2fy.com",website_description:"\u53d1\u6398\u7a00\u7f3a\u8d44\u6e90",website_icon:"",website_more:""},{website_name:"\u65b9\u5706\u5c0f\u7ad9",website_href:"https://fangyuanxiaozhan.com",website_description:"zhaoolee\u4e0d\u804a\u6280\u672f\u7684\u6742\u8c08\u7ad9",website_icon:"",website_more:""}]},{website_info_name:"Github<br/>\u5f00\u6e90",website_info_tag:"github_open_source",website_info_list:[{website_name:"Chrome\u63d2\u4ef6\u82f1\u96c4\u699c",website_href:"https://github.com/zhaoolee/ChromeAppHeroes",website_description:"\ud83c\udf08\u8c37\u7c92-Chrome\u63d2\u4ef6\u82f1\u96c4\u699c, \u4e3a\u4f18\u79c0\u7684Chrome\u63d2\u4ef6\u5199\u4e00\u672c\u4e2d\u6587\u8bf4\u660e\u4e66, \u8ba9Chrome\u63d2\u4ef6\u82f1\u96c4\u4eec\u9020\u798f\u4eba\u7c7b~",website_icon:"",website_more:""},{website_name:"\u4e2d\u56fd\u7684\u8868\u60c5\u5305",website_href:"https://github.com/zhaoolee/ChineseBQB",website_description:"\ud83c\udde8\ud83c\uddf3 \u8868\u60c5\u5305\u7684\u535a\u7269\u9986, Github\u6700\u6709\u6bd2\u7684\u4ed3\u5e93, \u4e2d\u56fd\u8868\u60c5\u5305\u5927\u96c6\u5408, \u805a\u6b22\u4e50~",website_icon:"",website_more:""},{website_name:"\u5728\u7ebf\u5de5\u5177\u79d8\u7c4d",website_href:"https://github.com/zhaoolee/OnlineToolsBook",website_description:"\ud83c\udf6d\u5728\u7ebf\u5de5\u5177\u79d8\u7c4d,\u4e3a\u5728\u7ebf\u5de5\u5177\u5199\u4e00\u672c\u4f18\u8d28\u8bf4\u660e\u4e66,\u8ba9\u5728\u7ebf\u5de5\u5177\u9020\u798f\u4eba\u7c7b~",website_icon:"",website_more:""},{website_name:"\u560e!RSS",website_href:"https://github.com/zhaoolee/OnlineToolsBook",website_description:"Github Actions\u91c7\u96c6RSS, \u6253\u9020\u65e0\u5e7f\u544a\u5185\u5bb9\u4f18\u8d28\u7684\u5934\u7248\u5934\u6761\u8d85\u8d5e\u5b9d\u85cf\u9875",website_icon:"",website_more:""}]},{website_info_name:"\u884c\u4e1a<br/>\u96f7\u8fbe",website_info_tag:"industry_radar",website_info_list:[]},{website_info_name:"\u6570\u636e<br/>\u67e5\u8be2",website_info_tag:"data_query",website_info_list:[]}];let i={};return t.map((e=>{i[e.website_info_tag]=e.website_info_list,e.website_info_list.map((e=>{i.all.push(e)}))})),{all_website_info_list:t,website_info_tag_and_list_obj:i}};var f=p},4725:function(e){e.exports={header:"Header_header__OkoDL",logo_container:"Header_logo_container__lReJ4",link_container:"Header_link_container__2P8oK",a_container:"Header_a_container__2jVdS",fangyuan_icon:"Header_fangyuan_icon__2uEtO",a_title:"Header_a_title__3cJPL",a_title_hover:"Header_a_title_hover__2GYCb"}},8997:function(){},1889:function(e){e.exports={website_info:"In_website_info__1r1Cw",td_website_info:"In_td_website_info__1oU6m",website_info_atom:"In_website_info_atom__1xjnz",website_info_hover:"In_website_info_hover__1Tq-P",website_info_text:"In_website_info_text__GID5K",website_info_container:"In_website_info_container__1r91R",website_info_list_container:"In_website_info_list_container__aZ4Ox",website_info_list_atom_container:"In_website_info_list_atom_container__148FD",website_info_list_atom:"In_website_info_list_atom__1iHM5",website_info_list_atom_container_a:"In_website_info_list_atom_container_a__3IDYZ",website_info_list_atom_title:"In_website_info_list_atom_title__3qfMM",website_info_list_atom_description:"In_website_info_list_atom_description__1y8am",website_info_list_atom_icon:"In_website_info_list_atom_icon__3VY8q",website_more_a:"In_website_more_a__KcPCt",website_keywords:"In_website_keywords__u7rmG"}}}]);