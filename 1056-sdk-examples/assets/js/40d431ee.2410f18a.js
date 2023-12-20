"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||s;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={description:"See the Jest API and options reference."},i="Jest API and options",o={unversionedId:"reference/jest",id:"reference/jest",title:"Jest API and options",description:"See the Jest API and options reference.",source:"@site/snaps/reference/jest.md",sourceDirName:"reference",slug:"/reference/jest",permalink:"/1056-sdk-examples/snaps/reference/jest",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/jest.md",tags:[],version:"current",frontMatter:{description:"See the Jest API and options reference."},sidebar:"snapsSidebar",previous:{title:"Subcommands",permalink:"/1056-sdk-examples/snaps/reference/cli/subcommands"},next:{title:"Keyring API",permalink:"/1056-sdk-examples/snaps/reference/keyring-api/"}},l={},p=[{value:"API methods",id:"api-methods",level:2},{value:"installSnap",id:"installsnap",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"request",id:"request",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"sendTransaction",id:"sendtransaction",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"runCronJob",id:"runcronjob",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"close",id:"close",level:3},{value:"Example",id:"example-4",level:4},{value:"getInterface",id:"getinterface",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-5",level:4},{value:"mock",id:"mock",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Example",id:"example-6",level:4},{value:"Jest matchers",id:"jest-matchers",level:2},{value:"Options",id:"options",level:2},{value:"browser",id:"browser",level:3},{value:"Example",id:"example-7",level:4},{value:"executionEnvironmentUrl",id:"executionenvironmenturl",level:3},{value:"Example",id:"example-8",level:4},{value:"keepAlive",id:"keepalive",level:3},{value:"Example",id:"example-9",level:4},{value:"server",id:"server",level:3},{value:"Example",id:"example-10",level:4},{value:"simulatorUrl",id:"simulatorurl",level:3},{value:"Example",id:"example-11",level:4}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jest-api-and-options"},"Jest API and options"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," package for ",(0,r.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/how-to/test-a-snap"},"end-to-end Snaps testing"),".\nThis reference describes the available ",(0,r.kt)("a",{parentName:"p",href:"#api-methods"},"API methods"),", ",(0,r.kt)("a",{parentName:"p",href:"#jest-matchers"},"Jest matchers"),",\nand ",(0,r.kt)("a",{parentName:"p",href:"#options"},"options"),"."),(0,r.kt)("h2",{id:"api-methods"},"API methods"),(0,r.kt)("h3",{id:"installsnap"},"installSnap"),(0,r.kt)("p",null,"Installs a Snap in the browser.\nWe recommend using this method in each test to ensure that it starts with a clean slate."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"By default, if the built-in server is enabled, ",(0,r.kt)("inlineCode",{parentName:"p"},"installSnap")," installs the Snap from the built-in server.\nOtherwise, you must specify a Snap ID to install."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An object with functions that can be used to interact with the Snap."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { installSnap } from '@metamask/snaps-jest';\n\ndescribe('MySnap', () => {\n  it('should do something', async () => {\n    await installSnap(/* optional Snap ID */);\n    // ...\n  });\n});\n")),(0,r.kt)("h3",{id:"request"},"request"),(0,r.kt)("p",null,"Sends a JSON-RPC request to the Snap."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("p",null,"A JSON-RPC request object with an addition optional ",(0,r.kt)("inlineCode",{parentName:"p"},"origin")," property."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"A promise that resolves to the response from the ",(0,r.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/reference/exports#onrpcrequest"},(0,r.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," function,\nwhich can be checked using ",(0,r.kt)("a",{parentName:"p",href:"#jest-matchers"},"Jest matchers"),"."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { installSnap } from '@metamask/snaps-jest';\n\ndescribe('MySnap', () => {\n  it('should do something', async () => {\n    const { request } = await installSnap(/* optional snap ID */);\n    const response = await request({\n      origin: 'http://localhost:8080',\n      method: 'foo',\n      params: [],\n    });\n\n    /* Check the response using Jest matchers. Since the response\n     * is a standard JSON-RPC response, you can use any standard\n     * Jest matchers to check it, including snapshot matchers. */\n    expect(response).toRespondWith('bar');\n    expect(response).not.toRespondWithError('baz');\n    expect(response).toMatchSnapshot();\n  });\n});\n")),(0,r.kt)("h3",{id:"sendtransaction"},"sendTransaction"),(0,r.kt)("p",null,"Sends a transaction to the Snap."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("p",null,"A transaction object with the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gasLimit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxFeePerGas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxPriorityFeePerGas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nonce"))),(0,r.kt)("p",null,"All properties are optional.\nThe addresses are randomly generated by default.\nMost values can be specified as a hex string or a decimal number."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,"An object with the user interface that was shown by the Snap, in the\n",(0,r.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/reference/exports#ontransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"onTransaction"))," function."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { installSnap } from '@metamask/snaps-jest';\nimport { panel, text } from '@metamask/snaps-sdk';\n\ndescribe('MySnap', () => {\n  it('should do something', async () => {\n    const { sendTransaction } = await installSnap(/* optional Snap ID */);\n    const response = await sendTransaction({\n      value: '0x0',\n      data: '0x',\n      gasLimit: '0x5208',\n      maxFeePerGas: '0x5208',\n      maxPriorityFeePerGas: '0x5208',\n      nonce: '0x0',\n    });\n\n    expect(response).toRender(panel([text('Hello, world!')]));\n  });\n});\n")),(0,r.kt)("h3",{id:"runcronjob"},"runCronJob"),(0,r.kt)("p",null,"Runs a cronjob in the Snap.\nThe request is normally specified in the Snap manifest file under the\n",(0,r.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/reference/permissions#endowmentcronjob"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:cronjob"))," permission, but this method alows you to\nrun cronjobs that are not specified in the manifest as well."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("p",null,"A JSON-RPC request object."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,"A promise that resolves to the response from the ",(0,r.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/reference/exports#oncronjob"},(0,r.kt)("inlineCode",{parentName:"a"},"onCronjob"))," function,\nwhich can be checked using ",(0,r.kt)("a",{parentName:"p",href:"#jest-matchers"},"Jest matchers"),"."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { installSnap } from '@metamask/snaps-jest';\n\ndescribe('MySnap', () => {\n  it('should do something', async () => {\n    const { runCronjob } = await installSnap(/* optional snap ID */);\n    const response = await runCronjob({\n      method: 'foo',\n      params: [],\n    });\n\n    // Check the response using Jest matchers\n    expect(response).toRespondWith('bar');\n    expect(response).not.toRespondWithError('baz');\n  });\n});\n")),(0,r.kt)("h3",{id:"close"},"close"),(0,r.kt)("p",null,"Closes the page the test is running on.\nThis is useful for cleaning up after a test, and is not required.\nIt can potentially speed up your tests, since it prevents too many pages from being open at the same time."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { installSnap } from '@metamask/snaps-jest';\n\ndescribe('MySnap', () => {\n  it('should do something', async () => {\n    const { close } = await installSnap(/* optional Snap ID */);\n    // ...\n    await close();\n  });\n});\n")),(0,r.kt)("h3",{id:"getinterface"},"getInterface"),(0,r.kt)("p",null,"If your Snap uses ",(0,r.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/reference/rpc-api#snap_dialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," to show user interfaces, you can use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"request.getInterface")," method to interact with the user interfaces.\nThis method is present on the return value of the ",(0,r.kt)("a",{parentName:"p",href:"#request"},(0,r.kt)("inlineCode",{parentName:"a"},"request"))," method."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,"This method waits for the user interface to be shown, and returns an object with functions that can\nbe used to interact with the user interface."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { installSnap } from '@metamask/snaps-jest';\nimport { text } from '@metamask/snaps-sdk';\nimport { assert } from '@metamask/utils';\n\ndescribe('MySnap', () => {\n  it('should do something', async () => {\n    const { request } = await installSnap(/* optional Snap ID */);\n\n    // Note: You cannot resolve the promise yet!\n    const response = request({\n      method: 'foo',\n    });\n\n    const ui = await response.getInterface();\n\n    // This is useful if you're using TypeScript, since it infers the type\n    // of the user interface.\n    assert(ui.type === 'alert');\n    expect(ui).toRender(text('Hello, world!'));\n\n    // \"Click\" the OK button.\n    await ui.ok();\n\n    // Now you can resolve the promise.\n    const result = await response;\n    expect(result).toRespondWith('bar');\n  });\n});\n")),(0,r.kt)("h3",{id:"mock"},"mock"),(0,r.kt)("p",null,"Mocks the response of any network request made by the Snap through the\n",(0,r.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/reference/permissions#endowmentnetwork-access"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("p",null,"An object with the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," - The URL of the request.\nThis can be a string or a regular expression."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"partial")," - If set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the request is mocked if the URL starts with the given URL.\nThis option is ignored if a regular expression is provided to the ",(0,r.kt)("inlineCode",{parentName:"li"},"url")," option.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"response")," - An object with the response.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status")," - The status code of the response.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"body")," - The body of the response.\nThe default is an empty string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers")," - An object with the headers of the response.\nBy default, this uses headers that enable CORS."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contentType")," - The content type of the response.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"li"},"text/plain"),".")))),(0,r.kt)("p",null,"All properties are optional except ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,"An object with an ",(0,r.kt)("inlineCode",{parentName:"p"},"unmock")," function that can be used to remove the mock.\nIf the mock is not removed, it remains active only for the rest of the Snap installation, so it does\nnot affect other tests with a new Snap installation."),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { installSnap } from '@metamask/snaps-jest';\n\ndescribe('MySnap', () => {\n  it('should do something', async () => {\n    const { mock, request } = await installSnap(/* optional Snap ID */);\n\n    const { unmock } = mock({\n      url: 'https://example.com',\n      status: 200,\n      body: 'Hello, world!',\n    });\n\n    // ...\n\n    unmock();\n  });\n});\n")),(0,r.kt)("h2",{id:"jest-matchers"},"Jest matchers"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-jest")," includes the following Jest matchers that you can use to assert that a\nresponse from a Snap matches an expected value:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toRespondWith(expectedResponse)")," - Checks if a response matches an expected response.\nThis matcher checks the ",(0,r.kt)("inlineCode",{parentName:"li"},"result")," property of the response.\nIf the response is an error, this matcher fails."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toRespondWithError(expectedError)")," - Checks if a response matches an expected error.\nThis matcher checks the ",(0,r.kt)("inlineCode",{parentName:"li"},"error")," property of the response.\nIf the response is not an error, this matcher fails."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toSendNotification(notificationText)")," - Checks if a Snap sent a notification."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toRender(expectedInterface)")," - Checks if a Snap rendered an interface.\nThis is useful for testing the user interface of a Snap, either for a ",(0,r.kt)("a",{parentName:"li",href:"/1056-sdk-examples/snaps/reference/rpc-api#snap_dialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog")),"\nor a user interface rendered by the ",(0,r.kt)("a",{parentName:"li",href:"/1056-sdk-examples/snaps/reference/exports#ontransaction"},"transaction insights API"),".")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"You can pass the following options when ",(0,r.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/how-to/test-a-snap#2-configure-metamasksnaps-jest"},"configuring ",(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/snaps-jest")),".\nAll options are optional."),(0,r.kt)("h3",{id:"browser"},"browser"),(0,r.kt)("p",null,"Options for the browser used to run the tests."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"headless")," browser option enables or disables running the browser in headless mode.\nSet this option to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," to see the browser window while the tests are running.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Disabling ",(0,r.kt)("inlineCode",{parentName:"p"},"browser.headless")," requires you to have a graphical environment available, so we do not\nrecommend this for CI environments.\nIt can be useful for debugging in conjunction with the ",(0,r.kt)("a",{parentName:"p",href:"#keepalive"},(0,r.kt)("inlineCode",{parentName:"a"},"keepAlive"))," option.")),(0,r.kt)("h4",{id:"example-7"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  preset: '@metamask/snaps-jest',\n  testEnvironmentOptions: {\n    browser: {\n      headless: false,\n    },\n  },\n};\n")),(0,r.kt)("h3",{id:"executionenvironmenturl"},"executionEnvironmentUrl"),(0,r.kt)("p",null,"The URL of the ",(0,r.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/concepts/execution-environment"},"execution environment")," to use for testing.\nThis is the URL to be loaded by the Snaps simulator in the tests.\nThe default is the URL of the built-in HTTP server included in this package."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This option is intended for advanced use cases.\nIn most cases, you do not need to configure this option.")),(0,r.kt)("h4",{id:"example-8"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  preset: '@metamask/snaps-jest',\n  testEnvironmentOptions: {\n    executionEnvironmentUrl: 'http://localhost:8080',\n  },\n};\n")),(0,r.kt)("h3",{id:"keepalive"},"keepAlive"),(0,r.kt)("p",null,"Enables or disables keeping the Jest environment running after the tests have finished.\nWhen set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the Jest process does not exit on its own, and must be manually terminated.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is useful for debugging, but should not be used in CI environments.")),(0,r.kt)("h4",{id:"example-9"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  preset: '@metamask/snaps-jest',\n  testEnvironmentOptions: {\n    keepAlive: true,\n  },\n};\n")),(0,r.kt)("h3",{id:"server"},"server"),(0,r.kt)("p",null,"Options for the built-in HTTP server included with this package.\nThis server serves the execution environment, simulator, and the Snap bundle during tests."),(0,r.kt)("p",null,"The server options are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," - Enables or disables the built-in HTTP server.\nSet to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," to use your own HTTP server, which you can specify using the\n",(0,r.kt)("a",{parentName:"li",href:"#executionenvironmenturl"},(0,r.kt)("inlineCode",{parentName:"a"},"executionEnvironmentUrl"))," and ",(0,r.kt)("a",{parentName:"li",href:"#simulatorurl"},(0,r.kt)("inlineCode",{parentName:"a"},"simulatorUrl"))," options.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," - The port to use for the built-in HTTP server.\nThe default is a random available (unprivileged) port."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root")," - The path to the root directory to serve the Snap files from.\nThis is useful if you want to serve the Snap files from a different directory than the one Jest is\nrunning from.\nThe default is the current working directory.")),(0,r.kt)("h4",{id:"example-10"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  preset: '@metamask/snaps-jest',\n  testEnvironmentOptions: {\n    server: {\n      enabled: false,\n      port: 8080,\n      root: '/path/to/snap/files',\n    },\n  },\n};\n")),(0,r.kt)("h3",{id:"simulatorurl"},"simulatorUrl"),(0,r.kt)("p",null,"The URL of the simulator to use for testing.\nThis is the URL to be loaded in the browser when running tests.\nThe default is the URL of the built-in HTTP server included with this package."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This option is intended for advanced use cases.\nIn most cases, you do not need to configure this option.")),(0,r.kt)("h4",{id:"example-11"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  preset: '@metamask/snaps-jest',\n  testEnvironmentOptions: {\n    simulatorUrl: 'http://localhost:8081',\n  },\n};\n")))}d.isMDXComponent=!0}}]);