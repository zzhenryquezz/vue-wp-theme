webpackHotUpdate(0,{25:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(16),i=o(2),s={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription}};r.default.config.devtools=!0,r.default.use(i.a);var a=new i.a.Store({modules:{SiteData:s}}),p={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription},get_EndPoint:function(){return this.state.siteUrl+"/wp-json/wp/v2/"}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{route:"posts",filters:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=p.get_EndPoint(),r=e.filters,n="",i=[];for(var s in r)r.hasOwnProperty(s)&&("per_page"==s&&"number"==typeof r[s]?(n+="?per_page=",n+=r[s]):console.error("Wp-loop: Wrong args in Loop"),"order"==s&&("desc"===r[s]||"asc"===r[s]?(n+="?order=",n+=r[s]):console.error("Wp-loop: Wrong args in Loop")),"orderby"==s&&(n+="?orderby=",n+=r[s]));var a=o+e.route+t+n,l=new XMLHttpRequest;return l.open("GET",a,!1),l.onload=function(){if(l.status>=200&&l.status<400){var e=JSON.parse(l.responseText);i=e}else console.log("We connected to the server, but it returned an error.")},l.onerror=function(){console.log("Connection error")},l.send(),i},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],p.get_EndPoint(),e.featured_media);console.log(t)},c={install:function(e,t){e.prototype.$Get_Posts=function(e,t){return l(e,t)},e.prototype.$Get_Thubnail=function(e,t){return u(e,t)}}};r.default.config.devtools=!0,r.default.use(c),new r.default({el:"#app",store:a,Wpconfig:c,render:function(e){return e(n.a)}})}});