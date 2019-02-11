<template>
  <header class="container-fluid background-black text-center">
    <h1 class="text-white">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: this.$store.state.SiteData.siteName
    };
  }
};
</script>
