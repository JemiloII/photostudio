<template>
  <div class="brian-blog">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-center"> <span class="heading-meta">Read</span>
            <h2 class="brian-heading animate-box" data-animate-effect="fadeInUp">News &amp; Blog</h2> </div>
        </div>
        <div class="row">
          <BlogEntry
            v-for="post in posts"
            :key="post.slug"
            :slug="post.slug"
            :title="post.title"
            :date="post.createdAt"
            :description="post.description"
          />
          <!-- image: '/images/1920x1280.jpg',-->
          <!-- alt: 'image alt text',-->
          <!-- tag: 'Blog Tag',-->
        </div>
        <div class="row">
          <div class="col-md-12 text-center animate-box" data-animate-effect="fadeInUp">
            <!-- Pagination -->
            <ul class="brian-pagination-wrap align-center">
              <li><a href="blog.html#"><i class="fa fa-angle-left"></i></a></li>
              <li><a href="blog.html#">1</a></li>
              <li><a href="blog.html#" class="active">2</a></li>
              <li><a href="blog.html#">3</a></li>
              <li><a href="blog.html#"><i class="fa fa-angle-right"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import BlogEntry from '~/components/blog-entry';

  export default {
    components: {
      BlogEntry
    },
    async asyncData({$content}) {
      const posts = await $content('/blog').fetch();
      console.log(posts);

      return {
        posts
      };
    },
    mounted() {
      loadJquery();
    }
  }
</script>

<style scoped>

</style>
