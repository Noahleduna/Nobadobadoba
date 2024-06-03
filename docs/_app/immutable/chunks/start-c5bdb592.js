import{S as N,i as O,s as z,k as i,q as y,a as c,l as p,m as o,r as E,h as e,c as g,n as H,b as l,G as v,B as R}from"./index-3b0df29e.js";function A(L){let s,f,b,u,m,P,_,d,x,h,r,M=`<code class="language-undefined">&#123;#each games as game, i&#125;
    &lt;div class = &#39;game&#39;
        style = &#39;background-image: url(&#123;game.img&#125;);&#39;
        on:click=&#123;() =&gt; &#123; 
            game.pressed=true            
            startscreen=false
        &#125;&#125;
        on:keypress=&#123;() =&gt; &#123; game.pressed=true
        &#125;&#125;
    &gt;&lt;h3&gt;&#123;game.name&#125;&lt;/h3&gt;&lt;/div&gt;
    &#123;/each&#125;</code>`,j,k,w,S,n,B='<code class="language-undefined">&#123;#if startscreen&#125;</code>';return{c(){s=i("p"),f=i("strong"),b=y("Startskärm"),u=c(),m=i("p"),P=y(`Senaste lektionerna har jag arbetat med att skapa en startskärm
till mitt onlinecasino där jag vill ha en logga och bilder till
olika knappar som leder till olika spel. För att skapa knapparna
till de olika spelen använde jag mig av ett each-kommando för att göra
det lättare att skapa nya framtida spel och css-klasser.`),_=c(),d=i("p"),x=y("."),h=c(),r=i("pre"),j=c(),k=i("p"),w=y(`Sen har jag även gjort så att genom att klicka på ett spel så tar det
dig vidare till en ny sida med hjälp av ett if-kommando`),S=c(),n=i("pre"),this.h()},l(a){s=p(a,"P",{});var t=o(s);f=p(t,"STRONG",{});var T=o(f);b=E(T,"Startskärm"),T.forEach(e),t.forEach(e),u=g(a),m=p(a,"P",{});var q=o(m);P=E(q,`Senaste lektionerna har jag arbetat med att skapa en startskärm
till mitt onlinecasino där jag vill ha en logga och bilder till
olika knappar som leder till olika spel. För att skapa knapparna
till de olika spelen använde jag mig av ett each-kommando för att göra
det lättare att skapa nya framtida spel och css-klasser.`),q.forEach(e),_=g(a),d=p(a,"P",{});var F=o(d);x=E(F,"."),F.forEach(e),h=g(a),r=p(a,"PRE",{class:!0});var C=o(r);C.forEach(e),j=g(a),k=p(a,"P",{});var G=o(k);w=E(G,`Sen har jag även gjort så att genom att klicka på ett spel så tar det
dig vidare till en ny sida med hjälp av ett if-kommando`),G.forEach(e),S=g(a),n=p(a,"PRE",{class:!0});var I=o(n);I.forEach(e),this.h()},h(){H(r,"class","language-undefined"),H(n,"class","language-undefined")},m(a,t){l(a,s,t),v(s,f),v(f,b),l(a,u,t),l(a,m,t),v(m,P),l(a,_,t),l(a,d,t),v(d,x),l(a,h,t),l(a,r,t),r.innerHTML=M,l(a,j,t),l(a,k,t),v(k,w),l(a,S,t),l(a,n,t),n.innerHTML=B},p:R,i:R,o:R,d(a){a&&e(s),a&&e(u),a&&e(m),a&&e(_),a&&e(d),a&&e(h),a&&e(r),a&&e(j),a&&e(k),a&&e(S),a&&e(n)}}}const J={title:"Inlägg 1",date:"2024-05-06",keywords:["Startskärm"]};class K extends N{constructor(s){super(),O(this,s,null,A,z,{})}}export{K as default,J as metadata};
