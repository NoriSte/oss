"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[80366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},o="Programmatic API",s={unversionedId:"reference/db/programmatic",id:"version-0.22.0/reference/db/programmatic",title:"Programmatic API",description:"It's possible to start an instance of Platformatic DB from JavaScript.",source:"@site/versioned_docs/version-0.22.0/reference/db/programmatic.md",sourceDirName:"reference/db",slug:"/reference/db/programmatic",permalink:"/docs/0.22.0/reference/db/programmatic",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.22.0/reference/db/programmatic.md",tags:[],version:"0.22.0",frontMatter:{},sidebar:"docs",previous:{title:"Logging",permalink:"/docs/0.22.0/reference/db/logging"},next:{title:"Platformatic DB Dashboard",permalink:"/docs/0.22.0/reference/db/dashboard"}},l={},c=[{value:"API",id:"api",level:2},{value:"buildServer(config)",id:"buildserverconfig",level:3},{value:"Server",id:"server",level:3},{value:".listen()",id:"listen",level:4},{value:".app",id:"app",level:4},{value:".restart(newConfig)",id:"restartnewconfig",level:4},{value:".listen()",id:"listen-1",level:4},{value:".stop()",id:"stop",level:4}],p={toc:c};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"programmatic-api"},"Programmatic API"),(0,a.kt)("p",null,"It's possible to start an instance of Platformatic DB from JavaScript."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/db'\n\nconst server = await buildServer('/path/to/platformatic.db.json')\n\nawait server.listen() // this will start our server\n\nconsole.log('URL', server.url)\n\nconst res = await fetch(server.url)\nconsole.log(await res.json())\n\n// do something\n\nawait server.stop()\n")),(0,a.kt)("p",null,"It is also possible to customize the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/db'\n\nconst server = await buildServer({\n  server: {\n    hostname: '127.0.0.1',\n    port: 0\n  },\n  db: {\n    connectionString: 'sqlite://test.sqlite'\n  },\n})\n\nawait server.listen() // this will start our server\n\nconsole.log('URL', server.url)\n\nconst res = await fetch(server.url)\nconsole.log(await res.json())\n\n// do something\n\nawait server.stop()\n")),(0,a.kt)("p",null,"For more details on how this is implemented, read ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.22.0/reference/service/programmatic"},"Platformatic Service Programmatic API"),"."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"buildserverconfig"},"buildServer(config)"),(0,a.kt)("p",null,"Returns an instance of the ",(0,a.kt)("a",{parentName:"p",href:"#Server"},"server")),(0,a.kt)("h3",{id:"server"},"Server"),(0,a.kt)("h4",{id:"listen"},".listen()"),(0,a.kt)("p",null,"Listen to the hostname/port combination specified in the config."),(0,a.kt)("h4",{id:"app"},".app"),(0,a.kt)("p",null,"The fastify application.\nThis enables you to do ",(0,a.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Guides/Testing/#benefits-of-using-fastifyinject"},(0,a.kt)("inlineCode",{parentName:"a"},"server.app.inject()")," calls"),"."),(0,a.kt)("h4",{id:"restartnewconfig"},".restart(newConfig)"),(0,a.kt)("p",null,"Restart the Fastify application with the new configuration"),(0,a.kt)("h4",{id:"listen-1"},".listen()"),(0,a.kt)("p",null,"Listen to the hostname/port combination specified in the config."),(0,a.kt)("h4",{id:"stop"},".stop()"),(0,a.kt)("p",null,"Stops the server."))}f.isMDXComponent=!0}}]);