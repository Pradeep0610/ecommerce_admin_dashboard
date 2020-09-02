(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b84dd00"],{"2ee4":function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){function e(s){if(a[s])return a[s].exports;var i=a[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,s){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,s,i,n){var r,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,o=t.default);var c,u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i),n?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},u._ssrRegister=c):s&&(c=s),c){var d=u.functional,v=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),v(t,e)}):u.beforeCreate=v?[].concat(v,c):[c]}return{esModule:r,exports:o,options:u}}},function(t,e,a){"use strict";var s=a(2),i=a(4),n=a(14);e.a={name:"form-wizard",components:{WizardButton:s.a,WizardStep:i.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var s=function s(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,s)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,s):(this.setValidationError(null),s())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(n.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(n.a)(e.tabId)}},focusPrevTab:function(){var t=Object(n.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(n.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(n.c)(t))this.setLoading(!0),t.then((function(t){a.setLoading(!1);var s=!0===t;a.executeBeforeChange(s,e)})).catch((function(t){a.setLoading(!1),a.setValidationError(t)}));else{var s=!0===t;this.executeBeforeChange(s,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var s=a.beforeChange();this.validateBeforeChange(s,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=this.tabs[t],i=this.tabs[e];return s&&(s.active=!1),i&&(i.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find((function(a,s){var i=a.route===t;return i&&(e=s),i}));if(a&&!a.active){var s=e>this.activeTabIndex;this.navigateToTab(e,s)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function s(t){a(10)}var i=a(3),n=a(11),r=a(0),o=s,l=r(i.a,n.a,!1,o,null,null);e.a=l.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function s(t){a(12)}var i=a(5),n=a(13),r=a(0),o=s,l=r(i.a,n.a,!1,o,null,null);e.a=l.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(8),i=a(16),n=a(2),r=a(4);a.d(e,"FormWizard",(function(){return s.a})),a.d(e,"TabContent",(function(){return i.a})),a.d(e,"WizardButton",(function(){return n.a})),a.d(e,"WizardStep",(function(){return r.a}));var o={install:function(t){t.component("form-wizard",s.a),t.component("tab-content",i.a),t.component("wizard-button",n.a),t.component("wizard-step",r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,a){"use strict";function s(t){a(9)}var i=a(1),n=a(15),r=a(0),o=s,l=r(i.a,n.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";function s(){return document.activeElement.id}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=s();return t.findIndex((function(t){return t.tabId===e}))}function n(t){document.getElementById(t).focus()}function r(t){return t.then&&"function"==typeof t.then}e.b=i,e.a=n,e.c=r},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(e,s){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:s},nativeOn:{click:function(e){t.navigateToTab(s)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(s)}}})],{tab:e,index:s,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},i=[],n={render:s,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";var s=a(6),i=a(17),n=a(0),r=n(s.a,i.a,!1,null,null,null);e.a=r.exports},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},i=[],n={render:s,staticRenderFns:i};e.a=n}])}))},c604:function(t,e,a){},da93:function(t,e,a){},dab3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"ecommerce-checkout-demo"}},[s("form-wizard",{ref:"checkoutWizard",attrs:{color:"rgba(var(--vs-primary), 1)",title:null,subtitle:null,"hide-buttons":!0}},[s("tab-content",{staticClass:"mb-5",attrs:{title:"Cart",icon:"feather icon-shopping-cart"}},[t.cartItems.length?s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col lg:w-2/3 w-full relative"},t._l(t.cartItems,(function(e,a){return s("div",{key:e.objectID,staticClass:"items-list-view"},[s("item-list-view",{attrs:{item:e}},[s("template",{slot:"item-meta"},[s("h6",{staticClass:"item-name font-semibold mb-1"},[t._v(t._s(e.name))]),s("p",{staticClass:"text-sm mb-2 cursor-pointer"},[t._v(" By "),s("span",{staticClass:"text-primary font-semibold"},[t._v(t._s(e.brand))])]),s("p",{staticClass:"text-success text-sm"},[t._v("In Stock")]),s("p",{staticClass:"mt-4 font-bold text-sm"},[t._v("Quantity")]),s("vs-input-number",{staticClass:"inline-flex",attrs:{min:"1",max:"10",value:e.quantity},on:{input:function(e){return t.updateItemQuantity(e,a)}}}),s("p",{staticClass:"font-medium text-grey mt-4"},[t._v("Delivery by, "+t._s(e.delivery_date))]),s("p",{staticClass:"text-success font-medium"},[t._v(t._s(e.discount_in_percentage)+"% off "+t._s(e.offers_count)+" offers Available")])],1),s("template",{slot:"action-buttons"},[s("div",{staticClass:"item-view-primary-action-btn p-3 rounded-lg flex flex-grow items-center justify-center cursor-pointer mb-3",on:{click:function(a){return t.removeItemFromCart(e)}}},[s("feather-icon",{attrs:{icon:"XIcon",svgClasses:"h-4 w-4"}}),s("span",{staticClass:"text-sm font-semibold ml-2"},[t._v("REMOVE")])],1),s("div",{staticClass:"item-view-secondary-action-btn bg-primary p-3 rounded-lg flex flex-grow items-center justify-center text-white cursor-pointer",on:{click:function(a){return t.wishListButtonClicked(e)}}},[s("feather-icon",{attrs:{icon:"HeartIcon",svgClasses:[{"text-white fill-current":t.isInWishList(e.objectID)},"h-4 w-4"]}}),(t.isInWishList(e.objectID),s("span",{staticClass:"text-sm font-semibold ml-2"},[t._v("WISHLIST")]))],1)])],2)],1)})),0),s("div",{staticClass:"vx-col lg:w-1/3 w-full"},[s("vx-card",[s("p",{staticClass:"text-grey mb-3"},[t._v("Options")]),s("div",{staticClass:"flex justify-between"},[s("span",{staticClass:"font-semibold"},[t._v("Coupons")]),s("span",{staticClass:"font-medium text-primary cursor-pointer"},[t._v("Apply")])]),s("vs-divider"),s("p",{staticClass:"font-semibold mb-3"},[t._v("Price Details")]),s("div",{staticClass:"flex justify-between mb-2"},[s("span",{staticClass:"text-grey"},[t._v("Total MRP")]),s("span",[t._v("$598")])]),s("div",{staticClass:"flex justify-between mb-2"},[s("span",{staticClass:"text-grey"},[t._v("Bag Discount")]),s("span",{staticClass:"text-success"},[t._v("-25$")])]),s("div",{staticClass:"flex justify-between mb-2"},[s("span",{staticClass:"text-grey"},[t._v("Estimated Tax")]),s("span",[t._v("$1.3")])]),s("div",{staticClass:"flex justify-between mb-2"},[s("span",{staticClass:"text-grey"},[t._v("EMI Eligibility")]),s("a",{staticClass:"text-primary",attrs:{href:"#"}},[t._v("Details")])]),s("div",{staticClass:"flex justify-between mb-2"},[s("span",{staticClass:"text-grey"},[t._v("Delivery Charges")]),s("span",{staticClass:"text-success"},[t._v("Free")])]),s("vs-divider"),s("div",{staticClass:"flex justify-between font-semibold mb-3"},[s("span",[t._v("Total")]),s("span",[t._v("$574.3")])]),s("vs-button",{staticClass:"w-full",on:{click:function(e){return t.$refs.checkoutWizard.nextTab()}}},[t._v("PLACE ORDER")])],1)],1)]):s("vx-card",{attrs:{title:"You don't have any items in your cart."}},[s("vs-button",{on:{click:function(e){return t.$router.push("/apps/eCommerce/shop")}}},[t._v("Browse Shop")])],1)],1),s("tab-content",{staticClass:"mb-5",attrs:{title:"Address",icon:"feather icon-home"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col lg:w-2/3 w-full"},[s("vx-card",{staticClass:"mb-base",attrs:{title:"Add New Address",subtitle:'Be sure to check "Deliver to this address" when you have finished'}},[s("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.passes;return[s("form",{attrs:{"data-vv-scope":"add-new-address"},on:{submit:function(e){return e.preventDefault(),a(t.submitNewAddressForm)}}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("validation-provider",{attrs:{name:"Full Name",rules:"required|alpha_spaces"},scopedSlots:t._u([{key:"default",fn:function(e){e.valid;var a=e.errors;return[s("vs-input",{staticClass:"w-full mt-5",attrs:{"data-vv-as":"field",name:"fullName",label:"Full Name:"},model:{value:t.fullName,callback:function(e){t.fullName=e},expression:"fullName"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:a,expression:"errors"}],staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("validation-provider",{attrs:{name:"Mobile Number",rules:"required|digits:10"},scopedSlots:t._u([{key:"default",fn:function(e){e.valid;var a=e.errors;return[s("vs-input",{staticClass:"w-full mt-5",attrs:{rules:"'required|digits:10'",name:"mobileNum",label:"Mobile Number:"},model:{value:t.mobileNum,callback:function(e){t.mobileNum=e},expression:"mobileNum"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:a,expression:"errors"}],staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("validation-provider",{attrs:{name:"House Number",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){e.valid;var a=e.errors;return[s("vs-input",{staticClass:"w-full mt-5",attrs:{rules:"'required'",name:"houseNum",label:"Flat, House No:"},model:{value:t.houseNum,callback:function(e){t.houseNum=e},expression:"houseNum"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:a,expression:"errors"}],staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-input",{staticClass:"w-full mt-5",attrs:{name:"landmark",label:"Landmark e.g. near apollo hospital:"},model:{value:t.landmark,callback:function(e){t.landmark=e},expression:"landmark"}})],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("validation-provider",{attrs:{name:"City",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){e.valid;var a=e.errors;return[s("vs-input",{staticClass:"w-full mt-5",attrs:{name:"city",label:"Town/City:"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:a,expression:"errors"}],staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("validation-provider",{attrs:{name:"Pincode",rules:"required|min:3|max:6|numeric"},scopedSlots:t._u([{key:"default",fn:function(e){e.valid;var a=e.errors;return[s("vs-input",{staticClass:"w-full mt-5",attrs:{name:"pincode",label:"Pincode:"},model:{value:t.pincode,callback:function(e){t.pincode=e},expression:"pincode"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:a,expression:"errors"}],staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("validation-provider",{attrs:{name:"State",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){e.valid;var a=e.errors;return[s("vs-input",{staticClass:"w-full mt-5",attrs:{name:"state",label:"State:"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:a,expression:"errors"}],staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-select",{staticClass:"w-full mt-5",attrs:{label:"Address Type:"},model:{value:t.addressType,callback:function(e){t.addressType=e},expression:"addressType"}},t._l(t.addressTypeOptions,(function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1)],1)]),s("vs-button",{staticClass:"mt-6 ml-auto flex"},[t._v("SAVE AND DELIVER HERE")])],1)]}}])})],1)],1),s("div",{staticClass:"vx-col lg:w-1/3 w-full"},[s("vx-card",{attrs:{title:"John Doe"}},[s("div",[s("p",[t._v("9447 Glen Eagles Drive")]),s("p",[t._v("Lewis Center, OH 43035")]),s("p",{staticClass:"my-4"},[t._v("UTC-5: Eastern Standard Time (EST)")]),s("p",[t._v("202-555-0140")])]),s("vs-divider"),s("vs-button",{staticClass:"w-full",on:{click:function(e){return t.$refs.checkoutWizard.nextTab()}}},[t._v("DELIVER TO THIS ADDRESS")])],1)],1)])]),s("tab-content",{staticClass:"mb-5",attrs:{title:"Payment",icon:"feather icon-credit-card"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col lg:w-2/3 w-full"},[s("vx-card",{attrs:{title:"Payment Options",subtitle:"Be sure to click on correct payment option"}},[s("div",{staticClass:"mt-3"},[s("ul",[s("li",[s("div",{staticClass:"flex flex-wrap justify-between items-center"},[s("vs-radio",{attrs:{"vs-value":"debit-card"},model:{value:t.paymentMethod,callback:function(e){t.paymentMethod=e},expression:"paymentMethod"}},[s("div",{staticClass:"flex items-center"},[s("img",{staticClass:"inline-flex",attrs:{src:a("f185"),alt:"bank-logo",height:"40",width:"50"}}),s("span",[t._v("US Unlocked Debit Card 12XX XXXX XXXX 0000")])])]),s("span",[t._v("John Doe")]),s("span",[t._v("11/2020")])],1),s("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.passes;return[s("form",{staticClass:"mt-4",attrs:{"data-vv-scope":"cvv-form"},on:{submit:function(e){return e.preventDefault(),a(t.makePayment)}}},[s("validation-provider",{attrs:{name:"cvv",rules:"required|digits:3"},scopedSlots:t._u([{key:"default",fn:function(e){e.valid;var a=e.errors;return[s("div",{staticClass:"flex items-center"},[s("span",[t._v("Enter CVV:")]),s("vs-input",{staticClass:"mr-3 ml-2",attrs:{rules:"'required|digits:3'",name:"cvv"},model:{value:t.cvv,callback:function(e){t.cvv=e},expression:"cvv"}}),s("vs-button",{attrs:{disabled:!1},on:{click:function(e){return e.preventDefault(),t.makePayment(e)}}},[t._v("CONTINUE")])],1),s("span",{directives:[{name:"show",rawName:"v-show",value:a,expression:"errors"}],staticClass:"text-danger ml-24"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]}}])})],1),s("vs-divider",{staticClass:"my-6"}),s("li",[s("vs-radio",{attrs:{"vs-value":"credit-debit-atmCard"},model:{value:t.paymentMethod,callback:function(e){t.paymentMethod=e},expression:"paymentMethod"}},[t._v("Credit / Debit / ATM Card")])],1),s("li",{staticClass:"mt-2"},[s("vs-radio",{attrs:{"vs-value":"netBanking"},model:{value:t.paymentMethod,callback:function(e){t.paymentMethod=e},expression:"paymentMethod"}},[t._v("Net Banking")])],1),s("li",{staticClass:"mt-2"},[s("vs-radio",{attrs:{"vs-value":"emi"},model:{value:t.paymentMethod,callback:function(e){t.paymentMethod=e},expression:"paymentMethod"}},[t._v("EMI (Easy Installment)")])],1),s("li",{staticClass:"mt-2"},[s("vs-radio",{attrs:{"vs-value":"cashOnDelivery"},model:{value:t.paymentMethod,callback:function(e){t.paymentMethod=e},expression:"paymentMethod"}},[t._v("Cash On Delivery")])],1)],1),s("vs-divider"),s("div",{staticClass:"inline-flex items-center cursor-pointer"},[s("feather-icon",{staticClass:"mr-2",attrs:{icon:"PlusSquareIcon",svgClasses:"h-6 w-6"}}),s("span",[t._v("Add Gift Card")])],1)],1)])],1),s("div",{staticClass:"vx-col lg:w-1/3 w-full"},[s("vx-card",{attrs:{title:"Price Details"}},[s("div",{staticClass:"flex justify-between mb-2"},[s("span",[t._v("Price 3 Items")]),s("span",{staticClass:"font-semibold"},[t._v("$699.30")])]),s("div",{staticClass:"flex justify-between mb-2"},[s("span",[t._v("Delivery Charges")]),s("span",{staticClass:"text-success"},[t._v("Free")])]),s("vs-divider"),s("div",{staticClass:"flex justify-between"},[s("span",[t._v("Amount Payable")]),s("span",{staticClass:"font-semibold"},[t._v("$699.30")])])],1)],1)])])],1)],1)},i=[],n=(a("fb6a"),a("d3b7"),a("2ee4")),r=(a("da93"),function(){return a.e("chunk-12a294ff").then(a.bind(null,"0af2"))}),o={data:function(){return{fullName:"",mobileNum:"",pincode:"",houseNum:"",area:"",landmark:"",city:"",state:"",addressType:1,addressTypeOptions:[{text:"Home",value:1},{text:"Office",value:2}],paymentMethod:"debit-card",cvv:""}},computed:{cartItems:function(){return this.$store.state.eCommerce.cartItems.slice().reverse()},isInWishList:function(){var t=this;return function(e){return t.$store.getters["eCommerce/isInWishList"](e)}}},methods:{removeItemFromCart:function(t){this.$store.dispatch("eCommerce/toggleItemInCart",t)},wishListButtonClicked:function(t){this.isInWishList(t.objectID)?this.$router.push("/apps/eCommerce/wish-list"):(this.toggleItemInWishList(t),this.removeItemFromCart(t))},toggleItemInWishList:function(t){this.$store.dispatch("eCommerce/toggleItemInWishList",t)},updateItemQuantity:function(t,e){var a=Math.abs(e+1-this.cartItems.length);this.$store.dispatch("eCommerce/updateItemQuantity",{quantity:t,index:a})},submitNewAddressForm:function(){var t=this;return new Promise((function(){t.$validator.validateAll("add-new-address").then((function(e){e?t.$refs.checkoutWizard.nextTab():t.$vs.notify({title:"Error",text:"Please enter valid details",color:"warning",iconPack:"feather",icon:"icon-alert-circle"})}))}))},makePayment:function(){var t=this;return new Promise((function(){t.$validator.validateAll("cvv-form").then((function(e){e?t.$vs.notify({title:"Success",text:"Payment received successfully",color:"success",iconPack:"feather",icon:"icon-check"}):t.$vs.notify({title:"Error",text:"Please enter valid details",color:"warning",iconPack:"feather",icon:"icon-alert-circle"})}))}))}},components:{ItemListView:r,FormWizard:n["FormWizard"],TabContent:n["TabContent"]}},l=o,c=(a("f11c"),a("2877")),u=Object(c["a"])(l,s,i,!1,null,"57632a9f",null);e["default"]=u.exports},f11c:function(t,e,a){"use strict";var s=a("c604"),i=a.n(s);i.a},f185:function(t,e,a){t.exports=a.p+"img/bank.5f6aa47c.png"}}]);
//# sourceMappingURL=chunk-0b84dd00.e3bac373.js.map