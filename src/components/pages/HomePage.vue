<template>
  <main class="container">
    <div class="entry-posts">
      <article class="pd-2 post row" v-for="post in posts" v-bind:key="post.id" >
        <h2 class="col-12">{{ post.title.rendered }}</h2>
        <div class="entry-Thumbnail col-4">
          <img :id="'featured-image-' + post.id" class="background-image" v-on:load="get_post_thumbnail(post)" alt="">
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
      posts: [],
      thumbs: [],
      ready: false,
    };
  },
  computed: mapState({
    title: state => state.SiteData.siteName,
    description: state => state.SiteData.siteDescription
  }),
  methods:{
    get_post_thumbnail(post){
      let img_id = "featured-image-" + post.id;
      const thumbs = this.thumbs;
      setTimeout(function(){ 
        thumbs.forEach( (thumb) =>{
          if(thumb.id == post.featured_media){
            document.getElementById(img_id).src=thumb.url;
          }
        })
        
        }, 1000);
    }
  },
  created: function(){

    let args = {
      route: 'posts',
      var:{
        per_page: 5,
      },
    };

    this.$get_posts(args).then( (response) => {
      var posts = response;
      let thumbs = [];
      let i = 0;
      posts.forEach( (post) =>{        
        if(this.$has_thumbnail(post)){
          this.$get_thumbnail(post, false)
            .then( (thumbUrl) => {
              let object = {
                id: post.featured_media,
                url: thumbUrl,
              } 
              thumbs[i] = object; 
              i++;
            });
        }         
        });
      this.posts = posts;
      this.thumbs = thumbs;
      
      this.ready = true;

      });
  }
};
</script>
