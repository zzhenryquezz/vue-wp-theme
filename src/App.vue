<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from "./components/headerComponets/Header.vue";

// import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header
  },
  // computed: mapState(["title"]),
  data() {
    return {};
  },
  created: function() {
    let args = {
      route: "posts",
      filters: { per_page: 5 }
    };
    let posts = this.$Get_Posts(args);
    console.log(posts);
  }
};
</script>

<style>
@import "css/main.min.css";
</style>