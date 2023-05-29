"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[91483],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={},l="Example",s={unversionedId:"reference/sql-mapper/entities/example",id:"version-0.21.1/reference/sql-mapper/entities/example",title:"Example",description:"Given this PostgreSQL SQL schema:",source:"@site/versioned_docs/version-0.21.1/reference/sql-mapper/entities/example.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/example",permalink:"/docs/0.21.1/reference/sql-mapper/entities/example",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.21.1/reference/sql-mapper/entities/example.md",tags:[],version:"0.21.1",frontMatter:{},sidebar:"docs",previous:{title:"API",permalink:"/docs/0.21.1/reference/sql-mapper/entities/api"},next:{title:"Hooks",permalink:"/docs/0.21.1/reference/sql-mapper/entities/hooks"}},o={},c=[],p={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"example"},"Example"),(0,a.kt)("p",null,"Given this PostgreSQL SQL schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE "categories" (\n    "id" int4 NOT NULL DEFAULT nextval(\'categories_id_seq\'::regclass),\n    "name" varchar(255) NOT NULL,\n    PRIMARY KEY ("id")\n);\n\nCREATE TABLE "pages" (\n    "id" int4 NOT NULL DEFAULT nextval(\'pages_id_seq\'::regclass),\n    "title" varchar(255) NOT NULL,\n    "category_id" int4,\n    "user_id" int4,\n    PRIMARY KEY ("id")\n);\n\nALTER TABLE "pages" ADD FOREIGN KEY ("category_id") REFERENCES "categories"("id");\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"app.platformatic.entities")," will contain this mapping object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "category": {\n        "name": "Category",\n        "singularName": "category",\n        "pluralName": "categories",\n        "primaryKey": "id",\n        "table": "categories",\n        "fields": {\n            "id": {\n                "sqlType": "int4",\n                "isNullable": false,\n                "primaryKey": true,\n                "camelcase": "id"\n            },\n            "name": {\n                "sqlType": "varchar",\n                "isNullable": false,\n                "camelcase": "name"\n            }\n        },\n        "camelCasedFields": {\n            "id": {\n                "sqlType": "int4",\n                "isNullable": false,\n                "primaryKey": true,\n                "camelcase": "id"\n            },\n            "name": {\n                "sqlType": "varchar",\n                "isNullable": false,\n                "camelcase": "name"\n            }\n        },\n        "relations": [],\n        "reverseRelationships": [\n            {\n                "sourceEntity": "Page",\n                "relation": {\n                    "constraint_catalog": "postgres",\n                    "constraint_schema": "public",\n                    "constraint_name": "pages_category_id_fkey",\n                    "table_catalog": "postgres",\n                    "table_schema": "public",\n                    "table_name": "pages",\n                    "constraint_type": "FOREIGN KEY",\n                    "is_deferrable": "NO",\n                    "initially_deferred": "NO",\n                    "enforced": "YES",\n                    "column_name": "category_id",\n                    "ordinal_position": 1,\n                    "position_in_unique_constraint": 1,\n                    "foreign_table_name": "categories",\n                    "foreign_column_name": "id"\n                }\n            }\n        ]\n    },\n    "page": {\n        "name": "Page",\n        "singularName": "page",\n        "pluralName": "pages",\n        "primaryKey": "id",\n        "table": "pages",\n        "fields": {\n            "id": {\n                "sqlType": "int4",\n                "isNullable": false,\n                "primaryKey": true,\n                "camelcase": "id"\n            },\n            "title": {\n                "sqlType": "varchar",\n                "isNullable": false,\n                "camelcase": "title"\n            },\n            "category_id": {\n                "sqlType": "int4",\n                "isNullable": true,\n                "foreignKey": true,\n                "camelcase": "categoryId"\n            },\n            "user_id": {\n                "sqlType": "int4",\n                "isNullable": true,\n                "camelcase": "userId"\n            }\n        },\n        "camelCasedFields": {\n            "id": {\n                "sqlType": "int4",\n                "isNullable": false,\n                "primaryKey": true,\n                "camelcase": "id"\n            },\n            "title": {\n                "sqlType": "varchar",\n                "isNullable": false,\n                "camelcase": "title"\n            },\n            "categoryId": {\n                "sqlType": "int4",\n                "isNullable": true,\n                "foreignKey": true,\n                "camelcase": "categoryId"\n            },\n            "userId": {\n                "sqlType": "int4",\n                "isNullable": true,\n                "camelcase": "userId"\n            }\n        },\n        "relations": [\n            {\n                "constraint_catalog": "postgres",\n                "constraint_schema": "public",\n                "constraint_name": "pages_category_id_fkey",\n                "table_catalog": "postgres",\n                "table_schema": "public",\n                "table_name": "pages",\n                "constraint_type": "FOREIGN KEY",\n                "is_deferrable": "NO",\n                "initially_deferred": "NO",\n                "enforced": "YES",\n                "column_name": "category_id",\n                "ordinal_position": 1,\n                "position_in_unique_constraint": 1,\n                "foreign_table_name": "categories",\n                "foreign_column_name": "id"\n            }\n        ],\n        "reverseRelationships": []\n    }\n}\n')))}m.isMDXComponent=!0}}]);