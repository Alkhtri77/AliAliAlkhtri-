"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9664],{46593:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=s(74848),n=s(28453);const r={sidebar_label:"Other web frameworks",sidebar_position:3,description:"Set up the SDK in other web frameworks.",tags:["JavaScript SDK"]},i="Use MetaMask SDK with other web frameworks",o={id:"how-to/use-sdk/javascript/other-web-frameworks",title:"Use MetaMask SDK with other web frameworks",description:"Set up the SDK in other web frameworks.",source:"@site/wallet/how-to/use-sdk/javascript/other-web-frameworks.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/other-web-frameworks",permalink:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/other-web-frameworks",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/other-web-frameworks.md",tags:[{label:"JavaScript SDK",permalink:"/fix-devnet-link/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Other web frameworks",sidebar_position:3,description:"Set up the SDK in other web frameworks.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Pure JavaScript",permalink:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/pure-js"},next:{title:"React Native and Expo",permalink:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/react-native"}},l={},d=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"use-metamask-sdk-with-other-web-frameworks",children:"Use MetaMask SDK with other web frameworks"}),"\n",(0,a.jsxs)(t.p,{children:["Import ",(0,a.jsx)(t.a,{href:"/fix-devnet-link/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your web dapp to enable your users to\neasily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for other web frameworks has the ",(0,a.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/#prerequisites",children:"same prerequisites"})," as for\nstandard JavaScript."]}),"\n",(0,a.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(t.h3,{id:"1-install-the-sdk",children:"1. Install the SDK"}),"\n",(0,a.jsx)(t.p,{children:"In your project directory, install the SDK using Yarn or npm:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add @metamask/sdk\n"})}),"\n",(0,a.jsx)(t.p,{children:"or"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm i @metamask/sdk\n"})}),"\n",(0,a.jsx)(t.h3,{id:"2-import-the-sdk",children:"2. Import the SDK"}),"\n",(0,a.jsx)(t.p,{children:"In your project script, add the following to import the SDK:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { MetaMaskSDK } from "@metamask/sdk";\n'})}),"\n",(0,a.jsx)(t.h3,{id:"3-instantiate-the-sdk",children:"3. Instantiate the SDK"}),"\n",(0,a.jsxs)(t.p,{children:["Instantiate the SDK using any ",(0,a.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/sdk-js-options",children:"options"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="index.js"',children:'const MMSDK = new MetaMaskSDK(\n  dappMetadata: {\n    name: "Example JavaScript Dapp",\n    url: window.location.href,\n  },\n  infuraAPIKey: process.env.INFURA_API_KEY,\n  // Other options\n);\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/sdk-js-options#dappmetadata",children:(0,a.jsx)(t.code,{children:"dappMetadata"})})," to display information\nabout your dapp in the MetaMask connection modal."]}),"\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/sdk-js-options#infuraapikey",children:(0,a.jsx)(t.code,{children:"infuraAPIKey"})})," to\n",(0,a.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"make read-only RPC requests"})," from your dapp."]}),"\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/sdk-js-options#modals",children:(0,a.jsx)(t.code,{children:"modals"})})," to ",(0,a.jsx)(t.a,{href:"display-custom-modals.md",children:"customize the logic and UI of\nthe displayed modals"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"4-use-the-sdk",children:"4. Use the SDK"}),"\n",(0,a.jsxs)(t.p,{children:["Use the SDK by calling any ",(0,a.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/provider-api",children:"provider API methods"}),".\nAlways call ",(0,a.jsx)(t.a,{href:"/wallet/reference/eth_requestaccounts",children:(0,a.jsx)(t.code,{children:"eth_requestAccounts"})})," using\n",(0,a.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/provider-api#request",children:(0,a.jsx)(t.code,{children:"request()"})})," first, since it\nprompts the installation or connection popup to appear."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'ethereum.request({ method: "eth_requestAccounts", params: [] });\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You can also call the SDK's ",(0,a.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/connect-and-sign",children:(0,a.jsx)(t.code,{children:"connectAndSign"})})," method, and\n",(0,a.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests",children:"batch multiple JSON-RPC requests"})," using the ",(0,a.jsx)(t.code,{children:"metamask_batch"})," method."]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.p,{children:"You can copy the full JavaScript example to get started:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { MetaMaskSDK } from "@metamask/sdk";\n\nconst MMSDK = new MetaMaskSDK(\n  dappMetadata: {\n    name: "Example JavaScript Dapp",\n    url: window.location.href,\n  },\n  infuraAPIKey: process.env.INFURA_API_KEY,\n  // Other options\n);\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n\nethereum.request({ method: "eth_requestAccounts", params: [] });\n'})}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples",children:"example JavaScript dapps"}),"\nin the JavaScript SDK GitHub repository for more information."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var a=s(96540);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);