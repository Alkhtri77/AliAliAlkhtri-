"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9545],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,d=u["".concat(i,".").concat(m)]||u[m]||g[m]||s;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},24184:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(96540),a(15680)),s=a(47174);const o={description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},p="Snaps quickstart",i={unversionedId:"get-started/quickstart",id:"get-started/quickstart",title:"Snaps quickstart",description:"Get started quickly using the create-snap starter kit.",source:"@site/snaps/get-started/quickstart.md",sourceDirName:"get-started",slug:"/get-started/quickstart",permalink:"/1267-snaps-dialogs/snaps/get-started/quickstart",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/get-started/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Install MetaMask Flask",permalink:"/1267-snaps-dialogs/snaps/get-started/install-flask"},next:{title:"Learn",permalink:"/1267-snaps-dialogs/snaps/learn"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the project",id:"create-the-project",level:2},{value:"Start the Snap",id:"start-the-snap",level:2},{value:"Connect to the Snap",id:"connect-to-the-snap",level:2},{value:"Customize the Snap",id:"customize-the-snap",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:c},g="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"snaps-quickstart"},"Snaps quickstart"),(0,r.yg)("p",null,"Get started creating your own Snap.\nUse the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit to initialize a Snap monorepo project built with TypeScript and React.\nSee the following video demo:"),(0,r.yg)(s.A,{url:"https://www.youtube.com/embed/qZRAryYwgdg?si=CeImIULgH3iD-FF0",mdxType:"YoutubeEmbed"}),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1267-snaps-dialogs/snaps/get-started/install-flask"},"MetaMask Flask installed")),(0,r.yg)("li",{parentName:"ul"},"A text editor (for example, ",(0,r.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node")," version 20.11 or later"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn"))),(0,r.yg)("h2",{id:"create-the-project"},"Create the project"),(0,r.yg)("p",null,"Create a new Snap project using the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit by running:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap your-snap-name\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npx @metamask/create-snap your-snap-name\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap your-snap-name\n")),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/learn/about-snaps/files"},"Snaps files")," to learn about your Snap project files."),(0,r.yg)("h2",{id:"start-the-snap"},"Start the Snap"),(0,r.yg)("p",null,"From the root of the newly created project, install the project dependencies using Yarn:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")),(0,r.yg)("p",null,"You may get a warning like the following: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'@lavamoat/allow-scripts has detected dependencies without configuration. explicit configuration required.\nrun "allow-scripts auto" to automatically populate the configuration.\n')),(0,r.yg)("p",null,"You can fix this by running the following command: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn run allow-scripts auto\n")),(0,r.yg)("p",null,"Start the development server:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"yarn start\n")),(0,r.yg)("p",null,"You are now serving the Snap at ",(0,r.yg)("a",{parentName:"p",href:"http://localhost:8080/"},(0,r.yg)("inlineCode",{parentName:"a"},"http://localhost:8080"))," and its front-end dapp at ",(0,r.yg)("a",{parentName:"p",href:"http://localhost:8000/"},(0,r.yg)("inlineCode",{parentName:"a"},"http://localhost:8000")),"."),(0,r.yg)("h2",{id:"connect-to-the-snap"},"Connect to the Snap"),(0,r.yg)("p",null,"On the front-end dapp, select the ",(0,r.yg)("strong",{parentName:"p"},"Connect")," button and the MetaMask Flask extension pops up and\nrequires you to approve the Snap's permissions."),(0,r.yg)("p",null,"Once connected, select the ",(0,r.yg)("strong",{parentName:"p"},"Send message")," button to display a custom message within a confirmation\ndialog in MetaMask Flask."),(0,r.yg)("h2",{id:"customize-the-snap"},"Customize the Snap"),(0,r.yg)("p",null,"Open the project in a text editor.\nYou can customize your Snap by editing ",(0,r.yg)("inlineCode",{parentName:"p"},"index.ts")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"packages/snap/src")," folder."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"index.ts")," contains an example request that uses the\n",(0,r.yg)("a",{parentName:"p",href:"/1267-snaps-dialogs/snaps/reference/snaps-api#snapdialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog"))," method to display a custom confirmation screen:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\nimport { panel, text } from "@metamask/snaps-sdk";\n\n/**\n * Handle incoming JSON-RPC requests, sent through wallet_invokeSnap.\n *\n * @param args - The request handler arguments as an object.\n * @param args.origin - The origin of the request, e.g., the website that invoked the Snap.\n * @param args.request - A validated JSON-RPC request object.\n * @returns The result of snap_dialog.\n * @throws If the request method is not valid for this Snap.\n */\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  switch (request.method) {\n    case "hello":\n      return snap.request({\n        method: "snap_dialog",\n        params: {\n          type: "confirmation",\n          content: panel([\n            text(`Hello, **${origin}**!`),\n            text("This custom confirmation is just for display purposes."),\n            text(\n              "But you can edit the Snap source code to make it do something, if you want to!",\n            ),\n          ]),\n        },\n      });\n    default:\n      throw new Error("Method not found.");\n  }\n};\n')),(0,r.yg)("p",null,"Edit the text in any ",(0,r.yg)("inlineCode",{parentName:"p"},"text()")," component and select the ",(0,r.yg)("strong",{parentName:"p"},"Reconnect")," button\non the front-end to re-install the Snap."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"MetaMask Flask automatically re-installs locally hosted Snaps whenever it receives a connection request for them.")),(0,r.yg)("p",null,"The next time you select the ",(0,r.yg)("strong",{parentName:"p"},"Send message")," button, you see the updated text in the confirmation dialog."),(0,r.yg)("p",null,"You've now successfully connected, installed, interacted with, and customized your Snap!"),(0,r.yg)("h2",{id:"next-steps"},"Next steps"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To learn more about the Snaps system, review ",(0,r.yg)("a",{parentName:"li",href:"/snaps/learn/about-snaps"},"fundamental Snaps concepts"),"\nand try the ",(0,r.yg)("a",{parentName:"li",href:"/snaps/learn/tutorials"},"Snaps tutorials"),"."),(0,r.yg)("li",{parentName:"ul"},"To implement specific features and use cases, see the ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features"},"Snaps feature guides"),"."),(0,r.yg)("li",{parentName:"ul"},"To follow best practices for developing a Snap, see the ",(0,r.yg)("a",{parentName:"li",href:"/snaps/how-to"},"Snaps how-to guides"),".")))}m.isMDXComponent=!0},47174:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540);const r="wrapper_iojS",s=e=>{let{url:t}=e;return n.createElement("div",{className:r}," ",n.createElement("iframe",{src:t,allowFullScreen:!0}))}}}]);