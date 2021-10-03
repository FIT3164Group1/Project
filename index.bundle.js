!function(){"use strict";var e,r,t,n,a,c,o,i,s={648:function(e,r,t){var n=t(942),a=t(324),c=t(294),o=t(697),i=t.n(o),s=t(893),d=function(e){var r=e.images,t=e.imageClickHandler,n=e.selectedImage;return(0,s.jsx)("div",{className:"gap-2 p-5 carousel carousel-center rounded-box",children:r.map((function(e,r){var a=e.path,c=e.type;return(0,s.jsx)("div",{className:"carousel-item",children:(0,s.jsxs)("div",{className:" indicator",children:[(0,s.jsx)("div",{className:"mb-6 indicator-item indicator-bottom indicator-center badge text-black shadow-lg ".concat("MSI"==c?"bg-warning":"badge-accent border-black"),children:c}),(0,s.jsx)("img",{className:"rounded-lg shadow-lg ".concat((null==n?void 0:n.index)!=r?"":"MSI"==c?"border-2 border-warning":"border-2 border-accent"),src:a,onClick:t({index:r,image:e}),id:r})]})},r)}))})};d.propTypes={images:i().array.isRequired,imageClickHandler:i().func.isRequired,selectedImage:i().object};var l=d;function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p=function(e){var r=(0,c.useState)(null),t=(0,a.Z)(r,2),n=t[0],o=t[1],i=function(e){"BUTTON"!=e.target.tagName&&"IMG"!=e.target.tagName&&o(null)};return(0,c.useEffect)((function(){return document.addEventListener("mousedown",i,!1),function(){document.removeEventListener("mousedown",i,!1)}}),[i]),(0,s.jsx)("div",{className:"card text-base-content",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("div",{className:"card-title",children:"Classify"}),(0,s.jsx)(l,f(f({},e),{},{selectedImage:n,imageClickHandler:function(e){return function(r){var t=e.index;r.preventDefault(),o(e),document.getElementById("".concat(t)).scrollIntoView({behavior:"smooth"})}}})),(0,s.jsx)("div",{className:"justify-center card-actions",children:(0,s.jsx)("button",{className:"w-32 btn btn-med ".concat(null==n?"btn-disabled":""),id:"classifyButton",children:"Classify"})})]})})},h=t(861),m=t(757),v=t.n(m),b=t(965),x=function(e){return new Promise((function(r,t){try{var n=new Image;n.onload=function(){var e=n.naturalWidth,t=n.naturalHeight;return window.URL.revokeObjectURL(n.src),r({width:e,height:t})},n.src=window.URL.createObjectURL(e)}catch(e){return t(e)}}))},g=function(){var e=(0,h.Z)(v().mark((function e(r){var t,n,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.a)(r);case 2:if(!e.sent){e.next=16;break}return e.next=5,x(r);case 5:if(t=e.sent,n=t.width,a=t.height,224!=n||224!=a){e.next=12;break}return e.abrupt("return",r);case 12:return console.log("FILE: ".concat(r.name," \nImage file has incorrect dimensions. Please ensure your image dimensions are 224px x 224px.")),e.abrupt("return",!1);case 14:e.next=18;break;case 16:return console.log("FILE: ".concat(r.name," \nUploaded file is not a valid image file.")),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),y=function(){var e=(0,h.Z)(v().mark((function e(r){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(r.map(g));case 2:return t=e.sent,e.abrupt("return",t.filter((function(e){return 0!=e})));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),j=function(){var e=(0,c.useState)(null),r=(0,a.Z)(e,2),t=r[0],n=r[1],o=function(){var e=(0,h.Z)(v().mark((function e(r){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),t=Array.from(r.target.files),e.next=4,y(t);case 4:return e.sent.length>0?n(!0):n(!1),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{className:"card text-base-content",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("div",{className:"card-title",children:"Classify"}),(0,s.jsxs)("div",{className:"form-control",children:[(0,s.jsxs)("label",{className:"flex flex-col items-center w-64 px-4 py-6 tracking-wide uppercase bg-transparent border rounded-lg shadow-lg cursor-pointer border-primary text-base-content hover:bg-primary hover:text-base-100",children:[(0,s.jsx)("svg",{className:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"})}),(0,s.jsx)("span",{className:"mt-2 text-base leading-normal",children:"Upload your image"}),(0,s.jsx)("input",{multiple:!0,type:"file",className:"hidden",onChange:o})]}),(0,s.jsx)("div",{className:"justify-center card-actions",children:(0,s.jsx)("button",{className:"w-32 btn btn-med ".concat(1!=t?"btn-disabled":"btn-secondary"),id:"classifyButton",children:"Classify"})})]})]})})};function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var N=function(e){var r=(0,c.useState)("test"),t=(0,a.Z)(r,2),o=t[0],i=t[1];return(0,s.jsx)("div",{className:"mt-5",children:(0,s.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,s.jsxs)("div",{className:"items-center bg-transparent tabs tabs-boxed",children:[(0,s.jsx)("div",{className:"z-10 p-2 bg-white shadow-2xl md:pr-5 rounded-xl",children:(0,s.jsx)("a",{className:"tab ".concat("upload"==o?"tab-active shadow-lg":""),onClick:function(){i("upload")},children:"Upload image"})}),(0,s.jsx)("div",{className:"z-20 justify-center p-2 -m-2 bg-white shadow rounded-xl",children:(0,s.jsx)("a",{className:"tab tab-lg ".concat("test"==o?"tab-active shadow-lg":""),onClick:function(){i("test")},children:"Try Me!"})}),(0,s.jsx)("div",{className:"z-10 p-2 bg-white shadow-2xl md:pl-5 rounded-xl",children:(0,s.jsx)("a",{className:"tab ".concat("validate"==o?"tab-active shadow-lg":""),onClick:function(){i("validate")},children:"Validate accuracy"})})]}),function(e,r){switch(e){case"upload":return(0,s.jsx)(j,{});case"test":return(0,s.jsx)(p,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},r))}}(o,e)]})})},O=(t(931),t(690));function k(e){(0,c.useEffect)((function(){(0,O.themeChange)(!1)}));var r=e.home,t=e.about,n=e.contact;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"px-6 pt-10 pb-6",children:(0,s.jsx)("hr",{className:"border-base-100"})}),(0,s.jsxs)("footer",{className:"px-10 pb-5 footer footer-center text-base-100 gap-y-2",children:[(0,s.jsxs)("div",{className:"grid grid-flow-col gap-4 text-center ",children:[(0,s.jsx)("a",{className:"link link-hover",href:r,children:"Home"}),(0,s.jsx)("a",{className:"link link-hover",href:t,children:"About the Project"}),(0,s.jsx)("a",{className:"link link-hover",href:n,children:"Contact"}),(0,s.jsx)("a",{className:"link link-hover",target:"_blank",href:"https://github.com/FIT3164Group1/Project",rel:"noreferrer",children:"Project Repository"})]}),(0,s.jsxs)("div",{className:"m-4 dropdown",children:[(0,s.jsx)("div",{tabIndex:"0",className:"m-1 btn btn-ghost",children:"CHANGE THEME"}),(0,s.jsx)("div",{className:"h-32 mt-16 overflow-y-auto shadow-2xl top-px dropdown-content w-52 rounded-b-box text-base-content",children:(0,s.jsxs)("ul",{className:"p-4 menu compact bg-base-100",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{tabIndex:"0","data-set-theme":"light","data-act-class":"active",children:"🌝 light"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{tabIndex:"0","data-set-theme":"dark","data-act-class":"active",children:"🌚 dark"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{tabIndex:"0","data-set-theme":"black","data-act-class":"active",children:"🏴 black"})})]})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Copyright © 2021 - All rights reserved by the development team."}),(0,s.jsx)("a",{className:"text-center link link-hover",href:"https://coopercorbett.com",target:"_blank",rel:"noreferrer",children:"Cooper Corbett"}),(0,s.jsx)("p",{className:"text-center",children:"Qile Wan"}),(0,s.jsx)("p",{className:"text-center",children:"Andrew Cao"}),(0,s.jsx)("p",{className:"text-center",children:"Lewis Ha"})]})]})]})}k.propTypes={home:i().string.isRequired,about:i().string.isRequired,contact:i().string.isRequired};var E=k,I=t(85),_=t(279),P=t(394),C=t(328),D=t(672),S=t(553),H=t(671),A=t(144),M=t(340),q=t(575),R=t(120);var T=function(e){(0,M.Z)(a,e);var r,t,n=(r=a,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,R.Z)(r);if(t){var a=(0,R.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,q.Z)(this,e)});function a(){return(0,H.Z)(this,a),n.apply(this,arguments)}return(0,A.Z)(a,[{key:"render",value:function(){var e=this.props,r=e.home,t=e.about,n=e.contact;return(0,s.jsx)("div",{className:"p-3",children:(0,s.jsxs)("div",{className:"flex justify-between shadow-lg navbar bg-neutral text-neutral-content rounded-box ",children:[(0,s.jsx)("div",{className:"hidden px-2 mx-2 lg:flex",children:(0,s.jsx)("a",{className:"text-lg font-bold",href:r,children:"Gastro-intestinal Cancer Classifier"})}),(0,s.jsx)("div",{className:"flex-grow px-1 mx-1  md:px-2 md:mx-2",children:(0,s.jsxs)("div",{className:"flex items-stretch",children:[(0,s.jsx)("a",{className:"px-1 btn btn-ghost btn-md rounded-btn md:px-3",href:r,children:"Home"}),(0,s.jsx)("a",{className:"px-1 md:px-3 btn btn-ghost btn-md rounded-btn",href:t,children:"About the Project"}),(0,s.jsx)("a",{className:"px-1 md:px-3 btn btn-ghost btn-md rounded-btn",href:n,children:"Contact"})]})}),(0,s.jsx)("div",{tabIndex:"0",className:"justify-end px-1 mx-1 md:px-2 md:mx-2",children:(0,s.jsx)("button",{className:"fill-current btn btn-square btn-ghost text-neutral-content",children:(0,s.jsx)("a",{href:"https://github.com/FIT3164Group1/Project",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current text-neutral-content",children:(0,s.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})})})]})})}}]),a}(c.Component);T.propTypes={home:i().string.isRequired,about:i().string.isRequired,contact:i().string.isRequired};var U=T,Z=t(523);function B(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?B(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.n(Z)().polyfill();var F={home:"#",about:"about.html",contact:"contact.html",images:[{path:I,type:"MSI"},{path:C,type:"MSS"},{path:_,type:"MSI"},{path:D,type:"MSS"},{path:P,type:"MSI"},{path:S,type:"MSS"}]},G=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(U,L({},F)),(0,s.jsx)("div",{className:"flex flex-col items-center ",children:(0,s.jsxs)("div",{className:"md:w-4/5",children:[(0,s.jsxs)("div",{className:"card text-base-content",children:[(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("div",{className:"mb-5 text-center card-title",children:"Gastro-intestinal Cancer Classification"}),(0,s.jsxs)("div",{className:"flex flex-col gap-3 md:flex-row",children:[(0,s.jsx)("div",{className:"w-full md:w-1/2",children:(0,s.jsx)("div",{className:"shadow-2xl card bordered",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("div",{className:"text-center card-title",children:(0,s.jsx)("div",{className:"p-5 text-2xl badge badge-primary",children:"Goal"})}),(0,s.jsx)("p",{children:"Utilise our cancer prediction model with your own histological image."})]})})}),(0,s.jsx)("div",{className:"w-full md:w-1/2",children:(0,s.jsx)("div",{className:"shadow-2xl card bordered",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("div",{className:"text-center card-title",children:(0,s.jsx)("div",{className:"p-5 text-2xl badge badge-secondary",children:"Strategy"})}),(0,s.jsx)("p",{children:"We create a classfication model to identify between the two possible categories MSS and MSIMUS (MSI) of cancer."})]})})})]})]}),(0,s.jsx)("div",{className:"px-6",children:(0,s.jsx)("hr",{className:"border-base-100"})})]}),(0,s.jsx)(N,L({},F)),(0,s.jsx)(E,L({},F))]})})]})},z=t(935),V=document.getElementById("root");z.render((0,s.jsx)(G,{}),V)},931:function(e,r,t){var n=t(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},85:function(e,r,t){e.exports=t.p+"images/62dd98a5496e2e5a6ec5.png"},279:function(e,r,t){e.exports=t.p+"images/b0245ebfbc88a7e8d4a4.png"},394:function(e,r,t){e.exports=t.p+"images/0ba60623209ca09f94cd.png"},328:function(e,r,t){e.exports=t.p+"images/5db75c449110771dfa0c.png"},672:function(e,r,t){e.exports=t.p+"images/69f7e8abd14788e9375d.png"},553:function(e,r,t){e.exports=t.p+"images/160df18c82e918035c63.png"}},d={};function l(e){var r=d[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var t=d[e]={id:e,exports:{}};try{var n={id:e,module:t,factory:s[e],require:l};l.i.forEach((function(e){e(n)})),t=n.module,n.factory.call(t.exports,t,t.exports,n.require)}catch(e){throw t.error=e,e}return t.exports}l.m=s,l.c=d,l.i=[],e=[],l.O=function(r,t,n,a){if(!t){var c=1/0;for(d=0;d<e.length;d++){t=e[d][0],n=e[d][1],a=e[d][2];for(var o=!0,i=0;i<t.length;i++)(!1&a||c>=a)&&Object.keys(l.O).every((function(e){return l.O[e](t[i])}))?t.splice(i--,1):(o=!1,a<c&&(c=a));if(o){e.splice(d--,1);var s=n();void 0!==s&&(r=s)}}return r}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[t,n,a]},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,{a:r}),r},l.d=function(e,r){for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.hu=function(e){return e+"."+l.h()+".hot-update.js"},l.miniCssF=function(e){return"styles.css"},l.hmrF=function(){return"index."+l.h()+".hot-update.json"},l.h=function(){return"1df407f13ba4d2e0fdaa"},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r={},t="fit3164-cnn-website:",l.l=function(e,n,a,c){if(r[e])r[e].push(n);else{var o,i;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+a){o=u;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",t+a),o.src=e),r[e]=[n];var f=function(t,n){o.onerror=o.onload=null,clearTimeout(p);var a=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),i&&document.head.appendChild(o)}},l.j=826,function(){var e,r,t,n,a={},c=l.c,o=[],i=[],s="idle";function d(e){s=e;for(var r=[],t=0;t<i.length;t++)r[t]=i[t].call(null,e);return Promise.all(r)}function u(e){if(0===r.length)return e();var t=r;return r=[],Promise.all(t).then((function(){return u(e)}))}function f(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return d("check").then(l.hmrM).then((function(n){return n?d("prepare").then((function(){var a=[];return r=[],t=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,r){return l.hmrC[r](n.c,n.r,n.m,e,t,a),e}),[])).then((function(){return u((function(){return e?h(e):d("ready").then((function(){return a}))}))}))})):d(m()?"ready":"idle").then((function(){return null}))}))}function p(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=t.map((function(r){return r(e)}));t=void 0;var a=r.map((function(e){return e.error})).filter(Boolean);if(a.length>0)return d("abort").then((function(){throw a[0]}));var c=d("dispose");r.forEach((function(e){e.dispose&&e.dispose()}));var o,i=d("apply"),s=function(e){o||(o=e)},l=[];return r.forEach((function(e){if(e.apply){var r=e.apply(s);if(r)for(var t=0;t<r.length;t++)l.push(r[t])}})),Promise.all([c,i]).then((function(){return o?d("fail").then((function(){throw o})):n?h(e).then((function(e){return l.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):d("idle").then((function(){return l}))}))}function m(){if(n)return t||(t=[]),Object.keys(l.hmrI).forEach((function(e){n.forEach((function(r){l.hmrI[e](r,t)}))})),n=void 0,!0}l.hmrD=a,l.i.push((function(h){var m,v,b,x,g=h.module,y=function(t,n){var a=c[n];if(!a)return t;var i=function(r){if(a.hot.active){if(c[r]){var i=c[r].parents;-1===i.indexOf(n)&&i.push(n)}else o=[n],e=r;-1===a.children.indexOf(r)&&a.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+n),o=[];return t(r)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var f in t)Object.prototype.hasOwnProperty.call(t,f)&&"e"!==f&&Object.defineProperty(i,f,l(f));return i.e=function(e){return function(e){switch(s){case"ready":return d("prepare"),r.push(e),u((function(){return d("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(t.e(e))},i}(h.require,h.id);g.hot=(m=h.id,v=g,x={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:b=e!==m,_requireSelf:function(){o=v.parents.slice(),e=b?void 0:m,l(m)},active:!0,accept:function(e,r,t){if(void 0===e)x._selfAccepted=!0;else if("function"==typeof e)x._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)x._acceptedDependencies[e[n]]=r||function(){},x._acceptedErrorHandlers[e[n]]=t;else x._acceptedDependencies[e]=r||function(){},x._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)x._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)x._declinedDependencies[e[r]]=!0;else x._declinedDependencies[e]=!0},dispose:function(e){x._disposeHandlers.push(e)},addDisposeHandler:function(e){x._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=x._disposeHandlers.indexOf(e);r>=0&&x._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":t=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,t)})),d("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,t)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:f,apply:p,status:function(e){if(!e)return s;i.push(e)},addStatusHandler:function(e){i.push(e)},removeStatusHandler:function(e){var r=i.indexOf(e);r>=0&&i.splice(r,1)},data:a[m]},e=void 0,x),g.parents=o,g.children=[],o=[],h.require=y})),l.hmrC={},l.hmrI={}}(),function(){var e;l.g.importScripts&&(e=l.g.location+"");var r=l.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e}(),n=function(e,r,t,n){var a=document.createElement("link");return a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(c){if(a.onerror=a.onload=null,"load"===c.type)t();else{var o=c&&("load"===c.type?"missing":c.type),i=c&&c.target&&c.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=i,a.parentNode.removeChild(a),n(s)}},a.href=r,document.head.appendChild(a),a},a=function(e,r){for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(o=t[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===r))return o}var c=document.getElementsByTagName("style");for(n=0;n<c.length;n++){var o;if((a=(o=c[n]).getAttribute("data-href"))===e||a===r)return o}},c=[],o=[],i=function(e){return{dispose:function(){for(var e=0;e<c.length;e++){var r=c[e];r.parentNode&&r.parentNode.removeChild(r)}c.length=0},apply:function(){for(var e=0;e<o.length;e++)o[e].rel="stylesheet";o.length=0}}},l.hmrC.miniCss=function(e,r,t,s,d,u){d.push(i),e.forEach((function(e){var r=l.miniCssF(e),t=l.p+r,i=a(r,t);i&&s.push(new Promise((function(r,a){var s=n(e,t,(function(){s.as="style",s.rel="preload",r()}),a);c.push(i),o.push(s)})))}))},function(){var e,r,t,n,a=l.hmrS_jsonp=l.hmrS_jsonp||{826:0},c={};function o(e){return new Promise((function(r,t){c[e]=r;var n=l.p+l.hu(e),a=new Error;l.l(n,(function(r){if(c[e]){c[e]=void 0;var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading hot update chunk "+e+" failed.\n("+n+": "+o+")",a.name="ChunkLoadError",a.type=n,a.request=o,t(a)}}))}))}function i(c){function o(e){for(var r=[e],t={},n=r.map((function(e){return{chain:[e],id:e}}));n.length>0;){var a=n.pop(),c=a.id,o=a.chain,s=l.c[c];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:c};if(s.hot._main)return{type:"unaccepted",chain:o,moduleId:c};for(var d=0;d<s.parents.length;d++){var u=s.parents[d],f=l.c[u];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:o.concat([u]),moduleId:c,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[c]?(t[u]||(t[u]=[]),i(t[u],[c])):(delete t[u],r.push(u),n.push({chain:o.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}l.f&&delete l.f.jsonpHmr,e=void 0;var s={},d=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(l.o(r,p)){var h,m=r[p],v=!1,b=!1,x=!1,g="";switch((h=m?o(p):{type:"disposed",moduleId:p}).chain&&(g="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+g));break;case"declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+g));break;case"unaccepted":c.onUnaccepted&&c.onUnaccepted(h),c.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+g));break;case"accepted":c.onAccepted&&c.onAccepted(h),b=!0;break;case"disposed":c.onDisposed&&c.onDisposed(h),x=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(b)for(p in u[p]=m,i(d,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,p)&&(s[p]||(s[p]=[]),i(s[p],h.outdatedDependencies[p]));x&&(i(d,[h.moduleId]),u[p]=f)}r=void 0;for(var y,j=[],w=0;w<d.length;w++){var N=d[w],O=l.c[N];O&&(O.hot._selfAccepted||O.hot._main)&&u[N]!==f&&!O.hot._selfInvalidated&&j.push({module:N,require:O.hot._requireSelf,errorHandler:O.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete a[e]})),t=void 0;for(var r,n=d.slice();n.length>0;){var c=n.pop(),o=l.c[c];if(o){var i={},u=o.hot._disposeHandlers;for(w=0;w<u.length;w++)u[w].call(null,i);for(l.hmrD[c]=i,o.hot.active=!1,delete l.c[c],delete s[c],w=0;w<o.children.length;w++){var f=l.c[o.children[w]];f&&(e=f.parents.indexOf(c))>=0&&f.parents.splice(e,1)}}}for(var p in s)if(l.o(s,p)&&(o=l.c[p]))for(y=s[p],w=0;w<y.length;w++)r=y[w],(e=o.children.indexOf(r))>=0&&o.children.splice(e,1)},apply:function(e){for(var r in u)l.o(u,r)&&(l.m[r]=u[r]);for(var t=0;t<n.length;t++)n[t](l);for(var a in s)if(l.o(s,a)){var o=l.c[a];if(o){y=s[a];for(var i=[],f=[],p=[],h=0;h<y.length;h++){var m=y[h],v=o.hot._acceptedDependencies[m],b=o.hot._acceptedErrorHandlers[m];if(v){if(-1!==i.indexOf(v))continue;i.push(v),f.push(b),p.push(m)}}for(var x=0;x<i.length;x++)try{i[x].call(null,y)}catch(r){if("function"==typeof f[x])try{f[x](r,{moduleId:a,dependencyId:p[x]})}catch(t){c.onErrored&&c.onErrored({type:"accept-error-handler-errored",moduleId:a,dependencyId:p[x],error:t,originalError:r}),c.ignoreErrored||(e(t),e(r))}else c.onErrored&&c.onErrored({type:"accept-errored",moduleId:a,dependencyId:p[x],error:r}),c.ignoreErrored||e(r)}}}for(var g=0;g<j.length;g++){var w=j[g],N=w.module;try{w.require(N)}catch(r){if("function"==typeof w.errorHandler)try{w.errorHandler(r,{moduleId:N,module:l.c[N]})}catch(t){c.onErrored&&c.onErrored({type:"self-accept-error-handler-errored",moduleId:N,error:t,originalError:r}),c.ignoreErrored||(e(t),e(r))}else c.onErrored&&c.onErrored({type:"self-accept-errored",moduleId:N,error:r}),c.ignoreErrored||e(r)}}return d}}}self.webpackHotUpdatefit3164_cnn_website=function(e,t,a){for(var o in t)l.o(t,o)&&(r[o]=t[o]);a&&n.push(a),c[e]&&(c[e](),c[e]=void 0)},l.hmrI.jsonp=function(e,a){r||(r={},n=[],t=[],a.push(i)),l.o(r,e)||(r[e]=l.m[e])},l.hmrC.jsonp=function(c,s,d,u,f,p){f.push(i),e={},t=s,r=d.reduce((function(e,r){return e[r]=!1,e}),{}),n=[],c.forEach((function(r){l.o(a,r)&&void 0!==a[r]&&(u.push(o(r)),e[r]=!0)})),l.f&&(l.f.jsonpHmr=function(r,t){e&&!l.o(e,r)&&l.o(a,r)&&void 0!==a[r]&&(t.push(o(r)),e[r]=!0)})},l.hmrM=function(){if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((function(e){if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},l.O.j=function(e){return 0===a[e]};var s=function(e,r){var t,n,c=r[0],o=r[1],i=r[2],s=0;if(c.some((function(e){return 0!==a[e]}))){for(t in o)l.o(o,t)&&(l.m[t]=o[t]);if(i)var d=i(l)}for(e&&e(r);s<c.length;s++)n=c[s],l.o(a,n)&&a[n]&&a[n][0](),a[c[s]]=0;return l.O(d)},d=self.webpackChunkfit3164_cnn_website=self.webpackChunkfit3164_cnn_website||[];d.forEach(s.bind(null,0)),d.push=s.bind(null,d.push.bind(d))}();var u=l.O(void 0,[736],(function(){return l(648)}));u=l.O(u)}();