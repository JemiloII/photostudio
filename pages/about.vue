<template>
  <div>
    <div class="brian-about">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="brian-heading animate-box" data-animate-effect="fadeInUp">About</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 animate-box" data-animate-effect="fadeInUp">
            <img src="/photos/me.jpg" class="img-fluid mb-30" alt="brian">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 animate-box" data-animate-effect="fadeInUp">
            <span class="heading-meta">Photographer</span>
            <h3 class="brian-about-heading">Brian Jemilo II</h3>
            <p>I got into photography as a hobby from years of work doing videography contests. Took a break from doing
            from making short films and focused on software engineering. I am still a software engineer during the usual
            9-5 hours. I decided to get space for photography to expand on my hobby and help others in the cosplaying
            and modeling space grow. I also am also into shooting niche themes that I believe are rare, but highly sought
            after in the community. So I look forward to working with you, whether its in the studio, at a convention,
            around town, or somewhere across the world.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Our Team -->
    <div class="brian-teams" v-if="false">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-center"><span class="heading-meta">Talent</span>
            <h2 class="brian-heading animate-box" data-animate-effect="fadeInUp">My Crew</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 animate-box" data-animate-effect="fadeInUp">
            <div class="brian-team"><img src="/images/500x623.jpg" class="img-fluid" alt="">
              <div class="desc">
                <div class="con">
                  <h3><a href="#">Peter Allen</a></h3> <span>Wedding Photographer</span>
                  <p class="icon">
                    <span><a href="#"><i class="fab fa-twitter"></i></a></span>
                    <span><a href="#"><i class="fab fa-instagram"></i></a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 animate-box" data-animate-effect="fadeInUp">
            <div class="brian-team"><img src="/images/500x623.jpg" class="img-fluid" alt="">
              <div class="desc">
                <div class="con">
                  <h3><a href="">Lena Snow</a></h3> <span>Sport Photographer</span>
                  <p class="icon">
                    <span><a href="#"><i class="fab fa-twitter"></i></a></span>
                    <span><a href="#"><i class="fab fa-instagram"></i></a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 animate-box" data-animate-effect="fadeInUp">
            <div class="brian-team">
              <img src="/images/500x623.jpg" class="img-fluid" alt="">
              <div class="desc">
                <div class="con">
                  <h3><a href="">Hannah Flynn</a></h3> <span>Model Photographer</span>
                  <p class="icon">
                    <span><a href="#"><i class="fab fa-twitter"></i></a></span>
                    <span><a href="#"><i class="fab fa-instagram"></i></a></span>
                  </p>
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

<style scoped>

</style>
