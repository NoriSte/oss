"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[14683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Migrations",l={unversionedId:"reference/db/migrations",id:"reference/db/migrations",title:"Migrations",description:"It uses Postgrator under the hood to run migrations. Please refer to the Postgrator documentation for guidance on writing migration files.",source:"@site/docs/reference/db/migrations.md",sourceDirName:"reference/db",slug:"/reference/db/migrations",permalink:"/docs/next/reference/db/migrations",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/reference/db/migrations.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/next/reference/db/configuration"},next:{title:"Authorization",permalink:"/docs/next/reference/db/authorization/introduction"}},s={},p=[{value:"How to run migrations",id:"how-to-run-migrations",level:2},{value:"Automatically on server start",id:"automatically-on-server-start",level:3},{value:"Manually with the CLI",id:"manually-with-the-cli",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrations"},"Migrations"),(0,a.kt)("p",null,"It uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/postgrator"},"Postgrator")," under the hood to run migrations. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rickbergfalk/postgrator"},"Postgrator documentation")," for guidance on writing migration files."),(0,a.kt)("p",null,"In brief, you should create a file structure like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"migrations/\n  |- 001.do.sql\n  |- 001.undo.sql\n  |- 002.do.sql\n  |- 002.undo.sql\n  |- 003.do.sql\n  |- 003.undo.sql\n  |- 004.do.sql\n  |- 004.undo.sql\n  |- ... and so on\n")),(0,a.kt)("p",null,"Postgrator uses a table in your schema, to store which migrations have been already processed, so that only new ones will be applied at every server start."),(0,a.kt)("p",null,"You can always rollback some migrations specifing what version you would like to rollback to."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ platformatic db migrations apply --to 002\n")),(0,a.kt)("p",null,"Will execute ",(0,a.kt)("inlineCode",{parentName:"p"},"004.undo.sql"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"003.undo.sql")," in this order. If you keep those files in migrations directory, when the server restarts it will execute ",(0,a.kt)("inlineCode",{parentName:"p"},"003.do.sql")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"004.do.sql")," in this order if the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoApply")," value is true, or you can run the ",(0,a.kt)("inlineCode",{parentName:"p"},"db migrations apply")," command."),(0,a.kt)("p",null,"It's also possible to rollback a single migration with ",(0,a.kt)("inlineCode",{parentName:"p"},"-r"),":   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ platformatic db migrations apply -r \n")),(0,a.kt)("h2",{id:"how-to-run-migrations"},"How to run migrations"),(0,a.kt)("p",null,"There are two ways to run migrations in Platformatic DB. They can be processed automatically when the server starts if the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoApply")," value is true, or you can just run the ",(0,a.kt)("inlineCode",{parentName:"p"},"db migrations apply")," command."),(0,a.kt)("p",null,"In both cases you have to edit your config file to tell Platformatic DB where are your migration files."),(0,a.kt)("h3",{id:"automatically-on-server-start"},"Automatically on server start"),(0,a.kt)("p",null,"To run migrations when Platformatic DB starts, you need to use the config file root property ",(0,a.kt)("inlineCode",{parentName:"p"},"migrations"),"."),(0,a.kt)("p",null,"There are two options in the ",(0,a.kt)("inlineCode",{parentName:"p"},'"migrations"')," property"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dir")," (",(0,a.kt)("em",{parentName:"li"},"required"),") the directory where the migration files are located. It will be relative to the config file path."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"autoApply")," a boolean value that tells Platformatic DB to auto-apply migrations or not (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "migrations": {\n    "dir": "./path/to/migrations/folder",\n    "autoApply": false\n  }\n}\n')),(0,a.kt)("h3",{id:"manually-with-the-cli"},"Manually with the CLI"),(0,a.kt)("p",null,"See documentation about ",(0,a.kt)("inlineCode",{parentName:"p"},"db migrations apply")," ",(0,a.kt)("a",{parentName:"p",href:"../cli#migrate"},"command")),(0,a.kt)("p",null,"In short:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"be sure to define a correct ",(0,a.kt)("inlineCode",{parentName:"li"},"migrations.dir")," folder under the config on ",(0,a.kt)("inlineCode",{parentName:"li"},"platformatic.db.json")),(0,a.kt)("li",{parentName:"ul"},"get the ",(0,a.kt)("inlineCode",{parentName:"li"},"MIGRATION_NUMBER")," (f.e. if the file is named ",(0,a.kt)("inlineCode",{parentName:"li"},"002.do.sql")," will be ",(0,a.kt)("inlineCode",{parentName:"li"},"002"),")"),(0,a.kt)("li",{parentName:"ul"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"npx platformatic db migrations apply --to MIGRATION_NUMBER"))))}c.isMDXComponent=!0}}]);