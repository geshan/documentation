/*! For license information please see 26f28d69.00ebd5b7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),l=(a(0),a(258)),i=a(261),b={last_modified_on:"2020-04-22",title:"Environment Variables",description:"Learn how to configure Environment Variables on Qovery"},o={id:"using-qovery/configuration/environment-variables",title:"Environment Variables",description:"Learn how to configure Environment Variables on Qovery",source:"@site/docs/using-qovery/configuration/environment-variables.md",permalink:"/docs/using-qovery/configuration/environment-variables",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/environment-variables.md",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/using-qovery/configuration"},next:{title:"Databases",permalink:"/docs/using-qovery/configuration/databases"}},c=[{value:"Levels",id:"levels",children:[]},{value:"Built-in variables",id:"built-in-variables",children:[]},{value:"Additional built-in variables",id:"additional-built-in-variables",children:[]},{value:"Add custom variables",id:"add-custom-variables",children:[]},{value:"List variables",id:"list-variables",children:[]},{value:"Delete variables",id:"delete-variables",children:[]},{value:"Override variables",id:"override-variables",children:[]},{value:"Aliases",id:"aliases",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Qovery supports environment variables to make you able to configure your applications."),Object(l.b)(i.a,{type:"warning",mdxType:"Alert"},Object(l.b)("p",null,"Environment Variables are not directly connected to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"Environment")," concept."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Environment Variables"),": represent variables you can store and retrieve in your applications"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Environments"),": represent environments (apps, databases, and other services) associated with Git branches like ",Object(l.b)("inlineCode",{parentName:"li"},"master"),", ",Object(l.b)("inlineCode",{parentName:"li"},"staging"),", and others."))),Object(l.b)("h2",{id:"levels"},"Levels"),Object(l.b)("p",null,"There are four levels of Environment Variables. Each type differs in scope - you can create variables bound to application, environment, or project."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scope"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Level"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"BUILT_IN")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Automatically generated variables based on your configuration (e.g., requested databases) propagated to all projects, environments, and applications")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"PROJECT")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variables at the project level are shared across all environments and all applications of the project")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"ENVIRONMENT")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variables at the environment level are shared across all applications of the project in one, given environment")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"APPLICATION")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variables available for one application in one environment")))),Object(l.b)(i.a,{mdxType:"Alert"},Object(l.b)("p",null,"You can override variables - the highest level variable win (e.g., ",Object(l.b)("inlineCode",{parentName:"p"},"PROJECT")," variable can override ",Object(l.b)("inlineCode",{parentName:"p"},"BUILT_IN")," variable).")),Object(l.b)("h2",{id:"built-in-variables"},"Built-in variables"),Object(l.b)("p",null,"By default, every environment contains those variables:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"QOVEY_JSON_B64")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Contains all environment variables accessible by your application encoded as Base64 JSON")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"QOVERY_BRANCH_NAME")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"master"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Git branch name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"QOVERY_IS_PRODUCTION")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag that indicates production environment")))),Object(l.b)("h2",{id:"additional-built-in-variables"},"Additional built-in variables"),Object(l.b)("p",null,"For any added service (database, broker, storage), your application receives additional built-in variables. These can be used, for example, to connect\nto the database."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Naming Convention"),":"),Object(l.b)("p",null,"We use the following naming convention for additional built-in variables:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"QOVERY_<SERVICE_TYPE>_<NAME>_<SPEC>\n")),Object(l.b)("p",null,"To demonstrate this, let's take a quick look on a simple database example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml",metastring:'title=".qovery.yml" {3-6}',title:'".qovery.yml"',"{3-6}":!0}),'application:\n  ...\ndatabases:\n- type: postgresql\n  version: "10.10"\n  name: my-pg\n')),Object(l.b)("p",null,"Adding a database like in the example above results in adding the following environment variables to your application:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY_",Object(l.b)("strong",{parentName:"td"},"DATABASE_MY_PG_NAME")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"my-postgresql"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of your PostgreSQL database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY_",Object(l.b)("strong",{parentName:"td"},"DATABASE_MY_PG_HOST")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"host.amazonaws.com"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PostgreSQL host address")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY_",Object(l.b)("strong",{parentName:"td"},"DATABASE_MY_PG_USERNAME")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"username"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PostgreSQL username")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY_",Object(l.b)("strong",{parentName:"td"},"DATABASE_MY_PG_PASSWORD")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"password"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PostgreSQL password")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"..."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"..."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"...")))),Object(l.b)("h2",{id:"add-custom-variables"},"Add custom variables"),Object(l.b)("p",null,"Adding environment variables with the CLI is very simple:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery project env add ENV_NAME ENV_VALUE\nqovery environment env add ENV_NAME ENV_VALUE\nqovery application env add ENV_NAME ENV_VALUE\n")),Object(l.b)(i.a,{mdxType:"Alert"},Object(l.b)("p",null,"When you add Environment Variables using the CLI, you also specify the scope of a given variable, e.g."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"{2}","{2}":!0}),"qovery project env add ENV_NAME ENV_VALUE\nqovery environment env add ENV_NAME ENV_VALUE\nqovery application env add ENV_NAME ENV_VALUE\n")),Object(l.b)("p",null,"The highlighted command adds a variable with ",Object(l.b)("inlineCode",{parentName:"p"},"environment")," scope.")),Object(l.b)(i.a,{type:"danger",mdxType:"Alert"},Object(l.b)("p",null,"Qovery CLI is aware of your current directory and Git branch. Be sure you are in the correct application directory and Git branch (environment) before executing Qovery Environment Variables commands.")),Object(l.b)("h2",{id:"list-variables"},"List variables"),Object(l.b)("p",null,"You can list environment variables of given application with single CLI command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery application env list\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"SCOPE        KEY                                                   VALUE\nBUILT_IN     QOVERY_BRANCH_NAME                                    feature_a\nBUILT_IN     QOVERY_IS_PRODUCTION                                  false\nBUILT_IN     QOVERY_DATABASE_MY_POSTGRESQL_3498225_PASSWORD        xxxxxxxxxxxxxxxxxxxx\nBUILT_IN     QOVERY_DATABASE_MY_POSTGRESQL_3498225_USERNAME        superuser\nBUILT_IN     QOVERY_DATABASE_MY_POSTGRESQL_3498225_PORT            5432\nBUILT_IN     QOVERY_DATABASE_MY_POSTGRESQL_3498225_FQDN            your.fqdn.id.rds.amazonaws.com\nBUILT_IN     QOVERY_DATABASE_MY_POSTGRESQL_3498225_HOST            your.host.id.rds.amazonaws.com\nBUILT_IN     QOVERY_DATABASE_MY_POSTGRESQL_3498225_CONNECTION_URI  postgresql://user:pass@your.fqdn.id.rds.amazonaws.com:5432/postgres\nBUILT_IN     QOVERY_DATABASE_MY_POSTGRESQL_3498225_VERSION         11.5\nBUILT_IN     QOVERY_DATABASE_MY_POSTGRESQL_3498225_TYPE            POSTGRESQL\nBUILT_IN     QOVERY_DATABASE_MY_POSTGRESQL_3498225_NAME            my-postgresql-id\nPROJECT      my_custom_project_env                                 my_project_value\nENVIRONMENT  DRY_RUN                                               true\nAPPLICATION  enable_feature_a                                      true\n")),Object(l.b)("p",null,"Analogically to adding environment variables, while listing Environment Variables you also choose the scope of variables to list:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery application env list\nqovery project env list\nqovery environment env list\n")),Object(l.b)("h2",{id:"delete-variables"},"Delete variables"),Object(l.b)("p",null,"To delete an environment variable of application scope, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery application env delete MY_ENV_NAME\n")),Object(l.b)(i.a,{mdxType:"Alert"},Object(l.b)("p",null,"You can not delete ",Object(l.b)("inlineCode",{parentName:"p"},"BUILT_IN")," variables, but you can override them!")),Object(l.b)("h2",{id:"override-variables"},"Override variables"),Object(l.b)("p",null,"As described in the levels' section, you can override existing variables. To do so, add a new Environment Variables with a higher level (e.g., add an ",Object(l.b)("inlineCode",{parentName:"p"},"APPLICATION")," level variable to override ",Object(l.b)("inlineCode",{parentName:"p"},"PROJECT")," variable for a given application)."),Object(l.b)("h2",{id:"aliases"},"Aliases"),Object(l.b)("p",null,"You can create an alias for the existing environment variable."),Object(l.b)("p",null,"Let's suppose that your application requires a ",Object(l.b)("inlineCode",{parentName:"p"},"DATABASE_PASSWORD")," variable. Qovery provides your application with ",Object(l.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASE_MY_POSTGRESQL_3498225_PASSWORD")," variable with a database password.\nInstead of copy-pasting its value, you can create an alias to ",Object(l.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASE_MY_POSTGRESQL_3498225_PASSWORD"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery application env add DATABASE_PASSWORD '$QOVERY_DATABASE_MY_POSTGRESQL_3498225_PASSWORD'\n")),Object(l.b)("p",null,"After executing the above command, your application can use ",Object(l.b)("inlineCode",{parentName:"p"},"DATABASE_PASSWORD")," variable to get a database password."),Object(l.b)("p",null,"The syntax for aliasing is:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"... add NEW_VARIABLE_NAME `$OLD_VARIABLE_NAME`\n")))}p.isMDXComponent=!0},257:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===l)for(var b in n)a.call(n,b)&&n[b]&&e.push(b)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},258:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(i,".").concat(d)]||p[d]||O[d]||l;return a?r.a.createElement(u,b({ref:t},c,{components:a})):r.a.createElement(u,b({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},261:function(e,t,a){"use strict";a(264);var n=a(0),r=a.n(n),l=a(257),i=a.n(l);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,b=e.type,o=null;switch(b){case"danger":o="alert-triangle";break;case"success":o="check-circle";break;case"warning":o="alert-triangle";break;default:o="info"}return r.a.createElement("div",{className:i()(a,"alert","alert--"+b,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&r.a.createElement("i",{className:i()("feather","icon-"+(l||o))}),t)}},264:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(268)}),a(75)("fill")},268:function(e,t,a){"use strict";var n=a(25),r=a(76),l=a(24);e.exports=function(e){for(var t=n(this),a=l(t.length),i=arguments.length,b=r(i>1?arguments[1]:void 0,a),o=i>2?arguments[2]:void 0,c=void 0===o?a:r(o,a);c>b;)t[b++]=e;return t}}}]);