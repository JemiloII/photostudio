<template>
  <div>
    <!-- Progress-wrap scroll-button -->
    <div class="progress-wrap">
      <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" /> </svg>
    </div>

    <div class="brian-page">
      <a href="#" class="js-brian-nav-toggle brian-nav-toggle"><i></i></a>
      <!-- Sidebar -->
      <aside class="brian-aside">
        <!-- Sidebar Logo -->
        <div class="brian-logo">
          <a href="/"><img src="/images/logo.png" alt=""></a>
          <h1><a href="/">Brian Jemilo II<span>Photographer</span></a></h1>
        </div>
        <!-- Sidebar Menu -->
        <nav class="brian-main-menu">
          <ul>
            <li><NuxtLink to='/'>Home</NuxtLink></li>
            <li><NuxtLink to='/about'>About</NuxtLink></li>
            <li><NuxtLink to='/pricing'>Pricing</NuxtLink></li>
<!--            <li><NuxtLink to='/services'>Services</NuxtLink></li>-->
<!--            <li class="brian-sub">-->
<!--              <a href="#0">Gallery</a>-->
<!--              <ul>-->
<!--                <li><NuxtLink to="/gallery">Standard Gallery</NuxtLink></li>-->
<!--                <li><NuxtLink to="/masonry">Masonry Gallery</NuxtLink></li>-->
<!--              </ul>-->
<!--            </li>-->
<!--            <li><NuxtLink to='/feedback'>Feedback</NuxtLink></li>-->
<!--            <li><NuxtLink to='/blog'>Blog</NuxtLink></li>-->
            <li><NuxtLink to='/contact'>Contact</NuxtLink></li>
          </ul>
        </nav>
        <!-- Sidebar Footer -->
        <div class="brian-footer">
          <ul>
            <li>
              <a href="http://instragam.com/jemiloii">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="http://twitter.com/jemiloii">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <p><small>&copy; 2021 All Rights Reserved.</small></p>
        </div>
      </aside>
      <!-- Content -->
      <div class="brian-main">
        <Nuxt />
        <!-- Footer -->
        <div id="brian-footer" class="brian-footer-page">
          <div class="brian-narrow-content">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1>Brian Jemilo II <span>Photographer</span></h1>
                <p class="brian-lead">&copy; 2021 All rights reserved.</p>
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
    methods: {
      burgerMenu() {
        // Burger Menu
        $('.js-brian-nav-toggle').on('click', function (event) {
          event.preventDefault();
          var $this = $(this);
          if ($('body').hasClass('offcanvas')) {
            $this.removeClass('active');
            $('body').removeClass('offcanvas');
          } else {
            $this.addClass('active');
            $('body').addClass('offcanvas');
          }
        });
      },
      mobileMenuOutsideClick () {
        // Click outside of offcanvas
        const body = $('body');

        $(document).on('click', (e) => {
          var container = $(".brian-aside, .js-brian-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
            if (body.hasClass('offcanvas')) {
              body.removeClass('offcanvas');
              $('.js-brian-nav-toggle').removeClass('active');
            }
          }
        });
        $(window).scroll(() => {
          if (body.hasClass('offcanvas')) {
            body.removeClass('offcanvas');
            $('.js-brian-nav-toggle').removeClass('active');
          }
        });
      }
    },
    mounted() {
      this.burgerMenu();
      this.mobileMenuOutsideClick();

      // Sub Menu
      $('.brian-main-menu li.brian-sub>a').on('click', function () {
        const  element = $(this).parent('li');

        $(this).removeAttr('href');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp();
        } else {
          element.addClass('open');
          element.children('ul').slideDown();
          element.siblings('li').children('ul').slideUp();
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp();
        }
      });
      $('.brian-main-menu>ul>li.brian-sub>a').append('<span class="holder"></span>');
    }
  }
</script>

<style scoped>
  .brian-footer-page {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .brian-footer-page {
      display: block;
    }
  }

</style>
