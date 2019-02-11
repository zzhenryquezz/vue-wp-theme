<template>
  <div id="app">
    <Header />
    <HomePage />
    <Footer />
  </div>
</template>

<script>
import Header   from "./components/header/Header.vue";
import Footer   from "./components/footer/Footer.vue";
import HomePage from "./components/pages/HomePage.vue";

// import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    HomePage,
    Footer,
  },
  // computed: mapState(["title"]),
  data() {
    return {};
  },
};
</script>

<style>
@import "css/main.min.css";
</style>
