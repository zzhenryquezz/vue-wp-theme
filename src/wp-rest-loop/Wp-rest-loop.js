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
    * Get site endpoint
    * @Event Call get_endpoint() function from file ./Config.js
    * @return string of endpoint of site
    */
    Vue.prototype.$get_endpoint = () => {
      return Index.methods.get_endpoint;
    },

    /**
    * Wp Request Api
    * @Event Call Reques() function from file ./GetPosts.js
    * @return object JSON
    */
    Vue.prototype.$wp_rest_request = (args, url) => {
      return Index.methods.wp_rest_request(args, url);
    },

    /**
    * Loop of Posts
    * @Event Call GetPosts() function form file ./GetPosts.js
    * @return array of posts[]
    */
    Vue.prototype.$get_posts = (args) => {
      return Index.methods.get_posts(args);
    },

    /**
    * Chek if have Thumbnail
    * @Event Call GetThumbnail() function form file ./GetThumbnail.js
    * @return The link src of the featured Thumbnail
    */
    Vue.prototype.$has_thumbnail = (post, size, get) => {
      return Index.methods.has_thumbnail(post);
    }
    /**
    * Recive the Thumbnail
    * @Event Call GetThumbnail() function form file ./GetThumbnail.js
    * @return The link src of the featured Thumbnail
    */
    Vue.prototype.$get_thumbnail = (post, size, get) => {
      return Index.methods.get_thumbnail(post, size, get);
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
