<template>
  <router-view></router-view>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o" to="/find">标签</van-tabbar-item>
    <van-tabbar-item icon="search" to="/podcast">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/my">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
  <van-button type="succes" @click="a">测试请求</van-button>
</template>


<script setup>
import { getCurrentInstance, ref} from "vue";

const active = ref(0);
const { proxy } = getCurrentInstance();

const a = async () => {
  alert(proxy.a)
  let result = await proxy.$Request.get("/playlist/catlist")
  console.log(result)
}


</script>


<style scoped>

</style>
