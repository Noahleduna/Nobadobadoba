function x(){}const V=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function I(){return Object.create(null)}function $(t){t.forEach(X)}function k(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Ft(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(gt(e,n))}function Wt(t,e,n,i){if(t){const s=Y(t,e,n,i);return t[0](s)}}function Y(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function It(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)l[u]=e.dirty[u]|s[u];return l}return e.dirty|s}return e.dirty}function Jt(t,e,n,i,s,l){if(s){const r=Y(e,n,i,l);t.p(r,s)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t){return t??""}function Ut(t,e,n){return t.set(n),e}function Vt(t){return t&&k(t.destroy)?t.destroy:x}const Z=typeof window<"u";let tt=Z?()=>window.performance.now():()=>Date.now(),z=Z?t=>requestAnimationFrame(t):x;const b=new Set;function et(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&z(et)}function nt(t){let e;return b.size===0&&z(et),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let R=!1;function xt(){R=!0}function bt(){R=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=o?s+1:$t(1,s,_=>e[n[_]].claim_order,o))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,s=Math.max(a,s)}const l=[],r=[];let u=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);u>=c;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);l.reverse(),r.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<r.length;c++){for(;o<l.length&&r[c].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;t.insertBefore(r[c],f)}}function vt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=F("style");return Nt(it(t),e),e.sheet}function Nt(t,e){return vt(t.head||t,e),e.sheet}function Tt(t,e){if(R){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function At(t,e,n){t.insertBefore(e,n||null)}function kt(t,e,n){R&&!n?Tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function st(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Yt(){return G(" ")}function Zt(){return G("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ee(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,s=!1){rt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const c=n(u);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const c=n(u);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ot(t,e,n,i){return lt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||l.push(u.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ie(t,e,n){return ot(t,e,n,F)}function se(t,e,n){return ot(t,e,n,st)}function Ct(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function re(t){return Ct(t," ")}function J(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function le(t,e){const n=J(t,"HTML_TAG_START",0),i=J(t,"HTML_TAG_END",n);if(n===i)return new K(void 0,e);rt(t);const s=t.splice(n,i-n+1);N(s[0]),N(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(l,e)}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e){t.value=e??""}function ue(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ae(t,e,n){t.classList[n?"add":"remove"](e)}function Dt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function fe(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Ht{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=st(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class K extends Ht{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}}function _e(t,e){return new t(e)}const M=new Map;let j=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:Et(e),rules:{}};return M.set(t,n),n}function ct(t,e,n,i,s,l,r,u=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const p=e+(n-e)*l(m);o+=m*100+`%{${r(p,1-p)}}
`}const f=o+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Mt(f)}_${u}`,_=it(t),{stylesheet:d,rules:h}=M.get(_)||jt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${s}ms 1 both`,j+=1,a}function q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),j-=s,j||Lt())}function Lt(){z(()=>{j||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),M.clear())})}let T;function E(t){T=t}function ut(){if(!T)throw new Error("Function called outside component initialization");return T}function de(t){ut().$$.on_mount.push(t)}function he(t){ut().$$.after_update.push(t)}function me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const v=[],Q=[],D=[],U=[],at=Promise.resolve();let B=!1;function ft(){B||(B=!0,at.then(_t))}function pe(){return ft(),at}function A(t){D.push(t)}const P=new Set;let C=0;function _t(){const t=T;do{for(;C<v.length;){const e=v[C];C++,E(e),Rt(e.$$)}for(E(null),v.length=0,C=0;Q.length;)Q.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];P.has(n)||(P.add(n),n())}D.length=0}while(v.length);for(;U.length;)U.pop()();B=!1,P.clear(),E(t)}function Rt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let w;function dt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function L(t,e,n){t.dispatchEvent(Dt(`${e?"intro":"outro"}${n}`))}const H=new Set;let g;function ye(){g={r:0,c:[],p:g}}function ge(){g.r||$(g.c),g=g.p}function Ot(t,e){t&&t.i&&(H.delete(t),t.i(e))}function xe(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),g.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ht={duration:0};function be(t,e,n){const i={direction:"in"};let s=e(t,n,i),l=!1,r,u,c=0;function o(){r&&q(t,r)}function f(){const{delay:_=0,duration:d=300,easing:h=V,tick:y=x,css:m}=s||ht;m&&(r=ct(t,0,1,d,_,h,m,c++)),y(0,1);const p=tt()+_,mt=p+d;u&&u.abort(),l=!0,A(()=>L(t,!0,"start")),u=nt(O=>{if(l){if(O>=mt)return y(1,0),L(t,!0,"end"),o(),l=!1;if(O>=p){const W=h((O-p)/d);y(W,1-W)}}return l})}let a=!1;return{start(){a||(a=!0,q(t),k(s)?(s=s(i),dt().then(f)):f())},invalidate(){a=!1},end(){l&&(o(),l=!1)}}}function $e(t,e,n){const i={direction:"out"};let s=e(t,n,i),l=!0,r;const u=g;u.r+=1;function c(){const{delay:o=0,duration:f=300,easing:a=V,tick:_=x,css:d}=s||ht;d&&(r=ct(t,1,0,f,o,a,d));const h=tt()+o,y=h+f;A(()=>L(t,!1,"start")),nt(m=>{if(l){if(m>=y)return _(0,1),L(t,!1,"end"),--u.r||$(u.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return l})}return k(s)?dt().then(()=>{s=s(i),c()}):c(),{end(o){o&&s.tick&&s.tick(1,0),l&&(r&&q(t,r),l=!1)}}}const we=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ve(t){t&&t.c()}function Ee(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||A(()=>{const r=t.$$.on_mount.map(X).filter(k);t.$$.on_destroy?t.$$.on_destroy.push(...r):$(r),t.$$.on_mount=[]}),l.forEach(A)}function qt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,i,s,l,r,u=[-1]){const c=T;E(t);const o=t.$$={fragment:null,ctx:[],props:l,update:x,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};r&&r(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return o.ctx&&s(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&Bt(t,a)),_}):[],o.update(),f=!0,$(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){xt();const a=St(e.target);o.fragment&&o.fragment.l(a),a.forEach(N)}else o.fragment&&o.fragment.c();e.intro&&Ot(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),bt(),_t()}E(c)}class Te{$destroy(){qt(this,1),this.$destroy=x}$on(e,n){if(!k(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ut as $,pe as A,x as B,Wt as C,Jt as D,Kt as E,It as F,Tt as G,Gt as H,fe as I,Xt as J,st as K,se as L,te as M,$ as N,me as O,Vt as P,we as Q,Qt as R,Te as S,ce as T,ee as U,Ft as V,ae as W,A as X,be as Y,$e as Z,V as _,Yt as a,K as a0,le as a1,kt as b,re as c,ge as d,Zt as e,Ot as f,ye as g,N as h,Ne as i,he as j,F as k,ie as l,St as m,ne as n,de as o,ue as p,G as q,Ct as r,zt as s,xe as t,oe as u,_e as v,ve as w,Ee as x,Pt as y,qt as z};
