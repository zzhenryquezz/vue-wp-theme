webpackHotUpdate(0,{25:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(16),i=n(2),s={state:{siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription,siteUrl:wpDataSite.siteUrl,themeEndPoint:wpDataSite.themeEndPoint}};o.default.config.devtools=!0,o.default.use(i.a);var a=new i.a.Store({modules:{SiteData:s}}),u={data:{debug:!0,siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription,themeEndPoint:wpDataSite.themeEndPoint},get_EndPoint:function(){return this.data.siteUrl+"/wp-json/wp/v2/"},get_theme_endPoint:function(){var e=this.data.siteUrl;return e+="/wp-json/",(e+=this.data.themeEndPoint).toString()}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{route:"posts",endline:"",filters:{}},t=u.get_EndPoint(),n=e.filters,o="",r="",i=[];for(var s in void 0!==e.endline&&(r=e.endline,console.log(r)),n)n.hasOwnProperty(s)&&("per_page"==s&&"number"==typeof n[s]?(o+="?per_page=",o+=n[s]):console.error("Wp-loop: Wrong args in Loop"),"order"==s&&("desc"===n[s]||"asc"===n[s]?(o+="?order=",o+=n[s]):console.error("Wp-loop: Wrong args in Loop")),"orderby"==s&&(o+="?orderby=",o+=n[s]));var a=t+e.route+r+o,d=new XMLHttpRequest;return d.open("GET",a,!1),d.onload=function(){if(d.status>=200&&d.status<400){var e=JSON.parse(d.responseText);i=e}else console.log("We connected to the server, but it returned an error.")},d.onerror=function(){console.log("Connection error")},d.send(),i},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"full",n=u.get_EndPoint(),o="",r=e.featured_media;if(0!=r&&null!=r){var i=n+"media/"+r,s=new XMLHttpRequest;return s.open("GET",i,!1),s.onload=function(){if(s.status>=200&&s.status<400){var e=JSON.parse(s.responseText);o=e.media_details.sizes[t].source_url}else console.log("We connected to the server, but it returned an error.")},s.onerror=function(){console.log("Connection error")},s.send(),document.createElement("img").setAttribute("src",o),o.toString()}u.data.debug&&console.warn("No Thumbnail or other issue")},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"menu",t=[],n=u.get_theme_endPoint()+e+"/itens",o=new XMLHttpRequest;return o.open("GET",n,!1),o.onload=function(){if(o.status>=200&&o.status<400){var e=JSON.parse(o.responseText);t=e}else console.log("We connected to the server, but it returned an error.")},o.onerror=function(){console.log("Connection error")},o.send(),t},c={methods:{get_endpoint:u.get_EndPoint(),get_posts:d,get_thumbnail:l,get_menu_itens:p}},g={install:function(e,t){e.prototype.$get_endpoint=function(){return c.methods.get_endpoint},e.prototype.$get_posts=function(e,t){return c.methods.get_posts(e,t)},e.prototype.$get_thumbnail=function(e,t){return c.methods.get_thumbnail(e,t)},e.prototype.get_menu_itens=function(e){return c.methods.get_menu_itens(e)}}};o.default.config.devtools=!0,o.default.use(g),new o.default({el:"#app",store:a,Wp_rest_loop:g,render:function(e){return e(r.a)}})}});