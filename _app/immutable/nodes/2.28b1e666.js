import{S as Nt,i as St,s as Gt,L as Kt,k as u,a as M,q as k,l as d,m as v,c as j,r as y,h,E as tt,n as s,M as Ve,b as X,F as a,N as K,O as Xt,u as lt,g as U,v as rt,f as at,d as Z,P as Ie,Q as Yt,o as Ut,R as Zt,y as nt,z as ot,A as it,B as ct,T as el,D as tl}from"../chunks/index.6a9e29a0.js";import{P as ll}from"../chunks/ProjectLink.09128f98.js";function rl(e){return e()}function al(e){e.forEach(rl)}const Me=[],Mt=[],qe=[],jt=[],Wt=Promise.resolve();let st=!1;function sl(){st||(st=!0,Wt.then(il))}function nl(){return sl(),Wt}function ol(e){qe.push(e)}const et=new Set;let je=0;function il(){do{for(;je<Me.length;){const e=Me[je];je++,cl(e.$$)}for(Me.length=0,je=0;Mt.length;)Mt.pop()();for(let e=0;e<qe.length;e+=1){const t=qe[e];et.has(t)||(et.add(t),t())}qe.length=0}while(Me.length);for(;jt.length;)jt.pop()();st=!1,et.clear()}function cl(e){if(e.fragment!==null){e.update(),al(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ol)}}const hl={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},ee=(e,t)=>new CustomEvent(e,{detail:t});function fl(e,t={}){const{root:n,rootMargin:l,threshold:i,unobserveOnEnter:c}=Object.assign(Object.assign({},hl),t);let _={x:void 0,y:void 0},p={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&e){const f=new IntersectionObserver((g,q)=>{g.forEach(x=>{_.y>x.boundingClientRect.y?p.vertical="up":p.vertical="down",_.x>x.boundingClientRect.x?p.horizontal="left":p.horizontal="right",_={y:x.boundingClientRect.y,x:x.boundingClientRect.x};const V={inView:x.isIntersecting,entry:x,scrollDirection:p,node:e,observer:q};e.dispatchEvent(ee("inview_change",V)),e.dispatchEvent(ee("change",V)),x.isIntersecting?(e.dispatchEvent(ee("inview_enter",V)),e.dispatchEvent(ee("enter",V)),c&&q.unobserve(e)):(e.dispatchEvent(ee("inview_leave",V)),e.dispatchEvent(ee("leave",V)))})},{root:n,rootMargin:l,threshold:i});return nl().then(()=>{e.dispatchEvent(ee("inview_init",{observer:f,node:e})),e.dispatchEvent(ee("init",{observer:f,node:e}))}),f.observe(e),{destroy(){f.unobserve(e)}}}}const{window:Ft}=Zt;function qt(e,t,n){const l=e.slice();return l[13]=t[n],l}function Ht(e){let t,n;return t=new ll({props:{link:e[13]}}),{c(){nt(t.$$.fragment)},l(l){ot(t.$$.fragment,l)},m(l,i){it(t,l,i),n=!0},p(l,i){const c={};i&1&&(c.link=l[13]),t.$set(c)},i(l){n||(U(t.$$.fragment,l),n=!0)},o(l){Z(t.$$.fragment,l),n=!1},d(l){ct(t,l)}}}function ul(e){let t,n,l,i,c,_,p,f,g,q=e[0].shortTitle+"",x,V,O,W=e[0].featureDescription+"",$,T,F,H,te,ve;Kt(e[6]);let P=e[0].links,b=[];for(let m=0;m<P.length;m+=1)b[m]=Ht(qt(e,P,m));const Q=m=>Z(b[m],1,1,()=>{b[m]=null});return{c(){t=u("div"),n=u("div"),l=u("div"),i=u("div"),c=u("img"),f=M(),g=u("h2"),x=k(q),V=M(),O=u("div"),$=k(W),T=M(),F=u("div");for(let m=0;m<b.length;m+=1)b[m].c();this.h()},l(m){t=d(m,"DIV",{class:!0});var I=v(t);n=d(I,"DIV",{class:!0});var E=v(n);l=d(E,"DIV",{class:!0});var L=v(l);i=d(L,"DIV",{});var R=v(i);c=d(R,"IMG",{src:!0,alt:!0,class:!0}),f=j(R),g=d(R,"H2",{class:!0});var _e=v(g);x=y(_e,q),_e.forEach(h),V=j(R),O=d(R,"DIV",{class:!0});var G=v(O);$=y(G,W),G.forEach(h),R.forEach(h),T=j(L),F=d(L,"DIV",{class:!0});var pe=v(F);for(let le=0;le<b.length;le+=1)b[le].l(pe);pe.forEach(h),L.forEach(h),E.forEach(h),I.forEach(h),this.h()},h(){tt(c.src,_=e[0].thumbnail)||s(c,"src",_),s(c,"alt",p=`Thumbnail for ${e[0].shortTitle}`),s(c,"class","mx-auto mb-4 w-full h-[100px] object-cover object-left-top svelte-1av0c4o"),Ve(c,"hovered",e[2]),s(g,"class","text-2xl font-semibold mb-2"),s(O,"class","text-gray-500 font-light leading-5"),s(F,"class","flex gap-1 w-full flex-wrap"),s(l,"class","flex flex-col justify-between h-full gap-8"),s(n,"class","h-full w-full"),s(t,"class","card w-full sm:w-72 p-6 rounded-xl bg-gray-100 hover:cursor-pointer svelte-1av0c4o"),Ve(t,"hovered",e[2])},m(m,I){X(m,t,I),a(t,n),a(n,l),a(l,i),a(i,c),a(i,f),a(i,g),a(g,x),a(i,V),a(i,O),a(O,$),a(l,T),a(l,F);for(let E=0;E<b.length;E+=1)b[E].m(F,null);H=!0,te||(ve=[K(Ft,"resize",e[6]),Xt(fl.call(null,t,{threshold:1})),K(t,"inview_enter",e[7]),K(t,"inview_leave",e[8]),K(t,"mouseover",e[9]),K(t,"focus",e[10]),K(t,"mouseout",e[11]),K(t,"blur",e[12]),K(t,"click",e[4]),K(t,"keyup",e[4]),K(t,"inview_enter",e[5])],te=!0)},p(m,[I]){if((!H||I&1&&!tt(c.src,_=m[0].thumbnail))&&s(c,"src",_),(!H||I&1&&p!==(p=`Thumbnail for ${m[0].shortTitle}`))&&s(c,"alt",p),(!H||I&4)&&Ve(c,"hovered",m[2]),(!H||I&1)&&q!==(q=m[0].shortTitle+"")&&lt(x,q),(!H||I&1)&&W!==(W=m[0].featureDescription+"")&&lt($,W),I&1){P=m[0].links;let E;for(E=0;E<P.length;E+=1){const L=qt(m,P,E);b[E]?(b[E].p(L,I),U(b[E],1)):(b[E]=Ht(L),b[E].c(),U(b[E],1),b[E].m(F,null))}for(rt(),E=P.length;E<b.length;E+=1)Q(E);at()}(!H||I&4)&&Ve(t,"hovered",m[2])},i(m){if(!H){for(let I=0;I<P.length;I+=1)U(b[I]);H=!0}},o(m){b=b.filter(Boolean);for(let I=0;I<b.length;I+=1)Z(b[I]);H=!1},d(m){m&&h(t),Ie(b,m),te=!1,Yt(ve)}}}function dl(e,t,n){let l,{project:i}=t;function c(){window.open(i.defaultUrl,"_blank","noreferrer noopener")}let _=1800,p=!1;Ut(()=>{console.log(_)});function f(T){el.call(this,e,T)}function g(){n(1,_=Ft.innerWidth)}const q=()=>l&&n(2,p=!0),x=()=>l&&n(2,p=!1),V=()=>n(2,p=!0),O=()=>n(2,p=!0),W=()=>n(2,p=!1),$=()=>n(2,p=!1);return e.$$set=T=>{"project"in T&&n(0,i=T.project)},e.$$.update=()=>{e.$$.dirty&2&&n(3,l=_<600)},[i,_,p,l,c,f,g,q,x,V,O,W,$]}class Qt extends Nt{constructor(t){super(),St(this,t,dl,ul,Gt,{project:0})}}function Pt(e,t,n){const l=e.slice();return l[5]=t[n],l[7]=n,l}function Rt(e,t,n){const l=e.slice();return l[5]=t[n],l[7]=n,l}function Tt(e,t,n){const l=e.slice();return l[9]=t[n],l}function Lt(e,t,n){const l=e.slice();return l[12]=t[n],l}function Ct(e){let t,n,l,i,c,_,p;return{c(){t=u("div"),n=u("a"),l=u("span"),p=M(),this.h()},l(f){t=d(f,"DIV",{class:!0});var g=v(t);n=d(g,"A",{target:!0,href:!0,rel:!0,class:!0});var q=v(n);l=d(q,"SPAN",{class:!0,"data-icon":!0,style:!0}),v(l).forEach(h),q.forEach(h),p=j(g),g.forEach(h),this.h()},h(){s(l,"class","iconify"),s(l,"data-icon",i=e[12].dataIcon),s(l,"style",c=`color: ${e[12].color||"#515151"}`),s(n,"target","_blank"),s(n,"href",_=e[12].href),s(n,"rel","noreferrer"),s(n,"class","svelte-10pw7bq"),s(t,"class","bg-slate-100 p-2 rounded-full hover:bg-slate-300 text-md")},m(f,g){X(f,t,g),a(t,n),a(n,l),a(t,p)},p(f,g){g&1&&i!==(i=f[12].dataIcon)&&s(l,"data-icon",i),g&1&&c!==(c=`color: ${f[12].color||"#515151"}`)&&s(l,"style",c),g&1&&_!==(_=f[12].href)&&s(n,"href",_)},d(f){f&&h(t)}}}function Bt(e){let t,n=e[9].date+"",l,i,c,_=e[9].HTMLdescription+"",p;return{c(){t=u("div"),l=k(n),i=M(),c=u("div"),p=M(),this.h()},l(f){t=d(f,"DIV",{class:!0});var g=v(t);l=y(g,n),g.forEach(h),i=j(f),c=d(f,"DIV",{class:!0});var q=v(c);q.forEach(h),p=j(f),this.h()},h(){s(t,"class","left-gutter justify-self-end font-light text-slate-400 text-xs svelte-10pw7bq"),s(c,"class","main-col mb-2 svelte-10pw7bq")},m(f,g){X(f,t,g),a(t,l),X(f,i,g),X(f,c,g),c.innerHTML=_,X(f,p,g)},p(f,g){g&1&&n!==(n=f[9].date+"")&&lt(l,n),g&1&&_!==(_=f[9].HTMLdescription+"")&&(c.innerHTML=_)},d(f){f&&h(t),f&&h(i),f&&h(c),f&&h(p)}}}function zt(e){let t,n;return t=new Qt({props:{project:e[5]}}),{c(){nt(t.$$.fragment)},l(l){ot(t.$$.fragment,l)},m(l,i){it(t,l,i),n=!0},p(l,i){const c={};i&2&&(c.project=l[5]),t.$set(c)},i(l){n||(U(t.$$.fragment,l),n=!0)},o(l){Z(t.$$.fragment,l),n=!1},d(l){ct(t,l)}}}function Ot(e){let t,n;return t=new Qt({props:{project:e[5]}}),{c(){nt(t.$$.fragment)},l(l){ot(t.$$.fragment,l)},m(l,i){it(t,l,i),n=!0},p(l,i){const c={};i&4&&(c.project=l[5]),t.$set(c)},i(l){n||(U(t.$$.fragment,l),n=!0)},o(l){Z(t.$$.fragment,l),n=!1},d(l){ct(t,l)}}}function vl(e){let t,n,l,i,c,_,p,f,g,q,x,V,O,W,$,T,F,H,te,ve,P,b,Q,m,I,E,L,R,_e,G,pe,le,Y,He,Pe,Re,ge,S,Te,re,Le,Ce,ae,Be,ze,se,Oe,Ne,ne,Se,Ge,Ue,me,We,Fe,oe,Qe,ie,$e,Je,ce,Ke,he,Xe,Ye,fe,ke,be=e[0].socialLinks,C=[];for(let o=0;o<be.length;o+=1)C[o]=Ct(Lt(e,be,o));let we=e[0].news,B=[];for(let o=0;o<we.length;o+=1)B[o]=Bt(Tt(e,we,o));let ue=e[1],A=[];for(let o=0;o<ue.length;o+=1)A[o]=zt(Rt(e,ue,o));const $t=o=>Z(A[o],1,1,()=>{A[o]=null});let de=e[2],D=[];for(let o=0;o<de.length;o+=1)D[o]=Ot(Pt(e,de,o));const Jt=o=>Z(D[o],1,1,()=>{D[o]=null});return{c(){t=M(),n=u("base"),l=M(),i=u("div"),c=u("div"),_=u("div"),p=u("a"),f=u("img"),q=M(),x=u("div"),V=u("div"),O=u("h1"),W=k("Hi, I'm Ben Hoover"),$=M(),T=u("h2"),F=k("I'm an AI Researcher studying "),H=u("span"),te=k("memory"),ve=M(),P=u("div"),b=u("div"),Q=u("a"),m=k("CV"),I=M();for(let o=0;o<C.length;o+=1)C[o].c();E=M(),L=u("div"),R=u("p"),_e=k(`Understanding
            `),G=u("a"),pe=k("AI foundation models"),le=k(`
            from the perspective of large
            `),Y=u("a"),He=k("Associative Memories"),Pe=k("."),Re=M(),ge=u("div"),S=u("p"),Te=k(`I am a Machine Learning PhD student at 
                `),re=u("a"),Le=k("Georgia Tech"),Ce=k(` advised by
                `),ae=u("a"),Be=k("Polo Chau"),ze=k(` and
                an AI Research Engineer with
                `),se=u("a"),Oe=k("IBM Research"),Ne=k(`. My research focuses on building more interpretable and
                parameter efficient AI by rethinking the way we train and build
                deep models, taking inspiration from Associative Memories and
                `),ne=u("a"),Se=k("Hopfield Networks"),Ge=k(". I like to visualize what happens inside AI models."),Ue=M(),me=u("h1"),We=k("News"),Fe=M(),oe=u("div");for(let o=0;o<B.length;o+=1)B[o].c();Qe=M(),ie=u("h1"),$e=k("Memory Research Highlights"),Je=M(),ce=u("div");for(let o=0;o<A.length;o+=1)A[o].c();Ke=M(),he=u("h1"),Xe=k("Visualization Research Highlights"),Ye=M(),fe=u("div");for(let o=0;o<D.length;o+=1)D[o].c();this.h()},l(o){tl("svelte-1o4nf5",document.head).forEach(h),t=j(o),n=d(o,"BASE",{target:!0}),l=j(o),i=d(o,"DIV",{class:!0});var r=v(i);c=d(r,"DIV",{class:!0});var z=v(c);_=d(z,"DIV",{class:!0});var ht=v(_);p=d(ht,"A",{href:!0,target:!0,rel:!0,class:!0});var ft=v(p);f=d(ft,"IMG",{class:!0,src:!0,alt:!0}),ft.forEach(h),ht.forEach(h),q=j(z),x=d(z,"DIV",{class:!0});var ye=v(x);V=d(ye,"DIV",{class:!0});var xe=v(V);O=d(xe,"H1",{class:!0});var ut=v(O);W=y(ut,"Hi, I'm Ben Hoover"),ut.forEach(h),$=j(xe),T=d(xe,"H2",{class:!0});var Ze=v(T);F=y(Ze,"I'm an AI Researcher studying "),H=d(Ze,"SPAN",{class:!0});var dt=v(H);te=y(dt,"memory"),dt.forEach(h),Ze.forEach(h),xe.forEach(h),ve=j(ye),P=d(ye,"DIV",{class:!0});var Ae=v(P);b=d(Ae,"DIV",{class:!0});var vt=v(b);Q=d(vt,"A",{target:!0,href:!0,rel:!0,class:!0});var _t=v(Q);m=y(_t,"CV"),_t.forEach(h),vt.forEach(h),I=j(Ae);for(let N=0;N<C.length;N+=1)C[N].l(Ae);Ae.forEach(h),ye.forEach(h),z.forEach(h),E=j(r),L=d(r,"DIV",{class:!0});var De=v(L);R=d(De,"P",{class:!0});var Ee=v(R);_e=y(Ee,`Understanding
            `),G=d(Ee,"A",{href:!0,target:!0,rel:!0,class:!0});var pt=v(G);pe=y(pt,"AI foundation models"),pt.forEach(h),le=y(Ee,`
            from the perspective of large
            `),Y=d(Ee,"A",{href:!0,target:!0,rel:!0,class:!0});var gt=v(Y);He=y(gt,"Associative Memories"),gt.forEach(h),Pe=y(Ee,"."),Ee.forEach(h),Re=j(De),ge=d(De,"DIV",{class:!0});var mt=v(ge);S=d(mt,"P",{});var J=v(S);Te=y(J,`I am a Machine Learning PhD student at 
                `),re=d(J,"A",{href:!0,class:!0});var bt=v(re);Le=y(bt,"Georgia Tech"),bt.forEach(h),Ce=y(J,` advised by
                `),ae=d(J,"A",{href:!0,class:!0});var wt=v(ae);Be=y(wt,"Polo Chau"),wt.forEach(h),ze=y(J,` and
                an AI Research Engineer with
                `),se=d(J,"A",{href:!0,class:!0});var Et=v(se);Oe=y(Et,"IBM Research"),Et.forEach(h),Ne=y(J,`. My research focuses on building more interpretable and
                parameter efficient AI by rethinking the way we train and build
                deep models, taking inspiration from Associative Memories and
                `),ne=d(J,"A",{href:!0,class:!0});var It=v(ne);Se=y(It,"Hopfield Networks"),It.forEach(h),Ge=y(J,". I like to visualize what happens inside AI models."),J.forEach(h),mt.forEach(h),De.forEach(h),Ue=j(r),me=d(r,"H1",{class:!0});var kt=v(me);We=y(kt,"News"),kt.forEach(h),Fe=j(r),oe=d(r,"DIV",{class:!0});var yt=v(oe);for(let N=0;N<B.length;N+=1)B[N].l(yt);yt.forEach(h),Qe=j(r),ie=d(r,"H1",{class:!0,id:!0});var xt=v(ie);$e=y(xt,"Memory Research Highlights"),xt.forEach(h),Je=j(r),ce=d(r,"DIV",{class:!0});var At=v(ce);for(let N=0;N<A.length;N+=1)A[N].l(At);At.forEach(h),Ke=j(r),he=d(r,"H1",{class:!0,id:!0});var Dt=v(he);Xe=y(Dt,"Visualization Research Highlights"),Dt.forEach(h),Ye=j(r),fe=d(r,"DIV",{class:!0});var Vt=v(fe);for(let N=0;N<D.length;N+=1)D[N].l(Vt);Vt.forEach(h),r.forEach(h),this.h()},h(){document.title="Ben Hoover",s(n,"target","_blank"),s(f,"class","rounded-lg shadow-lg"),tt(f.src,g="imgs/people/me-headshot-small.jpg")||s(f,"src",g),s(f,"alt","Ben's headshot"),s(p,"href","imgs/people/me-headshot.jpg"),s(p,"target","_blank"),s(p,"rel","noreferrer"),s(p,"class","svelte-10pw7bq"),s(_,"class","self-center"),s(O,"class","text-3xl md:text-4xl text-slate-700 font-semibold mb-0.5"),s(H,"class","font-medium text-slate-500"),s(T,"class","text-xl md:text-3xl text-slate-400 font-light"),s(V,"class",""),s(Q,"target","_blank"),s(Q,"href","/cv"),s(Q,"rel","noreferrer"),s(Q,"class","no-border svelte-10pw7bq"),s(b,"class","bg-slate-100 p-2 rounded-full hover:bg-slate-300 text-gray-600 text-sm"),s(P,"class","flex text-xl gap-2 xs:gap-4"),s(x,"class","flex flex-col gap-2 justify-items-start align-items-start md:gap-8"),s(c,"class","grid grid-cols-[90px_1fr] gap-4 md:grid-cols-[150px_1fr] md:gap-8 main-col svelte-10pw7bq"),s(G,"href","https://research.ibm.com/blog/what-are-foundation-models"),s(G,"target","_blank"),s(G,"rel","noreferrer"),s(G,"class","svelte-10pw7bq"),s(Y,"href","https://en.wikipedia.org/wiki/Associative_memory_(psychology)"),s(Y,"target","_blank"),s(Y,"rel","noreferrer"),s(Y,"class","svelte-10pw7bq"),s(R,"class","text-gray-500 border-l-2 pl-4 text-2xl my-8 main-col svelte-10pw7bq"),s(re,"href","https://poloclub.github.io/"),s(re,"class","svelte-10pw7bq"),s(ae,"href","https://poloclub.github.io/polochau/"),s(ae,"class","svelte-10pw7bq"),s(se,"href","https://researcher.watson.ibm.com/researcher/view_group.php?id=5948"),s(se,"class","svelte-10pw7bq"),s(ne,"href","http://www.scholarpedia.org/article/Hopfield_network"),s(ne,"class","svelte-10pw7bq"),s(ge,"class","text-slate-700 flex flex-col gap-4 leading-6 font-light main-col svelte-10pw7bq"),s(L,"class","intro-paragraph main-col svelte-10pw7bq"),s(me,"class","main-col mt-8 svelte-10pw7bq"),s(oe,"class","news-list flex flex-col sm:contents mx-2 gap-0.5 svelte-10pw7bq"),s(ie,"class","main-col mt-12 text-center svelte-10pw7bq"),s(ie,"id","selected-memory"),s(ce,"class","col-start-3 col-end-11 flex flex-wrap gap-4 md:col-start-2 md:col-end-12"),s(he,"class","main-col mt-12 text-center svelte-10pw7bq"),s(he,"id","selected-memory"),s(fe,"class","col-start-3 col-end-11 flex flex-wrap gap-4 md:col-start-2 md:col-end-12"),s(i,"class","page-container sm:grid grid-cols-12 gap-x-4 md:my-12")},m(o,w){X(o,t,w),X(o,n,w),X(o,l,w),X(o,i,w),a(i,c),a(c,_),a(_,p),a(p,f),a(c,q),a(c,x),a(x,V),a(V,O),a(O,W),a(V,$),a(V,T),a(T,F),a(T,H),a(H,te),a(x,ve),a(x,P),a(P,b),a(b,Q),a(Q,m),a(P,I);for(let r=0;r<C.length;r+=1)C[r].m(P,null);a(i,E),a(i,L),a(L,R),a(R,_e),a(R,G),a(G,pe),a(R,le),a(R,Y),a(Y,He),a(R,Pe),a(L,Re),a(L,ge),a(ge,S),a(S,Te),a(S,re),a(re,Le),a(S,Ce),a(S,ae),a(ae,Be),a(S,ze),a(S,se),a(se,Oe),a(S,Ne),a(S,ne),a(ne,Se),a(S,Ge),a(i,Ue),a(i,me),a(me,We),a(i,Fe),a(i,oe);for(let r=0;r<B.length;r+=1)B[r].m(oe,null);a(i,Qe),a(i,ie),a(ie,$e),a(i,Je),a(i,ce);for(let r=0;r<A.length;r+=1)A[r].m(ce,null);a(i,Ke),a(i,he),a(he,Xe),a(i,Ye),a(i,fe);for(let r=0;r<D.length;r+=1)D[r].m(fe,null);ke=!0},p(o,[w]){if(w&1){be=o[0].socialLinks;let r;for(r=0;r<be.length;r+=1){const z=Lt(o,be,r);C[r]?C[r].p(z,w):(C[r]=Ct(z),C[r].c(),C[r].m(P,null))}for(;r<C.length;r+=1)C[r].d(1);C.length=be.length}if(w&1){we=o[0].news;let r;for(r=0;r<we.length;r+=1){const z=Tt(o,we,r);B[r]?B[r].p(z,w):(B[r]=Bt(z),B[r].c(),B[r].m(oe,null))}for(;r<B.length;r+=1)B[r].d(1);B.length=we.length}if(w&2){ue=o[1];let r;for(r=0;r<ue.length;r+=1){const z=Rt(o,ue,r);A[r]?(A[r].p(z,w),U(A[r],1)):(A[r]=zt(z),A[r].c(),U(A[r],1),A[r].m(ce,null))}for(rt(),r=ue.length;r<A.length;r+=1)$t(r);at()}if(w&4){de=o[2];let r;for(r=0;r<de.length;r+=1){const z=Pt(o,de,r);D[r]?(D[r].p(z,w),U(D[r],1)):(D[r]=Ot(z),D[r].c(),U(D[r],1),D[r].m(fe,null))}for(rt(),r=de.length;r<D.length;r+=1)Jt(r);at()}},i(o){if(!ke){for(let w=0;w<ue.length;w+=1)U(A[w]);for(let w=0;w<de.length;w+=1)U(D[w]);ke=!0}},o(o){A=A.filter(Boolean);for(let w=0;w<A.length;w+=1)Z(A[w]);D=D.filter(Boolean);for(let w=0;w<D.length;w+=1)Z(D[w]);ke=!1},d(o){o&&h(t),o&&h(n),o&&h(l),o&&h(i),Ie(C,o),Ie(B,o),Ie(A,o),Ie(D,o)}}}function _l(e,t,n){let l,i,{data:c}=t;return Ut(()=>{console.log("DATA: ",c),console.log(l)}),e.$$set=_=>{"data"in _&&n(0,c=_.data)},e.$$.update=()=>{e.$$.dirty&1&&c.people,e.$$.dirty&1&&c.publications,e.$$.dirty&1&&n(1,l=c.publications.filter(_=>_.featured&&_.category=="memory")),e.$$.dirty&1&&n(2,i=c.publications.filter(_=>_.featured&&_.category=="vis"))},[c,l,i]}class ml extends Nt{constructor(t){super(),St(this,t,_l,vl,Gt,{data:0})}}export{ml as component};
