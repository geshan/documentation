/*! For license information please see 66bbed7b.a8006eba.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(9),a=(n(0),n(344)),i=n(356),c=n(350),s=(n(343),{last_modified_on:"2021-07-01",$schema:"/.meta/.schemas/guides.json",title:"Microservices",description:"How to deploy microservices with Qovery",author_github:"https://github.com/evoxmusic",tags:["type: guide","technology: qovery"]}),l={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Qovery pro, and extract the full potential of Qovery.",permalink:"/guides/advanced"}],coverLabel:"Microservices",description:"How to deploy microservices with Qovery",permalink:"/guides/advanced/microservices",readingTime:"3 min read",source:"@site/guides/advanced/microservices.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Microservices",truncated:!1,prevItem:{title:"Kubernetes - Network isolation with NetworkPolicy",permalink:"/guides/engineering/basic-network-isolation-in-kubernetes"},nextItem:{title:"Migrating application from Heroku to Qovery",permalink:"/guides/tutorial/migrate-webapp-from-heroku-to-qovery"}},u=[{value:"Communicate backend applications",id:"communicate-backend-applications",children:[]},{value:"Consume your API in your frondend application",id:"consume-your-api-in-your-frondend-application",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Your project grows and you need multiple backend applications to meet your needs? Are you building a fullstack application with backend, frontend, databases or other services?\nIn this guide you will learn how to set up multiple applications projects with Qovery."),Object(a.b)(c.a,{mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have already deployed an application with Qovery"))),Object(a.b)("p",null,"What differentiates Qovery from most of other similar platforms is its first-class support of microservices. At Qovery, your project can be easily\ncomposed of multiple applications. It's up to you to decide how to build your system, but Qovery enables you to easily and safely communicate between your backend applications, databases, and frontend websites."),Object(a.b)("h2",{id:"communicate-backend-applications"},"Communicate backend applications"),Object(a.b)("p",null,"If your backend is made out of more than one application, very often they will need to communicate with each other. The following steps will show you how to set up backend microservices communication at Qovery:"),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"This guide assumes your applications are deployed. If you don't know how to deploy your app, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/getting-started/deploy-your-first-application/#step-by-step-tutorial"}),"check our guide"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Assuming you have two backend applications:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"firstapp")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"secondapp"))),Object(a.b)("p",null,"You can send requests from one application to another using values injected automatically by Qovery into your ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"environment variables"),". "),Object(a.b)("p",null,"Examplary Node.js code snippet:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const axios = require('axios');\nconst secondAppAddress = \"http://\" + process.env.QOVERY_FIRSTAPP_HOST\n\naxios.get(secondAppAddress + '/api/users')\n  .then(response => {\n    console.log(response.data);\n  })\n  .catch(error => {\n    console.log(error);\n  });\n")),Object(a.b)("p",null,"As you can see in the example, you can communicate with your second application using Qovery-injected ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/#built-in-variables"}),"built-in environment variable"),".\nThe second application does not have to be publicly accessible - your applications communicate safely inside the internal network."),Object(a.b)("p",null,"To target another application in your environment, use the built-in environment variables following this naming pattern:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_YOUR_APP_NAME_HOST")," where ",Object(a.b)("inlineCode",{parentName:"p"},"YOUR_APP_NAME")," is your application name.")))),Object(a.b)("h2",{id:"consume-your-api-in-your-frondend-application"},"Consume your API in your frondend application"),Object(a.b)("p",null,"Qovery allows you to host your backend applications, databases, but also frontend apps like React/Angular/Vue SPAs or server-side rendered UIs.\nThe following steps will show you how to consume your API in your frontend application."),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Deploy your frontend application. If you don't know how to do it, you can take a look on the guide ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.qovery.com/guides/tutorial/how-to-deploy-nuxtjs/"}),"how to delpoy Nuxt.js application."))),Object(a.b)("li",null,Object(a.b)("p",null,"Expose your backend API."),Object(a.b)("p",null,"To be able to consume your API from your frontend application, your backend API needs to be exposed publicly. To do so, navigate to your backend application settings:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/microservices/microservices-1.png",alt:"Microservices"})),Object(a.b)("p",null,"And declare a port of your server:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/microservices/microservices-2.png",alt:"Microservices"})),Object(a.b)("p",null,"By default declaring a port exposes your app to public access (you can change it in port's advanced settings).")),Object(a.b)("li",null,Object(a.b)("p",null,"Setup API address in your frontend application."),Object(a.b)("p",null,"After exposing your application, you can get it's address in your frontend application using ",Object(a.b)("inlineCode",{parentName:"p"},"process.env")," as follows (Nuxt.js example):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"export default {\n  env: {\n    apiUrl: process.env.QOVERY_YOUR_APP_NAME_URL || 'http://localhost:3000'\n  }\n}\n")),Object(a.b)("p",null,"Now, you can configure your HTTP client in the frontend application to target your backend API:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import axios from 'axios'\n\nexport default axios.create({\n  baseURL: process.env.baseUrl\n})\n"))))))}b.isMDXComponent=!0},342:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},343:function(e,t,n){"use strict";n(346);var r=n(0),o=n.n(r),a=n(342),i=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||s))}),t)}},344:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},346:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(351)}),n(75)("fill")},347:function(e,t,n){var r=n(25).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},350:function(e,t,n){"use strict";n(347);var r=n(0),o=n.n(r),a=n(343);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},351:function(e,t,n){"use strict";var r=n(27),o=n(76),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,n),s=i>2?arguments[2]:void 0,l=void 0===s?n:o(s,n);l>c;)t[c++]=e;return t}},353:function(e,t,n){"use strict";var r=n(357),o=n(53);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},356:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(342),n(353)),i=n.n(a);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},l="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(s),u=Object(r.useState)(null),p=u[0],b=u[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:l,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},357:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);