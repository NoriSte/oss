"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[67563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},l="Fields",s={unversionedId:"reference/sql-mapper/entities/fields",id:"version-0.23.0/reference/sql-mapper/entities/fields",title:"Fields",description:"When Platformatic DB inspects a database's schema, it creates an object for each table that contains a mapping of their fields.",source:"@site/versioned_docs/version-0.23.0/reference/sql-mapper/entities/fields.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/fields",permalink:"/docs/0.23.0/reference/sql-mapper/entities/fields",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.23.0/reference/sql-mapper/entities/fields.md",tags:[],version:"0.23.0",frontMatter:{},sidebar:"docs",previous:{title:"Introduction to Entities",permalink:"/docs/0.23.0/reference/sql-mapper/entities/introduction"},next:{title:"API",permalink:"/docs/0.23.0/reference/sql-mapper/entities/api"}},o={},p=[{value:"Fields detail",id:"fields-detail",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fields"},"Fields"),(0,i.kt)("p",null,"When Platformatic DB inspects a database's schema, it creates an object for each table that contains a mapping of their fields."),(0,i.kt)("p",null,"These objects contain the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"singularName"),": singular entity name, based on table name. Uses ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/inflected"},"inflected")," under the hood."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pluralName"),": plural entity name (i.e ",(0,i.kt)("inlineCode",{parentName:"li"},"'pages'"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"primaryKey"),": the field which is identified as primary key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table"),": original table name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fields"),": an object containing all fields details. Object key is the field name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"camelCasedFields"),": an object containing all fields details in camelcase. If you have a column named ",(0,i.kt)("inlineCode",{parentName:"li"},"user_id")," you can access it using both ",(0,i.kt)("inlineCode",{parentName:"li"},"userId")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"user_id"))),(0,i.kt)("h2",{id:"fields-detail"},"Fields detail"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sqlType"),": The original field type. It may vary depending on the underlying DB Engine"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isNullable"),": Whether the field can be ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," or not"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"primaryKey"),": Whether the field is the primary key or not"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"camelcase"),": The ",(0,i.kt)("em",{parentName:"li"},"camelcased")," value of the field")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Given this SQL Schema (for PostgreSQL):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},'CREATE SEQUENCE IF NOT EXISTS pages_id_seq;\nCREATE TABLE "public"."pages" (\n    "id" int4 NOT NULL DEFAULT nextval(\'pages_id_seq\'::regclass),\n    "title" varchar,\n    "body_content" text,\n    "category_id" int4,\n    PRIMARY KEY ("id")\n);\n')),(0,i.kt)("p",null,"The resulting mapping object will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  singularName: 'page',\n  pluralName: 'pages',\n  primaryKey: 'id',\n  table: 'pages',\n  fields: {\n    id: {\n      sqlType: 'int4',\n      isNullable: false,\n      primaryKey: true,\n      camelcase: 'id'\n    },\n    title: {\n      sqlType: 'varchar',\n      isNullable: true,\n      camelcase: 'title'\n    },\n    body_content: {\n      sqlType: 'text',\n      isNullable: true,\n      camelcase: 'bodyContent'\n    },\n    category_id: {\n      sqlType: 'int4',\n      isNullable: true,\n      foreignKey: true,\n      camelcase: 'categoryId'\n    }\n  }\n  camelCasedFields: {\n    id: {\n      sqlType: 'int4',\n      isNullable: false,\n      primaryKey: true,\n      camelcase: 'id'\n    },\n    title: {\n      sqlType: 'varchar',\n      isNullable: true,\n      camelcase: 'title'\n    },\n    bodyContent: {\n      sqlType: 'text',\n      isNullable: true,\n      camelcase: 'bodyContent'\n    },\n    categoryId: {\n      sqlType: 'int4',\n      isNullable: true,\n      foreignKey: true,\n      camelcase: 'categoryId'\n    }\n  },\n  relations: []\n}\n")))}d.isMDXComponent=!0}}]);