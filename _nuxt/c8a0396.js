(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{384:function(e,t,r){var n=r(62),o=r(261);e.exports=n?o:function(e){return Map.prototype.entries.call(e)}},392:function(e,t,r){"use strict";var n=r(417),o=r(418);e.exports=n("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o)},393:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(419);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},394:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(27),l=r(86),f=r(384),d=r(257);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(e){var map=c(this),t=f(map),r=l(e,arguments.length>1?arguments[1]:void 0,3);return!d(t,(function(e,t,n){if(!r(t,e,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},395:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(65),l=r(27),f=r(79),d=r(86),v=r(151),h=r(384),m=r(257);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(e){var map=l(this),t=h(map),r=d(e,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return m(t,(function(e,t){r(t,e,map)&&o.call(n,e,t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},396:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(27),l=r(86),f=r(384),d=r(257);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(e){var map=c(this),t=f(map),r=l(e,arguments.length>1?arguments[1]:void 0,3);return d(t,(function(e,t,n){if(r(t,e,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},397:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(27),l=r(86),f=r(384),d=r(257);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(e){var map=c(this),t=f(map),r=l(e,arguments.length>1?arguments[1]:void 0,3);return d(t,(function(e,t,n){if(r(t,e,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},398:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(27),l=r(384),f=r(420),d=r(257);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(e){return d(l(c(this)),(function(t,r,n){if(f(r,e))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},399:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(27),l=r(384),f=r(257);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(e){return f(l(c(this)),(function(t,r,n){if(r===e)return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},400:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(65),l=r(27),f=r(79),d=r(86),v=r(151),h=r(384),m=r(257);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(e){var map=l(this),t=h(map),r=d(e,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return m(t,(function(e,t){o.call(n,r(t,e,map),t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},401:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(65),l=r(27),f=r(79),d=r(86),v=r(151),h=r(384),m=r(257);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(e){var map=l(this),t=h(map),r=d(e,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return m(t,(function(e,t){o.call(n,e,r(t,e,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},402:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(27),l=r(79),f=r(257);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(e){for(var map=c(this),t=l(map.set),i=0;i<arguments.length;)f(arguments[i++],t,{that:map,AS_ENTRIES:!0});return map}})},403:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(27),l=r(79),f=r(384),d=r(257);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(e){var map=c(this),t=f(map),r=arguments.length<2,n=r?void 0:arguments[1];if(l(e),d(t,(function(t,o){r?(r=!1,n=o):n=e(n,o,t,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty map with no initial value");return n}})},404:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(27),l=r(86),f=r(384),d=r(257);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(e){var map=c(this),t=f(map),r=l(e,arguments.length>1?arguments[1]:void 0,3);return d(t,(function(e,t,n){if(r(t,e,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},405:function(e,t,r){"use strict";var n=r(4),o=r(62),c=r(27),l=r(79);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(e,t){var map=c(this),r=arguments.length;l(t);var n=map.has(e);if(!n&&r<3)throw TypeError("Updating absent value");var o=n?map.get(e):l(r>2?arguments[2]:void 0)(e,map);return map.set(e,t(o,e,map)),map}})},417:function(e,t,r){"use strict";var n=r(4),o=r(21),c=r(119),l=r(49),f=r(260),d=r(257),v=r(152),h=r(30),m=r(11),S=r(190),T=r(91),R=r(194);e.exports=function(e,t,r){var x=-1!==e.indexOf("Map"),E=-1!==e.indexOf("Weak"),y=x?"set":"add",I=o[e],_=I&&I.prototype,k=I,w={},A=function(e){var t=_[e];l(_,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(E&&!h(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return E&&!h(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(E&&!h(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})};if(c(e,"function"!=typeof I||!(E||_.forEach&&!m((function(){(new I).entries().next()})))))k=r.getConstructor(t,e,x,y),f.REQUIRED=!0;else if(c(e,!0)){var N=new k,F=N[y](E?{}:-0,1)!=N,M=m((function(){N.has(1)})),U=S((function(e){new I(e)})),O=!E&&m((function(){for(var e=new I,t=5;t--;)e[y](t,t);return!e.has(-0)}));U||((k=t((function(t,r){v(t,k,e);var n=R(new I,t,k);return null!=r&&d(r,n[y],{that:n,AS_ENTRIES:x}),n}))).prototype=_,_.constructor=k),(M||O)&&(A("delete"),A("has"),x&&A("get")),(O||F)&&A(y),E&&_.clear&&delete _.clear}return w[e]=k,n({global:!0,forced:k!=I},w),T(k,e),E||r.setStrong(k,e,x),k}},418:function(e,t,r){"use strict";var n=r(42).f,o=r(81),c=r(192),l=r(86),f=r(152),d=r(257),v=r(191),h=r(193),m=r(37),S=r(260).fastKey,T=r(67),R=T.set,x=T.getterFor;e.exports={getConstructor:function(e,t,r,v){var h=e((function(e,n){f(e,h,t),R(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),m||(e.size=0),null!=n&&d(n,e[v],{that:e,AS_ENTRIES:r})})),T=x(t),E=function(e,t,r){var n,o,c=T(e),l=y(e,t);return l?l.value=r:(c.last=l={index:o=S(t,!0),key:t,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),m?c.size++:e.size++,"F"!==o&&(c.index[o]=l)),e},y=function(e,t){var r,n=T(e),o=S(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return c(h.prototype,{clear:function(){for(var e=T(this),data=e.index,t=e.first;t;)t.removed=!0,t.previous&&(t.previous=t.previous.next=void 0),delete data[t.index],t=t.next;e.first=e.last=void 0,m?e.size=0:this.size=0},delete:function(e){var t=this,r=T(t),n=y(t,e);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),m?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=T(this),n=l(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!y(this,e)}}),c(h.prototype,r?{get:function(e){var t=y(this,e);return t&&t.value},set:function(e,t){return E(this,0===e?0:e,t)}}:{add:function(e){return E(this,e=0===e?0:e,e)}}),m&&n(h.prototype,"size",{get:function(){return T(this).size}}),h},setStrong:function(e,t,r){var n=t+" Iterator",o=x(t),c=x(n);v(e,t,(function(e,t){R(this,{type:n,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=c(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(t)}}},419:function(e,t,r){"use strict";var n=r(27),o=r(79);e.exports=function(){for(var e,t=n(this),r=o(t.delete),c=!0,l=0,f=arguments.length;l<f;l++)e=r.call(t,arguments[l]),c=c&&e;return!!c}},420:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},464:function(e,t,r){"use strict";r.r(t);var n=r(9),o=(r(47),r(87),r(1)),c=r(424),l=r(411),f=r.n(l),d=r(189),v=r(92),h=o.a.extend({props:{buttonClass:{type:String,default:""}},data:function(){return{dialog:!1,isBusy:!1,regions:["London (United Kingdom)","Amsterdam (Netherlands)","Frankfurt (Germany)","Paris (France)","New York (United States)","Atlanta (United States)","Chicago (United States)","Dallas (United States)","Los Angeles (United States)","Miami (United States)","Seattle (United States)","Silicon Valley (United States)","Toronto (Canada)","Tokyo (Japan)","Seoul (Korea)","Singapore (Singapore)","Sydney (Australia)"],templates:["Open","Duel"],valid:!0,nameField:"",regionField:"",templateField:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return(null==e?void 0:e.length)<=24||"Name must be less than 24 characters"},function(e){return(null==e?void 0:e.length)>=3||"Name must be at least 3 characters"},function(e){return f.a.matches(e,/^[\w ]+$/)||"Name can only contain letters, numbers, and spaces"}]}},computed:{regionRules:function(){var e=this;return[function(e){return!!e||"Region is required"},function(t){return!!e.regions.find((function(e){return e===t}))||"Invalid region"}]},templateRules:function(){var e=this;return[function(e){return!!e||"Template is required"},function(t){return!!e.templates.find((function(e){return e===t}))||"Invalid template"}]}},methods:{onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("http://localhost:3000"===window.location.origin){t.next=3;break}return alert("Coming soon!"),t.abrupt("return");case 3:if(e.$fire.auth.currentUser&&e.$fire.auth.currentUser.uid){t.next=6;break}return e.$router.push("/login"),t.abrupt("return");case 6:return e.isBusy=!0,t.next=9,e.$fire.functions.httpsCallable(v.d.insertServerInfo)({serverName:"open",stackTemplate:"mbii",serverTemplate:"mbii-open",region:"ams"});case 9:if(t.sent.data){t.next=13;break}return e.isBusy=!1,t.abrupt("return");case 13:r=e.$fire.auth.currentUser.uid,e.$fire.firestore.collection(v.c.users).doc(r).collection(v.c.checkoutSessions).add({price:d.a.stripePriceIds.jkjaTest,success_url:window.location.origin,cancel_url:window.location.origin}).then((function(t){t.onSnapshot(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r&&r.exists){t.next=2;break}return t.abrupt("return");case 2:if((data=r.data()).error&&(alert("An error has occured. Please try again later."),e.isBusy=!1),!data.sessionId){t.next=13;break}return t.next=7,Object(c.a)(d.a.stripePublicKey);case 7:if(n=t.sent){t.next=10;break}return t.abrupt("return");case 10:return t.next=12,n.redirectToCheckout({sessionId:data.sessionId});case 12:e.$data.isBusy=!1;case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})).catch((function(){e.isBusy=!1}));case 15:case"end":return t.stop()}}),t)})))()}}}),m=r(59),S=r(60),T=r.n(S),R=r(250),x=r(413),E=r(386),y=r(575),I=r(567),_=r(414),k=r(186),w=r(582),A=r(176),N=r(379),F=r(415),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-fab-transition",[r("v-btn",e._g(e._b({directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],class:e.buttonClass,attrs:{fab:"",fixed:"",bottom:"",right:"",color:"primary",disabled:e.isBusy,loading:e.isBusy}},"v-btn",o,!1),n),[r("v-icon",[e._v("mdi-plus")])],1),e._v(" "),r("v-fab-transition")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h5 grey lighten-2"},[e._v("\n      Create Server\n    ")]),e._v(" "),r("v-card-text",[r("br"),e._v("\n      Please enter the details for your new server.\n      "),r("br"),r("br"),e._v(" "),r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.nameRules,filled:"",label:"Name",hint:"This name is only for the FTP folder and Ilyssa Hosting dashboard"},model:{value:e.nameField,callback:function(t){e.nameField=t},expression:"nameField"}}),e._v(" "),r("v-combobox",{attrs:{rules:e.regionRules,filled:"","small-chips":"",label:"Region",items:e.regions},model:{value:e.regionField,callback:function(t){e.regionField=t},expression:"regionField"}}),e._v(" "),r("v-combobox",{attrs:{rules:e.templateRules,filled:"","small-chips":"",label:"Template",items:e.templates},model:{value:e.templateField,callback:function(t){e.templateField=t},expression:"templateField"}})],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",text:"",disabled:!e.valid},on:{click:e.onSubmit}},[e._v("\n        Continue to payment\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;T()(component,{VBtn:R.a,VCard:x.a,VCardActions:E.a,VCardText:E.b,VCardTitle:E.c,VCombobox:y.a,VDialog:I.a,VDivider:_.a,VFabTransition:k.c,VForm:w.a,VIcon:A.a,VSpacer:N.a,VTextField:F.a})}}]);