"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},o),{},{components:n})):a.createElement(k,l({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},l="Type alias: Keyring",s={unversionedId:"reference/keyring-api/type-aliases/Keyring",id:"reference/keyring-api/type-aliases/Keyring",title:"Type alias: Keyring",description:"Keyring interface.",source:"@site/snaps/reference/keyring-api/type-aliases/Keyring.md",sourceDirName:"reference/keyring-api/type-aliases",slug:"/reference/keyring-api/type-aliases/Keyring",permalink:"/1056-sdk-examples/snaps/reference/keyring-api/type-aliases/Keyring",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/type-aliases/Keyring.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Class: SnapRpcSender",permalink:"/1056-sdk-examples/snaps/reference/keyring-api/classes/SnapRpcSender"},next:{title:"Type alias: KeyringAccount",permalink:"/1056-sdk-examples/snaps/reference/keyring-api/type-aliases/KeyringAccount"}},p={},d=[{value:"Type declaration",id:"type-declaration",level:2},{value:"approveRequest()",id:"approverequest",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"createAccount()",id:"createaccount",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"deleteAccount()",id:"deleteaccount",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"filterAccountChains()",id:"filteraccountchains",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getAccount()",id:"getaccount",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"getRequest()",id:"getrequest",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"listAccounts()",id:"listaccounts",level:3},{value:"Returns",id:"returns-6",level:4},{value:"listRequests()",id:"listrequests",level:3},{value:"Returns",id:"returns-7",level:4},{value:"rejectRequest()",id:"rejectrequest",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"submitRequest()",id:"submitrequest",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-9",level:4},{value:"updateAccount()",id:"updateaccount",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Source",id:"source",level:2}],o={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"type-alias-keyring"},"Type alias: Keyring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type Keyring: {\n  approveRequest: Promise<void>;\n  createAccount: Promise<{\n     address: string;\n     id: string;\n     name: string;\n     options: null | Record<string, Json>;\n     supportedMethods: (\n        | "personal_sign"\n        | "eth_sendTransaction"\n        | "eth_sign"\n        | "eth_signTransaction"\n        | "eth_signTypedData"\n        | "eth_signTypedData_v1"\n        | "eth_signTypedData_v2"\n        | "eth_signTypedData_v3"\n        | "eth_signTypedData_v4")[];\n     type: "eip155:eoa" | "eip155:erc4337";\n  }>;\n  deleteAccount: Promise<void>;\n  filterAccountChains: Promise<string[]>;\n  getAccount: Promise<undefined | {\n     address: string;\n     id: string;\n     name: string;\n     options: null | Record<string, Json>;\n     supportedMethods: (\n        | "personal_sign"\n        | "eth_sendTransaction"\n        | "eth_sign"\n        | "eth_signTransaction"\n        | "eth_signTypedData"\n        | "eth_signTypedData_v1"\n        | "eth_signTypedData_v2"\n        | "eth_signTypedData_v3"\n        | "eth_signTypedData_v4")[];\n     type: "eip155:eoa" | "eip155:erc4337";\n  }>;\n  getRequest: Promise<undefined | {\n     account: string;\n     request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n     scope: string;\n  }>;\n  listAccounts: Promise<{\n     address: string;\n     id: string;\n     name: string;\n     options: null | Record<string, Json>;\n     supportedMethods: (\n        | "personal_sign"\n        | "eth_sendTransaction"\n        | "eth_sign"\n        | "eth_signTransaction"\n        | "eth_signTypedData"\n        | "eth_signTypedData_v1"\n        | "eth_signTypedData_v2"\n        | "eth_signTypedData_v3"\n        | "eth_signTypedData_v4")[];\n     type: "eip155:eoa" | "eip155:erc4337";\n  }[]>;\n  listRequests: Promise<{\n     account: string;\n     request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n     scope: string;\n  }[]>;\n  rejectRequest: Promise<void>;\n  submitRequest: Promise<{\n     pending: true;\n     } | {\n     pending: false;\n     result: Json;\n  }>;\n  updateAccount: Promise<void>;\n};\n')),(0,r.kt)("p",null,"Keyring interface."),(0,r.kt)("p",null,"Represents the functionality and operations related to managing accounts and\nhandling requests."),(0,r.kt)("h2",{id:"type-declaration"},"Type declaration"),(0,r.kt)("h3",{id:"approverequest"},"approveRequest()"),(0,r.kt)("p",null,"Approve a request."),(0,r.kt)("p",null,"Approves the request with the given ID and sets the response if provided."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the request to approve.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"result"),"?"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The response to the request (optional).")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"A promise that resolves when the request is successfully\napproved."),(0,r.kt)("h3",{id:"createaccount"},"createAccount()"),(0,r.kt)("p",null,"Create an account."),(0,r.kt)("p",null,"Creates a new account with the given name, supported chains, and optional\naccount options."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options"),"?"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Json"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Keyring-defined options for the account (optional).")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"A promise that resolves to the newly created KeyringAccount\nobject without any private information."),(0,r.kt)("h3",{id:"deleteaccount"},"deleteAccount()"),(0,r.kt)("p",null,"Delete an account from the keyring."),(0,r.kt)("p",null,"Deletes the account with the given ID from the keyring."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the account to delete.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,"A promise that resolves when the account is successfully deleted."),(0,r.kt)("h3",{id:"filteraccountchains"},"filterAccountChains()"),(0,r.kt)("p",null,"Filter supported chains for a given account."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID of the account to be checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chains")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of chains (CAIP-2) to be checked.")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,"A Promise that resolves to a filtered list of CAIP-2 IDs\nrepresenting the supported chains."),(0,r.kt)("h3",{id:"getaccount"},"getAccount()"),(0,r.kt)("p",null,"Get an account."),(0,r.kt)("p",null,"Retrieves the KeyringAccount object for the given account ID."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the account to retrieve.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,"A promise that resolves to the KeyringAccount object if found, or\nundefined otherwise."),(0,r.kt)("h3",{id:"getrequest"},"getRequest()"),(0,r.kt)("p",null,"Get a request."),(0,r.kt)("p",null,"Retrieves the KeyringRequest object for the given request ID."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the request to retrieve.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,"A promise that resolves to the KeyringRequest object if found, or\nundefined otherwise."),(0,r.kt)("h3",{id:"listaccounts"},"listAccounts()"),(0,r.kt)("p",null,"List accounts."),(0,r.kt)("p",null,"Retrieves an array of KeyringAccount objects representing the available\naccounts."),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,"A promise that resolves to an array of KeyringAccount objects."),(0,r.kt)("h3",{id:"listrequests"},"listRequests()"),(0,r.kt)("p",null,"List all submitted requests."),(0,r.kt)("p",null,"Retrieves an array of KeyringRequest objects representing the submitted\nrequests."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,"A promise that resolves to an array of KeyringRequest objects."),(0,r.kt)("h3",{id:"rejectrequest"},"rejectRequest()"),(0,r.kt)("p",null,"Reject a request."),(0,r.kt)("p",null,"Rejects the request with the given ID."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the request to reject.")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,"A promise that resolves when the request is successfully\nrejected."),(0,r.kt)("h3",{id:"submitrequest"},"submitRequest()"),(0,r.kt)("p",null,"Submit a request."),(0,r.kt)("p",null,"Submits the given KeyringRequest object."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"account"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"request"),": ","{",' id: string; jsonrpc: "2.0"; method: string; } ',"|"," ","{",' id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json',">"," ","|"," Json[]; };   ",(0,r.kt)("inlineCode",{parentName:"td"},"scope"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   }"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The KeyringRequest object to submit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request.account")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account ID (UUIDv4).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request.request")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{",' id: string; jsonrpc: "2.0"; method: string; } ',"|"," ","{",' id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json',">"," ","|"," Json[]; }"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON-RPC request sent by the client application.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Note: The request ID must be a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request.scope")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Request's scope (CAIP-2 chain ID).")))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,"A promise that resolves to the request response."),(0,r.kt)("h3",{id:"updateaccount"},"updateAccount()"),(0,r.kt)("p",null,"Update an account."),(0,r.kt)("p",null,"Updates the account with the given account object. Does nothing if the\naccount does not exist."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{","   ",(0,r.kt)("inlineCode",{parentName:"td"},"address"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,r.kt)("inlineCode",{parentName:"td"},"options"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Json"),">",";   ",(0,r.kt)("inlineCode",{parentName:"td"},"supportedMethods"),": (      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"personal_sign"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_sendTransaction"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_sign"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTransaction"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v1"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v2"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v3"'),"      ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v4"'),")[];   ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'"eip155:eoa"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eip155:erc4337"'),";   }"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The updated account object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account address or next receive address (UTXO).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account ID (UUIDv4).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"User-chosen account name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Json"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Keyring-dependent account options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.supportedMethods")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"personal_sign"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_sendTransaction"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_sign"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTransaction"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v1"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v2"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v3"'),"   ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eth_signTypedData_v4"'),")[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account supported methods.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"eip155:eoa"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"eip155:erc4337"')),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account type.")))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,"A promise that resolves when the account is successfully updated."),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-api.ts#L136"},"external/keyring-api/src/keyring-api.ts:136")))}u.isMDXComponent=!0}}]);