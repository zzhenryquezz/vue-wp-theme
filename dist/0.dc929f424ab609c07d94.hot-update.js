webpackHotUpdate(0,{24:function(t,o,s){"use strict";var e={name:"WpConfig",methods:{fetchPosts:function(){var t=fetch("/wp-json/wp/v2/posts");console.log(t[0])}},beforeMount:function(){this.fetchPosts()}};o.a=e}});