webpackHotUpdate(0,{24:function(t,o,n){"use strict";var s={name:"WpConfig",data:{posts:[]},methods:{fetchPosts:function(){var t=this;fetch("/wp-json/wp/v2/posts").then(function(t){return t.json()}).then(function(o){t.posts=o,console.log("resive data")})}},beforeMount:function(){this.fetchPosts()}};o.a=s}});