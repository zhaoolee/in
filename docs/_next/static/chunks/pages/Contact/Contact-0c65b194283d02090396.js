(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{4230:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),o=(n(3935),n(1664)),a=n(4725),c=n.n(a);var l=function(e){return console.log("props==>>",e),r.createElement("div",{className:c().header},[{href:"/",title:"\u9996\u9875",title_key:"index"},{href:"/about.html",title:"\u5173\u4e8e",title_key:"about"},{href:"/contact.html",title:"\u8054\u7cfb\u6211\u4eec",title_key:"contact"}].map((t=>r.createElement("div",{className:c().a_container,key:t.href},e.title_key===t.title_key&&r.createElement(o.default,{href:t.href},r.createElement("a",{className:c().a_title_hover},t.title)),e.title_key!==t.title_key&&r.createElement(o.default,{href:t.href},r.createElement("a",{className:c().a_title},t.title))))))}},6071:function(e,t,n){"use strict";var r=n(862);t.default=void 0;var o=r(n(7294)),a=n(1689),c=n(2441),l=n(5749);const s={};function i(e,t,n,r){if(!e)return;if(!(0,a.isLocalURL)(t))return;e.prefetch(t,n,r).catch((e=>{0}));const o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}var u=function(e){const t=!1!==e.prefetch,n=(0,c.useRouter)(),r=n&&n.pathname||"/",{href:u,as:f}=o.default.useMemo((()=>{const[t,n]=(0,a.resolveHref)(r,e.href,!0);return{href:t,as:e.as?(0,a.resolveHref)(r,e.as):n||t}}),[r,e.href,e.as]);let{children:d,replace:p,shallow:_,scroll:h,locale:v}=e;"string"===typeof d&&(d=o.default.createElement("a",null,d));const m=o.Children.only(d),y=m&&"object"===typeof m&&m.ref,[E,k]=(0,l.useIntersection)({rootMargin:"200px"}),b=o.default.useCallback((e=>{E(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,E]);(0,o.useEffect)((()=>{const e=k&&t&&(0,a.isLocalURL)(u),r="undefined"!==typeof v?v:n&&n.locale,o=s[u+"%"+f+(r?"%"+r:"")];e&&!o&&i(n,u,f,{locale:r})}),[f,u,k,v,t,n]);const g={ref:b,onClick:e=>{m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,l,s){const{nodeName:i}=e.currentTarget;("A"!==i||!function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:s,scroll:l}))}(e,n,u,f,p,_,h,v)},onMouseEnter:e=>{(0,a.isLocalURL)(u)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),i(n,u,f,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){const e="undefined"!==typeof v?v:n&&n.locale,t=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(f,e,n&&n.locales,n&&n.domainLocales);g.href=t||(0,a.addBasePath)((0,a.addLocale)(f,e,n&&n.defaultLocale))}return o.default.cloneElement(m,g)};t.default=u},5749:function(e,t,n){"use strict";t.__esModule=!0,t.useIntersection=function({rootMargin:e,disabled:t}){const n=t||!a,l=(0,r.useRef)(),[s,i]=(0,r.useState)(!1),u=(0,r.useCallback)((t=>{l.current&&(l.current(),l.current=void 0),n||s||t&&t.tagName&&(l.current=function(e,t,n){const{id:r,observer:o,elements:a}=function(e){const t=e.rootMargin||"";let n=c.get(t);if(n)return n;const r=new Map,o=new IntersectionObserver((e=>{e.forEach((e=>{const t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n);return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(t,(e=>e&&i(e)),{rootMargin:e}))}),[n,e,s]);return(0,r.useEffect)((()=>{if(!a&&!s){const e=(0,o.requestIdleCallback)((()=>i(!0)));return()=>(0,o.cancelIdleCallback)(e)}}),[s]),[u,s]};var r=n(7294),o=n(8391);const a="undefined"!==typeof IntersectionObserver;const c=new Map},7701:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=(n(3935),n(4230));t.default=function({Component:e,pageProps:t}){return r.createElement("div",null,r.createElement(o.Z,{title_key:"contact"}),r.createElement("span",null,"Contact-\u8054\u7cfb\u6211\u4eec\u5185\u5bb9"))}},6507:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Contact/Contact",function(){return n(7701)}])},4725:function(e){e.exports={header:"Header_header__OkoDL",a_container:"Header_a_container__2jVdS",a_title:"Header_a_title__3cJPL",a_title_hover:"Header_a_title_hover__2GYCb"}},1664:function(e,t,n){e.exports=n(6071)}},function(e){e.O(0,[774,351],(function(){return t=6507,e(e.s=t);var t}));var t=e.O();_N_E=t}]);