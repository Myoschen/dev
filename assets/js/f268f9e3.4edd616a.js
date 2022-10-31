"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),s=n(2389),o=n(7392),i=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:f,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,i.U)(),[w,T]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:Z}=(0,c.o5)();if(null!=f){const e=g[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=O.indexOf(t),a=y[n].value;a!==w&&(Z(t),T(a),null!=f&&N(f,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},h)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:j,onFocus:S,onClick:S},s,{className:(0,l.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},5541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),s=n(5162);const o={title:"Zod",description:"Validating your data with Zod.",tags:["React","Zod"]},i=void 0,c={unversionedId:"react/zod",id:"react/zod",title:"Zod",description:"Validating your data with Zod.",source:"@site/docs/03-react/04-zod.mdx",sourceDirName:"03-react",slug:"/react/zod",permalink:"/dev/react/zod",draft:!1,tags:[{label:"React",permalink:"/dev/tags/react"},{label:"Zod",permalink:"/dev/tags/zod"}],version:"current",sidebarPosition:4,frontMatter:{title:"Zod",description:"Validating your data with Zod.",tags:["React","Zod"]},sidebar:"tutorialSidebar",previous:{title:"Redux Toolkit",permalink:"/dev/react/redux-toolkit"},next:{title:"Getting started",permalink:"/dev/deno/getting-started"}},u={},p=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u57fa\u672c\u4ecb\u7d39",id:"\u57fa\u672c\u4ecb\u7d39",level:2},{value:"\u5b9a\u7fa9 Schema",id:"\u5b9a\u7fa9-schema",level:3},{value:"\u9a57\u8b49\u8cc7\u6599",id:"\u9a57\u8b49\u8cc7\u6599",level:3},{value:"\u524d\u7aef",id:"\u524d\u7aef",level:4},{value:"\u5f8c\u7aef",id:"\u5f8c\u7aef",level:4},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2},{value:"\u53c3\u8003\u6587\u7ae0",id:"\u53c3\u8003\u6587\u7ae0",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install zod\n"))),(0,r.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add zod\n"))),(0,r.kt)(s.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm add zod\n")))),(0,r.kt)("h2",{id:"\u57fa\u672c\u4ecb\u7d39"},"\u57fa\u672c\u4ecb\u7d39"),(0,r.kt)("p",null,"\u524d\u3001\u5f8c\u7aef\u50b3\u905e\u8cc7\u6599\u7684\u65b9\u5f0f\u901a\u5e38\u90fd\u662f\u900f\u904e API \u4f86\u5b8c\u6210\u7684\uff0c\n\u7136\u800c\u96d6\u7136\u6709 TypeScript \u5728\u5e6b\u6211\u5011\u9032\u884c\u578b\u5225\u6aa2\u67e5\uff0c\n\u4f46\u662f\u5728\u5f9e API \u7372\u53d6\u6240\u9700\u8cc7\u6599\u6642\u5247\u662f\u5728 Runtime \u7684\u904e\u7a0b\uff0c\n\u56e0\u6b64\u5c31\u9700\u8981\u984d\u5916\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"is")," \u95dc\u9375\u5b57\u64b0\u5beb\u9a57\u8b49\u51fd\u5f0f\uff0c\n\u6700\u5f8c\u5728\u5c0d\u8cc7\u6599\u9032\u884c\u9a57\u8b49\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c\u9019\u6642\u5019\u5c31\u53ef\u4ee5\u4f7f\u7528 Zod\u3001yup\u3001io-ts \u7b49\u51fd\u5f0f\u5eab\uff0c\n\u4f86\u66ff\u6211\u5011\u8655\u7406\u8cc7\u6599\u9a57\u8b49\u7684\u90e8\u5206\u3002"),(0,r.kt)("h3",{id:"\u5b9a\u7fa9-schema"},"\u5b9a\u7fa9 Schema"),(0,r.kt)("p",null,"\u5047\u8a2d\u6211\u5011\u4eca\u5929\u8981\u5efa\u7acb\u4e00\u500b\u7c21\u6613\u7684\u767b\u5165\u767b\u51fa\u529f\u80fd\uff0c\n\u6240\u9700\u8981\u7684\u8cc7\u6599\u70ba User\uff0c\u5305\u542b\u4e86 username\u3001password\u3001gender \u7b49\u7b49\u7684\u5c6c\u6027\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"z.object()")," \u4f86\u7522\u751f\u7269\u4ef6 Schema\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { z } from 'zod';\n\n// \u4f7f\u7528 z.object \u7522\u751f object schema\nexport const userSchema = z.object({\n  id: z.string(),\n  username: z.string(),\n  password: z.string().min(8).max(20), // \u9577\u5ea6\u6700\u5c11\u70ba 8\uff0c\u6700\u9577\u70ba 20\n  gender: z.string(),\n  email: z.string().optional(), // \u53ef\u9078\u7684 \n});\n\n// \u4e5f\u53ef\u4ee5\u900f\u904e z.array \u4f86\u7522\u751f array schema\nexport const usersSchema = z.array(userSchema);\n")),(0,r.kt)("p",null,"\u5728\u4ee5\u5f80\u7684 TypeScript \u53ef\u80fd\u9700\u8981\u53bb\u64b0\u5beb type\u3001interface\uff0c\n\u4f46\u5728 Zod \u6709\u63d0\u4f9b\u900f\u904e Schema \u63a8\u65b7\u578b\u5225\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type User = z.TypeOf<typeof userSchema>;\n")),(0,r.kt)("h3",{id:"\u9a57\u8b49\u8cc7\u6599"},"\u9a57\u8b49\u8cc7\u6599"),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\uff0c\u6703\u5206\u70ba\u524d\u7aef\u3001\u5f8c\u7aef\u4f86\u9032\u884c\u7c21\u6613\u7684\u5be6\u4f5c\u3001\u8aaa\u660e\u3002"),(0,r.kt)("h4",{id:"\u524d\u7aef"},"\u524d\u7aef"),(0,r.kt)("p",null,"\u4ee5\u5f80\u5728\u64b0\u5beb fetch \u51fd\u5f0f\u6642\uff0c\u901a\u5e38\u90fd\u6703\u50cf\u4e0b\u65b9\u90a3\u6a23\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function fetchUsers(): Promise<User[]> {\n  const res = await fetch('/api/v1/users');\n  const data = await res.json();\n  return data as User[];\n}\n")),(0,r.kt)("p",null,"\u4e00\u65e6\uff0c\u5f8c\u7aef\u6240\u63d0\u4f9b\u7684\u8cc7\u6599\u70ba\u7a7a\u3001\u6216\u8005\u662f\u7f3a\u5c11\u67d0\u4e9b\u5c6c\u6027\uff0c\u5c31\u6703\u767c\u751f\u9810\u671f\u5916\u7684\u932f\u8aa4\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u662f\u900f\u904e Zod \u5c0d\u8cc7\u6599\u9032\u884c\u9a57\u8b49\uff0c\u5c31\u80fd\u9810\u5148\u5c0d\u4e0a\u65b9\u7684\u932f\u8aa4\u8655\u7406\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function fetchUsers(): Promise<User[]> {\n  const res = await fetch('/api/v1/users');\n  const data = await res.json();\n\n  const parsedData = usersSchema.safeParse(data);\n  if (parsed.success) {\n    return parsed.data;\n  }\n\n  console.error(parsed.error);\n  return [];\n}\n")),(0,r.kt)("p",null,"\u53ea\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"safeParse")," \u65b9\u6cd5\u5c31\u80fd\u5920\u9a57\u8b49\u5f8c\u7aef\u6240\u50b3\u4f86\u7684\u8cc7\u6599\uff0c\u540c\u6642\u4e5f\u4e0d\u9700\u8981\u518d\u984d\u5916\u9032\u884c\u578b\u5225\u8f49\u63db\u3002"),(0,r.kt)("h4",{id:"\u5f8c\u7aef"},"\u5f8c\u7aef"),(0,r.kt)("p",null,"\u800c\u5728\u5f8c\u7aef\u7684\u90e8\u5206\uff0c\u901a\u5e38\u5728\u64b0\u5beb handler \u6703\u50cf\u4ee5\u4e0b\u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export default async function handler(req: Request, res: Response) {\n  if (req.method === 'POST') {\n    const { username, password, gender, ...rest } = req.body;\n\n    // \u9010\u4e00\u9032\u884c\u8cc7\u6599\u9a57\u8b49\u3001\u8655\u7406\n    if (username && password) {\n      if (password.length > 8) {\n        // ...\n      }\n    }\n\n    // \u5c07\u8cc7\u6599\u5132\u5b58\u81f3 database\n    const id = createUser({ username, password, gender, ...rest });\n    return res.status(200).json({ message: 'success', user_id: id });\n  }\n}\n")),(0,r.kt)("p",null,"\u4f46\u900f\u904e Zod \u4f86\u9032\u884c\u9a57\u8b49\u7684\u8a71\uff0c\u5c31\u53ef\u4ee5\u8f15\u9b06\u7684\u9054\u5230\u540c\u6a23\u6548\u679c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\n// \u4f7f\u7528 omit \u65b9\u6cd5\u4f86\u53bb\u9664 id \u5c6c\u6027\nconst userCreateSchema = userSchema.omit({ id: true });\n\nexport default async function handler(req: Request, res: Response) {\n  if (req.method === 'POST') {\n    const body = userCreateSchema.parse(req.body);\n    const id = createUser(body);\n    return res.status(200).json({ message: 'success', user_id: id });\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parse")," \u65b9\u6cd5\u6703\u5728\u9a57\u8b49\u5931\u6557\u6642\u62cb\u51fa Error\uff0c\n\u53ef\u4ee5\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch...")," \u6216\u8005\u662f Server \u7aef\u81ea\u5b9a\u7fa9\u7684\u932f\u8aa4\u8655\u7406\u51fd\u5f0f\uff0c\n\u5c0d Error \u9032\u884c\u4e0b\u4e00\u6b65\u7684\u8655\u7406 (\u56de\u50b3 Response...)\u3002"),(0,r.kt)("h2",{id:"\u7d50\u8a9e"},"\u7d50\u8a9e"),(0,r.kt)("p",null,"\u4e26\u4e0d\u662f\u4e00\u5b9a\u9700\u8981\u900f\u904e Zod \u4f86\u5c0d\u8cc7\u6599\u9032\u884c\u9a57\u8b49\uff0c\u6709\u6642\u5019\u4f7f\u7528\u9019\u985e\u7684\u9a57\u8b49\u5eab\u53cd\u800c\u6703\u66f4\u62bd\u8c61\u96e3\u4ee5\u7406\u89e3\n\uff0c\u56e0\u6b64\u5982\u679c\u524d\u7aef\u3001\u5f8c\u7aef\u9593\u5177\u6709\u826f\u597d\u7684\u6e9d\u901a\u4e0b\uff0c\n\u4e5f\u53ef\u4ee5\u4f7f\u7528 TypeScript \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"interface"),"\uff0c\u4f86\u9032\u884c\u6700\u57fa\u672c\u7684\u578b\u5225\u6aa2\u67e5\u3002\n\u5982\u679c\u767c\u751f\u9810\u671f\u5916\u7684\u932f\u8aa4\uff0c\u53ef\u4ee5\u76f4\u63a5\u5c0d\u5b9a\u7fa9\u7684\u578b\u5225\u9032\u884c\u8abf\u6574\uff0c\n\u6216\u8005\u662f\u900f\u904e Logger \u4f86\u4e86\u89e3\u932f\u8aa4\u662f\u5728\u54ea\u908a\u767c\u751f\u7684\u3002"),(0,r.kt)("h2",{id:"\u53c3\u8003\u6587\u7ae0"},"\u53c3\u8003\u6587\u7ae0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/colinhacks/zod"},"Zod: TypeScript-first schema validation with static type inference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/jussinevavuori/end-to-end-typesafe-apis-with-typescript-and-shared-zod-schemas-4jmo"},"End-to-end Typesafe APIs with TypeScript and shared Zod schemas"))))}m.isMDXComponent=!0}}]);