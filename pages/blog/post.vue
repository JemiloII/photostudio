<template>
  <div class="brian-post">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 image-content animate-box fadeInUp animated" data-animate-effect="fadeInUp"> <img src="/images/1920x1280.jpg" class="img-fluid mb-30" alt=""> </div>
      </div>
      <div class="row">
        <div class="col-md-12"> <span class="heading-meta">Fashion</span>
          <h2 class="brian-post-heading animate-box" data-animate-effect="fadeInUp">Basics of Modeling</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
          <p>Yuroin non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis sapien vel, conseyer turpeutionyer masin libero semper. Fusceler mollis augue sit amet hendrerit vestibulum. Duisteyerionyer venenatis lacus. Fusce mollis augue sit amet hendrerit vestibulum. Duisteyerionyer venenatis lacus. Yuroin non lorem ac erat suscipit bibendum nulla facilisi.</p>
          <p>Quisque gravida eros ut turpis interdum ornare. Interdum et malesu they adamale fames ac ante ipsum primis in faucibus. Curabitur arcu erosite feugiat in tortor in, volutpat sollicitudin libero. Maecenas nisl est, conselur rhoncus loremir consequat et, finibus nec purus. Yuroin non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis sapien vel, conseyer turpeutionyer massa in libero semper. Fusceler mollis augue sit amet hendrerit vestibulum. Duisteyerionyer venenatis lacus. Fusce mollis augue sit amet hendrerit vestibulum.</p>
          <p>Yuroin non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis sapien veli, conseyer turpeutionyer massa in libero semper sedeuter nunc volutpat, mollis sapien veletion. Quisque gravida eros ut turpis interdum ornare. Interdum et malesu they adamale fames ac ante ipsum primis in faucibus. Curabitur arcu erosite feugiat in tortor in, volutpat sollicitudin libero.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 animate-box" data-animate-effect="fadeInUp">
          <!-- Comments -->
          <div class="clear" id="comment-list">
            <div class="comments-area" id="comments">
              <h2 class="comments-title">3 Comments</h2>
              <ol class="comment-list">
                <li class="comment">
                  <div class="comment-body">
                    <div class="comment-author vcard"> <img class="avatar photo" src="/images/100.jpg" alt="">
                      <h3 class="name">Peter Berry</h3>
                    </div>
                    <div class="comment-meta"> Sep 28, 2021 </div>
                    <p>Yuroin non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis sapien veli, conseyer turpeutionyer massa in libero semper sedeuter nunc volutpat, mollis sapien veletion. Quisque gravida eros ut turpis interdum ornare. Interdum et malesu they adamale fames ac ante ipsum primis in faucibus.</p>
                    <div class="reply"> <a href="#" class="comment-reply-link"><i class="fa fa-reply"></i> Replay</a> </div>
                  </div>
                  <!-- sub comment block -->
                  <ol class="children">
                    <li class="comment odd parent">
                      <div class="comment-body">
                        <div class="comment-author vcard"> <img class="avatar photo" src="/images/100.jpg" alt="">
                          <h3 class="name">Lena Glenn</h3>
                        </div>
                        <div class="comment-meta"> Sep 27, 2021 </div>
                        <p>Yuroin non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis sapien veliduru conseyer turpeutionyer massa in libero semper sedeuter nunc volutpat, mollis sapien veletion. Quisque gravida eros ut turpis interdum ornare. Interdum et malesu they adamale fames drana.</p>
                        <div class="reply"> <a href="#" class="comment-reply-link"><i class="fa fa-reply"></i> Replay</a> </div>
                      </div>
                    </li>
                  </ol>
                </li>
                <li class="comment">
                  <!-- comment block -->
                  <div class="comment-body">
                    <div class="comment-author vcard"> <img class="avatar photo" src="/images/100.jpg" alt="">
                      <h3 class="name">Cerica Smith</h3>
                    </div>
                    <div class="comment-meta"> Sep 27, 2021 </div>
                    <p>Yuroin non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis sapien veli, conseyer turpeutionyer massa in libero semper sedeuter nunc volutpat, mollis sapien veletion. Quisque gravida eros ut turpis interdum ornare. Interdum et malesu they adamale fames ac ante ipsum primis in faucibus.</p>
                    <div class="reply"> <a href="#" class="comment-reply-link"><i class="fa fa-reply"></i> Replay</a> </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 animate-box" data-animate-effect="fadeInUp">
          <!-- Leave a comments -->
          <h3 class="brian-contact-heading">Leave a Comments</h3>
          <form method="post" class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Name" required> </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Email"> </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <input type="submit" class="btn btn-contact" value="Submit Comment"> </div>
            </div>
          </form>
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
