webpackHotUpdate(0,{25:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(16),s=o(2),i={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription}};n.default.config.devtools=!0,n.default.use(s.a);var a=new s.a.Store({modules:{SiteData:i}}),l={state:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription},get_EndPoint:function(){return this.state.siteUrl+"/wp-json/wp/v2/"}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{route:"posts",filters:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=l.get_EndPoint(),n=e.filters,r="",s=[];for(var i in n)n.hasOwnProperty(i)&&("per_page"==i&&"number"==typeof n[i]?(r+="?per_page=",r+=n[i]):console.error("Wp-loop: Wrong args in Loop"),"order"==i&&("desc"===n[i]||"asc"===n[i]?(r+="?order=",r+=n[i]):console.error("Wp-loop: Wrong args in Loop")),"orderby"==i&&(r+="?orderby=",r+=n[i]));var a=o+e.route+t+r,u=new XMLHttpRequest;return u.open("GET",a,!1),u.onload=function(){if(u.status>=200&&u.status<400){var e=JSON.parse(u.responseText);s=e}else console.log("We connected to the server, but it returned an error.")},u.onerror=function(){console.log("Connection error")},u.send(),s},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],l.get_EndPoint()),o="",n=e.featured_media;if(0!=n&&"undefined"!=n){console.log(n);var r=t+"media/"+n;console.log(r);var s=new XMLHttpRequest;return s.open("GET",r,!1),s.onload=function(){if(s.status>=200&&s.status<400){var e=JSON.parse(s.responseText);o=e.media_details.sizes.full.source_url}else console.log("We connected to the server, but it returned an error.")},s.onerror=function(){console.log("Connection error")},s.send(),console.log(o),o}console.log("no Thumbnail")},c={install:function(e,t){e.prototype.$Get_Posts=function(e,t){return u(e,t)},e.prototype.$Get_Thubnail=function(e,t){return p(e,t)}}};n.default.config.devtools=!0,n.default.use(c),new n.default({el:"#app",store:a,Wpconfig:c,render:function(e){return e(r.a)}})}});