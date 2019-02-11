webpackHotUpdate(0,{18:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(11);var i="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}var a=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},c={namespaced:{configurable:!0}};c.namespaced.get=function(){return!!this._rawModule.namespaced},a.prototype.addChild=function(t,e){this._children[t]=e},a.prototype.removeChild=function(t){delete this._children[t]},a.prototype.getChild=function(t){return this._children[t]},a.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},a.prototype.forEachChild=function(t){s(this._children,t)},a.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},a.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},a.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(a.prototype,c);var u=function(t){this.register([],t,!1)};u.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},u.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},u.prototype.update=function(t){!function t(e,n,o){0;n.update(o);if(o.modules)for(var r in o.modules){if(!n.getChild(r))return void 0;t(e.concat(r),n.getChild(r),o.modules[r])}}([],this.root,t)},u.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var r=new a(e,n);0===t.length?this.root=r:this.get(t.slice(0,-1)).addChild(t[t.length-1],r);e.modules&&s(e.modules,function(e,r){o.register(t.concat(r),e,n)})},u.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var f;var p=function(t){var e=this;void 0===t&&(t={}),!f&&"undefined"!=typeof window&&window.Vue&&y(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var o=t.strict;void 0===o&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new u(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f;var r=this,s=this.dispatch,a=this.commit;this.dispatch=function(t,e){return s.call(r,t,e)},this.commit=function(t,e,n){return a.call(r,t,e,n)},this.strict=o;var c=this._modules.root.state;v(this,c,[],this._modules.root),m(this,c),n.forEach(function(t){return t(e)}),(void 0!==t.devtools?t.devtools:f.config.devtools)&&function(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){i.emit("vuex:mutation",t,e)}))}(this)},l={state:{configurable:!0}};function h(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;v(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,n){var o=t._vm;t.getters={};var r=t._wrappedGetters,i={};s(r,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=f.config.silent;f.config.silent=!0,t._vm=new f({data:{$$state:e},computed:i}),f.config.silent=a,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),o&&(n&&t._withCommit(function(){o._data.$$state=null}),f.nextTick(function(){return o.$destroy()}))}function v(t,e,n,o,r){var i=!n.length,s=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[s]=o),!i&&!r){var a=_(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){f.set(a,c,o.state)})}var u=o.context=function(t,e,n){var o=""===e,r={dispatch:o?t.dispatch:function(n,o,r){var i=g(n,o,r),s=i.payload,a=i.options,c=i.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:o?t.commit:function(n,o,r){var i=g(n,o,r),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(r,{getters:{get:o?function(){return t.getters}:function(){return function(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,o)===e){var i=r.slice(o);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),n}(t,e)}},state:{get:function(){return _(t.state,n)}}}),r}(t,s,n);o.forEachMutation(function(e,n){!function(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,o.state,e)})}(t,s+n,e,u)}),o.forEachAction(function(e,n){var o=e.root?n:s+n,r=e.handler||e;!function(t,e,n,o){(t._actions[e]||(t._actions[e]=[])).push(function(e,r){var i,s=n.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e,r);return(i=s)&&"function"==typeof i.then||(s=Promise.resolve(s)),t._devtoolHook?s.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):s})}(t,o,r,u)}),o.forEachGetter(function(e,n){!function(t,e,n,o){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}(t,s+n,e,u)}),o.forEachChild(function(o,i){v(t,e,n.concat(i),o,r)})}function _(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function g(t,e,n){var o;return null!==(o=t)&&"object"==typeof o&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function y(t){f&&t===f||
/**
 * vuex v3.1.0
 * (c) 2019 Evan You
 * @license MIT
 */
function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(f=t)}l.state.get=function(){return this._vm._data.$$state},l.state.set=function(t){0},p.prototype.commit=function(t,e,n){var o=this,r=g(t,e,n),i=r.type,s=r.payload,a=(r.options,{type:i,payload:s}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(a,o.state)}))},p.prototype.dispatch=function(t,e){var n=this,o=g(t,e),r=o.type,i=o.payload,s={type:r,payload:i},a=this._actions[r];if(a){try{this._actionSubscribers.filter(function(t){return t.before}).forEach(function(t){return t.before(s,n.state)})}catch(t){0}return(a.length>1?Promise.all(a.map(function(t){return t(i)})):a[0](i)).then(function(t){try{n._actionSubscribers.filter(function(t){return t.after}).forEach(function(t){return t.after(s,n.state)})}catch(t){0}return t})}},p.prototype.subscribe=function(t){return h(t,this._subscribers)},p.prototype.subscribeAction=function(t){return h("function"==typeof t?{before:t}:t,this._actionSubscribers)},p.prototype.watch=function(t,e,n){var o=this;return this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},p.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},p.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},p.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=_(e.state,t.slice(0,-1));f.delete(n,t[t.length-1])}),d(this)},p.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},p.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(p.prototype,l);var w=E(function(t,e){var n={};return O(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=S(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[o].vuex=!0}),n}),b=E(function(t,e){var n={};return O(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.commit;if(t){var i=S(this.$store,"mapMutations",t);if(!i)return;o=i.context.commit}return"function"==typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}}),n}),$=E(function(t,e){var n={};return O(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){if(!t||S(this.$store,"mapGetters",t))return this.$store.getters[r]},n[o].vuex=!0}),n}),M=E(function(t,e){var n={};return O(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var i=S(this.$store,"mapActions",t);if(!i)return;o=i.context.dispatch}return"function"==typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}}),n});function O(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function E(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function S(t,e,n){return t._modulesNamespaceMap[n]}var C={Store:p,install:y,version:"3.1.0",mapState:w,mapMutations:b,mapGetters:$,mapActions:M,createNamespacedHelpers:function(t){return{mapState:w.bind(null,t),mapGetters:$.bind(null,t),mapMutations:b.bind(null,t),mapActions:M.bind(null,t)}}},j={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription}};o.default.config.devtools=!0,o.default.use(C);var x=new C.Store({strict:!0,modules:{SiteData:j}}),k={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription},get_EndPoint:function(){return this.state.siteUrl+"/wp-json/wp/v2/"}},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{route:"posts",filters:{}},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=k.get_EndPoint(),o=t.filters,r="",i=[];for(var s in o)o.hasOwnProperty(s)&&("per_page"==s&&(r+="?per_page=",r+=o[s]),"order"==s&&("desc"===o[s]||"asc"===o[s]?(r+="?order=",r+=o[s]):console.error("Wrong args in Loop")),"orderby"==s&&(r+="?orderby=",r+=o[s]));var a=n+t.route+e+r,c=new XMLHttpRequest;return c.open("GET",a,!1),c.onload=function(){if(c.status>=200&&c.status<400){var t=JSON.parse(c.responseText);i=t}else console.log("We connected to the server, but it returned an error.")},c.onerror=function(){console.log("Connection error")},c.send(),i},N={install:function(t,e){t.prototype.$Get_Posts=function(t){return G(t)}}};o.default.config.devtools=!0,o.default.use(N),new o.default({el:"#app",store:x,Wpconfig:N,render:function(t){return t(r.a)}})}});