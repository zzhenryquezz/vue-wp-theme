webpackHotUpdate(0,{25:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(16),s=o(2),i={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription}};r.default.config.devtools=!0,r.default.use(s.a);var a=new s.a.Store({modules:{SiteData:i}}),l={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription},get_EndPoint:function(){return this.state.siteUrl+"/wp-json/wp/v2/"}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{route:"posts",filters:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=l.get_EndPoint(),r=e.filters,n="",s=[];for(var i in r)r.hasOwnProperty(i)&&("per_page"==i&&"number"==typeof r[i]?(n+="?per_page=",n+=r[i]):console.error("Wp-loop: Wrong args in Loop"),"order"==i&&("desc"===r[i]||"asc"===r[i]?(n+="?order=",n+=r[i]):console.error("Wp-loop: Wrong args in Loop")),"orderby"==i&&(n+="?orderby=",n+=r[i]));var a=o+e.route+t+n,u=new XMLHttpRequest;return u.open("GET",a,!1),u.onload=function(){if(u.status>=200&&u.status<400){var e=JSON.parse(u.responseText);s=e}else console.log("We connected to the server, but it returned an error.")},u.onerror=function(){console.log("Connection error")},u.send(),s},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],l.get_EndPoint()),o="",r=e.featured_media;if(0!=r&&null!=r){var n=t+"media/"+r,s=new XMLHttpRequest;s.open("GET",n,!1),s.onload=function(){if(s.status>=200&&s.status<400){var e=JSON.parse(s.responseText);o=e.media_details.sizes.full.source_url}else console.log("We connected to the server, but it returned an error.")},s.onerror=function(){console.log("Connection error")},s.send();var i=document.createElement("img");return i.setAttribute("src",o),console.log(i),i}console.log("No Thumbnail or other issue")},c={install:function(e,t){e.prototype.$Get_Posts=function(e,t){return u(e,t)},e.prototype.$Get_Thubnail=function(e,t){return p(e,t)}}};r.default.config.devtools=!0,r.default.use(c),new r.default({el:"#app",store:a,Wpconfig:c,render:function(e){return e(n.a)}})}});