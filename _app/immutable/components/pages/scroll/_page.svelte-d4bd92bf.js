import{S as W,i as j,s as z,W as Q,k as w,a as V,l as b,m as P,h as v,c as A,n as M,b as S,D as d,Q as O,t as X,d as F,f as B,J as H,T as L,p as C,U,g as R,q as Y,r as T,u as G,B as J,X as Z,Y as $}from"../../../chunks/index-89dc8d39.js";import{f as x,a as ee}from"../../../chunks/index-1735c345.js";function K(s,e,o){const a=s.slice();return a[9]=e[o],a}function N(s){let e,o;return{c(){e=w("img"),this.h()},l(a){e=b(a,"IMG",{style:!0,src:!0,alt:!0,class:!0}),this.h()},h(){C(e,"transform","translate(0, "+(s[1]<2?s[1]*s[9]:-s[1]*s[9]/(s[4].length-1))+"px)"),U(e.src,o=`https://www.devsamples.com/parallax-layer${s[9]}.png`)||M(e,"src",o),M(e,"alt",`parallax layer ${s[9]}`),M(e,"class","svelte-1fk8y27")},m(a,i){S(a,e,i)},p(a,i){i&2&&C(e,"transform","translate(0, "+(a[1]<2?a[1]*a[9]:-a[1]*a[9]/(a[4].length-1))+"px)")},d(a){a&&v(e)}}}function le(s){let e,o,a,i,u,_,n;return{c(){e=w("p"),o=Y("You have scrolled "),a=Y(s[1]),i=Y(" pixels"),u=V(),_=w("p"),n=Y(s[3])},l(l){e=b(l,"P",{});var t=P(e);o=T(t,"You have scrolled "),a=T(t,s[1]),i=T(t," pixels"),t.forEach(v),u=A(l),_=b(l,"P",{});var p=P(_);n=T(p,s[3]),p.forEach(v)},m(l,t){S(l,e,t),d(e,o),d(e,a),d(e,i),S(l,u,t),S(l,_,t),d(_,n)},p(l,t){t&2&&G(a,l[1]),t&8&&G(n,l[3])},i:J,o:J,d(l){l&&v(e),l&&v(u),l&&v(_)}}}function te(s){let e,o,a,i,u,_,n,l,t,p,I,E,k,f;return{c(){e=w("div"),o=w("p"),a=Y("You have scrolled "),i=Y(s[1]),u=Y(" pixels"),_=V(),n=w("p"),l=Y(s[3]),t=V(),p=w("img"),this.h()},l(m){e=b(m,"DIV",{class:!0});var c=P(e);o=b(c,"P",{});var D=P(o);a=T(D,"You have scrolled "),i=T(D,s[1]),u=T(D," pixels"),D.forEach(v),_=A(c),n=b(c,"P",{});var r=P(n);l=T(r,s[3]),r.forEach(v),t=A(c),p=b(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(v),this.h()},h(){U(p.src,I="https://www.onlygfx.com/wp-content/uploads/2021/02/6-pixel-heart-1.png")||M(p,"src",I),M(p,"alt","heart"),M(p,"class","svelte-1fk8y27"),M(e,"class","story svelte-1fk8y27")},m(m,c){S(m,e,c),d(e,o),d(o,a),d(o,i),d(o,u),d(e,_),d(e,n),d(n,l),d(e,t),d(e,p),f=!0},p(m,c){(!f||c&2)&&G(i,m[1]),(!f||c&8)&&G(l,m[3])},i(m){f||(Q(()=>{k&&k.end(1),E=Z(e,x,{y:200,duration:2e3}),E.start()}),f=!0)},o(m){E&&E.invalidate(),k=$(e,ee,{}),f=!1},d(m){m&&v(e),m&&k&&k.end()}}}function se(s){let e=!1,o=()=>{e=!1},a,i,u,_,n,l,t,p,I,E;Q(s[6]);let k=s[4],f=[];for(let r=0;r<k.length;r+=1)f[r]=N(K(s,k,r));const m=[te,le],c=[];function D(r,g){return r[2]&&r[0]>0?0:r[0]===0?1:-1}return~(l=D(s))&&(t=c[l]=m[l](s)),{c(){i=w("main"),u=w("div");for(let r=0;r<f.length;r+=1)f[r].c();_=V(),n=w("div"),t&&t.c(),this.h()},l(r){i=b(r,"MAIN",{class:!0});var g=P(i);u=b(g,"DIV",{class:!0});var y=P(u);for(let q=0;q<f.length;q+=1)f[q].l(y);y.forEach(v),_=A(g),n=b(g,"DIV",{class:!0});var h=P(n);t&&t.l(h),h.forEach(v),g.forEach(v),this.h()},h(){M(u,"class","container svelte-1fk8y27"),M(n,"class","text svelte-1fk8y27"),M(i,"class","svelte-1fk8y27")},m(r,g){S(r,i,g),d(i,u);for(let y=0;y<f.length;y+=1)f[y].m(u,null);d(i,_),d(i,n),~l&&c[l].m(n,null),p=!0,I||(E=[O(window,"scroll",s[5]),O(window,"scroll",()=>{e=!0,clearTimeout(a),a=setTimeout(o,100),s[6]()})],I=!0)},p(r,[g]){if(g&2&&!e&&(e=!0,clearTimeout(a),scrollTo(window.pageXOffset,r[1]),a=setTimeout(o,100)),g&18){k=r[4];let h;for(h=0;h<k.length;h+=1){const q=K(r,k,h);f[h]?f[h].p(q,g):(f[h]=N(q),f[h].c(),f[h].m(u,null))}for(;h<f.length;h+=1)f[h].d(1);f.length=k.length}let y=l;l=D(r),l===y?~l&&c[l].p(r,g):(t&&(R(),X(c[y],1,1,()=>{c[y]=null}),F()),~l?(t=c[l],t?t.p(r,g):(t=c[l]=m[l](r),t.c()),B(t,1),t.m(n,null)):t=null)},i(r){p||(B(t),p=!0)},o(r){X(t),p=!1},d(r){r&&v(i),H(f,r),~l&&c[l].d(),I=!1,L(E)}}}function ae(s,e,o){let a;const i=[0,1,2,3],u=["Keep scrolling...","More scrolling...","Almost there...","You did it!","You are done!"];let _=0,n=0,l=!0;const t=Math.floor(600/u.length);function p(){const E=n;o(0,n=Math.max(0,Math.floor(_/t))),o(2,l=n===E)}function I(){o(1,_=window.pageYOffset)}return s.$$.update=()=>{s.$$.dirty&1&&o(3,a=u[n])},[n,_,l,a,i,p,I]}class ie extends W{constructor(e){super(),j(this,e,ae,se,z,{})}}export{ie as default};
