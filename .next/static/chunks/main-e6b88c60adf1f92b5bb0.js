(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[179],{7154:function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t},400:function(){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var e=/\((.*)\)/.exec(this.toString());return e?e[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))})},2771:function(e,t){"use strict";t.__esModule=!0,t.default=function(){let e=null;return{mountedInstances:new Set,updateHead:t=>{const r=e=Promise.resolve().then((()=>{if(r!==e)return;e=null;const o={};t.forEach((e=>{const t=o[e.type]||[];t.push(e),o[e.type]=t}));const a=o.title?o.title[0]:null;let i="";if(a){const{children:e}=a.props;i="string"===typeof e?e:Array.isArray(e)?e.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((e=>{!function(e,t){const r=document.getElementsByTagName("head")[0],o=r.querySelector("meta[name=next-head-count]");0;const a=Number(o.content),i=[];for(let n=0,c=o.previousElementSibling;n<a;n++,c=c.previousElementSibling)c.tagName.toLowerCase()===e&&i.push(c);const s=t.map(n).filter((e=>{for(let t=0,r=i.length;t<r;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((e=>e.parentNode.removeChild(e))),s.forEach((e=>r.insertBefore(e,o))),o.content=(a-i.length+s.length).toString()}(e,o[e]||[])}))}))}}},t.DOMAttributeNames=void 0;const r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function n({type:e,props:t}){const n=document.createElement(e);for(const i in t){if(!t.hasOwnProperty(i))continue;if("children"===i||"dangerouslySetInnerHTML"===i)continue;if(void 0===t[i])continue;const o=r[i]||i.toLowerCase();"script"!==e||"async"!==o&&"defer"!==o&&"noModule"!==o?n.setAttribute(o,t[i]):n[o]=!!t[i]}const{children:o,dangerouslySetInnerHTML:a}=t;return a?n.innerHTML=a.__html||"":o&&(n.textContent="string"===typeof o?o:Array.isArray(o)?o.join(""):""),n}t.DOMAttributeNames=r},7403:function(e,t,r){"use strict";var n=r(862),o=r(5318);t.__esModule=!0,t.render=z,t.renderError=K,t.default=t.emitter=t.router=t.version=void 0;var a=o(r(7154));r(400);var i=o(r(7294)),s=o(r(3935)),c=r(4287),u=o(r(7332)),l=r(1642),d=r(1689),f=r(3288),p=n(r(4915)),m=n(r(9186)),h=r(3937),y=r(1567),v=o(r(2771)),g=o(r(7365)),S=o(r(4829)),E=r(6975),_=r(2441);const w=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=w;t.version="10.2.0";const b=e=>[].slice.call(e),{props:P,err:T,page:x,query:A,buildId:C,assetPrefix:N,runtimeConfig:M,dynamicIds:L,isFallback:R,locale:F,locales:I,domainLocales:k,isPreview:D}=w;let{defaultLocale:B}=w;const j=N||"";r.p=`${j}/_next/`,m.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:M||{}});let O=(0,h.getURL)();(0,d.hasBasePath)(O)&&(O=(0,d.delBasePath)(O));const q=new g.default(C,j),H=([e,t])=>q.routeLoader.onEntrypoint(e,t);window.__NEXT_P&&window.__NEXT_P.map((e=>setTimeout((()=>H(e)),0))),window.__NEXT_P=[],window.__NEXT_P.push=H;const $=(0,v.default)(),X=document.getElementById("__next");let U,G,V,W;t.router=G;class J extends i.default.Component{componentDidCatch(e,t){this.props.fn(e,t)}componentDidMount(){this.scrollToHash(),!G.isSsr||"/404"===x||"/_error"===x&&P&&P.pageProps&&404===P.pageProps.statusCode||!(R||w.nextExport&&((0,f.isDynamicRoute)(G.pathname)||location.search)||P&&P.__N_SSG&&location.search)||G.replace(G.pathname+"?"+String(p.assign(p.urlQueryToSearchParams(G.query),new URLSearchParams(location.search))),O,{_h:1,shallow:!R})}componentDidUpdate(){this.scrollToHash()}scrollToHash(){let{hash:e}=location;if(e=e&&e.substring(1),!e)return;const t=document.getElementById(e);t&&setTimeout((()=>t.scrollIntoView()),0)}render(){return this.props.children}}const Y=(0,u.default)();let Q;t.emitter=Y;async function z(e){if(e.err)await K(e);else try{await ie(e)}catch(t){if(t.cancelled)throw t;0,await K((0,a.default)({},e,{err:t}))}}function K(e){const{App:t,err:r}=e;return console.error(r),q.loadPage("/_error").then((({page:n,styleSheets:o})=>{const i=oe(t),s={Component:n,AppTree:i,router:G,ctx:{err:r,pathname:x,query:A,asPath:O,AppTree:i}};return Promise.resolve(e.props?e.props:(0,h.loadGetInitialProps)(t,s)).then((t=>ie((0,a.default)({},e,{err:r,Component:n,styleSheets:o,props:t}))))}))}t.default=async(e={})=>{let r=T;try{const e=await q.routeLoader.whenEntrypoint("/_app");if("error"in e)throw e.error;const{component:t,exports:r}=e;V=t,r&&r.reportWebVitals&&(W=({id:e,name:t,startTime:n,value:o,duration:a,entryType:i,entries:s})=>{const c=`${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`;let u;s&&s.length&&(u=s[0].startTime),r.reportWebVitals({id:e||c,name:t,startTime:n||u,value:null==o?a:o,label:"mark"===i||"measure"===i?"custom":"web-vital"})});const n=await q.routeLoader.whenEntrypoint(x);if("error"in n)throw n.error;Q=n.component}catch(n){r=n}window.__NEXT_PRELOADREADY&&await window.__NEXT_PRELOADREADY(L),t.router=G=(0,_.createRouter)(x,A,O,{initialProps:P,pageLoader:q,App:V,Component:Q,wrapApp:oe,err:r,isFallback:Boolean(R),subscription:(e,t,r)=>z(Object.assign({},e,{App:t,scroll:r})),locale:F,locales:I,defaultLocale:B,domainLocales:k,isPreview:D});return z({App:V,initial:!0,Component:Q,props:P,err:r}),Y};let Z="function"===typeof s.default.hydrate;function ee(){h.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),W&&performance.getEntriesByName("Next.js-hydration").forEach(W),re())}function te(){if(!h.ST)return;performance.mark("afterRender");const e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),W&&(performance.getEntriesByName("Next.js-render").forEach(W),performance.getEntriesByName("Next.js-route-change-to-render").forEach(W)),re(),["Next.js-route-change-to-render","Next.js-render"].forEach((e=>performance.clearMeasures(e))))}function re(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((e=>performance.clearMarks(e)))}function ne({children:e}){return i.default.createElement(J,{fn:e=>K({App:V,err:e}).catch((e=>console.error("Error rendering page: ",e)))},i.default.createElement(l.RouterContext.Provider,{value:(0,_.makePublicRouterInstance)(G)},i.default.createElement(c.HeadManagerContext.Provider,{value:$},e)))}const oe=e=>t=>{const r=(0,a.default)({},t,{Component:Q,err:T,router:G});return i.default.createElement(ne,null,i.default.createElement(e,r))};let ae;function ie(e){let{App:t,Component:r,props:n,err:o}=e,c="initial"in e?void 0:e.styleSheets;r=r||ae.Component,n=n||ae.props;const u=(0,a.default)({},n,{Component:r,err:o,router:G});ae=u;let l,d=!1;const f=new Promise(((e,t)=>{U&&U(),l=()=>{U=null,e()},U=()=>{d=!0,U=null;const e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));function p(){l()}!function(){if(!c)return!1;const e=b(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((e=>e.getAttribute("data-n-href")))),r=document.querySelector("noscript[data-n-css]"),n=null==r?void 0:r.getAttribute("data-n-css");c.forEach((({href:e,text:r})=>{if(!t.has(e)){const t=document.createElement("style");t.setAttribute("data-n-href",e),t.setAttribute("media","x"),n&&t.setAttribute("nonce",n),document.head.appendChild(t),t.appendChild(document.createTextNode(r))}}))}();const m=i.default.createElement(i.default.Fragment,null,i.default.createElement(ce,{callback:function(){if(c&&!d){const e=new Set(c.map((e=>e.href))),t=b(document.querySelectorAll("style[data-n-href]")),r=t.map((e=>e.getAttribute("data-n-href")));for(let o=0;o<r.length;++o)e.has(r[o])?t[o].removeAttribute("media"):t[o].setAttribute("media","x");let n=document.querySelector("noscript[data-n-css]");n&&c.forEach((({href:e})=>{const t=document.querySelector(`style[data-n-href="${e}"]`);t&&(n.parentNode.insertBefore(t,n.nextSibling),n=t)})),b(document.querySelectorAll("link[data-n-p]")).forEach((e=>{e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}e.scroll&&window.scrollTo(e.scroll.x,e.scroll.y)}}),i.default.createElement(ne,null,i.default.createElement(t,u),i.default.createElement(y.Portal,{type:"next-route-announcer"},i.default.createElement(E.RouteAnnouncer,null))));return function(e,t){h.ST&&performance.mark("beforeRender");const r=t(Z?ee:te);Z?(s.default.hydrate(r,e),Z=!1):s.default.render(r,e)}(X,(e=>i.default.createElement(se,{callbacks:[e,p]},m))),f}function se({callbacks:e,children:t}){return i.default.useLayoutEffect((()=>e.forEach((e=>e()))),[e]),i.default.useEffect((()=>{(0,S.default)(W)}),[]),t}function ce({callback:e}){return i.default.useLayoutEffect((()=>e()),[e]),null}},5778:function(e,t,r){"use strict";var n=r(862)(r(7403));window.next=n,(0,n.default)().catch(console.error)},7365:function(e,t,r){"use strict";var n=r(862),o=r(5318);t.__esModule=!0,t.default=void 0;var a=r(1689),i=o(r(7892)),s=r(3288),c=r(4436),u=r(6528),l=n(r(7599));t.default=class{constructor(e,t){this.buildId=void 0,this.assetPrefix=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.routeLoader=void 0,this.routeLoader=(0,l.default)(t),this.buildId=e,this.assetPrefix=t,this.promisedSsgManifest=new Promise((e=>{window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=()=>{e(window.__SSG_MANIFEST)}}))}getPageList(){return(0,l.getClientBuildManifest)().then((e=>e.sortedPages))}getDataHref(e,t,r,n){const{pathname:o,query:l,search:d}=(0,c.parseRelativeUrl)(e),{pathname:f}=(0,c.parseRelativeUrl)(t),p=function(e){if("/"!==e[0])throw new Error(`Route name should start with a "/", got "${e}"`);return"/"===e?e:e.replace(/\/$/,"")}(o),m=e=>{const t=(0,i.default)((0,u.removePathTrailingSlash)((0,a.addLocale)(e,n)),".json");return(0,a.addBasePath)(`/_next/data/${this.buildId}${t}${r?"":d}`)},h=(0,s.isDynamicRoute)(p),y=h?(0,a.interpolateAs)(o,f,l).result:"";return h?y&&m(y):m(p)}_isSsg(e){return this.promisedSsgManifest.then((t=>t.has(e)))}loadPage(e){return this.routeLoader.loadRoute(e).then((e=>{if("component"in e)return{page:e.component,mod:e.exports,styleSheets:e.styles.map((e=>({href:e.href,text:e.content})))};throw e.error}))}prefetch(e){return this.routeLoader.prefetch(e)}}},4829:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(5866);location.href;let o,a=!1;function i(e){o&&o(e)}t.default=e=>{o=e,a||(a=!0,(0,n.getCLS)(i),(0,n.getFID)(i),(0,n.getFCP)(i),(0,n.getLCP)(i),(0,n.getTTFB)(i))}},1567:function(e,t,r){"use strict";var n=r(862);t.__esModule=!0,t.Portal=void 0;var o=n(r(7294)),a=r(3935);t.Portal=({children:e,type:t})=>{let r=o.useRef(null),[,n]=o.useState();return o.useEffect((()=>(r.current=document.createElement(t),document.body.appendChild(r.current),n({}),()=>{r.current&&document.body.removeChild(r.current)})),[t]),r.current?(0,a.createPortal)(e,r.current):null}},6975:function(e,t,r){"use strict";var n=r(862);t.__esModule=!0,t.RouteAnnouncer=i,t.default=void 0;var o=n(r(7294)),a=r(2441);function i(){const{asPath:e}=(0,a.useRouter)(),[t,r]=(0,o.useState)(""),n=(0,o.useRef)(!1);return(0,o.useEffect)((()=>{if(!n.current)return void(n.current=!0);let t;const o=document.querySelector("h1");o&&(t=o.innerText||o.textContent),t||(t=document.title?document.title:e),r(t)}),[e]),o.default.createElement("p",{"aria-live":"assertive",id:"__next-route-announcer__",role:"alert",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},t)}var s=i;t.default=s},9186:function(e,t){"use strict";let r;t.__esModule=!0,t.setConfig=function(e){r=e},t.default=void 0;t.default=()=>r},5866:function(e){e.exports=function(){var e={599:function(e,t){!function(e){"use strict";var t,r,n=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},o=function(e){return{name:e,value:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,delta:0,entries:[],id:n(),isFinal:!1}},a=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return r.observe({type:e,buffered:!0}),r}}catch(e){}},i=!1,s=!1,c=function(e){i=!e.persisted},u=function(){addEventListener("pagehide",c),addEventListener("beforeunload",(function(){}))},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(u(),s=!0),addEventListener("visibilitychange",(function(t){var r=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:r,isUnloading:i})}),{capture:!0,once:t})},d=function(e,t,r,n){var o;return function(){r&&t.isFinal&&r.disconnect(),t.value>=0&&(n||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},f=function(){return void 0===t&&(t="hidden"===document.visibilityState?0:1/0,l((function(e){var r=e.timeStamp;return t=r}),!0)),{get timeStamp(){return t}}},p=function(){return r||(r=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),r};e.getCLS=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=o("CLS",0),i=function(e){e.hadRecentInput||(n.value+=e.value,n.entries.push(e),t())},s=a("layout-shift",i);s&&(t=d(e,n,s,r),l((function(e){var r=e.isUnloading;s.takeRecords().map(i),r&&(n.isFinal=!0),t()})))},e.getFCP=function(e){var t,r=o("FCP"),n=f(),i=a("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<n.timeStamp&&(r.value=e.startTime,r.isFinal=!0,r.entries.push(e),t())}));i&&(t=d(e,r,i))},e.getFID=function(e){var t=o("FID"),r=f(),n=function(e){e.startTime<r.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,s())},i=a("first-input",n),s=d(e,t,i);i?l((function(){i.takeRecords().map(n),i.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,n){n.timeStamp<r.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e}],s())}))},e.getLCP=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=o("LCP"),i=f(),s=function(e){var r=e.startTime;r<i.timeStamp?(n.value=r,n.entries.push(e)):n.isFinal=!0,t()},c=a("largest-contentful-paint",s);if(c){t=d(e,n,c,r);var u=function(){n.isFinal||(c.takeRecords().map(s),n.isFinal=!0,t())};p().then(u),l(u,!0)}},e.getTTFB=function(e){var t,r=o("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var r in e)"navigationStart"!==r&&"toJSON"!==r&&(t[r]=Math.max(e[r]-e.navigationStart,0));return t}();r.value=r.delta=t.responseStart,r.entries=[t],r.isFinal=!0,e(r)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},Object.defineProperty(e,"__esModule",{value:!0})}(t)}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}},a=!0;try{e[n].call(o.exports,o,o.exports,r),a=!1}finally{a&&delete t[n]}return o.exports}return r.ab="//",r(599)}()}},function(e){e.O(0,[774,351],(function(){return t=5778,e(e.s=t);var t}));var t=e.O();_N_E=t}]);