"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6595],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(r),k=a,u=s["".concat(d,".").concat(k)]||s[k]||c[k]||i;return r?n.createElement(u,o(o({ref:t},m),{},{components:r})):n.createElement(u,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},95851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"See the Snaps known errors reference",sidebar_position:5},o="Snaps known errors",l={unversionedId:"reference/known-errors",id:"reference/known-errors",title:"Snaps known errors",description:"See the Snaps known errors reference",source:"@site/snaps/reference/known-errors.md",sourceDirName:"reference",slug:"/reference/known-errors",permalink:"/update-restricted/snaps/reference/known-errors",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/known-errors.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"See the Snaps known errors reference",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Snaps permissions",permalink:"/update-restricted/snaps/reference/permissions"},next:{title:"Keyring API",permalink:"/update-restricted/snaps/reference/keyring-api/"}},d={},p=[],m={toc:p},s="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snaps-known-errors"},"Snaps known errors"),(0,a.kt)("p",null,"Snaps can ",(0,a.kt)("a",{parentName:"p",href:"/update-restricted/snaps/how-to/communicate-errors"},"communicate the following errors")," without crashing the Snap:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Error"),(0,a.kt)("th",{parentName:"tr",align:null},"What the error indicates"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Error code"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ChainDisconnectedError")),(0,a.kt)("td",{parentName:"tr",align:null},"The provider is disconnected from the requested chain."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"4901"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DisconnectedError")),(0,a.kt)("td",{parentName:"tr",align:null},"The provider is disconnected."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"4900"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"InternalError")),(0,a.kt)("td",{parentName:"tr",align:null},"An internal error has occurred."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-32603"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"InvalidInputError")),(0,a.kt)("td",{parentName:"tr",align:null},"The input to a method is invalid."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-32000"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"InvalidParamsError")),(0,a.kt)("td",{parentName:"tr",align:null},"The parameters to a method are invalid."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-32602"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"InvalidRequestError")),(0,a.kt)("td",{parentName:"tr",align:null},"The request is invalid."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-32600"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"LimitExceededError")),(0,a.kt)("td",{parentName:"tr",align:null},"A limit has been exceeded."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-32005"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MethodNotFoundError")),(0,a.kt)("td",{parentName:"tr",align:null},"A method does not exist."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-32601"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MethodNotSupportedError")),(0,a.kt)("td",{parentName:"tr",align:null},"A method is not supported."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-32004"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ParseError")),(0,a.kt)("td",{parentName:"tr",align:null},"A request is not valid JSON."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-32700"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ResourceNotFoundError")),(0,a.kt)("td",{parentName:"tr",align:null},"A resource does not exist."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-32001"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ResourceUnavailableError")),(0,a.kt)("td",{parentName:"tr",align:null},"A resource is unavailable."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-32002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TransactionRejected")),(0,a.kt)("td",{parentName:"tr",align:null},"A transaction has been rejected."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"-32003"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UnauthorizedError")),(0,a.kt)("td",{parentName:"tr",align:null},"The requested method/account is not authorized by the user."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"4100"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UnsupportedMethodError")),(0,a.kt)("td",{parentName:"tr",align:null},"The requested method is not supported by the provider."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"4200"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UserRejectedRequestError")),(0,a.kt)("td",{parentName:"tr",align:null},"The user has rejected the request."),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"4001"))))))}c.isMDXComponent=!0}}]);