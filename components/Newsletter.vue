<template>
  <div class="newsletter">
    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
      <form action="https://mmstore.us14.list-manage.com/subscribe/post?u=b235f3e506510c4ec7a395eab&amp;id=dff36f35cf" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL" class="h3">{{ heading }}</label>
            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="😀👉 your email here 👈😀" required>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b235f3e506510c4ec7a395eab_dff36f35cf" tabindex="-1" value=""></div>
            <input type="submit" value="Sign up to our newsletter" name="subscribe" id="mc-embedded-subscribe" class="button gradient">
          </div>
      </form>
      <p class="privacy-info">
        By signing up, you agree that your information will be processed by our marketing platform Mailchimp. 
        <a href="https://mailchimp.com/legal/">Learn about Mailchimp's privacy practices</a>.
      </p>
    </div>
    <!--End mc_embed_signup-->
  </div>
</template>

<script>
export default {
  name: 'Newsletter',
  props: {
    heading: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.newsletter {
  width: 100%;
  max-width: $width-s;
  margin: 2rem auto;
  padding: 1rem;

  h3, .h3 {
    font-size: 2rem;
    font-weight: 900;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    margin: 0 auto 1rem;
  }

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input {
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    line-height: 1rem;
    text-align: center;
    outline: none;
    margin-bottom: 0.5rem;
    border-radius: 0;
    &:focus, &:hover, &:active {
      border: 2px solid $color-theme-light;
    }
  }

  .button {
    width: 100%;
    &:focus, &:hover, &:active {
      border: none;
    }
  }

  .privacy-info {
    font-size: 12px;
    margin: 0.5rem auto;
    text-align: center;
    opacity: 0.7;
  }

  @media (max-width: $media-s) {
    .privacy-info {
      font-size: 10px;
    }
  }
}
</style>
