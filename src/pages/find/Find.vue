<template>
  首页

  <div @click="playAudio">111</div>
<Carousel></Carousel>
</template>


<script setup>
import {onMounted, ref} from "vue";
import request from "../../utils/Request.js";


let src = ref("http://m8.music.126.net/20230204210810/5ec6834e83a9be60d52fcd0ef6ccb0bc/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/14052228178/1bac/ca6c/f787/9932ee1386482ef8e48f24e27379d104.mp3")

// 获取歌单分类
const songCategory = async () => {
  let result = await request.get("/playlist/catlist")
  if (result.code === 200) {

  }
}
// 获取歌单详情
const getSongSheetDetail = async () => {
  let result = await request.get("/playlist/detail?id=6671216522")
  if (result.code === 200) {

  }
}

// 歌单 ( 网友精选碟 )
const wsongCategory = async () => {
  let result = await request.get("/top/playlist?limit=20&cat='流行'");
  if (result.code === 200) {

  }
}
// 获取歌曲详情 ids
const getSongDeatil = async () => {
  let result = await request.get("/song/detail?ids=1835864375");
  if (result.code === 200) {

  }
}

// 获取音乐 url
const getSongUrl = async () => {
  let result = await request.get("/song/url?id=1835864375");
  if (result.code === 200) {

  }
}
// 获取推荐歌单 默认30条 limit
const getRecommendedSong = async () => {
  let result = await request.get("/personalized");
  if (result.code === 200) {

  }
}

// 获取首页轮播图
const getBanner = async () => {
  let result = await request.get("/banner");
  if (result.code === 200) {

  }
}
onMounted(() => {
  // songCategory();
  // wsongCategory();
  // getSongUrl();
  // getSongSheetDetail();
  // getSongDeatil();
  // getRecommendedSong();
  getBanner();
})
</script>


<style scoped>

</style>
