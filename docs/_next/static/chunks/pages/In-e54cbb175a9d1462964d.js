(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{4230:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var _=i(7294),n=(i(3935),i(1664)),s=i(4725),o=i.n(s),a=i(5675);var r=function(e){return console.log("props==>>",e),_.createElement("div",{className:o().header},_.createElement("div",{className:o().logo_container},_.createElement(n.default,{href:"/"},_.createElement("a",null,_.createElement(a.default,{src:"/in/fangyuan.png",alt:"fangyuan",width:"auto",height:40})))),_.createElement("div",{className:o().link_container},[{href:"/",title:"\u8ba2 \u9605",title_key:"feed"},{href:"/about.html",title:"\u5173 \u4e8e",title_key:"about"},{href:"/contact.html",title:"\u4f60 \u7684",title_key:"contact"}].map((t=>_.createElement("div",{className:o().a_container,key:t.href},e.title_key===t.title_key&&_.createElement(n.default,{href:t.href},_.createElement("a",{className:o().a_title_hover},t.title)),e.title_key!==t.title_key&&_.createElement(n.default,{href:t.href},_.createElement("a",{className:o().a_title},t.title))))),_.createElement("div",{className:o().fangyuan_icon},_.createElement(a.default,{src:"/in/fangyuan_icon.png",alt:"fangyuan",width:40,height:40}))))}},8047:function(e,t,i){"use strict";i.r(t);var _=i(7294),n=(i(3935),i(4230)),s=i(1889),o=i.n(s),a=i(1664);function r(e){return _.createElement("div",{className:o().website_info_container,onClick:()=>{e.set_website_info_tag(e.website_info_list_value.website_info_tag)}},_.createElement("table",null,_.createElement("tbody",null,_.createElement("tr",null,_.createElement("td",null,_.createElement("div",{style:{width:30,height:30}})),_.createElement("td",null,_.createElement("div",{className:o().td_website_info},!0===e.select&&_.createElement("div",{className:o().website_info_hover},_.createElement("div",{className:o().website_info_text,dangerouslySetInnerHTML:{__html:e.website_info_list_value.website_info_name}})),!1===e.select&&_.createElement("div",{className:o().website_info},_.createElement("div",{className:o().website_info_text,dangerouslySetInnerHTML:{__html:e.website_info_list_value.website_info_name}}))))))))}function l(e){const[t,i]=(0,_.useState)("font_research_society");return _.createElement("div",{className:"in"},_.createElement(n.Z,{title_key:"index"}),_.createElement("div",{className:o().website_info_container},e.all_website_info_list.map(((e,n)=>t===e.website_info_tag?_.createElement(r,{key:e.website_info_name,set_website_info_tag:i,website_info_list_value:e,select:!0}):_.createElement(r,{key:e.website_info_name,set_website_info_tag:i,website_info_list_value:e,select:!1})))),_.createElement("div",{className:o().website_info_list_atom_container},e.website_info_tag_and_list_obj[t].map((e=>_.createElement(a.default,{key:e.website_name,href:e.website_href},_.createElement("a",{className:o().website_info_list_atom_container_a},_.createElement("div",{className:o().website_info_list_atom},_.createElement("div",{className:o().website_info_list_atom_title},e.website_name),_.createElement("div",{className:o().website_info_list_atom_description},e.website_description))))))))}l.getInitialProps=async e=>{const t=[{website_info_name:"\u5b57\u4f53<br/>\u7814\u7a76\u793e",website_info_tag:"font_research_society",website_info_list:[{website_name:"100Font",website_href:"https://www.100font.com/",website_description:"\u4e00\u4e2a\u4e13\u95e8\u6536\u96c6\u201c\u514d\u8d39\u5546\u7528\u5b57\u4f53\u201d\u7684\u7f51\u7ad9",webiste_icon:"",website_more:""}]},{website_info_name:"\u8272\u5f69<br/>\u5b9e\u9a8c\u5ba4",website_info_tag:"color_lab",website_info_list:[{website_name:"\u8272\u5f69\u730e\u4eba",website_href:"https://colorhunt.co/",website_description:"\u63d0\u4f9b\u73b0\u6210\u7684\u4f18\u8d28\u914d\u8272\u793a\u4f8b",webiste_icon:"",website_more:""}]},{website_info_name:"\u56fe\u7247<br/>\u5de5\u5382",website_info_tag:"picture_factory",website_info_list:[{website_name:"\u5728\u7ebf\u538b\u7f29\u56fe\u7247",website_href:"https://www.iloveimg.com/zh-cn/compress-image",website_description:"\u538b\u7f29 JPG, PNG \u6216 GIF\u65f6\u4fdd\u6301\u6700\u4f73\u6587\u4ef6\u8d28\u91cf\u548c\u538b\u7f29\u7a0b\u5ea6\u3002\u4e00\u6b21\u7f29\u5c0f\u591a\u4e2a\u56fe\u7247\u6587\u4ef6\u7684\u5c3a\u5bf8\u3002",webiste_icon:"",website_more:""}]},{website_info_name:"\u8d44\u6e90<br/>\u96c6\u5e02",website_info_tag:"resource_bazaar",website_info_list:[{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""}]},{website_info_name:"\u5728\u7ebf<br/>\u795e\u5668",website_info_tag:"online_tools_book",website_info_list:[{website_name:"\u5728\u7ebfPhotoShop",website_href:"https://photopea.com",website_description:"\u5728\u7ebfPhotoSho",webiste_icon:"",website_more:""},{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5728\u7ebf\u751f\u6210\u62df\u6001\u98ce\u683c\u7684CSS",webiste_icon:"",website_more:""}]},{website_info_name:"\u65b9\u5706<br/>\u680f\u76ee",website_info_tag:"fangyuan_column",website_info_list:[{website_name:"\u65b9\u5706STU",website_href:"https://fangyuanstu.com",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""},{website_name:"V2\u65b9\u5706",website_href:"https://v2fy.com",website_description:"\u53d1\u6398\u7a00\u7f3a\u8d44\u6e90",webiste_icon:"",website_more:""},{website_name:"\u65b9\u5706\u5c0f\u7ad9",website_href:"https://fangyuanxiaozhan.com",website_description:"zhaoolee\u4e0d\u804a\u6280\u672f\u7684\u6742\u8c08\u7ad9",webiste_icon:"",website_more:""}]},{website_info_name:"Github<br/>\u5f00\u6e90",website_info_tag:"github_open_source",website_info_list:[{website_name:"Chrome\u63d2\u4ef6\u82f1\u96c4\u699c",website_href:"https://github.com/zhaoolee/ChromeAppHeroes",website_description:"\ud83c\udf08\u8c37\u7c92-Chrome\u63d2\u4ef6\u82f1\u96c4\u699c, \u4e3a\u4f18\u79c0\u7684Chrome\u63d2\u4ef6\u5199\u4e00\u672c\u4e2d\u6587\u8bf4\u660e\u4e66, \u8ba9Chrome\u63d2\u4ef6\u82f1\u96c4\u4eec\u9020\u798f\u4eba\u7c7b~",webiste_icon:"",website_more:""},{website_name:"\u4e2d\u56fd\u7684\u8868\u60c5\u5305",website_href:"https://github.com/zhaoolee/ChineseBQB",website_description:"\ud83c\udde8\ud83c\uddf3 \u8868\u60c5\u5305\u7684\u535a\u7269\u9986, Github\u6700\u6709\u6bd2\u7684\u4ed3\u5e93, \u4e2d\u56fd\u8868\u60c5\u5305\u5927\u96c6\u5408, \u805a\u6b22\u4e50~",webiste_icon:"",website_more:""},{website_name:"\u5728\u7ebf\u5de5\u5177\u79d8\u7c4d",website_href:"https://github.com/zhaoolee/OnlineToolsBook",website_description:"\ud83c\udf6d\u5728\u7ebf\u5de5\u5177\u79d8\u7c4d,\u4e3a\u5728\u7ebf\u5de5\u5177\u5199\u4e00\u672c\u4f18\u8d28\u8bf4\u660e\u4e66,\u8ba9\u5728\u7ebf\u5de5\u5177\u9020\u798f\u4eba\u7c7b~",webiste_icon:"",website_more:""},{website_name:"\u560e!RSS",website_href:"https://github.com/zhaoolee/OnlineToolsBook",website_description:"Github Actions\u91c7\u96c6RSS, \u6253\u9020\u65e0\u5e7f\u544a\u5185\u5bb9\u4f18\u8d28\u7684\u5934\u7248\u5934\u6761\u8d85\u8d5e\u5b9d\u85cf\u9875",webiste_icon:"",website_more:""}]},{website_info_name:"\u884c\u4e1a<br/>\u96f7\u8fbe",website_info_tag:"industry_radar",website_info_list:[]},{website_info_name:"\u6570\u636e<br/>\u67e5\u8be2",website_info_tag:"data_query",website_info_list:[]}];let i={};return t.map((e=>{i[e.website_info_tag]=e.website_info_list})),{all_website_info_list:t,website_info_tag_and_list_obj:i}},t.default=l},3315:function(e,t,i){"use strict";i.r(t);var _=i(8047);t.default=_.default},7989:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/In",function(){return i(3315)}])},4725:function(e){e.exports={header:"Header_header__OkoDL",logo_container:"Header_logo_container__lReJ4",link_container:"Header_link_container__2P8oK",a_container:"Header_a_container__2jVdS",fangyuan_icon:"Header_fangyuan_icon__2uEtO",a_title:"Header_a_title__3cJPL",a_title_hover:"Header_a_title_hover__2GYCb"}},1889:function(e){e.exports={website_info_container:"In_website_info_container__1r91R",website_info:"In_website_info__1r1Cw",td_website_info:"In_td_website_info__1oU6m",website_info_hover:"In_website_info_hover__1Tq-P",website_info_text:"In_website_info_text__GID5K",website_info_list_container:"In_website_info_list_container__aZ4Ox",website_info_list_atom_container:"In_website_info_list_atom_container__148FD",website_info_list_atom:"In_website_info_list_atom__1iHM5",website_info_list_atom_container_a:"In_website_info_list_atom_container_a__3IDYZ",website_info_list_atom_title:"In_website_info_list_atom_title__3qfMM",website_info_list_atom_description:"In_website_info_list_atom_description__1y8am"}}},function(e){e.O(0,[774,351,61],(function(){return t=7989,e(e.s=t);var t}));var t=e.O();_N_E=t}]);