webpackHotUpdate(0,{8:function(t,o,e){"use strict";var s=e(16),c=e(17),n={name:"App",components:{Header:s.a,Todos:c.a},data:function(){return{title:this.$store.state.title,todos:[{id:1,title:"Todo 1",completed:!1}]}},methods:{onclick:function(t,o){console.log("click")}},created:function(){var t=this.$Get_Posts({route:"posts",filters:{}});console.log(t)}};o.a=n}});