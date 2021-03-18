<template>
  <div class="brian-contact">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 text-center"> <span class="heading-meta">Location</span>
          <h2 class="brian-heading animate-box" data-animate-effect="fadeInUp">Contact Us</h2>
        </div>
      </div>
      <!-- Map Section-->
      <div class="brian-map-section">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div id="brian-contactMap">
              <!-- Map loads here -->
            </div>
            <div id="warning"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Contact Info -->
        <div class="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
          <h3 class="brian-contact-heading">Contact me to schedule a photo shoot.</h3>

          <p><b>Phone:</b> <a href="tel:+17083819854">+1 (708) 381-9854</a></p>
          <p><b>Email:</b> <a href="maito:jemiloii@gmail.com">jemiloii@gmail.com</a></p>
          <p><b>Address:</b> 350 N Ogden Ave, Chicago, IL 60607</p>
        </div>
        <!-- Contact Form -->
<!--        <div class="col-md-6 animate-box" data-animate-effect="fadeInUp">-->
<!--          <h3 class="brian-contact-heading">Contact Form</h3>-->
<!--          <p>Interested to work with me?</p>-->
<!--          <form method="post" class="row">-->
<!--            <div class="col-sm-6">-->
<!--              <div class="form-group">-->
<!--                <input type="text" class="form-control" placeholder="Name" required> </div>-->
<!--            </div>-->
<!--            <div class="col-sm-6">-->
<!--              <div class="form-group">-->
<!--                <input type="text" class="form-control" placeholder="Email"> </div>-->
<!--            </div>-->
<!--            <div class="col-sm-12">-->
<!--              <div class="form-group">-->
<!--                <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-sm-12">-->
<!--              <div class="form-group">-->
<!--                <input type="submit" class="btn btn-contact" value="Submit"> </div>-->
<!--            </div>-->
<!--          </form>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      loadJquery();

      if (process.client) {
        loadMap();
      }
    }
  }
</script>

<style>
  .panel {
    height: 200px;
    width: 100%;
    display: flex;
    padding: 10px;
  }
  #warning {
    background-color: #242424;
    opacity: 0;
    width: 100%;
    text-align: center;
    transition: opacity 250ms ease-in-out;
    transition-delay: 125ms;
  }
  #warning .message {
    font-family: "Avenir Next W00","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    padding: 15px;
    background-color: #000;
    color: #f4f4f4;
  }

  .esri-search {
    width: 300px;
    height: 20px;
    justify-content: flex-start;
    align-items: normal;
  }

  .esri-search__submit-button,
  .esri-search__clear-button {
    align-self: baseline;
  }
</style>
