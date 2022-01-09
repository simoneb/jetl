"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(a,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2567:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=["components"],p={sidebar_position:1},a="Pipelines",s={unversionedId:"concepts/pipelines",id:"concepts/pipelines",title:"Pipelines",description:"A pipeline is the glue which ties all together. Each stage of a pipeline is a function which accepts iterables and returns iterables, to be consumed by the next stage.",source:"@site/docs/concepts/pipelines.md",sourceDirName:"concepts",slug:"/concepts/pipelines",permalink:"/jetl/docs/concepts/pipelines",editUrl:"https://github.com/simoneb/jetl/tree/master/docs/docs/concepts/pipelines.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/jetl/docs/getting-started"},next:{title:"Operations",permalink:"/jetl/docs/concepts/operations"}},l=[],u={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pipelines"},"Pipelines"),(0,o.kt)("p",null,"A pipeline is the glue which ties all together. Each stage of a pipeline is a function which accepts iterables and returns iterables, to be consumed by the next stage."),(0,o.kt)("p",null,"A pipeline has methods to add operations to it, fork it and execute it."),(0,o.kt)("p",null,"For more information about pipelines, check out the ",(0,o.kt)("a",{parentName:"p",href:"../api/modules/pipeline"},"pipelines API"),"."))}f.isMDXComponent=!0}}]);