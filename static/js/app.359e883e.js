(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return s.p+"static/js/"+({cart:"cart","common-debug":"common-debug",detail:"detail",index:"index",profile:"profile"}[e]||e)+"."+{cart:"24259d41","common-debug":"6afbf475",detail:"c9f44625",index:"c9786299",profile:"6da078fd"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={cart:1,"common-debug":1,detail:1,index:1,profile:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="static/css/"+({cart:"cart","common-debug":"common-debug",detail:"detail",index:"index",profile:"profile"}[e]||e)+"."+{cart:"05fb23bb","common-debug":"6aa34301",detail:"24eace5d",index:"303888b0",profile:"1fad9ca5"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"51be":function(e,t,n){"use strict";var r={stage:"prod",routerBase:"/vue-h5-pro/",routerMode:"history",apiEnv:"prod",apiBaseUrl:"https://m.api.xxx.com",isEnv:function(e){var t=this.stage;return t===e||Array.isArray(e)&&e.indexOf(t)>-1}};t["a"]=r},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r,o=n("2b0e"),a=n("a516"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.classes,attrs:{id:"app"}},[n("van-nav-bar",{directives:[{name:"show",rawName:"v-show",value:e.showHeader,expression:"showHeader"}],staticClass:"dwd-nav-bar van-hairline--bottom",attrs:{title:e.title,"left-arrow":e.showBack,border:!1},on:{"click-left":e.onBack,"click-right":e.onClickRight}}),n("keep-alive",[n("router-view")],1),n("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:e.showTabBar,expression:"showTabBar"}],staticClass:"dwd-tab-bar",model:{value:e.curTabBar,callback:function(t){e.curTabBar=t},expression:"curTabBar"}},[n("van-tabbar-item",{attrs:{name:"index",replace:"",to:"/index",icon:"home-o"}},[e._v("首页")]),n("van-tabbar-item",{attrs:{name:"fire",to:"/detail",icon:"fire-o"}},[e._v("精品推荐")]),n("van-tabbar-item",{attrs:{name:"cart",replace:"",to:"/cart",icon:"shopping-cart-o"}},[e._v("购物车")]),n("van-tabbar-item",{attrs:{name:"profile",replace:"",to:"/profile",icon:"user-o"}},[e._v("我的")])],1)],1)},c=[],s=(n("6762"),n("2fdb"),n("a481"),n("bd86")),u=(n("b0b1"),n("fced")),l=(n("6724"),n("2ee8")),d=(n("75b9"),n("58cb")),f=["index","fire","cart","profile"],p={components:(r={},Object(s["a"])(r,d["a"].name,d["a"]),Object(s["a"])(r,l["a"].name,l["a"]),Object(s["a"])(r,u["a"].name,u["a"]),r),data:function(){return{title:"",curTabBar:"index",showBack:!1,showTabBar:!1,showHeader:!1}},computed:{classes:function(){return{"has-nav-bar":this.showHeader,"has-tab-bar":this.showTabBar}}},watch:Object(s["a"])({},"$route",function(e,t){this.watchRoute(e,t)}),created:function(){this.watchRoute(this.$route)},methods:{onBack:function(){history.back()},onClickRight:function(){},watchRoute:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.name;this.curTabBar=e.name;var r,o=e.meta.title;this.title=o?o.replace(/-/g,""):"",this.showHeader=1!==e.query.hide_header,r="cart"===n&&t.name?["index","fire","profile"].includes(t.name):f.includes(n),this.showTabBar=r,this.showBack=!r}}},m=p,h=(n("7c55"),n("2877")),b=Object(h["a"])(m,i,c,!1,null,null,null),v=b.exports,g=(n("ac6a"),n("8c4f")),w=n("51be");o["a"].use(g["a"]);var y=function(e){return function(){return n("6ce5")("./".concat(e))}},x=[{path:"",name:"index",alias:"/index",component:y("index"),meta:{title:"首页"}},{name:"profile",component:y("profile"),meta:{title:"个人中心"}},{name:"cart",component:y("cart"),meta:{title:"购物车"}},{name:"detail",component:y("detail"),meta:{title:"商品详情"}}];w["a"].isEnv("prod")&&x.unshift({name:"debug",component:y("common/debug"),meta:{title:"Debug 调试页面",needAuth:!1}}),x.push({path:"*",redirect:"/"}),x.forEach(function(e){"undefined"===typeof e.path&&(e.path="/"+(e.name||""))});var k=new g["a"]({mode:w["a"].routerMode,base:w["a"].routerBase,routes:x}),O=k,B=n("9483");function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;setTimeout(function(){console.log("init Vue"),new o["a"]({el:"#app",router:O,render:function(e){return e(v)}})},e)}if(Object(B["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),O.beforeEach(function(e,t,n){var r=e.meta,o=void 0===r?{}:r;return-1===o.status?n(!1):(o.title&&(document.title=o.title),n())}),w["a"].console){var T="https://unpkg.com/kit-debug@latest";Object(a["loadJs"])(T,{async:!0,onload:function(){"undefined"!==typeof VConsole&&(window.vConsole=new VConsole),console.log("vConsole loaded"),j()}})}else j()},"5c48":function(e,t,n){},"6ce5":function(e,t,n){var r={"./":["7f5c","index"],"./cart":["43ff","cart"],"./cart.vue":["43ff","cart"],"./common/debug":["9b04","common-debug"],"./common/debug.vue":["9b04","common-debug"],"./detail":["2e7c","detail"],"./detail.vue":["2e7c","detail"],"./index":["7f5c","index"],"./index.vue":["7f5c","index"],"./profile":["a954","profile"],"./profile.vue":["a954","profile"]};function o(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],o=t[0];return n.e(t[1]).then(function(){return n(o)})}o.keys=function(){return Object.keys(r)},o.id="6ce5",e.exports=o},"7c55":function(e,t,n){"use strict";var r=n("5c48"),o=n.n(r);o.a}});
//# sourceMappingURL=app.359e883e.js.map