<template>
  <section id="music" class="music">
    <div class="music-wrapper">
      <h2 class="section-title">Music</h2>
      <iframe src="https://open.spotify.com/embed/user/marcusmartinus/playlist/2Pp6KpXE5Ervckp0TcmScx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <div class="music-links">
        <a href="https://open.spotify.com/artist/3N4FiTxpPQRsrihmTMN349?si=N-WI45P2S1CgQLkwgk7R5A" target="_blank" class="button shiny">Spotify</a>
        <a href="https://music.apple.com/us/artist/marcus-martinus/551127180" target="_blank" class="button shiny">Apple Music</a>
        <a href="https://www.deezer.com/us/artist/3697701" target="_blank" class="button shiny">Deezer</a>
        <a href="https://tidal.com/browse/artist/4691379" target="_blank" class="button shiny">Tidal</a>
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
.button {
  margin: 2px 0;
}
</style>
