<template>
  <div class="brian-gallery">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 text-center"> <span class="heading-meta">Portfolio</span>
          <h2 class="brian-heading animate-box" data-animate-effect="fadeInUp">Masonry Gallery</h2> </div>
      </div>
      <div class="row brian-photos">
        <div class="col-12 col-md-4 animate-box" data-animate-effect="fadeInUp">
          <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Portrait Photo" href="/images/633x900.jpg"> <img class="img-fluid" src="/images/633x900.jpg"> </a>
          <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Portrait Photo" href="/images/1920x1280.jpg"> <img class="img-fluid" src="/images/1920x1280.jpg"> </a>
          <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Portrait Photo" href="/images/1920x1280.jpg"> <img class="img-fluid" src="/images/1920x1280.jpg"> </a>
        </div>
        <div class="col-12 col-md-4 animate-box" data-animate-effect="fadeInUp">
          <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Portrait Photo" href="/images/1920x1280.jpg"> <img class="img-fluid" src="/images/1920x1280.jpg"> </a>
          <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Portrait Photo" href="/images/1920x1280.jpg"> <img class="img-fluid" src="/images/1920x1280.jpg"> </a>
          <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Portrait Photo" href="/images/633x900.jpg"> <img class="img-fluid" src="/images/633x900.jpg"> </a>
        </div>
        <div class="col-12 col-md-4 animate-box" data-animate-effect="fadeInUp">
          <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Portrait Photo" href="/images/1920x1280.jpg"> <img class="img-fluid" src="/images/1920x1280.jpg"> </a>
          <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Portrait Photo" href="/images/633x900.jpg"> <img class="img-fluid" src="/images/633x900.jpg"> </a>
          <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Portrait Photo" href="/images/1920x1280.jpg"> <img class="img-fluid" src="/images/1920x1280.jpg"> </a>
        </div>
      </div>
      <!-- Video Gallery -->
      <div class="row">
        <div class="col-md-12 text-center mt-60"> <span class="heading-meta">Portfolio</span>
          <h2 class="brian-heading animate-box" data-animate-effect="fadeInUp">Video Gallery</h2> </div>
      </div>
      <div class="row align-items-stretch brian-photos mb-30" id="brian-section-photos">
        <div class="col-12">
          <!-- IMPORTANT: Some functionality (ajax, iframes, etc) will not work when you're opening local file directly on your browser, the code must be running on a web server. SOURCE: https://fancyapps.com/fancybox/3/docs/ -->
          <div class="row align-items-stretch">
            <!-- YouTube Popup -->
            <div class="col-md-4 animate-box" data-animate-effect="fadeInUp">
              <a data-fancybox="" href="https://www.youtube.com/watch?v=ybso7mzV2hY"> <img class="img-fluid" src="/images/1920x1280.jpg">
                <p><span class="fab fa-youtube"></span></p>
              </a>
              <h6>Youtube Video (Popup)</h6> </div>
            <!-- Vimeo Popup -->
            <div class="col-md-4 animate-box" data-animate-effect="fadeInUp">
              <a data-fancybox="" data-ratio="2" href="https://vimeo.com/74295728"> <img class="img-fluid" src="/images/1920x1280.jpg">
                <p><span class="fab fa-youtube"></span></p>
              </a>
              <h6>Vimeo Video (Popup)</h6> </div>
            <!-- Custom Video Popup -->
            <div class="col-md-4 animate-box" data-animate-effect="fadeInUp">
              <a data-fancybox="bigbuckbunny" href="/images/video.mp4"> <img class="img-fluid" src="/images/1920x1280.jpg">
                <p><span class="fab fa-youtube"></span></p>
              </a>
              <h6>Custom Video (Popup)</h6> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      loadJquery();
    }
  }
</script>

<style scoped>

</style>
