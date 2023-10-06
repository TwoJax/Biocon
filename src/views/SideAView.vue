<template>
  <div
    class="flex justify-center mx-auto"
    tabindex="0"
  >
    <video
      ref="videoPlayer"
      src="../assets/videos/side_a.mp4"
    ></video>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const videoPlayer = ref(null)

function playVideo() {
  videoPlayer.value.play()
}

onMounted(() => {
  document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      playVideo()
    }
  });
})
</script>
