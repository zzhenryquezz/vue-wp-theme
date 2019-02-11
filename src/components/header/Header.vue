<template>
  <header class="container-fluid background-green pt-2 pb-2">
    <h1 class="text-white mt-0">{{ title }}</h1>
    <h2 class="text-white">{{ description }}</h2>
  </header>
</template>

<script>

import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: mapState({
    title: state => state.SiteData.siteName,
    description: state => state.SiteData.siteDescription
  })
};
</script>
