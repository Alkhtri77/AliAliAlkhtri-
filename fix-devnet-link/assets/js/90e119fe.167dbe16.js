"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9107],{79992:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=i(74848),t=i(28453);const a={description:"Notify users directly in MetaMask, or natively in their OS.",sidebar_position:10},o="Notifications",r={id:"features/notifications",title:"Notifications",description:"Notify users directly in MetaMask, or natively in their OS.",source:"@site/snaps/features/notifications.md",sourceDirName:"features",slug:"/features/notifications",permalink:"/fix-devnet-link/snaps/features/notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/notifications.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"Notify users directly in MetaMask, or natively in their OS.",sidebar_position:10},sidebar:"snapsSidebar",previous:{title:"Non-EVM networks",permalink:"/fix-devnet-link/snaps/features/non-evm-networks"},next:{title:"Signature insights",permalink:"/fix-devnet-link/snaps/features/signature-insights"}},c={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to notify users",id:"1-request-permission-to-notify-users",level:3},{value:"2. Create a notification",id:"2-create-a-notification",level:3},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"notifications",children:"Notifications"}),"\n",(0,s.jsxs)(n.p,{children:["You can display notifications directly in MetaMask or natively in a user's operating system (OS)\nusing the ",(0,s.jsx)(n.a,{href:"/fix-devnet-link/snaps/reference/snaps-api#snap_notify",children:(0,s.jsx)(n.code,{children:"snap_notify"})})," API method."]}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-request-permission-to-notify-users",children:"1. Request permission to notify users"}),"\n",(0,s.jsxs)(n.p,{children:["Request the ",(0,s.jsx)(n.a,{href:"/fix-devnet-link/snaps/reference/snaps-api#snap_notify",children:(0,s.jsx)(n.code,{children:"snap_notify"})})," permission.\nAdd the following to your Snap's manifest file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "snap_notify": {}\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-create-a-notification",children:"2. Create a notification"}),"\n",(0,s.jsxs)(n.p,{children:["Create a notification by calling ",(0,s.jsx)(n.a,{href:"/fix-devnet-link/snaps/reference/snaps-api#snap_notify",children:(0,s.jsx)(n.code,{children:"snap_notify"})}),", which takes\na notification ",(0,s.jsx)(n.code,{children:"type"})," and ",(0,s.jsx)(n.code,{children:"message"}),".\nSpecify ",(0,s.jsx)(n.code,{children:'type: "inApp"'})," to display the notification in the MetaMask UI, or ",(0,s.jsx)(n.code,{children:'type: "native"'})," to\ndisplay the notification in the user's OS."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["We recommend using ",(0,s.jsx)(n.code,{children:'type: "inApp"'})," because there's no guarantee that native notifications are\ndisplayed to the user.\nYou can also call ",(0,s.jsx)(n.code,{children:"snap_notify"})," twice, which each notification type, to trigger both an in-app and\nnative notification."]})}),"\n",(0,s.jsx)(n.p,{children:'The following example displays a notification in MetaMask, with the message "Hello, world!":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'await snap.request({\n  method: "snap_notify",\n  params: {\n    type: "inApp",\n    message: "Hello, world!",\n  },\n});\n'})}),"\n",(0,s.jsxs)("div",{class:"row",children:[(0,s.jsx)("div",{class:"column",children:(0,s.jsx)("img",{src:i(30911).A,width:"250px",alt:"Notification alert",style:{border:"1px solid #DCDCDC"}})}),(0,s.jsx)("div",{class:"column",children:(0,s.jsx)("img",{src:i(45636).A,width:"300px",alt:"Notification message",style:{border:"1px solid #DCDCDC"}})})]}),"\n",(0,s.jsxs)(n.admonition,{title:"Notification rate limits",type:"info",children:[(0,s.jsx)(n.p,{children:"Each Snap can trigger up to:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Five in-app notifications per minute."}),"\n",(0,s.jsx)(n.li,{children:"Two native notifications per five minutes."}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["See the\n",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/notifications",children:(0,s.jsx)(n.code,{children:"@metamask/notifications-example-snap"})}),"\npackage for a full example of implementing notifications using\n",(0,s.jsx)(n.a,{href:"/fix-devnet-link/snaps/reference/snaps-api#snap_notify",children:(0,s.jsx)(n.code,{children:"snap_notify"})}),".\nThis example exposes a ",(0,s.jsx)(n.a,{href:"/fix-devnet-link/snaps/learn/about-snaps/apis#custom-json-rpc-apis",children:"custom JSON-RPC API"})," for\ndapps to display in-app and native notifications."]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},30911:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/notifications-1-124974c2b537df6987224a2ce123fc48.png"},45636:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/notifications-2-a31a9c479c1713aabe039d2945a79210.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);