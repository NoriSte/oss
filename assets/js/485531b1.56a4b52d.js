"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[59758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o="Plugin",l={unversionedId:"reference/db/plugin",id:"version-0.21.0/reference/db/plugin",title:"Plugin",description:"If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/versioned_docs/version-0.21.0/reference/db/plugin.md",sourceDirName:"reference/db",slug:"/reference/db/plugin",permalink:"/docs/0.21.0/reference/db/plugin",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.21.0/reference/db/plugin.md",tags:[],version:"0.21.0",frontMatter:{},sidebar:"docs",previous:{title:"Rules",permalink:"/docs/0.21.0/reference/db/authorization/rules"},next:{title:"Logging",permalink:"/docs/0.21.0/reference/db/logging"}},p={},s=[{value:"Hot Reload",id:"hot-reload",level:2},{value:"Directories",id:"directories",level:2},{value:"Multiple plugins",id:"multiple-plugins",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plugin"},"Plugin"),(0,r.kt)("p",null,"If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard ",(0,r.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify")," plugin."),(0,r.kt)("p",null,"The config file will specify where the plugin file is located as the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "plugins": {\n    "paths": ["./plugin/index.js"]\n  }\n}\n')),(0,r.kt)("p",null,"The paths are relative to the config file path."),(0,r.kt)("p",null,"Since it uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mcollina/fastify-sandbox"},"fastify-sandbox")," under the hood, all other options of that package may be specified under the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," property."),(0,r.kt)("p",null,"Once the config file is set up, you can write your plugin to extend Platformatic DB API or write your custom business logic."),(0,r.kt)("p",null,"You should export an async ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," which receives a parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app")," (",(0,r.kt)("inlineCode",{parentName:"li"},"FastifyInstance"),") that is the main fastify ",(0,r.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Server/#instance"},"instance")," running Platformatic DB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opts")," all the options specified in the config file after ",(0,r.kt)("inlineCode",{parentName:"li"},"path")),(0,r.kt)("li",{parentName:"ul"},"You can always access Platformatic ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.21.0/reference/sql-mapper/introduction"},"data mapper")," through ",(0,r.kt)("inlineCode",{parentName:"li"},"app.platformatic")," property.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To make sure that a user has the appropriate set of permissions to perform any action on an entity the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," should be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"entity mapper")," operation like this:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/', async (req, reply) => {\n  const ctx = req.createPlatformaticCtx()\n  \n  await app.platformatic.entities.movies.find({\n    where: { /*...*/ },\n    ctx\n  })\n})\n"))),(0,r.kt)("p",null,"Check some ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.21.0/guides/add-custom-functionality/introduction"},"examples"),"."),(0,r.kt)("h2",{id:"hot-reload"},"Hot Reload"),(0,r.kt)("p",null,"Plugin file is being watched by ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#fspromiseswatchfilename-options"},(0,r.kt)("inlineCode",{parentName:"a"},"fs.watch"))," function."),(0,r.kt)("p",null,"You don't need to reload Platformatic DB server while working on your plugin. Every time you save, the watcher will trigger a reload event and the server will auto-restart and load your updated code."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"At this time, on Linux, file watch in subdirectories is not supported due to a Node.js limitation (documented ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#caveats"},"here"),").")),(0,r.kt)("h2",{id:"directories"},"Directories"),(0,r.kt)("p",null,"The path can also be a directory. In that case, the directory will be loaded with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-autoload"},(0,r.kt)("inlineCode",{parentName:"a"},"@fastify/autoload")),"."),(0,r.kt)("p",null,"Consider the following directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u251c\u2500\u2500 something.js\n\u2502   \u2502   \u2514\u2500\u2500 bar\n\u2502   \u2502       \u2514\u2500\u2500 baz.js\n\u2502   \u251c\u2500\u2500 single-plugin\n\u2502   \u2502   \u2514\u2500\u2500 utils.js\n\u2502   \u2514\u2500\u2500 another-plugin.js\n\u2514\u2500\u2500 platformatic.service.json\n")),(0,r.kt)("p",null,"By default the folder will be added as a prefix to all the routes defined within them.\nSee the autoload documentation for all the options to customize this behavior."),(0,r.kt)("h2",{id:"multiple-plugins"},"Multiple plugins"),(0,r.kt)("p",null,"Multiple plugins can be loaded in parallel by specifying an array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "./plugin/index.js"\n    }, {\n      "path": "./routes/"\n    }]\n  }\n}\n')))}u.isMDXComponent=!0}}]);