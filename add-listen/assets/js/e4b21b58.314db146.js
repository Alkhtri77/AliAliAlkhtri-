"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6594],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={description:"Connect to MetaMask via EIP-6963.",sidebar_position:1,toc_max_heading_level:4},o="Connect to MetaMask",l={unversionedId:"how-to/connect/index",id:"how-to/connect/index",title:"Connect to MetaMask",description:"Connect to MetaMask via EIP-6963.",source:"@site/wallet/how-to/connect/index.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/",permalink:"/add-listen/wallet/how-to/connect/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Connect to MetaMask via EIP-6963.",sidebar_position:1,toc_max_heading_level:4},sidebar:"walletSidebar",previous:{title:"How to",permalink:"/add-listen/wallet/how-to"},next:{title:"Detect MetaMask",permalink:"/add-listen/wallet/how-to/connect/detect-metamask"}},s={},c=[{value:"Connect to MetaMask using third-party libraries",id:"connect-to-metamask-using-third-party-libraries",level:2},{value:"Connect to MetaMask directly using Vite",id:"connect-to-metamask-directly-using-vite",level:2},{value:"Vanilla TypeScript",id:"vanilla-typescript",level:3},{value:"1. Create a project",id:"1-create-a-project",level:4},{value:"2. Set up the project",id:"2-set-up-the-project",level:4},{value:"3. Update <code>main.ts</code>",id:"3-update-maints",level:4},{value:"4. Connect to wallets",id:"4-connect-to-wallets",level:4},{value:"5. View the project",id:"5-view-the-project",level:4},{value:"Example",id:"example",level:4},{value:"React TypeScript",id:"react-typescript",level:3},{value:"1. Create a project",id:"1-create-a-project-1",level:4},{value:"2. Set up the project",id:"2-set-up-the-project-1",level:4},{value:"3. Update <code>App.tsx</code>",id:"3-update-apptsx",level:4},{value:"4. Detect and connect to wallets",id:"4-detect-and-connect-to-wallets",level:4},{value:"5. Add React hooks",id:"5-add-react-hooks",level:4},{value:"6. Create utility functions",id:"6-create-utility-functions",level:4},{value:"Example",id:"example-1",level:4},{value:"Next steps",id:"next-steps",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"connect-to-metamask"},"Connect to MetaMask"),(0,a.yg)("p",null,"You can connect your dapp to users' MetaMask wallets by detecting MetaMask in their browsers and\nconnecting to their accounts.\nThis page provides instructions for connecting to MetaMask using the wallet detection mechanism\nintroduced by ",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),".\nThis approach allows you to detect multiple installed wallets and connect to them without conflicts."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Learn more about EIP-6963 in ",(0,a.yg)("a",{parentName:"p",href:"/add-listen/wallet/concepts/wallet-interoperability"},"Wallet interoperability"),".")),(0,a.yg)("p",null,"You can connect to MetaMask ",(0,a.yg)("a",{parentName:"p",href:"#connect-to-metamask-using-third-party-libraries"},"using third-party libraries"),"\nor ",(0,a.yg)("a",{parentName:"p",href:"#connect-to-metamask-directly-using-vite"},"directly using Vite"),"."),(0,a.yg)("h2",{id:"connect-to-metamask-using-third-party-libraries"},"Connect to MetaMask using third-party libraries"),(0,a.yg)("p",null,"You can connect to MetaMask using the following third-party libraries that support EIP-6963:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wagmi.sh"},"Wagmi 2+")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.walletconnect.com/web3modal/about"},"Web3Modal 3+")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/wevm/mipd"},"MIPD Store")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.rainbowkit.com"},"RainbowKit")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://onboard.blocknative.com"},"Web3-Onboard"))),(0,a.yg)("h2",{id:"connect-to-metamask-directly-using-vite"},"Connect to MetaMask directly using Vite"),(0,a.yg)("p",null,"To connect to MetaMask directly, we recommend implementing support for EIP-6963 using the\n",(0,a.yg)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," build tool with ",(0,a.yg)("a",{parentName:"p",href:"#vanilla-typescript"},"vanilla TypeScript")," or\n",(0,a.yg)("a",{parentName:"p",href:"#react-typescript"},"React TypeScript"),"."),(0,a.yg)("h3",{id:"vanilla-typescript"},"Vanilla TypeScript"),(0,a.yg)("p",null,"Follow these steps for creating a vanilla TypeScript project to connect to MetaMask:"),(0,a.yg)("h4",{id:"1-create-a-project"},"1. Create a project"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://v3.vitejs.dev/guide/#scaffolding-your-first-vite-project"},"Create a Vite project")," using the\ntemplate for vanilla TypeScript:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest vanilla-ts-6963 -- --template vanilla-ts\n")),(0,a.yg)("h4",{id:"2-set-up-the-project"},"2. Set up the project"),(0,a.yg)("p",null,"In your Vite project, update ",(0,a.yg)("inlineCode",{parentName:"p"},"src/vite-env.d.ts")," with the\n",(0,a.yg)("a",{parentName:"p",href:"/add-listen/wallet/concepts/wallet-interoperability#eip-6963-interfaces"},"EIP-6963 interfaces"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="vite-env.d.ts"',title:'"vite-env.d.ts"'},'/// <reference types="vite/client" />\n\ninterface EIP6963ProviderInfo {\n  rdns: string\n  uuid: string\n  name: string\n  icon: string\n}\n\ninterface EIP6963ProviderDetail {\n  info: EIP6963ProviderInfo\n  provider: EIP1193Provider\n}\n\ntype EIP6963AnnounceProviderEvent = {\n  detail: {\n    info: EIP6963ProviderInfo,\n    provider: Readonly<EIP1193Provider>,\n  }\n}\n\ninterface EIP1193Provider {\n  isStatus?: boolean\n  host?: string\n  path?: string\n  sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>\n}\n')),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"In addition to the EIP-6963 interfaces, you need a ",(0,a.yg)("inlineCode",{parentName:"p"},"EIP1193Provider")," interface (defined by\n",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),"), which is the foundational structure for\nEthereum wallet providers, and represents the essential properties and methods for interacting with\nMetaMask and other Ethereum wallets in JavaScript.")),(0,a.yg)("h4",{id:"3-update-maints"},"3. Update ",(0,a.yg)("inlineCode",{parentName:"h4"},"main.ts")),(0,a.yg)("p",null,"Update ",(0,a.yg)("inlineCode",{parentName:"p"},"src/main.ts")," with the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.ts"',title:'"main.ts"'},'import "./style.css"\nimport { listProviders } from "./providers.ts"\n\ndocument.querySelector<HTMLDivElement>(\'#app\')!.innerHTML = `\n  <div>\n    <div id="providerButtons"></div>\n  </div>\n`\n\nlistProviders(document.querySelector<HTMLDivElement>("#providerButtons")!)\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"querySelector")," finds and returns the first HTML element that matches the CSS selector ",(0,a.yg)("inlineCode",{parentName:"p"},"app"),",\nand sets its ",(0,a.yg)("inlineCode",{parentName:"p"},"innerHTML"),".\nYou need to include a basic HTML structure with an inner ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," to inject a list of buttons, each\nrepresenting a detected wallet provider."),(0,a.yg)("p",null,"You'll create the ",(0,a.yg)("inlineCode",{parentName:"p"},"listProviders")," function in the next step, and pass an argument which represents\nthe ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," element."),(0,a.yg)("h4",{id:"4-connect-to-wallets"},"4. Connect to wallets"),(0,a.yg)("p",null,"Create a file ",(0,a.yg)("inlineCode",{parentName:"p"},"src/providers.ts")," with the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="providers.ts"',title:'"providers.ts"'},'declare global {\n  interface WindowEventMap {\n    "eip6963:announceProvider": CustomEvent\n  }\n}\n\n// Connect to the selected provider using eth_requestAccounts.\nconst connectWithProvider = async (wallet: EIP6963AnnounceProviderEvent["detail"]) => {\n  try {\n    await wallet.provider\n      .request({ method: "eth_requestAccounts" })\n  } catch (error) {\n    console.error("Failed to connect to provider:", error)\n  }\n}\n\n// Display detected providers as connect buttons.\nexport function listProviders(element: HTMLDivElement) {\n  window.addEventListener("eip6963:announceProvider",\n    (event: EIP6963AnnounceProviderEvent) => {\n      const button = document.createElement("button")\n    \n      button.innerHTML = `\n        <img src="${event.detail.info.icon}" alt="${event.detail.info.name}" />\n        <div>${event.detail.info.name}</div>\n      `\n    \n      // Call connectWithProvider when a user selects the button.\n      button.onclick = () => connectWithProvider(event.detail)\n      element.appendChild(button)\n    }\n  )\n\n  // Notify event listeners and other parts of the dapp that a provider is requested.\n  window.dispatchEvent(new Event("eip6963:requestProvider"))\n}\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"connectWithProvider")," function connects the user to the selected provider using\n",(0,a.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,a.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts")),".\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"wallet")," object is passed as an argument to the function, indicating the argument type."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"listProviders")," function uses a simplified approach.\nInstead of mapping and joining an entire block of HTML, it directly passes the ",(0,a.yg)("inlineCode",{parentName:"p"},"event.detail")," object\nto the ",(0,a.yg)("inlineCode",{parentName:"p"},"connectWithProvider")," function when a provider is announced."),(0,a.yg)("h4",{id:"5-view-the-project"},"5. View the project"),(0,a.yg)("p",null,"Run the following command to view and test the Vite project in your browser:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,a.yg)("h4",{id:"example"},"Example"),(0,a.yg)("p",null,"See the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-vanilla-ts-eip-6963"},"vanilla TypeScript example")," for more information.\nYou can clone the repository and run the example locally using ",(0,a.yg)("inlineCode",{parentName:"p"},"npm i && npm run dev"),"."),(0,a.yg)("h3",{id:"react-typescript"},"React TypeScript"),(0,a.yg)("p",null,"Follow these steps for creating a React TypeScript project to connect to MetaMask:"),(0,a.yg)("h4",{id:"1-create-a-project-1"},"1. Create a project"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://v3.vitejs.dev/guide/#scaffolding-your-first-vite-project"},"Create a Vite project")," using the\ntemplate for React TypeScript:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest react-ts-6963 -- --template react-ts\n")),(0,a.yg)("h4",{id:"2-set-up-the-project-1"},"2. Set up the project"),(0,a.yg)("p",null,"In your Vite project, update ",(0,a.yg)("inlineCode",{parentName:"p"},"src/vite-env.d.ts")," with the\n",(0,a.yg)("a",{parentName:"p",href:"/add-listen/wallet/concepts/wallet-interoperability#eip-6963-interfaces"},"EIP-6963 interfaces"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="vite-env.d.ts"',title:'"vite-env.d.ts"'},'/// <reference types="vite/client" />\n\ninterface EIP6963ProviderInfo {\n  rdns: string\n  uuid: string\n  name: string\n  icon: string\n}\n\ninterface EIP6963ProviderDetail {\n  info: EIP6963ProviderInfo\n  provider: EIP1193Provider\n}\n\ntype EIP6963AnnounceProviderEvent = {\n  detail: {\n    info: EIP6963ProviderInfo,\n    provider: Readonly<EIP1193Provider>,\n  }\n}\n\ninterface EIP1193Provider {\n  isStatus?: boolean\n  host?: string\n  path?: string\n  sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>\n}\n')),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"In addition to the EIP-6963 interfaces, you need a ",(0,a.yg)("inlineCode",{parentName:"p"},"EIP1193Provider")," interface (defined by\n",(0,a.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),"), which is the foundational structure for\nEthereum wallet providers, and represents the essential properties and methods for interacting with\nMetaMask and other Ethereum wallets in JavaScript.")),(0,a.yg)("h4",{id:"3-update-apptsx"},"3. Update ",(0,a.yg)("inlineCode",{parentName:"h4"},"App.tsx")),(0,a.yg)("p",null,"Update ",(0,a.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," with the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},'import "./App.css"\nimport { DiscoverWalletProviders } from "./components/DiscoverWalletProviders"\n\nfunction App() {\n  return (\n    <DiscoverWalletProviders/>\n  )\n}\n\nexport default App\n')),(0,a.yg)("p",null,"This code renders the ",(0,a.yg)("inlineCode",{parentName:"p"},"DiscoverWalletProviders")," component that you'll create in the next step, which\ncontains the logic for detecting and connecting to wallet providers."),(0,a.yg)("h4",{id:"4-detect-and-connect-to-wallets"},"4. Detect and connect to wallets"),(0,a.yg)("p",null,"In the ",(0,a.yg)("inlineCode",{parentName:"p"},"src/components")," directory, create a component ",(0,a.yg)("inlineCode",{parentName:"p"},"DiscoverWalletProviders.tsx")," with the\nfollowing code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="DiscoverWalletProviders.tsx"',title:'"DiscoverWalletProviders.tsx"'},'import { useState } from "react"\nimport { useSyncProviders } from "../hooks/useSyncProviders"\nimport { formatAddress } from "~/utils"\n\nexport const DiscoverWalletProviders = () => {\n  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()\n  const [userAccount, setUserAccount] = useState<string>("")\n  const providers = useSyncProviders()\n\n  // Connect to the selected provider using eth_requestAccounts.\n  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {\n    try {\n      const accounts = await providerWithInfo.provider.request({ \n        method: "eth_requestAccounts"\n      })\n\n      setSelectedWallet(providerWithInfo)\n      setUserAccount(accounts?.[0])\n    } catch (error) {\n      console.error(error)\n    }\n  }\n\n  // Display detected providers as connect buttons.\n  return (\n    <>\n      <h2>Wallets Detected:</h2>\n      <div>\n        {\n          providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (\n            <button key={provider.info.uuid} onClick={() => handleConnect(provider)} >\n              <img src={provider.info.icon} alt={provider.info.name} />\n              <div>{provider.info.name}</div>\n            </button>\n          )) :\n            <div>\n              No Announced Wallet Providers\n            </div>\n        }\n      </div>\n      <hr />\n      <h2>{userAccount ? "" : "No "}Wallet Selected</h2>\n      {userAccount &&\n        <div>\n          <div>\n            <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />\n            <div>{selectedWallet.info.name}</div>\n            <div>({formatAddress(userAccount)})</div>\n          </div>\n        </div>\n      }\n    </>\n  )\n}\n')),(0,a.yg)("p",null,"In this code:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"selectedWallet")," is a state variable that holds the user's most recently selected wallet."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"userAccount")," is a state variable that holds the user's connected wallet's address."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"useSyncProviders")," is a custom hook that returns the providers array (wallets installed in the browser).")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"handleConnect")," function takes a ",(0,a.yg)("inlineCode",{parentName:"p"},"providerWithInfo"),", which is an ",(0,a.yg)("inlineCode",{parentName:"p"},"EIP6963ProviderDetail")," object.\nThat object is used to request the user's accounts from the provider using\n",(0,a.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,a.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts")),"."),(0,a.yg)("p",null,"If the request succeeds, the ",(0,a.yg)("inlineCode",{parentName:"p"},"selectedWallet")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"userAccount")," local state variables are set."),(0,a.yg)("p",null,"Then, the component maps over the providers array and renders a button for each detected provider."),(0,a.yg)("p",null,"Finally, if the ",(0,a.yg)("inlineCode",{parentName:"p"},"userAccount")," state variable is not empty, the selected wallet icon, name, and\naddress are displayed."),(0,a.yg)("h4",{id:"5-add-react-hooks"},"5. Add React hooks"),(0,a.yg)("p",null,"Create a ",(0,a.yg)("inlineCode",{parentName:"p"},"src/hooks")," directory and add a ",(0,a.yg)("inlineCode",{parentName:"p"},"store.ts")," file with the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="hooks/store.ts"',title:'"hooks/store.ts"'},'declare global {\n  interface WindowEventMap {\n    "eip6963:announceProvider": CustomEvent\n  }\n}\n\n// An array to store the detected wallet providers.\nlet providers: EIP6963ProviderDetail[] = []\n\nexport const store = {\n  value: ()=> providers,\n  subscribe: (callback: ()=> void) => {\n    function onAnnouncement(event: EIP6963AnnounceProviderEvent){\n      if(providers.map(p => p.info.uuid).includes(event.detail.info.uuid)) return\n      providers = [...providers, event.detail]\n      callback()\n    }\n\n    // Listen for eip6963:announceProvider and call onAnnouncement when the event is triggered.\n    window.addEventListener("eip6963:announceProvider", onAnnouncement)\n    \n    // Dispatch the event, which triggers the event listener in the MetaMask wallet.\n    window.dispatchEvent(new Event("eip6963:requestProvider"))\n    \n    // Return a function that removes the event listern.\n    return () => window.removeEventListener("eip6963:announceProvider", onAnnouncement)\n  }\n}\n')),(0,a.yg)("p",null,"Also, add a file ",(0,a.yg)("inlineCode",{parentName:"p"},"useSyncProviders.ts")," with the following code to the ",(0,a.yg)("inlineCode",{parentName:"p"},"hooks")," directory:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="hooks/useSyncProviders.ts"',title:'"hooks/useSyncProviders.ts"'},'import { useSyncExternalStore } from "react"\nimport { store } from "./store"\n\nexport const useSyncProviders = ()=> useSyncExternalStore(store.subscribe, store.value, store.value)\n')),(0,a.yg)("p",null,"This hook allows you to subscribe to MetaMask events, read updated values, and update components.\nIt uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"store.value")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"store.subscribe")," methods defined in the ",(0,a.yg)("inlineCode",{parentName:"p"},"store.ts")," hook."),(0,a.yg)("h4",{id:"6-create-utility-functions"},"6. Create utility functions"),(0,a.yg)("p",null,"Create a ",(0,a.yg)("inlineCode",{parentName:"p"},"src/utils")," directory and add a file ",(0,a.yg)("inlineCode",{parentName:"p"},"index.ts")," with the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"export const formatBalance = (rawBalance: string) => {\n  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2)\n  return balance\n}\n\nexport const formatChainAsNum = (chainIdHex: string) => {\n  const chainIdNum = parseInt(chainIdHex)\n  return chainIdNum\n}\n\nexport const formatAddress = (addr: string) => {\n  const upperAfterLastTwo = addr.slice(0,2) + addr.slice(2)\n  return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`\n}\n")),(0,a.yg)("p",null,"This is a good place to store utility functions that you might need to reuse throughout your dapp.\nThis example only uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"formatAddress")," function, but the others might be useful for other applications."),(0,a.yg)("h4",{id:"example-1"},"Example"),(0,a.yg)("p",null,"See the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-react-ts-eip-6963"},"React TypeScript example")," for more information.\nYou can clone the repository and run the example locally using ",(0,a.yg)("inlineCode",{parentName:"p"},"npm i && npm run dev"),"."),(0,a.yg)("h3",{id:"next-steps"},"Next steps"),(0,a.yg)("p",null,"After connecting to MetaMask directly, you can:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"../manage-networks"},"Detect, add, and switch networks"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/add-listen/wallet/how-to/send-transactions"},"Send transactions"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/add-listen/wallet/how-to/sign-data/"},"Sign data"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"../display"},"Display tokens, contract methods, and icons in MetaMask"),".")))}u.isMDXComponent=!0}}]);