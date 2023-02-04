<template>
  <router-view></router-view>
  <van-tabbar v-model="active" route class="tabbar">
    <van-tabbar-item icon="home-o" to="/find">标签</van-tabbar-item>
    <van-tabbar-item icon="search" to="/podcast">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/my">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
<!--  <AudioPlay></AudioPlay>-->
</template>


<script setup>
import {ref} from "vue";
import AudioPlay from '../components/AudioPlay.vue'

const active = ref(0);


</script>


<style scoped>
.tabbar{
  width: 100%;
}
</style>
