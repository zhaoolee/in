(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{4230:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=(n(3935),n(1664)),c=n(4725),a=n.n(c);var s=function(){return r.createElement("div",{className:a().header},[{href:"/",title:"\u9996\u9875"},{href:"/About",title:"\u5173\u4e8e"},{href:"/Contact",title:"\u8054\u7cfb\u6211\u4eec"}].map((e=>r.createElement("div",{className:a().acon,key:e.href},r.createElement(o.default,{href:e.href},r.createElement("a",null,e.title))))))}},6071:function(e,t,n){"use strict";var r=n(862);t.default=void 0;var o=r(n(7294)),c=n(1689),a=n(2441),s=n(5749);const l={};function u(e,t,n,r){if(!e)return;if(!(0,c.isLocalURL)(t))return;e.prefetch(t,n,r).catch((e=>{0}));const o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}var i=function(e){const t=!1!==e.prefetch,n=(0,a.useRouter)(),r=n&&n.pathname||"/",{href:i,as:f}=o.default.useMemo((()=>{const[t,n]=(0,c.resolveHref)(r,e.href,!0);return{href:t,as:e.as?(0,c.resolveHref)(r,e.as):n||t}}),[r,e.href,e.as]);let{children:d,replace:p,shallow:h,scroll:v,locale:m}=e;"string"===typeof d&&(d=o.default.createElement("a",null,d));const E=o.Children.only(d),_=E&&"object"===typeof E&&E.ref,[b,y]=(0,s.useIntersection)({rootMargin:"200px"}),g=o.default.useCallback((e=>{b(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,b]);(0,o.useEffect)((()=>{const e=y&&t&&(0,c.isLocalURL)(i),r="undefined"!==typeof m?m:n&&n.locale,o=l[i+"%"+f+(r?"%"+r:"")];e&&!o&&u(n,i,f,{locale:r})}),[f,i,y,m,t,n]);const L={ref:g,onClick:e=>{E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,l){const{nodeName:u}=e.currentTarget;("A"!==u||!function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:s}))}(e,n,i,f,p,h,v,m)},onMouseEnter:e=>{(0,c.isLocalURL)(i)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),u(n,i,f,{priority:!0}))}};if(e.passHref||"a"===E.type&&!("href"in E.props)){const e="undefined"!==typeof m?m:n&&n.locale,t=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(f,e,n&&n.locales,n&&n.domainLocales);L.href=t||(0,c.addBasePath)((0,c.addLocale)(f,e,n&&n.defaultLocale))}return o.default.cloneElement(E,L)};t.default=i},5749:function(e,t,n){"use strict";t.__esModule=!0,t.useIntersection=function({rootMargin:e,disabled:t}){const n=t||!c,s=(0,r.useRef)(),[l,u]=(0,r.useState)(!1),i=(0,r.useCallback)((t=>{s.current&&(s.current(),s.current=void 0),n||l||t&&t.tagName&&(s.current=function(e,t,n){const{id:r,observer:o,elements:c}=function(e){const t=e.rootMargin||"";let n=a.get(t);if(n)return n;const r=new Map,o=new IntersectionObserver((e=>{e.forEach((e=>{const t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n);return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),a.delete(r))}}(t,(e=>e&&u(e)),{rootMargin:e}))}),[n,e,l]);return(0,r.useEffect)((()=>{if(!c&&!l){const e=(0,o.requestIdleCallback)((()=>u(!0)));return()=>(0,o.cancelIdleCallback)(e)}}),[l]),[i,l]};var r=n(7294),o=n(8391);const c="undefined"!==typeof IntersectionObserver;const a=new Map},6921:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=(n(3935),n(4230));t.default=function({Component:e,pageProps:t}){return r.createElement("div",{className:"about"},r.createElement(o.Z,null),r.createElement("span",null,"About-\u5173\u4e8e\u5185\u5bb9"))}},1692:function(e,t,n){"use strict";n.r(t);var r=n(6921);t.default=r.default},1439:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/About",function(){return n(1692)}])},4725:function(e){e.exports={header:"Header_header__OkoDL",acon:"Header_acon__1KnH4"}},1664:function(e,t,n){e.exports=n(6071)}},function(e){e.O(0,[774,351],(function(){return t=1439,e(e.s=t);var t}));var t=e.O();_N_E=t}]);