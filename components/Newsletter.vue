<template>
  <div class="newsletter">
    <h3>{{ heading }}</h3>
    <!--<label>Sign up to our newsletter</label>-->
    <input type="text" placeholder="😀👉 your email here 👈😀" />
    <button class="gradient">Sign up to our newsletter</button>
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

  h3 {
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
    &:focus, &:hover, &:active {
      border: 2px solid $color-theme-light;
    }
  }

  button {
    width: 100%;
  }
}
</style>
