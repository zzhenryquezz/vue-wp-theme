webpackHotUpdate(0,{13:function(t,e,o){"use strict";o.r(e);var n=o(2),a=o(11),c=new Vue({data:{},methods:{fetchPosts:function(){fetch("/wp-json/v2/posts")}},created:function(){this.fetch}}),i=o(6),f=Object(i.a)(c,void 0,void 0,!1,null,null,null),l=o(9);l.install(o(2)),l.compatible&&(t.hot.accept(),t.hot.data?l.reload("53390ef4",f.options):l.createRecord("53390ef4",f.options)),f.options.__file="src/WpConfig.vue";var s=f.exports;n.default.config.devtools=!0,n.default.component("WpConfig",s),new n.default({el:"#app",render:function(t){return t(a.a)}})},20:!1,21:!1,22:!1});