"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5685],{83288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=a(74848),n=a(28453);const r={sidebar_label:"Pure JavaScript",sidebar_position:2,description:"Set up the SDK in your Pure JavaScript dapp.",tags:["JavaScript SDK"]},i="Use MetaMask SDK with pure JavaScript",o={id:"how-to/use-sdk/javascript/pure-js",title:"Use MetaMask SDK with pure JavaScript",description:"Set up the SDK in your Pure JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/javascript/pure-js.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/pure-js",permalink:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/pure-js",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/pure-js.md",tags:[{label:"JavaScript SDK",permalink:"/fix-devnet-link/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Pure JavaScript",sidebar_position:2,description:"Set up the SDK in your Pure JavaScript dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React UI",permalink:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/react/react-ui"},next:{title:"Other web frameworks",permalink:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/other-web-frameworks"}},c={},l=[{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"use-metamask-sdk-with-pure-javascript",children:"Use MetaMask SDK with pure JavaScript"}),"\n",(0,s.jsxs)(t.p,{children:["Import ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your pure JavaScript dapp to enable\nyour users to easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for pure JavaScript has the ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/#prerequisites",children:"same prerequisites"})," as for standard JavaScript."]}),"\n",(0,s.jsx)(t.p,{children:"To import, instantiate, and use the SDK, you can insert a script in the head section of your website:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="index.html"',children:'<head>\n  ...\n  <script src="https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/cdn/metamask-sdk.js"><\/script>\n  <script>\n    const MMSDK = new MetaMaskSDK.MetaMaskSDK(\n      dappMetadata: {\n        name: "Example Pure JS Dapp",\n        url: window.location.href,\n      },\n      infuraAPIKey: process.env.INFURA_API_KEY,\n      // Other options.\n    )\n    // Because the init process of MetaMask SDK is async.\n    setTimeout(() => {\n      // You can also access via window.ethereum.\n      const ethereum = MMSDK.getProvider();\n\n      ethereum.request({ method: \'eth_requestAccounts\' });\n    }, 0)\n  <\/script>\n  ...\n</head>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can configure the SDK using any ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/sdk-js-options",children:"options"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Use ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/sdk-js-options#dappmetadata",children:(0,s.jsx)(t.code,{children:"dappMetadata"})})," to display information\nabout your dapp in the MetaMask connection modal."]}),"\n",(0,s.jsxs)(t.li,{children:["Use ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/sdk-js-options#infuraapikey",children:(0,s.jsx)(t.code,{children:"infuraAPIKey"})})," to\n",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"make read-only RPC requests"})," from your dapp."]}),"\n",(0,s.jsxs)(t.li,{children:["Use ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/sdk-js-options#modals",children:(0,s.jsx)(t.code,{children:"modals"})})," to ",(0,s.jsx)(t.a,{href:"display-custom-modals.md",children:"customize the logic and UI of\nthe displayed modals"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can call any ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/provider-api",children:"provider API methods"})," using the SDK.\nAlways call ",(0,s.jsx)(t.a,{href:"/wallet/reference/eth_requestaccounts",children:(0,s.jsx)(t.code,{children:"eth_requestAccounts"})})," using\n",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/reference/provider-api#request",children:(0,s.jsx)(t.code,{children:"request()"})})," first, since it prompts the installation\nor connection popup to appear."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also call the SDK's ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/connect-and-sign",children:(0,s.jsx)(t.code,{children:"connectAndSign"})})," method, and\n",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests",children:"batch multiple JSON-RPC requests"})," using the ",(0,s.jsx)(t.code,{children:"metamask_batch"})," method."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/pure-javascript",children:"example pure JavaScript dapp"}),"\nin the JavaScript SDK GitHub repository for more information."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var s=a(96540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);