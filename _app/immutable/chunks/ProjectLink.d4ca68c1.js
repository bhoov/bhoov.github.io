import{S as L,i as N,s as V,k as m,a as q,q as A,l as p,m as g,h,c as C,r as w,n as r,M as I,b as z,F as _,N as k,u as F,J as S,Q as J}from"./index.6a9e29a0.js";const D={code:"mdi-source-branch",url:"mdi-link",pdf:"mdi-file-document-outline",video:"mdi-video",poster:"mdi-projector-screen",demo:"mdi-play"};function K(t){let s,e,l,a,d,v,i,c=t[0].label+"",f,u,y,E;return{c(){s=m("div"),e=m("a"),l=m("div"),a=m("div"),v=q(),i=m("span"),f=A(c),this.h()},l(o){s=p(o,"DIV",{class:!0});var n=g(s);e=p(n,"A",{href:!0,target:!0,rel:!0,class:!0});var P=g(e);l=p(P,"DIV",{class:!0});var b=g(l);a=p(b,"DIV",{class:!0,"data-icon":!0,style:!0}),g(a).forEach(h),v=C(b),i=p(b,"SPAN",{class:!0});var j=g(i);f=w(j,c),j.forEach(h),b.forEach(h),P.forEach(h),n.forEach(h),this.h()},h(){r(a,"class","iconify social-link-tag"),r(a,"data-icon",d=D[t[0].type]),r(a,"style",t[2]),r(i,"class",""),r(l,"class","flex gap-1 justify-items-center items-center"),I(l,"svg-container-hovered",t[1]),r(e,"href",u=t[0].url),r(e,"target","_blank"),r(e,"rel","noreferrer"),r(e,"class","svelte-1uztr7a"),r(s,"class","text-xs font-medium bg-blue-100 py-0.5 px-1.5 rounded-2xl hover:bg-blue-400 hover:text-white hover:svg-invert hover:no-underline")},m(o,n){z(o,s,n),_(s,e),_(e,l),_(l,a),_(l,v),_(l,i),_(i,f),y||(E=[k(e,"click",M),k(s,"mouseover",t[3]),k(s,"focus",t[4]),k(s,"mouseout",t[5]),k(s,"blur",t[6])],y=!0)},p(o,[n]){n&1&&d!==(d=D[o[0].type])&&r(a,"data-icon",d),n&1&&c!==(c=o[0].label+"")&&F(f,c),n&2&&I(l,"svg-container-hovered",o[1]),n&1&&u!==(u=o[0].url)&&r(e,"href",u)},i:S,o:S,d(o){o&&h(s),y=!1,J(E)}}}const M=t=>t.stopPropagation();function Q(t,s,e){let{link:l}=s,a=!1,d="color: #515151";const v=()=>e(1,a=!0),i=()=>e(1,a=!0),c=()=>e(1,a=!1),f=()=>e(1,a=!1);return t.$$set=u=>{"link"in u&&e(0,l=u.link)},[l,a,d,v,i,c,f]}class G extends L{constructor(s){super(),N(this,s,Q,K,V,{link:0})}}export{G as P};