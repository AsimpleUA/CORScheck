(function(e){function t(t){for(var n,a,u=t[0],l=t[1],c=t[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var i=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=(r("d3b7"),r("bc3a")),o=r.n(s),a={baseURL:"/",timeout:12e4},u=o.a.create(a);u.interceptors.request.use((function(e){var t=localStorage.getItem("userToken");return t&&(e.headers["user-token"]=t),e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var l=u;Plugin.install=function(e,t){e.axios=l,window.axios=l,Object.defineProperties(e.prototype,{axios:{get:function(){return l}},$axios:{get:function(){return l}}})},n["a"].use(Plugin);Plugin;var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}}),r("v-content",[r("router-view")],1)],1)},i=[],f={name:"App"},p=f,d=r("2877"),v=r("6544"),m=r.n(v),b=r("7496"),h=r("40dc"),g=r("a75b"),y=Object(d["a"])(p,c,i,!1,null,null,null),j=y.exports;m()(y,{VApp:b["a"],VAppBar:h["a"],VContent:g["a"]});r("96cf");var O=r("1da1"),w=r("2f62");n["a"].use(w["a"]);var x=new w["a"].Store({state:{list:[],url:""},mutations:{setUrl:function(e,t){e.url=t},addUrl:function(e,t){e.list.unshift(t)}},actions:{test:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function r(){var n,s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,s="",a=!0,r.next=5,o.a.get(t).then((function(){s="Everything works"})).catch((function(e){s=e.message,a=!1,e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request&&console.log(e.request)}));case 5:return n("addUrl",t),r.abrupt("return",{message:s,success:a});case 7:case"end":return r.stop()}}),r)})))()}},modules:{}}),_=r("8c4f"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("query-test"),r("query-story")],1)},U=[],P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-6"},e._l(e.items,(function(t,n){return r("v-row",{key:"url-"+n,staticClass:"my-4",attrs:{justify:"center"}},[r("v-btn",{staticClass:"px-12 py-4 title font-weight-light",attrs:{outlined:"",text:""},on:{click:function(r){return e.setUrl(t)}}},[e._v(" "+e._s(t)+" ")])],1)})),1)},C=[],V=r("5530"),R={methods:Object(V["a"])({},Object(w["c"])({setUrl:"setUrl"})),computed:Object(V["a"])({},Object(w["d"])({items:"list"}))},S=R,$=r("8336"),q=r("0fd9"),A=Object(d["a"])(S,P,C,!1,null,null,null),T=A.exports;m()(A,{VBtn:$["a"],VRow:q["a"]});var E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",{staticClass:"mt-12 pt-12 px-4",attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",xs:"12",sm:"11",md:"9",lg:"7"}},[r("v-text-field",{attrs:{label:"URL",hint:"enter full url",rules:[e.rules.required,e.rules.link]},model:{value:e.modelUrl,callback:function(t){e.modelUrl=t},expression:"modelUrl"}})],1)],1),r("v-row",{staticClass:"my-4 px-4",attrs:{justify:"center"}},[r("v-btn",{attrs:{tile:"",dark:""},on:{click:e.checkUrl}},[e._v("Check URL CORS")])],1),r("v-row",{staticClass:"mt-4 px-4",attrs:{justify:"center"}},[r("v-btn",{staticClass:"font-weight-light headline",attrs:{text:"",color:e.color,readonly:""}},[e._v(e._s(e.message))])],1)],1)},I=[],M=(r("b64b"),r("53ca")),Z={required:function(e){return("object"!==Object(M["a"])(e)?!!e:Object.keys(e).length>0)||"Required field"},link:function(e){var t=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;return t.test(e)||!e||"Invalid url"},email:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||!e||"Invalid email"},phone:function(e){var t=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;return t.test(e)||!e||"Invalid phone number"}},B={data:function(){return{valid:!0,rules:Z,message:"",color:"success"}},computed:Object(V["a"])({modelUrl:{get:function(){return this.url},set:function(e){this.setUrl(e)}}},Object(w["d"])({url:"url"})),methods:Object(V["a"])(Object(V["a"])({checkUrl:function(){var e=this;this.$refs.form.validate()&&this.test(this.url).then((function(t){e.message=t.message,e.color=t.success?"success":"error"}))}},Object(w["b"])({test:"test"})),Object(w["c"])({setUrl:"setUrl"}))},L=B,z=r("62ad"),F=r("4bd4"),J=r("8654"),Q=Object(d["a"])(L,E,I,!1,null,null,null),H=Q.exports;m()(Q,{VBtn:$["a"],VCol:z["a"],VForm:F["a"],VRow:q["a"],VTextField:J["a"]});var D={components:{QueryStory:T,QueryTest:H}},G=D,K=Object(d["a"])(G,k,U,!1,null,null,null),N=K.exports;n["a"].use(_["a"]);var W=[{path:"/",name:"Home",component:N}],X=new _["a"]({routes:W}),Y=X,ee=r("f309");n["a"].use(ee["a"]);var te=new ee["a"]({});n["a"].config.productionTip=!1,new n["a"]({store:x,router:Y,vuetify:te,render:function(e){return e(j)}}).$mount("#app")}});
//# sourceMappingURL=app.49e8c196.js.map