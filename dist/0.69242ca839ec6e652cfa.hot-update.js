webpackHotUpdate(0,{2:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("h1",[this._v(this._s(this.title))])])},i=[];o._withStripped=!0,n.d(e,"render",function(){return o}),n.d(e,"staticRenderFns",function(){return i})},24:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n(15),r=n(3);o.default.config.devtools=!0,o.default.use(r.a);var s=new r.a.Store({state:{title:"My ticle"},mutations:{increment:function(t){return t.count++},decrement:function(t){return t.count--}}});o.default.config.devtools=!0,new o.default({el:"#app",store:s,render:function(t){return t(i.a)}})},3:function(t,e,n){"use strict";n.d(e,"b",function(){return y});var o="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}var r=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},s={namespaced:{configurable:!0}};s.namespaced.get=function(){return!!this._rawModule.namespaced},r.prototype.addChild=function(t,e){this._children[t]=e},r.prototype.removeChild=function(t){delete this._children[t]},r.prototype.getChild=function(t){return this._children[t]},r.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},r.prototype.forEachChild=function(t){i(this._children,t)},r.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},r.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},r.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(r.prototype,s);var a=function(t){this.register([],t,!1)};a.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},a.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},a.prototype.update=function(t){!function t(e,n,o){0;n.update(o);if(o.modules)for(var i in o.modules){if(!n.getChild(i))return void 0;t(e.concat(i),n.getChild(i),o.modules[i])}}([],this.root,t)},a.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var s=new r(e,n);0===t.length?this.root=s:this.get(t.slice(0,-1)).addChild(t[t.length-1],s);e.modules&&i(e.modules,function(e,i){o.register(t.concat(i),e,n)})},a.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var c;var u=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&_(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new a(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c;var r=this,s=this.dispatch,u=this.commit;this.dispatch=function(t,e){return s.call(r,t,e)},this.commit=function(t,e,n){return u.call(r,t,e,n)},this.strict=i;var f=this._modules.root.state;d(this,f,[],this._modules.root),l(this,f),n.forEach(function(t){return t(e)}),(void 0!==t.devtools?t.devtools:c.config.devtools)&&function(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}(this)},f={state:{configurable:!0}};function p(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function h(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;d(t,n,[],t._modules.root,!0),l(t,n,e)}function l(t,e,n){var o=t._vm;t.getters={};var r=t._wrappedGetters,s={};i(r,function(e,n){s[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:s}),c.config.silent=a,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),o&&(n&&t._withCommit(function(){o._data.$$state=null}),c.nextTick(function(){return o.$destroy()}))}function d(t,e,n,o,i){var r=!n.length,s=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[s]=o),!r&&!i){var a=m(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){c.set(a,u,o.state)})}var f=o.context=function(t,e,n){var o=""===e,i={dispatch:o?t.dispatch:function(n,o,i){var r=v(n,o,i),s=r.payload,a=r.options,c=r.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:o?t.commit:function(n,o,i){var r=v(n,o,i),s=r.payload,a=r.options,c=r.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:o?function(){return t.getters}:function(){return function(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,o)===e){var r=i.slice(o);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),n}(t,e)}},state:{get:function(){return m(t.state,n)}}}),i}(t,s,n);o.forEachMutation(function(e,n){!function(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,o.state,e)})}(t,s+n,e,f)}),o.forEachAction(function(e,n){var o=e.root?n:s+n,i=e.handler||e;!function(t,e,n,o){(t._actions[e]||(t._actions[e]=[])).push(function(e,i){var r,s=n.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e,i);return(r=s)&&"function"==typeof r.then||(s=Promise.resolve(s)),t._devtoolHook?s.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):s})}(t,o,i,f)}),o.forEachGetter(function(e,n){!function(t,e,n,o){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}(t,s+n,e,f)}),o.forEachChild(function(o,r){d(t,e,n.concat(r),o,i)})}function m(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function v(t,e,n){var o;return null!==(o=t)&&"object"==typeof o&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function _(t){c&&t===c||
/**
 * vuex v3.1.0
 * (c) 2019 Evan You
 * @license MIT
 */
function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(c=t)}f.state.get=function(){return this._vm._data.$$state},f.state.set=function(t){0},u.prototype.commit=function(t,e,n){var o=this,i=v(t,e,n),r=i.type,s=i.payload,a=(i.options,{type:r,payload:s}),c=this._mutations[r];c&&(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(a,o.state)}))},u.prototype.dispatch=function(t,e){var n=this,o=v(t,e),i=o.type,r=o.payload,s={type:i,payload:r},a=this._actions[i];if(a){try{this._actionSubscribers.filter(function(t){return t.before}).forEach(function(t){return t.before(s,n.state)})}catch(t){0}return(a.length>1?Promise.all(a.map(function(t){return t(r)})):a[0](r)).then(function(t){try{n._actionSubscribers.filter(function(t){return t.after}).forEach(function(t){return t.after(s,n.state)})}catch(t){0}return t})}},u.prototype.subscribe=function(t){return p(t,this._subscribers)},u.prototype.subscribeAction=function(t){return p("function"==typeof t?{before:t}:t,this._actionSubscribers)},u.prototype.watch=function(t,e,n){var o=this;return this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},u.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},u.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),d(this,this.state,t,this._modules.get(t),n.preserveState),l(this,this.state)},u.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=m(e.state,t.slice(0,-1));c.delete(n,t[t.length-1])}),h(this)},u.prototype.hotUpdate=function(t){this._modules.update(t),h(this,!0)},u.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(u.prototype,f);var y=M(function(t,e){var n={};return $(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=O(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]},n[o].vuex=!0}),n}),g=M(function(t,e){var n={};return $(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.commit;if(t){var r=O(this.$store,"mapMutations",t);if(!r)return;o=r.context.commit}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}}),n}),b=M(function(t,e){var n={};return $(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){if(!t||O(this.$store,"mapGetters",t))return this.$store.getters[i]},n[o].vuex=!0}),n}),w=M(function(t,e){var n={};return $(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var r=O(this.$store,"mapActions",t);if(!r)return;o=r.context.dispatch}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}}),n});function $(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function M(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function O(t,e,n){return t._modulesNamespaceMap[n]}var E={Store:u,install:_,version:"3.1.0",mapState:y,mapMutations:g,mapGetters:b,mapActions:w,createNamespacedHelpers:function(t){return{mapState:y.bind(null,t),mapGetters:b.bind(null,t),mapMutations:g.bind(null,t),mapActions:w.bind(null,t)}}};e.a=E},8:function(t,e,n){"use strict";var o=n(16),i=n(17),r=n(3),s={name:"App",components:{Header:o.a,Todos:i.a},computed:Object(r.b)(["title"]),data:function(){return{todos:[{id:1,title:"Todo 1",completed:!1}]}},methods:{},created:function(){console.log("it Works")}};e.a=s}});