"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7540],{84856:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=s(74848),t=s(28453);const a={sidebar_position:6},i="Debug a Snap",r={id:"how-to/debug-a-snap/index",title:"Debug a Snap",description:"To debug your Snap, use console.log and inspect the MetaMask background process.",source:"@site/snaps/how-to/debug-a-snap/index.md",sourceDirName:"how-to/debug-a-snap",slug:"/how-to/debug-a-snap/",permalink:"/fix-devnet-link/snaps/how-to/debug-a-snap/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/debug-a-snap/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"snapsSidebar",previous:{title:"Test a Snap",permalink:"/fix-devnet-link/snaps/how-to/test-a-snap"},next:{title:"Troubleshoot common issues",permalink:"/fix-devnet-link/snaps/how-to/debug-a-snap/common-issues"}},d={},c=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"debug-a-snap",children:"Debug a Snap"}),"\n",(0,o.jsxs)(n.p,{children:["To debug your Snap, use ",(0,o.jsx)(n.code,{children:"console.log"})," and inspect the MetaMask background process."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["You can also see the ",(0,o.jsx)(n.a,{href:"/fix-devnet-link/snaps/how-to/debug-a-snap/common-issues",children:"common issues"})," encountered by Snap developers."]})}),"\n",(0,o.jsxs)(n.p,{children:["You can add your log statements in your source code and build your Snap, or add them directly\nto your Snap bundle and use ",(0,o.jsx)(n.a,{href:"/fix-devnet-link/snaps/reference/cli/subcommands#m-manifest",children:(0,o.jsx)(n.code,{children:"yarn mm-snap manifest --fix"})}),"\nto update the ",(0,o.jsx)(n.code,{children:"shasum"})," in your Snap manifest file.\nThe manifest ",(0,o.jsx)(n.code,{children:"shasum"})," must match the contents of your bundle at the time MetaMask fetches your Snap."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Because adding logs modifies the Snap source code, you must re-install the Snap whenever you add a\nlog statement."})}),"\n",(0,o.jsx)(n.p,{children:"The Snap log output is only visible in the extension background process console.\nIf you're using a Chromium browser, use the following steps to inspect the background process and\nview its console:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Go to ",(0,o.jsx)(n.code,{children:"chrome://extensions"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Toggle ",(0,o.jsx)(n.strong,{children:"Developer mode"})," on in the top right corner."]}),"\n",(0,o.jsxs)(n.li,{children:["Find MetaMask Flask, and select ",(0,o.jsx)(n.strong,{children:"Details"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Under ",(0,o.jsx)(n.strong,{children:"Inspect views"}),", select ",(0,o.jsx)(n.code,{children:"background.html"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The log output displays in the console that pops up."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var o=s(96540);const t={},a=o.createContext(t);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);