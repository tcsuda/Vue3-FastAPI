import{M as u,z as _,A as y,B,c as T,y as U,G as f,H as m,u as h,O as a,U as l,S as v,T as j,aq as G,ar as J,F as A,a2 as P,J as $,V as Q,R as X,as as Y,at as Z}from"./@vue.653edf94.js";import{u as H,a as F,o as ee,c as te,b as oe}from"./vue-router.88394060.js";import{u as C,c as se}from"./vuex.d10c6a28.js";import{x as ne,E as ae,y as re,z as le,C as ie,g as ce}from"./@element-plus.97e594d6.js";import{i as _e,z as ue}from"./element-plus.3c253192.js";import"./@vueuse.0455bd57.js";import"./lodash.c260b632.js";import"./dayjs.a4bdb7c5.js";import"./@popperjs.a8a4a6a0.js";import"./async-validator.5d25c98b.js";import"./memoize-one.4ee5c96d.js";import"./normalize-wheel-es.9a219a59.js";const de=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}};de();var V=(e,t)=>{for(const[o,r]of t)e[o]=r;return e};const me={provide(){return{reload:this.reload}},data(){return{isRouterAlive:!0}},methods:{reload(){this.isRouterAlive=!1,this.$nextTick(function(){this.isRouterAlive=!0})}}};function pe(e,t,o,r,s,c){const i=u("router-view");return s.isRouterAlive?(_(),y(i,{key:0})):B("",!0)}var he=V(me,[["render",pe]]);const fe="modulepreload",N={},ve="./",p=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${ve}${r}`,r in N)return;N[r]=!0;const s=r.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":fe,s||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),s)return new Promise((g,b)=>{i.addEventListener("load",g),i.addEventListener("error",b)})})).then(()=>t())};var ge="./assets/img.3f6b7d00.jpg";const q=e=>(G("data-v-8a7bf09c"),e=e(),J(),e),be={class:"header"},xe=q(()=>m("div",{class:"logo"},"\u5B66\u751F\u9009\u8BFE\u7CFB\u7EDF",-1)),ye={class:"header-right"},Ee={class:"header-user-con"},Le={class:"btn-bell"},ke={key:0,class:"btn-bell-badge"},Te=q(()=>m("div",{class:"user-avator"},[m("img",{src:ge})],-1)),je={class:"el-dropdown-link"},De={href:"https://github.com/zxiaosi/Vue3-FastAPI",target:"_blank"},we=v("\u9879\u76EE\u4ED3\u5E93"),Ae=v("\u4E2A\u4EBA\u4E2D\u5FC3"),Pe=v("\u9000\u51FA\u767B\u5F55"),$e={setup(e,{expose:t}){const o=localStorage.getItem("ms_username"),r=2,s=C(),c=T(()=>s.state.collapse),i=()=>{s.commit("handleCollapse",!c.value)};U(()=>{document.body.clientWidth<1500&&i()});const g=H(),b=E=>{E=="loginout"?(localStorage.removeItem("ms_username"),g.push("/login")):E=="user"&&g.push("/user")};return t({username:o,message:r,handleCommand:b}),(E,D)=>{const L=u("el-icon"),w=u("router-link"),n=u("el-tooltip"),d=u("el-dropdown-item"),x=u("el-dropdown-menu"),k=u("el-dropdown");return _(),f("div",be,[m("div",{class:"collapse-btn",onClick:i},[h(c)?(_(),y(L,{key:1,size:20},{default:a(()=>[l(h(ae))]),_:1})):(_(),y(L,{key:0,size:20},{default:a(()=>[l(h(ne))]),_:1}))]),xe,m("div",ye,[m("div",Ee,[m("div",Le,[l(n,{effect:"dark",content:`\u6709${r}\u6761\u672A\u8BFB\u6D88\u606F`,placement:"bottom"},{default:a(()=>[l(w,{to:"/tabs"},{default:a(()=>[l(L,{size:20,color:"#409EFC"},{default:a(()=>[l(h(re))]),_:1})]),_:1})]),_:1},8,["content"]),(_(),f("span",ke))]),Te,l(k,{class:"user-name",trigger:"click",onCommand:b},{dropdown:a(()=>[l(x,null,{default:a(()=>[m("a",De,[l(d,null,{default:a(()=>[we]),_:1})]),l(d,{command:"user"},{default:a(()=>[Ae]),_:1}),l(d,{divided:"",command:"loginout"},{default:a(()=>[Pe]),_:1})]),_:1})]),default:a(()=>[m("span",je,[v(j(h(o))+" ",1),l(L,{size:20},{default:a(()=>[l(h(le))]),_:1})])]),_:1})])])])}}};var Ce=V($e,[["__scopeId","data-v-8a7bf09c"]]);const Re={class:"sidebar"},Ie={setup(e,{expose:t}){const o=[{icon:"el-icon-ali-home",index:"/dashboard",title:"\u7CFB\u7EDF\u9996\u9875"},{icon:"el-icon-ali-cascades",index:"2",title:"\u4FE1\u606F\u8868\u683C",subs:[{index:"/department",title:"\u9662\u7CFB\u8868"},{index:"/major",title:"\u4E13\u4E1A\u8868"},{index:"/teacher",title:"\u6559\u5E08\u8868"},{index:"/student",title:"\u5B66\u751F\u8868"},{index:"/course",title:"\u8BFE\u7A0B\u8868"},{index:"/selectcourse",title:"\u9009\u8BFE\u8868"},{index:"/basetable",title:"\u57FA\u7840\u8868\u683C"}]},{icon:"el-icon-ali-copy",index:"/tabs",title:"tab\u9009\u9879\u5361"},{icon:"el-icon-ali-calendar",index:"3",title:"\u8868\u5355\u76F8\u5173",subs:[{index:"/baseform",title:"\u57FA\u672C\u8868\u5355"}]},{icon:"el-icon-ali-warn",index:"4",title:"\u9519\u8BEF\u5904\u7406",subs:[{index:"/permission",title:"\u6743\u9650\u6D4B\u8BD5"},{index:"/404",title:"404\u9875\u9762"}]},{icon:"el-icon-ali-test",index:"/test",title:"\u6D4B\u8BD5\u9875\u9762"}],r=F(),s=T(()=>r.path),c=C(),i=T(()=>c.state.collapse);return t({items:o,onRoutes:s,collapse:i}),(g,b)=>{const E=u("el-icon"),D=u("el-menu-item"),L=u("el-sub-menu"),w=u("el-menu");return _(),f("div",Re,[l(w,{class:"sidebar-el-menu","default-active":h(s),collapse:h(i),"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""},{default:a(()=>[(_(),f(A,null,P(o,n=>(_(),f(A,null,[n.subs?(_(),y(L,{index:n.index,key:n.index},{title:a(()=>[l(E,{class:$(n.icon)},null,8,["class"]),m("span",null,j(n.title),1)]),default:a(()=>[(_(!0),f(A,null,P(n.subs,(d,x)=>(_(),f(A,null,[d.subs?(_(),y(L,{index:d.index,key:d.index},{title:a(()=>[v(j(d.title),1)]),default:a(()=>[(_(!0),f(A,null,P(d.subs,(k,I)=>(_(),y(D,{key:I,index:k.index},{default:a(()=>[v(j(k.title),1)]),_:2},1032,["index"]))),128))]),_:2},1032,["index"])):(_(),y(D,{index:d.index,key:x},{default:a(()=>[v(j(d.title),1)]),_:2},1032,["index"]))],64))),256))]),_:2},1032,["index"])):(_(),y(D,{index:n.index,key:n.index},{title:a(()=>[v(j(n.title),1)]),default:a(()=>[l(E,{class:$(n.icon)},null,8,["class"])]),_:2},1032,["index"]))],64))),64))]),_:1},8,["default-active","collapse"])])}}};var Oe=V(Ie,[["__scopeId","data-v-5311bdac"]]);const Ve={key:0,class:"tags"},Se=["onClick"],ze={class:"tags-close-box"},Be=v(" \u6807\u7B7E\u9009\u9879 "),He=v("\u5173\u95ED\u5176\u4ED6"),Fe=v("\u5173\u95ED\u6240\u6709"),Ne={setup(e,{expose:t}){const o=F(),r=H(),s=n=>n===o.fullPath,c=C(),i=T(()=>c.state.tagsList),g=T(()=>i.value.length>0),b=n=>{const d=i.value[n];c.commit("delTagsItem",{index:n});const x=i.value[n]?i.value[n]:i.value[n-1];x?d.path===o.fullPath&&r.push(x.path):r.push("/")},E=n=>{i.value.some(x=>x.path===n.fullPath)||(i.value.length>=8&&c.commit("delTagsItem",{index:0}),c.commit("setTagsItem",{name:n.name,title:n.meta.title,path:n.fullPath}))};E(o),ee(n=>{E(n)});const D=()=>{c.commit("clearTags"),r.push("/")},L=()=>{const n=i.value.filter(d=>d.path===o.fullPath);c.commit("closeTagsOther",n)},w=n=>{n==="other"?L():D()};return t({isActive:s,showTags:g,closeTags:b,handleTags:w}),(n,d)=>{const x=u("router-link"),k=u("el-icon"),I=u("el-button"),S=u("el-dropdown-item"),W=u("el-dropdown-menu"),K=u("el-dropdown");return h(g)?(_(),f("div",Ve,[m("ul",null,[(_(!0),f(A,null,P(h(i),(O,z)=>(_(),f("li",{class:$(["tags-li",{active:s(O.path)}]),key:z},[l(x,{to:O.path,class:"tags-li-title"},{default:a(()=>[v(j(O.title),1)]),_:2},1032,["to"]),m("span",{class:"tags-li-icon",onClick:Je=>b(z)},[l(k,{color:"#606266"},{default:a(()=>[l(h(ie))]),_:1})],8,Se)],2))),128))]),m("div",ze,[l(K,{onCommand:w},{dropdown:a(()=>[l(W,{size:"small"},{default:a(()=>[l(S,{command:"other"},{default:a(()=>[He]),_:1}),l(S,{command:"all"},{default:a(()=>[Fe]),_:1})]),_:1})]),default:a(()=>[l(I,{size:"mini",type:"primary"},{default:a(()=>[Be,l(k,{class:"el-icon--right"},{default:a(()=>[l(h(ce))]),_:1})]),_:1})]),_:1})])])):B("",!0)}}},qe={class:"about"},Me={class:"content"},We={setup(e,{expose:t}){const o=C(),r=T(()=>o.state.tagsList.map(c=>c.name)),s=T(()=>o.state.collapse);return t({tagsList:r,collapse:s}),(c,i)=>{const g=u("router-view");return _(),f("div",qe,[l(Ce),l(Oe),m("div",{class:$(["content-box",{"content-collapse":h(s)}])},[l(Ne),m("div",Me,[l(g,null,{default:a(({Component:b})=>[l(Q,{name:"move",mode:"out-in"},{default:a(()=>[(_(),y(Y,{include:h(r)},[(_(),y(X(b)))],1032,["include"]))]),_:2},1024)]),_:1})])],2)])}}},Ke=[{path:"/",redirect:"/dashboard"},{path:"/",name:"Home",component:We,children:[{path:"/dashboard",name:"dashboard",meta:{title:"\u7CFB\u7EDF\u9996\u9875"},component:()=>p(()=>import("./Dashboard.26062bee.js"),["assets/Dashboard.26062bee.js","assets/Dashboard.71909c5d.css","assets/http.1e0f27a9.js","assets/request.f59588e8.js","assets/axios.7aed06b8.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vue.653edf94.js","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@element-plus.97e594d6.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js","assets/vue-router.88394060.js","assets/vuex.d10c6a28.js"])},{path:"/department",name:"department",meta:{title:"\u9662\u7CFB\u8868"},component:()=>p(()=>import("./Department.899ff1c5.js"),["assets/Department.899ff1c5.js","assets/vuex.d10c6a28.js","assets/@vue.653edf94.js","assets/BaseTable.abc06fce.js","assets/BaseTable.0758a958.css","assets/vue-router.88394060.js","assets/Pagination.841b01ec.js","assets/@element-plus.97e594d6.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js","assets/department.ab9ab17b.js","assets/http.1e0f27a9.js","assets/request.f59588e8.js","assets/axios.7aed06b8.js"])},{path:"/major",name:"major",meta:{title:"\u4E13\u4E1A\u8868"},component:()=>p(()=>import("./Major.89d88301.js"),["assets/Major.89d88301.js","assets/Major.af8d0fca.css","assets/vuex.d10c6a28.js","assets/@vue.653edf94.js","assets/BaseTable.abc06fce.js","assets/BaseTable.0758a958.css","assets/vue-router.88394060.js","assets/Pagination.841b01ec.js","assets/@element-plus.97e594d6.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js","assets/major.d8980729.js","assets/http.1e0f27a9.js","assets/request.f59588e8.js","assets/axios.7aed06b8.js","assets/department.ab9ab17b.js","assets/byIdGetName.f3220ff3.js"])},{path:"/teacher",name:"teacher",meta:{title:"\u6559\u5E08\u8868"},component:()=>p(()=>import("./Teacher.368bcfcd.js"),["assets/Teacher.368bcfcd.js","assets/Teacher.aa7df464.css","assets/vuex.d10c6a28.js","assets/@vue.653edf94.js","assets/BaseTable.abc06fce.js","assets/BaseTable.0758a958.css","assets/vue-router.88394060.js","assets/Pagination.841b01ec.js","assets/@element-plus.97e594d6.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js","assets/teacher.30efd426.js","assets/http.1e0f27a9.js","assets/request.f59588e8.js","assets/axios.7aed06b8.js","assets/department.ab9ab17b.js","assets/byIdGetName.f3220ff3.js"])},{path:"/student",name:"student",meta:{title:"\u5B66\u751F\u8868"},component:()=>p(()=>import("./Student.d168e2bd.js"),["assets/Student.d168e2bd.js","assets/Student.27d983cb.css","assets/vuex.d10c6a28.js","assets/@vue.653edf94.js","assets/BaseTable.abc06fce.js","assets/BaseTable.0758a958.css","assets/vue-router.88394060.js","assets/Pagination.841b01ec.js","assets/@element-plus.97e594d6.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js","assets/student.42180676.js","assets/http.1e0f27a9.js","assets/request.f59588e8.js","assets/axios.7aed06b8.js","assets/major.d8980729.js","assets/byIdGetName.f3220ff3.js"])},{path:"/course",name:"course",meta:{title:"\u8BFE\u7A0B\u8868"},component:()=>p(()=>import("./Course.90c35608.js"),["assets/Course.90c35608.js","assets/Course.554a46c4.css","assets/vuex.d10c6a28.js","assets/@vue.653edf94.js","assets/BaseTable.abc06fce.js","assets/BaseTable.0758a958.css","assets/vue-router.88394060.js","assets/Pagination.841b01ec.js","assets/@element-plus.97e594d6.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js","assets/course.fbaecf13.js","assets/http.1e0f27a9.js","assets/request.f59588e8.js","assets/axios.7aed06b8.js"])},{path:"/selectcourse",name:"selectcourse",meta:{title:"\u9009\u8BFE\u8868"},component:()=>p(()=>import("./SelectCourse.5bf2feaf.js"),["assets/SelectCourse.5bf2feaf.js","assets/SelectCourse.64678bb9.css","assets/@vue.653edf94.js","assets/vuex.d10c6a28.js","assets/BaseTable.abc06fce.js","assets/BaseTable.0758a958.css","assets/vue-router.88394060.js","assets/Pagination.841b01ec.js","assets/@element-plus.97e594d6.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js","assets/http.1e0f27a9.js","assets/request.f59588e8.js","assets/axios.7aed06b8.js","assets/student.42180676.js","assets/teacher.30efd426.js","assets/course.fbaecf13.js","assets/byIdGetName.f3220ff3.js"])},{path:"/basetable",name:"basetable",meta:{title:"\u57FA\u7840\u8868\u683C"},component:()=>p(()=>import("./BaseTable.46b47b83.js"),["assets/BaseTable.46b47b83.js","assets/BaseTable.dc2b604c.css","assets/baseTable.fa155013.js","assets/request.f59588e8.js","assets/axios.7aed06b8.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vue.653edf94.js","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@element-plus.97e594d6.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js","assets/vue-router.88394060.js","assets/vuex.d10c6a28.js"])},{path:"/baseform",name:"baseform",meta:{title:"\u57FA\u672C\u8868\u5355"},component:()=>p(()=>import("./BaseForm.ef5eb270.js"),["assets/BaseForm.ef5eb270.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vue.653edf94.js","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@element-plus.97e594d6.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js","assets/vue-router.88394060.js","assets/vuex.d10c6a28.js"])},{path:"/tabs",name:"tabs",meta:{title:"tab\u6807\u7B7E"},component:()=>p(()=>import("./Tabs.a76613ac.js"),["assets/Tabs.a76613ac.js","assets/Tabs.80382fa5.css","assets/@vue.653edf94.js"])},{path:"/permission",name:"permission",meta:{title:"\u6743\u9650\u7BA1\u7406",permission:!0},component:()=>p(()=>import("./Permission.3eef8e16.js"),["assets/Permission.3eef8e16.js","assets/Permission.b62af482.css","assets/@vue.653edf94.js","assets/vue-router.88394060.js","assets/vuex.d10c6a28.js","assets/@element-plus.97e594d6.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js"])},{path:"/404",name:"404",meta:{title:"\u627E\u4E0D\u5230\u9875\u9762"},component:()=>p(()=>import("./404.8556697e.js"),["assets/404.8556697e.js","assets/404.1ab6dc8f.css","assets/vue-router.88394060.js","assets/@vue.653edf94.js","assets/vuex.d10c6a28.js","assets/@element-plus.97e594d6.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js"])},{path:"/403",name:"403",meta:{title:"\u6CA1\u6709\u6743\u9650"},component:()=>p(()=>import("./403.009f127e.js"),["assets/403.009f127e.js","assets/403.345ef6f9.css","assets/vue-router.88394060.js","assets/@vue.653edf94.js","assets/vuex.d10c6a28.js","assets/@element-plus.97e594d6.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js"])},{path:"/test",name:"test",meta:{title:"\u6D4B\u8BD5\u9875\u9762"},component:()=>p(()=>import("./Test.423dad7b.js"),["assets/Test.423dad7b.js","assets/Test.3ee78bb2.css","assets/Pagination.841b01ec.js","assets/@vue.653edf94.js","assets/baseTable.fa155013.js","assets/request.f59588e8.js","assets/axios.7aed06b8.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@element-plus.97e594d6.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js","assets/vue-router.88394060.js","assets/vuex.d10c6a28.js"])}]},{path:"/login",name:"Login",meta:{title:"\u767B\u5F55"},component:()=>p(()=>import("./Login.010c70e8.js"),["assets/Login.010c70e8.js","assets/Login.e27feeeb.css","assets/@vue.653edf94.js","assets/vuex.d10c6a28.js","assets/vue-router.88394060.js","assets/element-plus.3c253192.js","assets/element-plus.26c6417a.css","assets/@vueuse.0455bd57.js","assets/lodash.c260b632.js","assets/dayjs.a4bdb7c5.js","assets/@element-plus.97e594d6.js","assets/@popperjs.a8a4a6a0.js","assets/async-validator.5d25c98b.js","assets/memoize-one.4ee5c96d.js","assets/normalize-wheel-es.9a219a59.js"])}],M=te({history:oe(),routes:Ke});M.beforeEach((e,t,o)=>{document.title=`${e.meta.title} | \u5B66\u751F\u9009\u8BFE\u7CFB\u7EDF`;const r=localStorage.getItem("ms_username");!r&&e.path!=="/login"?o("/login"):e.meta.permission?r==="admin"?o():o("/403"):o()});var Ue=se({state:{tagsList:[],collapse:!1,departmentData:[],majorData:[],teacherData:[],studentData:[],courseData:[],selectCourseData:[]},mutations:{delTagsItem(e,t){e.tagsList.splice(t.index,1)},setTagsItem(e,t){e.tagsList.push(t)},clearTags(e){e.tagsList=[]},closeTagsOther(e,t){e.tagsList=t},closeCurrentTag(e,t){for(let o=0,r=e.tagsList.length;o<r;o++)if(e.tagsList[o].path===t.$route.fullPath){o<r-1?t.$router.push(e.tagsList[o+1].path):o>0?t.$router.push(e.tagsList[o-1].path):t.$router.push("/"),e.tagsList.splice(o,1);break}},handleCollapse(e,t){e.collapse=t},handleData(e,t){switch(t[0]){case"department":e.departmentData=t[1];break;case"major":e.majorData=t[1];break;case"teacher":e.teacherData=t[1];break;case"student":e.studentData=t[1];break;case"course":e.courseData=t[1];break;case"selectCourse":e.selectCourseData=t[1];break}}},actions:{},modules:{}}),Ge=e=>{e.use(_e,{locale:ue})};const R=Z(he);Ge(R);R.config.errorHandler=()=>null;R.config.warnHandler=()=>null;R.use(Ue).use(M).mount("#app");export{V as _,ge as a};
