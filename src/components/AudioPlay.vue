<template>
  <div class="container">
    <div class="img"><img :src="props.songInfo">
    </div>
    <div class="info">
      <span class="song-name"> 第一滴泪 (Live)</span>
      <span class="division">-</span>
      <span class="ar-name">曾一鸣</span>
    </div>
    <span class="icon-yunhang iconfont size" @click="playAudio" v-if="audioType"></span>
    <span class="icon-zanting iconfont size" v-else @click="playAudio"></span>
    <span class="icon-gengduo iconfont"></span>
    <audio
        :src="props.songUrl"
        id="audio"
    >
    </audio>
  </div>
</template>


<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({songUrl: String, songInfo:null})

let audioType = ref(true);
// 播放与暂停音频按钮
const playAudio = () => {
  let audio = document.getElementById('audio');

  if (audioType.value) {
    audioType.value = false;
    audio.play();
  } else {
    audioType.value = true;
    audio.pause();
  }
}
onMounted(() => {
  console.log()
})
</script>


<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  width: 100%;

  .info {
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 14px;
    height: 20px;
    padding: 0 10px;
    overflow: hidden; /*内容溢出隐藏*/
    text-overflow: ellipsis; //*溢出的文本显示为...*/
    display: -webkit-box; /*将div转换为盒子模型*/
    -webkit-line-clamp: 1; /*设置div的文本为2行*/
    -webkit-box-orient: vertical; /*从顶部向底部垂直布置子元素*/
    .division {
      padding: 0 5px;
    }
    .ar-name {
      font-size: 13px;
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .iconfont {
    display: block;
    font-size: 20px;
  }

  .size {
    font-size: 26px;
  }

  .icon-gengduo {
    padding-left: 15px;
  }
}

</style>
