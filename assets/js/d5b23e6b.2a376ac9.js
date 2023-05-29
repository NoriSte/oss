"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[32174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},i="API",o={unversionedId:"reference/sql-mapper/entities/api",id:"version-0.22.0/reference/sql-mapper/entities/api",title:"API",description:"A set of operation methods are available on each entity:",source:"@site/versioned_docs/version-0.22.0/reference/sql-mapper/entities/api.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/api",permalink:"/docs/0.22.0/reference/sql-mapper/entities/api",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.22.0/reference/sql-mapper/entities/api.md",tags:[],version:"0.22.0",frontMatter:{},sidebar:"docs",previous:{title:"Fields",permalink:"/docs/0.22.0/reference/sql-mapper/entities/fields"},next:{title:"Example",permalink:"/docs/0.22.0/reference/sql-mapper/entities/example"}},p={},d=[{value:"Returned fields",id:"returned-fields",level:2},{value:"Where clause",id:"where-clause",level:2},{value:"Examples",id:"examples",level:3},{value:"Selects row with <code>id = 1</code>",id:"selects-row-with-id--1",level:4},{value:"Select all rows with id less than 100",id:"select-all-rows-with-id-less-than-100",level:4},{value:"Select all rows with id 1, 3, 5 or 7",id:"select-all-rows-with-id-1-3-5-or-7",level:4},{value:"Select all rows with id 1 or 3",id:"select-all-rows-with-id-1-or-3",level:4},{value:"Select all rows with id 1 or 3 and title like &#39;foo%&#39;",id:"select-all-rows-with-id-1-or-3-and-title-like-foo",level:3},{value:"Reference",id:"reference",level:2},{value:"<code>find</code>",id:"find",level:3},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4},{value:"<code>count</code>",id:"count",level:3},{value:"Options",id:"options-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"<code>insert</code>",id:"insert",level:3},{value:"Options",id:"options-2",level:4},{value:"Usage",id:"usage-2",level:4},{value:"<code>save</code>",id:"save",level:3},{value:"Options",id:"options-3",level:4},{value:"Usage",id:"usage-3",level:4},{value:"<code>delete</code>",id:"delete",level:3},{value:"Options",id:"options-4",level:4},{value:"Usage",id:"usage-4",level:4},{value:"<code>updateMany</code>",id:"updatemany",level:3},{value:"Options",id:"options-5",level:4},{value:"Usage",id:"usage-5",level:4}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api"},"API"),(0,r.kt)("p",null,"A set of operation methods are available on each entity:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#find"},(0,r.kt)("inlineCode",{parentName:"a"},"find"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#count"},(0,r.kt)("inlineCode",{parentName:"a"},"count"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#insert"},(0,r.kt)("inlineCode",{parentName:"a"},"insert"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#save"},(0,r.kt)("inlineCode",{parentName:"a"},"save"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#delete"},(0,r.kt)("inlineCode",{parentName:"a"},"delete"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#updatemany"},(0,r.kt)("inlineCode",{parentName:"a"},"updateMany")))),(0,r.kt)("h2",{id:"returned-fields"},"Returned fields"),(0,r.kt)("p",null,"The entity operation methods accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," option that can specify an array of field names to be returned. If not specified, all fields will be returned."),(0,r.kt)("h2",{id:"where-clause"},"Where clause"),(0,r.kt)("p",null,"The entity operation methods accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," option to allow limiting of the database rows that will be affected by the operation."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," object's key is the field you want to check, the value is a key/value map where the key is an operator (see the table below) and the value is the value you want to run the operator against."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platformatic operator"),(0,r.kt)("th",{parentName:"tr",align:null},"SQL operator"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eq"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'='"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"in"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'IN'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'NOT IN'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"neq"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'<>'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'>'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gte"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'>='"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'<'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lte"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'<='"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"like"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'LIKE'"))))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"selects-row-with-id--1"},"Selects row with ",(0,r.kt)("inlineCode",{parentName:"h4"},"id = 1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  ...\n  "where": {\n    id: {\n      eq: 1\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"select-all-rows-with-id-less-than-100"},"Select all rows with id less than 100"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  ...\n  "where": {\n    id: {\n      lt: 100\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"select-all-rows-with-id-1-3-5-or-7"},"Select all rows with id 1, 3, 5 or 7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  ...\n  "where": {\n    id: {\n      in: [1, 3, 5, 7]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Where clause operations are by default combined with the ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," operator. To combine them with the ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," operator, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," key."),(0,r.kt)("h4",{id:"select-all-rows-with-id-1-or-3"},"Select all rows with id 1 or 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  ...\n  "where": {\n    or: [\n      {\n        id: {\n          eq: 1\n        }\n      },\n      {\n        id: {\n          eq: 3\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"select-all-rows-with-id-1-or-3-and-title-like-foo"},"Select all rows with id 1 or 3 and title like 'foo%'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n  ...\n  \"where\": {\n    or: [\n      {\n        id: {\n          eq: 1\n        }\n      },\n      {\n        id: {\n          eq: 3\n        }\n      }\n    ],\n    title: {\n      like: 'foo%'\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"find"},(0,r.kt)("inlineCode",{parentName:"h3"},"find")),(0,r.kt)("p",null,"Retrieve data for an entity from the database."),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fields")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"List of fields to be returned for each object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"where")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#where-clause"},"Where clause \ud83d\udd17"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"orderBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Object like ",(0,r.kt)("inlineCode",{parentName:"td"},"{ field: 'counter', direction: 'ASC' }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"Limits the number of returned elements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offset")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"The offset to start looking for rows from")))),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst { connect } = require('@platformatic/sql-mapper')\nconst { pino } = require('pino')\nconst pretty = require('pino-pretty')\nconst logger = pino(pretty())\n\nasync function main() {\n  const pgConnectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'\n  const mapper = await connect({\n    connectionString: pgConnectionString,\n    log: logger,\n  })\n  const res = await mapper.entities.page.find({\n    fields: ['id', 'title',],\n    where: {\n      id: {\n        lt: 10\n      }\n    },\n  })\n  logger.info(res)\n  await mapper.db.dispose()\n}\nmain()\n")),(0,r.kt)("h3",{id:"count"},(0,r.kt)("inlineCode",{parentName:"h3"},"count")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"find"),", but only count entities. "),(0,r.kt)("h4",{id:"options-1"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"where")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#where-clause"},"Where clause \ud83d\udd17"))))),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst { connect } = require('@platformatic/sql-mapper')\nconst { pino } = require('pino')\nconst pretty = require('pino-pretty')\nconst logger = pino(pretty())\n\nasync function main() {\n  const pgConnectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'\n  const mapper = await connect({\n    connectionString: pgConnectionString,\n    log: logger,\n  })\n  const res = await mapper.entities.page.count({\n    where: {\n      id: {\n        lt: 10\n      }\n    },\n  })\n  logger.info(res)\n  await mapper.db.dispose()\n}\nmain()\n")),(0,r.kt)("h3",{id:"insert"},(0,r.kt)("inlineCode",{parentName:"h3"},"insert")),(0,r.kt)("p",null,"Insert one or more entity rows in the database."),(0,r.kt)("h4",{id:"options-2"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fields")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"List of fields to be returned for each object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inputs")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Each object is a new row")))),(0,r.kt)("h4",{id:"usage-2"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst { connect } = require('@platformatic/sql-mapper')\nconst { pino } = require('pino')\nconst pretty = require('pino-pretty')\nconst logger = pino(pretty())\n\nasync function main() {\n  const pgConnectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'\n  const mapper = await connect({\n    connectionString: pgConnectionString,\n    log: logger,\n  })\n  const res = await mapper.entities.page.insert({\n    fields: ['id', 'title' ],\n      inputs: [\n        { title: 'Foobar' },\n        { title: 'FizzBuzz' }\n      ],\n  })\n  logger.info(res)\n  /**\n    0: {\n      \"id\": \"16\",\n      \"title\": \"Foobar\"\n    }\n    1: {\n      \"id\": \"17\",\n      \"title\": \"FizzBuzz\"\n    }\n  */\n  await mapper.db.dispose()\n}\nmain()\n")),(0,r.kt)("h3",{id:"save"},(0,r.kt)("inlineCode",{parentName:"h3"},"save")),(0,r.kt)("p",null,"Create a new entity row in the database or update an existing one."),(0,r.kt)("p",null,"To update an existing entity, the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field (or equivalent primary key) must be included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," object.\n",(0,r.kt)("inlineCode",{parentName:"p"},"save")," actually behaves as an ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert"),", allowing both behaviours depending on the presence of the primary key field."),(0,r.kt)("h4",{id:"options-3"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fields")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"List of fields to be returned for each object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"The single row to create/update")))),(0,r.kt)("h4",{id:"usage-3"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nconst { connect } = require('@platformatic/sql-mapper')\nconst { pino } = require('pino')\nconst pretty = require('pino-pretty')\nconst logger = pino(pretty())\n\nasync function main() {\n  const connectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'\n  const mapper = await connect({\n    connectionString: connectionString,\n    log: logger,\n  })\n  const res = await mapper.entities.page.save({\n    fields: ['id', 'title' ],\n      input: { id: 1, title: 'FizzBuzz' },\n  })\n  logger.info(res)\n  await mapper.db.dispose()\n}\nmain()\n")),(0,r.kt)("h3",{id:"delete"},(0,r.kt)("inlineCode",{parentName:"h3"},"delete")),(0,r.kt)("p",null,"Delete one or more entity rows from the database, depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," option. Returns the data for all deleted objects."),(0,r.kt)("h4",{id:"options-4"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fields")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"List of fields to be returned for each object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"where")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#where-clause"},"Where clause \ud83d\udd17"))))),(0,r.kt)("h4",{id:"usage-4"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nconst { connect } = require('@platformatic/sql-mapper')\nconst { pino } = require('pino')\nconst pretty = require('pino-pretty')\nconst logger = pino(pretty())\n\nasync function main() {\n  const connectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'\n  const mapper = await connect({\n    connectionString: connectionString,\n    log: logger,\n  })\n  const res = await mapper.entities.page.delete({\n    fields: ['id', 'title',],\n    where: {\n      id: {\n        lt: 4\n      }\n    },\n  })\n  logger.info(res)\n  await mapper.db.dispose()\n}\nmain()\n\n")),(0,r.kt)("h3",{id:"updatemany"},(0,r.kt)("inlineCode",{parentName:"h3"},"updateMany")),(0,r.kt)("p",null,"Update one or more entity rows from the database, depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," option. Returns the data for all updated objects."),(0,r.kt)("h4",{id:"options-5"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"where")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#where-clause"},"Where clause \ud83d\udd17"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"The new values that want to update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fields")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"List of fields to be returned for each object")))),(0,r.kt)("h4",{id:"usage-5"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nconst { connect } = require('@platformatic/sql-mapper')\nconst { pino } = require('pino')\nconst pretty = require('pino-pretty')\nconst logger = pino(pretty())\n\nasync function main() {\n  const connectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'\n  const mapper = await connect({\n    connectionString: connectionString,\n    log: logger,\n  })\n  const res = await mapper.entities.page.updateMany({\n    fields: ['id', 'title',],\n    where: {\n      counter: {\n        gte: 30\n      }\n    },\n    input: { \n      title: 'Updated title'\n    }\n  })\n  logger.info(res)\n  await mapper.db.dispose()\n}\nmain()\n\n")))}m.isMDXComponent=!0}}]);