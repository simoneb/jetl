"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514],{677:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),a(r(9293),t),a(r(4566),t),a(r(6252),t),a(r(7077),t)},4566:function(e,t,r){r.r(t);var n=r(7855),a=r(7757),o=r.n(a),c=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,a){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,a,(t=e[r](t)).done,t.value)}))}}},u=function(e){return this instanceof u?(this.v=e,this):new u(e)},s=function(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,a){t[n]=e[n]?function(t){return(r=!r)?{value:u(e[n](t)),done:"return"===n}:a?a(t):t}:a}},i=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,a=r.apply(e,t||[]),o=[];return n={},c("next"),c("throw"),c("return"),n[Symbol.asyncIterator]=function(){return this},n;function c(e){a[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||s(e,t)}))})}function s(e,t){try{(r=a[e](t)).value instanceof u?Promise.resolve(r.value.v).then(i,f):p(o[0][2],r)}catch(n){p(o[0][3],n)}var r}function i(e){s("next",e)}function f(e){s("throw",e)}function p(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}};Object.defineProperty(t,"__esModule",{value:!0}),exports.apply=exports.split=exports.group=exports.unique=exports.flatMap=exports.filter=exports.map=exports.joinStrings=exports.join=exports.generateOnce=exports.generate=void 0;var f=r(6252);exports.generate=function(e){return i(this,arguments,o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=u,t.delegateYield(s(c(e)),"t1",2);case 2:return t.t2=t.t1,t.next=5,(0,t.t0)(t.t2);case 5:case"end":return t.stop()}}),t)})))},exports.generateOnce=function(e){var t=!1;return function(){return i(this,arguments,o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=2;break}throw new Error("already iterated");case 2:return t=!0,r.t0=u,r.delegateYield(s(c(e)),"t1",5);case 5:return r.t2=r.t1,r.next=8,(0,r.t0)(r.t2);case 8:case"end":return r.stop()}}),r)})))}},exports.join=function(e,t,r){return function(n){return i(this,arguments,o().mark((function a(){var s,i,p,x,v,h,l,d,b,w,k;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:v=(0,f.cache)(e((0,f.empty)())),a.prev=1,h=c(n);case 3:return a.next=5,u(h.next());case 5:if((l=a.sent).done){a.next=39;break}d=l.value,a.prev=8,p=void 0,b=c(v());case 10:return a.next=12,u(b.next());case 12:if((w=a.sent).done){a.next=22;break}if(k=w.value,t&&!t(d,k)){a.next=20;break}return a.next=18,u(r?r(d,k):[d,k]);case 18:return a.next=20,a.sent;case 20:a.next=10;break;case 22:a.next=27;break;case 24:a.prev=24,a.t0=a.catch(8),p={error:a.t0};case 27:if(a.prev=27,a.prev=28,!w||w.done||!(x=b.return)){a.next=32;break}return a.next=32,u(x.call(b));case 32:if(a.prev=32,!p){a.next=35;break}throw p.error;case 35:return a.finish(32);case 36:return a.finish(27);case 37:a.next=3;break;case 39:a.next=44;break;case 41:a.prev=41,a.t1=a.catch(1),s={error:a.t1};case 44:if(a.prev=44,a.prev=45,!l||l.done||!(i=h.return)){a.next=49;break}return a.next=49,u(i.call(h));case 49:if(a.prev=49,!s){a.next=52;break}throw s.error;case 52:return a.finish(49);case 53:return a.finish(44);case 54:case"end":return a.stop()}}),a,null,[[1,41,44,54],[8,24,27,37],[28,,32,36],[45,,49,53]])})))}},exports.joinStrings=function(e){return void 0===e&&(e=""),function(t){return i(this,arguments,o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=u,r.next=3,u((0,f.toArray)(t));case 3:return r.t1=r.sent.join(e),r.next=6,(0,r.t0)(r.t1);case 6:return r.next=8,r.sent;case 8:case"end":return r.stop()}}),r)})))}},exports.map=function(e){return function(t){return i(this,arguments,o().mark((function r(){var n,a,s,i,f;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,s=c(t);case 2:return r.next=4,u(s.next());case 4:if((i=r.sent).done){r.next=13;break}return f=i.value,r.next=9,u(e(f));case 9:return r.next=11,r.sent;case 11:r.next=2;break;case 13:r.next=18;break;case 15:r.prev=15,r.t0=r.catch(0),n={error:r.t0};case 18:if(r.prev=18,r.prev=19,!i||i.done||!(a=s.return)){r.next=23;break}return r.next=23,u(a.call(s));case 23:if(r.prev=23,!n){r.next=26;break}throw n.error;case 26:return r.finish(23);case 27:return r.finish(18);case 28:case"end":return r.stop()}}),r,null,[[0,15,18,28],[19,,23,27]])})))}},exports.filter=function(e){return function(t){return i(this,arguments,o().mark((function r(){var n,a,s,i,f;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,s=c(t);case 2:return r.next=4,u(s.next());case 4:if((i=r.sent).done){r.next=14;break}if(f=i.value,!e(f)){r.next=12;break}return r.next=10,u(f);case 10:return r.next=12,r.sent;case 12:r.next=2;break;case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(0),n={error:r.t0};case 19:if(r.prev=19,r.prev=20,!i||i.done||!(a=s.return)){r.next=24;break}return r.next=24,u(a.call(s));case 24:if(r.prev=24,!n){r.next=27;break}throw n.error;case 27:return r.finish(24);case 28:return r.finish(19);case 29:case"end":return r.stop()}}),r,null,[[0,16,19,29],[20,,24,28]])})))}},exports.flatMap=function(e){return function(t){return i(this,arguments,o().mark((function r(){var n,a,i,f,p;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,i=c(t);case 2:return r.next=4,u(i.next());case 4:if((f=r.sent).done){r.next=14;break}return p=f.value,r.t0=u,r.delegateYield(s(c(e(p))),"t1",9);case 9:return r.t2=r.t1,r.next=12,(0,r.t0)(r.t2);case 12:r.next=2;break;case 14:r.next=19;break;case 16:r.prev=16,r.t3=r.catch(0),n={error:r.t3};case 19:if(r.prev=19,r.prev=20,!f||f.done||!(a=i.return)){r.next=24;break}return r.next=24,u(a.call(i));case 24:if(r.prev=24,!n){r.next=27;break}throw n.error;case 27:return r.finish(24);case 28:return r.finish(19);case 29:case"end":return r.stop()}}),r,null,[[0,16,19,29],[20,,24,28]])})))}},exports.unique=function(e){return i(this,arguments,o().mark((function t(){var r,n,a,s,i,f;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=new Set,t.prev=1,s=c(e);case 3:return t.next=5,u(s.next());case 5:if((i=t.sent).done){t.next=16;break}if(f=i.value,a.has(f)){t.next=14;break}return a.add(f),t.next=12,u(f);case 12:return t.next=14,t.sent;case 14:t.next=3;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(1),r={error:t.t0};case 21:if(t.prev=21,t.prev=22,!i||i.done||!(n=s.return)){t.next=26;break}return t.next=26,u(n.call(s));case 26:if(t.prev=26,!r){t.next=29;break}throw r.error;case 29:return t.finish(26);case 30:return t.finish(21);case 31:case"end":return t.stop()}}),t,null,[[1,18,21,31],[22,,26,30]])})))},exports.group=function(e,t){return void 0===e&&(e=function(e){return e}),void 0===t&&(t=function(e){return e}),function(r){return i(this,arguments,o().mark((function a(){var s,i,f,p,x,v,h,l,d,b,w,k,y;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:f=new Map,a.prev=1,p=c(r);case 3:return a.next=5,u(p.next());case 5:if((x=a.sent).done){a.next=13;break}v=x.value,h=e(v),(l=f.get(h))?l.push(v):f.set(h,[v]);case 11:a.next=3;break;case 13:a.next=18;break;case 15:a.prev=15,a.t0=a.catch(1),s={error:a.t0};case 18:if(a.prev=18,a.prev=19,!x||x.done||!(i=p.return)){a.next=23;break}return a.next=23,u(i.call(p));case 23:if(a.prev=23,!s){a.next=26;break}throw s.error;case 26:return a.finish(23);case 27:return a.finish(18);case 28:d=(0,n.Z)(f);case 29:if((b=d()).done){a.next=37;break}return w=b.value,k=w[0],y=w[1],a.next=33,u([k,t(y)]);case 33:return a.next=35,a.sent;case 35:a.next=29;break;case 37:case"end":return a.stop()}}),a,null,[[1,15,18,28],[19,,23,27]])})))}},exports.split=function(e){void 0===e&&(e=/\r?\n/);var t=[];return function(r){return i(this,arguments,o().mark((function n(){var a,i,f,p,x,v,h,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,f=c(r);case 2:return n.next=4,u(f.next());case 4:if((p=n.sent).done){n.next=22;break}if(x=p.value,v=("string"==typeof x?x:x.toString()).split(e),h=v[0],l=v.slice(1),t.push(h),!l.length){n.next=20;break}return n.next=12,u(t.join(""));case 12:return n.next=14,n.sent;case 14:return n.t0=u,n.delegateYield(s(c(l.slice(0,l.length-1))),"t1",16);case 16:return n.t2=n.t1,n.next=19,(0,n.t0)(n.t2);case 19:t=[l[l.length-1]];case 20:n.next=2;break;case 22:n.next=27;break;case 24:n.prev=24,n.t3=n.catch(0),a={error:n.t3};case 27:if(n.prev=27,n.prev=28,!p||p.done||!(i=f.return)){n.next=32;break}return n.next=32,u(i.call(f));case 32:if(n.prev=32,!a){n.next=35;break}throw a.error;case 35:return n.finish(32);case 36:return n.finish(27);case 37:if(!t.length){n.next=42;break}return n.next=40,u(t.join(""));case 40:return n.next=42,n.sent;case 42:case"end":return n.stop()}}),n,null,[[0,24,27,37],[28,,32,36]])})))}},exports.apply=function(e){return function(t){return i(this,arguments,o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=u,r.next=3,u(e(t));case 3:return r.t1=r.sent,r.next=6,(0,r.t0)(r.t1);case 6:return r.next=8,r.sent;case 8:case"end":return r.stop()}}),r)})))}}},6252:function(e,t,r){r.r(t);var n=r(7757),a=r.n(n),o=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function c(e){try{s(n.next(e))}catch(t){o(t)}}function u(e){try{s(n.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,u)}s((n=n.apply(e,t||[])).next())}))},c=function(e){return this instanceof c?(this.v=e,this):new c(e)},u=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,a=r.apply(e,t||[]),o=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(e){a[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||s(e,t)}))})}function s(e,t){try{(r=a[e](t)).value instanceof c?Promise.resolve(r.value.v).then(i,f):p(o[0][2],r)}catch(n){p(o[0][3],n)}var r}function i(e){s("next",e)}function f(e){s("throw",e)}function p(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}},s=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,a){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,a,(t=e[r](t)).done,t.value)}))}}},i=function(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,a){t[n]=e[n]?function(t){return(r=!r)?{value:c(e[n](t)),done:"return"===n}:a?a(t):t}:a}};Object.defineProperty(t,"__esModule",{value:!0}),exports.reduce=exports.count=exports.first=exports.toArray=exports.consume=exports.toOperation=exports.cache=exports.empty=void 0;var f=r(677);exports.empty=function(){return u(this,arguments,a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))},exports.cache=function(e){var t=[],r=!0;return function(){return u(this,arguments,a().mark((function n(){var o,u,f,p,x;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=33;break}n.prev=1,f=s(e);case 3:return n.next=5,c(f.next());case 5:if((p=n.sent).done){n.next=15;break}return x=p.value,t.push(x),n.next=11,c(x);case 11:return n.next=13,n.sent;case 13:n.next=3;break;case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(1),o={error:n.t0};case 20:if(n.prev=20,n.prev=21,!p||p.done||!(u=f.return)){n.next=25;break}return n.next=25,c(u.call(f));case 25:if(n.prev=25,!o){n.next=28;break}throw o.error;case 28:return n.finish(25);case 29:return n.finish(20);case 30:r=!1,n.next=38;break;case 33:return n.t1=c,n.delegateYield(i(s(t)),"t2",35);case 35:return n.t3=n.t2,n.next=38,(0,n.t1)(n.t3);case 38:case"end":return n.stop()}}),n,null,[[1,17,20,30],[21,,25,29]])})))}},exports.toOperation=function(e){return"function"==typeof e?e:function(){return(0,f.generate)(e)}},exports.consume=function(e){return o(this,void 0,void 0,a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e[Symbol.asyncIterator]();case 1:return t.next=3,r.next();case 3:if(t.sent.done){t.next=7;break}t.next=1;break;case 7:case"end":return t.stop()}}),t)})))},exports.toArray=function(e){var t,r,n,c;return o(this,void 0,void 0,a().mark((function o(){var u,i;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:u=[],a.prev=1,t=s(e);case 3:return a.next=5,t.next();case 5:if((r=a.sent).done){a.next=11;break}i=r.value,u.push(i);case 9:a.next=3;break;case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),n={error:a.t0};case 16:if(a.prev=16,a.prev=17,!r||r.done||!(c=t.return)){a.next=21;break}return a.next=21,c.call(t);case 21:if(a.prev=21,!n){a.next=24;break}throw n.error;case 24:return a.finish(21);case 25:return a.finish(16);case 26:return a.abrupt("return",u);case 27:case"end":return a.stop()}}),o,null,[[1,13,16,26],[17,,21,25]])})))},exports.first=function(e){var t,r,n,c;return o(this,void 0,void 0,a().mark((function o(){var u;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.prev=0,t=s(e);case 2:return a.next=4,t.next();case 4:if((r=a.sent).done){a.next=10;break}return u=r.value,a.abrupt("return",u);case 8:a.next=2;break;case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),n={error:a.t0};case 15:if(a.prev=15,a.prev=16,!r||r.done||!(c=t.return)){a.next=20;break}return a.next=20,c.call(t);case 20:if(a.prev=20,!n){a.next=23;break}throw n.error;case 23:return a.finish(20);case 24:return a.finish(15);case 25:case"end":return a.stop()}}),o,null,[[0,12,15,25],[16,,20,24]])})))},exports.count=function(e){return o(this,void 0,void 0,a().mark((function t(){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e[Symbol.asyncIterator](),n=0;case 2:return t.next=4,r.next();case 4:if(t.sent.done){t.next=9;break}case 6:n++,t.next=2;break;case 9:return t.abrupt("return",n);case 10:case"end":return t.stop()}}),t)})))},exports.reduce=function(e,t){return function(r){var n,c,u,i;return o(this,void 0,void 0,a().mark((function o(){var f,p;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:f=t,a.prev=1,n=s(r);case 3:return a.next=5,n.next();case 5:if((c=a.sent).done){a.next=11;break}p=c.value,f=e(f,p);case 9:a.next=3;break;case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),u={error:a.t0};case 16:if(a.prev=16,a.prev=17,!c||c.done||!(i=n.return)){a.next=21;break}return a.next=21,i.call(n);case 21:if(a.prev=21,!u){a.next=24;break}throw u.error;case 24:return a.finish(21);case 25:return a.finish(16);case 26:return a.abrupt("return",f);case 27:case"end":return a.stop()}}),o,null,[[1,13,16,26],[17,,21,25]])})))}}},9293:function(e,t,r){r.r(t);var n=r(7855),a=r(7757),o=r.n(a),c=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function c(e){try{s(n.next(e))}catch(t){o(t)}}function u(e){try{s(n.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,u)}s((n=n.apply(e,t||[])).next())}))},u=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,a){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,a,(t=e[r](t)).done,t.value)}))}}},s=function(e){return this instanceof s?(this.v=e,this):new s(e)},i=function(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,a){t[n]=e[n]?function(t){return(r=!r)?{value:s(e[n](t)),done:"return"===n}:a?a(t):t}:a}},f=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,a=r.apply(e,t||[]),o=[];return n={},c("next"),c("throw"),c("return"),n[Symbol.asyncIterator]=function(){return this},n;function c(e){a[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||u(e,t)}))})}function u(e,t){try{(r=a[e](t)).value instanceof s?Promise.resolve(r.value.v).then(i,f):p(o[0][2],r)}catch(n){p(o[0][3],n)}var r}function i(e){u("next",e)}function f(e){u("throw",e)}function p(e,t){e(t),o.shift(),o.length&&u(o[0][0],o[0][1])}};Object.defineProperty(t,"__esModule",{value:!0}),exports.pipeline=void 0;var p=r(6252),x=r(4566),v=function(){function e(){this.operations=[]}var t=e.prototype;return t.add=function(e){return this.operations.push((0,p.toOperation)(e)),this},t.join=function(e,t,r){return this.operations.push((0,x.join)((0,p.toOperation)(e),t,r)),this},t.group=function(e,t){return this.operations.push((0,x.group)(e,t)),this},t.fork=function(t){return void 0===t&&(t=2),c(this,void 0,void 0,o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=(0,p.cache)(this.run()),r.next=3,(0,p.consume)(n());case 3:return r.abrupt("return",Array.from({length:t},(function(){return(new e).add(n)})));case 4:case"end":return r.stop()}}),r,this)})))},t.run=function(){return f(this,arguments,o().mark((function e(){var t,r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=(0,p.empty)(),r=(0,n.Z)(this.operations);!(a=r()).done;)c=a.value,t=c(t);return e.t0=s,e.delegateYield(i(u(t)),"t1",4);case 4:return e.t2=e.t1,e.next=7,(0,e.t0)(e.t2);case 7:case"end":return e.stop()}}),e,this)})))},e}();exports.pipeline=v},7077:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},4158:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7462),a=r(7294),o=r(979);function c(e){return a.createElement(o.Z,(0,n.Z)({},e,{transformCode:function(e){return"() => {\n        const [result, setResult] = useState('Loading...')\n\n        useEffect(() => {\n          async function run() {\n            "+e+"\n          }\n\n          run().then(setResult, setResult)\n        }, [])\n\n        return result\n      }"}}))}},6922:function(e,t,r){var n=r(7294),a=r(677),o=Object.assign({React:n},n,a);t.Z=o}}]);