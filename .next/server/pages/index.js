(()=>{var e={};e.id=405,e.ids=[405,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},3725:e=>{e.exports={container:"Footer_container__MaumR",container_p:"Footer_container_p__i3WCF"}},5535:e=>{e.exports={listLI:"Header_listLI__ch_cp"}},9532:e=>{e.exports={container:"Home_container__d256j",container_h1:"Home_container_h1__VY66g"}},4582:e=>{e.exports={container:"Layout_container__l2gjk"}},5735:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>_,default:()=>m,getServerSideProps:()=>v,getStaticPaths:()=>h,getStaticProps:()=>g,reportWebVitals:()=>b,routeModule:()=>w,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>y});var n={};r.r(n),r.d(n,{default:()=>p});var i=r(7093),o=r(5244),s=r(1323),a=r(1777),l=r.n(a),u=r(1988),d=r(997);require("next/head"),r(5675);var c=r(9532),f=r.n(c);function p(){return d.jsx("div",{className:f().container,children:d.jsx("h1",{className:f().container_h1,children:"Site about Heroes."})})}let m=(0,s.l)(n,"default"),g=(0,s.l)(n,"getStaticProps"),h=(0,s.l)(n,"getStaticPaths"),v=(0,s.l)(n,"getServerSideProps"),_=(0,s.l)(n,"config"),b=(0,s.l)(n,"reportWebVitals"),y=(0,s.l)(n,"unstable_getStaticProps"),x=(0,s.l)(n,"unstable_getStaticPaths"),P=(0,s.l)(n,"unstable_getStaticParams"),S=(0,s.l)(n,"unstable_getServerProps"),j=(0,s.l)(n,"unstable_getServerSideProps"),w=new i.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:n})},3686:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(167),i=r(8760),o=r(997),s=i._(r(6689)),a=n._(r(6405)),l=n._(r(6665)),u=r(1908),d=r(4706),c=r(6218);r(1558);let f=r(5469),p=n._(r(3293)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,i,o){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){let[t,r]=s.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:l,decoding:u,className:d,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:_,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:x,setShowAltText:P,onLoad:S,onError:j,...w}=e;return(0,o.jsx)("img",{...w,...h(f),loading:m,width:l,height:a,decoding:u,"data-nimg":_?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&g(e,p,b,y,x,v))},[r,p,b,y,x,j,v,t]),onLoad:e=>{g(e.currentTarget,p,b,y,x,v)},onError:e=>{P(!0),"empty"!==p&&x(!0),j&&j(e)}})});function _(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),n=(0,s.useContext)(c.ImageConfigContext),i=(0,s.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:l}=e,g=(0,s.useRef)(a);(0,s.useEffect)(()=>{g.current=a},[a]);let h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let[b,y]=(0,s.useState)(!1),[x,P]=(0,s.useState)(!1),{props:S,meta:j}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...S,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:P,ref:t}),j.priority?(0,o.jsx)(_,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2771:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},1908:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(1558);let n=r(7386),i=r(4706);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,u,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:v,height:_,fill:b=!1,style:y,onLoad:x,onLoadingComplete:P,placeholder:S="empty",blurDataURL:j,fetchPriority:w,layout:C,objectFit:O,objectPosition:E,lazyBoundary:I,lazyRoot:A,...M}=e,{imgConf:z,showAltText:R,blurComplete:k,defaultLoader:N}=t,G=z||i.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}let L=M.loader||N;delete M.loader,delete M.srcSet;let D="__next_img_default"in L;if(D){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let U="",F=s(v),H=s(_);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,j=j||e.blurDataURL,U=e.src,!b){if(F||H){if(F&&!H){let t=F/e.width;H=Math.round(e.height*t)}else if(!F&&H){let t=H/e.height;F=Math.round(e.width*t)}}else F=e.width,H=e.height}}let T=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,T=!1),a.unoptimized&&(f=!0),D&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(w="high");let q=s(h),W=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:E}:{},R?{}:{color:"transparent"},y),B=k||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:H,blurWidth:l,blurHeight:u,blurDataURL:j||"",objectFit:W.objectFit})+'")':'url("'+S+'")',V=B?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:B}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:s,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,s),d=l.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:l.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:o,width:l[d]})}}({config:a,src:d,unoptimized:f,width:F,quality:q,sizes:c,loader:L});return{props:{...M,loading:T?"lazy":m,fetchPriority:w,width:F,height:H,decoding:"async",className:g,style:{...W,...V},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},meta:{unoptimized:f,priority:p,placeholder:S,fill:b}}}},6665:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return g}});let n=r(167),i=r(8760),o=r(997),s=i._(r(6689)),a=n._(r(8747)),l=r(8039),u=r(9022),d=r(2771);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1558);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,s=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){s=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!s)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,s.useContext)(l.AmpStateContext),n=(0,s.useContext)(u.HeadManagerContext);return(0,o.jsx)(a.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7386:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:s}=e,a=n?40*n:t,l=i?40*i:r,u=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},4706:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},9267:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return a},default:function(){return l}});let n=r(167),i=r(1908),o=r(3686),s=n._(r(3293)),a=e=>{let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=o.Image},3293:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},8747:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(6689),i=()=>{},o=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function a(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1558:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1988:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var n=r(997);r(6764);var i=r(1664),o=r.n(i);let s=require("styled-components");var a=r.n(s),l=r(5535),u=r.n(l);let d=a().ul`
    display: flex;
    list-style: none;
    height: 60px;
    @media (max-width: 433px) {
        justify-content: center;
        li{
            margin: 0 5px;
        }
    }
`;function c(){return n.jsx(n.Fragment,{children:(0,n.jsxs)(d,{children:[n.jsx("li",{children:n.jsx(o(),{href:"/",className:u().listLI,children:"Home"})}),n.jsx("li",{children:n.jsx(o(),{href:"/Heroes",className:u().listLI,children:"Heroes"})}),n.jsx("li",{children:n.jsx(o(),{href:"/Contact",className:u().listLI,children:"Contact"})})]})})}var f=r(3725),p=r.n(f);function m(){return n.jsx("div",{className:p().container,children:n.jsx("p",{className:p().container_p,children:"Site created by Mateusz Walter. \xae"})})}var g=r(4582),h=r.n(g);function v({children:e}){return(0,n.jsxs)("div",{className:h().container,children:[n.jsx(c,{}),e,n.jsx(m,{})]})}let _=function({Component:e,pageProps:t}){return n.jsx(v,{children:n.jsx(e,{...t})})}},6764:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},9022:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},6218:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.ImageConfigContext},5675:(e,t,r)=>{r(9267)},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[348,777,664],()=>r(5735));module.exports=n})();