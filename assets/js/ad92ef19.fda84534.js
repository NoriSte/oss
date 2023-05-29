"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[50259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},o="Deployment",l={unversionedId:"guides/deployment/deployment",id:"version-0.23.2/guides/deployment/deployment",title:"Deployment",description:"Applications built with Platformatic DB can be deployed to a hosting service",source:"@site/versioned_docs/version-0.23.2/guides/deployment/deployment.md",sourceDirName:"guides/deployment",slug:"/guides/deployment/",permalink:"/docs/0.23.2/guides/deployment/",draft:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/versioned_docs/version-0.23.2/guides/deployment/deployment.md",tags:[],version:"0.23.2",frontMatter:{},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/0.23.2/category/guides"},next:{title:"Deploy to Fly.io with SQLite",permalink:"/docs/0.23.2/guides/deployment/deploy-to-fly-io-with-sqlite"}},p={},s=[{value:"Running a Platformatic DB application",id:"running-a-platformatic-db-application",level:2},{value:"Make the Platformatic CLI available",id:"make-the-platformatic-cli-available",level:3},{value:"Define an npm run script",id:"define-an-npm-run-script",level:3},{value:"Server configuration",id:"server-configuration",level:2},{value:"Configuration with environment variables",id:"configuration-with-environment-variables",level:3},{value:"Configure the server port",id:"configure-the-server-port",level:3},{value:"Listen on all network interfaces",id:"listen-on-all-network-interfaces",level:3},{value:"Security considerations",id:"security-considerations",level:3},{value:"Removing the welcome page",id:"removing-the-welcome-page",level:3},{value:"Databases",id:"databases",level:2},{value:"Applying migrations",id:"applying-migrations",level:3},{value:"SQLite",id:"sqlite",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"Applications built with Platformatic DB can be deployed to a hosting service\nin the same way as any other Node.js application. This guide covers a few\nthings that will help smooth the path from development to production."),(0,i.kt)("h2",{id:"running-a-platformatic-db-application"},"Running a Platformatic DB application"),(0,i.kt)("h3",{id:"make-the-platformatic-cli-available"},"Make the Platformatic CLI available"),(0,i.kt)("p",null,"To run a Platformatic DB application, the Platformatic CLI must be available\nin the production environment. The most straightforward way of achieving this\nis to ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.23.2/reference/cli#installation-and-usage"},"install it as a project dependency"),".\nThis means that when ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm ci"),") is run as part of your\nbuild/deployment process, the Platformatic CLI will be installed."),(0,i.kt)("h3",{id:"define-an-npm-run-script"},"Define an npm run script"),(0,i.kt)("p",null,"A number of hosting services will automatically detect if your project's\n",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," npm run script. They will then execute the command\n",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," to run your application in production."),(0,i.kt)("p",null,"You can add ",(0,i.kt)("inlineCode",{parentName:"p"},"platformatic db start")," as the command for your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),"\nnpm run script, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   ...\n  "scripts": {\n    "start": "platformatic db start",\n  },\n}\n')),(0,i.kt)("h2",{id:"server-configuration"},"Server configuration"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.23.2/reference/db/configuration"},"Configuration")," reference for all\nconfiguration settings.")),(0,i.kt)("h3",{id:"configuration-with-environment-variables"},"Configuration with environment variables"),(0,i.kt)("p",null,"We recommend that you use ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.23.2/reference/db/configuration#environment-variable-placeholders"},"environment variable placeholders"),"\nin your Platformatic DB configuration. This will allow you to configure\ndifferent settings in your development and production environments."),(0,i.kt)("p",null,"In development you can set the  environment variables via a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},".env"))," file\nthat will be automatically loaded by Platformatic DB. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PORT=3042\nPLT_SERVER_HOSTNAME=127.0.0.1\n")),(0,i.kt)("p",null,"In production your hosting provider will typically provide their own mechanism\nfor setting environment variables."),(0,i.kt)("h3",{id:"configure-the-server-port"},"Configure the server port"),(0,i.kt)("p",null,"Configure the port that the server will listen on by setting an environment\nvariable placeholder in your Platformatic DB configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "server": {\n    ...\n    "port": "{PORT}"\n  },\n  ...\n}\n')),(0,i.kt)("h3",{id:"listen-on-all-network-interfaces"},"Listen on all network interfaces"),(0,i.kt)("p",null,"Most hosting providers require that you configure your server to bind to all\navailable network interfaces. To do this you must set the server hostname to\n",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"."),(0,i.kt)("p",null,"This can be handled with an environment variable placeholder in your Platformatic\nDB configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "server": {\n    ...\n    "hostname": "{PLT_SERVER_HOSTNAME}",\n  },\n  ...\n}\n')),(0,i.kt)("p",null,"The environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"PLT_SERVER_HOSTNAME")," should then be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"\nin your hosting environment."),(0,i.kt)("h3",{id:"security-considerations"},"Security considerations"),(0,i.kt)("p",null,"We recommend disabling the GraphiQL web UI in production. It can be disabled\nwith the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "db": {\n    ...\n    "graphql": {\n      "graphiql": false\n    }\n  },\n  ...\n}\n')),(0,i.kt)("p",null,"If you want to use this feature in development, replace the configuration\nvalues with ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.23.2/reference/db/configuration#environment-variable-placeholders"},"environment variable placeholders"),"\nso you can set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in development and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in production."),(0,i.kt)("h3",{id:"removing-the-welcome-page"},"Removing the welcome page"),(0,i.kt)("p",null,"If you want to remove the welcome page, you should register an index route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async function (app) {\n  // removing the welcome page\n  app.get('/', (req, reply) => {\n    return { hello: 'world' }\n  })\n}\n")),(0,i.kt)("h2",{id:"databases"},"Databases"),(0,i.kt)("h3",{id:"applying-migrations"},"Applying migrations"),(0,i.kt)("p",null,"If you're running a single instance of your application in production, it's\nbest to allow Platformatic DB to automatically run migrations when the server\nstarts is. This reduces the chance of a currently running instance using a\ndatabase structure it doesn't understand while the new version is still being\ndeployed."),(0,i.kt)("h3",{id:"sqlite"},"SQLite"),(0,i.kt)("p",null,"When using an SQLite database, you can ensure you don\u2019t commit it to your Git\nrepository by adding the SQLite database filename to your ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file.\nThe SQLite database file will be automatically generated by Platformatic DB\nwhen your application migrations are run in production."))}u.isMDXComponent=!0}}]);