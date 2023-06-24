(function(){"use strict";var e={3170:function(e,t,a){var n=a(9242),l=a(3396);function s(e,t,a,n,s,i){const r=(0,l.up)("navbar"),o=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r),(0,l.Wm)(o)],64)}a(7658);var i=a(7139);const r={class:"container-fluid"},o=(0,l._)("a",{href:"#",class:"navbar-brand"},"My Vue",-1),c={class:"navbar-nav me-auto mb-2 mb-lg-0"},u={class:"d-flex"};function p(e,t,a,s,p,d){const g=(0,l.up)("navbar-link"),h=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("nav",{class:(0,i.C_)([`navbar-${p.theme}`,`bg-${p.theme}`,"navbar","navbar-expand-lg"])},[(0,l._)("div",r,[o,(0,l._)("ul",c,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.publishedPages,((e,t)=>((0,l.wg)(),(0,l.j4)(g,{class:"nav-item",key:t,page:e},null,8,["page"])))),128)),(0,l._)("li",null,[(0,l.Wm)(h,{to:"/pages",class:"nav-link","aria-current":"page","active-class":"active"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Manage Pages ")])),_:1})])]),(0,l._)("form",u,[(0,l._)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=(0,n.iM)((e=>d.changeTheme()),["prevent"]))}," Toggle Navbar ")])])],2)}function d(e,t,a,n,s,r){const o=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("li",null,[(0,l.Wm)(o,{to:`/${a.page.id}`,class:"nav-link","aria-current":"page",title:`This link goes to the ${a.page.link.text} page`,"active-class":"active"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.page.link.text),1)])),_:1},8,["to","title"])])}var g={props:["page"]},h=a(89);const m=(0,h.Z)(g,[["render",d]]);var v=m,b={components:{NavbarLink:v},inject:["$pages","$bus"],created(){this.getThemeSetting(),this.pages=this.$pages.getAllPages(),this.$bus.$on("page-updated",(()=>{this.pages=[...this.$pages.getAllPages()]})),this.$bus.$on("page-created",(()=>{this.pages=[...this.$pages.getAllPages()]})),this.$bus.$on("page-deleted",(()=>{this.pages=[...this.$pages.getAllPages()]}))},computed:{publishedPages(){return this.pages.filter((e=>e.published))}},data(){return{theme:"light",pages:[]}},methods:{changeTheme(){let e="light";"light"==this.theme&&(e="dark"),this.theme=e,this.storeThemeSetting()},storeThemeSetting(){localStorage.setItem("theme",this.theme)},getThemeSetting(){let e=localStorage.getItem("theme");e&&(this.theme=e)}}};const f=(0,h.Z)(b,[["render",p]]);var _=f,k={components:{Navbar:_},created(){},methods:{pageCreated(e){this.pages.push(e)}}};const w=(0,h.Z)(k,[["render",s]]);var y=w;const P=new Map;var $={$on(e,t){P.has(e)||P.set(e,[]),P.get(e).push(t)},$off(e,t){throw{message:"Not implemented"}},$emit(e,t){P.has(e)&&P.get(e).forEach((e=>e(t)))}},x=a(2483);const S={key:0,class:"container"},U={class:"emphasize"};function C(e,t,a,n,s,r){return s.page?((0,l.wg)(),(0,l.iD)("div",S,[(0,l._)("h1",U,(0,i.zw)(s.page.pageTitle),1),(0,l._)("p",null,(0,i.zw)(s.page.content),1)])):(0,l.kq)("",!0)}var T={props:["id"],inject:["$pages"],created(){this.page=this.$pages.readSinglePage(this.id)},data(){return{page:null}},watch:{id(e,t){this.page=this.$pages.readSinglePage(e)}}};const O=(0,h.Z)(T,[["render",C],["__scopeId","data-v-4a4a8ed2"]]);var D=O,H=a(4870);const M={class:"container mb-3"},j={action:""},V={class:"row"},z={class:"col-md-8"},I={class:"mb-3"},N=(0,l._)("label",{for:"",class:"form-label"}," Page Title ",-1),W={class:"mb-3"},A=(0,l._)("label",{for:"",class:"form-label"},"Content",-1),Y={class:"col"},q={class:"mb-3"},E=(0,l._)("label",{for:"",class:"form-label"},"Link Text",-1),L={class:"mb-3"},Z={class:"form-check"},F=(0,l._)("label",{for:"publishedCheck",class:"form-check-label"},"Published",-1),J={class:"mb-3"},K=["disabled","onClick"];var B={__name:"CreatePage",setup(e){const t=(0,x.tv)(),a=(0,l.f3)("$bus"),s=(0,l.f3)("$pages");let i=(0,H.iH)(""),r=(0,H.iH)(""),o=(0,H.iH)(""),c=(0,H.iH)(!0);function u(){if(!i||!r||!o)return void alert("Please fill the form.");const e={pageTitle:i.value,content:r.value,link:{text:o.value},published:c.value};s.addPage(e),a.$emit("page-created",e),t.push({path:"/pages"})}const p=(0,l.Fl)((()=>!i.value||!r.value||!o.value));return(0,l.YP)(i,((e,t)=>{o.value==t&&(o.value=e)})),(e,t)=>((0,l.wg)(),(0,l.iD)("div",M,[(0,l._)("form",j,[(0,l._)("div",V,[(0,l._)("div",z,[(0,l._)("div",I,[N,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>(0,H.dq)(i)?i.value=e:i=e)},null,512),[[n.nr,(0,H.SU)(i)]])]),(0,l._)("div",W,[A,(0,l.wy)((0,l._)("textarea",{type:"text",rows:"5",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>(0,H.dq)(r)?r.value=e:r=e)},null,512),[[n.nr,(0,H.SU)(r)]])])]),(0,l._)("div",Y,[(0,l._)("div",q,[E,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>(0,H.dq)(o)?o.value=e:o=e)},null,512),[[n.nr,(0,H.SU)(o)]])]),(0,l._)("div",L,[(0,l._)("div",Z,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"publishedCheck",class:"form-check-input","onUpdate:modelValue":t[3]||(t[3]=e=>(0,H.dq)(c)?c.value=e:c=e)},null,512),[[n.e8,(0,H.SU)(c)]]),F])])])]),(0,l._)("div",J,[(0,l._)("button",{class:"btn btn-primary",disabled:p.value,onClick:(0,n.iM)(u,["prevent"]),type:"submit"},"Create Page",8,K)])])]))}};const G=B;var Q=G;const R={class:"container"},X=(0,l._)("h2",null,"Page Management",-1);function ee(e,t){const a=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",R,[X,(0,l.Wm)(a)])}const te={},ae=(0,h.Z)(te,[["render",ee]]);var ne=ae;const le={class:"text-end"},se={class:"table table-hover"},ie=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Title"),(0,l._)("th",null,"Link Text"),(0,l._)("th",null,"Is Published")])],-1),re=["onClick"];var oe={__name:"PagesList",setup(e){const t=(0,l.f3)("$pages"),a=(0,x.tv)();function n(e){a.push({path:`/pages/${e}/edit`})}return(e,a)=>{const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",le,[(0,l.Wm)(s,{to:"/pages/create",class:"btn btn-primary btn-sm"},{default:(0,l.w5)((()=>[(0,l.Uk)(" New Page ")])),_:1})]),(0,l._)("table",se,[ie,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,H.SU)(t).getAllPages(),((e,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:t,onClick:e=>n(t)},[(0,l._)("td",null,(0,i.zw)(e.pageTitle),1),(0,l._)("td",null,(0,i.zw)(e.link.text),1),(0,l._)("td",null,(0,i.zw)(e.published?"yes":"no"),1)],8,re)))),128))])])],64)}}};const ce=oe;var ue=ce;const pe={action:"",class:"container mb-3"},de={class:"row"},ge={class:"col-md-8"},he={class:"mb-3"},me=(0,l._)("label",{for:"",class:"form-label"}," Page Title ",-1),ve={class:"mb-3"},be=(0,l._)("label",{for:"",class:"form-label"},"Content",-1),fe={class:"col"},_e={class:"mb-3"},ke=(0,l._)("label",{for:"",class:"form-label"},"Link Text",-1),we={class:"mb-3"},ye={class:"form-check"},Pe=(0,l._)("label",{for:"publishedCheck",class:"form-check-label"},"Published",-1),$e={class:"mb-3"},xe=["onClick"],Se=["onClick"],Ue=["onClick"];var Ce={__name:"PageEdit",props:["id"],setup(e){const{id:t}=e,a=(0,x.tv)(),s=(0,l.f3)("$pages"),r=(0,l.f3)("$bus");let o=s.getSinglePage(t);function c(){s.editPage(t,o),r.$emit("page-updated",{page:o}),u()}function u(){a.push({path:"/pages"})}function p(){s.removePage(t),r.$emit("page-deleted",{id:t}),u()}return(e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("h4",null,"Edit "+(0,i.zw)((0,H.SU)(o).pageTitle),1),(0,l._)("form",pe,[(0,l._)("div",de,[(0,l._)("div",ge,[(0,l._)("div",he,[me,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>(0,H.SU)(o).pageTitle=e)},null,512),[[n.nr,(0,H.SU)(o).pageTitle]])]),(0,l._)("div",ve,[be,(0,l.wy)((0,l._)("textarea",{type:"text",rows:"5",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>(0,H.SU)(o).content=e)},null,512),[[n.nr,(0,H.SU)(o).content]])])]),(0,l._)("div",fe,[(0,l._)("div",_e,[ke,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>(0,H.SU)(o).link.text=e)},null,512),[[n.nr,(0,H.SU)(o).link.text]])]),(0,l._)("div",we,[(0,l._)("div",ye,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"publishedCheck",class:"form-check-input","onUpdate:modelValue":t[3]||(t[3]=e=>(0,H.SU)(o).published=e)},null,512),[[n.e8,(0,H.SU)(o).published]]),Pe])])])]),(0,l._)("div",$e,[(0,l._)("button",{class:"btn btn-primary me-2",onClick:(0,n.iM)(c,["prevent"])},"Edit",8,xe),(0,l._)("button",{class:"btn btn-secondary me-2",onClick:(0,n.iM)(u,["prevent"])},"Cancel",8,Se),(0,l._)("button",{class:"btn btn-danger",onClick:(0,n.iM)(p,["prevent"])},"Delete",8,Ue)])])],64))}};const Te=Ce;var Oe=Te;const De=(0,x.p7)({history:(0,x.r5)(),routes:[{path:"/:id?",component:D,props:!0},{path:"/pages",component:ne,children:[{path:"",component:ue},{path:"create",component:Q},{path:":id/edit",component:Oe,props:!0}]}]});var He=De;const Me="pages";let je=localStorage.getItem(Me),Ve=JSON.parse(je);function ze(){localStorage.setItem(Me,JSON.stringify(Ve))}Ve||(Ve=[{id:0,pageTitle:"Home",content:"Welcome!",link:{text:"Home"},published:!0}],ze());var Ie={addPage(e){e.id=Ve[Ve.length-1].id+1,Ve.push(e),ze()},getAllPages(){return Ve},readSinglePage(e){return Ve.find((t=>t.id==e&&t.published))},getSinglePage(e){return Ve.find((t=>t.id==e))},editPage(e,t){Ve[Ve.findIndex((t=>t.id==e))]=t,ze()},removePage(e){Ve.splice(Ve.findIndex((t=>t.id==e)),1),ze()}};const Ne=(0,n.ri)(y);Ne.use(He),Ne.provide("$bus",$),Ne.provide("$pages",Ie),Ne.mount("#app")}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],s=e[u][2];for(var r=!0,o=0;o<n.length;o++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[o])}))?n.splice(o--,1):(r=!1,s<i&&(i=s));if(r){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,l,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,s,i=n[0],r=n[1],o=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(o)var u=o(a)}for(t&&t(n);c<i.length;c++)s=i[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},n=self["webpackChunkvue_page_manager"]=self["webpackChunkvue_page_manager"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(3170)}));n=a.O(n)})();
//# sourceMappingURL=app.bbc493ba.js.map