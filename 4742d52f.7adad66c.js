(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(1),o=a(9),l=(a(0),a(346)),r=a(357),c=a(358),i=a(348),s=(a(353),a(349)),u={last_modified_on:"2021-05-07",$schema:"/.meta/.schemas/guides.json",title:"How to deploy NuxtJS",description:"This tutorial show you how to deploy NuxtJS in a few seconds",author_github:"https://github.com/Stun3R",tags:["type: tutorial","framework: nuxtjs"],hide_pagination:!0},b={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to deploy NuxtJS",description:"This tutorial show you how to deploy NuxtJS in a few seconds",permalink:"/guides/tutorial/how-to-deploy-nuxtjs",readingTime:"4 min read",source:"@site/guides/tutorial/how-to-deploy-nuxtjs.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: nuxtjs",permalink:"/guides/tags/framework-nuxtjs"}],title:"How to deploy NuxtJS",truncated:!1,prevItem:{title:"How to deploy a full-stack application composed of Hasura, PostgreSQL and Angular",permalink:"/guides/tutorial/deploy-fullstack-application-composed-of-hasura-postgresql-angular"},nextItem:{title:"How to deploy Strapi with PostgreSQL",permalink:"/guides/tutorial/how-to-deploy-strapi-with-postgresql"}},p=[{value:"Add a Dockerfile (optional)",id:"add-a-dockerfile-optional",children:[]},{value:"Deploy with Qovery",id:"deploy-with-qovery",children:[{value:"Sign up",id:"sign-up",children:[]},{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up-1",children:[]}]}],d={rightToc:p};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(i.a,{type:"success",mdxType:"Alert"},Object(l.b)("p",null,"This tutorial has been created by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Stun3R"}),"Stun3R")," - CTO of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://shelt.in"}),"Shelt.in")," and active Qovery contributor.")),Object(l.b)("p",null,"In this tutorial, you'll see how to initialize a NuxtJS application with server hosting target mode in the environment setup by Qovery."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Nuxt.js is a free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which is a framework of similar purpose, based on React.js - Wikipedia")),Object(l.b)("h1",{id:"initialize-a-nuxtjs-project"},"Initialize a NuxtJS project"),Object(l.b)(i.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"If you have a NuxtJS app ready to be deployed, go to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#deploy-your-nuxtjs-app"}),"deployment section"),".")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Clone this ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Stun3R/qovery-nuxt"}),"NuxtJS repository"),"."),Object(l.b)("li",{parentName:"ol"},"Initialize your cloned NuxtJS project by running:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn create nuxt-app nuxt-app\n")),Object(l.b)("p",null,"or"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx create-nuxt-app nuxt-app\n")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Choose all the features you want to have in your NuxtJS app.")),Object(l.b)(i.a,{type:"warn",mdxType:"Alert"},Object(l.b)("p",null,"Choose ",Object(l.b)("inlineCode",{parentName:"p"},"Server (Node.js hosting)")," for the ",Object(l.b)("strong",{parentName:"p"},"Deployment target")," and ",Object(l.b)("inlineCode",{parentName:"p"},"None")," for the ",Object(l.b)("strong",{parentName:"p"},"Version control system"))),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Try to run your project in local:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn develop\n")),Object(l.b)("p",null,"or"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run develop\n")),Object(l.b)("p",null,"Now, you are ready to deploy it \ud83d\udcaa"),Object(l.b)("h1",{id:"deploy-your-nuxtjs-app"},"Deploy your NuxtJS app"),Object(l.b)("h2",{id:"add-a-dockerfile-optional"},"Add a Dockerfile (optional)"),Object(l.b)("p",null,"To deploy your app with Qovery, you can provide your own Dockerfile. However, for NodeJS app, the Dockerfile is optional. It's up to you to decide if you want to provide one or not. Here is a working Dockerfile example."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Dockerfile"}),'FROM node:14-alpine\n\nRUN mkdir -p /usr/src/nuxt-app\nWORKDIR /usr/src/nuxt-app\n\nRUN apk update && apk upgrade\n\nCOPY ./nuxt-app /usr/src/nuxt-app/\nRUN yarn install --silent\n\nRUN yarn build\n\nEXPOSE 3000\n\nENV NUXT_HOST=0.0.0.0\nENV NUXT_PORT=3000\n\n# start the app\nCMD [ "yarn", "start" ]\n')),Object(l.b)("h2",{id:"deploy-with-qovery"},"Deploy with Qovery"),Object(l.b)("h3",{id:"sign-up"},"Sign up"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"To Deploy with Qovery you need to create an account.")),Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"web",mdxType:"TabItem"},Object(l.b)("li",null,Object(l.b)("p",null,"Sign in to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(l.b)("p",{align:"center"},Object(l.b)("a",{href:"https://start.qovery.com"},Object(l.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"}))))),Object(l.b)(c.a,{value:"cli",mdxType:"TabItem"},Object(l.b)("li",null,Object(l.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(l.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(l.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(l.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(l.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"scoop",mdxType:"TabItem"},Object(l.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(l.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(l.b)("inlineCode",{parentName:"p"},"C:\\Windows"),"."))),Object(l.b)("p",null,"Few limitations exist on Windows: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#windows"}),"read more"))))),Object(l.b)("li",null,Object(l.b)("h3",{id:"sign-up-1"},"Sign up"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(l.b)(i.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(l.b)("p",null,"Your browser window with sign-in options will open."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(l.b)("p",null,"Note: Qovery needs access to your account to be able to clone your repository for future application builds."),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(l.b)("p",null,"Congratulations, you are logged-in.")))),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Create a project."),Object(l.b)("li",{parentName:"ol"},"Select your Git repository."),Object(l.b)("li",{parentName:"ol"},"Click on ",Object(l.b)("strong",{parentName:"li"},"deploy"))),Object(l.b)("p",null,"Tada, your NuxtJS app is deployed and fully operational."),Object(l.b)("h1",{id:"conclusion"},"Conclusion"),Object(l.b)("p",null,"You can now use your NuxtJS app online and configure your ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/setting-custom-domain/"}),"custom domain"),"."),Object(l.b)("p",null,"Happy coding."),Object(l.b)(s.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}m.isMDXComponent=!0},347:function(e,t,a){"use strict";var n=a(1),o=a(0),l=a.n(o),r=a(39),c=a(350),i=a(19),s=a.n(i);t.a=function(e){var t,a=e.to,i=e.href,u=a||i,b=Object(c.a)(u),p=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,b]),u&&b?l.a.createElement(r.b,Object(n.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var a,n;d&&e&&b&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):l.a.createElement("a",Object(n.a)({},e,{href:u}))}},348:function(e,t,a){"use strict";a(352);var n=a(0),o=a.n(n),l=a(345),r=a.n(l);a(133);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,c=e.type,i=null;switch(c){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return o.a.createElement("div",{className:r()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&o.a.createElement("i",{className:r()("feather","icon-"+(l||i))}),t)}},349:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(347),r=a(345),c=a.n(r);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,r=e.leftIcon,i=e.rightIcon,s=e.size,u=e.target,b=e.to,p=c()("jump-to","jump-to--"+s,a),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},r&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+r})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(i||"chevron-right")+" arrow"}))));return u?o.a.createElement("a",{href:b,target:u,className:p},d):o.a.createElement(l.a,{to:b,className:p},d)}},350:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},351:function(e,t,a){var n=a(25).f,o=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},353:function(e,t,a){"use strict";a(351);var n=a(0),o=a.n(n),l=a(348);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(l.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},357:function(e,t,a){"use strict";var n=a(1),o=(a(363),a(359),a(52),a(28),a(21),a(20),a(0)),l=a.n(o),r=a(365),c=a(345),i=a.n(c),s=a(356),u=a.n(s),b=a(364),p=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,r=e.handleKeydown,c=e.style,s=e.values,u=e.selectedValue,b=e.tabRefs;return l.a.createElement("div",{className:a?"tabs--centered":null},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",o,{"tabs--block":t}),style:c},s.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:i()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return r(b,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,c=e.values,i=c;if(i[0].group){var s=_.groupBy(i,"group");i=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return l.a.createElement(r.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:i,isClearable:a,placeholder:t,value:c.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,c=e.label,i=e.placeholder,s=e.select,j=e.size,y=(e.style,e.values),O=e.urlKey,g=Object(b.a)(),f=g.tabGroupChoices,v=g.setTabGroupChoices,w=Object(o.useState)(a),N=w[0],x=w[1];if(null!=r){var T=f[r];null!=T&&T!==N&&x(T)}var S=function(e){x(e),null!=r&&v(r,e)},k=[],I=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=u.a.parse(window.location.search);e[O]&&x(e[O])}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"margin-bottom--"+(j||"md")},c&&l.a.createElement("div",{className:"margin-vert--sm"},c),y.length>1&&(s?l.a.createElement(h,Object(n.a)({changeSelectedValue:S,handleKeydown:I,placeholder:i,selectedValue:N,size:j,tabRefs:k},e)):l.a.createElement(m,Object(n.a)({changeSelectedValue:S,handleKeydown:I,selectedValue:N,tabRefs:k},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},358:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);