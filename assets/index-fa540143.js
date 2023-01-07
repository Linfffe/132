(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function mn(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}function _n(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=Q(r)?po(r):_n(r);if(o)for(const s in o)t[s]=o[s]}return t}else{if(Q(e))return e;if(Y(e))return e}}const ao=/;(?![^(]*\))/g,uo=/:([^]+)/,ho=/\/\*.*?\*\//gs;function po(e){const t={};return e.replace(ho,"").split(ao).forEach(n=>{if(n){const r=n.split(uo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function vn(e){let t="";if(Q(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=vn(e[n]);r&&(t+=r+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const go="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mo=mn(go);function vr(e){return!!e||e===""}const $={},Qe=[],ge=()=>{},_o=()=>!1,vo=/^on[^a-z]/,St=e=>vo.test(e),bn=e=>e.startsWith("onUpdate:"),ee=Object.assign,xn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bo=Object.prototype.hasOwnProperty,S=(e,t)=>bo.call(e,t),F=Array.isArray,ft=e=>Nt(e)==="[object Map]",xo=e=>Nt(e)==="[object Set]",O=e=>typeof e=="function",Q=e=>typeof e=="string",yn=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",br=e=>Y(e)&&O(e.then)&&O(e.catch),yo=Object.prototype.toString,Nt=e=>yo.call(e),Co=e=>Nt(e).slice(8,-1),wo=e=>Nt(e)==="[object Object]",Cn=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,At=mn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},To=/-(\w)/g,tt=Bt(e=>e.replace(To,(t,n)=>n?n.toUpperCase():"")),Eo=/\B([A-Z])/g,rt=Bt(e=>e.replace(Eo,"-$1").toLowerCase()),xr=Bt(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vt=Bt(e=>e?`on${xr(e)}`:""),Ft=(e,t)=>!Object.is(e,t),kt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ot=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},yr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Wn;const Ao=()=>Wn||(Wn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ye;class Io{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function Ro(e,t=ye){t&&t.active&&t.effects.push(e)}const wn=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Cr=e=>(e.w&Be)>0,wr=e=>(e.n&Be)>0,Po=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Be},Fo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];Cr(o)&&!wr(o)?o.delete(e):t[n++]=o,o.w&=~Be,o.n&=~Be}t.length=n}},tn=new WeakMap;let ct=0,Be=1;const nn=30;let de;const Ve=Symbol(""),rn=Symbol("");class Tn{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ro(this,r)}run(){if(!this.active)return this.fn();let t=de,n=Se;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=de,de=this,Se=!0,Be=1<<++ct,ct<=nn?Po(this):qn(this),this.fn()}finally{ct<=nn&&Fo(this),Be=1<<--ct,de=this.parent,Se=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){de===this?this.deferStop=!0:this.active&&(qn(this),this.onStop&&this.onStop(),this.active=!1)}}function qn(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Se=!0;const Tr=[];function ot(){Tr.push(Se),Se=!1}function st(){const e=Tr.pop();Se=e===void 0?!0:e}function ce(e,t,n){if(Se&&de){let r=tn.get(e);r||tn.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=wn()),Er(o)}}function Er(e,t){let n=!1;ct<=nn?wr(e)||(e.n|=Be,n=!Cr(e)):n=!e.has(de),n&&(e.add(de),de.deps.push(e))}function Pe(e,t,n,r,o,s){const i=tn.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&F(e)){const a=yr(r);i.forEach((d,g)=>{(g==="length"||g>=a)&&c.push(d)})}else switch(n!==void 0&&c.push(i.get(n)),t){case"add":F(e)?Cn(n)&&c.push(i.get("length")):(c.push(i.get(Ve)),ft(e)&&c.push(i.get(rn)));break;case"delete":F(e)||(c.push(i.get(Ve)),ft(e)&&c.push(i.get(rn)));break;case"set":ft(e)&&c.push(i.get(Ve));break}if(c.length===1)c[0]&&on(c[0]);else{const a=[];for(const d of c)d&&a.push(...d);on(wn(a))}}function on(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Vn(r);for(const r of n)r.computed||Vn(r)}function Vn(e,t){(e!==de||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Oo=mn("__proto__,__v_isRef,__isVue"),Ar=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(yn)),Mo=En(),Lo=En(!1,!0),So=En(!0),kn=No();function No(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let s=0,i=this.length;s<i;s++)ce(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(H)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ot();const r=H(this)[t].apply(this,n);return st(),r}}),e}function En(e=!1,t=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Zo:Or:t?Fr:Pr).get(r))return r;const i=F(r);if(!e&&i&&S(kn,o))return Reflect.get(kn,o,s);const c=Reflect.get(r,o,s);return(yn(o)?Ar.has(o):Oo(o))||(e||ce(r,"get",o),t)?c:re(c)?i&&Cn(o)?c:c.value:Y(c)?e?Mr(c):Rn(c):c}}const Bo=Ir(),Ho=Ir(!0);function Ir(e=!1){return function(n,r,o,s){let i=n[r];if(dt(i)&&re(i)&&!re(o))return!1;if(!e&&(!sn(o)&&!dt(o)&&(i=H(i),o=H(o)),!F(n)&&re(i)&&!re(o)))return i.value=o,!0;const c=F(n)&&Cn(r)?Number(r)<n.length:S(n,r),a=Reflect.set(n,r,o,s);return n===H(s)&&(c?Ft(o,i)&&Pe(n,"set",r,o):Pe(n,"add",r,o)),a}}function Uo(e,t){const n=S(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Pe(e,"delete",t,void 0),r}function jo(e,t){const n=Reflect.has(e,t);return(!yn(t)||!Ar.has(t))&&ce(e,"has",t),n}function Do(e){return ce(e,"iterate",F(e)?"length":Ve),Reflect.ownKeys(e)}const Rr={get:Mo,set:Bo,deleteProperty:Uo,has:jo,ownKeys:Do},zo={get:So,set(e,t){return!0},deleteProperty(e,t){return!0}},Ko=ee({},Rr,{get:Lo,set:Ho}),An=e=>e,Ht=e=>Reflect.getPrototypeOf(e);function xt(e,t,n=!1,r=!1){e=e.__v_raw;const o=H(e),s=H(t);n||(t!==s&&ce(o,"get",t),ce(o,"get",s));const{has:i}=Ht(o),c=r?An:n?On:Fn;if(i.call(o,t))return c(e.get(t));if(i.call(o,s))return c(e.get(s));e!==o&&e.get(t)}function yt(e,t=!1){const n=this.__v_raw,r=H(n),o=H(e);return t||(e!==o&&ce(r,"has",e),ce(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Ct(e,t=!1){return e=e.__v_raw,!t&&ce(H(e),"iterate",Ve),Reflect.get(e,"size",e)}function Yn(e){e=H(e);const t=H(this);return Ht(t).has.call(t,e)||(t.add(e),Pe(t,"add",e,e)),this}function Jn(e,t){t=H(t);const n=H(this),{has:r,get:o}=Ht(n);let s=r.call(n,e);s||(e=H(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?Ft(t,i)&&Pe(n,"set",e,t):Pe(n,"add",e,t),this}function Xn(e){const t=H(this),{has:n,get:r}=Ht(t);let o=n.call(t,e);o||(e=H(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&Pe(t,"delete",e,void 0),s}function Zn(){const e=H(this),t=e.size!==0,n=e.clear();return t&&Pe(e,"clear",void 0,void 0),n}function wt(e,t){return function(r,o){const s=this,i=s.__v_raw,c=H(i),a=t?An:e?On:Fn;return!e&&ce(c,"iterate",Ve),i.forEach((d,g)=>r.call(o,a(d),a(g),s))}}function Tt(e,t,n){return function(...r){const o=this.__v_raw,s=H(o),i=ft(s),c=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,d=o[e](...r),g=n?An:t?On:Fn;return!t&&ce(s,"iterate",a?rn:Ve),{next(){const{value:x,done:y}=d.next();return y?{value:x,done:y}:{value:c?[g(x[0]),g(x[1])]:g(x),done:y}},[Symbol.iterator](){return this}}}}function Me(e){return function(...t){return e==="delete"?!1:this}}function $o(){const e={get(s){return xt(this,s)},get size(){return Ct(this)},has:yt,add:Yn,set:Jn,delete:Xn,clear:Zn,forEach:wt(!1,!1)},t={get(s){return xt(this,s,!1,!0)},get size(){return Ct(this)},has:yt,add:Yn,set:Jn,delete:Xn,clear:Zn,forEach:wt(!1,!0)},n={get(s){return xt(this,s,!0)},get size(){return Ct(this,!0)},has(s){return yt.call(this,s,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:wt(!0,!1)},r={get(s){return xt(this,s,!0,!0)},get size(){return Ct(this,!0)},has(s){return yt.call(this,s,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:wt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Tt(s,!1,!1),n[s]=Tt(s,!0,!1),t[s]=Tt(s,!1,!0),r[s]=Tt(s,!0,!0)}),[e,n,t,r]}const[Wo,qo,Vo,ko]=$o();function In(e,t){const n=t?e?ko:Vo:e?qo:Wo;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(S(n,o)&&o in r?n:r,o,s)}const Yo={get:In(!1,!1)},Jo={get:In(!1,!0)},Xo={get:In(!0,!1)},Pr=new WeakMap,Fr=new WeakMap,Or=new WeakMap,Zo=new WeakMap;function Qo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Go(e){return e.__v_skip||!Object.isExtensible(e)?0:Qo(Co(e))}function Rn(e){return dt(e)?e:Pn(e,!1,Rr,Yo,Pr)}function es(e){return Pn(e,!1,Ko,Jo,Fr)}function Mr(e){return Pn(e,!0,zo,Xo,Or)}function Pn(e,t,n,r,o){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=Go(e);if(i===0)return e;const c=new Proxy(e,i===2?r:n);return o.set(e,c),c}function Ge(e){return dt(e)?Ge(e.__v_raw):!!(e&&e.__v_isReactive)}function dt(e){return!!(e&&e.__v_isReadonly)}function sn(e){return!!(e&&e.__v_isShallow)}function Lr(e){return Ge(e)||dt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function Sr(e){return Ot(e,"__v_skip",!0),e}const Fn=e=>Y(e)?Rn(e):e,On=e=>Y(e)?Mr(e):e;function ts(e){Se&&de&&(e=H(e),Er(e.dep||(e.dep=wn())))}function ns(e,t){e=H(e),e.dep&&on(e.dep)}function re(e){return!!(e&&e.__v_isRef===!0)}function rs(e){return re(e)?e.value:e}const os={get:(e,t,n)=>rs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return re(o)&&!re(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Nr(e){return Ge(e)?e:new Proxy(e,os)}var Br;class ss{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Br]=!1,this._dirty=!0,this.effect=new Tn(t,()=>{this._dirty||(this._dirty=!0,ns(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=H(this);return ts(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Br="__v_isReadonly";function is(e,t,n=!1){let r,o;const s=O(e);return s?(r=e,o=ge):(r=e.get,o=e.set),new ss(r,o,s||!o,n)}function Ne(e,t,n,r){let o;try{o=r?e(...r):e()}catch(s){Ut(s,t,n)}return o}function ae(e,t,n,r){if(O(e)){const s=Ne(e,t,n,r);return s&&br(s)&&s.catch(i=>{Ut(i,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(ae(e[s],t,n,r));return o}function Ut(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,c=n;for(;s;){const d=s.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](e,i,c)===!1)return}s=s.parent}const a=t.appContext.config.errorHandler;if(a){Ne(a,null,10,[e,i,c]);return}}ls(e,n,o,r)}function ls(e,t,n,r=!0){console.error(e)}let ht=!1,ln=!1;const G=[];let Te=0;const et=[];let Ie=null,$e=0;const Hr=Promise.resolve();let Mn=null;function cs(e){const t=Mn||Hr;return e?t.then(this?e.bind(this):e):t}function fs(e){let t=Te+1,n=G.length;for(;t<n;){const r=t+n>>>1;pt(G[r])<e?t=r+1:n=r}return t}function Ln(e){(!G.length||!G.includes(e,ht&&e.allowRecurse?Te+1:Te))&&(e.id==null?G.push(e):G.splice(fs(e.id),0,e),Ur())}function Ur(){!ht&&!ln&&(ln=!0,Mn=Hr.then(Dr))}function as(e){const t=G.indexOf(e);t>Te&&G.splice(t,1)}function us(e){F(e)?et.push(...e):(!Ie||!Ie.includes(e,e.allowRecurse?$e+1:$e))&&et.push(e),Ur()}function Qn(e,t=ht?Te+1:0){for(;t<G.length;t++){const n=G[t];n&&n.pre&&(G.splice(t,1),t--,n())}}function jr(e){if(et.length){const t=[...new Set(et)];if(et.length=0,Ie){Ie.push(...t);return}for(Ie=t,Ie.sort((n,r)=>pt(n)-pt(r)),$e=0;$e<Ie.length;$e++)Ie[$e]();Ie=null,$e=0}}const pt=e=>e.id==null?1/0:e.id,ds=(e,t)=>{const n=pt(e)-pt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Dr(e){ln=!1,ht=!0,G.sort(ds);const t=ge;try{for(Te=0;Te<G.length;Te++){const n=G[Te];n&&n.active!==!1&&Ne(n,null,14)}}finally{Te=0,G.length=0,jr(),ht=!1,Mn=null,(G.length||et.length)&&Dr()}}function hs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||$;let o=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in r){const g=`${i==="modelValue"?"model":i}Modifiers`,{number:x,trim:y}=r[g]||$;y&&(o=n.map(I=>Q(I)?I.trim():I)),x&&(o=n.map(yr))}let c,a=r[c=Vt(t)]||r[c=Vt(tt(t))];!a&&s&&(a=r[c=Vt(rt(t))]),a&&ae(a,e,6,o);const d=r[c+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ae(d,e,6,o)}}function zr(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},c=!1;if(!O(e)){const a=d=>{const g=zr(d,t,!0);g&&(c=!0,ee(i,g))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!c?(Y(e)&&r.set(e,null),null):(F(s)?s.forEach(a=>i[a]=null):ee(i,s),Y(e)&&r.set(e,i),i)}function jt(e,t){return!e||!St(t)?!1:(t=t.slice(2).replace(/Once$/,""),S(e,t[0].toLowerCase()+t.slice(1))||S(e,rt(t))||S(e,t))}let he=null,Kr=null;function Mt(e){const t=he;return he=e,Kr=e&&e.type.__scopeId||null,t}function ps(e,t=he,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&lr(-1);const s=Mt(t);let i;try{i=e(...o)}finally{Mt(s),r._d&&lr(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Yt(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[i],slots:c,attrs:a,emit:d,render:g,renderCache:x,data:y,setupState:I,ctx:N,inheritAttrs:A}=e;let W,U;const oe=Mt(e);try{if(n.shapeFlag&4){const K=o||r;W=we(g.call(K,K,x,s,I,y,N)),U=a}else{const K=t;W=we(K.length>1?K(s,{attrs:a,slots:c,emit:d}):K(s,null)),U=t.props?a:gs(a)}}catch(K){ut.length=0,Ut(K,e,1),W=ke(Re)}let P=W;if(U&&A!==!1){const K=Object.keys(U),{shapeFlag:J}=P;K.length&&J&7&&(i&&K.some(bn)&&(U=ms(U,i)),P=He(P,U))}return n.dirs&&(P=He(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),W=P,Mt(oe),W}const gs=e=>{let t;for(const n in e)(n==="class"||n==="style"||St(n))&&((t||(t={}))[n]=e[n]);return t},ms=(e,t)=>{const n={};for(const r in e)(!bn(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function _s(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:c,patchFlag:a}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Gn(r,i,d):!!i;if(a&8){const g=t.dynamicProps;for(let x=0;x<g.length;x++){const y=g[x];if(i[y]!==r[y]&&!jt(d,y))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:r===i?!1:r?i?Gn(r,i,d):!0:!!i;return!1}function Gn(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!jt(n,s))return!0}return!1}function vs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bs=e=>e.__isSuspense;function xs(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):us(e)}function ys(e,t){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[e]=t}}function It(e,t,n=!1){const r=Z||he;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&O(t)?t.call(r.proxy):t}}const Et={};function Jt(e,t,n){return $r(e,t,n)}function $r(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:i}=$){const c=Z;let a,d=!1,g=!1;if(re(e)?(a=()=>e.value,d=sn(e)):Ge(e)?(a=()=>e,r=!0):F(e)?(g=!0,d=e.some(P=>Ge(P)||sn(P)),a=()=>e.map(P=>{if(re(P))return P.value;if(Ge(P))return Ze(P);if(O(P))return Ne(P,c,2)})):O(e)?t?a=()=>Ne(e,c,2):a=()=>{if(!(c&&c.isUnmounted))return x&&x(),ae(e,c,3,[y])}:a=ge,t&&r){const P=a;a=()=>Ze(P())}let x,y=P=>{x=U.onStop=()=>{Ne(P,c,4)}},I;if(mt)if(y=ge,t?n&&ae(t,c,3,[a(),g?[]:void 0,y]):a(),o==="sync"){const P=yi();I=P.__watcherHandles||(P.__watcherHandles=[])}else return ge;let N=g?new Array(e.length).fill(Et):Et;const A=()=>{if(U.active)if(t){const P=U.run();(r||d||(g?P.some((K,J)=>Ft(K,N[J])):Ft(P,N)))&&(x&&x(),ae(t,c,3,[P,N===Et?void 0:g&&N[0]===Et?[]:N,y]),N=P)}else U.run()};A.allowRecurse=!!t;let W;o==="sync"?W=A:o==="post"?W=()=>se(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),W=()=>Ln(A));const U=new Tn(a,W);t?n?A():N=U.run():o==="post"?se(U.run.bind(U),c&&c.suspense):U.run();const oe=()=>{U.stop(),c&&c.scope&&xn(c.scope.effects,U)};return I&&I.push(oe),oe}function Cs(e,t,n){const r=this.proxy,o=Q(e)?e.includes(".")?Wr(r,e):()=>r[e]:e.bind(r,r);let s;O(t)?s=t:(s=t.handler,n=t);const i=Z;nt(this);const c=$r(o,s.bind(r),n);return i?nt(i):Ye(),c}function Wr(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function Ze(e,t){if(!Y(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),re(e))Ze(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)Ze(e[n],t);else if(xo(e)||ft(e))e.forEach(n=>{Ze(n,t)});else if(wo(e))for(const n in e)Ze(e[n],t);return e}function ws(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yr(()=>{e.isMounted=!0}),Jr(()=>{e.isUnmounting=!0}),e}const fe=[Function,Array],Ts={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fe,onEnter:fe,onAfterEnter:fe,onEnterCancelled:fe,onBeforeLeave:fe,onLeave:fe,onAfterLeave:fe,onLeaveCancelled:fe,onBeforeAppear:fe,onAppear:fe,onAfterAppear:fe,onAppearCancelled:fe},setup(e,{slots:t}){const n=hi(),r=ws();let o;return()=>{const s=t.default&&Vr(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const A of s)if(A.type!==Re){i=A;break}}const c=H(e),{mode:a}=c;if(r.isLeaving)return Xt(i);const d=er(i);if(!d)return Xt(i);const g=cn(d,c,r,n);fn(d,g);const x=n.subTree,y=x&&er(x);let I=!1;const{getTransitionKey:N}=d.type;if(N){const A=N();o===void 0?o=A:A!==o&&(o=A,I=!0)}if(y&&y.type!==Re&&(!We(d,y)||I)){const A=cn(y,c,r,n);if(fn(y,A),a==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Xt(i);a==="in-out"&&d.type!==Re&&(A.delayLeave=(W,U,oe)=>{const P=qr(r,y);P[String(y.key)]=y,W._leaveCb=()=>{U(),W._leaveCb=void 0,delete g.delayedLeave},g.delayedLeave=oe})}return i}}},Es=Ts;function qr(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function cn(e,t,n,r){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:c,onEnter:a,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:x,onLeave:y,onAfterLeave:I,onLeaveCancelled:N,onBeforeAppear:A,onAppear:W,onAfterAppear:U,onAppearCancelled:oe}=t,P=String(e.key),K=qr(n,e),J=(M,X)=>{M&&ae(M,r,9,X)},Oe=(M,X)=>{const q=X[1];J(M,X),F(M)?M.every(ie=>ie.length<=1)&&q():M.length<=1&&q()},me={mode:s,persisted:i,beforeEnter(M){let X=c;if(!n.isMounted)if(o)X=A||c;else return;M._leaveCb&&M._leaveCb(!0);const q=K[P];q&&We(e,q)&&q.el._leaveCb&&q.el._leaveCb(),J(X,[M])},enter(M){let X=a,q=d,ie=g;if(!n.isMounted)if(o)X=W||a,q=U||d,ie=oe||g;else return;let _e=!1;const Ee=M._enterCb=it=>{_e||(_e=!0,it?J(ie,[M]):J(q,[M]),me.delayedLeave&&me.delayedLeave(),M._enterCb=void 0)};X?Oe(X,[M,Ee]):Ee()},leave(M,X){const q=String(e.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return X();J(x,[M]);let ie=!1;const _e=M._leaveCb=Ee=>{ie||(ie=!0,X(),Ee?J(N,[M]):J(I,[M]),M._leaveCb=void 0,K[q]===e&&delete K[q])};K[q]=e,y?Oe(y,[M,_e]):_e()},clone(M){return cn(M,t,n,r)}};return me}function Xt(e){if(Dt(e))return e=He(e),e.children=null,e}function er(e){return Dt(e)?e.children?e.children[0]:void 0:e}function fn(e,t){e.shapeFlag&6&&e.component?fn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vr(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const c=n==null?i.key:String(n)+String(i.key!=null?i.key:s);i.type===Ce?(i.patchFlag&128&&o++,r=r.concat(Vr(i.children,t,c))):(t||i.type!==Re)&&r.push(c!=null?He(i,{key:c}):i)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function As(e){return O(e)?{setup:e,name:e.name}:e}const Rt=e=>!!e.type.__asyncLoader,Dt=e=>e.type.__isKeepAlive;function Is(e,t){kr(e,"a",t)}function Rs(e,t){kr(e,"da",t)}function kr(e,t,n=Z){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(zt(t,r,n),n){let o=n.parent;for(;o&&o.parent;)Dt(o.parent.vnode)&&Ps(r,t,n,o),o=o.parent}}function Ps(e,t,n,r){const o=zt(t,e,r,!0);Xr(()=>{xn(r[t],o)},n)}function zt(e,t,n=Z,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;ot(),nt(n);const c=ae(t,n,e,i);return Ye(),st(),c});return r?o.unshift(s):o.push(s),s}}const Fe=e=>(t,n=Z)=>(!mt||e==="sp")&&zt(e,(...r)=>t(...r),n),Fs=Fe("bm"),Yr=Fe("m"),Os=Fe("bu"),Ms=Fe("u"),Jr=Fe("bum"),Xr=Fe("um"),Ls=Fe("sp"),Ss=Fe("rtg"),Ns=Fe("rtc");function Bs(e,t=Z){zt("ec",e,t)}function De(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const c=o[i];s&&(c.oldValue=s[i].value);let a=c.dir[r];a&&(ot(),ae(a,n,8,[e.el,c,e,t]),st())}}const Hs=Symbol(),an=e=>e?io(e)?Hn(e)||e.proxy:an(e.parent):null,at=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>an(e.parent),$root:e=>an(e.root),$emit:e=>e.emit,$options:e=>Sn(e),$forceUpdate:e=>e.f||(e.f=()=>Ln(e.update)),$nextTick:e=>e.n||(e.n=cs.bind(e.proxy)),$watch:e=>Cs.bind(e)}),Zt=(e,t)=>e!==$&&!e.__isScriptSetup&&S(e,t),Us={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:c,appContext:a}=e;let d;if(t[0]!=="$"){const I=i[t];if(I!==void 0)switch(I){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(Zt(r,t))return i[t]=1,r[t];if(o!==$&&S(o,t))return i[t]=2,o[t];if((d=e.propsOptions[0])&&S(d,t))return i[t]=3,s[t];if(n!==$&&S(n,t))return i[t]=4,n[t];un&&(i[t]=0)}}const g=at[t];let x,y;if(g)return t==="$attrs"&&ce(e,"get",t),g(e);if((x=c.__cssModules)&&(x=x[t]))return x;if(n!==$&&S(n,t))return i[t]=4,n[t];if(y=a.config.globalProperties,S(y,t))return y[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Zt(o,t)?(o[t]=n,!0):r!==$&&S(r,t)?(r[t]=n,!0):S(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let c;return!!n[i]||e!==$&&S(e,i)||Zt(t,i)||(c=s[0])&&S(c,i)||S(r,i)||S(at,i)||S(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:S(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let un=!0;function js(e){const t=Sn(e),n=e.proxy,r=e.ctx;un=!1,t.beforeCreate&&tr(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:c,provide:a,inject:d,created:g,beforeMount:x,mounted:y,beforeUpdate:I,updated:N,activated:A,deactivated:W,beforeDestroy:U,beforeUnmount:oe,destroyed:P,unmounted:K,render:J,renderTracked:Oe,renderTriggered:me,errorCaptured:M,serverPrefetch:X,expose:q,inheritAttrs:ie,components:_e,directives:Ee,filters:it}=t;if(d&&Ds(d,r,null,e.appContext.config.unwrapInjectedRef),i)for(const V in i){const D=i[V];O(D)&&(r[V]=D.bind(n))}if(o){const V=o.call(n,n);Y(V)&&(e.data=Rn(V))}if(un=!0,s)for(const V in s){const D=s[V],Ue=O(D)?D.bind(n,n):O(D.get)?D.get.bind(n,n):ge,vt=!O(D)&&O(D.set)?D.set.bind(n):ge,je=bi({get:Ue,set:vt});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>je.value,set:ve=>je.value=ve})}if(c)for(const V in c)Zr(c[V],r,n,V);if(a){const V=O(a)?a.call(n):a;Reflect.ownKeys(V).forEach(D=>{ys(D,V[D])})}g&&tr(g,e,"c");function te(V,D){F(D)?D.forEach(Ue=>V(Ue.bind(n))):D&&V(D.bind(n))}if(te(Fs,x),te(Yr,y),te(Os,I),te(Ms,N),te(Is,A),te(Rs,W),te(Bs,M),te(Ns,Oe),te(Ss,me),te(Jr,oe),te(Xr,K),te(Ls,X),F(q))if(q.length){const V=e.exposed||(e.exposed={});q.forEach(D=>{Object.defineProperty(V,D,{get:()=>n[D],set:Ue=>n[D]=Ue})})}else e.exposed||(e.exposed={});J&&e.render===ge&&(e.render=J),ie!=null&&(e.inheritAttrs=ie),_e&&(e.components=_e),Ee&&(e.directives=Ee)}function Ds(e,t,n=ge,r=!1){F(e)&&(e=dn(e));for(const o in e){const s=e[o];let i;Y(s)?"default"in s?i=It(s.from||o,s.default,!0):i=It(s.from||o):i=It(s),re(i)&&r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:c=>i.value=c}):t[o]=i}}function tr(e,t,n){ae(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zr(e,t,n,r){const o=r.includes(".")?Wr(n,r):()=>n[r];if(Q(e)){const s=t[e];O(s)&&Jt(o,s)}else if(O(e))Jt(o,e.bind(n));else if(Y(e))if(F(e))e.forEach(s=>Zr(s,t,n,r));else{const s=O(e.handler)?e.handler.bind(n):t[e.handler];O(s)&&Jt(o,s,e)}}function Sn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,c=s.get(t);let a;return c?a=c:!o.length&&!n&&!r?a=t:(a={},o.length&&o.forEach(d=>Lt(a,d,i,!0)),Lt(a,t,i)),Y(t)&&s.set(t,a),a}function Lt(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Lt(e,s,n,!0),o&&o.forEach(i=>Lt(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const c=zs[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const zs={data:nr,props:Ke,emits:Ke,methods:Ke,computed:Ke,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:Ke,directives:Ke,watch:$s,provide:nr,inject:Ks};function nr(e,t){return t?e?function(){return ee(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function Ks(e,t){return Ke(dn(e),dn(t))}function dn(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Ke(e,t){return e?ee(ee(Object.create(null),e),t):t}function $s(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const r in t)n[r]=ne(e[r],t[r]);return n}function Ws(e,t,n,r=!1){const o={},s={};Ot(s,$t,1),e.propsDefaults=Object.create(null),Qr(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:es(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function qs(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,c=H(o),[a]=e.propsOptions;let d=!1;if((r||i>0)&&!(i&16)){if(i&8){const g=e.vnode.dynamicProps;for(let x=0;x<g.length;x++){let y=g[x];if(jt(e.emitsOptions,y))continue;const I=t[y];if(a)if(S(s,y))I!==s[y]&&(s[y]=I,d=!0);else{const N=tt(y);o[N]=hn(a,c,N,I,e,!1)}else I!==s[y]&&(s[y]=I,d=!0)}}}else{Qr(e,t,o,s)&&(d=!0);let g;for(const x in c)(!t||!S(t,x)&&((g=rt(x))===x||!S(t,g)))&&(a?n&&(n[x]!==void 0||n[g]!==void 0)&&(o[x]=hn(a,c,x,void 0,e,!0)):delete o[x]);if(s!==c)for(const x in s)(!t||!S(t,x))&&(delete s[x],d=!0)}d&&Pe(e,"set","$attrs")}function Qr(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,c;if(t)for(let a in t){if(At(a))continue;const d=t[a];let g;o&&S(o,g=tt(a))?!s||!s.includes(g)?n[g]=d:(c||(c={}))[g]=d:jt(e.emitsOptions,a)||(!(a in r)||d!==r[a])&&(r[a]=d,i=!0)}if(s){const a=H(n),d=c||$;for(let g=0;g<s.length;g++){const x=s[g];n[x]=hn(o,a,x,d[x],e,!S(d,x))}}return i}function hn(e,t,n,r,o,s){const i=e[n];if(i!=null){const c=S(i,"default");if(c&&r===void 0){const a=i.default;if(i.type!==Function&&O(a)){const{propsDefaults:d}=o;n in d?r=d[n]:(nt(o),r=d[n]=a.call(null,t),Ye())}else r=a}i[0]&&(s&&!c?r=!1:i[1]&&(r===""||r===rt(n))&&(r=!0))}return r}function Gr(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},c=[];let a=!1;if(!O(e)){const g=x=>{a=!0;const[y,I]=Gr(x,t,!0);ee(i,y),I&&c.push(...I)};!n&&t.mixins.length&&t.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!s&&!a)return Y(e)&&r.set(e,Qe),Qe;if(F(s))for(let g=0;g<s.length;g++){const x=tt(s[g]);rr(x)&&(i[x]=$)}else if(s)for(const g in s){const x=tt(g);if(rr(x)){const y=s[g],I=i[x]=F(y)||O(y)?{type:y}:Object.assign({},y);if(I){const N=ir(Boolean,I.type),A=ir(String,I.type);I[0]=N>-1,I[1]=A<0||N<A,(N>-1||S(I,"default"))&&c.push(x)}}}const d=[i,c];return Y(e)&&r.set(e,d),d}function rr(e){return e[0]!=="$"}function or(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function sr(e,t){return or(e)===or(t)}function ir(e,t){return F(t)?t.findIndex(n=>sr(n,e)):O(t)&&sr(t,e)?0:-1}const eo=e=>e[0]==="_"||e==="$stable",Nn=e=>F(e)?e.map(we):[we(e)],Vs=(e,t,n)=>{if(t._n)return t;const r=ps((...o)=>Nn(t(...o)),n);return r._c=!1,r},to=(e,t,n)=>{const r=e._ctx;for(const o in e){if(eo(o))continue;const s=e[o];if(O(s))t[o]=Vs(o,s,r);else if(s!=null){const i=Nn(s);t[o]=()=>i}}},no=(e,t)=>{const n=Nn(t);e.slots.default=()=>n},ks=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Ot(t,"_",n)):to(t,e.slots={})}else e.slots={},t&&no(e,t);Ot(e.slots,$t,1)},Ys=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=$;if(r.shapeFlag&32){const c=t._;c?n&&c===1?s=!1:(ee(o,t),!n&&c===1&&delete o._):(s=!t.$stable,to(t,o)),i=t}else t&&(no(e,t),i={default:1});if(s)for(const c in o)!eo(c)&&!(c in i)&&delete o[c]};function ro(){return{app:null,config:{isNativeTag:_o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Js=0;function Xs(e,t){return function(r,o=null){O(r)||(r=Object.assign({},r)),o!=null&&!Y(o)&&(o=null);const s=ro(),i=new Set;let c=!1;const a=s.app={_uid:Js++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:Ci,get config(){return s.config},set config(d){},use(d,...g){return i.has(d)||(d&&O(d.install)?(i.add(d),d.install(a,...g)):O(d)&&(i.add(d),d(a,...g))),a},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),a},component(d,g){return g?(s.components[d]=g,a):s.components[d]},directive(d,g){return g?(s.directives[d]=g,a):s.directives[d]},mount(d,g,x){if(!c){const y=ke(r,o);return y.appContext=s,g&&t?t(y,d):e(y,d,x),c=!0,a._container=d,d.__vue_app__=a,Hn(y.component)||y.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(d,g){return s.provides[d]=g,a}};return a}}function pn(e,t,n,r,o=!1){if(F(e)){e.forEach((y,I)=>pn(y,t&&(F(t)?t[I]:t),n,r,o));return}if(Rt(r)&&!o)return;const s=r.shapeFlag&4?Hn(r.component)||r.component.proxy:r.el,i=o?null:s,{i:c,r:a}=e,d=t&&t.r,g=c.refs===$?c.refs={}:c.refs,x=c.setupState;if(d!=null&&d!==a&&(Q(d)?(g[d]=null,S(x,d)&&(x[d]=null)):re(d)&&(d.value=null)),O(a))Ne(a,c,12,[i,g]);else{const y=Q(a),I=re(a);if(y||I){const N=()=>{if(e.f){const A=y?S(x,a)?x[a]:g[a]:a.value;o?F(A)&&xn(A,s):F(A)?A.includes(s)||A.push(s):y?(g[a]=[s],S(x,a)&&(x[a]=g[a])):(a.value=[s],e.k&&(g[e.k]=a.value))}else y?(g[a]=i,S(x,a)&&(x[a]=i)):I&&(a.value=i,e.k&&(g[e.k]=i))};i?(N.id=-1,se(N,n)):N()}}}const se=xs;function Zs(e){return Qs(e)}function Qs(e,t){const n=Ao();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:c,createComment:a,setText:d,setElementText:g,parentNode:x,nextSibling:y,setScopeId:I=ge,insertStaticContent:N}=e,A=(l,f,u,p=null,h=null,v=null,C=!1,_=null,b=!!f.dynamicChildren)=>{if(l===f)return;l&&!We(l,f)&&(p=bt(l),ve(l,h,v,!0),l=null),f.patchFlag===-2&&(b=!1,f.dynamicChildren=null);const{type:m,ref:T,shapeFlag:w}=f;switch(m){case Kt:W(l,f,u,p);break;case Re:U(l,f,u,p);break;case Qt:l==null&&oe(f,u,p,C);break;case Ce:_e(l,f,u,p,h,v,C,_,b);break;default:w&1?J(l,f,u,p,h,v,C,_,b):w&6?Ee(l,f,u,p,h,v,C,_,b):(w&64||w&128)&&m.process(l,f,u,p,h,v,C,_,b,Je)}T!=null&&h&&pn(T,l&&l.ref,v,f||l,!f)},W=(l,f,u,p)=>{if(l==null)r(f.el=c(f.children),u,p);else{const h=f.el=l.el;f.children!==l.children&&d(h,f.children)}},U=(l,f,u,p)=>{l==null?r(f.el=a(f.children||""),u,p):f.el=l.el},oe=(l,f,u,p)=>{[l.el,l.anchor]=N(l.children,f,u,p,l.el,l.anchor)},P=({el:l,anchor:f},u,p)=>{let h;for(;l&&l!==f;)h=y(l),r(l,u,p),l=h;r(f,u,p)},K=({el:l,anchor:f})=>{let u;for(;l&&l!==f;)u=y(l),o(l),l=u;o(f)},J=(l,f,u,p,h,v,C,_,b)=>{C=C||f.type==="svg",l==null?Oe(f,u,p,h,v,C,_,b):X(l,f,h,v,C,_,b)},Oe=(l,f,u,p,h,v,C,_)=>{let b,m;const{type:T,props:w,shapeFlag:E,transition:R,dirs:L}=l;if(b=l.el=i(l.type,v,w&&w.is,w),E&8?g(b,l.children):E&16&&M(l.children,b,null,p,h,v&&T!=="foreignObject",C,_),L&&De(l,null,p,"created"),w){for(const j in w)j!=="value"&&!At(j)&&s(b,j,null,w[j],v,l.children,p,h,Ae);"value"in w&&s(b,"value",null,w.value),(m=w.onVnodeBeforeMount)&&xe(m,p,l)}me(b,l,l.scopeId,C,p),L&&De(l,null,p,"beforeMount");const z=(!h||h&&!h.pendingBranch)&&R&&!R.persisted;z&&R.beforeEnter(b),r(b,f,u),((m=w&&w.onVnodeMounted)||z||L)&&se(()=>{m&&xe(m,p,l),z&&R.enter(b),L&&De(l,null,p,"mounted")},h)},me=(l,f,u,p,h)=>{if(u&&I(l,u),p)for(let v=0;v<p.length;v++)I(l,p[v]);if(h){let v=h.subTree;if(f===v){const C=h.vnode;me(l,C,C.scopeId,C.slotScopeIds,h.parent)}}},M=(l,f,u,p,h,v,C,_,b=0)=>{for(let m=b;m<l.length;m++){const T=l[m]=_?Le(l[m]):we(l[m]);A(null,T,f,u,p,h,v,C,_)}},X=(l,f,u,p,h,v,C)=>{const _=f.el=l.el;let{patchFlag:b,dynamicChildren:m,dirs:T}=f;b|=l.patchFlag&16;const w=l.props||$,E=f.props||$;let R;u&&ze(u,!1),(R=E.onVnodeBeforeUpdate)&&xe(R,u,f,l),T&&De(f,l,u,"beforeUpdate"),u&&ze(u,!0);const L=h&&f.type!=="foreignObject";if(m?q(l.dynamicChildren,m,_,u,p,L,v):C||D(l,f,_,null,u,p,L,v,!1),b>0){if(b&16)ie(_,f,w,E,u,p,h);else if(b&2&&w.class!==E.class&&s(_,"class",null,E.class,h),b&4&&s(_,"style",w.style,E.style,h),b&8){const z=f.dynamicProps;for(let j=0;j<z.length;j++){const k=z[j],ue=w[k],Xe=E[k];(Xe!==ue||k==="value")&&s(_,k,ue,Xe,h,l.children,u,p,Ae)}}b&1&&l.children!==f.children&&g(_,f.children)}else!C&&m==null&&ie(_,f,w,E,u,p,h);((R=E.onVnodeUpdated)||T)&&se(()=>{R&&xe(R,u,f,l),T&&De(f,l,u,"updated")},p)},q=(l,f,u,p,h,v,C)=>{for(let _=0;_<f.length;_++){const b=l[_],m=f[_],T=b.el&&(b.type===Ce||!We(b,m)||b.shapeFlag&70)?x(b.el):u;A(b,m,T,null,p,h,v,C,!0)}},ie=(l,f,u,p,h,v,C)=>{if(u!==p){if(u!==$)for(const _ in u)!At(_)&&!(_ in p)&&s(l,_,u[_],null,C,f.children,h,v,Ae);for(const _ in p){if(At(_))continue;const b=p[_],m=u[_];b!==m&&_!=="value"&&s(l,_,m,b,C,f.children,h,v,Ae)}"value"in p&&s(l,"value",u.value,p.value)}},_e=(l,f,u,p,h,v,C,_,b)=>{const m=f.el=l?l.el:c(""),T=f.anchor=l?l.anchor:c("");let{patchFlag:w,dynamicChildren:E,slotScopeIds:R}=f;R&&(_=_?_.concat(R):R),l==null?(r(m,u,p),r(T,u,p),M(f.children,u,T,h,v,C,_,b)):w>0&&w&64&&E&&l.dynamicChildren?(q(l.dynamicChildren,E,u,h,v,C,_),(f.key!=null||h&&f===h.subTree)&&oo(l,f,!0)):D(l,f,u,T,h,v,C,_,b)},Ee=(l,f,u,p,h,v,C,_,b)=>{f.slotScopeIds=_,l==null?f.shapeFlag&512?h.ctx.activate(f,u,p,C,b):it(f,u,p,h,v,C,b):Un(l,f,b)},it=(l,f,u,p,h,v,C)=>{const _=l.component=di(l,p,h);if(Dt(l)&&(_.ctx.renderer=Je),pi(_),_.asyncDep){if(h&&h.registerDep(_,te),!l.el){const b=_.subTree=ke(Re);U(null,b,f,u)}return}te(_,l,f,u,h,v,C)},Un=(l,f,u)=>{const p=f.component=l.component;if(_s(l,f,u))if(p.asyncDep&&!p.asyncResolved){V(p,f,u);return}else p.next=f,as(p.update),p.update();else f.el=l.el,p.vnode=f},te=(l,f,u,p,h,v,C)=>{const _=()=>{if(l.isMounted){let{next:T,bu:w,u:E,parent:R,vnode:L}=l,z=T,j;ze(l,!1),T?(T.el=L.el,V(l,T,C)):T=L,w&&kt(w),(j=T.props&&T.props.onVnodeBeforeUpdate)&&xe(j,R,T,L),ze(l,!0);const k=Yt(l),ue=l.subTree;l.subTree=k,A(ue,k,x(ue.el),bt(ue),l,h,v),T.el=k.el,z===null&&vs(l,k.el),E&&se(E,h),(j=T.props&&T.props.onVnodeUpdated)&&se(()=>xe(j,R,T,L),h)}else{let T;const{el:w,props:E}=f,{bm:R,m:L,parent:z}=l,j=Rt(f);if(ze(l,!1),R&&kt(R),!j&&(T=E&&E.onVnodeBeforeMount)&&xe(T,z,f),ze(l,!0),w&&qt){const k=()=>{l.subTree=Yt(l),qt(w,l.subTree,l,h,null)};j?f.type.__asyncLoader().then(()=>!l.isUnmounted&&k()):k()}else{const k=l.subTree=Yt(l);A(null,k,u,p,l,h,v),f.el=k.el}if(L&&se(L,h),!j&&(T=E&&E.onVnodeMounted)){const k=f;se(()=>xe(T,z,k),h)}(f.shapeFlag&256||z&&Rt(z.vnode)&&z.vnode.shapeFlag&256)&&l.a&&se(l.a,h),l.isMounted=!0,f=u=p=null}},b=l.effect=new Tn(_,()=>Ln(m),l.scope),m=l.update=()=>b.run();m.id=l.uid,ze(l,!0),m()},V=(l,f,u)=>{f.component=l;const p=l.vnode.props;l.vnode=f,l.next=null,qs(l,f.props,p,u),Ys(l,f.children,u),ot(),Qn(),st()},D=(l,f,u,p,h,v,C,_,b=!1)=>{const m=l&&l.children,T=l?l.shapeFlag:0,w=f.children,{patchFlag:E,shapeFlag:R}=f;if(E>0){if(E&128){vt(m,w,u,p,h,v,C,_,b);return}else if(E&256){Ue(m,w,u,p,h,v,C,_,b);return}}R&8?(T&16&&Ae(m,h,v),w!==m&&g(u,w)):T&16?R&16?vt(m,w,u,p,h,v,C,_,b):Ae(m,h,v,!0):(T&8&&g(u,""),R&16&&M(w,u,p,h,v,C,_,b))},Ue=(l,f,u,p,h,v,C,_,b)=>{l=l||Qe,f=f||Qe;const m=l.length,T=f.length,w=Math.min(m,T);let E;for(E=0;E<w;E++){const R=f[E]=b?Le(f[E]):we(f[E]);A(l[E],R,u,null,h,v,C,_,b)}m>T?Ae(l,h,v,!0,!1,w):M(f,u,p,h,v,C,_,b,w)},vt=(l,f,u,p,h,v,C,_,b)=>{let m=0;const T=f.length;let w=l.length-1,E=T-1;for(;m<=w&&m<=E;){const R=l[m],L=f[m]=b?Le(f[m]):we(f[m]);if(We(R,L))A(R,L,u,null,h,v,C,_,b);else break;m++}for(;m<=w&&m<=E;){const R=l[w],L=f[E]=b?Le(f[E]):we(f[E]);if(We(R,L))A(R,L,u,null,h,v,C,_,b);else break;w--,E--}if(m>w){if(m<=E){const R=E+1,L=R<T?f[R].el:p;for(;m<=E;)A(null,f[m]=b?Le(f[m]):we(f[m]),u,L,h,v,C,_,b),m++}}else if(m>E)for(;m<=w;)ve(l[m],h,v,!0),m++;else{const R=m,L=m,z=new Map;for(m=L;m<=E;m++){const le=f[m]=b?Le(f[m]):we(f[m]);le.key!=null&&z.set(le.key,m)}let j,k=0;const ue=E-L+1;let Xe=!1,zn=0;const lt=new Array(ue);for(m=0;m<ue;m++)lt[m]=0;for(m=R;m<=w;m++){const le=l[m];if(k>=ue){ve(le,h,v,!0);continue}let be;if(le.key!=null)be=z.get(le.key);else for(j=L;j<=E;j++)if(lt[j-L]===0&&We(le,f[j])){be=j;break}be===void 0?ve(le,h,v,!0):(lt[be-L]=m+1,be>=zn?zn=be:Xe=!0,A(le,f[be],u,null,h,v,C,_,b),k++)}const Kn=Xe?Gs(lt):Qe;for(j=Kn.length-1,m=ue-1;m>=0;m--){const le=L+m,be=f[le],$n=le+1<T?f[le+1].el:p;lt[m]===0?A(null,be,u,$n,h,v,C,_,b):Xe&&(j<0||m!==Kn[j]?je(be,u,$n,2):j--)}}},je=(l,f,u,p,h=null)=>{const{el:v,type:C,transition:_,children:b,shapeFlag:m}=l;if(m&6){je(l.component.subTree,f,u,p);return}if(m&128){l.suspense.move(f,u,p);return}if(m&64){C.move(l,f,u,Je);return}if(C===Ce){r(v,f,u);for(let w=0;w<b.length;w++)je(b[w],f,u,p);r(l.anchor,f,u);return}if(C===Qt){P(l,f,u);return}if(p!==2&&m&1&&_)if(p===0)_.beforeEnter(v),r(v,f,u),se(()=>_.enter(v),h);else{const{leave:w,delayLeave:E,afterLeave:R}=_,L=()=>r(v,f,u),z=()=>{w(v,()=>{L(),R&&R()})};E?E(v,L,z):z()}else r(v,f,u)},ve=(l,f,u,p=!1,h=!1)=>{const{type:v,props:C,ref:_,children:b,dynamicChildren:m,shapeFlag:T,patchFlag:w,dirs:E}=l;if(_!=null&&pn(_,null,u,l,!0),T&256){f.ctx.deactivate(l);return}const R=T&1&&E,L=!Rt(l);let z;if(L&&(z=C&&C.onVnodeBeforeUnmount)&&xe(z,f,l),T&6)fo(l.component,u,p);else{if(T&128){l.suspense.unmount(u,p);return}R&&De(l,null,f,"beforeUnmount"),T&64?l.type.remove(l,f,u,h,Je,p):m&&(v!==Ce||w>0&&w&64)?Ae(m,f,u,!1,!0):(v===Ce&&w&384||!h&&T&16)&&Ae(b,f,u),p&&jn(l)}(L&&(z=C&&C.onVnodeUnmounted)||R)&&se(()=>{z&&xe(z,f,l),R&&De(l,null,f,"unmounted")},u)},jn=l=>{const{type:f,el:u,anchor:p,transition:h}=l;if(f===Ce){co(u,p);return}if(f===Qt){K(l);return}const v=()=>{o(u),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(l.shapeFlag&1&&h&&!h.persisted){const{leave:C,delayLeave:_}=h,b=()=>C(u,v);_?_(l.el,v,b):b()}else v()},co=(l,f)=>{let u;for(;l!==f;)u=y(l),o(l),l=u;o(f)},fo=(l,f,u)=>{const{bum:p,scope:h,update:v,subTree:C,um:_}=l;p&&kt(p),h.stop(),v&&(v.active=!1,ve(C,l,f,u)),_&&se(_,f),se(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Ae=(l,f,u,p=!1,h=!1,v=0)=>{for(let C=v;C<l.length;C++)ve(l[C],f,u,p,h)},bt=l=>l.shapeFlag&6?bt(l.component.subTree):l.shapeFlag&128?l.suspense.next():y(l.anchor||l.el),Dn=(l,f,u)=>{l==null?f._vnode&&ve(f._vnode,null,null,!0):A(f._vnode||null,l,f,null,null,null,u),Qn(),jr(),f._vnode=l},Je={p:A,um:ve,m:je,r:jn,mt:it,mc:M,pc:D,pbc:q,n:bt,o:e};let Wt,qt;return t&&([Wt,qt]=t(Je)),{render:Dn,hydrate:Wt,createApp:Xs(Dn,Wt)}}function ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function oo(e,t,n=!1){const r=e.children,o=t.children;if(F(r)&&F(o))for(let s=0;s<r.length;s++){const i=r[s];let c=o[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[s]=Le(o[s]),c.el=i.el),n||oo(i,c)),c.type===Kt&&(c.el=i.el)}}function Gs(e){const t=e.slice(),n=[0];let r,o,s,i,c;const a=e.length;for(r=0;r<a;r++){const d=e[r];if(d!==0){if(o=n[n.length-1],e[o]<d){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)c=s+i>>1,e[n[c]]<d?s=c+1:i=c;d<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}const ei=e=>e.__isTeleport,Ce=Symbol(void 0),Kt=Symbol(void 0),Re=Symbol(void 0),Qt=Symbol(void 0),ut=[];let pe=null;function ti(e=!1){ut.push(pe=e?null:[])}function ni(){ut.pop(),pe=ut[ut.length-1]||null}let gt=1;function lr(e){gt+=e}function ri(e){return e.dynamicChildren=gt>0?pe||Qe:null,ni(),gt>0&&pe&&pe.push(e),e}function oi(e,t,n,r,o,s){return ri(_t(e,t,n,r,o,s,!0))}function si(e){return e?e.__v_isVNode===!0:!1}function We(e,t){return e.type===t.type&&e.key===t.key}const $t="__vInternal",so=({key:e})=>e??null,Pt=({ref:e,ref_key:t,ref_for:n})=>e!=null?Q(e)||re(e)||O(e)?{i:he,r:e,k:t,f:!!n}:e:null;function _t(e,t=null,n=null,r=0,o=null,s=e===Ce?0:1,i=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&so(t),ref:t&&Pt(t),scopeId:Kr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:he};return c?(Bn(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=Q(n)?8:16),gt>0&&!i&&pe&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&pe.push(a),a}const ke=ii;function ii(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===Hs)&&(e=Re),si(e)){const c=He(e,t,!0);return n&&Bn(c,n),gt>0&&!s&&pe&&(c.shapeFlag&6?pe[pe.indexOf(e)]=c:pe.push(c)),c.patchFlag|=-2,c}if(vi(e)&&(e=e.__vccOpts),t){t=li(t);let{class:c,style:a}=t;c&&!Q(c)&&(t.class=vn(c)),Y(a)&&(Lr(a)&&!F(a)&&(a=ee({},a)),t.style=_n(a))}const i=Q(e)?1:bs(e)?128:ei(e)?64:Y(e)?4:O(e)?2:0;return _t(e,t,n,r,o,i,s,!0)}function li(e){return e?Lr(e)||$t in e?ee({},e):e:null}function He(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=e,c=t?fi(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&so(c),ref:t&&t.ref?n&&o?F(o)?o.concat(Pt(t)):[o,Pt(t)]:Pt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&He(e.ssContent),ssFallback:e.ssFallback&&He(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function ci(e=" ",t=0){return ke(Kt,null,e,t)}function we(e){return e==null||typeof e=="boolean"?ke(Re):F(e)?ke(Ce,null,e.slice()):typeof e=="object"?Le(e):ke(Kt,null,String(e))}function Le(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:He(e)}function Bn(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Bn(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!($t in t)?t._ctx=he:o===3&&he&&(he.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:he},n=32):(t=String(t),r&64?(n=16,t=[ci(t)]):n=8);e.children=t,e.shapeFlag|=n}function fi(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=vn([t.class,r.class]));else if(o==="style")t.style=_n([t.style,r.style]);else if(St(o)){const s=t[o],i=r[o];i&&s!==i&&!(F(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function xe(e,t,n,r=null){ae(e,t,7,[n,r])}const ai=ro();let ui=0;function di(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||ai,s={uid:ui++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Io(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gr(r,o),emitsOptions:zr(r,o),emit:null,emitted:null,propsDefaults:$,inheritAttrs:r.inheritAttrs,ctx:$,data:$,props:$,attrs:$,slots:$,refs:$,setupState:$,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=hs.bind(null,s),e.ce&&e.ce(s),s}let Z=null;const hi=()=>Z||he,nt=e=>{Z=e,e.scope.on()},Ye=()=>{Z&&Z.scope.off(),Z=null};function io(e){return e.vnode.shapeFlag&4}let mt=!1;function pi(e,t=!1){mt=t;const{props:n,children:r}=e.vnode,o=io(e);Ws(e,n,o,t),ks(e,r);const s=o?gi(e,t):void 0;return mt=!1,s}function gi(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Sr(new Proxy(e.ctx,Us));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?_i(e):null;nt(e),ot();const s=Ne(r,e,0,[e.props,o]);if(st(),Ye(),br(s)){if(s.then(Ye,Ye),t)return s.then(i=>{cr(e,i,t)}).catch(i=>{Ut(i,e,0)});e.asyncDep=s}else cr(e,s,t)}else lo(e,t)}function cr(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=Nr(t)),lo(e,n)}let fr;function lo(e,t,n){const r=e.type;if(!e.render){if(!t&&fr&&!r.render){const o=r.template||Sn(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:a}=r,d=ee(ee({isCustomElement:s,delimiters:c},i),a);r.render=fr(o,d)}}e.render=r.render||ge}nt(e),ot(),js(e),st(),Ye()}function mi(e){return new Proxy(e.attrs,{get(t,n){return ce(e,"get","$attrs"),t[n]}})}function _i(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=mi(e))},slots:e.slots,emit:e.emit,expose:t}}function Hn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Nr(Sr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in at)return at[n](e)},has(t,n){return n in t||n in at}}))}function vi(e){return O(e)&&"__vccOpts"in e}const bi=(e,t)=>is(e,t,mt),xi=Symbol(""),yi=()=>It(xi),Ci="3.2.45",wi="http://www.w3.org/2000/svg",qe=typeof document<"u"?document:null,ar=qe&&qe.createElement("template"),Ti={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?qe.createElementNS(wi,e):qe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>qe.createTextNode(e),createComment:e=>qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{ar.innerHTML=r?`<svg>${e}</svg>`:e;const c=ar.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ei(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ai(e,t,n){const r=e.style,o=Q(n);if(n&&!o){for(const s in n)gn(r,s,n[s]);if(t&&!Q(t))for(const s in t)n[s]==null&&gn(r,s,"")}else{const s=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const ur=/\s*!important$/;function gn(e,t,n){if(F(n))n.forEach(r=>gn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ii(e,t);ur.test(n)?e.setProperty(rt(r),n.replace(ur,""),"important"):e[r]=n}}const dr=["Webkit","Moz","ms"],Gt={};function Ii(e,t){const n=Gt[t];if(n)return n;let r=tt(t);if(r!=="filter"&&r in e)return Gt[t]=r;r=xr(r);for(let o=0;o<dr.length;o++){const s=dr[o]+r;if(s in e)return Gt[t]=s}return t}const hr="http://www.w3.org/1999/xlink";function Ri(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(hr,t.slice(6,t.length)):e.setAttributeNS(hr,t,n);else{const s=mo(t);n==null||s&&!vr(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Pi(e,t,n,r,o,s,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,o,s),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n??"";(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=vr(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Fi(e,t,n,r){e.addEventListener(t,n,r)}function Oi(e,t,n,r){e.removeEventListener(t,n,r)}function Mi(e,t,n,r,o=null){const s=e._vei||(e._vei={}),i=s[t];if(r&&i)i.value=r;else{const[c,a]=Li(t);if(r){const d=s[t]=Bi(r,o);Fi(e,c,d,a)}else i&&(Oi(e,c,i,a),s[t]=void 0)}}const pr=/(?:Once|Passive|Capture)$/;function Li(e){let t;if(pr.test(e)){t={};let r;for(;r=e.match(pr);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rt(e.slice(2)),t]}let en=0;const Si=Promise.resolve(),Ni=()=>en||(Si.then(()=>en=0),en=Date.now());function Bi(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ae(Hi(r,n.value),t,5,[r])};return n.value=e,n.attached=Ni(),n}function Hi(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const gr=/^on[a-z]/,Ui=(e,t,n,r,o=!1,s,i,c,a)=>{t==="class"?Ei(e,r,o):t==="style"?Ai(e,n,r):St(t)?bn(t)||Mi(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ji(e,t,r,o))?Pi(e,t,r,s,i,c,a):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ri(e,t,r,o))};function ji(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&gr.test(t)&&O(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||gr.test(t)&&Q(n)?!1:t in e}const Di={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Es.props;const zi=ee({patchProp:Ui},Ti);let mr;function Ki(){return mr||(mr=Zs(zi))}const $i=(...e)=>{const t=Ki().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=Wi(r);if(!o)return;const s=t._component;!O(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Wi(e){return Q(e)?document.querySelector(e):e}const qi=`#version 300 es\r
// fragment shaders don't have a default precision so we need\r
// to pick one. highp is a good default. It means "high precision"\r
precision highp float;\r
\r
uniform float iTime;\r
\r
#define PI 3.1415926535\r
\r
float hash12(vec2 p) {\r
  vec3 p3 = fract(vec3(p.xyx) * .1031);\r
  p3 += dot(p3, p3.yzx + 33.33);\r
  return fract((p3.x + p3.y) * p3.z);\r
}\r
vec2 hash22(vec2 p) {\r
  vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));\r
  p3 += dot(p3, p3.yzx + 33.33);\r
  return fract((p3.xx + p3.yz) * p3.zy);\r
\r
}\r
vec3 hash32(vec2 p) {\r
  vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));\r
  p3 += dot(p3, p3.yxz + 33.33);\r
  return fract((p3.xxy + p3.yzz) * p3.zyx);\r
}\r
\r
\r
float nrand(vec2 n) {\r
  return fract(sin(dot(n.xy, vec2(12.9898, 78.233))) * 43758.5453);\r
}\r
//note: remaps v to [0;1] in interval [a;b]\r
float remap(float a, float b, float v) {\r
  return clamp((v - a) / (b - a), 0.0, 1.0);\r
}\r
//note: quantizes in l levels\r
float truncf(float a, float l) {\r
  return floor(a * l) / l;\r
}\r
\r
float n1rand(vec2 n) {\r
  float t = fract(iTime);\r
  float nrnd0 = nrand(n + 0.07 * t);\r
  return nrnd0;\r
}\r
float n2rand(vec2 n) {\r
  float t = fract(iTime);\r
  float nrnd0 = nrand(n + 0.07 * t);\r
  float nrnd1 = nrand(n + 0.11 * t);\r
  return (nrnd0 + nrnd1) / 2.0;\r
}\r
float n3rand(vec2 n) {\r
  float t = fract(iTime);\r
  float nrnd0 = nrand(n + 0.07 * t);\r
  float nrnd1 = nrand(n + 0.11 * t);\r
  float nrnd2 = nrand(n + 0.13 * t);\r
  return (nrnd0 + nrnd1 + nrnd2) / 3.0;\r
}\r
float n4rand(vec2 n) {\r
  float t = fract(iTime);\r
  float nrnd0 = nrand(n + 0.07 * t);\r
  float nrnd1 = nrand(n + 0.11 * t);\r
  float nrnd2 = nrand(n + 0.13 * t);\r
  float nrnd3 = nrand(n + 0.17 * t);\r
  return (nrnd0 + nrnd1 + nrnd2 + nrnd3) / 4.0;\r
}\r
\r
float n8rand(vec2 n) {\r
  float t = fract(iTime);\r
  float nrnd0 = nrand(n + 0.07 * t);\r
  float nrnd1 = nrand(n + 0.11 * t);\r
  float nrnd2 = nrand(n + 0.13 * t);\r
  float nrnd3 = nrand(n + 0.17 * t);\r
\r
  float nrnd4 = nrand(n + 0.19 * t);\r
  float nrnd5 = nrand(n + 0.23 * t);\r
  float nrnd6 = nrand(n + 0.29 * t);\r
  float nrnd7 = nrand(n + 0.31 * t);\r
\r
  return (nrnd0 + nrnd1 + nrnd2 + nrnd3 + nrnd4 + nrnd5 + nrnd6 + nrnd7) / 8.0;\r
}\r
\r
\r
\r
\r
float random(float x) {\r
  float y = fract(sin(x) * 100000.0);\r
  return y;\r
}\r
\r
\r
// float trueRandom(float x, vec2 uv){\r
//   float y = random(x) * random(x);\r
//   y = sqrt(random(x));\r
//   y = pow(random(x), 5.);\r
// // 二维特殊处理方式\r
//   return fract(52.9829189f * frac(uv.x * 0.06711056f + uv.y * 0.00583715f));\r
// }\r
//随机数\r
uint m_u = uint(501200000);\r
uint m_v = uint(222400000);\r
\r
uint GetUintCore(inout uint u, inout uint v) {\r
  v = uint(36969) * (v & uint(65535)) + (v >> 16);\r
  u = uint(18000) * (u & uint(65535)) + (u >> 16);\r
  return (v << 16) + u;\r
}\r
\r
float GetUniformCore(inout uint u, inout uint v) {\r
  uint z = GetUintCore(u, v);\r
\r
  return float(z) / float(uint(4294967295));\r
}\r
\r
float GetUniform() {\r
  return GetUniformCore(m_u, m_v);\r
}\r
\r
uint GetUint() {\r
  return GetUintCore(m_u, m_v);\r
}\r
\r
float rand() {\r
  return GetUniform();\r
}\r
\r
vec2 rand2() {\r
  return vec2(rand(), rand());\r
}\r
\r
vec3 rand3() {\r
  return vec3(rand(), rand(), rand());\r
}\r
\r
vec4 rand4() {\r
  return vec4(rand(), rand(), rand(), rand());\r
}\r
\r
\r
\r
in vec2 VertexIDout;\r
\r
// we need to declare an output for the fragment shader\r
out vec4 outColor;\r
\r
\r
struct ray {\r
  vec3 orig;\r
  vec3 dir;\r
};\r
\r
struct hit_record {\r
  vec3 p;\r
  vec3 normal;\r
  float t;\r
  bool front_face;\r
};\r
\r
void set_face_normal(out hit_record rec, ray r, out vec3 outward_normal) {\r
  rec.front_face = dot(r.dir, outward_normal) < 0.0f;\r
  rec.normal = rec.front_face ? outward_normal : -outward_normal;\r
}\r
\r
vec3 ray_at(float t, ray r) {\r
  return r.orig + t * r.dir;\r
}\r
\r
struct sphere {\r
  vec3 center;\r
  float radius;\r
};\r
\r
bool hit_sphere(sphere sphere, float t_min, float t_max,out ray r ,inout hit_record hitRecord) {\r
  vec3 oc = r.orig - sphere.center;\r
\r
  float a = dot(r.dir, r.dir);\r
  float b = 2.0 * dot(oc, r.dir);\r
  float c = dot(oc, oc) - sphere.radius * sphere.radius;\r
\r
  float delta = b * b - 4.0f * a * c;\r
\r
  if(delta > 0.0) {\r
    float temp = (-b - sqrt(delta)) / (2.0 * a);\r
    if(temp < t_max && temp > t_min) {\r
      hitRecord.t = temp;\r
      hitRecord.p = ray_at(hitRecord.t,r);\r
      hitRecord.normal = (hitRecord.p - sphere.center) / sphere.radius;\r
\r
      return true;\r
    }\r
\r
    temp = (-b + sqrt(delta)) / (2.0 * a);\r
    if(temp < t_max && temp > t_min) {\r
      hitRecord.t = temp;\r
      hitRecord.p = ray_at(hitRecord.t, r);\r
      hitRecord.normal = (hitRecord.p - sphere.center) / sphere.radius;\r
\r
      return true;\r
    }\r
  }\r
\r
  return false;\r
}\r
\r
\r
bool hit_sphere1(sphere sphere, float t_min, float t_max, out ray r, out hit_record rec) {\r
  vec3 center = sphere.center;\r
  float radius = sphere.radius;\r
\r
  vec3 oc = r.orig - center;\r
  float a = length(r.dir) * length(r.dir);\r
  float half_b = dot(oc, r.dir);\r
  float c = pow(length(oc), 2.0f) - radius * radius;\r
\r
  float discriminant = half_b * half_b - a * c;\r
  if(discriminant < 0.0f)\r
    return false;\r
  float sqrtd = sqrt(discriminant);\r
\r
  float root = (-half_b - sqrtd) / a;\r
  if(root < t_min || t_max < root) {\r
    root = (-half_b + sqrtd) / a;\r
    if(root < t_min || t_max < root)\r
      return false;\r
  }\r
\r
  rec.t = root;\r
  rec.p = ray_at(rec.t, r);\r
  rec.normal = (rec.p - center) / radius;\r
\r
  vec3 outward_normal = (rec.p - center) / radius;\r
  set_face_normal(rec, r, outward_normal);\r
\r
  return true;\r
}\r
\r
float random(vec2 uv) {\r
  float random01 = n8rand(uv);\r
  float random02 = n8rand(uv);\r
  float random03 = n8rand(vec2(random01, random02));\r
  float random04 = n8rand(vec2(random03, random02));\r
  return random04;\r
}\r
\r
vec2 fragPosition;\r
float seed;\r
\r
vec3 random_in_unit_sphere() {\r
  vec3 rand = hash32(gl_FragCoord.xy * seed * iTime);\r
  float phi = 2.0 * PI * rand.x;\r
  float cosTheta = 2.0 * rand.y - 1.0;\r
  float u = rand.z;\r
\r
  float theta = acos(cosTheta);\r
  float r = pow(u, 1.0 / 3.0);\r
\r
  float x = r * sin(theta) * cos(phi);\r
  float y = r * sin(theta) * sin(phi);\r
  float z = r * cos(theta);\r
\r
  return vec3(x, y, z);\r
}\r
\r
sphere sphereList[2];\r
\r
\r
bool hitWorld(ray r ,inout hit_record rec) {\r
  hit_record tempRec;\r
  bool hitanything = false;\r
  \r
\r
  // hitted\r
  for(int i = 0; i < sphereList.length(); i++) {\r
    if(hit_sphere(sphereList[i], 0.001f, 100000.0, r, tempRec)) {\r
      rec = tempRec;\r
      hitanything = true;\r
      break;\r
    }\r
  }\r
\r
  return hitanything;\r
}\r
\r
vec3 RayTrace(ray r, int depth) {\r
  depth += 1;\r
  hit_record hitRecord;\r
\r
  vec3 bgColor = vec3(0.0f);//背景颜色\r
\r
\r
  vec3 objColor = vec3(1.0);//用于累成，记录光线击中的所有物体的叠加颜色\r
\r
	//散射次数越多，光越暗，在物体与物体的接触面处容易发生多次散射，形成阴影\r
	//光线散射次数\r
  while(depth > 0) {\r
    depth--;\r
\r
		//判断是否击中世界中的物体，如果击中，获得最近的那个物体的信息\r
    if(hitWorld(r, hitRecord)) {\r
      vec3 attenuation = vec3(0.1, 0.7, 0.7);//衰减值，也是物体的颜色\r
\r
      ray scatterRay;//散射光线\r
			//计算出散射光线方向以及获得该物体的颜色\r
      // if(hitRecord.materialType == MAT_LAMBERTIAN) {\r
      //   LambertianScatter(lambertMaterials[hitRecord.materialPtr], ray, hitRecord, scatterRay, attenuation);\r
      // }\r
      scatterRay.orig = hitRecord.p;\r
      scatterRay.dir = hitRecord.normal + random_in_unit_sphere();\r
      // scatterRay.dir = hitRecord.normal;\r
\r
      r = scatterRay;//将散射光线作为新的光线\r
      objColor *= attenuation;//光源衰减，相当于是各个物体颜色的累乘\r
    }\r
\r
    // 获取颜色的唯一途径\r
		// 如果没有击中任何物体则退出循环，并获得此时的环境光颜色\r
    else {\r
      vec3 dir = normalize(r.dir);\r
      float t = 0.5 * (dir.y + 1.0f);\r
      bgColor = (1.0 - t) * vec3(1.0, 1.0, 1.0) + t * vec3(0.5, 0.7, 1.0);\r
      // return vec3(1.0f,0.0f,0.0f);\r
      return objColor*bgColor;\r
    }\r
  }\r
\r
  // 弹射超过阈值，返回黑色\r
  return vec3(0.0);\r
}\r
\r
\r
vec3 GammaCorrection(vec3 c) {\r
  return pow(c, vec3(1.0 / 2.2));\r
}\r
\r
void main() {\r
\r
  const float aspect_ratio = 1.75f;\r
  const int image_width = 720;\r
  const int image_height = int(float(image_width) / aspect_ratio);\r
\r
  float viewport_height = 2.0;\r
  float viewport_width = aspect_ratio * viewport_height;\r
  float focal_length = 1.0/1.75f;\r
\r
  vec3 origin = vec3(0, 0, 0);\r
  vec3 horizontal = vec3(viewport_width, 0, 0);\r
  vec3 vertical = vec3(0, viewport_height, 0);\r
  vec3 lower_left_corner = origin - horizontal / 2.0f - vertical / 2.0f - vec3(0, 0, focal_length);\r
\r
  fragPosition = gl_FragCoord.xy / vec2(1280.0f, 720.0f);\r
  // m_v -= uint();\r
\r
  // float u = float(i) / (image_width - 1);\r
  // float v = double(j) / (image_height - 1);\r
\r
  sphereList[0].center = vec3(0, 0, -1);\r
  sphereList[0].radius = 0.5f;\r
\r
  sphereList[1].center = vec3(0, -50.5, -1);\r
  sphereList[1].radius = 50.0f;\r
\r
  outColor.xyz = vec3(0);\r
  int sampler = 2;\r
  for(int i = 0; i < sampler; i++) {\r
    seed = float(i+1);\r
    // vec2 virtualPosition = (gl_FragCoord.xy + rand2())/vec2(1280.0f, 720.0f);\r
    vec2 virtualPosition = (gl_FragCoord.xy + hash22(vec2(seed*iTime)))/vec2(1280.0f, 720.0f);\r
    ray r;\r
    r.orig = vec3(0.0,0.0,0.45*sin(iTime));\r
    // r.dir = lower_left_corner +(fragPosition.x+ rand()) * horizontal + (fragPosition.y+rand()) * vertical - origin;\r
    r.dir = lower_left_corner +(virtualPosition.x) * horizontal + (virtualPosition.y) * vertical - origin;\r
\r
    outColor.xyz += RayTrace(r, 10);\r
  }\r
\r
  outColor.xyz /= float(sampler);\r
  outColor.w = 1.0f;\r
  outColor.xyz = GammaCorrection(outColor.xyz);\r
\r
}\r
`,Vi=`#version 300 es\r
\r
// an attribute is an input (in) to a vertex shader.\r
// It will receive data from a buffer\r
in vec4 a_position;\r
\r
out vec2 VertexIDout;\r
vec2 points[6];\r
\r
\r
// all shaders have a main function\r
void main() {\r
  points[0] = vec2(-1.0f,-1.0f);\r
  points[1] = vec2(1.0f,1.0f);\r
  points[2] = vec2(-1.0f,1.0f);\r
  points[3] = vec2(-1.0f,-1.0f);\r
  points[4] = vec2(1.0f,-1.0f);\r
  points[5] = vec2(1.0f,1.0f);\r
  // gl_Position is a special variable a vertex shader\r
  // is responsible for setting\r
  float x;\r
  float y;\r
  x = mod(float(gl_VertexID), 2.0f) * 2.0f - 1.0f;\r
  y = 1.0f - 2.0f * floor(float(gl_VertexID) / 2.0f);\r
  VertexIDout = vec2(x, y);\r
  vec4 tmp = a_position+vec4(1.0f);\r
  VertexIDout = points[gl_VertexID];\r
  gl_Position = vec4(points[gl_VertexID], a_position.x*0.1f, 1.0f);\r
}`;function _r(e,t,n){var r=e.createShader(t);e.shaderSource(r,n),e.compileShader(r);var o=e.getShaderParameter(r,e.COMPILE_STATUS);if(o)return r;console.log(e.getShaderInfoLog(r)),e.deleteShader(r)}function ki(e,t,n){var r=e.createProgram();e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r);var o=e.getProgramParameter(r,e.LINK_STATUS);if(o)return r;console.log(e.getProgramInfoLog(r)),e.deleteProgram(r)}const Yi=_t("h2",{id:"fps"},"fps",-1),Ji=_t("canvas",{id:"GLCanvas",class:"gl"},null,-1),Xi=_t("h1",{id:"byid",class:"byclass"},"Hello",-1),Zi=[Yi,Ji,Xi];let B;function Qi(){let e=document.getElementById("GLCanvas");if(console.log(typeof e),B=e.getContext("webgl2"),!B)return;var t=_r(B,B.VERTEX_SHADER,Vi),n=_r(B,B.FRAGMENT_SHADER,qi);console.log(B);var r=ki(B,t,n),o=B.getAttribLocation(r,"a_position"),s=B.createBuffer();B.bindBuffer(B.ARRAY_BUFFER,s);var i=[0,0,0,.5,.7,0];B.bufferData(B.ARRAY_BUFFER,new Float32Array(i),B.STATIC_DRAW);var c=B.createVertexArray();B.bindVertexArray(c),B.enableVertexAttribArray(o);var a=2,d=B.FLOAT,g=!1,x=0,y=0;B.vertexAttribPointer(o,a,d,g,x,y),e.height=720,e.width=1280,e.style.height="720px",e.style.width="1280px",B.viewport(0,0,e.width,e.height);let I=Date.now(),N=0,A=document.querySelector("title"),W=document.querySelector("#fps"),U=A.textContent;setInterval(()=>{W.innerHTML=U+" "+(1e3/N).toFixed(2)+" fps"},500);let oe=B.getUniformLocation(r,"iTime"),P=Date.now();function K(){N=Date.now()-I,I=Date.now(),B.uniform1f(oe,(I-P)/1e3),B.clearColor(0,0,0,0),B.clear(B.COLOR_BUFFER_BIT),B.useProgram(r),B.bindVertexArray(c);var J=B.TRIANGLES,Oe=0,me=6;B.drawArrays(J,Oe,me),requestAnimationFrame(()=>{K()})}K()}const Gi={name:"MyApp",data(){return{username:"哇哈哈"}},mounted(){Qi()}},el=As({...Gi,setup(e){return(t,n)=>(ti(),oi("div",null,Zi))}});$i(el).mount("#app");
