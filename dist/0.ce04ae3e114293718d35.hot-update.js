webpackHotUpdate(0,{16:function(t,e,n){"use strict";n.r(e);var o=n(2),s=n(13),r=n(25);o.default.config.devtools=!0,o.default.component("WpConfig",r.a),new o.default({el:"#app",render:function(t){return t(s.a)}})},23:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v(this._s(this.posts))])},s=[];o._withStripped=!0,n.d(e,"render",function(){return o}),n.d(e,"staticRenderFns",function(){return s})},24:function(t,e,n){"use strict";var o={name:"WpConfig",data:{posts:[]},methods:{fetchPosts:function(){var t=this;fetch("/wp-json/wp/v2/posts").then(function(t){return t.json()}).then(function(e){t.posts=e,console.log(t.posts)})}},beforeMount:function(){this.fetchPosts()}};e.a=o},25:function(t,e,n){"use strict";var o=n(23),s=n(24),r=n(3),i=Object(r.a)(s.a,o.render,o.staticRenderFns,!1,null,"53390ef4",null),c=n(9);c.install(n(2)),c.compatible&&(t.hot.accept(),t.hot.data?c.reload("53390ef4",i.options):c.createRecord("53390ef4",i.options),t.hot.accept(23,function(t){o=n(23),c.rerender("53390ef4",{render:o.render,staticRenderFns:o.staticRenderFns})})),i.options.__file="src/WpConfig.vue",e.a=i.exports}});