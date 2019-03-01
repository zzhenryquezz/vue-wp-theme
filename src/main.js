import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Wp_rest_loop from "./wp-rest-loop/Wp-rest-loop";

Vue.config.devtools = true;

/**
* Vue Use the WP-rest-loop Plugin in root js
*/

Vue.use(Wp_rest_loop);

new Vue({
  el: "#app",
  store,
  Wp_rest_loop,
  render: h => h(App)
});
