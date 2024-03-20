"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6718],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,b=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return a?r.createElement(b,s(s({ref:t},d),{},{components:a})):r.createElement(b,s({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={description:"Integrate MetaMask SDK with Web3-Onboard in your JavaScript dapp.",sidebar_position:1,sidebar_label:"Web3-Onboard",tags:["JavaScript SDK"]},s="Use Web3-Onboard with MetaMask SDK",i={unversionedId:"how-to/use-sdk/3rd-party-libraries/web3-onboard",id:"how-to/use-sdk/3rd-party-libraries/web3-onboard",title:"Use Web3-Onboard with MetaMask SDK",description:"Integrate MetaMask SDK with Web3-Onboard in your JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard.md",sourceDirName:"how-to/use-sdk/3rd-party-libraries",slug:"/how-to/use-sdk/3rd-party-libraries/web3-onboard",permalink:"/update-restricted/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard.md",tags:[{label:"JavaScript SDK",permalink:"/update-restricted/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{description:"Integrate MetaMask SDK with Web3-Onboard in your JavaScript dapp.",sidebar_position:1,sidebar_label:"Web3-Onboard",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Third-party libraries",permalink:"/update-restricted/wallet/how-to/use-sdk/3rd-party-libraries/"},next:{title:"Wagmi",permalink:"/update-restricted/wallet/how-to/use-sdk/3rd-party-libraries/wagmi"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the module",id:"1-install-the-module",level:3},{value:"2. Import the module",id:"2-import-the-module",level:3},{value:"3. Instantiate the module",id:"3-instantiate-the-module",level:3},{value:"4. Use the module",id:"4-use-the-module",level:3},{value:"Example",id:"example",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-web3-onboard-with-metamask-sdk"},"Use Web3-Onboard with MetaMask SDK"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://onboard.blocknative.com/"},"Web3-Onboard")," is a JavaScript library that simplifies the process\nof onboarding users into dapps.\nIt provides a smooth user interface, a variety of wallet integrations, and is highly customizable to\nmeet the needs of your dapp."),(0,n.kt)("p",null,"You can integrate ",(0,n.kt)("a",{parentName:"p",href:"/update-restricted/wallet/concepts/sdk/"},"MetaMask SDK")," into your dapp alongside Web3-Onboard,\nusing the Web3-Onboard MetaMask module, to enable your users to seamlessly and securely connect to\nthe MetaMask browser extension and MetaMask Mobile."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Set up a project with ",(0,n.kt)("a",{parentName:"p",href:"https://onboard.blocknative.com/docs/getting-started/installation"},"Web3-Onboard"),"."),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("h3",{id:"1-install-the-module"},"1. Install the module"),(0,n.kt)("p",null,"Install the Web3-Onboard MetaMask module into your dapp:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @web3-onboard/metamask\n")),(0,n.kt)("h3",{id:"2-import-the-module"},"2. Import the module"),(0,n.kt)("p",null,"In your project script, add the following to import the module:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import metamaskSDK from "@web3-onboard/metamask";\n')),(0,n.kt)("h3",{id:"3-instantiate-the-module"},"3. Instantiate the module"),(0,n.kt)("p",null,"Instantiate the module using any ",(0,n.kt)("a",{parentName:"p",href:"/update-restricted/wallet/reference/sdk-js-options"},"JavaScript SDK options"),", for\nexample, ",(0,n.kt)("a",{parentName:"p",href:"/update-restricted/wallet/reference/sdk-js-options#dappmetadata"},(0,n.kt)("inlineCode",{parentName:"a"},"dappMetadata")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'const metamaskSDKWallet = metamaskSDK({\n    options: {\n        extensionOnly: false,\n        dappMetadata: {\n            name: "Example Web3-Onboard Dapp",\n        },\n    },\n});\n')),(0,n.kt)("h3",{id:"4-use-the-module"},"4. Use the module"),(0,n.kt)("p",null,"Use the module as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const onboard = Onboard({\n    // Other Onboard options\n    wallets: [\n        metamaskSDKWallet,\n        // Other wallets\n    ],\n});\n\nconst connectedWallets = await onboard.connectWallet();\nconsole.log(connectedWallets);\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"For an example of using Web3-Onboard with MetaMask SDK, see the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/with-web3onboard"},"example dapp"),"\nin the JavaScript SDK GitHub repository.\nSee the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/blob/main/packages/examples/with-web3onboard/src/App.tsx"},(0,n.kt)("inlineCode",{parentName:"a"},"App.tsx")),"\nfile for more details on implementing the integration in a React dapp."))}c.isMDXComponent=!0}}]);