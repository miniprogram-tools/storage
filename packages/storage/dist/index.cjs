"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e={name:"wx",setItem(e,t){return wx.setStorageSync(e,t),this},getItem:e=>wx.getStorageSync(e),removeItem(e){return wx.removeStorageSync(e),this},size:()=>wx.getStorageInfoSync().currentSize,keys:()=>wx.getStorageInfoSync().keys};var t=(e=>(e[e.wx=0]="wx",e[e.unknown=1]="unknown",e))(t||{});function n(e){if(!e||"object"!=typeof e||Array.isArray(e))return!1;const t=e;return"number"==typeof t.expirationDate&&"data"in t}function r(e,t){return e?`${e}-${t}`:t}function o(e,t){if(!e)return t;const n=new RegExp(`^${`${e}-`}(.*)$`),r=t.match(n);return(null==r?void 0:r[1])??t}function s(){if(("undefined"!=typeof wx&&"function"==typeof wx.canIUse?0:1)===t.wx)return e;throw new Error("小程序运行环境有误")}const i=()=>{const e=new Map;return{get(t){const r=e.get(t);return n(r)?function(e){if(n(e)){const t=e;return Date.now()>t.expirationDate}return!1}(r)?void 0:r.data:r},set(t,n,r){const o="number"==typeof r&&r>0?function(e,t){return{expirationDate:Date.now()+e,data:t}}(r,n):n;return e.set(t,o),this},has:t=>e.has(t),delete:t=>e.delete(t),clear(){e.clear()}}},c=i();function a(e={}){const t=s(),n=i(),{prefix:a,id:u}=e;(e=>{e.keys().forEach((t=>{setTimeout((()=>{const n=e.getItem(t);c.set(t,n)}),0)}))})(t);let f={};const m="string"==typeof u?(e=>r("app*space-",e))(u):"";if(m){const e=t.getItem(m);e&&(f=JSON.parse(e))}function y(){m&&t.setItem(m,JSON.stringify(f))}return{getItem(e){if(m)return f[e];const n=r(a,e);if(c.has(n))return c.get(n);const o=t.getItem(n);return c.set(n,o),o},setItem(e,n,o){if(m)return f[e]=n,y(),this;const s=r(a,e);return t.setItem(s,n),c.set(s,n,o),this},removeItem(e){if(m)return delete f[e],y(),this;const n=r(a,e);return t.removeItem(n),c.delete(n),this},async clear(e){if("function"!=typeof e)throw new TypeError("predicate must be a function");if(m){const t=Object.keys(f);for(const n of t){await Promise.resolve(e(n))&&delete f[n]}return void y()}const n=t.keys();for(const r of n){if(/^app\*space-/.test(r))continue;const n=o(a,r);if(a&&n===r)continue;await Promise.resolve(e(n))&&(t.removeItem(r),c.delete(r))}},get keys(){return u?Object.keys(f):t.keys()},get cache(){return n}}}a();const u=a();exports.createStorage=a,exports.storage=u;
