<template>
  <!-- 顶部功能区 -->
  <div class="top">
    <span class="icon-gengduo iconfont"></span>
    <van-search class="search" placeholder="甜蜜日常 是二智呀" v-model="value" shape="round"/>
    <span class="icon-maikefeng iconfont"></span>
  </div>
  <!-- 轮播图 -->
  <Carousel :bannersList="bannersList"></Carousel>
  <!-- 滑动导航 -->
  <SlideNav></SlideNav>
  <!-- 推荐歌单 -->
  <div class="recommended-song-sheet">
    <div class="name">推荐歌单 ></div>
    <span class="icon-Androidgengduo_o
 iconfont"></span>
  </div>
  <SongSheetItem :recommendedSongSheetList="recommendedSongSheetList"></SongSheetItem>
</template>


<script setup>
import {onMounted, ref} from "vue";
import request from "../../utils/Request.js";
import SlideNav from '../../components/SlideNav.vue'


const recommendedSongSheetList = ref({});// 推荐歌单列表
const bannersList = ref();

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

// 获取推荐歌单 默认30条 limit
const getRecommendedSongSheet = async () => {
  let result = await request.get("/personalized?limit=5");
  if (result.code === 200) {

  }
}
// 获取每日推荐歌单
const getEverydayRecommendedSongSheet = async () => {
  let result = await request.get("/recommend/resource");
  if (result.code === 200) {
   recommendedSongSheetList.value = result.recommend
  }
}



// 获取首页轮播图
const getBanner = async () => {
  let result = await request.get("/banner?type=2");
  if (result.code === 200) {
    console.log(result)
    bannersList.value = result.banners
  }
}

// 获取用户信息
const getUSerInfo = async () => {
  await request("/user/subcount");
}

// 获取用户详情
const getUserDetail = async () => {
  //32953014  8023474819
  let result = await request(`/user/detail?uid=8367423645`);
  console.log("用户详情"+result)
}

onMounted(() => {
  // songCategory();
  // wsongCategory();
  // refreshLogin();
  // getSongUrl();
  // getSongSheetDetail();
  // getSongDeatil();
  // getRecommendedSongSheet();
  getEverydayRecommendedSongSheet();
  getBanner();

  // getUSerInfo();
  // getUserDetail();
})
</script>


<style scoped lang="scss">
.top {
  display: flex;
  align-items: center;
  padding: 0px 10px;

  .search {
    flex: 1;
  }
}
.recommended-song-sheet{
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .name{
    font-size: 14px;
    font-weight: 550;
  }
}
</style>
