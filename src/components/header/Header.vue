<template>
  <header class="container-fluid text-center background-green pt-2 pb-2">
    <h1 class="text-white mt-0">{{ title }}</h1>
    <h2 class="text-white">{{ description }}</h2>
    <NavMenu></NavMenu>
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
