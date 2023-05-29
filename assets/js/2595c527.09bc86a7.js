"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[45825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={},o="Introduction to the sql-events module",s={unversionedId:"reference/sql-events/introduction",id:"version-0.23.0/reference/sql-events/introduction",title:"Introduction to the sql-events module",description:"The Platformatic DB sql-events uses mqemitter to publish events when entities are saved and deleted.",source:"@site/versioned_docs/version-0.23.0/reference/sql-events/introduction.md",sourceDirName:"reference/sql-events",slug:"/reference/sql-events/introduction",permalink:"/docs/0.23.0/reference/sql-events/introduction",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.23.0/reference/sql-events/introduction.md",tags:[],version:"0.23.0",frontMatter:{},sidebar:"docs",previous:{title:"Transactions",permalink:"/docs/0.23.0/reference/sql-mapper/entities/transactions"},next:{title:"Fastify Plugin",permalink:"/docs/0.23.0/reference/sql-events/fastify-plugin"}},l={},p=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-the-sql-events-module"},"Introduction to the sql-events module"),(0,r.kt)("p",null,"The Platformatic DB sql-events uses ",(0,r.kt)("a",{parentName:"p",href:"http://npm.im/mqemitter"},"mqemitter")," to publish events when ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.23.0/reference/sql-mapper/entities/introduction"},"entities")," are saved and deleted."),(0,r.kt)("p",null,"These events are useful to distribute updates to clients, e.g. via WebSocket, Server-Sent Events, or GraphQL Subscritions.\nWhen subscribing and using a multi-process system with a broker like Redis, a subscribed topic will receive the data from all\nthe other processes."),(0,r.kt)("p",null,"They are not the right choice for executing some code whenever an entity is created, modified or deleted, in that case\nuse ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.23.0/reference/sql-mapper/entities/hooks"},"@platformatic/sql-mapper hooks"),"."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"You can use together with ",(0,r.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-mapper"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i @platformatic/sql-mapper @platformatic/sql-events\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { connect } = require('@platformatic/sql-mapper')\nconst { setupEmitter } = require('@platformatic/sql-events')\nconst { pino } = require('pino')\n\nconst log = pino()\n\nasync function onDatabaseLoad (db, sql) {\n  await db.query(sql`CREATE TABLE pages (\n    id SERIAL PRIMARY KEY,\n    title VARCHAR(255) NOT NULL\n  );`)\n}\nconst connectionString = 'postgres://postgres:postgres@localhost:5432/postgres'\nconst mapper = await connect({\n  connectionString,\n  log,\n  onDatabaseLoad,\n  ignore: {},\n  hooks: {\n    Page: {\n      find: async function(_find, opts) {\n        console.log('hook called');\n        return await _find(opts)\n      }\n    }\n  }\n})\n\nsetupEmitter({ mapper, log })\n\nconst pageEntity = mapper.entities.page\n\nconst queue = await mapper.subscribe([\n  pageEntity.getSubscriptionTopic({ action: 'save' }),\n  pageEntity.getSubscriptionTopic({ action: 'delete' })\n])\n\nconst page = await pageEntity.save({\n  input: { title: 'fourth page' }\n})\n\nconst page2 = await pageEntity.save({\n  input: {\n    id: page.id,\n    title: 'fifth page'\n  }\n})\n\nawait pageEntity.delete({\n  where: {\n    id: {\n      eq: page.id\n    }\n  },\n  fields: ['id', 'title']\n})\n\nfor await (const ev of queue) {\n  console.log(ev)\n  if (expected.length === 0) {\n    break\n  }\n}\n\nprocess.exit(0)\n")),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"setupEmitter")," function has the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mq")," - an instance of ",(0,r.kt)("a",{parentName:"li",href:"https://npm.im/mqemitter"},(0,r.kt)("inlineCode",{parentName:"a"},"mqemitter")),", optional.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"setupEmitter")," functions adds the following properties to the ",(0,r.kt)("inlineCode",{parentName:"p"},"mapper")," object:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mq")," \u2014 an instance of ",(0,r.kt)("a",{parentName:"li",href:"https://npm.im/mqemitter"},(0,r.kt)("inlineCode",{parentName:"a"},"mqemitter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subscribe(topics)")," \u2014 a method to create a node ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/api/stream.html#new-streamreadableoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"Readable")),"\nthat will contain the events emitted by those topics.")),(0,r.kt)("p",null,"Each entities of ",(0,r.kt)("inlineCode",{parentName:"p"},"app.platformatic.entities")," will be augmented with two functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entity.getPublishTopic({ ctx, data, action })")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entity.getSubscriptionTopic({ ctx, action })"))),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx")," is the GraphQL Context, ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is the object that will be emitted and ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," is either ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),"."))}u.isMDXComponent=!0}}]);