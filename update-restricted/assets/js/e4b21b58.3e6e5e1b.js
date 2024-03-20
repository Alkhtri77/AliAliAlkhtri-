"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={description:"Connect to MetaMask via EIP-6963.",sidebar_position:1},i="Connect to MetaMask",s={unversionedId:"how-to/connect/index",id:"how-to/connect/index",title:"Connect to MetaMask",description:"Connect to MetaMask via EIP-6963.",source:"@site/wallet/how-to/connect/index.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/",permalink:"/update-restricted/wallet/how-to/connect/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Connect to MetaMask via EIP-6963.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"How to",permalink:"/update-restricted/wallet/how-to"},next:{title:"Detect MetaMask",permalink:"/update-restricted/wallet/how-to/connect/detect-metamask"}},l={},c=[{value:"Use third-party libraries",id:"use-third-party-libraries",level:2},{value:"Connect to MetaMask directly",id:"connect-to-metamask-directly",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3},{value:"1. Set up the project",id:"1-set-up-the-project",level:4},{value:"2. Add React Hooks",id:"2-add-react-hooks",level:4},{value:"3. Detect and connect to wallets",id:"3-detect-and-connect-to-wallets",level:4},{value:"Example",id:"example",level:3},{value:"Next steps",id:"next-steps",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-to-metamask"},"Connect to MetaMask"),(0,a.kt)("p",null,"You can connect your dapp to users' MetaMask wallets by detecting MetaMask in their browsers and\nconnecting to their accounts."),(0,a.kt)("p",null,"This page describes how to connect to MetaMask using the wallet detection mechanism introduced by\n",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),".\nEIP-6963 enables ",(0,a.kt)("a",{parentName:"p",href:"/update-restricted/wallet/concepts/wallet-interoperability"},"wallet interoperability"),", and shifts\ndapps from relying solely on ",(0,a.kt)("a",{parentName:"p",href:"/update-restricted/wallet/how-to/connect/detect-metamask"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum"))," for wallet detection.\nIf a user has multiple wallet browser extensions installed, you can detect multiple wallets and\nconnect to each one without conflict."),(0,a.kt)("p",null,"You can connect to MetaMask ",(0,a.kt)("a",{parentName:"p",href:"#use-third-party-libraries"},"using third-party libraries")," or\n",(0,a.kt)("a",{parentName:"p",href:"#connect-to-metamask-directly"},"directly using the Wallet API"),"."),(0,a.kt)("h2",{id:"use-third-party-libraries"},"Use third-party libraries"),(0,a.kt)("p",null,"You can connect to MetaMask using the following third-party libraries that support EIP-6963:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wagmi.sh"},"Wagmi 2+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.walletconnect.com/web3modal/about"},"Web3Modal 3+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/wevm/mipd"},"MIPD Store")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.rainbowkit.com/"},"RainbowKit"))),(0,a.kt)("h2",{id:"connect-to-metamask-directly"},"Connect to MetaMask directly"),(0,a.kt)("p",null,"To connect to MetaMask directly, implement support for EIP-6963 in your dapp and use the\n",(0,a.kt)("a",{parentName:"p",href:"/update-restricted/wallet/concepts/wallet-api"},"Wallet API"),".\nThe following steps describe how to connect to MetaMask from a React dapp."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Review and understand the ",(0,a.kt)("a",{parentName:"li",href:"/update-restricted/wallet/concepts/wallet-interoperability#eip-6963-interfaces"},"EIP-6963 interfaces"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://v3.vitejs.dev/guide/#scaffolding-your-first-vite-project"},"Set up a Vite project"),".")),(0,a.kt)("h3",{id:"steps"},"Steps"),(0,a.kt)("h4",{id:"1-set-up-the-project"},"1. Set up the project"),(0,a.kt)("p",null,"In your Vite project, update ",(0,a.kt)("inlineCode",{parentName:"p"},"src/vite-env.d.ts")," with the EIP-6963 interfaces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="vite-env.d.ts"',title:'"vite-env.d.ts"'},"interface EIP6963ProviderDetail {\n    info: EIP6963ProviderInfo;\n    provider: EIP1193Provider;\n}\n\ninterface EIP6963ProviderInfo {\n    walletId: string;\n    uuid: string;\n    name: string;\n    icon: string;\n}\n\ntype EIP6963AnnounceProviderEvent = {\n    detail: {\n        info: EIP6963ProviderInfo,\n        provider: EIP1193Provider\n    }\n}\n\ninterface EIP1193Provider {\n    isStatus?: boolean;\n    host?: string;\n    path?: string;\n    sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n    send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n    request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In addition to the EIP-6963 interfaces, you need the ",(0,a.kt)("inlineCode",{parentName:"p"},"EIP1193Provider")," interface (defined by\n",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),"), which is the foundational structure for\nEthereum wallet providers.\nThis interface represents the essential properties and methods for interacting with dapps.")),(0,a.kt)("h4",{id:"2-add-react-hooks"},"2. Add React Hooks"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks")," directory and add the following two files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="useSyncProviders.tsx"',title:'"useSyncProviders.tsx"'},'import { useSyncExternalStore } from "react";\nimport { store } from "./store";\n\nexport const useSyncProviders = ()=> useSyncExternalStore(store.subscribe, store.value, store.value)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="store.tsx"',title:'"store.tsx"'},'declare global {\n    interface WindowEventMap {\n      "eip6963:announceProvider": CustomEvent\n    }\n}\n\nlet providers: EIP6963ProviderDetail[] = []\n\nexport const store = {\n    value: ()=>providers,\n    subscribe: (callback: ()=>void)=>{\n        function onAnnouncement(event: EIP6963AnnounceProviderEvent){\n            if(providers.map(p => p.info.uuid).includes(event.detail.info.uuid)) return\n            providers = [...providers, event.detail]\n            callback()\n        }\n        window.addEventListener("eip6963:announceProvider", onAnnouncement);\n        window.dispatchEvent(new Event("eip6963:requestProvider"));\n    \n        return ()=>window.removeEventListener("eip6963:announceProvider", onAnnouncement)\n    }\n}\n')),(0,a.kt)("h4",{id:"3-detect-and-connect-to-wallets"},"3. Detect and connect to wallets"),(0,a.kt)("p",null,"Create a component in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components")," directory with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="DiscoverWalletProviders.tsx"',title:'"DiscoverWalletProviders.tsx"'},"import { useState } from 'react'\nimport { useSyncProviders } from '../hooks/useSyncProviders'\nimport { formatAddress } from '~/utils'\n\nexport const DiscoverWalletProviders = () => {\n    const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()\n    const [userAccount, setUserAccount] = useState<string>('')\n    const providers = useSyncProviders()\n  \n    const handleConnect = async(providerWithInfo: EIP6963ProviderDetail)=> {\n        const accounts = await providerWithInfo.provider\n            .request({method:'eth_requestAccounts'})\n            .catch(console.error)\n      \n        if(accounts?.[0]){\n            setSelectedWallet(providerWithInfo)\n            setUserAccount(accounts?.[0])\n        }\n    }\n \n    return (\n        <>\n            <h2>Wallets Detected:</h2>\n            <div>\n                {\n                    providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail)=>(\n                        <button key={provider.info.uuid} onClick={()=>handleConnect(provider)} >\n                            <img src={provider.info.icon} alt={provider.info.name} />\n                            <div>{provider.info.name}</div>\n                        </button>\n                    )) :\n                    <div>\n                        There are no announced providers.\n                    </div>\n                }\n            </div>\n            <hr />\n            <h2>{ userAccount ? \"\" : \"No \" }Wallet Selected</h2>\n            { userAccount &&\n                <div>\n                    <div>\n                        <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />\n                        <div>{selectedWallet.info.name}</div>\n                        <div>({formatAddress(userAccount)})</div>\n                    </div>\n                </div>\n            }\n        </>\n    )\n}\n")),(0,a.kt)("p",null,"This component detects the installed wallets and creates a connect button for each one, which is\nused to call the ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," RPC method of the\nWallet API to ",(0,a.kt)("a",{parentName:"p",href:"/update-restricted/wallet/how-to/connect/access-accounts"},"access the user's accounts"),"."),(0,a.kt)("p",null,"Finally, link to this component from ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"import './App.css'\nimport { DiscoverWalletProviders } from './components/DiscoverWalletProviders'\n\nfunction App() {\n    return (\n        <>\n            <DiscoverWalletProviders/>\n        </>\n    )\n}\n\nexport default App\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-react-ts-eip-6963/tree/main"},"EIP-6963 Vite React + TypeScript demo"),"\nfor a full example."),(0,a.kt)("h3",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"After connecting to MetaMask directly, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../manage-networks"},"Detect, add, and switch networks"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/update-restricted/wallet/how-to/send-transactions"},"Send transactions"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/update-restricted/wallet/how-to/sign-data/"},"Sign data"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../display"},"Display tokens, contract methods, and icons in MetaMask"),".")))}u.isMDXComponent=!0}}]);