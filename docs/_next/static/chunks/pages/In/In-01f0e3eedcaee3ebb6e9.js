(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[306],{4230:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(7294),s=(i(3935),i(1664)),o=i(4725),_=i.n(o);var r=function(e){return console.log("props==>>",e),n.createElement("div",{className:_().header},[{href:"/",title:"\u9996\u9875",title_key:"index"},{href:"/about.html",title:"\u5173\u4e8e",title_key:"about"},{href:"/contact.html",title:"\u8054\u7cfb\u6211\u4eec",title_key:"contact"}].map((t=>n.createElement("div",{className:_().a_container,key:t.href},e.title_key===t.title_key&&n.createElement(s.default,{href:t.href},n.createElement("a",{className:_().a_title_hover},t.title)),e.title_key!==t.title_key&&n.createElement(s.default,{href:t.href},n.createElement("a",{className:_().a_title},t.title))))))}},6071:function(e,t,i){"use strict";var n=i(862);t.default=void 0;var s=n(i(7294)),o=i(1689),_=i(2441),r=i(5749);const a={};function l(e,t,i,n){if(!e)return;if(!(0,o.isLocalURL)(t))return;e.prefetch(t,i,n).catch((e=>{0}));const s=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;a[t+"%"+i+(s?"%"+s:"")]=!0}var c=function(e){const t=!1!==e.prefetch,i=(0,_.useRouter)(),n=i&&i.pathname||"/",{href:c,as:f}=s.default.useMemo((()=>{const[t,i]=(0,o.resolveHref)(n,e.href,!0);return{href:t,as:e.as?(0,o.resolveHref)(n,e.as):i||t}}),[n,e.href,e.as]);let{children:b,replace:w,shallow:u,scroll:m,locale:h}=e;"string"===typeof b&&(b=s.default.createElement("a",null,b));const d=s.Children.only(b),p=d&&"object"===typeof d&&d.ref,[v,g]=(0,r.useIntersection)({rootMargin:"200px"}),y=s.default.useCallback((e=>{v(e),p&&("function"===typeof p?p(e):"object"===typeof p&&(p.current=e))}),[p,v]);(0,s.useEffect)((()=>{const e=g&&t&&(0,o.isLocalURL)(c),n="undefined"!==typeof h?h:i&&i.locale,s=a[c+"%"+f+(n?"%"+n:"")];e&&!s&&l(i,c,f,{locale:n})}),[f,c,g,h,t,i]);const E={ref:y,onClick:e=>{d.props&&"function"===typeof d.props.onClick&&d.props.onClick(e),e.defaultPrevented||function(e,t,i,n,s,_,r,a){const{nodeName:l}=e.currentTarget;("A"!==l||!function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(i))&&(e.preventDefault(),null==r&&(r=n.indexOf("#")<0),t[s?"replace":"push"](i,n,{shallow:_,locale:a,scroll:r}))}(e,i,c,f,w,u,m,h)},onMouseEnter:e=>{(0,o.isLocalURL)(c)&&(d.props&&"function"===typeof d.props.onMouseEnter&&d.props.onMouseEnter(e),l(i,c,f,{priority:!0}))}};if(e.passHref||"a"===d.type&&!("href"in d.props)){const e="undefined"!==typeof h?h:i&&i.locale,t=i&&i.isLocaleDomain&&(0,o.getDomainLocale)(f,e,i&&i.locales,i&&i.domainLocales);E.href=t||(0,o.addBasePath)((0,o.addLocale)(f,e,i&&i.defaultLocale))}return s.default.cloneElement(d,E)};t.default=c},5749:function(e,t,i){"use strict";t.__esModule=!0,t.useIntersection=function({rootMargin:e,disabled:t}){const i=t||!o,r=(0,n.useRef)(),[a,l]=(0,n.useState)(!1),c=(0,n.useCallback)((t=>{r.current&&(r.current(),r.current=void 0),i||a||t&&t.tagName&&(r.current=function(e,t,i){const{id:n,observer:s,elements:o}=function(e){const t=e.rootMargin||"";let i=_.get(t);if(i)return i;const n=new Map,s=new IntersectionObserver((e=>{e.forEach((e=>{const t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return _.set(t,i={id:t,observer:s,elements:n}),i}(i);return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),_.delete(n))}}(t,(e=>e&&l(e)),{rootMargin:e}))}),[i,e,a]);return(0,n.useEffect)((()=>{if(!o&&!a){const e=(0,s.requestIdleCallback)((()=>l(!0)));return()=>(0,s.cancelIdleCallback)(e)}}),[a]),[c,a]};var n=i(7294),s=i(8391);const o="undefined"!==typeof IntersectionObserver;const _=new Map},8047:function(e,t,i){"use strict";i.r(t);var n=i(7294),s=(i(3935),i(4230)),o=i(1889),_=i.n(o),r=i(1664);function a(e){return n.createElement("div",{onClick:()=>{e.set_website_info_tag(e.website_info_list_value.website_info_tag)}},n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("div",{style:{width:30,height:30}})),n.createElement("td",null,!0===e.select&&n.createElement("div",{className:_().website_info_hover},n.createElement("div",{className:_().website_info_text,dangerouslySetInnerHTML:{__html:e.website_info_list_value.website_info_name}})),!1===e.select&&n.createElement("div",{className:_().website_info},n.createElement("div",{className:_().website_info_text,dangerouslySetInnerHTML:{__html:e.website_info_list_value.website_info_name}})))))))}function l(e){const[t,i]=(0,n.useState)("font_research_society");return n.createElement("div",{className:"in"},n.createElement(s.Z,{title_key:"index"}),n.createElement("div",{className:_().website_info_container},e.all_website_info_list.map(((e,s)=>t===e.website_info_tag?n.createElement(a,{key:e.website_info_name,set_website_info_tag:i,website_info_list_value:e,select:!0}):n.createElement(a,{key:e.website_info_name,set_website_info_tag:i,website_info_list_value:e,select:!1})))),n.createElement("div",null,e.website_info_tag_and_list_obj[t].map((e=>n.createElement(r.default,{key:e.website_name,href:e.website_href},n.createElement("a",null,e.website_name))))))}l.getInitialProps=async e=>{const t=[{website_info_name:"\u5b57\u4f53<br/>\u7814\u7a76\u793e",website_info_tag:"font_research_society",website_info_list:[{website_name:"\u65b9\u5706STU",website_href:"https://fangyuanstu.com",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""},{website_name:"\u5728\u7ebfPhotoShop",website_href:"https://photopea.com",website_description:"\u5728\u7ebfPhotoSho",webiste_icon:"",website_more:""},{website_name:"\u5728\u7ebf\u538b\u7f29\u56fe\u7247",website_href:"https://www.iloveimg.com/zh-cn/compress-image",website_description:"\u538b\u7f29 JPG, PNG \u6216 GIF\u65f6\u4fdd\u6301\u6700\u4f73\u6587\u4ef6\u8d28\u91cf\u548c\u538b\u7f29\u7a0b\u5ea6\u3002\u4e00\u6b21\u7f29\u5c0f\u591a\u4e2a\u56fe\u7247\u6587\u4ef6\u7684\u5c3a\u5bf8\u3002",webiste_icon:"",website_more:""}]},{website_info_name:"\u8272\u5f69<br/>\u5b9e\u9a8c\u5ba4",website_info_tag:"color_lab",website_info_list:[{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""}]},{website_info_name:"\u56fe\u7247<br/>\u5de5\u5382",website_info_tag:"picture_factory",website_info_list:[{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""}]},{website_info_name:"\u8d44\u6e90<br/>\u96c6\u5e02",website_info_tag:"resource_bazaar",website_info_list:[{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""}]},{website_info_name:"\u5728\u7ebf<br/>\u795e\u5668",website_info_tag:"online_tools_book",website_info_list:[{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""}]},{website_info_name:"\u65b9\u5706<br/>\u680f\u76ee",website_info_tag:"fangyuan_column",website_info_list:[{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""}]},{website_info_name:"Github<br/>\u5f00\u6e90",website_info_tag:"github_open_source",website_info_list:[{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""}]},{website_info_name:"\u884c\u4e1a<br/>\u96f7\u8fbe",website_info_tag:"industry_radar",website_info_list:[{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""}]},{website_info_name:"\u6570\u636e<br/>\u67e5\u8be2",website_info_tag:"data_query",website_info_list:[{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""}]}];let i={};return t.map((e=>{i[e.website_info_tag]=e.website_info_list})),{all_website_info_list:t,website_info_tag_and_list_obj:i}},t.default=l},4075:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/In/In",function(){return i(8047)}])},4725:function(e){e.exports={header:"Header_header__OkoDL",a_container:"Header_a_container__2jVdS",a_title:"Header_a_title__3cJPL",a_title_hover:"Header_a_title_hover__2GYCb"}},1889:function(e){e.exports={website_info:"In_website_info__1r1Cw",website_info_hover:"In_website_info_hover__1Tq-P",website_info_text:"In_website_info_text__GID5K",website_info_container:"In_website_info_container__1r91R",website_info_list_container:"In_website_info_list_container__aZ4Ox"}},1664:function(e,t,i){e.exports=i(6071)}},function(e){e.O(0,[774,351],(function(){return t=4075,e(e.s=t);var t}));var t=e.O();_N_E=t}]);