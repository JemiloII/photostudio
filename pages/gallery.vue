<template>
  <div class="brian-gallery">
    <div class="container-fluid">
      <!-- Photo Gallery -->
      <div class="row">
        <div class="col-md-12 text-center"> <span class="heading-meta">Portfolio</span>
          <h2 class="brian-heading animate-box" data-animate-effect="fadeInUp">Photo Gallery</h2>
        </div>
      </div>
      <div class="row align-items-stretch brian-photos" id="brian-section-photos">
        <div class="col-12">
          <div class="row align-items-stretch">
            <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
              <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Potrait Photo" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

              </a>
            </div>
            <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
              <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Wedding Photo" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

              </a>
            </div>
            <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
              <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Potrait Photo" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

              </a>
            </div>
            <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
              <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Potrait Photo" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

              </a>
            </div>
            <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
              <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Family Photo" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

              </a>
            </div>
            <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
              <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Sport Photo" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

              </a>
            </div>
            <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
              <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Potrait Photo" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

              </a>
            </div>
            <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
              <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Potrait Photo" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

              </a>
            </div>
          </div>
          <div class="row align-items-stretch mt-60">
            <div class="col-md-12">
              <!-- show more -->
              <div class="brian-show-more-container">
                <div class="row align-items-stretch">
                  <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Art Portrait" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

                    </a>
                  </div>
                  <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Portrait Photo" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

                    </a>
                  </div>
                  <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Landspace Photo" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

                    </a>
                  </div>
                  <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <a href="/images/1920x1280.jpg" class="d-block brian-photo-item" data-caption="Art Photo" data-fancybox="gallery"> <img src="/images/1920x1280.jpg" alt="Image" class="img-fluid">

                    </a>
                  </div>
                </div>
              </div>
              <!-- add more -->
              <div class="brian-more-wrapper txt-center animate-box" data-animate-effect="fadeInUp">
                <NuxtLink to="/" class="brian-more-trigger flex"> <span class="plus flex-center">&nbsp;</span> </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Video Gallery -->
      <div class="row">
        <div class="col-md-12 mt-60 text-center"> <span class="heading-meta">Portfolio</span>
          <h2 class="brian-heading animate-box" data-animate-effect="fadeInUp">Video Gallery</h2>
        </div>
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
              <h6>Youtube Video (Popup)</h6>
            </div>
            <!-- Vimeo Popup -->
            <div class="col-md-4 animate-box" data-animate-effect="fadeInUp">
              <a data-fancybox="" data-ratio="2" href="https://vimeo.com/74295728"> <img class="img-fluid" src="/images/1920x1280.jpg">
                <p><span class="fab fa-youtube"></span></p>
              </a>
              <h6>Vimeo Video (Popup)</h6>
            </div>
            <!-- Custom Video Popup -->
            <div class="col-md-4 animate-box" data-animate-effect="fadeInUp">
              <a data-fancybox="bigbuckbunny" href="/images/video.mp4">
                <img class="img-fluid" src="/images/1920x1280.jpg">
                <p><span class="fab fa-youtube"></span></p>
              </a>
              <h6>Custom Video (Popup)</h6>
            </div>
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
