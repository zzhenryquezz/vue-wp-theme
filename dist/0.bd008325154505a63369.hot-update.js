webpackHotUpdate(0,{23:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(13),s=o(21),i={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription}};r.default.config.devtools=!0,r.default.use(s.a);var a=new s.a.Store({modules:{SiteData:i}}),p={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription},get_EndPoint:function(){return this.state.siteUrl+"/wp-json/wp/v2/"}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{route:"posts",filters:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=p.get_EndPoint(),r=e.filters,n="",s=[];for(var i in r)r.hasOwnProperty(i)&&("per_page"==i&&"number"==typeof i?(n+="?per_page=",n+=r[i]):console.error("Wp-loop: Wrong args in Loop"),"order"==i&&("desc"===r[i]||"asc"===r[i]?(n+="?order=",n+=r[i]):console.error("Wp-loop: Wrong args in Loop")),"orderby"==i&&(n+="?orderby=",n+=r[i]));var a=o+e.route+t+n,l=new XMLHttpRequest;return l.open("GET",a,!1),l.onload=function(){if(l.status>=200&&l.status<400){var e=JSON.parse(l.responseText);s=e}else console.log("We connected to the server, but it returned an error.")},l.onerror=function(){console.log("Connection error")},l.send(),s},u={install:function(e,t){e.prototype.$Get_Posts=function(e){return l(e)}}};r.default.config.devtools=!0,r.default.use(u),new r.default({el:"#app",store:a,Wpconfig:u,render:function(e){return e(n.a)}})}});