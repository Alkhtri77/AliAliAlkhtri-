"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7767],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(r),h=n,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return r?a.createElement(u,s(s({ref:t},d),{},{components:r})):a.createElement(u,s({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},74006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:3,description:"Learn about the MetaMask Ethereum provider API."},s="About the MetaMask APIs",o={unversionedId:"concepts/apis",id:"concepts/apis",title:"About the MetaMask APIs",description:"Learn about the MetaMask Ethereum provider API.",source:"@site/wallet/concepts/apis.md",sourceDirName:"concepts",slug:"/concepts/apis",permalink:"/1056-sdk-examples/wallet/concepts/apis",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/apis.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Learn about the MetaMask Ethereum provider API."},sidebar:"walletSidebar",previous:{title:"Android SDK architecture",permalink:"/1056-sdk-examples/wallet/concepts/sdk/android"},next:{title:"Convenience libraries",permalink:"/1056-sdk-examples/wallet/concepts/convenience-libraries"}},p={},l=[{value:"Ethereum provider API",id:"ethereum-provider-api",level:2},{value:"JSON-RPC API",id:"json-rpc-api",level:2},{value:"Restricted methods",id:"restricted-methods",level:3},{value:"Unrestricted methods",id:"unrestricted-methods",level:3}],d={toc:l},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"about-the-metamask-apis"},"About the MetaMask APIs"),(0,n.kt)("p",null,"MetaMask supports an ",(0,n.kt)("a",{parentName:"p",href:"#ethereum-provider-api"},"Ethereum provider API"),", which wraps a ",(0,n.kt)("a",{parentName:"p",href:"#json-rpc-api"},"JSON-RPC API"),"."),(0,n.kt)("admonition",{title:"API documentation",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The API methods are documented in the following references:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/1056-sdk-examples/wallet/reference/provider-api"},"Ethereum provider API reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API reference")))),(0,n.kt)("h2",{id:"ethereum-provider-api"},"Ethereum provider API"),(0,n.kt)("p",null,"MetaMask injects a global JavaScript API into websites visited by its users using the\n",(0,n.kt)("inlineCode",{parentName:"p"},"window.ethereum")," provider object.\nThis API is specified by ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),", and it allows dapps to\nrequest users' Ethereum accounts, read data from blockchains the user is connected to, suggest\nthat the user sign messages and transactions, and more."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"MetaMask supports ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an\nalternative discovery mechanism to the ",(0,n.kt)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to support ",(0,n.kt)("a",{parentName:"p",href:"/1056-sdk-examples/wallet/concepts/wallet-interoperabilty"},"wallet interoperability"),"\nby discovering multiple injected wallet providers in a user's browser.\nWe recommend using this mechanism for provider discovery.")),(0,n.kt)("p",null,"The MetaMask Ethereum provider API contains the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/1056-sdk-examples/wallet/reference/provider-api#properties"},"Properties")," - The provider contains a property that\ndetects if a user has MetaMask installed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/1056-sdk-examples/wallet/reference/provider-api#methods"},"Methods")," - The provider contains methods that dapps can call.\nThe ",(0,n.kt)("a",{parentName:"li",href:"/1056-sdk-examples/wallet/reference/provider-api#windowethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),"\nprovider method wraps the ",(0,n.kt)("a",{parentName:"li",href:"#json-rpc-api"},"JSON-RPC API"),"; dapps can use this\nprovider method to call any RPC method."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/1056-sdk-examples/wallet/reference/provider-api#events"},"Events")," - The provider emits events that dapps can listen to.")),(0,n.kt)("p",null,"View the ",(0,n.kt)("a",{parentName:"p",href:"/1056-sdk-examples/wallet/reference/provider-api"},"provider API reference")," for all the provider properties,\nmethods, and events."),(0,n.kt)("admonition",{title:"Use MetaMask SDK with the provider API",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can call the provider API from a dapp without ",(0,n.kt)("a",{parentName:"p",href:"/1056-sdk-examples/wallet/concepts/sdk/"},"MetaMask SDK")," installed, but we\nrecommend using the SDK to enable users to easily connect to the MetaMask browser extension and\nMetaMask Mobile.\nThe SDK supports multiple dapp platforms including mobile and gaming dapps."),(0,n.kt)("p",{parentName:"admonition"},"Get started by ",(0,n.kt)("a",{parentName:"p",href:"/1056-sdk-examples/wallet/how-to/connect/set-up-sdk/"},"setting up the SDK"),".")),(0,n.kt)("h2",{id:"json-rpc-api"},"JSON-RPC API"),(0,n.kt)("p",null,"MetaMask uses the ",(0,n.kt)("a",{parentName:"p",href:"/1056-sdk-examples/wallet/reference/provider-api#windowethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),"\nmethod of the ",(0,n.kt)("a",{parentName:"p",href:"#ethereum-provider-api"},"provider API")," to wrap a JSON-RPC API.\nThe JSON-RPC API contains standard Ethereum JSON-RPC API methods and MetaMask-specific methods."),(0,n.kt)("p",null,"The RPC methods are documented in the interactive ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API reference"),".\nMethods in the API playground may have the following tags:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MetaMask")," - These methods behave in ways specific to MetaMask, and may or may not be supported\nby other wallets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Restricted")," - These methods are ",(0,n.kt)("a",{parentName:"li",href:"#restricted-methods"},"restricted"),", which require requesting\npermission using ",(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_requestpermissions"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions")),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mobile")," - These methods are only available on MetaMask Mobile."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ethereum API")," - These are standard Ethereum JSON-RPC API methods.\nSee the ",(0,n.kt)("a",{parentName:"li",href:"https://eth.wiki/json-rpc/API#json-rpc-methods"},"Ethereum wiki")," for more information on\nthese methods.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"All RPC method requests can return errors.\nMake sure to handle errors for every call to\n",(0,n.kt)("a",{parentName:"p",href:"/1056-sdk-examples/wallet/reference/provider-api#windowethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),".")),(0,n.kt)("h3",{id:"restricted-methods"},"Restricted methods"),(0,n.kt)("p",null,"MetaMask introduced wallet permissions in ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255"),".\nIn this permissions system, each RPC method is restricted or unrestricted.\nIf a method is restricted, a dapp must request permission to call it using\n",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestpermissions"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions")),".\nUnder the hood, permissions are plain, JSON-compatible objects, with fields that are mostly used\ninternally by MetaMask."),(0,n.kt)("p",null,"Outside of ",(0,n.kt)("a",{parentName:"p",href:"/snaps/reference/rpc-api/#restricted-methods"},"Snaps restricted methods"),", the only\nrestricted method is ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_accounts")),", which allows you to access\nthe user's Ethereum accounts.\nMore restricted methods will be added in the future."),(0,n.kt)("h3",{id:"unrestricted-methods"},"Unrestricted methods"),(0,n.kt)("p",null,"Unrestricted methods do not require requesting permission to call them, but they might still rely on\npermissions to succeed (for example, the signing methods require calling the restricted\n",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," method), or they might require confirmation by the\nuser (for example, ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),")."))}c.isMDXComponent=!0}}]);