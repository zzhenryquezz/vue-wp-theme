<template>
  <header id="showcase-reactive-header" class="container-fluid">
    <NavMenu></NavMenu>
    <h1 class="text-center">{{ title }}</h1>
    <h2 class="text-center">{{ description }}</h2>
  </header>
</template>

<script>

import { mapState } from 'vuex';
import NavMenu from './NavMenu.vue';

export default {
  data() {
    return {};
  },
  computed: mapState({
    title: state => state.SiteData.siteName,
    description: state => state.SiteData.siteDescription
  }),
  components: {
    NavMenu
  },
};
</script>
