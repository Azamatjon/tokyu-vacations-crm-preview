(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34d18662"],{"169a":function(t,e,i){"use strict";var n=i("5530"),a=i("2909"),s=i("ade3"),o=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),f=i("f2e7"),m=i("a293"),v=i("58df"),p=i("d9bd"),b=i("80d2"),g=Object(v["a"])(r["a"],l["a"],c["a"],d["a"],u["a"],h["a"],f["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:m["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["t"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(a["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1f4f":function(t,e,i){"use strict";var n=i("5530"),a=(i("a9e3"),i("8b37"),i("80d2")),s=i("7560"),o=i("58df");e["a"]=Object(o["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(n["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2d8e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("base-facility",{scopedSlots:t._u([{key:"title",fn:function(){return[i("router-link",{staticClass:"grey--text text-decoration-none",attrs:{to:"/facility"}},[t._v("Kyoto")]),t._v(" / No smoking")]},proxy:!0},{key:"default",fn:function(){return[i("v-card",{staticClass:"v-card-responsive-table pa-5",attrs:{shaped:"",tile:""}},[t._m(0),i("v-simple-table",{staticClass:"custom-table d-flex mt-n4",scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v(" Room ID ")]),i("th",{staticClass:"text-left"},[t._v(" Room name ")]),i("th",{staticClass:"text-left"},[t._v(" Edit room ")])])]),i("tbody",t._l(t.rooms,(function(e){return i("tr",{key:e.id},[i("td",[t._v(t._s(e.id))]),i("td",{staticClass:"font-weight-medium"},[t._v(t._s(e.name))]),i("td",{staticClass:"text-center"},[i("v-btn",{attrs:{color:"white",elevation:"2","x-small":"",fab:""},on:{click:t.editRoom}},[i("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-pencil ")])],1)],1)])})),0)]},proxy:!0}])}),i("div",{staticClass:"text-end mt-5"},[i("create-room-modal",[t._v("Create a new room")])],1)],1)]},proxy:!0}])})},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card-title",{staticClass:"grey--text mt-n5"},[t._v(" "+t._s(t.facilityTitle)+" > "+t._s(t.roomTypeTitle)+" > No smoking ")])}],s=i("3213"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"blue darken-4",dark:""}},"v-btn",a,!1),n),[t._t("default")],2)]}}],null,!0),model:{value:t.isModalOpen,callback:function(e){t.isModalOpen=e},expression:"isModalOpen"}},[i("v-card",{staticClass:"pa-5"},[i("v-form",{ref:"form",staticClass:"custom-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("v-card-title",[i("span",{staticClass:"headline grey--text"},[t._v(t._s(t.title))])]),i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-row",[i("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[i("label",{staticClass:"custom-form-label",attrs:{for:"room-title"}},[t._v("Room name (for management)")])]),i("v-col",{staticClass:"py-0",attrs:{cols:"8"}},[i("v-text-field",{attrs:{id:"room-title",rules:t.rules.titleRequired,dense:"",outlined:""},model:{value:t.roomTitle,callback:function(e){t.roomTitle=e},expression:"roomTitle"}})],1)],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red accent-4",dark:""},on:{click:function(e){t.isModalOpen=!1}}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"blue darken-4",dark:"",type:"submit"}},[t._v(" Save and create ")])],1)],1)],1)],1)},r=[],l={name:"CreateRoomModal",data:function(){return{title:"Creating a new room",isModalOpen:!1,valid:!0,roomTitle:"",rules:{titleRequired:[function(t){return!!t||"Name is required"}]}}},methods:{onSubmit:function(){this.$refs.form.validate()&&(this.isModalOpen=!1,this.$router.push({path:"/facility/settings/43224/room-types/43323/rooms/25345/edit"}))}}},c=l,d=i("2877"),u=i("6544"),h=i.n(u),f=i("8336"),m=i("b0af"),v=i("99d9"),p=i("62ad"),b=i("a523"),g=i("169a"),y=i("4bd4"),x=i("0fd9"),C=i("2fa4"),_=i("8654"),w=Object(d["a"])(c,o,r,!1,null,null,null),k=w.exports;h()(w,{VBtn:f["a"],VCard:m["a"],VCardActions:v["a"],VCardTitle:v["c"],VCol:p["a"],VContainer:b["a"],VDialog:g["a"],VForm:y["a"],VRow:x["a"],VSpacer:C["a"],VTextField:_["a"]});var O={name:"FacilityRoomsSettings",data:function(){return{facilityTitle:"Facility list",roomTypeTitle:"Kyoto",rooms:[]}},mounted:function(){this.initRooms()},methods:{initRooms:function(){for(var t=0;t<5;t++)this.rooms.push({id:Math.floor(9e4*Math.random())+1e4,name:"10"+(t+1)})},editRoom:function(){this.$router.push({path:"/facility/settings/43224/room-types/43323/rooms/25345/edit"})}},components:{BaseFacility:s["a"],CreateRoomModal:k}},$=O,T=i("132d"),A=i("1f4f"),S=Object(d["a"])($,n,a,!1,null,"b3cc73f2",null);e["default"]=S.exports;h()(S,{VBtn:f["a"],VCard:m["a"],VCardTitle:v["c"],VIcon:T["a"],VSimpleTable:A["a"]})},3213:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("h1",{staticClass:"mx-12 my-4 grey--text font-weight-medium"},[t._t("title")],2),t._t("actions"),[i("v-tabs",{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e,n){return i("v-tab",{key:n,attrs:{to:e.to}},[t._v(t._s(e.title))])})),1),t._t("default")]],2)])},a=[],s={name:"BaseFacility",data:function(){return{title:"Facility",tab:null,items:[{title:"Facility settings",to:"/facility/settings"},{title:"Loans",to:"/facility/loans"},{title:"Key settings",to:"/facility/key-settings"}]}},components:{}},o=s,r=i("2877"),l=i("6544"),c=i.n(l),d=i("71a3"),u=i("fe57"),h=Object(r["a"])(o,n,a,!1,null,null,null);e["a"]=h.exports;c()(h,{VTab:d["a"],VTabs:u["a"]})},"368e":function(t,e,i){},"8b37":function(t,e,i){}}]);
//# sourceMappingURL=chunk-34d18662.9c7250a4.js.map