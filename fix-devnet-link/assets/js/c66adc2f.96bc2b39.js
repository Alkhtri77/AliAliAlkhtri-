"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[296],{95043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=n(74848),a=n(28453),r=n(11470),i=n(19365);const l={description:"Learn about MetaMask SDK.",sidebar_position:3,tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},o="About MetaMask SDK",d={id:"concepts/sdk/index",title:"About MetaMask SDK",description:"Learn about MetaMask SDK.",source:"@site/wallet/concepts/sdk/index.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/",permalink:"/fix-devnet-link/wallet/concepts/sdk/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/index.md",tags:[{label:"JavaScript SDK",permalink:"/fix-devnet-link/wallet/tags/java-script-sdk"},{label:"iOS SDK",permalink:"/fix-devnet-link/wallet/tags/i-os-sdk"},{label:"Android SDK",permalink:"/fix-devnet-link/wallet/tags/android-sdk"},{label:"Unity SDK",permalink:"/fix-devnet-link/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about MetaMask SDK.",sidebar_position:3,tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},sidebar:"walletSidebar",previous:{title:"About the Wallet API",permalink:"/fix-devnet-link/wallet/concepts/wallet-api"},next:{title:"SDK connections",permalink:"/fix-devnet-link/wallet/concepts/sdk/connections"}},c={},h=[{value:"Benefits of MetaMask SDK",id:"benefits-of-metamask-sdk",level:2},{value:"User experience",id:"user-experience",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"about-metamask-sdk",children:"About MetaMask SDK"}),"\n",(0,s.jsxs)(t.p,{children:["MetaMask SDK is a library that provides a reliable, secure, and seamless connection from your dapp\nto the MetaMask browser extension and MetaMask Mobile.\nYou can install the SDK in existing dapps, and call any ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/concepts/wallet-api",children:"Wallet API"})," methods from\nyour dapp.\nGet started ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/",children:"using the SDK"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"benefits-of-metamask-sdk",children:"Benefits of MetaMask SDK"}),"\n",(0,s.jsxs)(t.p,{children:["MetaMask SDK enables your dapp to provide a seamless user experience for MetaMask users, from\nmultiple dapp platforms, without relying on third-party libraries.\nBy integrating your dapp using the SDK, millions of MetaMask Mobile users can connect to their\npreferred MetaMask client.\nThe SDK uses the ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/concepts/wallet-api#ethereum-provider-api",children:"MetaMask Ethereum provider"}),", so existing\ndapps work out of the box with the SDK."]}),"\n",(0,s.jsxs)(t.p,{children:["The following table outlines some of the features available when you integrate your dapp with\nMetaMask using the SDK.\nMost of these features are not available if you only integrate your dapp directly using the\n",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/concepts/wallet-api",children:"Wallet API"}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Feature"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Wallet API only"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"MetaMask SDK"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Connect from a web dapp to the MetaMask extension"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Connect from a web dapp to MetaMask Mobile"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Connect from desktop, mobile, and gaming dapps to MetaMask Mobile"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Use custom RPC methods such as ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/connect-and-sign",children:(0,s.jsx)(t.code,{children:"connectAndSign"})})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/display-custom-modals",children:"Display custom modals"})," in MetaMask"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"Make read-only requests"})," using the Infura API"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests",children:"Batch multiple RPC requests"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"user-experience",children:"User experience"}),"\n",(0,s.jsx)(t.p,{children:"The following are examples of how a user experiences a dapp with the SDK installed, on various platforms."}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsxs)(i.A,{value:"Desktop browser",children:[(0,s.jsx)(t.p,{children:"When a user accesses your web dapp on a desktop browser that doesn't have the MetaMask extension\ninstalled, a popup appears that prompts the user to either install the MetaMask extension or connect\nto MetaMask Mobile using a QR code."}),(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("video",{width:"100%",controls:!0,children:(0,s.jsx)("source",{src:"/sdk-desktop.mp4",type:"video/mp4"})})}),(0,s.jsx)(t.admonition,{title:"Get started",type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Get started by ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/",children:"setting up the SDK in your web dapp"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["See the ",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples",children:"example JavaScript dapps"}),"\nin the JavaScript SDK GitHub repository for advanced use cases."]}),"\n"]})})]}),(0,s.jsxs)(i.A,{value:"Mobile browser",children:[(0,s.jsx)(t.p,{children:"When a user accesses your web dapp on a mobile browser, the SDK automatically deeplinks to MetaMask\nMobile (or if the user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."}),(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("video",{width:"300",controls:!0,children:(0,s.jsx)("source",{src:"/sdk-mobile-browser.mp4",type:"video/mp4"})})}),(0,s.jsx)(t.admonition,{title:"Get started",type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Get started by ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/",children:"setting up the SDK in your web dapp"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["See the ",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples",children:"example JavaScript dapps"}),"\nin the JavaScript SDK GitHub repository for advanced use cases."]}),"\n"]})})]}),(0,s.jsxs)(i.A,{value:"iOS",children:[(0,s.jsx)(t.p,{children:"When a user accesses your iOS dapp, the SDK automatically deeplinks to MetaMask Mobile (or if the\nuser doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."}),(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("video",{width:"300",controls:!0,children:(0,s.jsx)("source",{src:"/sdk-ios.mp4",type:"video/mp4"})})}),(0,s.jsx)(t.admonition,{title:"Get started",type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Get started by ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/mobile/ios",children:"setting up the SDK in your iOS dapp"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["See the ",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-ios-sdk",children:"example iOS dapp"})," in the iOS SDK GitHub\nrepository for advanced use cases."]}),"\n"]})})]}),(0,s.jsxs)(i.A,{value:"Android",children:[(0,s.jsx)(t.p,{children:"When a user accesses your Android dapp, the SDK automatically deeplinks to MetaMask Mobile (or if\nthe user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."}),(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("video",{width:"300",controls:!0,children:(0,s.jsx)("source",{src:"/sdk-android.mp4",type:"video/mp4"})})}),(0,s.jsx)(t.admonition,{title:"Get started",type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Get started by ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/mobile/android",children:"setting up the SDK in your Android dapp"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["See the ",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app",children:"example Android dapp"})," in\nthe Android SDK GitHub repository and the ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/concepts/sdk/android",children:"Android SDK architecture"})," for more information."]}),"\n"]})})]}),(0,s.jsxs)(i.A,{value:"Node.js",children:[(0,s.jsx)(t.p,{children:"When a user accesses your Node.js dapp, the SDK renders a QR code on the console which users can\nscan with their MetaMask Mobile app."}),(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("video",{width:"625",controls:!0,children:(0,s.jsx)("source",{src:"/sdk-nodejs.mp4",type:"video/mp4"})})}),(0,s.jsx)(t.admonition,{title:"Get started",type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Get started by ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/javascript/nodejs",children:"setting up the SDK in your Node.js dapp"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["See the ",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nodejs",children:"example Node.js dapp"}),"\nin the Node.js SDK GitHub repository for advanced use cases."]}),"\n"]})})]}),(0,s.jsxs)(i.A,{value:"Unity",children:[(0,s.jsx)(t.p,{children:"When a user accesses your Unity game, the SDK renders a QR code in the game UI using a dedicated\nprefab which players can scan with their MetaMask Mobile app.\nIt also supports deeplinking on mobile platforms, as demonstrated in the following screen recording."}),(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("video",{width:"300",controls:!0,children:(0,s.jsx)("source",{src:"/sdk-unity.mp4",type:"video/mp4"})})}),(0,s.jsx)(t.admonition,{title:"Get started",type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Get started by ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/how-to/use-sdk/gaming/unity/",children:"setting up the SDK in your Unity game"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["See the ",(0,s.jsx)(t.a,{href:"https://assetstore.unity.com/packages/decentralization/demo-game-dragon-crasher-with-metamask-sdk-infura-and-truffle-249789",children:"Unity demo game with the SDK installed"}),"\nfor advanced use cases."]}),"\n"]})})]})]}),"\n",(0,s.jsxs)(t.p,{children:["You can read more about the ",(0,s.jsx)(t.a,{href:"/fix-devnet-link/wallet/concepts/sdk/connections",children:"connection flow between the SDK and MetaMask"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(18215);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>g});var s=n(96540),a=n(18215),r=n(23104),i=n(56347),l=n(205),o=n(57485),d=n(31682),c=n(89466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=u(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[d,h]=x({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),j=(()=>{const e=d??m;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(74848);function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==s&&(d(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:h,onClick:c,...r,className:(0,a.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,k.jsx)(b,{...t,...e}),(0,k.jsx)(v,{...t,...e})]})}function g(e){const t=(0,f.A)();return(0,k.jsx)(y,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);