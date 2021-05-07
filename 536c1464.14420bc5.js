/*! For license information please see 536c1464.14420bc5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),o=(a(0),a(346)),i=a(348),l=(a(353),a(349)),c={last_modified_on:"2021-04-28",$schema:"/.meta/.schemas/guides.json",title:"How to deploy Strapi with PostgreSQL",description:"This tutorial show you how to deploy Strapi with PostgreSQL in a few steps",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","framework: strapi","database: postgresql"],hide_pagination:!0},s={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to deploy Strapi with PostgreSQL",description:"This tutorial show you how to deploy Strapi with PostgreSQL in a few steps",permalink:"/guides/tutorial/how-to-deploy-strapi-with-postgresql",readingTime:"3 min read",source:"@site/guides/tutorial/how-to-deploy-strapi-with-postgresql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: strapi",permalink:"/guides/tags/framework-strapi"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"How to deploy Strapi with PostgreSQL",truncated:!1,prevItem:{title:"How to deploy NuxtJS",permalink:"/guides/tutorial/how-to-deploy-nuxtjs"},nextItem:{title:"How to write a Dockerfile",permalink:"/guides/tutorial/how-to-write-a-dockerfile"}},p=[{value:"Deploying with the web interface",id:"deploying-with-the-web-interface",children:[{value:"1. Create a Qovery Account",id:"1-create-a-qovery-account",children:[]},{value:"2. Create a project",id:"2-create-a-project",children:[]},{value:"3. Add your Strapi app",id:"3-add-your-strapi-app",children:[]},{value:"4. Add a PostgreSQL database",id:"4-add-a-postgresql-database",children:[]},{value:"5. Add a storage",id:"5-add-a-storage",children:[]},{value:"6. Deploy",id:"6-deploy",children:[]}]},{value:"Deploying with the CLI",id:"deploying-with-the-cli",children:[{value:"1. Create a Qovery Account",id:"1-create-a-qovery-account-1",children:[]},{value:"2. Add a .qovery.yml File",id:"2-add-a-qoveryyml-file",children:[]},{value:"3. Add a Dockerfile (optional)",id:"3-add-a-dockerfile-optional",children:[]},{value:"4. Deploy",id:"4-deploy",children:[]}]},{value:"Scaling",id:"scaling",children:[]}],u={rightToc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This tutorial is linked to this ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/qovery.html"}),"Strapi tutorial"))),Object(o.b)("p",null,"This is a step-by-step guide for deploying a Strapi project on Qovery."),Object(o.b)("h2",{id:"deploying-with-the-web-interface"},"Deploying with the web interface"),Object(o.b)("h3",{id:"1-create-a-qovery-account"},"1. Create a Qovery Account"),Object(o.b)("p",null,"Visit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"the Qovery dashboard")," to create an account if you don't already have one."),Object(o.b)("h3",{id:"2-create-a-project"},"2. Create a project"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"create a project")," button and give a name to your project."),Object(o.b)("li",{parentName:"ul"},"Click on ",Object(o.b)("strong",{parentName:"li"},"next"),".")),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"  One project can have multiple apps running. This is convenient to group your backend, frontend, database etc.")),Object(o.b)("h3",{id:"3-add-your-strapi-app"},"3. Add your Strapi app"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"create an application")," button and select your Github or Gitlab repository where your Strapi app is located."),Object(o.b)("li",{parentName:"ul"},"Click on ",Object(o.b)("strong",{parentName:"li"},"next"),".")),Object(o.b)("h3",{id:"4-add-a-postgresql-database"},"4. Add a PostgreSQL database"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click on add a ",Object(o.b)("strong",{parentName:"li"},"PostgreSQL")," database."),Object(o.b)("li",{parentName:"ul"},"Select the version"),Object(o.b)("li",{parentName:"ul"},"Give a name to your PostgreSQL database."),Object(o.b)("li",{parentName:"ul"},"Click on ",Object(o.b)("strong",{parentName:"li"},"next"),".")),Object(o.b)("h3",{id:"5-add-a-storage"},"5. Add a storage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click on add a ",Object(o.b)("strong",{parentName:"li"},"Storage"),"."),Object(o.b)("li",{parentName:"ul"},"Give a name to your storage."),Object(o.b)("li",{parentName:"ul"},"Select the storage type between Slow HDD, HDD, SSD, and Fast SSD. (SSD is recommended)"),Object(o.b)("li",{parentName:"ul"},"Select the size."),Object(o.b)("li",{parentName:"ul"},"Give a mount point.")),Object(o.b)("h3",{id:"6-deploy"},"6. Deploy"),Object(o.b)("p",null,"Click on the ",Object(o.b)("strong",{parentName:"p"},"Deploy")," button. Your app should be deployed: you can see the status in real time by clicking on ",Object(o.b)("strong",{parentName:"p"},"Deployment logs"),"."),Object(o.b)("h2",{id:"deploying-with-the-cli"},"Deploying with the CLI"),Object(o.b)("h3",{id:"1-create-a-qovery-account-1"},"1. Create a Qovery Account"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/"}),"Install the Qovery CLI")," and type the command ",Object(o.b)("inlineCode",{parentName:"p"},"qovery auth")," to create an account if you don't already have one."),Object(o.b)("h3",{id:"2-add-a-qoveryyml-file"},"2. Add a .qovery.yml File"),Object(o.b)("p",null,"Place a ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," file at the root of your project. Do not forget the dot when naming the file."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"application:\n  name: GIVE_A_NAME_TO_YOUR_APP\n  project: GIVE_A_PROJECT_NAME\n  publicly_accessible: true\n  storage: # qovery will attach automatically a SSD storage on /srv/app\n    - name: data\n      type: ssd\n      size: 5GB\n      mount_point: /srv/app\ndatabases:\n- type: postgresql # qovery will create a managed PostgreSQL database\n  version: 12\n  name: psql\nrouters:\n- name: main\n  custom_domains: # optional: only if you want to use your domain\n  - branch: master\n    domain: my.domain.tld\n  routes:\n  - application_name: strapi\n    paths:\n    - /*\n")),Object(o.b)(i.a,{type:"success",mdxType:"Alert"},Object(o.b)("p",null,"For more information about the ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," file, please refer to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/applications/"}),"the Qovery application documentation"),".")),Object(o.b)("p",null,"Alternatively, you can deploy your Strapi application with a PostgreSQL database in the Qovery dashboard."),Object(o.b)("h3",{id:"3-add-a-dockerfile-optional"},"3. Add a Dockerfile (optional)"),Object(o.b)("p",null,"By default, Qovery uses Buildpacks to build and run your Strapi application. But it is also possible to build and run your application by providing a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/applications/#application-build"}),"Qovery documentation")," for more information)."),Object(o.b)("h3",{id:"4-deploy"},"4. Deploy"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Commit your changes and push them to GitHub or GitLab."),Object(o.b)("li",{parentName:"ol"},"Execute the ",Object(o.b)("inlineCode",{parentName:"li"},"qovery status --watch")," command to see in real time your Strapi application deployment status. When the status of your application is ",Object(o.b)("inlineCode",{parentName:"li"},"RUNNING"),", it means it has been successfully deployed.")),Object(o.b)("h2",{id:"scaling"},"Scaling"),Object(o.b)("p",null,"For vertical scaling, Qovery lets you upgrade your CPU and RAM per an instance. For horizontal scaling, Qovery auto-scales the number of instance running depending on the CPU and Memory usage."),Object(o.b)(l.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}d.isMDXComponent=!0},345:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},346:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return a?r.a.createElement(m,l({ref:t},s,{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},347:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),i=a(39),l=a(350),c=a(19),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,p=a||c,u=Object(l.a)(p),d=Object(r.useRef)(!1),b=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!b&&u&&window.docusaurus.prefetch(p),function(){b&&t&&t.disconnect()}}),[p,b,u]),p&&u?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var a,n;b&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:p})):o.a.createElement("a",Object(n.a)({},e,{href:p}))}},348:function(e,t,a){"use strict";a(352);var n=a(0),r=a.n(n),o=a(345),i=a.n(o);a(133);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:i()(a,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||c))}),t)}},349:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(347),i=a(345),l=a.n(i);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,c=e.rightIcon,s=e.size,p=e.target,u=e.to,d=l()("jump-to","jump-to--"+s,a),b=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return p?r.a.createElement("a",{href:u,target:p,className:d},b):r.a.createElement(o.a,{to:u,className:d},b)}},350:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},351:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},352:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(355)}),a(75)("fill")},353:function(e,t,a){"use strict";a(351);var n=a(0),r=a.n(n),o=a(348);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},355:function(e,t,a){"use strict";var n=a(27),r=a(76),o=a(26);e.exports=function(e){for(var t=n(this),a=o(t.length),i=arguments.length,l=r(i>1?arguments[1]:void 0,a),c=i>2?arguments[2]:void 0,s=void 0===c?a:r(c,a);s>l;)t[l++]=e;return t}}}]);