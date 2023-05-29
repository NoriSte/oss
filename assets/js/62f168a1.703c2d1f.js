"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[57150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Introduction to the REST API",p={unversionedId:"reference/sql-openapi/introduction",id:"version-0.21.0/reference/sql-openapi/introduction",title:"Introduction to the REST API",description:"The Platformatic DB OpenAPI plugin automatically starts a REST API server (powered by Fastify) that provides CRUD (Create, Read, Update, Delete) functionality for each entity.",source:"@site/versioned_docs/version-0.21.0/reference/sql-openapi/introduction.md",sourceDirName:"reference/sql-openapi",slug:"/reference/sql-openapi/introduction",permalink:"/docs/0.21.0/reference/sql-openapi/introduction",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.21.0/reference/sql-openapi/introduction.md",tags:[],version:"0.21.0",frontMatter:{},sidebar:"docs",previous:{title:"Packages",permalink:"/docs/0.21.0/category/packages"},next:{title:"API",permalink:"/docs/0.21.0/reference/sql-openapi/api"}},c={},l=[{value:"Configuration",id:"configuration",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-the-rest-api"},"Introduction to the REST API"),(0,o.kt)("p",null,"The Platformatic DB OpenAPI plugin automatically starts a REST API server (powered by ",(0,o.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify"),") that provides CRUD (",(0,o.kt)("strong",{parentName:"p"},"C"),"reate, ",(0,o.kt)("strong",{parentName:"p"},"R"),"ead, ",(0,o.kt)("strong",{parentName:"p"},"U"),"pdate, ",(0,o.kt)("strong",{parentName:"p"},"D"),"elete) functionality for each entity."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In the config file, under the ",(0,o.kt)("inlineCode",{parentName:"p"},'"db"')," section, the OpenAPI server is enabled by default. Although you can disable it setting the property ",(0,o.kt)("inlineCode",{parentName:"p"},"openapi")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "db": {\n    "openapi": false\n  }\n}\n')),(0,o.kt)("p",null,"As Platformatic DB uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-swagger"},(0,o.kt)("inlineCode",{parentName:"a"},"fastify-swagger"))," under the hood, the ",(0,o.kt)("inlineCode",{parentName:"p"},'"openapi"')," property can be an object that follows the ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/specification/#oasObject"},"OpenAPI Specification Object")," format."),(0,o.kt)("p",null,"This allows you to extend the output of the Swagger UI documentation."))}u.isMDXComponent=!0}}]);