webpackHotUpdate(0,{25:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(16),s=o(2),i={state:{siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription,siteUrl:wpDataSite.siteUrl}};r.default.config.devtools=!0,r.default.use(s.a);var a=new s.a.Store({modules:{SiteData:i}}),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{route:"posts",filters:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=get_EndPoint(),r=e.filters,n="",s=[];for(var i in r)r.hasOwnProperty(i)&&("per_page"==i&&"number"==typeof r[i]?(n+="?per_page=",n+=r[i]):console.error("Wp-loop: Wrong args in Loop"),"order"==i&&("desc"===r[i]||"asc"===r[i]?(n+="?order=",n+=r[i]):console.error("Wp-loop: Wrong args in Loop")),"orderby"==i&&(n+="?orderby=",n+=r[i]));var a=o+e.route+t+n,l=new XMLHttpRequest;return l.open("GET",a,!1),l.onload=function(){if(l.status>=200&&l.status<400){var e=JSON.parse(l.responseText);s=e}else console.log("We connected to the server, but it returned an error.")},l.onerror=function(){console.log("Connection error")},l.send(),s},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"full",o=p.get_EndPoint(),r="",n=e.featured_media;if(0!=n&&null!=n){var s=o+"media/"+n,i=new XMLHttpRequest;return i.open("GET",s,!1),i.onload=function(){if(i.status>=200&&i.status<400){var e=JSON.parse(i.responseText);r=e.media_details.sizes[t].source_url}else console.log("We connected to the server, but it returned an error.")},i.onerror=function(){console.log("Connection error")},i.send(),document.createElement("img").setAttribute("src",r),r.toString()}console.log("No Thumbnail or other issue")},p={data:{siteUrl:wpDataSite.siteUrl,siteName:wpDataSite.siteName,siteDescription:wpDataSite.siteDescription},methods:{get_EndPoint:function(){return this.data.siteUrl+"/wp-json/wp/v2/"},get_posts:l,get_thubnail:u}},c={install:function(e,t){e.prototype.$get_posts=function(e,t){return get_posts(e,t)},e.prototype.$get_Thubnail=function(e,t){return GetThumbnail(e,t)}}};r.default.config.devtools=!0,r.default.use(c),new r.default({el:"#app",store:a,Wp_rest_loop:c,render:function(e){return e(n.a)}})}});