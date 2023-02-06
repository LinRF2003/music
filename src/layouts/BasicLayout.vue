<template>
  <router-view></router-view>
  <van-tabbar v-model="active" route class="tabbar">
    <van-tabbar-item icon="home-o" to="/find">标签</van-tabbar-item>
    <van-tabbar-item icon="search" to="/podcast">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/my">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
  <AudioPlay :songImgUrl="songImgUrl" :songUrl='songUrl' class="play"></AudioPlay>
</template>


<script setup>
import {onMounted, ref} from "vue";
import AudioPlay from '../components/AudioPlay.vue'
import request from "../utils/Request.js";
import api from "../utils/api.js";

const active = ref(0);
const songInfo = ref("");
const songUrl = ref("")
const EverydayRecommendedSongList = ref([])
// 获取每日推荐歌曲
const getEverydayRecommendedSong = async () => {
  console.log(1)
  let result = await request.get("/recommend/songs");
  console.log(result)
  if (result.code === 200) {
    EverydayRecommendedSongList.value = result.data.dailySongs;
    console.log(JSON.parse(JSON.stringify(EverydayRecommendedSongList.value)))
    songInfo.value = EverydayRecommendedSongList.value[17]
    console.log(result.data.dailySongs[0])
    songUrl.value = (await api.getSongUrl(EverydayRecommendedSongList.value[17].id))[0].url;
  }
}
// 获取登录状态
const getLoginStatus = async () => {
  let result = await request("/login/status");
  console.log("登录状态·", result)
  if (result.code === 200) {

  }
}
onMounted(() => {
  getLoginStatus();
  getEverydayRecommendedSong();
})

</script>


<style scoped>
.tabbar {
  position: absolute;
}

.play {
  position: fixed;
  bottom: 50px;
}
</style>
