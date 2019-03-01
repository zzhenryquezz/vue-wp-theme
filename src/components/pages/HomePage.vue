<template>
  <main class="container">
    <div class="entry-posts">
      <article class="pd-2 post row" v-for="post in posts" v-bind:key="post.id" >
        <h2 class="col-12">{{ post.title.rendered }}</h2>
        <div class="entry-Thumbnail col-4">
          <img class="background-image" v-bind:src="$get_thumbnail(post)" alt="">
        </div>
        <p>{{ post.excerpt.rendered.replace(/<\/?[^>]+>/gi, '') }}</p>
      </article>
    </div>
  </main>
</template>

<script>

import { mapState } from 'vuex';

export default {
  data() {
    return {
      posts: []
    };
  },
  computed: mapState({
    title: state => state.SiteData.siteName,
    description: state => state.SiteData.siteDescription
  }),
  methods:{},
  created: function(){
    let args = {
      route: 'posts',
      filters:{},
    };
    this.posts = this.$get_posts(args);
  }
};
</script>
