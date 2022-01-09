/*! For license information please see 1be78505.53951a5b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514],{4158:function(e,r,n){n.d(r,{Z:function(){return u}});var t=n(7462),a=n(7294),c=n(979);function u(e){return a.createElement(c.Z,(0,t.Z)({},e,{transformCode:function(e){return"() => {\n        const [result, setResult] = useState('Loading...')\n\n        useEffect(() => {\n          async function run() {\n            "+e+"\n          }\n\n          run().then(setResult, setResult)\n        }, [])\n\n        return result\n      }"}}))}},5456:function(e,r,n){n.d(r,{Z:function(){return q}});var t={};n.r(t),n.d(t,{apply:function(){return C},cache:function(){return l},consume:function(){return k},count:function(){return w},empty:function(){return h},filter:function(){return E},first:function(){return b},flatMap:function(){return Y},generate:function(){return y},generateOnce:function(){return g},group:function(){return P},join:function(){return S},joinStrings:function(){return I},map:function(){return j},pipeline:function(){return M},reduce:function(){return m},skip:function(){return T},split:function(){return R},take:function(){return O},toArray:function(){return d},unique:function(){return Z}});var a=n(7294),c=n(7855),u=n(7757),s=n.n(u);function i(e,r,n,t){return new(n||(n=Promise))((function(a,c){function u(e){try{i(t.next(e))}catch(r){c(r)}}function s(e){try{i(t.throw(e))}catch(r){c(r)}}function i(e){var r;e.done?a(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(u,s)}i((t=t.apply(e,r||[])).next())}))}function o(e){var r="function"==typeof Symbol&&Symbol.iterator,n=r&&e[r],t=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(e){return this instanceof f?(this.v=e,this):new f(e)}function x(e,r,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,a=n.apply(e,r||[]),c=[];return t={},u("next"),u("throw"),u("return"),t[Symbol.asyncIterator]=function(){return this},t;function u(e){a[e]&&(t[e]=function(r){return new Promise((function(n,t){c.push([e,r,n,t])>1||s(e,r)}))})}function s(e,r){try{(n=a[e](r)).value instanceof f?Promise.resolve(n.value.v).then(i,o):x(c[0][2],n)}catch(t){x(c[0][3],t)}var n}function i(e){s("next",e)}function o(e){s("throw",e)}function x(e,r){e(r),c.shift(),c.length&&s(c[0][0],c[0][1])}}function p(e){var r,n;return r={},t("next"),t("throw",(function(e){throw e})),t("return"),r[Symbol.iterator]=function(){return this},r;function t(t,a){r[t]=e[t]?function(r){return(n=!n)?{value:f(e[t](r)),done:"return"===t}:a?a(r):r}:a}}function v(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,n=e[Symbol.asyncIterator];return n?n.call(e):(e=o(e),r={},t("next"),t("throw"),t("return"),r[Symbol.asyncIterator]=function(){return this},r);function t(n){r[n]=e[n]&&function(r){return new Promise((function(t,a){(function(e,r,n,t){Promise.resolve(t).then((function(r){e({value:r,done:n})}),r)})(t,a,(r=e[n](r)).done,r.value)}))}}}function h(){return x(this,arguments,s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}function l(e){var r=[],n=!0;return function(){return x(this,arguments,s().mark((function t(){var a,c,u,i,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=33;break}t.prev=1,u=v(e);case 3:return t.next=5,f(u.next());case 5:if((i=t.sent).done){t.next=15;break}return o=i.value,r.push(o),t.next=11,f(o);case 11:return t.next=13,t.sent;case 13:t.next=3;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),a={error:t.t0};case 20:if(t.prev=20,t.prev=21,!i||i.done||!(c=u.return)){t.next=25;break}return t.next=25,f(c.call(u));case 25:if(t.prev=25,!a){t.next=28;break}throw a.error;case 28:return t.finish(25);case 29:return t.finish(20);case 30:n=!1,t.next=38;break;case 33:return t.t1=f,t.delegateYield(p(v(r)),"t2",35);case 35:return t.t3=t.t2,t.next=38,(0,t.t1)(t.t3);case 38:case"end":return t.stop()}}),t,null,[[1,17,20,30],[21,,25,29]])})))}}function k(e){return i(this,void 0,void 0,s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=e[Symbol.asyncIterator]();case 1:return r.next=3,n.next();case 3:if(r.sent.done){r.next=7;break}r.next=1;break;case 7:case"end":return r.stop()}}),r)})))}function d(e){var r,n,t,a;return i(this,void 0,void 0,s().mark((function c(){var u,i;return s().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:u=[],c.prev=1,r=v(e);case 3:return c.next=5,r.next();case 5:if((n=c.sent).done){c.next=11;break}i=n.value,u.push(i);case 9:c.next=3;break;case 11:c.next=16;break;case 13:c.prev=13,c.t0=c.catch(1),t={error:c.t0};case 16:if(c.prev=16,c.prev=17,!n||n.done||!(a=r.return)){c.next=21;break}return c.next=21,a.call(r);case 21:if(c.prev=21,!t){c.next=24;break}throw t.error;case 24:return c.finish(21);case 25:return c.finish(16);case 26:return c.abrupt("return",u);case 27:case"end":return c.stop()}}),c,null,[[1,13,16,26],[17,,21,25]])})))}function b(e){return i(this,void 0,void 0,s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e[Symbol.asyncIterator](),r.next=3,n.next();case 3:return r.abrupt("return",r.sent.value);case 4:case"end":return r.stop()}}),r)})))}function w(e){return i(this,void 0,void 0,s().mark((function r(){var n,t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=e[Symbol.asyncIterator](),t=0;case 2:return r.next=4,n.next();case 4:if(r.sent.done){r.next=9;break}case 6:t++,r.next=2;break;case 9:return r.abrupt("return",t);case 10:case"end":return r.stop()}}),r)})))}function m(e,r){return function(n){var t,a,c,u;return i(this,void 0,void 0,s().mark((function i(){var o,f;return s().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:o=r,s.prev=1,t=v(n);case 3:return s.next=5,t.next();case 5:if((a=s.sent).done){s.next=11;break}f=a.value,o=e(o,f);case 9:s.next=3;break;case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(1),c={error:s.t0};case 16:if(s.prev=16,s.prev=17,!a||a.done||!(u=t.return)){s.next=21;break}return s.next=21,u.call(t);case 21:if(s.prev=21,!c){s.next=24;break}throw c.error;case 24:return s.finish(21);case 25:return s.finish(16);case 26:return s.abrupt("return",o);case 27:case"end":return s.stop()}}),i,null,[[1,13,16,26],[17,,21,25]])})))}}function y(e){return x(this,arguments,s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=f,r.delegateYield(p(v(e)),"t1",2);case 2:return r.t2=r.t1,r.next=5,(0,r.t0)(r.t2);case 5:case"end":return r.stop()}}),r)})))}function g(e){var r=!1;return function(){return x(this,arguments,s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=2;break}throw new Error("already iterated");case 2:return r=!0,n.t0=f,n.delegateYield(p(v(e)),"t1",5);case 5:return n.t2=n.t1,n.next=8,(0,n.t0)(n.t2);case 8:case"end":return n.stop()}}),n)})))}}function S(e,r,n){return function(t){return x(this,arguments,s().mark((function a(){var c,u,i,o,x,p,k,d,b,w,m;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:x=l(e(h())),a.prev=1,p=v(t);case 3:return a.next=5,f(p.next());case 5:if((k=a.sent).done){a.next=39;break}d=k.value,a.prev=8,i=void 0,b=v(x());case 10:return a.next=12,f(b.next());case 12:if((w=a.sent).done){a.next=22;break}if(m=w.value,r&&!r(d,m)){a.next=20;break}return a.next=18,f(n?n(d,m):[d,m]);case 18:return a.next=20,a.sent;case 20:a.next=10;break;case 22:a.next=27;break;case 24:a.prev=24,a.t0=a.catch(8),i={error:a.t0};case 27:if(a.prev=27,a.prev=28,!w||w.done||!(o=b.return)){a.next=32;break}return a.next=32,f(o.call(b));case 32:if(a.prev=32,!i){a.next=35;break}throw i.error;case 35:return a.finish(32);case 36:return a.finish(27);case 37:a.next=3;break;case 39:a.next=44;break;case 41:a.prev=41,a.t1=a.catch(1),c={error:a.t1};case 44:if(a.prev=44,a.prev=45,!k||k.done||!(u=p.return)){a.next=49;break}return a.next=49,f(u.call(p));case 49:if(a.prev=49,!c){a.next=52;break}throw c.error;case 52:return a.finish(49);case 53:return a.finish(44);case 54:case"end":return a.stop()}}),a,null,[[1,41,44,54],[8,24,27,37],[28,,32,36],[45,,49,53]])})))}}function I(e){return void 0===e&&(e=""),function(r){return x(this,arguments,s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=f,n.next=3,f(d(r));case 3:return n.t1=n.sent.join(e),n.next=6,(0,n.t0)(n.t1);case 6:return n.next=8,n.sent;case 8:case"end":return n.stop()}}),n)})))}}function j(e){return function(r){return x(this,arguments,s().mark((function n(){var t,a,c,u,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,c=v(r);case 2:return n.next=4,f(c.next());case 4:if((u=n.sent).done){n.next=13;break}return i=u.value,n.next=9,f(e(i));case 9:return n.next=11,n.sent;case 11:n.next=2;break;case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),t={error:n.t0};case 18:if(n.prev=18,n.prev=19,!u||u.done||!(a=c.return)){n.next=23;break}return n.next=23,f(a.call(c));case 23:if(n.prev=23,!t){n.next=26;break}throw t.error;case 26:return n.finish(23);case 27:return n.finish(18);case 28:case"end":return n.stop()}}),n,null,[[0,15,18,28],[19,,23,27]])})))}}function E(e){return function(r){return x(this,arguments,s().mark((function n(){var t,a,c,u,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,c=v(r);case 2:return n.next=4,f(c.next());case 4:if((u=n.sent).done){n.next=14;break}if(i=u.value,!e(i)){n.next=12;break}return n.next=10,f(i);case 10:return n.next=12,n.sent;case 12:n.next=2;break;case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),t={error:n.t0};case 19:if(n.prev=19,n.prev=20,!u||u.done||!(a=c.return)){n.next=24;break}return n.next=24,f(a.call(c));case 24:if(n.prev=24,!t){n.next=27;break}throw t.error;case 27:return n.finish(24);case 28:return n.finish(19);case 29:case"end":return n.stop()}}),n,null,[[0,16,19,29],[20,,24,28]])})))}}function Y(e){return function(r){return x(this,arguments,s().mark((function n(){var t,a,c,u,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,c=v(r);case 2:return n.next=4,f(c.next());case 4:if((u=n.sent).done){n.next=14;break}return i=u.value,n.t0=f,n.delegateYield(p(v(e(i))),"t1",9);case 9:return n.t2=n.t1,n.next=12,(0,n.t0)(n.t2);case 12:n.next=2;break;case 14:n.next=19;break;case 16:n.prev=16,n.t3=n.catch(0),t={error:n.t3};case 19:if(n.prev=19,n.prev=20,!u||u.done||!(a=c.return)){n.next=24;break}return n.next=24,f(a.call(c));case 24:if(n.prev=24,!t){n.next=27;break}throw t.error;case 27:return n.finish(24);case 28:return n.finish(19);case 29:case"end":return n.stop()}}),n,null,[[0,16,19,29],[20,,24,28]])})))}}function Z(e){return x(this,arguments,s().mark((function r(){var n,t,a,c,u,i;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=new Set,r.prev=1,c=v(e);case 3:return r.next=5,f(c.next());case 5:if((u=r.sent).done){r.next=16;break}if(i=u.value,a.has(i)){r.next=14;break}return a.add(i),r.next=12,f(i);case 12:return r.next=14,r.sent;case 14:r.next=3;break;case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(1),n={error:r.t0};case 21:if(r.prev=21,r.prev=22,!u||u.done||!(t=c.return)){r.next=26;break}return r.next=26,f(t.call(c));case 26:if(r.prev=26,!n){r.next=29;break}throw n.error;case 29:return r.finish(26);case 30:return r.finish(21);case 31:case"end":return r.stop()}}),r,null,[[1,18,21,31],[22,,26,30]])})))}function P(e,r){return void 0===e&&(e=function(e){return e}),void 0===r&&(r=function(e){return e}),function(n){return x(this,arguments,s().mark((function t(){var a,u,i,o,x,p,h,l,k,d,b,w,m;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=new Map,t.prev=1,o=v(n);case 3:return t.next=5,f(o.next());case 5:if((x=t.sent).done){t.next=13;break}p=x.value,h=e(p),(l=i.get(h))?l.push(p):i.set(h,[p]);case 11:t.next=3;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),a={error:t.t0};case 18:if(t.prev=18,t.prev=19,!x||x.done||!(u=o.return)){t.next=23;break}return t.next=23,f(u.call(o));case 23:if(t.prev=23,!a){t.next=26;break}throw a.error;case 26:return t.finish(23);case 27:return t.finish(18);case 28:k=(0,c.Z)(i);case 29:if((d=k()).done){t.next=37;break}return b=d.value,w=b[0],m=b[1],t.next=33,f([w,r(m)]);case 33:return t.next=35,t.sent;case 35:t.next=29;break;case 37:case"end":return t.stop()}}),t,null,[[1,15,18,28],[19,,23,27]])})))}}function R(e){void 0===e&&(e=/\r?\n/);var r=[];return function(n){return x(this,arguments,s().mark((function t(){var a,c,u,i,o,x,h,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,u=v(n);case 2:return t.next=4,f(u.next());case 4:if((i=t.sent).done){t.next=22;break}if(o=i.value,x=("string"==typeof o?o:o.toString()).split(e),h=x[0],l=x.slice(1),r.push(h),!l.length){t.next=20;break}return t.next=12,f(r.join(""));case 12:return t.next=14,t.sent;case 14:return t.t0=f,t.delegateYield(p(v(l.slice(0,l.length-1))),"t1",16);case 16:return t.t2=t.t1,t.next=19,(0,t.t0)(t.t2);case 19:r=[l[l.length-1]];case 20:t.next=2;break;case 22:t.next=27;break;case 24:t.prev=24,t.t3=t.catch(0),a={error:t.t3};case 27:if(t.prev=27,t.prev=28,!i||i.done||!(c=u.return)){t.next=32;break}return t.next=32,f(c.call(u));case 32:if(t.prev=32,!a){t.next=35;break}throw a.error;case 35:return t.finish(32);case 36:return t.finish(27);case 37:if(!r.length){t.next=42;break}return t.next=40,f(r.join(""));case 40:return t.next=42,t.sent;case 42:case"end":return t.stop()}}),t,null,[[0,24,27,37],[28,,32,36]])})))}}function C(e){return function(r){return x(this,arguments,s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=f,n.next=3,f(e(r));case 3:return n.t1=n.sent,n.next=6,(0,n.t0)(n.t1);case 6:return n.next=8,n.sent;case 8:case"end":return n.stop()}}),n)})))}}function O(e){return function(r){return x(this,arguments,s().mark((function n(){var t,a,c,u,i,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=0,n.prev=1,u=v(r);case 3:return n.next=5,f(u.next());case 5:if((i=n.sent).done){n.next=16;break}if(o=i.value,!(c++>=e)){n.next=10;break}return n.abrupt("break",16);case 10:return n.next=12,f(o);case 12:return n.next=14,n.sent;case 14:n.next=3;break;case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(1),t={error:n.t0};case 21:if(n.prev=21,n.prev=22,!i||i.done||!(a=u.return)){n.next=26;break}return n.next=26,f(a.call(u));case 26:if(n.prev=26,!t){n.next=29;break}throw t.error;case 29:return n.finish(26);case 30:return n.finish(21);case 31:case"end":return n.stop()}}),n,null,[[1,18,21,31],[22,,26,30]])})))}}function T(e){return function(r){return x(this,arguments,s().mark((function n(){var t,a,c,u,i,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=0,n.prev=1,u=v(r);case 3:return n.next=5,f(u.next());case 5:if((i=n.sent).done){n.next=16;break}if(o=i.value,!(c++<e)){n.next=10;break}return n.abrupt("continue",14);case 10:return n.next=12,f(o);case 12:return n.next=14,n.sent;case 14:n.next=3;break;case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(1),t={error:n.t0};case 21:if(n.prev=21,n.prev=22,!i||i.done||!(a=u.return)){n.next=26;break}return n.next=26,f(a.call(u));case 26:if(n.prev=26,!t){n.next=29;break}throw t.error;case 29:return n.finish(26);case 30:return n.finish(21);case 31:case"end":return n.stop()}}),n,null,[[1,18,21,31],[22,,26,30]])})))}}function A(e){return"function"==typeof e?e:function(){return y(e)}}var M=function(){function e(){this.operations=[]}var r=e.prototype;return r.add=function(e){return this.operations.push(A(e)),this},r.join=function(e,r,n){return this.operations.push(S(A(e),r,n)),this},r.group=function(e,r){return this.operations.push(P(e,r)),this},r.fork=function(r){return void 0===r&&(r=2),i(this,void 0,void 0,s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=l(this.run()),n.next=3,k(t());case 3:return n.abrupt("return",Array.from({length:r},(function(){return(new e).add(t)})));case 4:case"end":return n.stop()}}),n,this)})))},r.run=function(){return x(this,arguments,s().mark((function e(){var r,n,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=h(),n=(0,c.Z)(this.operations);!(t=n()).done;)a=t.value,r=a(r);return e.t0=f,e.delegateYield(p(v(r)),"t1",4);case 4:return e.t2=e.t1,e.next=7,(0,e.t0)(e.t2);case 7:case"end":return e.stop()}}),e,this)})))},e}(),q=Object.assign({React:a},a,t)}}]);