/*! For license information please see 1be78505.c400541a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514],{4158:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(7462),a=r(7294),u=r(979);function c(e){return a.createElement(u.Z,(0,t.Z)({},e,{transformCode:function(e){return"() => {\n        const [result, setResult] = useState('Loading...')\n\n        useEffect(() => {\n          async function run() {\n            "+e+"\n          }\n\n          run().then(setResult, setResult)\n        }, [])\n\n        return result\n      }"}}))}},5456:function(e,n,r){r.d(n,{Z:function(){return A}});var t={};r.r(t),r.d(t,{apply:function(){return C},cache:function(){return l},consume:function(){return d},count:function(){return w},empty:function(){return h},filter:function(){return E},first:function(){return k},flatMap:function(){return Y},generate:function(){return y},generateOnce:function(){return g},group:function(){return P},join:function(){return S},joinStrings:function(){return I},map:function(){return j},pipeline:function(){return T},reduce:function(){return m},split:function(){return R},toArray:function(){return b},unique:function(){return Z}});var a=r(7294),u=r(7855),c=r(7757),s=r.n(c);function i(e,n,r,t){return new(r||(r=Promise))((function(a,u){function c(e){try{i(t.next(e))}catch(n){u(n)}}function s(e){try{i(t.throw(e))}catch(n){u(n)}}function i(e){var n;e.done?a(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,s)}i((t=t.apply(e,n||[])).next())}))}function o(e){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&e[n],t=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(e){return this instanceof f?(this.v=e,this):new f(e)}function x(e,n,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,a=r.apply(e,n||[]),u=[];return t={},c("next"),c("throw"),c("return"),t[Symbol.asyncIterator]=function(){return this},t;function c(e){a[e]&&(t[e]=function(n){return new Promise((function(r,t){u.push([e,n,r,t])>1||s(e,n)}))})}function s(e,n){try{(r=a[e](n)).value instanceof f?Promise.resolve(r.value.v).then(i,o):x(u[0][2],r)}catch(t){x(u[0][3],t)}var r}function i(e){s("next",e)}function o(e){s("throw",e)}function x(e,n){e(n),u.shift(),u.length&&s(u[0][0],u[0][1])}}function p(e){var n,r;return n={},t("next"),t("throw",(function(e){throw e})),t("return"),n[Symbol.iterator]=function(){return this},n;function t(t,a){n[t]=e[t]?function(n){return(r=!r)?{value:f(e[t](n)),done:"return"===t}:a?a(n):n}:a}}function v(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,r=e[Symbol.asyncIterator];return r?r.call(e):(e=o(e),n={},t("next"),t("throw"),t("return"),n[Symbol.asyncIterator]=function(){return this},n);function t(r){n[r]=e[r]&&function(n){return new Promise((function(t,a){(function(e,n,r,t){Promise.resolve(t).then((function(n){e({value:n,done:r})}),n)})(t,a,(n=e[r](n)).done,n.value)}))}}}function h(){return x(this,arguments,s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}function l(e){var n=[],r=!0;return function(){return x(this,arguments,s().mark((function t(){var a,u,c,i,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=33;break}t.prev=1,c=v(e);case 3:return t.next=5,f(c.next());case 5:if((i=t.sent).done){t.next=15;break}return o=i.value,n.push(o),t.next=11,f(o);case 11:return t.next=13,t.sent;case 13:t.next=3;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),a={error:t.t0};case 20:if(t.prev=20,t.prev=21,!i||i.done||!(u=c.return)){t.next=25;break}return t.next=25,f(u.call(c));case 25:if(t.prev=25,!a){t.next=28;break}throw a.error;case 28:return t.finish(25);case 29:return t.finish(20);case 30:r=!1,t.next=38;break;case 33:return t.t1=f,t.delegateYield(p(v(n)),"t2",35);case 35:return t.t3=t.t2,t.next=38,(0,t.t1)(t.t3);case 38:case"end":return t.stop()}}),t,null,[[1,17,20,30],[21,,25,29]])})))}}function d(e){return i(this,void 0,void 0,s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e[Symbol.asyncIterator]();case 1:return n.next=3,r.next();case 3:if(n.sent.done){n.next=7;break}n.next=1;break;case 7:case"end":return n.stop()}}),n)})))}function b(e){var n,r,t,a;return i(this,void 0,void 0,s().mark((function u(){var c,i;return s().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:c=[],u.prev=1,n=v(e);case 3:return u.next=5,n.next();case 5:if((r=u.sent).done){u.next=11;break}i=r.value,c.push(i);case 9:u.next=3;break;case 11:u.next=16;break;case 13:u.prev=13,u.t0=u.catch(1),t={error:u.t0};case 16:if(u.prev=16,u.prev=17,!r||r.done||!(a=n.return)){u.next=21;break}return u.next=21,a.call(n);case 21:if(u.prev=21,!t){u.next=24;break}throw t.error;case 24:return u.finish(21);case 25:return u.finish(16);case 26:return u.abrupt("return",c);case 27:case"end":return u.stop()}}),u,null,[[1,13,16,26],[17,,21,25]])})))}function k(e){return i(this,void 0,void 0,s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e[Symbol.asyncIterator](),n.next=3,r.next();case 3:return n.abrupt("return",n.sent.value);case 4:case"end":return n.stop()}}),n)})))}function w(e){return i(this,void 0,void 0,s().mark((function n(){var r,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e[Symbol.asyncIterator](),t=0;case 2:return n.next=4,r.next();case 4:if(n.sent.done){n.next=9;break}case 6:t++,n.next=2;break;case 9:return n.abrupt("return",t);case 10:case"end":return n.stop()}}),n)})))}function m(e,n){return function(r){var t,a,u,c;return i(this,void 0,void 0,s().mark((function i(){var o,f;return s().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:o=n,s.prev=1,t=v(r);case 3:return s.next=5,t.next();case 5:if((a=s.sent).done){s.next=11;break}f=a.value,o=e(o,f);case 9:s.next=3;break;case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(1),u={error:s.t0};case 16:if(s.prev=16,s.prev=17,!a||a.done||!(c=t.return)){s.next=21;break}return s.next=21,c.call(t);case 21:if(s.prev=21,!u){s.next=24;break}throw u.error;case 24:return s.finish(21);case 25:return s.finish(16);case 26:return s.abrupt("return",o);case 27:case"end":return s.stop()}}),i,null,[[1,13,16,26],[17,,21,25]])})))}}function y(e){return x(this,arguments,s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=f,n.delegateYield(p(v(e)),"t1",2);case 2:return n.t2=n.t1,n.next=5,(0,n.t0)(n.t2);case 5:case"end":return n.stop()}}),n)})))}function g(e){var n=!1;return function(){return x(this,arguments,s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n){r.next=2;break}throw new Error("already iterated");case 2:return n=!0,r.t0=f,r.delegateYield(p(v(e)),"t1",5);case 5:return r.t2=r.t1,r.next=8,(0,r.t0)(r.t2);case 8:case"end":return r.stop()}}),r)})))}}function S(e,n,r){return function(t){return x(this,arguments,s().mark((function a(){var u,c,i,o,x,p,d,b,k,w,m;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:x=l(e(h())),a.prev=1,p=v(t);case 3:return a.next=5,f(p.next());case 5:if((d=a.sent).done){a.next=39;break}b=d.value,a.prev=8,i=void 0,k=v(x());case 10:return a.next=12,f(k.next());case 12:if((w=a.sent).done){a.next=22;break}if(m=w.value,n&&!n(b,m)){a.next=20;break}return a.next=18,f(r?r(b,m):[b,m]);case 18:return a.next=20,a.sent;case 20:a.next=10;break;case 22:a.next=27;break;case 24:a.prev=24,a.t0=a.catch(8),i={error:a.t0};case 27:if(a.prev=27,a.prev=28,!w||w.done||!(o=k.return)){a.next=32;break}return a.next=32,f(o.call(k));case 32:if(a.prev=32,!i){a.next=35;break}throw i.error;case 35:return a.finish(32);case 36:return a.finish(27);case 37:a.next=3;break;case 39:a.next=44;break;case 41:a.prev=41,a.t1=a.catch(1),u={error:a.t1};case 44:if(a.prev=44,a.prev=45,!d||d.done||!(c=p.return)){a.next=49;break}return a.next=49,f(c.call(p));case 49:if(a.prev=49,!u){a.next=52;break}throw u.error;case 52:return a.finish(49);case 53:return a.finish(44);case 54:case"end":return a.stop()}}),a,null,[[1,41,44,54],[8,24,27,37],[28,,32,36],[45,,49,53]])})))}}function I(e){return void 0===e&&(e=""),function(n){return x(this,arguments,s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=f,r.next=3,f(b(n));case 3:return r.t1=r.sent.join(e),r.next=6,(0,r.t0)(r.t1);case 6:return r.next=8,r.sent;case 8:case"end":return r.stop()}}),r)})))}}function j(e){return function(n){return x(this,arguments,s().mark((function r(){var t,a,u,c,i;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,u=v(n);case 2:return r.next=4,f(u.next());case 4:if((c=r.sent).done){r.next=13;break}return i=c.value,r.next=9,f(e(i));case 9:return r.next=11,r.sent;case 11:r.next=2;break;case 13:r.next=18;break;case 15:r.prev=15,r.t0=r.catch(0),t={error:r.t0};case 18:if(r.prev=18,r.prev=19,!c||c.done||!(a=u.return)){r.next=23;break}return r.next=23,f(a.call(u));case 23:if(r.prev=23,!t){r.next=26;break}throw t.error;case 26:return r.finish(23);case 27:return r.finish(18);case 28:case"end":return r.stop()}}),r,null,[[0,15,18,28],[19,,23,27]])})))}}function E(e){return function(n){return x(this,arguments,s().mark((function r(){var t,a,u,c,i;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,u=v(n);case 2:return r.next=4,f(u.next());case 4:if((c=r.sent).done){r.next=14;break}if(i=c.value,!e(i)){r.next=12;break}return r.next=10,f(i);case 10:return r.next=12,r.sent;case 12:r.next=2;break;case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(0),t={error:r.t0};case 19:if(r.prev=19,r.prev=20,!c||c.done||!(a=u.return)){r.next=24;break}return r.next=24,f(a.call(u));case 24:if(r.prev=24,!t){r.next=27;break}throw t.error;case 27:return r.finish(24);case 28:return r.finish(19);case 29:case"end":return r.stop()}}),r,null,[[0,16,19,29],[20,,24,28]])})))}}function Y(e){return function(n){return x(this,arguments,s().mark((function r(){var t,a,u,c,i;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,u=v(n);case 2:return r.next=4,f(u.next());case 4:if((c=r.sent).done){r.next=14;break}return i=c.value,r.t0=f,r.delegateYield(p(v(e(i))),"t1",9);case 9:return r.t2=r.t1,r.next=12,(0,r.t0)(r.t2);case 12:r.next=2;break;case 14:r.next=19;break;case 16:r.prev=16,r.t3=r.catch(0),t={error:r.t3};case 19:if(r.prev=19,r.prev=20,!c||c.done||!(a=u.return)){r.next=24;break}return r.next=24,f(a.call(u));case 24:if(r.prev=24,!t){r.next=27;break}throw t.error;case 27:return r.finish(24);case 28:return r.finish(19);case 29:case"end":return r.stop()}}),r,null,[[0,16,19,29],[20,,24,28]])})))}}function Z(e){return x(this,arguments,s().mark((function n(){var r,t,a,u,c,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=new Set,n.prev=1,u=v(e);case 3:return n.next=5,f(u.next());case 5:if((c=n.sent).done){n.next=16;break}if(i=c.value,a.has(i)){n.next=14;break}return a.add(i),n.next=12,f(i);case 12:return n.next=14,n.sent;case 14:n.next=3;break;case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(1),r={error:n.t0};case 21:if(n.prev=21,n.prev=22,!c||c.done||!(t=u.return)){n.next=26;break}return n.next=26,f(t.call(u));case 26:if(n.prev=26,!r){n.next=29;break}throw r.error;case 29:return n.finish(26);case 30:return n.finish(21);case 31:case"end":return n.stop()}}),n,null,[[1,18,21,31],[22,,26,30]])})))}function P(e,n){return void 0===e&&(e=function(e){return e}),void 0===n&&(n=function(e){return e}),function(r){return x(this,arguments,s().mark((function t(){var a,c,i,o,x,p,h,l,d,b,k,w,m;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=new Map,t.prev=1,o=v(r);case 3:return t.next=5,f(o.next());case 5:if((x=t.sent).done){t.next=13;break}p=x.value,h=e(p),(l=i.get(h))?l.push(p):i.set(h,[p]);case 11:t.next=3;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),a={error:t.t0};case 18:if(t.prev=18,t.prev=19,!x||x.done||!(c=o.return)){t.next=23;break}return t.next=23,f(c.call(o));case 23:if(t.prev=23,!a){t.next=26;break}throw a.error;case 26:return t.finish(23);case 27:return t.finish(18);case 28:d=(0,u.Z)(i);case 29:if((b=d()).done){t.next=37;break}return k=b.value,w=k[0],m=k[1],t.next=33,f([w,n(m)]);case 33:return t.next=35,t.sent;case 35:t.next=29;break;case 37:case"end":return t.stop()}}),t,null,[[1,15,18,28],[19,,23,27]])})))}}function R(e){void 0===e&&(e=/\r?\n/);var n=[];return function(r){return x(this,arguments,s().mark((function t(){var a,u,c,i,o,x,h,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,c=v(r);case 2:return t.next=4,f(c.next());case 4:if((i=t.sent).done){t.next=22;break}if(o=i.value,x=("string"==typeof o?o:o.toString()).split(e),h=x[0],l=x.slice(1),n.push(h),!l.length){t.next=20;break}return t.next=12,f(n.join(""));case 12:return t.next=14,t.sent;case 14:return t.t0=f,t.delegateYield(p(v(l.slice(0,l.length-1))),"t1",16);case 16:return t.t2=t.t1,t.next=19,(0,t.t0)(t.t2);case 19:n=[l[l.length-1]];case 20:t.next=2;break;case 22:t.next=27;break;case 24:t.prev=24,t.t3=t.catch(0),a={error:t.t3};case 27:if(t.prev=27,t.prev=28,!i||i.done||!(u=c.return)){t.next=32;break}return t.next=32,f(u.call(c));case 32:if(t.prev=32,!a){t.next=35;break}throw a.error;case 35:return t.finish(32);case 36:return t.finish(27);case 37:if(!n.length){t.next=42;break}return t.next=40,f(n.join(""));case 40:return t.next=42,t.sent;case 42:case"end":return t.stop()}}),t,null,[[0,24,27,37],[28,,32,36]])})))}}function C(e){return function(n){return x(this,arguments,s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=f,r.next=3,f(e(n));case 3:return r.t1=r.sent,r.next=6,(0,r.t0)(r.t1);case 6:return r.next=8,r.sent;case 8:case"end":return r.stop()}}),r)})))}}function O(e){return"function"==typeof e?e:function(){return y(e)}}var T=function(){function e(){this.operations=[]}var n=e.prototype;return n.add=function(e){return this.operations.push(O(e)),this},n.join=function(e,n,r){return this.operations.push(S(O(e),n,r)),this},n.group=function(e,n){return this.operations.push(P(e,n)),this},n.fork=function(n){return void 0===n&&(n=2),i(this,void 0,void 0,s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=l(this.run()),r.next=3,d(t());case 3:return r.abrupt("return",Array.from({length:n},(function(){return(new e).add(t)})));case 4:case"end":return r.stop()}}),r,this)})))},n.run=function(){return x(this,arguments,s().mark((function e(){var n,r,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=h(),r=(0,u.Z)(this.operations);!(t=r()).done;)a=t.value,n=a(n);return e.t0=f,e.delegateYield(p(v(n)),"t1",4);case 4:return e.t2=e.t1,e.next=7,(0,e.t0)(e.t2);case 7:case"end":return e.stop()}}),e,this)})))},e}(),A=Object.assign({React:a},a,t)}}]);