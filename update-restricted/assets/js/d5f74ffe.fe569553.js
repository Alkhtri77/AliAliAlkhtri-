"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3316],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(v,i(i({ref:n},c),{},{components:t})):a.createElement(v,i({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=t(87462),r=(t(67294),t(3905)),o=t(65488),i=t(85162);const l={sidebar_position:3},s="Use environment variables",u={unversionedId:"how-to/use-environment-variables",id:"how-to/use-environment-variables",title:"Use environment variables",description:"You can use environment variables to compile your Snap.",source:"@site/snaps/how-to/use-environment-variables.md",sourceDirName:"how-to",slug:"/how-to/use-environment-variables",permalink:"/update-restricted/snaps/how-to/use-environment-variables",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-environment-variables.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Communicate errors",permalink:"/update-restricted/snaps/how-to/communicate-errors"},next:{title:"Test a Snap",permalink:"/update-restricted/snaps/how-to/test-a-snap"}},c={},p=[{value:"Use environment variables on the command line",id:"use-environment-variables-on-the-command-line",level:2},{value:"Use environment variables in a <code>.env</code> file",id:"use-environment-variables-in-a-env-file",level:2}],m={toc:p},d="wrapper";function v(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-environment-variables"},"Use environment variables"),(0,r.kt)("p",null,"You can use environment variables to compile your Snap.\nThis is useful if you want to use different variables for testing your Snap locally and publishing\nyour Snap.\nYou can use environment variables ",(0,r.kt)("a",{parentName:"p",href:"#use-environment-variables-on-the-command-line"},"on the command line"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"#use-environment-variables-in-a-env-file"},"in a ",(0,r.kt)("inlineCode",{parentName:"a"},".env")," file"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In addition to the environment variables you set, the following environment variables are set by the\nSnaps CLI:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'NODE_ENV="production"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NODE_DEBUG=false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DEBUG=false")))),(0,r.kt)("h2",{id:"use-environment-variables-on-the-command-line"},"Use environment variables on the command line"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify environment variables on the command line.\nFor example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PUBLIC_KEY=abc123 SNAP_ENV=dev\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build your Snap using the ",(0,r.kt)("a",{parentName:"p",href:"/update-restricted/snaps/reference/cli/subcommands"},"Snaps CLI"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn mm-snap build\n")))),(0,r.kt)("h2",{id:"use-environment-variables-in-a-env-file"},"Use environment variables in a ",(0,r.kt)("inlineCode",{parentName:"h2"},".env")," file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify environment variables in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file.\nFor example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title=".env"',title:'".env"'},"PUBLIC_KEY=abc123\nSNAP_ENV=dev\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify the environment variables in your Snap's\n",(0,r.kt)("a",{parentName:"p",href:"/update-restricted/snaps/learn/about-snaps/files#configuration-file"},"configuration file")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," option.\nFor example:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="snap.config.js"',title:'"snap.config.js"'},'require("dotenv").config();\n\nmodule.exports = {\n    environment: {\n        SNAP_ENV: process.env.SNAP_ENV,\n        PUBLIC_KEY: process.env.PUBLIC_KEY,\n    },\n    // Other options\n};\n'))),(0,r.kt)(i.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="snap.config.ts"',title:'"snap.config.ts"'},'import type { SnapConfig } from "@metamask/snaps-cli";\nimport * as dotenv from "dotenv";\ndotenv.config();\n\nconst config: SnapConfig = {\n    environment: {\n        SNAP_ENV: process.env.SNAP_ENV,\n        PUBLIC_KEY: process.env.PUBLIC_KEY,\n    },\n    // Other options\n};\n\nexport default config;\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can also use environment variables directly in your Snap.\nFor example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import { panel, text, heading } from \'@metamask/snaps-sdk\';\n\nawait snap.request({\n    method: "snap_dialog",\n    params: {\n        type: "alert",\n        content: panel([\n            heading("This custom alert is just for display purposes."),\n            text("SNAP_ENV is ${process.env.SNAP_ENV}, PUBLIC_KEY is ${process.env.PUBLIC_KEY}"),\n        ]),\n    },\n});\n')))))}v.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(87462),r=t(67294),o=t(86010),i=t(12466),l=t(70989),s=t(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),a=c[t].value;a!==l&&(m(n),s(a))},v=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>p.push(e),onKeyDown:v,onClick:d},i,{className:(0,o.Z)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":l===n})}),t??n)})))}function p(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function m(e){const n=(0,l.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",u.tabList)},r.createElement(c,(0,a.Z)({},e,n)),r.createElement(p,(0,a.Z)({},e,n)))}function d(e){const n=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},70989:(e,n,t)=>{t.d(n,{Y:()=>m});var a=t(67294),r=t(16550),o=t(91980),i=t(67392),l=t(50012);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??s(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function c(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=u(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[m,d]=p({queryString:t,groupId:r}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,l.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=m??v;return c({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,o]),tabValues:o}}}}]);