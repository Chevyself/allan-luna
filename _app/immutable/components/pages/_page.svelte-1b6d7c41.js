import{S as Q,i as U,s as X,k,l as w,m as b,h as d,n as h,b as y,B as O,G as _,q as V,a as j,r as L,c as D,u as C,I as G,J as Z,p as x,f as B,d as $,t as T,K as ee,w as te,x as le,y as se,z as ae,g as ie}from"../../chunks/index-c49a57d5.js";import{c as q}from"../../chunks/shared-23917130.js";function re(r){let e,t;function a(l,o){return l[5]?ce:oe}let n=a(r),s=n(r);return{c(){e=k("div"),t=k("div"),s.c(),this.h()},l(l){e=w(l,"DIV",{class:!0});var o=b(e);t=w(o,"DIV",{class:!0});var c=b(t);s.l(c),c.forEach(d),o.forEach(d),this.h()},h(){h(t,"class","artwork align-self-center svelte-qiand6"),h(e,"class","artwork-wrapper view d-flex p-5 svelte-qiand6")},m(l,o){y(l,e,o),_(e,t),s.m(t,null)},p(l,o){n===(n=a(l))&&s?s.p(l,o):(s.d(1),s=n(l),s&&(s.c(),s.m(t,null)))},d(l){l&&d(e),s.d()}}}function ne(r){let e,t,a,n,s,l,o;return{c(){e=k("div"),t=k("div"),a=k("p"),n=V(r[0]),s=j(),l=k("p"),o=V(r[1]),this.h()},l(c){e=w(c,"DIV",{class:!0});var v=b(e);t=w(v,"DIV",{class:!0});var i=b(t);a=w(i,"P",{class:!0});var f=b(a);n=L(f,r[0]),f.forEach(d),s=D(i),l=w(i,"P",{class:!0});var E=b(l);o=L(E,r[1]),E.forEach(d),i.forEach(d),v.forEach(d),this.h()},h(){h(a,"class","h1"),h(l,"class","lead"),h(t,"class","container"),h(e,"class","d-flex flex-column justify-content-end h-100 p-5")},m(c,v){y(c,e,v),_(e,t),_(t,a),_(a,n),_(t,s),_(t,l),_(l,o)},p(c,v){v&1&&C(n,c[0]),v&2&&C(o,c[1])},d(c){c&&d(e)}}}function oe(r){let e,t,a,n,s,l,o,c,v;return{c(){e=k("div"),t=k("h2"),a=V(r[0]),n=j(),s=k("p"),l=V(r[1]),o=j(),c=k("img"),this.h()},l(i){e=w(i,"DIV",{class:!0});var f=b(e);t=w(f,"H2",{});var E=b(t);a=L(E,r[0]),E.forEach(d),n=D(f),s=w(f,"P",{});var u=b(s);l=L(u,r[1]),u.forEach(d),f.forEach(d),o=D(i),c=w(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){h(e,"class","artwork-text svelte-qiand6"),G(c.src,v=r[2])||h(c,"src",v),h(c,"alt",r[0]),h(c,"class","artwork-image svelte-qiand6")},m(i,f){y(i,e,f),_(e,t),_(t,a),_(e,n),_(e,s),_(s,l),y(i,o,f),y(i,c,f)},p(i,f){f&1&&C(a,i[0]),f&2&&C(l,i[1]),f&4&&!G(c.src,v=i[2])&&h(c,"src",v),f&1&&h(c,"alt",i[0])},d(i){i&&d(e),i&&d(o),i&&d(c)}}}function ce(r){let e,t,a,n,s,l,o,c,v;return{c(){e=k("img"),a=j(),n=k("div"),s=k("h2"),l=V(r[0]),o=j(),c=k("p"),v=V(r[1]),this.h()},l(i){e=w(i,"IMG",{src:!0,alt:!0,class:!0}),a=D(i),n=w(i,"DIV",{class:!0});var f=b(n);s=w(f,"H2",{});var E=b(s);l=L(E,r[0]),E.forEach(d),o=D(f),c=w(f,"P",{});var u=b(c);v=L(u,r[1]),u.forEach(d),f.forEach(d),this.h()},h(){G(e.src,t=r[2])||h(e,"src",t),h(e,"alt",r[0]),h(e,"class","artwork-image svelte-qiand6"),h(n,"class","artwork-text svelte-qiand6")},m(i,f){y(i,e,f),y(i,a,f),y(i,n,f),_(n,s),_(s,l),_(n,o),_(n,c),_(c,v)},p(i,f){f&4&&!G(e.src,t=i[2])&&h(e,"src",t),f&1&&h(e,"alt",i[0]),f&1&&C(l,i[0]),f&2&&C(v,i[1])},d(i){i&&d(e),i&&d(a),i&&d(n)}}}function fe(r){let e,t;function a(l,o){return l[4]?ne:re}let n=a(r),s=n(r);return{c(){e=k("section"),s.c(),this.h()},l(l){e=w(l,"SECTION",{id:!0,class:!0,style:!0});var o=b(e);s.l(o),o.forEach(d),this.h()},h(){h(e,"id",r[6]()),h(e,"class",t="view work "+(r[7]()+r[3])+" svelte-qiand6"),h(e,"style",r[8]())},m(l,o){y(l,e,o),s.m(e,null)},p(l,[o]){n===(n=a(l))&&s?s.p(l,o):(s.d(1),s=n(l),s&&(s.c(),s.m(e,null))),o&8&&t!==(t="view work "+(l[7]()+l[3])+" svelte-qiand6")&&h(e,"class",t)},i:O,o:O,d(l){l&&d(e),s.d()}}}function ue(r,e,t){let{name:a="Lorem Ipsum"}=e,{description:n="Lorem ipsum dolor sit amet, consectetur adipiscing elit."}=e,{image:s=`${q}/images/ph.jpg`}=e,{classes:l=""}=e,{full:o=!1}=e,{shadow:c=!1}=e,{left:v=!0}=e;const i=()=>a.toLowerCase().replace(" ","-"),f=()=>o?"":" blur ",E=()=>{let u=`url(${s})`;return o||(u=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${u}`),c&&(u=`linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%), ${u}`),`background: ${u}; background-size: cover; background-position: center; background-attachment: fixed;`};return r.$$set=u=>{"name"in u&&t(0,a=u.name),"description"in u&&t(1,n=u.description),"image"in u&&t(2,s=u.image),"classes"in u&&t(3,l=u.classes),"full"in u&&t(4,o=u.full),"shadow"in u&&t(9,c=u.shadow),"left"in u&&t(5,v=u.left)},[a,n,s,l,o,v,i,f,E,c]}class de extends Q{constructor(e){super(),U(this,e,ue,fe,X,{name:0,description:1,image:2,classes:3,full:4,shadow:9,left:5})}}function K(r,e,t){const a=r.slice();return a[1]=e[t],a}function F(r){let e,t;return e=new de({props:{name:r[1].name,description:r[1].description,image:r[1].image,classes:r[1].classes,full:r[1].full,shadow:r[1].shadow,left:r[1].left}}),{c(){te(e.$$.fragment)},l(a){le(e.$$.fragment,a)},m(a,n){se(e,a,n),t=!0},p:O,i(a){t||(B(e.$$.fragment,a),t=!0)},o(a){T(e.$$.fragment,a),t=!1},d(a){ae(e,a)}}}function he(r){let e,t,a,n,s,l,o,c,v,i,f,E,u,H,S=r[0],p=[];for(let m=0;m<S.length;m+=1)p[m]=F(K(r,S,m));const Y=m=>T(p[m],1,1,()=>{p[m]=null});return{c(){e=j(),t=k("div"),a=k("section"),n=k("div"),s=k("div"),l=k("div"),o=k("h1"),c=V("Retratos"),v=j(),i=k("h4"),f=V("Allan Luna"),E=j(),u=k("section");for(let m=0;m<p.length;m+=1)p[m].c();this.h()},l(m){Z("svelte-xcguyj",document.head).forEach(d),e=D(m),t=w(m,"DIV",{class:!0});var g=b(t);a=w(g,"SECTION",{id:!0,class:!0,style:!0});var P=b(a);n=w(P,"DIV",{id:!0,class:!0});var z=b(n);s=w(z,"DIV",{class:!0});var M=b(s);l=w(M,"DIV",{class:!0});var A=b(l);o=w(A,"H1",{});var R=b(o);c=L(R,"Retratos"),R.forEach(d),v=D(A),i=w(A,"H4",{class:!0});var W=b(i);f=L(W,"Allan Luna"),W.forEach(d),A.forEach(d),M.forEach(d),z.forEach(d),P.forEach(d),E=D(g),u=w(g,"SECTION",{id:!0});var J=b(u);for(let N=0;N<p.length;N+=1)p[N].l(J);J.forEach(d),g.forEach(d),this.h()},h(){document.title="Allan Luna",h(i,"class","display-4"),h(l,"class","col-12 col-md-6 offset-md-6 d-flex flex-column justify-content-center"),h(s,"class","row h-100"),h(n,"id","introduction"),h(n,"class","container-fluid h-100 p-5 svelte-1gpd0wu"),h(a,"id","landing"),h(a,"class","view svelte-1gpd0wu"),x(a,"background-image","url("+q+"/images/allan.png)"),h(u,"id","works"),h(t,"class","view-parent svelte-1gpd0wu")},m(m,I){y(m,e,I),y(m,t,I),_(t,a),_(a,n),_(n,s),_(s,l),_(l,o),_(o,c),_(l,v),_(l,i),_(i,f),_(t,E),_(t,u);for(let g=0;g<p.length;g+=1)p[g].m(u,null);H=!0},p(m,[I]){if(I&1){S=m[0];let g;for(g=0;g<S.length;g+=1){const P=K(m,S,g);p[g]?(p[g].p(P,I),B(p[g],1)):(p[g]=F(P),p[g].c(),B(p[g],1),p[g].m(u,null))}for(ie(),g=S.length;g<p.length;g+=1)Y(g);$()}},i(m){if(!H){for(let I=0;I<S.length;I+=1)B(p[I]);H=!0}},o(m){p=p.filter(Boolean);for(let I=0;I<p.length;I+=1)T(p[I]);H=!1},d(m){m&&d(e),m&&d(t),ee(p,m)}}}function _e(r){return[[{name:"1",image:`${q}/images/1.jpg`},{name:"2",image:`${q}/images/2-2.jpg`,full:!0,classes:"full-view",shadow:!0},{name:"3",image:`${q}/images/3-1.jpg`,left:!1},{name:"4",image:`${q}/images/4.jpg`},{name:"5",image:`${q}/images/5.jpg`,left:!1},{name:"6",image:`${q}/images/6.jpg`}]]}class ge extends Q{constructor(e){super(),U(this,e,_e,he,X,{})}}export{ge as default};