"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(o,".").concat(u)]||d[u]||f[u]||s;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const s={description:"Include and retrieve static files in the Snap bundle.",sidebar_position:5},r="Static files",l={unversionedId:"features/static-files",id:"features/static-files",title:"Static files",description:"Include and retrieve static files in the Snap bundle.",source:"@site/snaps/features/static-files.md",sourceDirName:"features",slug:"/features/static-files",permalink:"/dependabot/npm_and_yarn/webpack-dev-middleware-5.3.4/snaps/features/static-files",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/static-files.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Include and retrieve static files in the Snap bundle.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Security guidelines",permalink:"/dependabot/npm_and_yarn/webpack-dev-middleware-5.3.4/snaps/features/custom-evm-accounts/security"},next:{title:"Custom name resolution",permalink:"/dependabot/npm_and_yarn/webpack-dev-middleware-5.3.4/snaps/features/custom-name-resolution"}},o={},p=[{value:"Steps",id:"steps",level:2},{value:"1. Specify static files in the Snap&#39;s manifest file",id:"1-specify-static-files-in-the-snaps-manifest-file",level:3},{value:"2. Load static files using <code>snap_getFile</code>",id:"2-load-static-files-using-snap_getfile",level:3}],c={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"static-files"},"Static files"),(0,i.kt)("p",null,"You can handle static files in your Snap bundle using the\n",(0,i.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/webpack-dev-middleware-5.3.4/snaps/reference/snaps-api#snap_getfile"},(0,i.kt)("inlineCode",{parentName:"a"},"snap_getFile"))," API method.\nThis is useful to load Wasm modules, ZK circuits, or any other files that must be lazily loaded."),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"1-specify-static-files-in-the-snaps-manifest-file"},"1. Specify static files in the Snap's manifest file"),(0,i.kt)("p",null,"Specify static files as an array in the ",(0,i.kt)("inlineCode",{parentName:"p"},"source.files")," field of your Snap's\n",(0,i.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/webpack-dev-middleware-5.3.4/snaps/learn/about-snaps/files#manifest-file"},"manifest file"),".\nFile paths are relative to the Snap package root, that is, one level above the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'{\n    "source": {\n        "shasum": "xxx",\n        "location": {\n            // ...\n        },\n        "files": [\n            "./files/myfile.bin"\n        ]\n     }\n}\n')),(0,i.kt)("h3",{id:"2-load-static-files-using-snap_getfile"},"2. Load static files using ",(0,i.kt)("inlineCode",{parentName:"h3"},"snap_getFile")),(0,i.kt)("p",null,"In your Snap code, load static files using ",(0,i.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/webpack-dev-middleware-5.3.4/snaps/reference/snaps-api#snap_getfile"},(0,i.kt)("inlineCode",{parentName:"a"},"snap_getFile")),".\nThis method returns a string in the encoding specified, with a default of Base64 if no encoding is specified.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="snap/src/index.js"',title:'"snap/src/index.js"'},'const contents = await snap.request({\n    method: "snap_getFile",\n    params: {\n        path: "./files/myfile.bin",\n        encoding: "hex",\n    },\n});\n\n// `0x...`\nconsole.log(contents);\n')))}f.isMDXComponent=!0}}]);