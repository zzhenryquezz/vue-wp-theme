webpackHotUpdate(0,{15:function(t,e,n){"use strict";var o=n(5),r=n(6),s=n(3),c=Object(s.a)(r.a,o.render,o.staticRenderFns,!1,null,"d37f6326",null),i=n(9);i.install(n(2)),i.compatible&&(t.hot.accept(),t.hot.data?i.reload("d37f6326",c.options):i.createRecord("d37f6326",c.options),t.hot.accept(5,function(t){o=n(5),i.rerender("d37f6326",{render:o.render,staticRenderFns:o.staticRenderFns})})),c.options.__file="src/components/Todos.vue";c.exports},5:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this.$createElement;this._self._c;return this._m(0)},r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Todos")])])}];o._withStripped=!0,n.d(e,"render",function(){return o}),n.d(e,"staticRenderFns",function(){return r})},6:function(t,e,n){"use strict";e.a={name:"Todos"}},7:function(t,e,n){"use strict";var o=n(14),r=(n(15),{name:"App",components:{Header:o.a},data:function(){return{todos:[{id:1,title:"Todo 1",completed:!1},{id:2,title:"Todo 2",completed:!1},{id:3,title:"Todo 3",completed:!1}]}},methods:{fetchPosts:function(){console.log("it Works")},created:function(){this.fetchPosts(),console.log("it Works")}}});e.a=r}});