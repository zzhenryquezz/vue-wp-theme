import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Wpconfig from "./wp-rest/WpConfig";

Vue.config.devtools = true;
Vue.use(Wpconfig);

new Vue({
  el: "#app",
  store,
  Wpconfig,
  render: h => h(App)
});
