import GetPosts from "./GetPosts";
import GetThumbnail from "./GetThumbnail";
import Vue from "vue";

export default {
  install: (Vue, options) => {
    Vue.prototype.$Get_Posts = (args, endPoint) => {
      return GetPosts(args, endPoint);
    },
    Vue.prototype.$Get_Thubnail = (post, size) => {
      return GetThumbnail(post, size);
    }
  }
};
