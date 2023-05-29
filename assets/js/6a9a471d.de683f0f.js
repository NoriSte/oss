"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[62659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},l="Extend GraphQL Schema",o={unversionedId:"guides/add-custom-functionality/extend-graphql",id:"version-0.21.0/guides/add-custom-functionality/extend-graphql",title:"Extend GraphQL Schema",description:"Sum Function",source:"@site/versioned_docs/version-0.21.0/guides/add-custom-functionality/extend-graphql.md",sourceDirName:"guides/add-custom-functionality",slug:"/guides/add-custom-functionality/extend-graphql",permalink:"/docs/0.21.0/guides/add-custom-functionality/extend-graphql",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.21.0/guides/add-custom-functionality/extend-graphql.md",tags:[],version:"0.21.0",frontMatter:{},sidebar:"docs",previous:{title:"Prerequisites",permalink:"/docs/0.21.0/guides/add-custom-functionality/prerequisites"},next:{title:"Extend REST API",permalink:"/docs/0.21.0/guides/add-custom-functionality/extend-rest"}},p={},s=[{value:"Sum Function",id:"sum-function",level:2},{value:"Extend Entities API",id:"extend-entities-api",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extend-graphql-schema"},"Extend GraphQL Schema"),(0,a.kt)("h2",{id:"sum-function"},"Sum Function"),(0,a.kt)("p",null,"Copy and paste this code into ",(0,a.kt)("inlineCode",{parentName:"p"},"./sample-plugin.js")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = async(app, opts) => {\n  app.graphql.extendSchema(`\n    extend type Query {\n      add(x: Int, y: Int): Int\n    }\n  `)\n  app.graphql.defineResolvers({\n    Query: {\n      add: async (_, { x, y }) => x + y\n    }\n  })\n}\n")),(0,a.kt)("p",null,"This will add a new GraphQL query called ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," which will simply add the two inputs ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," provided."),(0,a.kt)("p",null,"You don't need to reload the server, since it will watch this file and hot-reload itself.\nLet's query the server with the following body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"\nquery{\n  add(x: 1, y: 2)\n}\n\n")),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command to run this query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl --location --request POST 'http://localhost:3042/graphql' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"query\":\"query{\\n    add(x: 1, y: 2)\\n}\"}'\n")),(0,a.kt)("p",null,"You will get this output, with the sum."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "add": 3\n  }\n}\n')),(0,a.kt)("h2",{id:"extend-entities-api"},"Extend Entities API"),(0,a.kt)("p",null,"Let's implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"getPageByTitle")," query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = async(app, opts) => {\n  app.graphql.extendSchema(`\n    extend type Query {\n      getPageByTitle(title: String): Page\n    }\n  `)\n  app.graphql.defineResolvers({\n    Query: {\n      getPageByTitle: async(_, { title }) => {\n        const res = await app.platformatic.entities.page.find({\n          where: {\n            title: {\n              eq: title\n            }\n          }\n        })\n        if (res) {\n          return res[0]\n        }\n        return null\n      }\n    }\n  })\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Page")," GraphQL type is already defined by Platformatic DB on start."),(0,a.kt)("p",null,"We are going to run this code against this GraphQL query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'query{\n    getPageByTitle(title: "First Page"){\n        id\n        title\n    }\n}\n')),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command to run this query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl --location --request POST 'http://localhost:3042/graphql' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"query\":\"query{\\n    getPageByTitle(title: \\\"First Page\\\"){\\n        id\\n        title\\n    }\\n}\"}'\n")),(0,a.kt)("p",null,"You will get an output similar to this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "getPageByTitle": {\n            "id": "1",\n            "title": "First Page"\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);