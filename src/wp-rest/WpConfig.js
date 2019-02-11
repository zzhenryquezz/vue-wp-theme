import GetPosts from "./GetPosts";
import Vue from "vue";

export default {
  install: (Vue, options) => {
    Vue.prototype.$Get_Posts = args => {
      return GetPosts(args);
    };
  }
};
