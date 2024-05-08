"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2146],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),u=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=u(e.components);return t.createElement(l.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?t.createElement(g,o(o({ref:a},c),{},{components:n})):t.createElement(g,o({ref:a},c))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29121:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var t=n(58168),r=(n(96540),n(15680)),s=n(4865),o=n(19365);const i={description:"Get started by creating an account management Snap.",sidebar_position:1,tags:["Keyring API"]},l="Create an account management Snap",u={unversionedId:"features/custom-evm-accounts/create-account-snap",id:"features/custom-evm-accounts/create-account-snap",title:"Create an account management Snap",description:"Get started by creating an account management Snap.",source:"@site/snaps/features/custom-evm-accounts/create-account-snap.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/create-account-snap",permalink:"/1267-snaps-dialogs/snaps/features/custom-evm-accounts/create-account-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/create-account-snap.md",tags:[{label:"Keyring API",permalink:"/1267-snaps-dialogs/snaps/tags/keyring-api"}],version:"current",sidebarPosition:1,frontMatter:{description:"Get started by creating an account management Snap.",sidebar_position:1,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Custom EVM accounts",permalink:"/1267-snaps-dialogs/snaps/features/custom-evm-accounts/"},next:{title:"Create a companion dapp",permalink:"/1267-snaps-dialogs/snaps/features/custom-evm-accounts/create-companion-dapp"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Add permissions",id:"2-add-permissions",level:3},{value:"3. Implement the Account Management API",id:"3-implement-the-account-management-api",level:3},{value:"4. Handle requests submitted by MetaMask",id:"4-handle-requests-submitted-by-metamask",level:3},{value:"5. Notify MetaMask about events",id:"5-notify-metamask-about-events",level:3},{value:"6. Expose the Account Management API",id:"6-expose-the-account-management-api",level:3},{value:"7. Create a companion dapp",id:"7-create-a-companion-dapp",level:3},{value:"Example",id:"example",level:2}],m={toc:p},d="wrapper";function g(e){let{components:a,...n}=e;return(0,r.yg)(d,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-an-account-management-snap"},"Create an account management Snap"),(0,r.yg)("p",null,"Create an account management Snap to connect to custom EVM accounts."),(0,r.yg)("admonition",{title:"see also",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1267-snaps-dialogs/snaps/features/custom-evm-accounts/"},"Custom EVM accounts")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1267-snaps-dialogs/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create an account management companion dapp")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1267-snaps-dialogs/snaps/features/custom-evm-accounts/security"},"Account management Snap security guidelines")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1267-snaps-dialogs/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Set up a Snap.\nSee the ",(0,r.yg)("a",{parentName:"li",href:"/1267-snaps-dialogs/snaps/get-started/quickstart"},"Snaps quickstart")," and ",(0,r.yg)("a",{parentName:"li",href:"/1267-snaps-dialogs/snaps/how-to/publish-a-snap"},"how to develop a Snap"),"."),(0,r.yg)("li",{parentName:"ul"},"Read the ",(0,r.yg)("a",{parentName:"li",href:"/1267-snaps-dialogs/snaps/features/custom-evm-accounts/security"},"account management Snap security guidelines"),".")),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-install-the-keyring-api"},"1. Install the Keyring API"),(0,r.yg)("p",null,"Install the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/keyring-api"))," module in your\nproject directory using Yarn or npm:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.yg)("h3",{id:"2-add-permissions"},"2. Add permissions"),(0,r.yg)("p",null,"Specify the following ",(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/how-to/request-permissions"},"permissions")," in your Snap manifest file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:keyring": {\n    "allowedOrigins": [\n      "https://<dapp domain>"\n    ]\n  },\n  "endowment:rpc": {\n    "dapps": true\n  },\n  "snap_manageAccounts": {},\n  "snap_manageState": {}\n},\n')),(0,r.yg)("p",null,"Add a list of dapp URLs allowed to call Keyring API methods on your Snap using the\n",(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/reference/permissions#endowmentkeyring"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:keyring"))," permission."),(0,r.yg)("h3",{id:"3-implement-the-account-management-api"},"3. Implement the Account Management API"),(0,r.yg)("p",null,"Implement the ",(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/reference/keyring-api/account-management/"},"Account Management API")," in your Snap.\nMake sure to ",(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/features/custom-evm-accounts/security#limit-the-methods-exposed-to-dapps"},"limit the methods exposed to dapps"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"class MySnapKeyring implements Keyring {\n  // Implement the required methods here.\n}\n")),(0,r.yg)("h3",{id:"4-handle-requests-submitted-by-metamask"},"4. Handle requests submitted by MetaMask"),(0,r.yg)("p",null,"MetaMask submits EVM requests from dapps using the\n",(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/reference/keyring-api/account-management/#keyring_submitrequest"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_submitRequest")),"\nmethod of the Keyring API.\nSee the EVM methods for ",(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/reference/keyring-api/chain-methods#eoa-methods"},"externally owned accounts"),"\nand ",(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/reference/keyring-api/chain-methods#erc-4337-methods"},"ERC-4337 accounts"),"."),(0,r.yg)("p",null,"The following is an example of a ",(0,r.yg)("inlineCode",{parentName:"p"},"personal_sign")," request:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "d6e23af6-4bea-48dd-aeb0-7d3c30ea67f9",\n  "scope": "",\n  "account": "69438371-bef3-4957-9f91-c3f22c1d75f3",\n  "request": {\n    "method": "personal_sign",\n    "params": [\n      "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n      "0x5874174dcf1ab6F7Efd8496f4f09404CD1c5bA84"\n    ]\n  }\n}\n')),(0,r.yg)("p",null,"The request includes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id")," - The unique identifier for the request."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"scope")," - The CAIP-2 chain ID of the selected chain.\nCurrently, this property is always an empty string.\nYour Snap should use the chain ID present in the request object instead."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"account")," - The ID of the account that should handle the request."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"request")," - The request object.")),(0,r.yg)("p",null,"Your Snap must respond with either a synchronous or asynchronous result:"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Synchronous",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"return { pending: false, result };\n"))),(0,r.yg)(o.A,{value:"Asynchronous",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"return { pending: true, redirect: { message, url } };\n")),(0,r.yg)("p",null,"The redirect message and URL are displayed to the user to help them continue the transaction flow."))),(0,r.yg)("h3",{id:"5-notify-metamask-about-events"},"5. Notify MetaMask about events"),(0,r.yg)("p",null,"Notify MetaMask when ",(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/reference/keyring-api/account-management/events"},"Account Management API events"),"\ntake place, using the ",(0,r.yg)("inlineCode",{parentName:"p"},"emitSnapKeyringEvent()")," helper function."),(0,r.yg)("p",null,"For example, when an account is created:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountCreated, { account });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n")),(0,r.yg)("p",null,"MetaMask returns an error if the account already exists or the account object is invalid."),(0,r.yg)("h3",{id:"6-expose-the-account-management-api"},"6. Expose the Account Management API"),(0,r.yg)("p",null,"Create an ",(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/reference/entry-points#onkeyringrequest"},(0,r.yg)("inlineCode",{parentName:"a"},"onKeyringRequest"))," entry point handler\nmethod to expose the Account Management API methods to MetaMask and your dapp:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"export const onKeyringRequest: OnKeyringRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  // Add custom logic here.\n  return handleKeyringRequest(keyring, request);\n};\n")),(0,r.yg)("h3",{id:"7-create-a-companion-dapp"},"7. Create a companion dapp"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create a companion dapp")," to provide a user interface for your account\nmanagement Snap, enabling them to create and interact with custom EVM accounts."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/snap"},"example account management Snap source code"),"\nfor more information."))}g.isMDXComponent=!0},19365:(e,a,n)=>{n.d(a,{A:()=>o});var t=n(96540),r=n(20053);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n},a)}},4865:(e,a,n)=>{n.d(a,{A:()=>d});var t=n(58168),r=n(96540),s=n(20053),o=n(23104),i=n(47751),l=n(92303);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:a,block:n,selectedValue:i,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),d=e=>{const a=e.currentTarget,n=p.indexOf(a),t=c[n].value;t!==i&&(m(a),l(t))},g=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;a=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;a=p[n]??p[p.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},a)},c.map((e=>{let{value:a,label:n,attributes:o}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>p.push(e),onKeyDown:g,onClick:d},o,{className:(0,s.A)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":i===a})}),n??a)})))}function p(e){let{lazy:a,children:n,selectedValue:t}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function m(e){const a=(0,i.u)(e);return r.createElement("div",{className:(0,s.A)("tabs-container",u.tabList)},r.createElement(c,(0,t.A)({},e,a)),r.createElement(p,(0,t.A)({},e,a)))}function d(e){const a=(0,l.A)();return r.createElement(m,(0,t.A)({key:String(a)},e))}},47751:(e,a,n)=>{n.d(a,{u:()=>m});var t=n(96540),r=n(56347),s=n(57485),o=n(31682),i=n(89466);function l(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}function u(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??l(n);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function c(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:n}=e;const o=(0,r.W6)(),i=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,s.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(o.location.search);a.set(i,e),o.replace({...o.location,search:a.toString()})}),[i,o])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,s=u(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:s}))),[m,d]=p({queryString:n,groupId:r}),[g,y]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,i.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=m??g;return c({value:e,tabValues:s})?e:null})();(0,t.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),y(e)}),[d,y,s]),tabValues:s}}}}]);