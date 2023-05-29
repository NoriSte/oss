"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[8906],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>d});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return n?t.createElement(m,a(a({ref:r},s),{},{components:n})):t.createElement(m,a({ref:r},s))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55237:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(87462),i=(n(67294),n(3905));const o={},a="Ignoring entities and fields",l={unversionedId:"reference/sql-openapi/ignore",id:"version-0.21.0/reference/sql-openapi/ignore",title:"Ignoring entities and fields",description:"@platformatic/sql-openapi allows to selectively ignore entities and fields.",source:"@site/versioned_docs/version-0.21.0/reference/sql-openapi/ignore.md",sourceDirName:"reference/sql-openapi",slug:"/reference/sql-openapi/ignore",permalink:"/docs/0.21.0/reference/sql-openapi/ignore",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.21.0/reference/sql-openapi/ignore.md",tags:[],version:"0.21.0",frontMatter:{},sidebar:"docs",previous:{title:"API",permalink:"/docs/0.21.0/reference/sql-openapi/api"},next:{title:"Introduction to the GraphQL API",permalink:"/docs/0.21.0/reference/sql-graphql/introduction"}},p={},c=[],s={toc:c};function f(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ignoring-entities-and-fields"},"Ignoring entities and fields"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-openapi")," allows to selectively ignore entities and fields."),(0,i.kt)("p",null,"To ignore entites:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"app.register(require('@platformatic/sql-openapi'), {\n  ignore: {\n    categories: true\n  }\n})\n")),(0,i.kt)("p",null,"To ignore individual fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"app.register(require('@platformatic/sql-openapi'), {\n  ignore: {\n    categories: {\n      name: true\n    }\n  }\n})\n")))}f.isMDXComponent=!0}}]);