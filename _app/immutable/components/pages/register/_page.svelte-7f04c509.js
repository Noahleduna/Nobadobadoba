import{S as ue,i as fe,s as pe,k as p,q as b,a as N,e as ne,l as _,m as P,r as v,h as i,c as L,n as u,b as T,D as t,N as D,O as $,P as _e,B as x,Q as me,u as he}from"../../../chunks/index-2bb69101.js";function de(y){let a,m,o,e,f,s,n,h;return{c(){a=p("h3"),m=b("Please fill out the form"),o=N(),e=p("p"),f=b("Have an account? "),s=p("a"),n=b("Log in"),h=b(">"),this.h()},l(d){a=_(d,"H3",{});var E=P(a);m=v(E,"Please fill out the form"),E.forEach(i),o=L(d),e=_(d,"P",{});var A=P(e);f=v(A,"Have an account? "),s=_(A,"A",{href:!0});var F=P(s);n=v(F,"Log in"),F.forEach(i),h=v(A,">"),A.forEach(i),this.h()},h(){u(s,"href","/login")},m(d,E){T(d,a,E),t(a,m),T(d,o,E),T(d,e,E),t(e,f),t(e,s),t(s,n),t(e,h)},p:x,d(d){d&&i(a),d&&i(o),d&&i(e)}}}function ce(y){let a,m,o=y[0]+" "+y[1],e,f;return{c(){a=p("h3"),m=b("Thank you "),e=b(o),f=b(" for registering")},l(s){a=_(s,"H3",{});var n=P(a);m=v(n,"Thank you "),e=v(n,o),f=v(n," for registering"),n.forEach(i)},m(s,n){T(s,a,n),t(a,m),t(a,e),t(a,f)},p(s,n){n&3&&o!==(o=s[0]+" "+s[1])&&he(e,o)},d(s){s&&i(a)}}}function be(y){let a,m,o,e,f,s,n,h,d,E,A,F,B,M,U,Q,j,O,z,w,G,J,S,K,H,V,W,g,X,I,Y,q,R,Z,ee;function te(l,c){return l[2]?ce:de}let C=te(y),k=C(y);return{c(){a=p("h1"),m=b("Registration Form"),o=N(),e=p("form"),f=p("label"),s=b("First Name:"),n=N(),h=p("input"),d=N(),E=p("label"),A=b("Last Name:"),F=N(),B=p("input"),M=N(),U=p("label"),Q=b("Email:"),j=N(),O=p("input"),z=N(),w=p("label"),G=b("Password:"),J=N(),S=p("input"),K=N(),H=p("label"),V=b("Birth date"),W=N(),g=p("input"),X=N(),I=p("button"),Y=b("Register"),q=N(),k.c(),R=ne(),this.h()},l(l){a=_(l,"H1",{});var c=P(a);m=v(c,"Registration Form"),c.forEach(i),o=L(l),e=_(l,"FORM",{class:!0});var r=P(e);f=_(r,"LABEL",{for:!0});var le=P(f);s=v(le,"First Name:"),le.forEach(i),n=L(r),h=_(r,"INPUT",{id:!0,type:!0}),d=L(r),E=_(r,"LABEL",{for:!0});var ae=P(E);A=v(ae,"Last Name:"),ae.forEach(i),F=L(r),B=_(r,"INPUT",{id:!0,type:!0}),M=L(r),U=_(r,"LABEL",{for:!0});var re=P(U);Q=v(re,"Email:"),re.forEach(i),j=L(r),O=_(r,"INPUT",{id:!0,type:!0}),z=L(r),w=_(r,"LABEL",{for:!0});var se=P(w);G=v(se,"Password:"),se.forEach(i),J=L(r),S=_(r,"INPUT",{id:!0,type:!0}),K=L(r),H=_(r,"LABEL",{for:!0});var ie=P(H);V=v(ie,"Birth date"),ie.forEach(i),W=L(r),g=_(r,"INPUT",{id:!0,type:!0}),X=L(r),I=_(r,"BUTTON",{type:!0});var oe=P(I);Y=v(oe,"Register"),oe.forEach(i),r.forEach(i),q=L(l),k.l(l),R=ne(),this.h()},h(){u(f,"for","firstName"),u(h,"id","firstName"),u(h,"type","text"),u(E,"for","lastName"),u(B,"id","lastName"),u(B,"type","text"),u(U,"for","email"),u(O,"id","email"),u(O,"type","email"),u(w,"for","password"),u(S,"id","password"),u(S,"type","password"),u(H,"for","birthdate"),u(g,"id","birthdate"),u(g,"type","date"),u(I,"type","submit"),u(e,"class","svelte-1rnyc9c")},m(l,c){T(l,a,c),t(a,m),T(l,o,c),T(l,e,c),t(e,f),t(f,s),t(e,n),t(e,h),D(h,y[0]),t(e,d),t(e,E),t(E,A),t(e,F),t(e,B),D(B,y[1]),t(e,M),t(e,U),t(U,Q),t(e,j),t(e,O),t(e,z),t(e,w),t(w,G),t(e,J),t(e,S),t(e,K),t(e,H),t(H,V),t(e,W),t(e,g),t(e,X),t(e,I),t(I,Y),T(l,q,c),k.m(l,c),T(l,R,c),Z||(ee=[$(h,"input",y[4]),$(B,"input",y[5]),$(e,"submit",_e(y[3]))],Z=!0)},p(l,[c]){c&1&&h.value!==l[0]&&D(h,l[0]),c&2&&B.value!==l[1]&&D(B,l[1]),C===(C=te(l))&&k?k.p(l,c):(k.d(1),k=C(l),k&&(k.c(),k.m(R.parentNode,R)))},i:x,o:x,d(l){l&&i(a),l&&i(o),l&&i(e),l&&i(q),k.d(l),l&&i(R),Z=!1,me(ee)}}}function ve(y,a,m){let o="",e="",f=!1;function s(){m(2,f=!0),console.log("Form submitted!")}function n(){o=this.value,m(0,o)}function h(){e=this.value,m(1,e)}return[o,e,f,s,n,h]}class Ee extends ue{constructor(a){super(),fe(this,a,ve,be,pe,{})}}export{Ee as default};
