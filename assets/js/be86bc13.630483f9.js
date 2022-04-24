"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[686],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||k[m]||p;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<p;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4888:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return k}});var a=n(7462),r=n(3366),p=(n(7294),n(3905)),l=["components"],i={title:"Webpack \u521d\u6b21\u4e0a\u624b",description:"\u8a18\u9304\u4f7f\u7528 Webpack \u5de5\u5177\u7684\u904e\u7a0b\u3002"},o=void 0,c={unversionedId:"webpack/webpack-getting-started",id:"webpack/webpack-getting-started",title:"Webpack \u521d\u6b21\u4e0a\u624b",description:"\u8a18\u9304\u4f7f\u7528 Webpack \u5de5\u5177\u7684\u904e\u7a0b\u3002",source:"@site/docs/webpack/webpack-getting-started.md",sourceDirName:"webpack",slug:"/webpack/webpack-getting-started",permalink:"/dev/docs/webpack/webpack-getting-started",editUrl:"https://github.com/willy14620/dev/docs/webpack/webpack-getting-started.md",tags:[],version:"current",frontMatter:{title:"Webpack \u521d\u6b21\u4e0a\u624b",description:"\u8a18\u9304\u4f7f\u7528 Webpack \u5de5\u5177\u7684\u904e\u7a0b\u3002"},sidebar:"tutorialSidebar",previous:{title:"About Me",permalink:"/dev/docs/about"}},u={},k=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",level:2},{value:"mode",id:"mode",level:3},{value:"entry",id:"entry",level:3},{value:"output",id:"output",level:3},{value:"\u6253\u5305\u53ca\u4f7f\u7528",id:"\u6253\u5305\u53ca\u4f7f\u7528",level:2},{value:"\u53c3\u8003\u6587\u7ae0",id:"\u53c3\u8003\u6587\u7ae0",level:2}],s={toc:k};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"# npm\nnpm i webpack webpack-cli -D\nnpm i webpack webpack-cli -g\n\n# yarn\nyarn add webpack webpack-cli -D\nyarn add webpack webpack-cli global\n")),(0,p.kt)("h2",{id:"\u57fa\u672c\u914d\u7f6e"},"\u57fa\u672c\u914d\u7f6e"),(0,p.kt)("p",null,"\u6211\u5011\u5728\u4f7f\u7528 Webpack \u5de5\u5177\u7684\u6642\u5019\uff0c\u901a\u5e38\u6703\u5148\u5efa\u7acb ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," \u7684\u8a2d\u5b9a\u6a94\u3002\n\u5982\u679c\u6c92\u6709\u8a2d\u5b9a\u7684\u8a71\uff0c\u5b83\u6703\u4f7f\u7528 ",(0,p.kt)("strong",{parentName:"p"},"Webpack \u7684\u9810\u8a2d\u53c3\u6578")," \u4f86\u9032\u884c\u6253\u5305\u5de5\u4f5c\uff0c\u8a73\u60c5\u53ef\u4ee5\u81f3 Webpack \u7684\u5b98\u7db2\u67e5\u770b\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u800c\u5167\u5bb9\u5982\u4e0b\u6240\u793a\uff1a")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n  mode: 'development',\n  entry: path.resolve(__dirname, './src/main.js');\n  output: {\n    path: path.resolve(__dirname, './dist');\n    filename: '[name].[contenthash].bundle.js',\n  }\n}\n")),(0,p.kt)("p",null,"\u5728\u4f7f\u7528 Webpack \u6253\u5305\u6642\uff0c\u6211\u5011\u901a\u5e38\u6703\u4f7f\u7528 Node \u5167\u5efa\u7684 ",(0,p.kt)("strong",{parentName:"p"},"path")," \u6a21\u7d44\u4f86\u53d6\u5f97\u7d55\u5c0d\u8def\u5f91\uff0c\n\u907f\u514d\u5728",(0,p.kt)("strong",{parentName:"p"},"\u5176\u4ed6\u4f5c\u696d\u7cfb\u7d71\u74b0\u5883\u767c\u751f\u7121\u6cd5\u9810\u671f\u7684\u8def\u5f91\u932f\u8aa4"),"\u3002"),(0,p.kt)("h3",{id:"mode"},"mode"),(0,p.kt)("p",null,"\u901a\u5e38\u6211\u5011\u6703\u5206\u6210 ",(0,p.kt)("strong",{parentName:"p"},"\u958b\u767c Development")," \u53ca ",(0,p.kt)("strong",{parentName:"p"},"\u90e8\u7f72 Production")," \u5169\u7a2e\u74b0\u5883\uff0c\n\u540c\u6642\u4e5f\u6703\u5c07 ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," \u914d\u7f6e\u6a94\u5207\u5206\u6210\u5169\u7a2e\u4e0d\u540c\u74b0\u5883\uff0c\u70ba\u4e86\u80fd\u4f9d\u7167\u4e0d\u540c\u7684\u60c5\u6cc1\u53bb\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u6a94\u3002"),(0,p.kt)("h3",{id:"entry"},"entry"),(0,p.kt)("p",null,"Webpack \u89e3\u6790\u7a0b\u5f0f\u7684 ",(0,p.kt)("strong",{parentName:"p"},"\u9032\u5165\u9ede"),"\uff0c\u9810\u8a2d\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"./src/index.js"),"\uff0c\u4e5f\u53ef\u4ee5\u540c\u6642\u6709 ",(0,p.kt)("strong",{parentName:"p"},"\u591a\u500b\u9032\u5165\u9ede"),"\u3002"),(0,p.kt)("h3",{id:"output"},"output"),(0,p.kt)("p",null,"\u7d93 Webpack \u89e3\u6790\u5f8c\u8f38\u51fa bundle \u7684\u76ee\u9304 ",(0,p.kt)("strong",{parentName:"p"},"path"),"\u3001\u6a94\u6848\u540d\u7a31 ",(0,p.kt)("strong",{parentName:"p"},"filename"),"\u3002\n\u5176\u4e2d\uff0c\u53ef\u4ee5\u767c\u73fe\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"filename")," \u7684\u5730\u65b9\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"[name]"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"[contenthash]")," \u5169\u500b\u5c6c\u6027\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"[name]"),"\uff1a\u6703\u4f9d\u64da ",(0,p.kt)("inlineCode",{parentName:"li"},"entry")," \u540d\u7a31\u4f86\u6c7a\u5b9a\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"[contenthash]"),"\uff1a\u4f9d\u7167 bundle \u7684\u5167\u5bb9\u53bb\u4f86\u7522\u751f hash \u503c\uff0c\u7576 bundle \u6539\u8b8a\u6642\u7522\u751f\u7684 hash \u503c\u624d\u6703\u6539\u8b8a\u3002")),(0,p.kt)("p",null,"\u4f7f\u7528 hash \u7684\u539f\u56e0\u4e3b\u8981\u662f\u70ba\u4e86\u907f\u514d\u700f\u89bd\u5668\u7de9\u5b58\u7684\u554f\u984c\uff0c\u56e0\u70ba\u901a\u5e38\u5728\u958b\u767c\u7684\u6642\u5019\u6211\u5011\u6703\u5927\u91cf\u7684\u9032\u884c\u91cd\u65b0\u6574\u7406\uff0c\n\u800c\u5f88\u6709\u53ef\u80fd\u6703\u9020\u6210\u7de9\u5b58\u7684\u554f\u984c\u3001\u7121\u6cd5\u6b63\u78ba\u770b\u5230\u4fee\u6539\u5f8c\u7684\u7d50\u679c\u3002"),(0,p.kt)("p",null,"\u800c\u9664\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"[contenthash]")," \u4ee5\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0b\u65b9\u5176\u4ed6 hash \u7684\u65b9\u5f0f\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"[fullhash]"),"\uff1a\u57fa\u672c\u7684 hash \u503c\uff0c\u53ea\u8981\u6a94\u6848\u6709\u8b8a\u5316\u5c31\u6703\u6539\u8b8a\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"[chunkhash]"),"\uff1a\u4f9d\u7167 chunk \u7684\u5167\u5bb9\u53bb\u4f86\u7522\u751f hash \u503c\uff0c\u7576 chunk \u6539\u8b8a\u6642\u7522\u751f\u7684 hash \u503c\u624d\u6703\u6539\u8b8a\u3002")),(0,p.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"Chunk \u8207 Bundle \u540c\u6a23\u90fd\u662f\u5728\u6307\u88ab Webpack \u6240\u89e3\u6790\u7684\u7a0b\u5f0f\uff0c\u53ea\u662f\u56e0\u4e0d\u540c\u7684\u6642\u9593\u9ede\u6709\u4e0d\u540c\u7684\u7a31\u547c\u3002"),(0,p.kt)("ul",{parentName:"div"},(0,p.kt)("li",{parentName:"ul"},"Chunk\uff1a\u662f\u5728\u7a0b\u5f0f\u88ab Webpack \u89e3\u6790\u4e2d\u7684\u540d\u7a31\u3002"),(0,p.kt)("li",{parentName:"ul"},"Bundle\uff1a\u662f\u7a0b\u5f0f\u88ab Webpack \u89e3\u6790\u5f8c\u8f38\u51fa\u6a94\u6848\u7684\u540d\u7a31\u3002")))),(0,p.kt)("h2",{id:"\u6253\u5305\u53ca\u4f7f\u7528"},"\u6253\u5305\u53ca\u4f7f\u7528"),(0,p.kt)("p",null,"\u5728 package.json \u6a94\u6848\u4e2d\u52a0\u5165\u4e0b\u9762\u6307\u4ee4\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'scripts: {\n  "build": "webpack",\n  "start": "webpack serve"\n}\n')),(0,p.kt)("p",null,"\u63a5\u8457\u900f\u904e\u7d42\u7aef\u6a5f\u57f7\u884c\u6307\u4ee4\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6253\u5305\nnpm run build\n\n# \u672c\u5730\u6e2c\u8a66\nnpm run start\n")),(0,p.kt)("p",null,"\u4e26\u5728\u7d42\u7aef\u6a5f\u8f38\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},"npm run build")," \u5c31\u6703\u958b\u59cb\u9032\u884c\u6253\u5305\uff0c\u5b8c\u6210\u5f8c\u53ef\u4ee5\u5728\u76ee\u9304 ",(0,p.kt)("inlineCode",{parentName:"p"},"dist")," \u770b\u5230\u6253\u5305\u5b8c\u7684\u6a94\u6848\u3002"),(0,p.kt)("h2",{id:"\u53c3\u8003\u6587\u7ae0"},"\u53c3\u8003\u6587\u7ae0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://webpack.js.org/"},"Webpack")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://israynotarray.com/webpack/20210228/4075850339/"},"Webpack 5 \u8d70\u8d77\uff01 - \u57fa\u672c\u914d\u7f6e(2) - config")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/users/20107789/ironman/3332"},"\u5c0b\u8993 webpack - \u85c9\u7531 webpack \u5b78\u7fd2\u7db2\u9801\u524d\u7aef\u5de5\u7a0b\u7684\u7cbe\u5999\u4e4b\u8655"))))}m.isMDXComponent=!0}}]);