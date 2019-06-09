<template>
  <section id="videos" class="videos">
    <h2 class="section-title">Videos</h2>
    <div class="split">
      <div class="half">
        <h3>Music videos</h3>
        <div class="video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLhftsl6W7W_cGrwEj1V-sgx7zGUJxYEx6&hl=en_US" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="half">
        <h3>Vlogs</h3>
        <div class="video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLhftsl6W7W_fm8QWPQC6-yF9ef055tepo&hl=en_US" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <a href="https://www.youtube.com/channel/UCRUmSbfoolI9b8iRyrGqFUw" class="button shiny" target="_blank">&rarr; Youtube</a>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.videos {
  width: 100%;
  padding: 5rem 1rem 4rem;
}
.half {
  padding: 1rem;
}
.video-wrapper {
  margin-top: 0;
}
h3 {
  background: black;
  padding: 0.5rem;
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
}
@media (max-width: $media-s) {
  .videos {
    padding: 2.5rem 1rem;
  }
  .half {
    margin-bottom: 0;
    padding: 1rem 0;
  }
  .button {
    width: 100%;
  }
  .video-wrapper {
    margin: 0;
  }
}
</style>
