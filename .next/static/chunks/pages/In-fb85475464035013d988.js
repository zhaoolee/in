(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{4230:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(7294),r=(n(3935),n(1664)),s=n(4725),i=n.n(s);var a=function(){return o.createElement("div",{className:i().header},[{href:"/",title:"\u9996\u9875"},{href:"/about.html",title:"\u5173\u4e8e"},{href:"/contact.html",title:"\u8054\u7cfb\u6211\u4eec"}].map((e=>o.createElement("div",{className:i().acon,key:e.href},o.createElement(r.default,{href:e.href},o.createElement("a",null,e.title))))))}},6071:function(e,t,n){"use strict";var o=n(862);t.default=void 0;var r=o(n(7294)),s=n(1689),i=n(2441),a=n(5749);const c={};function l(e,t,n,o){if(!e)return;if(!(0,s.isLocalURL)(t))return;e.prefetch(t,n,o).catch((e=>{0}));const r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;c[t+"%"+n+(r?"%"+r:"")]=!0}var f=function(e){const t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",{href:f,as:u}=r.default.useMemo((()=>{const[t,n]=(0,s.resolveHref)(o,e.href,!0);return{href:t,as:e.as?(0,s.resolveHref)(o,e.as):n||t}}),[o,e.href,e.as]);let{children:_,replace:d,shallow:p,scroll:m,locale:b}=e;"string"===typeof _&&(_=r.default.createElement("a",null,_));const w=r.Children.only(_),h=w&&"object"===typeof w&&w.ref,[v,E]=(0,a.useIntersection)({rootMargin:"200px"}),y=r.default.useCallback((e=>{v(e),h&&("function"===typeof h?h(e):"object"===typeof h&&(h.current=e))}),[h,v]);(0,r.useEffect)((()=>{const e=E&&t&&(0,s.isLocalURL)(f),o="undefined"!==typeof b?b:n&&n.locale,r=c[f+"%"+u+(o?"%"+o:"")];e&&!r&&l(n,f,u,{locale:o})}),[u,f,E,b,t,n]);const g={ref:y,onClick:e=>{w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,a,c){const{nodeName:l}=e.currentTarget;("A"!==l||!function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:i,locale:c,scroll:a}))}(e,n,f,u,d,p,m,b)},onMouseEnter:e=>{(0,s.isLocalURL)(f)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),l(n,f,u,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){const e="undefined"!==typeof b?b:n&&n.locale,t=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(u,e,n&&n.locales,n&&n.domainLocales);g.href=t||(0,s.addBasePath)((0,s.addLocale)(u,e,n&&n.defaultLocale))}return r.default.cloneElement(w,g)};t.default=f},5749:function(e,t,n){"use strict";t.__esModule=!0,t.useIntersection=function({rootMargin:e,disabled:t}){const n=t||!s,a=(0,o.useRef)(),[c,l]=(0,o.useState)(!1),f=(0,o.useCallback)((t=>{a.current&&(a.current(),a.current=void 0),n||c||t&&t.tagName&&(a.current=function(e,t,n){const{id:o,observer:r,elements:s}=function(e){const t=e.rootMargin||"";let n=i.get(t);if(n)return n;const o=new Map,r=new IntersectionObserver((e=>{e.forEach((e=>{const t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:r,elements:o}),n}(n);return s.set(e,t),r.observe(e),function(){s.delete(e),r.unobserve(e),0===s.size&&(r.disconnect(),i.delete(o))}}(t,(e=>e&&l(e)),{rootMargin:e}))}),[n,e,c]);return(0,o.useEffect)((()=>{if(!s&&!c){const e=(0,r.requestIdleCallback)((()=>l(!0)));return()=>(0,r.cancelIdleCallback)(e)}}),[c]),[f,c]};var o=n(7294),r=n(8391);const s="undefined"!==typeof IntersectionObserver;const i=new Map},8047:function(e,t,n){"use strict";n.r(t);var o=n(7294),r=(n(3935),n(4230)),s=n(1889),i=n.n(s),a=n(1664);function c(e){return o.createElement("div",{className:"in"},o.createElement(r.Z,null),o.createElement("div",null,"Index-\u9996\u9875\u5185\u5bb9"),e.all_website_info_list.map(((e,t)=>o.createElement("div",{key:e.website_info_name},o.createElement("div",null,e.website_info_name),o.createElement("div",{className:i().website_con},e.website_info_list.map(((e,t)=>o.createElement(a.default,{key:e.website_name,href:e.website_href},o.createElement("a",null,o.createElement("div",{className:i().web_atom},e.website_name))))))))))}c.getInitialProps=async e=>({all_website_info_list:[{website_info_name:"\u8bbe\u8ba1",website_info_list:[{website_name:"\u65b9\u5706STU",website_href:"https://fangyuanstu.com",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""},{website_name:"\u5728\u7ebfPhotoShop",website_href:"https://photopea.com",website_description:"\u5728\u7ebfPhotoSho",webiste_icon:"",website_more:""},{website_name:"\u5728\u7ebf\u538b\u7f29\u56fe\u7247",website_href:"https://www.iloveimg.com/zh-cn/compress-image",website_description:"\u538b\u7f29 JPG, PNG \u6216 GIF\u65f6\u4fdd\u6301\u6700\u4f73\u6587\u4ef6\u8d28\u91cf\u548c\u538b\u7f29\u7a0b\u5ea6\u3002\u4e00\u6b21\u7f29\u5c0f\u591a\u4e2a\u56fe\u7247\u6587\u4ef6\u7684\u5c3a\u5bf8\u3002",webiste_icon:"",website_more:""}]},{website_info_name:"\u7f16\u7a0b\u5f00\u53d1",website_info_list:[{website_name:"\u5728\u7ebf\u62df\u6001",website_href:"https://neumorphism.io/",website_description:"\u5929\u662f\u65b9\u7684\uff0c\u5730\u662f\u5706\u7684",webiste_icon:"",website_more:""}]}]}),t.default=c},3315:function(e,t,n){"use strict";n.r(t);var o=n(8047);t.default=o.default},7989:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/In",function(){return n(3315)}])},4725:function(e){e.exports={header:"Header_header__OkoDL",acon:"Header_acon__1KnH4"}},1889:function(e){e.exports={web_atom:"In_web_atom__20G5P",website_con:"In_website_con__1p6u7"}},1664:function(e,t,n){e.exports=n(6071)}},function(e){e.O(0,[774,351],(function(){return t=7989,e(e.s=t);var t}));var t=e.O();_N_E=t}]);