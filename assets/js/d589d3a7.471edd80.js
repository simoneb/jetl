"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},p="Getting Started",s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"jetl is a data processing library for JavaScript built on top of asynchronous iterators.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/jetl/docs/getting-started",editUrl:"https://github.com/simoneb/jetl/tree/master/docs/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Pipelines",permalink:"/jetl/docs/concepts/pipelines"}},c=[{value:"Quick Start",id:"quick-start",children:[{value:"How it works",id:"how-it-works",children:[],level:3},{value:"Concepts",id:"concepts",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jetl")," is a data processing library for JavaScript built on top of asynchronous iterators."),(0,i.kt)("p",null,"It is written in TypeScript and compiles to pure JavaScript, meaning that it can be used in both server and browser environments."),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"This example processes an array of integer numbers by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"filtering out the odd numbers"),(0,i.kt)("li",{parentName:"ul"},"increasing each remaining number by 1"),(0,i.kt)("li",{parentName:"ul"},"computing their sum")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The example is editable so you can play around with it")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"const result = new pipeline()\n  .add([1, 2, 3, 4, 5, 6])\n  .add(filter(n => n % 2 === 0))\n  .add(map(n => n + 1))\n  .add(apply(reduce((acc, c) => acc + c, 0)))\n  .run()\n\n// 2, 4, 6 => 3, 5, 7\n// 3 + 5 + 7 => 15\nreturn `Sum: ${await first(result)}`\n")),(0,i.kt)("h3",{id:"how-it-works"},"How it works"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"[1, 2, 3, 4, 5, 6]")," provides the initial data source to the ",(0,i.kt)("a",{parentName:"li",href:"./concepts/pipelines"},"pipeline")," as an array of numbers"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"filter(n => n % 2 === 0)")," adds an ",(0,i.kt)("a",{parentName:"li",href:"./concepts/operations"},"operation")," which filters only the even numbers"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"map(n => n + 1)")," transforms each element by incrementing it by 1"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"apply(reduce((acc, c) => acc + c, 0))")," applies an ",(0,i.kt)("a",{parentName:"li",href:"./concepts/operators"},"operator")," which, given the transformed array of numbers, turns it into the sum of those numbers"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".run()")," executes the pipeline and returns an asynchronously iterable of results"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"await first(result)")," asynchronously returns the first element of the result")),(0,i.kt)("h3",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,"In the example above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"new pipeline()")," creates a new ",(0,i.kt)("a",{parentName:"li",href:"./concepts/pipelines"},"pipeline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"map"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"apply")," are ",(0,i.kt)("a",{parentName:"li",href:"./concepts/operations"},"operations"),". Operations are functions which accept ",(0,i.kt)("em",{parentName:"li"},"iterables")," as inputs and return ",(0,i.kt)("em",{parentName:"li"},"iterables")," as output"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reduce")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"first")," are ",(0,i.kt)("a",{parentName:"li",href:"./concepts/operators"},"operator"),". Operators are functions which accept ",(0,i.kt)("em",{parentName:"li"},"iterables")," as input and can return anything (including scalar values)")))}m.isMDXComponent=!0}}]);