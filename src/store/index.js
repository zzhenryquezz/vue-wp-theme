import Vue from "vue";
import Vuex from "vuex";
import SiteData from "./modules/SiteData";

Vue.config.devtools = true;

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    SiteData
  }
});

export default store;
