webpackHotUpdate(0,{13:function(t,e,o){"use strict";o.r(e);var n=o(2),c=o(11),a=n.default.extend({data:function(){console.log("etc")},methods:{fetchPosts:function(){fetch("/wp-json/v2/posts");console.log("festa")}},created:function(){this.fetch}}),l=o(6),s=Object(l.a)(a,void 0,void 0,!1,null,null,null),f=o(9);f.install(o(2)),f.compatible&&(t.hot.accept(),t.hot.data?f.reload("53390ef4",s.options):f.createRecord("53390ef4",s.options)),s.options.__file="src/WpConfig.vue";s.exports;n.default.config.devtools=!0,new n.default({el:"#app",render:function(t){return t(c.a)}})}});