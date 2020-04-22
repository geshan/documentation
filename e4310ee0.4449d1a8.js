/*! For license information please see e4310ee0.4449d1a8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{242:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(258)),i=n(277),c=n(266),l=n(261),s={last_modified_on:"2020-04-22",$schema:"/.meta/.schemas/guides.json",title:"Setting custom domain",description:"How to set and use your own domain",series_position:3,author_github:"https://github.com/evoxmusic",tags:["type: guide"]},u={categories:[{name:"getting-started",title:"Getting Started",description:"Take Qovery from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Setting custom domain",description:"How to set and use your own domain",permalink:"/guides/getting-started/setting-custom-domain",readingTime:"3 min read",seriesPosition:3,source:"@site/guides/getting-started/setting-custom-domain.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"}],title:"Setting custom domain",truncated:!1,prevItem:{title:"Adding a database",permalink:"/guides/getting-started/adding-a-database"},nextItem:{title:"Debugging",permalink:"/guides/getting-started/debugging"}},d=[{value:"Tutorial",id:"tutorial",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Ready",id:"ready",children:[]}]}],m={rightToc:d};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Every application on Qovery automatically gets a free ",Object(o.b)("inlineCode",{parentName:"p"},"qovery.io")," address which does not change."),Object(o.b)("p",null,"But you can also bring your own domains to Qovery easily. We handle TLS/SSL certificate creation and renewal, as well as automatic HTTP to HTTPS redirects for all your custom domains. Let\u2019s learn how to set up your domains on Qovery!"),Object(o.b)(c.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have installed the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/guides/getting-started/deploy-your-first-application/"}),"Qovery CLI")),Object(o.b)("li",{parentName:"ul"},"You have a domain"),Object(o.b)("li",{parentName:"ul"},"You have the permission to add a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/CNAME_record"}),"CNAME")," record to your domain"),Object(o.b)("li",{parentName:"ul"},"You have deployed your application by using the ",Object(o.b)("inlineCode",{parentName:"li"},"master")," Git branch"))),Object(o.b)(l.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"A custom domain is bound to a Git branch - ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"Read more")," to understand the concepts behind.")),Object(o.b)("h2",{id:"tutorial"},"Tutorial"),Object(o.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Add to your ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," the following lines"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml" {4-6}',title:'".qovery.yml"',"{4-6}":!0}),"...\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.domain.tld\n  routes:\n  - application_name: simple-example-node-with-postgresql\n    paths:\n    - /\n")),Object(o.b)("p",null,"Save the changes by committing and pushing your changes"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ git add .qovery.yml\n$ git commit -m "Add my custom domain into .qovery.yml"\n$ git push -u origin master\n'))),Object(o.b)("li",null,Object(o.b)("h3",{id:"validation"},"Validation"),Object(o.b)("p",null,"Qovery needs to validate that the domain is yours. To do it, you need to target a CNAME that we generate for your custom domain. Get the target CNAME by executing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="List all domains"',title:'"List',all:!0,'domains"':!0}),"qovery domain list\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH | DOMAIN                                      | STATUS             | VALIDATION DOMAIN    | ROUTER NAME\nmaster | node.deimos.fr                              | validation pending | xxx-yyy-zzz.acme.com | main\nmaster | https://main-yenr7erjbs87dk4m-gtw.qovery.io | live               | none                 | main\n")),Object(o.b)("p",null,"At this point, you need to add a CNAME record that is targeting the validation domain ",Object(o.b)("inlineCode",{parentName:"p"},"xxx-yyy-zzz.acme.com")),Object(o.b)(l.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"You need to go on the web interface provided by your domain provider and create new domain record of type CNAME"))),Object(o.b)("li",null,Object(o.b)("h3",{id:"ready"},"Ready"),Object(o.b)("p",null,"Once you\u2019ve added your domain, it can take a few minutes to be verified on Qovery. You\u2019ll see the domain verification status in green once everything is good to go."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="List all domains"',title:'"List',all:!0,'domains"':!0}),"qovery domain list\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH | DOMAIN                                      | STATUS | VALIDATION DOMAIN    | ROUTER NAME\nmaster | node.deimos.fr                              | live   | xxx-yyy-zzz.acme.com | main\nmaster | https://main-yenr7erjbs87dk4m-gtw.qovery.io | live   | none                 | main\n")),Object(o.b)("p",null,"You\u2019re all set! Your custom domains will start pointing to your application, and we\u2019ll continue to issue and renew SSL certificates for them as long as you\u2019re using Qovery.")))),Object(o.b)("p",null,"As always, if you run into any trouble, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"find us on chat")," we\u2019ll be glad to help out."))}p.isMDXComponent=!0},257:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},258:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?a.a.createElement(b,c({ref:t},s,{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},261:function(e,t,n){"use strict";n(264);var r=n(0),a=n.n(r),o=n(257),i=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},264:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(268)}),n(75)("fill")},265:function(e,t,n){var r=n(28).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},266:function(e,t,n){"use strict";n(265);var r=n(0),a=n.n(r),o=n(261);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},268:function(e,t,n){"use strict";var r=n(25),a=n(76),o=n(24);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:a(l,n);s>c;)t[c++]=e;return t}},269:function(e,t,n){"use strict";var r=n(281),a=n(53);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},277:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(257),n(269)),i=n.n(o);n(137);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),u=Object(r.useState)(null),d=u[0],m=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!d&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return m("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==d&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},281:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);