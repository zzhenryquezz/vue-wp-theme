webpackHotUpdate(0,{0:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("Header"),this._v(" "),o("Todos",{attrs:{todos:this.todos}})],1)},i=[];n._withStripped=!0,e.d(o,"render",function(){return n}),e.d(o,"staticRenderFns",function(){return i})},23:!1,24:!1,25:!1,7:function(t,o,e){"use strict";var n=e(14),i=e(15),s={name:"App",components:{Header:n.a,Todos:i.a,WpConfig:WpConfig},data:function(){return{todos:[{id:1,title:"Todo 1",completed:!1},{id:2,title:"Todo 2",completed:!1},{id:3,title:"Todo 3",completed:!1}]}},methods:{fetchPosts:function(){console.log("it Works")},created:function(){this.fetchPosts(),console.log("it Works")}}};o.a=s}});