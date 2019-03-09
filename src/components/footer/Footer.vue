<template>
  <footer id="showcase-reactive-footer" class="container-fluid background-black text-center">
    <h1 class="text-white">Footer</h1>

  </footer>
</template>

<script>
export default {
  data() {
    return {
      title: this.$store.state.SiteData.siteName,
      description:this.$store.state.SiteData.siteDescription
    };
  }
};
</script>
