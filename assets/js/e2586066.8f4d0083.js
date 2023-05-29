"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[28080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Introduction to the Platformatic DB Mapper",l={unversionedId:"reference/sql-mapper/introduction",id:"version-0.23.1/reference/sql-mapper/introduction",title:"Introduction to the Platformatic DB Mapper",description:"The Platformatic DB Mapper will inspect a database schema and return an object containing:",source:"@site/versioned_docs/version-0.23.1/reference/sql-mapper/introduction.md",sourceDirName:"reference/sql-mapper",slug:"/reference/sql-mapper/introduction",permalink:"/docs/0.23.1/reference/sql-mapper/introduction",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.23.1/reference/sql-mapper/introduction.md",tags:[],version:"0.23.1",frontMatter:{},sidebar:"docs",previous:{title:"Ignoring types and fields",permalink:"/docs/0.23.1/reference/sql-graphql/ignore"},next:{title:"Fastify Plugin",permalink:"/docs/0.23.1/reference/sql-mapper/fastify-plugin"}},p={},c=[{value:"Code samples",id:"code-samples",level:2}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-the-platformatic-db-mapper"},"Introduction to the Platformatic DB Mapper"),(0,r.kt)("p",null,"The Platformatic DB Mapper will inspect a database schema and return an object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"db")," \u2014 A database abstraction layer from ",(0,r.kt)("a",{parentName:"li",href:"https://www.atdatabases.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"@databases"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sql")," \u2014 The SQL builder from ",(0,r.kt)("a",{parentName:"li",href:"https://www.atdatabases.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"@databases"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entities")," \u2014 An object containing a key for each table found in the schema, with basic CRUD operations. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.23.1/reference/sql-mapper/entities/introduction"},"Entity Reference")," for details.")),(0,r.kt)("p",null,"It exports a function that accepts an object with the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connectionString")," \u2014 The Database connection string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"poolSize")," - Maximum number of connections in the connection pool. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"log")," \u2014 A logger object (like ",(0,r.kt)("a",{parentName:"li",href:"https://getpino.io"},"Pino"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onDatabaseLoad")," \u2014 An async function that is called after the connection is established. It will receive ",(0,r.kt)("inlineCode",{parentName:"li"},"db")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"sql")," as parameter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ignore")," \u2014 Object used to ignore some tables from building entities. (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"{ 'versions': true }")," will ignore ",(0,r.kt)("inlineCode",{parentName:"li"},"versions")," table)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"autoTimestamp")," \u2014 Generate timestamp automatically when inserting/updating records."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hooks")," \u2014 For each entity name (like ",(0,r.kt)("inlineCode",{parentName:"li"},"Page"),") you can customize any of the entity API function. Your custom function will receive the original function as first parameter, and then all the other parameters passed to it.")),(0,r.kt)("h2",{id:"code-samples"},"Code samples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { connect } = require('@platformatic/sql-mapper')\nconst { pino } = require('pino')\n\nconst logger = pino()\n\nasync function onDatabaseLoad (db, sql) {\n  await db.query(sql`CREATE TABLE pages (\n    id SERIAL PRIMARY KEY,\n    title VARCHAR(255) NOT NULL\n  );`)\n}\nconst connectionString =\n  'postgres://postgres:postgres@localhost:5432/postgres'\nconst mapper = await connect({\n  connectionString,\n  log: logger,\n  onDatabaseLoad,\n  ignore: {},\n  hooks: {\n    Page: {\n      find: async function(_find, opts) {\n        console.log('hook called');\n        return await _find(opts)\n      }\n    }\n  }\n})\nconst pageEntity = mapper.entities.page\n\nawait mapper.db.query(mapper.sql`SELECT * FROM pages`)\nawait mapper.db.find('option1', 'option2')\n")))}m.isMDXComponent=!0}}]);