<template>
  <!-- Gallery -->
  <div class="brian-homepage-gallery">
    <div class="container-fluid">
      <div class="row align-items-stretch brian-photos" id="brian-section-photos">
        <div class="col-12">
          <div class="row align-items-stretch">
            <div class="col-12 col-md-4 animate-box" data-animate-effect="fadeInUp">
              <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Live DJ Performance" href="/photos/home-page/dj.jpg">
                <img class="img-fluid" src="/photos/home-page/dj.jpg">
              </a>
              <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Portrait Photo" href="/photos/home-page/ducks.jpg">
                <img class="img-fluid" src="/photos/home-page/ducks.jpg">
              </a>
              <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Cosplayer at C2E2 2020" href="/photos/home-page/cosplay-girl.jpg">
                <img class="img-fluid" src="/photos/home-page/cosplay-girl.jpg">
              </a>
            </div>
            <div class="col-12 col-md-4 animate-box" data-animate-effect="fadeInUp">
              <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Magic Madoka Figure" href="/photos/home-page/madoka.jpg">
                <img class="img-fluid" src="/photos/home-page/madoka.jpg">
              </a>
              <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Live DJ Mixing" href="/photos/home-page/dj-2.jpg">
                <img class="img-fluid" src="/photos/home-page/dj-2.jpg">
              </a>
              <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Rem Figure at Lake Michigan" href="/photos/home-page/rem-lakeside.png">
                <img class="img-fluid" src="/photos/home-page/rem-lakeside.png">
              </a>
            </div>
            <div class="col-12 col-md-4 animate-box" data-animate-effect="fadeInUp">
              <a class="d-block brian-photo-item" data-fancybox="images" data-caption="A Majestic Seagull" href="/photos/home-page/seagull.jpg">
                <img class="img-fluid" src="/photos/home-page/seagull.jpg">
              </a>
              <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Convention Foam Fighting Event" href="/photos/home-page/foam-fighting.jpg">
                <img class="img-fluid" src="/photos/home-page/foam-fighting.jpg">
              </a>
              <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Live EDM Event" href="/photos/home-page/party.jpg">
                <img class="img-fluid" src="/photos/home-page/party.jpg">
              </a>
            </div>
          </div>
          <div class="row align-items-stretch mt-60">
            <div class="col-md-12">
              <!-- show more -->
              <div class="row align-items-stretch brian-photos">
                <div class="row align-items-stretch">
                  <div class="col-12 col-md-4">
                    <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Willy Wonka Cosplay at C2E2 2020" href="/photos/home-page/willy-wonka-cosplay.jpg">
                      <img class="img-fluid" src="/photos/home-page/willy-wonka-cosplay.jpg">
                    </a>
                    <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Live Performance" href="/photos/home-page/singer.jpg">
                      <img class="img-fluid" src="/photos/home-page/singer.jpg">
                    </a>
                    <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Girl with the ducks and geese" href="/photos/home-page/girl-with-ducks.jpg">
                      <img class="img-fluid" src="/photos/home-page/girl-with-ducks.jpg">
                    </a>
                  </div>
                  <div class="col-12 col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <a class="d-block brian-photo-item" data-fancybox="images" data-caption="South Carolina Anime Convention Foam Fighting Event" href="/photos/home-page/outdoor-foam-fighting.jpg">
                      <img class="img-fluid" src="/photos/home-page/outdoor-foam-fighting.jpg">
                    </a>
                    <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Starfire Cosplay at C2E2 2020" href="/photos/home-page/starfire-cosplay.jpg">
                      <img class="img-fluid" src="/photos/home-page/starfire-cosplay.jpg">
                    </a>
                    <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Convention Foam Fighting Event at Anime Milwaukee 2020" href="/photos/home-page/convention-foam-fighting-milwaukee.jpg">
                      <img class="img-fluid" src="/photos/home-page/convention-foam-fighting-milwaukee.jpg">
                    </a>
                  </div>
                  <div class="col-12 col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Lolita Cosplayer at Anime Milwaukee 2020" href="/photos/home-page/lolita-cosplayer.jpg">
                      <img class="img-fluid" src="/photos/home-page/lolita-cosplayer.jpg">
                    </a>
                    <a class="d-block brian-photo-item" data-fancybox="images" data-caption="Portrait Photo" href="/photos/home-page/skyline.jpg">
                      <img class="img-fluid" src="/photos/home-page/skyline.jpg">
                    </a>
                    <a class="d-block brian-photo-item" data-fancybox="images" data-caption="EDM Stage" href="/photos/home-page/edm-stage.jpg">
                      <img class="img-fluid" src="/photos/home-page/edm-stage.jpg">
                    </a>
                  </div>
                </div>
              </div>
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
