"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[61947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||s;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={},o="Schema support",i={unversionedId:"reference/db/schema-support",id:"version-0.23.0/reference/db/schema-support",title:"Schema support",description:"It's possible to specify the schemas where the tables are located (if the database supports schemas).",source:"@site/versioned_docs/version-0.23.0/reference/db/schema-support.md",sourceDirName:"reference/db",slug:"/reference/db/schema-support",permalink:"/docs/0.23.0/reference/db/schema-support",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.23.0/reference/db/schema-support.md",tags:[],version:"0.23.0",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic DB Dashboard",permalink:"/docs/0.23.0/reference/db/dashboard"},next:{title:"Platformatic Service",permalink:"/docs/0.23.0/reference/service/introduction"}},c={},p=[],l={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"schema-support"},"Schema support"),(0,a.kt)("p",null,"It's possible to specify the schemas where the tables are located (if the database supports schemas).\nPlatformaticDB will inspect this schemas to create the entities "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE SCHEMA IF NOT EXISTS "test1";\nCREATE TABLE IF NOT EXISTS test1.movies (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL\n);\n\nCREATE SCHEMA IF NOT EXISTS "test2";\nCREATE TABLE IF NOT EXISTS test2.users (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL\n);\n')),(0,a.kt)("p",null,"The schemas must be specified in configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," section.\nNote that if we use schemas and migrations, we must specify the schema in the migrations table as well\n(with postgresql, we assume we use the default ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," schema)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  ...\n  "db": {\n    "connectionString": "(...)",\n    "schema": [\n      "test1", "test2"\n    ],\n    "ignore": {\n      "versions": true\n    }\n  },\n  "migrations": {\n    "dir": "migrations",\n    "table": "test1.versions"\n  },\n\n  ...\n')),(0,a.kt)("p",null,"The entities name are then generated in the form ",(0,a.kt)("inlineCode",{parentName:"p"},"schemaName + entityName"),", PascalCase (this is necessary to avoid name collisions in case there are tables with same name in different schemas).\nSo for instance for the example above we generate the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test1Movie")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Test2User")," entities."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Please pay attention to the entity names when using schema, these are also used to setup authorization rules")))))}m.isMDXComponent=!0}}]);