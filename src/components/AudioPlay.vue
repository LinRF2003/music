<template>
  <div class="container">
    <div class="img"><img src="../assets/defualt.png">
    </div>
    <div class="info">
      <div class="song-name">第一滴泪 (Live)</div>
      -
      <div class="ar-name">曾一鸣</div>
    </div>
    <audio
        :src="src"
        id="audio"
    >
    </audio>
  </div>
</template>


<script setup>
let audioType = true;
// 播放与暂停音频按钮
const playAudio = () => {
  let audio = document.getElementById('audio');
  if (audioType) {
    audioType = false;
    audio.play();
  } else {
    audioType = true;
    audio.pause();
  }
}
</script>


<style scoped lang="scss">
.container {
  display: flex;

  .info {
    display: flex;
    align-items: center;
  }

  img {
    width: 50px;
    height: 50px;
  }
}

</style>
