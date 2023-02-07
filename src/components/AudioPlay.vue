<template>
  <div class="container">
    <div class="img"><img :src="songInfo?.al?.picUrl">
    </div>
    <div class="info">
      <span class="song-name">{{ songInfo.name }}</span>
      <span class="division">-</span>
      <span class="ar-name" v-for="item in songInfo.ar" :key="item.id">
        {{ item.name }}
      </span>
    </div>
    <span class="icon-yunhang iconfont size" @click="playAudio" v-if="audioType"></span>
    <span class="icon-zanting iconfont size" v-else @click="playAudio"></span>
    <span class="icon-gengduo iconfont"></span>
    <audio
        :src="songUrl"
        id="audio"
    >
    </audio>
  </div>
</template>


<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({
  songUrl: String, songInfo: {
    type: Object
  }
})
let audioType = ref(true);
let timer = null;
// 播放与暂停音频按钮
const playAudio = () => {
  let audio = document.getElementById('audio');
//   src 歌曲的路径
//   preload 是否在页面加载后立即加载（设置 autoplay 后无效）
//   controls 显示 audio 自带的播放控件
//   loop 音频循环
//   autoplay 音频加载后自动播放
//   currentTime 音频当前播放时间
//   duration 音频总长度
//   ended 音频是否结束
//   muted 音频静音为 true
//   volume 当前音频音量
//   readyState 音频当前的就绪状态


  if (audioType.value) {
    audioType.value = false;
    timer = setInterval(() => {
      console.log("音频当前播放时间" + audio.currentTime)
      console.log("音频总长度" + audio.duration)
      console.log("音频是否结束" + audio.ended)
    }, 1000)
    audio.play();
  } else {
    console.log("关")
    audioType.value = true;
    clearInterval(timer)

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
      color: #666;
      font-size: 13px;
    }

    // 给名字增加伪元素
    .ar-name:not(:last-child)::after {
      content: "/";
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


  //.ar-name::before {
  //
  //}
  //
  //.ar-name::before:first-child {
  //  content: "aaa";
  //}
}

</style>
