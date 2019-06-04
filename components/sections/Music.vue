<template>
  <section id="music" class="music">
    <div class="music-wrapper">
      <h2 class="section-title">Music</h2>
      <iframe src="https://open.spotify.com/embed/user/marcusmartinus/playlist/2Pp6KpXE5Ervckp0TcmScx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <div class="music-links">
        <a href="#" class="button shiny">Spotify</a>
        <a href="#" class="button shiny">Apple Music</a>
        <a href="#" class="button shiny">iTunes</a>
        <a href="#" class="button shiny">Tidal</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.music-wrapper {
  width: 100%;
  max-width: $width-m;
  margin: 0 auto;
  padding: 1rem;

  iframe {
    width: 100%;
    max-width: $width-m;
    margin: 1rem auto;
  }
}
</style>
