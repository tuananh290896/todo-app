<template>
  <div class="page">
    <div class="content">
      <div class="main">
        <div class="overlay"></div>
        <video
          class="video"
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="images/mp4/bg.mp4" type="video/mp4" />
        </video>

        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import "./PublicLayout.scss";
export default {
  name: "PublicLayout",
};
</script>