webpackHotUpdate(0,{24:function(t,n,o){"use strict";var e={name:"WpConfig",methods:{fetchPosts:function(){fetch("/wp-json/wp/v2/posts").then(function(t){return t.json()}).then(function(t){console.log(t)})}},beforeMount:function(){this.fetchPosts()}};n.a=e}});