"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6023],{4390:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(74848),t=s(28453);const r={description:"Manage users' non-EVM accounts and assets.",sidebar_position:9},o="Non-EVM networks",a={id:"features/non-evm-networks",title:"Non-EVM networks",description:"Manage users' non-EVM accounts and assets.",source:"@site/snaps/features/non-evm-networks.md",sourceDirName:"features",slug:"/features/non-evm-networks",permalink:"/fix-devnet-link/snaps/features/non-evm-networks",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/non-evm-networks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Manage users' non-EVM accounts and assets.",sidebar_position:9},sidebar:"snapsSidebar",previous:{title:"Network access",permalink:"/fix-devnet-link/snaps/features/network-access"},next:{title:"Notifications",permalink:"/fix-devnet-link/snaps/features/notifications"}},c={},d=[{value:"Responsible key management",id:"responsible-key-management",level:2},{value:"Derive keys",id:"derive-keys",level:2},{value:"Dogecoin example",id:"dogecoin-example",level:3},{value:"Examples",id:"examples",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"non-evm-networks",children:"Non-EVM networks"}),"\n",(0,i.jsxs)(n.p,{children:["You can manage users' non-EVM accounts and assets with their approval, using\n",(0,i.jsx)(n.a,{href:"/fix-devnet-link/snaps/reference/snaps-api",children:"Snaps API"})," methods."]}),"\n",(0,i.jsx)(n.admonition,{title:"important",type:"caution",children:(0,i.jsx)(n.p,{children:"Managing users' keys comes with great responsibility: Misplaced or stolen\nprivate keys can lead to a complete loss of funds for users of your Snap."})}),"\n",(0,i.jsx)(n.h2,{id:"responsible-key-management",children:"Responsible key management"}),"\n",(0,i.jsxs)(n.p,{children:["It's critical to practice responsible key management.\nThe general rule is: ",(0,i.jsx)(n.strong,{children:"Don't create a situation where your users can lose assets."})]}),"\n",(0,i.jsx)(n.admonition,{title:"examples of responsible key management:",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Deriving private keys and/or storing them in Snaps persistent storage, without ever moving them\nout of the ",(0,i.jsx)(n.a,{href:"/fix-devnet-link/snaps/learn/about-snaps/execution-environment",children:"Snaps execution environment"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Ensuring arbitrary code execution can't access irreversible operations or private keys."}),"\n",(0,i.jsx)(n.li,{children:"Asking the user for consent and informing them of what's going to happen before performing\nirreversible operations."}),"\n"]})}),"\n",(0,i.jsx)(n.admonition,{title:"examples of irresponsible key management:",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Allowing extraction of private keys outside the Snap in any way, especially through RPC or\nnetwork connections."}),"\n",(0,i.jsx)(n.li,{children:"Executing arbitrary or untrusted code with access to private keys."}),"\n",(0,i.jsx)(n.li,{children:"Not getting properly informed consent before performing irreversible operations."}),"\n",(0,i.jsx)(n.li,{children:"Asking for consent but ignoring the decision."}),"\n",(0,i.jsx)(n.li,{children:"Exposing key material in clear-text."}),"\n",(0,i.jsx)(n.li,{children:"Producing a bug that leads to any of the above."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"derive-keys",children:"Derive keys"}),"\n",(0,i.jsx)(n.p,{children:"To derive a user's private keys:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Choose between the BIP-32 or BIP-44 specifications to derive the user's private keys.\nIf the keys you want to derive conform to the\n",(0,i.jsx)(n.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",children:"BIP-44"})," structure, use\n",(0,i.jsx)(n.a,{href:"/fix-devnet-link/snaps/reference/snaps-api#snap_getbip44entropy",children:(0,i.jsx)(n.code,{children:"snap_getBip44Entropy"})})," to derive them.\nOtherwise, use ",(0,i.jsx)(n.a,{href:"/fix-devnet-link/snaps/reference/snaps-api#snap_getbip32entropy",children:(0,i.jsx)(n.code,{children:"snap_getBip32Entropy"})}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Add the required permission to your manifest file."}),"\n",(0,i.jsx)(n.li,{children:"Find out the derivation path to use.\nThis is dependent on the application you're building."}),"\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.a,{href:"https://github.com/MetaMask/key-tree",children:(0,i.jsx)(n.code,{children:"@metamask/key-tree"})})," module to derive the keys.\nAny additional code, for example, to derive addresses from keys, is application-specific."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dogecoin-example",children:"Dogecoin example"}),"\n",(0,i.jsx)(n.p,{children:"For example, to derive Dogecoin keys:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Dogecoin uses the BIP-44 scheme, so you'll use\n",(0,i.jsx)(n.a,{href:"/fix-devnet-link/snaps/reference/snaps-api#snap_getbip44entropy",children:(0,i.jsx)(n.code,{children:"snap_getBip44Entropy"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Dogecoin has coin type ",(0,i.jsx)(n.code,{children:"3"}),", so add the following to the manifest file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "snap_getBip44Entropy": [\n    {\n      "coinType": 3\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Dogecoin uses the following derivation path:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"m/44'/3'/0'/0/{address_index}\n"})}),"\n",(0,i.jsx)(n.p,{children:"To get the second Dogecoin account, add the following code to your Snap:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:"import { getBIP44AddressKeyDeriver } from \"@metamask/key-tree\";\n\n// Get the Dogecoin node, corresponding to the path m/44'/3'.\nconst dogecoinNode = await snap.request({\n  method: \"snap_getBip44Entropy\",\n  params: {\n    coinType: 3,\n  },\n});\n\n/**\n * Create a function that takes an index and returns an extended private key for m/44'/3'/0'/0/address_index.\n * The second parameter to getBIP44AddressKeyDeriver isn't passed. This sets account and changes to 0.\n */\nconst deriveDogecoinAddress = await getBIP44AddressKeyDeriver(dogecoinNode);\n\n// Derive the second Dogecoin address, which has index 1.\nconst secondAccount = deriveDogecoinAddress(1);\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"The following are examples of existing Snaps that manage accounts and keys:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ziad-saab/dogecoin-snap",children:"Dogecoin Snap tutorial"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Consensys/starknet-snap",children:"Consensys StarkNet Snap"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/snapdao/btcsnap",children:"Account Labs Bitcoin Snap"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/bip32",children:(0,i.jsx)(n.code,{children:"@metamask/bip32-example-snap"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/bip44",children:(0,i.jsx)(n.code,{children:"@metamask/bip44-example-snap"})})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);