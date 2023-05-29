"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[30277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Securing Platformatic DB with Authorization",l={unversionedId:"guides/securing-platformatic-db",id:"guides/securing-platformatic-db",title:"Securing Platformatic DB with Authorization",description:"Introduction",source:"@site/docs/guides/securing-platformatic-db.md",sourceDirName:"guides",slug:"/guides/securing-platformatic-db",permalink:"/docs/next/guides/securing-platformatic-db",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/guides/securing-platformatic-db.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Extend REST API",permalink:"/docs/next/guides/add-custom-functionality/extend-rest"},next:{title:"Configure JWT with Auth0",permalink:"/docs/next/guides/jwt-auth0"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Block access to all entities, allow admins",id:"block-access-to-all-entities-allow-admins",level:2},{value:"Authorization rules",id:"authorization-rules",level:2},{value:"Read-only access to <em>anonymous</em> users",id:"read-only-access-to-anonymous-users",level:2},{value:"Work in Progress",id:"work-in-progress",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"securing-platformatic-db-with-authorization"},"Securing Platformatic DB with Authorization"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Authorization in Platformatic DB is ",(0,r.kt)("strong",{parentName:"p"},"role-based"),". User authentication and the\nassignment of roles must be handled by an external authentication service.\nTake a look to at the reference documentation for ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/db/authorization"},"Authorization"),"."),(0,r.kt)("p",null,"The goal of this simple guide is to protect an API built with Platformatic DB\nwith the use of a shared secret, that we call ",(0,r.kt)("inlineCode",{parentName:"p"},"adminSecret"),". We want to prevent\nany user that is not an admin to access the data."),(0,r.kt)("p",null,"The use of an ",(0,r.kt)("inlineCode",{parentName:"p"},"adminSecret")," is a simplistic way of securing a system.\nIt is a crude way for limiting access and not suitable for production systems,\nas the risk of leaking the secret is high in case of a security breach.\nA production friendly way would be to issue a machine-to-machine JSON Web Token,\nideally with an asymmetric key. Alternatively, you can defer to an external\nservice via a Web Hook."),(0,r.kt)("p",null,"Please refer to our guide to set up ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/jwt-auth0"},"Auth0")," for more information\non JSON Web Tokens."),(0,r.kt)("h2",{id:"block-access-to-all-entities-allow-admins"},"Block access to all entities, allow admins"),(0,r.kt)("p",null,"The following configuration will block all ",(0,r.kt)("em",{parentName:"p"},"anonymous")," users (e.g. each user without a known role)\nto access every entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "authorization": {\n    "adminSecret": "replaceWithSomethingRandomAndSecure"\n  }\n}\n')),(0,r.kt)("p",null,"The data will still be available if the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ADMIN-SECRET")," HTTP header\nis specified when making HTTP calls, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'X-PLATFORMATIC-ADMIN-SECRET: replaceWithSomethingRandomAndSecure' http://127.0.0.1:3042/pages\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Configuring JWT or Web Hooks will have the same result of configuring an admin secret.")),(0,r.kt)("h2",{id:"authorization-rules"},"Authorization rules"),(0,r.kt)("p",null,"Rules can be provided based on entity and role in order to restrict access and provide fine grained access.\nTo make an admin only query and save the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," table / ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," entity using ",(0,r.kt)("inlineCode",{parentName:"p"},"adminSecret")," this structure should be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic.db")," configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  ...\n  "authorization": {\n    "adminSecret": "easy",\n    "rules": [{\n      "entity": "movie"\n      "role": "platformatic-admin",\n      "find": true,\n      "save": true,\n      "delete": false,\n      }\n    ]\n  }\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that the role of an admin user from ",(0,r.kt)("inlineCode",{parentName:"p"},"adminSecret")," strategy is ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic-admin")," by default.")),(0,r.kt)("h2",{id:"read-only-access-to-anonymous-users"},"Read-only access to ",(0,r.kt)("em",{parentName:"h2"},"anonymous")," users"),(0,r.kt)("p",null,"The following configuration will allo all ",(0,r.kt)("em",{parentName:"p"},"anonymous")," users (e.g. each user without a known role)\nto access the ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," table / ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," entity in Read-only mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "authorization": {\n    "adminSecret": "replaceWithSomethingRandomAndSecure"\n    "rules": [{\n      "role": "anonymous",\n      "entity": "page",\n      "find": true,\n      "save": false,\n      "delete": false\n    }]\n  }\n}\n')),(0,r.kt)("p",null,"Note that we set ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to allow the access, while the other options are ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h2",{id:"work-in-progress"},"Work in Progress"),(0,r.kt)("p",null,"This guide is a Work-In-Progress. Let us know what other common authorization use cases we should cover."))}d.isMDXComponent=!0}}]);