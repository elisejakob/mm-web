<template>
  <section id="videos" class="videos">
    <h2 class="section-title">Videos</h2>
    <div class="video-wrapper">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLhftsl6W7W_dgqhVZIvJ1m6pactv-4mjG&amp;hl=en_US" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <a class="button shiny">&rarr; Youtube</a>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.videos {
  width: 100%;
  max-width: $width-m;
  padding: 0 1rem 4rem;
}
</style>
