(function(e){function n(n){for(var o,r,c=n[0],i=n[1],s=n[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(n);while(f.length)f.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],o=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(o=!1)}o&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},r={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({home:"home",login:"login",userLayout:"userLayout"}[e]||e)+"."+{home:"d7ee35fc",login:"a4d0b9c5",userLayout:"170febd3","chunk-53deb2f0":"7e47d35c","chunk-6d4bdbd3":"e1db4d01","chunk-2d0bd7e6":"4a66f174","chunk-2d0d7481":"212ee9cc","chunk-2d225818":"aca1b991","chunk-494c28d2":"871da206","chunk-248f2ff2":"bb9269bf","chunk-700b7ac9":"8bd0c644","chunk-74da7d96":"6d420b9b","chunk-cc18741c":"dc63db14"}[e]+".js"}function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={home:1,login:1,userLayout:1,"chunk-53deb2f0":1,"chunk-6d4bdbd3":1,"chunk-494c28d2":1,"chunk-248f2ff2":1,"chunk-700b7ac9":1,"chunk-74da7d96":1,"chunk-cc18741c":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({home:"home",login:"login",userLayout:"userLayout"}[e]||e)+"."+{home:"45e125a9",login:"2d443357",userLayout:"fe32faa2","chunk-53deb2f0":"ff60abba","chunk-6d4bdbd3":"90ed9278","chunk-2d0bd7e6":"31d6cfe0","chunk-2d0d7481":"31d6cfe0","chunk-2d225818":"31d6cfe0","chunk-494c28d2":"350bba51","chunk-248f2ff2":"03088d34","chunk-700b7ac9":"5ebde2f5","chunk-74da7d96":"a6aa1bf9","chunk-cc18741c":"b5dee723"}[e]+".css",a=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===a))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],d=s.getAttribute("data-href");if(d===o||d===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var o=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],l.parentNode.removeChild(l),t(u)},l.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var u=new Promise((function(n,t){o=a[e]=[n,t]}));n.push(o[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var f=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,t[1](f)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=d;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"in-out"}},[e.loading?t("div",{key:"loader",staticClass:"loading bg-white d-flex align-items-center justify-content-center position-absolute"},[t("span",{staticClass:"loader"},[t("span",{staticClass:"loader-inner"})]),t("p",[e._v("loading...")])]):t("router-view",{key:"view"})],1)],1)},a=[],u={data:function(){return{state:{failedOnce:!1}}},computed:{loading:function(){return this.$store.getters.loading},token:function(){return this.$store.getters.token},auth:function(){return this.token?this.token:sessionStorage.token?sessionStorage.token:null}},mounted:function(){var e=this;window.addEventListener("beforeunload",(function(){e.token&&(sessionStorage.token=e.token)}))},beforeMount:function(){this.$store.dispatch("setToken",sessionStorage.token).then((function(){delete sessionStorage.token}))}},c=u,i=(t("5c0b"),t("2877")),s=Object(i["a"])(c,r,a,!1,null,null,null),d=s.exports,f=t("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("45fc"),t("d3b7");var l=t("8c4f"),h=t("2f62");o["a"].use(h["a"]);var p=new h["a"].Store({state:{auth_token:null,data:{},loading:!1},mutations:{setData:function(e,n){e.data=n}},actions:{setData:function(e,n){var t=e.commit;return new Promise((function(e){t("setData",n.data),e()}))},setToken:function(e,n){var t=e.state;return new Promise((function(e){t.auth_token=n}))},resetData:function(e){var n=e.state;return new Promise((function(e){n.data={},n.auth_token=null,e()}))},load:function(e,n){var t=e.state;t.loading=n}},getters:{loggedIn:function(e){return!!(e.data&&e.data.auth&&e.data.auth.access_token)},token:function(e){return e.data&&e.data.auth&&e.data.auth.access_token?e.data.auth.access_token:e.auth_token},loading:function(e){return e.loading},resources:function(e){return e.data}}});o["a"].use(l["a"]);var b=[{name:"login",path:"/",component:function(){return t.e("login").then(t.bind(null,"dd7b"))},meta:{forGuest:!0}},{path:"/user",component:function(){return t.e("userLayout").then(t.bind(null,"8eeb"))},children:[{path:"",name:"Home",component:function(){return t.e("home").then(t.bind(null,"bb51"))},meta:{auth:!0}}]}],g=new l["a"]({mode:"history",base:"/",routes:b});g.beforeEach((function(e,n,t){var o=p.getters.token||sessionStorage.token;e.matched.some((function(e){return e.meta.forGuest}))&&(o?t({name:"Home"}):t()),e.matched.some((function(e){return e.meta.auth}))&&(o?t():t({name:"login"}))}));var m=g,k=t("1881"),v=t.n(k),y=t("bc3a"),w=t.n(y),_=t("a7fe"),S=t.n(_),j=t("e399"),L=t.n(j),O=(t("2068"),t("e30a")),E=t.n(O);t("b40d");o["a"].component("date-picker",E.a);var P=w.a.create({baseURL:"http://api.bus.banguka.com/api"});o["a"].use(S.a,P),o["a"].use(v.a),o["a"].use(L.a),o["a"].config.productionTip=!1,o["a"].filter("kb",(function(e){return e?Math.floor(e/1024):0})),new o["a"]({router:m,store:p,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var o=t("9c0c"),r=t.n(o);r.a},"9c0c":function(e,n,t){}});