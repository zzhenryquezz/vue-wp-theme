webpackHotUpdate(0,{25:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(16),i=o(2),s={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription}};r.default.config.devtools=!0,r.default.use(i.a);var a=new i.a.Store({modules:{SiteData:s}}),u={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription},get_EndPoint:function(){return this.state.siteUrl+"/wp-json/wp/v2/"}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{route:"posts",filters:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=u.get_EndPoint(),r=e.filters,n="",i=[];for(var s in r)r.hasOwnProperty(s)&&("per_page"==s&&"number"==typeof r[s]?(n+="?per_page=",n+=r[s]):console.error("Wp-loop: Wrong args in Loop"),"order"==s&&("desc"===r[s]||"asc"===r[s]?(n+="?order=",n+=r[s]):console.error("Wp-loop: Wrong args in Loop")),"orderby"==s&&(n+="?orderby=",n+=r[s]));var a=o+e.route+t+n,l=new XMLHttpRequest;return l.open("GET",a,!1),l.onload=function(){if(l.status>=200&&l.status<400){var e=JSON.parse(l.responseText);i=e}else console.log("We connected to the server, but it returned an error.")},l.onerror=function(){console.log("Connection error")},l.send(),i};function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],u.get_EndPoint()),o="",r=e.featured_media;if(0==r||null==r)return console.log("No Thumbnail or other issue"),"No Thumbnail";var n=t+"media/"+r,i=new XMLHttpRequest;return i.open("GET",n,!1),i.onload=function(){if(i.status>=200&&i.status<400){var e=JSON.parse(i.responseText);o=e.media_details.sizes.full.source_url}else console.log("We connected to the server, but it returned an error.")},i.onerror=function(){console.log("Connection error")},i.send(),document.createElement("img").setAttribute("src",o),console.log(p(o)),o.toString()},f={install:function(e,t){e.prototype.$Get_Posts=function(e,t){return l(e,t)},e.prototype.$Get_Thubnail=function(e,t){return c(e,t)}}};r.default.config.devtools=!0,r.default.use(f),new r.default({el:"#app",store:a,Wpconfig:f,render:function(e){return e(n.a)}})}});