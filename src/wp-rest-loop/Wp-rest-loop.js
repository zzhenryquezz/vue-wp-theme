/**
* Vue.js Plugin file of Wp-rest-loop
* This file created function vue.js Plugin that return the same function of the files:
* @file ./GetPosts.js
* @file ./GetThumbnail.js
*
* @version 1.0.0
*/

import Index from './index';
import Vue from "vue";

export default {
  install: (Vue, options) => {
    /**
    * Loop of Posts
    * @Event Call GetPosts() function form file ./GetPosts.js
    * @return string of endpoint of site
    */
    Vue.prototype.$get_endpoint = () => {
      return Index.methods.get_endpoint;
    },

    /**
    * Loop of Posts
    * @Event Call GetPosts() function form file ./GetPosts.js
    * @return array of posts[]
    */
    Vue.prototype.$get_posts = (args, endPoint) => {
      return Index.methods.get_posts(args, endPoint);
    },

    /**
    * Recive the Thumbnail
    * @Event Call GetThumbnail() function form file ./GetThumbnail.js
    * @return The link src of the featured Thumbnail
    */
    Vue.prototype.$get_thumbnail = (post, size) => {
      return Index.methods.get_thumbnail(post, size);
    }

    /**
    * Recive the menu itens
    * @Event Call Getmenu() function form file ./GetMenu.js
    * @return array of itens with name and link
    */
    Vue.prototype.$get_menu_itens = ( menu ) => {
      return Index.methods.get_menu_itens( menu );
    }
  }
};
