"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3557],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46865:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(58168),a=(r(96540),r(15680));const o={description:"Learn about convenience libraries.",sidebar_position:4},i="Convenience libraries",s={unversionedId:"concepts/convenience-libraries",id:"concepts/convenience-libraries",title:"Convenience libraries",description:"Learn about convenience libraries.",source:"@site/wallet/concepts/convenience-libraries.md",sourceDirName:"concepts",slug:"/concepts/convenience-libraries",permalink:"/1267-snaps-dialogs/wallet/concepts/convenience-libraries",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/convenience-libraries.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn about convenience libraries.",sidebar_position:4},sidebar:"walletSidebar",previous:{title:"Android SDK architecture",permalink:"/1267-snaps-dialogs/wallet/concepts/sdk/android"},next:{title:"Signing methods",permalink:"/1267-snaps-dialogs/wallet/concepts/signing-methods"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"convenience-libraries"},"Convenience libraries"),(0,a.yg)("p",null,"Various convenience libraries exist for dapp developers.\nSome of them simplify the creation of specific user interface elements, some entirely manage the\nuser account onboarding, and others give you a variety of methods for interacting with smart\ncontracts, for a variety of API preferences (for example, promises, callbacks, and strong types)."),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/wallet/concepts/wallet-api#ethereum-provider-api"},"MetaMask Ethereum provider API")," is very simple, and wraps\n",(0,a.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/wallet/concepts/wallet-api#json-rpc-api"},"Ethereum JSON-RPC")," formatted messages, which is why\nsome developers use a convenience library for interacting with the provider, such as\n",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/ethers"},"Ethers"),", ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3"},"web3.js"),", and\n",(0,a.yg)("a",{parentName:"p",href:"https://framework.embarklabs.io/"},"Embark"),".\nYou can refer to those tools' documentation to use them."),(0,a.yg)("p",null,"You can ",(0,a.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/wallet/how-to/use-sdk/"},"use MetaMask SDK"),", which provides a reliable, secure, and\nseamless connection from your dapp to MetaMask.\nIt onboards users smoothly from multiple dapp platforms using the MetaMask browser extension or\nMetaMask Mobile, and your dapp can call any ",(0,a.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/wallet/concepts/wallet-api"},"Wallet API")," methods with the SDK installed."),(0,a.yg)("p",null,"You can also ",(0,a.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard"},"use Web3-Onboard with MetaMask SDK"),"\nin your JavaScript dapp."))}m.isMDXComponent=!0}}]);