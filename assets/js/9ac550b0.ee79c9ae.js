"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[620],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(v,o(o({ref:t},u),{},{components:a})):n.createElement(v,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7462),r=a(7294),l=a(2389),o=a(1548),i=a(6010);const s="tabItem_LplD";function c(e){var t,a;const{lazy:l,block:c,defaultValue:u,values:m,groupId:p,className:d}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,o.lx)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=v[0])?void 0:a.props.value);if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:f}=(0,o.UB)(),[g,N]=(0,r.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=p){const e=k[p];null!=e&&e!==g&&h.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,a=w.indexOf(t),n=h[a].value;n!==g&&(x(t),N(n),null!=p&&f(p,n))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]||w[w.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},d)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:T,onClick:T},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":g===t})}),a??t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function u(e){const t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},1618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(9877),o=a(8215);const i={title:"\u95dc\u65bc\u6211",description:"Introduce myself and my skills.",slug:"/about-me",authors:["myos"]},s=void 0,c={permalink:"/dev/blog/about-me",editUrl:"https://github.com/Myoschen/dev/tree/gh-pages/blog/2022-04-26-about-me/index.mdx",source:"@site/blog/2022-04-26-about-me/index.mdx",title:"\u95dc\u65bc\u6211",description:"Introduce myself and my skills.",date:"2022-04-26T00:00:00.000Z",formattedDate:"April 26, 2022",tags:[],readingTime:1.14,truncated:!1,authors:[{name:"Myos",title:"Front-End Learner",url:"https://github.com/Myoschen",imageURL:"https://github.com/Myoschen.png",key:"myos"}],frontMatter:{title:"\u95dc\u65bc\u6211",description:"Introduce myself and my skills.",slug:"/about-me",authors:["myos"]},nextItem:{title:"\u5f9e Hexo \u5230 Gatsby",permalink:"/dev/blog/from-hexo-to-gatsby"}},u={authorsImageUrls:[void 0]},m=[{value:"About Me",id:"about-me",level:2},{value:"My Skills",id:"my-skills",level:2},{value:"My Projects",id:"my-projects",level:2},{value:"Contact Me",id:"contact-me",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"about-me"},"About Me"),(0,r.kt)("p",null,"\u54c8\u56c9\uff0c\u6211\u7684\u540d\u5b57\u662f Myos\uff01"),(0,r.kt)("p",null,"\u76ee\u524d\u5df2\u7d93\u662f\u5927\u56db\u6e96\u7562\u696d\u751f\u4e86\uff0c\u672a\u4f86\u60f3\u5c0b\u627e\u7db2\u9801\u524d\u7aef\u6216\u8005\u662f\u5f8c\u7aef\u76f8\u95dc\u8077\u4f4d\uff0c\u7531\u65bc\u500b\u4eba\u5f8c\u7aef\u6280\u8853\u9084\u6c92\u6709\u8aaa\u5230\u7279\u5225\u597d\uff0c\u6240\u4ee5\u4e3b\u8981\u9084\u662f\u60f3\u4ee5\u524d\u7aef\u70ba\u4e3b\u3002"),(0,r.kt)("h2",{id:"my-skills"},"My Skills"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Front End",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"Basic:\n- HTML\n- CSS\n- JavaScript, TypeScript\n\nJavaScript Framework: \n- React \n- Vue (Want to learn)\n\nCSS Framework: \n- Tailwind CSS\n- BootStrap 5\n"))),(0,r.kt)(o.Z,{value:"Back End",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"Node: \n- Express\n\nJava:\n- Spring Boot (Learing...)\n\nPython: \n- Flask\n- Django (Want to learn)\n\nSQL: \n- PostgreSQL\n- MongoDB (Want to learn)\n"))),(0,r.kt)(o.Z,{value:"Others",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"- Python\n- C\n- C++\n- Java\n- Golang (Want to learn)\n")))),(0,r.kt)("h2",{id:"my-projects"},"My Projects"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\ud83d\uddd2\ufe0f tasks")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 React \u88fd\u4f5c\u4e00\u500b\u4ee3\u8fa6\u4e8b\u9805 APP\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u958b\u767c\u4e2d \ud83d\udd27")),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Github\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/willy14620/tasks"},"https://github.com/willy14620/tasks"))))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u26a1 express-rest")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 Express \u53ca Heroku \u88fd\u4f5c\u500b\u4eba\u7528\u7684 Restful API\u3002"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Github\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/willy14620/express-rest"},"https://github.com/willy14620/express-rest"))))),(0,r.kt)("h2",{id:"contact-me"},"Contact Me"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"Twitter")," \u6216\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," \u806f\u7e6b\u6211\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/willy14620"},"Twitter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:willy14620@gmail.com"},"Email"))))}d.isMDXComponent=!0}}]);