<template>
  <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
    <div class="blog-entry">
      <NuxtLink :to="'/blog/' + slug" class="blog-img">
        <img :src="image" class="img-fluid" :alt="alt">
      </NuxtLink>
      <div class="desc"> <span>{{formattedDate()}} | {{tag}}</span>
        <h3><NuxtLink to="/blog/post">{{title}}</NuxtLink></h3>
        <p>{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      slug: {
        default: 'post',
      },
      title: {
        default: 'Blog Post Title Here',
      },
      date: {
        default: 'Sep 25, 2021',
      },
      image: {
        default: '/images/1920x1280.jpg',
      },
      alt: {
        default: 'image alt text',
      },
      description: {
        default: 'Description Goes Here!!!',
      },
      tag: {
        default: 'Blog Tag',
      }
    },
    methods: {
      formattedDate() {
        const propDate = new Date(this.date);

        return propDate.toString('mmmm dd, yyyy');
      }
    }
  };
</script>

<style scoped>

</style>
