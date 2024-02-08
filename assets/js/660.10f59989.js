"use strict";(self.webpackChunkps4_cfw_guide=self.webpackChunkps4_cfw_guide||[]).push([[660],{660:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Re});var t=a(760),n=a(752),u=a(568),r=a(328),o=a(440),i=a(216),s=a(564);const v=["href","rel","target","aria-label"],c=(0,t._M)({inheritAttrs:!1}),d=(0,t._M)({...c,__name:"NavLink",props:{item:{type:Object,required:!0}},setup(e){const l=e,a=(0,i.MJ)(),r=(0,o.jW)(),{item:c}=(0,u.kx)(l),d=(0,t.S6)((()=>(0,s.mY)(c.value.link))),p=(0,t.S6)((()=>(0,s.oF)(c.value.link)||(0,s.sz)(c.value.link))),h=(0,t.S6)((()=>{if(!p.value)return c.value.target?c.value.target:d.value?"_blank":void 0})),m=(0,t.S6)((()=>"_blank"===h.value)),g=(0,t.S6)((()=>!d.value&&!p.value&&!m.value)),b=(0,t.S6)((()=>{if(!p.value)return c.value.rel?c.value.rel:m.value?"noopener noreferrer":void 0})),k=(0,t.S6)((()=>c.value.ariaLabel||c.value.text)),f=(0,t.S6)((()=>{const e=Object.keys(r.value.locales);return e.length?!e.some((e=>e===c.value.link)):"/"!==c.value.link})),y=(0,t.S6)((()=>!!f.value&&a.path.startsWith(c.value.link))),W=(0,t.S6)((()=>!!g.value&&(c.value.activeMatch?new RegExp(c.value.activeMatch).test(a.path):y.value)));return(e,l)=>{const a=(0,t.E1)("RouterLink"),r=(0,t.E1)("OutboundLink");return g.value?((0,t.Wz)(),(0,t.Az)(a,(0,t.Gu)({key:0,class:["nav-link",{"router-link-active":W.value}],to:(0,u.KV)(c).link,"aria-label":k.value},e.$attrs),{default:(0,t.Ql)((()=>[(0,t.oF)(e.$slots,"before"),(0,t.mY)(" "+(0,n.WA)((0,u.KV)(c).text)+" ",1),(0,t.oF)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,t.Wz)(),(0,t.An)("a",(0,t.Gu)({key:1,class:"nav-link external",href:(0,u.KV)(c).link,rel:b.value,target:h.value,"aria-label":k.value},e.$attrs),[(0,t.oF)(e.$slots,"before"),(0,t.mY)(" "+(0,n.WA)((0,u.KV)(c).text)+" ",1),m.value?((0,t.Wz)(),(0,t.Az)(r,{key:0})):(0,t.g1)("",!0),(0,t.oF)(e.$slots,"after")],16,v))}}});var p=a(32);const h=["aria-labelledby"],m={class:"wrapper"},g={key:0,id:"main-title"},b={key:1,class:"description"},k={key:2},f={key:3,class:"actions"},y={class:"home"},W=["innerHTML"],z={key:1,class:"features"},A={class:"theme-default-content custom"},_={key:2,style:{"text-align":"center"}},Q=["id"],S={key:3},w={key:4,style:{"text-align":"center"}},x=["id"],K=["innerHTML"],M=["textContent"],L=(0,t._M)({__name:"Home",setup(e){const l=(0,o.aQ)(),a=(0,o.wR)(),u=(0,p.QR)(),r=(0,t.S6)((()=>l.value.header.overlay_image?(0,o.m_)(l.value.header.overlay_image):null)),i=(0,t.S6)((()=>l.value.header.overlay_color?l.value.header.overlay_color:null)),v=(0,t.S6)((()=>l.value.header.overlay_filter?l.value.header.overlay_filter:0)),c=(0,t.S6)((()=>null===l.value.header.overlay_title?null:l.value.header.overlay_title||a.value.title||"Hello")),L=(0,t.S6)((()=>null===l.value.header.cta_label?null:l.value.header.cta_label)),D=(0,t.S6)((()=>null===l.value.header.cta_url?null:l.value.header.cta_url)),T=((0,t.S6)((()=>l.value.heroAlt||c.value||"hero")),(0,t.S6)((()=>null===l.value.header.overlay_excerpt?null:l.value.header.overlay_excerpt||a.value.description||"Welcome to your VuePress site"))),V=(0,t.S6)((()=>{var e=l.value.discordNoticeText||u.value.discordNoticeText;return null===e?null:"<p>"+e+"</p>"})),$=(0,t.S6)((()=>{var e=u.value.adTagOne;return null===e?null:e})),R=(0,t.S6)((()=>{var e=u.value.adTagTwo;return null===e?null:e})),F=(0,t.S6)((()=>null==l.value.ads||l.value.ads)),C=(0,t.S6)((()=>(0,s.c7)(l.value.actions)?l.value.actions.map((({text:e,link:l,type:a="primary"})=>({text:e,link:l,type:a}))):[])),N=(0,t.S6)((()=>(0,s.c7)(l.value.features)?l.value.features:[])),H=(0,t.S6)((()=>l.value.footer)),B=(0,t.S6)((()=>l.value.footerHtml));return(e,l)=>{const a=(0,t.E1)("router-link"),u=(0,t.E1)("Content");return(0,t.Wz)(),(0,t.An)("main",{class:"splash","aria-labelledby":c.value?"main-title":void 0},[(0,t.QD)("header",{class:"hero heroImage",style:(0,n.MN)({"background-image":"linear-gradient(rgba(0, 0, 0, "+v.value+"), rgba(0, 0, 0, "+v.value+")), url("+r.value+")","background-color":i.value})},[(0,t.QD)("div",m,[c.value?((0,t.Wz)(),(0,t.An)("h1",g,(0,n.WA)(c.value),1)):(0,t.g1)("",!0),T.value?((0,t.Wz)(),(0,t.An)("p",b,(0,n.WA)(T.value),1)):(0,t.g1)("",!0),L.value?((0,t.Wz)(),(0,t.An)("p",k,[(0,t.K2)(a,{class:"heroBtn",to:D.value},{default:(0,t.Ql)((()=>[(0,t.mY)((0,n.WA)(L.value),1)])),_:1},8,["to"])])):(0,t.g1)("",!0),C.value.length?((0,t.Wz)(),(0,t.An)("p",f,[((0,t.Wz)(!0),(0,t.An)(t.ae,null,(0,t.mi)(C.value,(e=>((0,t.Wz)(),(0,t.Az)(d,{key:e.text,class:(0,n.WN)(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):(0,t.g1)("",!0)])],4),(0,t.QD)("div",y,[V.value?((0,t.Wz)(),(0,t.An)("div",{key:0,class:"custom-container tip",innerHTML:V.value},null,8,W)):(0,t.g1)("",!0),N.value.length?((0,t.Wz)(),(0,t.An)("div",z,[((0,t.Wz)(!0),(0,t.An)(t.ae,null,(0,t.mi)(N.value,(e=>((0,t.Wz)(),(0,t.An)("div",{key:e.title,class:"feature"},[(0,t.QD)("h2",null,(0,n.WA)(e.title),1),(0,t.QD)("p",null,(0,n.WA)(e.details),1)])))),128))])):(0,t.g1)("",!0),(0,t.QD)("div",A,[(0,t.K2)(u)]),$.value&&F.value?((0,t.Wz)(),(0,t.An)("div",_,[(0,t.QD)("div",{id:$.value},null,8,Q)])):(0,t.g1)("",!0),$.value&&R.value&&F.value?((0,t.Wz)(),(0,t.An)("hr",S)):(0,t.g1)("",!0),R.value&&F.value?((0,t.Wz)(),(0,t.An)("div",w,[(0,t.QD)("div",{id:R.value},null,8,x)])):(0,t.g1)("",!0),H.value?((0,t.Wz)(),(0,t.An)(t.ae,{key:5},[B.value?((0,t.Wz)(),(0,t.An)("div",{key:0,class:"footer",innerHTML:H.value},null,8,K)):((0,t.Wz)(),(0,t.An)("div",{key:1,class:"footer",textContent:(0,n.WA)(H.value)},null,8,M))],64)):(0,t.g1)("",!0)])],8,h)}}}),D=e=>!(0,s.mY)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,T={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},V=(0,t._M)({__name:"DropdownTransition",setup(e){const l=e=>{e.style.height=e.scrollHeight+"px"},a=e=>{e.style.height=""};return(e,n)=>((0,t.Wz)(),(0,t.Az)(r.Ox,{name:"dropdown",onEnter:l,onAfterEnter:a,onBeforeLeave:l},{default:(0,t.Ql)((()=>[(0,t.oF)(e.$slots,"default")])),_:3}))}}),$=["aria-label"],R=["innerHTML"],F={key:0,class:"arrow down"},C=["aria-label"],N=["innerHTML"],H={class:"nav-dropdown"},B={class:"dropdown-subtitle"},E={key:1},Y={class:"dropdown-subitem-wrapper"},P=(0,t._M)({__name:"DropdownLink",props:{item:{type:Object,required:!0}},setup(e){const l=e,{item:a}=(0,u.kx)(l),o=(0,t.S6)((()=>a.value.ariaLabel||a.value.text)),s=(0,u.IL)(!1),v=(0,i.MJ)();(0,t.Kg)((()=>v.path),(()=>{s.value=!1}));const c=e=>{const l=0===e.detail;s.value=!!l&&!s.value},p=(e,l)=>l[l.length-1]===e;return(e,l)=>((0,t.Wz)(),(0,t.An)("div",{class:(0,n.WN)(["dropdown-wrapper",{open:s.value}])},[(0,t.QD)("button",{class:"dropdown-title",type:"button","aria-label":o.value,onClick:c},[(0,t.QD)("span",{class:"title",innerHTML:(0,u.KV)(a).text},null,8,R),(0,u.KV)(a).noDropdown?(0,t.g1)("",!0):((0,t.Wz)(),(0,t.An)("span",F))],8,$),(0,t.QD)("button",{class:"mobile-dropdown-title",type:"button","aria-label":o.value,onClick:l[0]||(l[0]=e=>s.value=!s.value)},[(0,t.QD)("span",{class:"title",innerHTML:(0,u.KV)(a).text},null,8,N),(0,t.QD)("span",{class:(0,n.WN)(["arrow",s.value?"down":"right"])},null,2)],8,C),(0,t.K2)(V,null,{default:(0,t.Ql)((()=>[(0,t.wt)((0,t.QD)("ul",H,[((0,t.Wz)(!0),(0,t.An)(t.ae,null,(0,t.mi)((0,u.KV)(a).children,((e,l)=>((0,t.Wz)(),(0,t.An)("li",{key:e.link||l,class:"dropdown-item"},[e.children?((0,t.Wz)(),(0,t.An)(t.ae,{key:0},[(0,t.QD)("h4",B,[e.link?((0,t.Wz)(),(0,t.Az)(d,{key:0,item:e,onFocusout:l=>p(e,(0,u.KV)(a).children)&&0===e.children.length&&(s.value=!1)},null,8,["item","onFocusout"])):((0,t.Wz)(),(0,t.An)("span",E,(0,n.WA)(e.text),1))]),(0,t.QD)("ul",Y,[((0,t.Wz)(!0),(0,t.An)(t.ae,null,(0,t.mi)(e.children,(l=>((0,t.Wz)(),(0,t.An)("li",{key:l.link,class:"dropdown-subitem"},[(0,t.K2)(d,{item:l,onFocusout:t=>p(l,e.children)&&p(e,(0,u.KV)(a).children)&&(s.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,t.Wz)(),(0,t.Az)(d,{key:1,item:e,onFocusout:l=>p(e,(0,u.KV)(a).children)&&(s.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[r.Ub,s.value]])])),_:1})],2))}}),O={key:0,class:"navbar-links"},I=(0,t._M)({__name:"NavbarLinks",setup(e){const l=e=>(0,s.ct)(e)?(0,p.yw)(e):e.children?{...e,children:e.children.map(l)}:e,a=(()=>{const e=(0,p.QR)();return(0,t.S6)((()=>(e.value.navbar||[]).map(l)))})(),n=(()=>{const e=(0,i.KX)(),l=(0,o.mq)(),a=(0,o.wR)(),n=(0,p.QR)();return(0,t.S6)((()=>{var t,u;const r=Object.keys(a.value.locales);if(r.length<2)return[];const o=e.currentRoute.value.path,i=e.currentRoute.value.fullPath;return[{text:null!=(t=n.value.selectLanguageText)?t:"unkown language",ariaLabel:null!=(u=n.value.selectLanguageAriaLabel)?u:"unkown language",dropdown:!1,children:r.map((t=>{var u,r,s,v,c,d;const p=null!=(r=null==(u=a.value.locales)?void 0:u[t])?r:{},h=null!=(v=null==(s=n.value.locales)?void 0:s[t])?v:{},m=`${p.lang}`,g=null!=(c=h.selectLanguageName)?c:m;let b;if(m===a.value.lang)b=i;else{const a=o.replace(l.value,t);b=e.getRoutes().some((e=>e.path===a))?a:null!=(d=h.home)?d:t}return{text:g,link:b}})),noDropdown:!0}]}))})(),u=(()=>{const e=(0,p.QR)(),l=(0,t.S6)((()=>e.value.repo)),a=(0,t.S6)((()=>l.value?D(l.value):null)),n=(0,t.S6)((()=>l.value&&!(0,s.mY)(l.value)?`https://github.com/${l.value}`:l.value)),u=(0,t.S6)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return(0,t.S6)((()=>n.value&&u.value?[{text:u.value,link:n.value}]:[]))})(),r=(0,t.S6)((()=>[...a.value,...u.value,...n.value]));return(e,l)=>r.value.length?((0,t.Wz)(),(0,t.An)("nav",O,[((0,t.Wz)(!0),(0,t.An)(t.ae,null,(0,t.mi)(r.value,(e=>((0,t.Wz)(),(0,t.An)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,t.Wz)(),(0,t.Az)(P,{key:0,item:e},null,8,["item"])):((0,t.Wz)(),(0,t.Az)(d,{key:1,item:e},null,8,["item"]))])))),128))])):(0,t.g1)("",!0)}}),G=["title"],U={class:"icon",focusable:"false",viewBox:"0 0 32 32"},j=[(0,t.IL)('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],q={class:"icon",focusable:"false",viewBox:"0 0 32 32"},J=[(0,t.QD)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)],X=(0,t._M)({__name:"ToggleDarkModeButton",setup(e){const l=(0,p.QR)(),a=(0,p.w9)(),n=()=>{a.value=!a.value};return(e,o)=>((0,t.Wz)(),(0,t.An)("button",{class:"toggle-dark-button",title:(0,u.KV)(l).toggleDarkMode,onClick:n},[(0,t.wt)(((0,t.Wz)(),(0,t.An)("svg",U,j,512)),[[r.Ub,!(0,u.KV)(a)]]),(0,t.wt)(((0,t.Wz)(),(0,t.An)("svg",q,J,512)),[[r.Ub,(0,u.KV)(a)]])],8,G))}}),Z=["title"],ee=[(0,t.QD)("div",{class:"icon","aria-hidden":"true"},[(0,t.QD)("span"),(0,t.QD)("span"),(0,t.QD)("span")],-1)],le=(0,t._M)({__name:"ToggleSidebarButton",emits:["toggle"],setup(e){const l=(0,p.QR)();return(e,a)=>((0,t.Wz)(),(0,t.An)("div",{class:"toggle-sidebar-button",title:(0,u.KV)(l).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:a[0]||(a[0]=l=>e.$emit("toggle"))},ee,8,Z))}}),ae=["src","alt"],te=(0,t._M)({__name:"Navbar",emits:["toggle-sidebar"],setup(e){const l=(0,o.mq)(),a=(0,o.wR)(),r=(0,p.QR)(),i=(0,p.w9)(),s=(0,u.IL)(null),v=(0,u.IL)(null),c=(0,t.S6)((()=>r.value.home||l.value)),d=(0,t.S6)((()=>i.value&&void 0!==r.value.logoDark?r.value.logoDark:r.value.logo)),h=(0,t.S6)((()=>a.value.title)),m=(0,u.IL)(0),g=(0,t.S6)((()=>m.value?{maxWidth:m.value+"px"}:{})),b=(0,t.S6)((()=>r.value.darkMode));function k(e,l){var a,t,n;const u=null==(n=null==(t=null==(a=null==e?void 0:e.ownerDocument)?void 0:a.defaultView)?void 0:t.getComputedStyle(e,null))?void 0:n[l],r=Number.parseInt(u,10);return Number.isNaN(r)?0:r}return(0,t.u2)((()=>{const e=k(s.value,"paddingLeft")+k(s.value,"paddingRight"),l=()=>{var l;window.innerWidth<=719?m.value=0:m.value=s.value.offsetWidth-e-((null==(l=v.value)?void 0:l.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)})),(e,l)=>{const a=(0,t.E1)("RouterLink"),r=(0,t.E1)("NavbarSearch");return(0,t.Wz)(),(0,t.An)("header",{ref_key:"navbar",ref:s,class:"navbar"},[(0,t.K2)(le,{onToggle:l[0]||(l[0]=l=>e.$emit("toggle-sidebar"))}),(0,t.QD)("span",{ref_key:"siteBrand",ref:v},[(0,t.K2)(a,{to:c.value},{default:(0,t.Ql)((()=>[d.value?((0,t.Wz)(),(0,t.An)("img",{key:0,class:"logo",src:(0,u.KV)(o.m_)(d.value),alt:h.value},null,8,ae)):(0,t.g1)("",!0),h.value?((0,t.Wz)(),(0,t.An)("span",{key:1,class:(0,n.WN)(["site-name",{"can-hide":d.value}])},(0,n.WA)(h.value),3)):(0,t.g1)("",!0)])),_:1},8,["to"])],512),(0,t.QD)("div",{class:"navbar-links-wrapper",style:(0,n.MN)(g.value)},[(0,t.oF)(e.$slots,"before"),(0,t.K2)(I,{class:"can-hide"}),(0,t.oF)(e.$slots,"after"),b.value?((0,t.Wz)(),(0,t.Az)(X,{key:0})):(0,t.g1)("",!0),(0,t.K2)(r)],4)],512)}}}),ne={class:"page-meta"},ue={key:0,class:"meta-item edit-link"},re={key:1,class:"meta-item last-updated"},oe={class:"meta-item-label"},ie={class:"meta-item-info"},se={key:2,class:"meta-item contributors"},ve={class:"meta-item-label"},ce={class:"meta-item-info"},de=["title"],pe={key:1,class:"contributor"},he=(0,t._M)({__name:"PageMeta",setup(e){const l=(0,p.QR)(),a=(()=>{const e=(0,p.QR)(),l=(0,o.us)(),a=(0,o.aQ)();return(0,t.S6)((()=>{var t,n;if(null!=(n=null!=(t=a.value.editLink)?t:e.value.editLink)&&!n)return null;const{repo:u,docsRepo:r=u,docsBranch:o="main",docsDir:i="docs",editLinkText:v}=e.value;if(!r)return null;const c=(({docsRepo:e,docsBranch:l,docsDir:a,filePathRelative:t,editLinkPattern:n})=>{const u=D(e);let r;return n?r=n:null!==u&&(r=T[u]),r?r.replace(/:repo/,(0,s.mY)(e)?e:`https://github.com/${e}`).replace(/:branch/,l).replace(/:path/,(0,s.iW)(`${(0,s.W0)(a)}/${t}`)):null})({docsRepo:r,docsBranch:o,docsDir:i,filePathRelative:l.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=v?v:"Edit this page",link:c}:null}))})(),r=(()=>{const e=(0,o.wR)(),l=(0,p.QR)(),a=(0,o.us)(),n=(0,o.aQ)();return(0,t.S6)((()=>{var t,u,r,o;return(null==(u=null!=(t=n.value.lastUpdated)?t:l.value.lastUpdated)||u)&&(null==(r=a.value.git)?void 0:r.updatedTime)?new Date(null==(o=a.value.git)?void 0:o.updatedTime).toLocaleString(e.value.lang):null}))})(),i=(()=>{const e=(0,p.QR)(),l=(0,o.us)(),a=(0,o.aQ)();return(0,t.S6)((()=>{var t,n,u,r;try{let o=function(e){return{name:e,email:null,commits:0}};if(null!=(n=null!=(t=a.value.contributors)?t:e.value.contributors)&&!n)return null;let i=null!=(r=null==(u=l.value.git)?void 0:u.contributors)?r:null,s=[];if(a.value.hasOwnProperty("extra_contributors")){const e=a.value.extra_contributors;if(Array.isArray(e))for(const l in e)s.push(e[l]);else s.push(e)}return[...i,...s.map(o)]}catch(e){return null}}))})();return(e,o)=>((0,t.Wz)(),(0,t.An)("footer",ne,[(0,u.KV)(a)?((0,t.Wz)(),(0,t.An)("div",ue,[(0,t.K2)(d,{class:"meta-item-label",item:(0,u.KV)(a)},null,8,["item"])])):(0,t.g1)("",!0),(0,u.KV)(r)?((0,t.Wz)(),(0,t.An)("div",re,[(0,t.QD)("span",oe,(0,n.WA)((0,u.KV)(l).lastUpdatedText)+": ",1),(0,t.QD)("span",ie,(0,n.WA)((0,u.KV)(r)),1)])):(0,t.g1)("",!0),(0,u.KV)(i)&&(0,u.KV)(i).length?((0,t.Wz)(),(0,t.An)("div",se,[(0,t.QD)("span",ve,(0,n.WA)((0,u.KV)(l).contributorsText)+": ",1),(0,t.QD)("span",ce,[((0,t.Wz)(!0),(0,t.An)(t.ae,null,(0,t.mi)((0,u.KV)(i),((e,l)=>((0,t.Wz)(),(0,t.An)(t.ae,{key:l},[e.email?((0,t.Wz)(),(0,t.An)("span",{key:0,class:"contributor",title:`email: ${e.email}`},(0,n.WA)(e.name),9,de)):(0,t.g1)("",!0),e.email?(0,t.g1)("",!0):((0,t.Wz)(),(0,t.An)("span",pe,(0,n.WA)(e.name),1)),l!==(0,u.KV)(i).length-1?((0,t.Wz)(),(0,t.An)(t.ae,{key:2},[(0,t.mY)(", ")],64)):(0,t.g1)("",!0)],64)))),128))])])):(0,t.g1)("",!0)]))}}),me={key:0,class:"page-nav"},ge={class:"inner"},be={key:0,class:"prev"},ke={key:1,class:"next"},fe=(0,t._M)({__name:"PageNav",setup(e){const l=e=>!1===e?null:(0,s.ct)(e)?(0,p.yw)(e):!!(0,s.Yh)(e)&&e,a=(e,l,t)=>{const n=e.findIndex((e=>e.link===l));if(-1!==n){const l=e[n+t];return(null==l?void 0:l.link)?l:null}for(const n of e)if(n.children){const e=a(n.children,l,t);if(e)return e}return null},n=(0,o.aQ)(),u=(0,p.xw)(),r=(0,i.MJ)(),v=(0,t.S6)((()=>{const e=l(n.value.prev);return!1!==e?e:a(u.value,r.path,-1)})),c=(0,t.S6)((()=>{const e=l(n.value.next);return!1!==e?e:a(u.value,r.path,1)}));return(e,l)=>v.value||c.value?((0,t.Wz)(),(0,t.An)("nav",me,[(0,t.QD)("p",ge,[v.value?((0,t.Wz)(),(0,t.An)("span",be,[(0,t.mY)(" ← "),(0,t.K2)(d,{item:v.value},null,8,["item"])])):(0,t.g1)("",!0),c.value?((0,t.Wz)(),(0,t.An)("span",ke,[(0,t.K2)(d,{item:c.value},null,8,["item"]),(0,t.mY)(" → ")])):(0,t.g1)("",!0)])])):(0,t.g1)("",!0)}}),ye={class:"page"},We={class:"theme-default-content"},ze=["innerHTML"],Ae={key:1,style:{"text-align":"center"}},_e=["id"],Qe={key:2,style:{"text-align":"center"}},Se=["id"],we=(0,t._M)({__name:"Page",setup(e){const l=(0,o.aQ)(),a=(0,p.QR)(),u=(0,t.S6)((()=>{var e=l.value.discordNoticeText||a.value.discordNoticeText;return null===e?null:"<p>"+e+"</p>"})),r=(0,t.S6)((()=>{var e=a.value.adTagOne;return null===e?null:e})),i=(0,t.S6)((()=>{var e=a.value.adTagTwo;return null===e?null:e})),s=(0,t.S6)((()=>null==l.value.ads||l.value.ads)),v=(0,t.S6)((()=>null===l.value.title?null:l.value.title));return(e,l)=>{const a=(0,t.E1)("Content");return(0,t.Wz)(),(0,t.An)("main",ye,[(0,t.oF)(e.$slots,"top"),(0,t.QD)("div",We,[(0,t.QD)("h1",null,(0,n.WA)(v.value),1),u.value?((0,t.Wz)(),(0,t.An)("div",{key:0,class:"custom-container tip",innerHTML:u.value},null,8,ze)):(0,t.g1)("",!0),r.value&&s.value?((0,t.Wz)(),(0,t.An)("div",Ae,[(0,t.QD)("div",{id:r.value},null,8,_e)])):(0,t.g1)("",!0),(0,t.K2)(a),i.value&&s.value?((0,t.Wz)(),(0,t.An)("div",Qe,[(0,t.QD)("div",{id:i.value},null,8,Se)])):(0,t.g1)("",!0)]),(0,t.K2)(he),(0,t.K2)(fe),(0,t.oF)(e.$slots,"bottom")])}}}),xe=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ke=(e,l)=>!!((e,l)=>void 0!==l&&(e.hash===l||xe(e.path)===xe(l)))(e,l.link)||!!l.children&&l.children.some((l=>Ke(e,l))),Me=(e,l)=>e.link?(0,t.h)(d,{...l,item:e}):(0,t.h)("p",l,e.text),Le=(e,l)=>{var a;return(null===(a=e.children)||void 0===a?void 0:a.length)?(0,t.h)("ul",{class:{"sidebar-sub-items":l>0}},e.children.map((e=>(0,t.h)("li",(0,t.h)(De,{item:e,depth:l+1}))))):null},De=({item:e,depth:l=0})=>{const a=(0,i.MJ)(),t=Ke(a,e);return[Me(e,{class:{"sidebar-heading":0===l,"sidebar-item":!0,active:t}}),Le(e,l)]};De.displayName="SidebarChild",De.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const Te={class:"sidebar"},Ve={class:"sidebar-links"},$e=(0,t._M)({__name:"Sidebar",setup(e){const l=(0,p.xw)();return(e,a)=>((0,t.Wz)(),(0,t.An)("aside",Te,[(0,t.K2)(I),(0,t.oF)(e.$slots,"top"),(0,t.QD)("ul",Ve,[((0,t.Wz)(!0),(0,t.An)(t.ae,null,(0,t.mi)((0,u.KV)(l),(e=>((0,t.Wz)(),(0,t.An)("li",{key:e.link||e.text},[(0,t.K2)((0,u.KV)(De),{item:e},null,8,["item"])])))),128))]),(0,t.oF)(e.$slots,"bottom")]))}}),Re=(0,t._M)({__name:"Layout",setup(e){const l=(0,o.us)(),a=(0,o.aQ)(),s=(0,p.QR)(),v=(0,t.S6)((()=>!1!==a.value.navbar&&!1!==s.value.navbar)),c=(0,p.xw)(),d=(0,u.IL)(!1),h=e=>{d.value="boolean"==typeof e?e:!d.value},m={x:0,y:0},g=e=>{m.x=e.changedTouches[0].clientX,m.y=e.changedTouches[0].clientY},b=e=>{const l=e.changedTouches[0].clientX-m.x,a=e.changedTouches[0].clientY-m.y;Math.abs(l)>Math.abs(a)&&Math.abs(l)>40&&(l>0&&m.x<=80?h(!0):h(!1))},k=(0,t.S6)((()=>[{"no-navbar":!v.value,"no-sidebar":!c.value.length,"sidebar-open":d.value},a.value.pageClass]));let f;(0,t.u2)((()=>{const e=(0,i.KX)();f=e.afterEach((()=>{h(!1)}))})),(0,t.wx)((()=>{f()}));const y=(0,p.Fb)(),W=y.resolve,z=y.pending;return(e,o)=>((0,t.Wz)(),(0,t.An)("div",{class:(0,n.WN)(["theme-container",k.value]),onTouchstart:g,onTouchend:b},[(0,t.oF)(e.$slots,"navbar",{},(()=>[v.value?((0,t.Wz)(),(0,t.Az)(te,{key:0,onToggleSidebar:h},{before:(0,t.Ql)((()=>[(0,t.oF)(e.$slots,"navbar-before")])),after:(0,t.Ql)((()=>[(0,t.oF)(e.$slots,"navbar-after")])),_:3})):(0,t.g1)("",!0)])),(0,t.QD)("div",{class:"sidebar-mask",onClick:o[0]||(o[0]=e=>h(!1))}),(0,t.oF)(e.$slots,"sidebar",{},(()=>[(0,t.K2)($e,null,{top:(0,t.Ql)((()=>[(0,t.oF)(e.$slots,"sidebar-top")])),bottom:(0,t.Ql)((()=>[(0,t.oF)(e.$slots,"sidebar-bottom")])),_:3})])),(0,t.oF)(e.$slots,"page",{},(()=>[(0,u.KV)(a).home?((0,t.Wz)(),(0,t.Az)(L,{key:0})):((0,t.Wz)(),(0,t.Az)(r.Ox,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:(0,u.KV)(W),onBeforeLeave:(0,u.KV)(z)},{default:(0,t.Ql)((()=>[((0,t.Wz)(),(0,t.Az)(we,{key:(0,u.KV)(l).path},{top:(0,t.Ql)((()=>[(0,t.oF)(e.$slots,"page-top")])),bottom:(0,t.Ql)((()=>[(0,t.oF)(e.$slots,"page-bottom")])),_:3}))])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34))}})}}]);