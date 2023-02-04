<template>
  <div class="contain">
    <div id="banner">
      <template v-for="item in imgUrl">
        <img :src="item.url"></template>
    </div>
  </div>
</template>


<script setup>

import {onMounted} from "vue";

const imgUrl = [
  {index: 0, url: "http://p1.music.126.net/Q-CBMloRescSxo6S4jTbEA==/109951168283437023.jpg"},
  {index: 1, url: "http://p1.music.126.net/SiCebVk9wpsi0ysaC-MeLw==/109951168283428940.jpg"},
  {index: 2, url: "http://p1.music.126.net/YReqExOhpRpVv9DRVl_fYQ==/109951168283442647.jpg"},
  {index: 3, url: "http://p1.music.126.net/Q-CBMloRescSxo6S4jTbEA==/109951168283437023.jpg"},
]

// 自动轮播方法
const autoCarousel = () => {
  let index = 0;
  let banner = document.getElementById("banner")

  setInterval(() => {
    banner.style.transition = "all 2s";
    if (index === imgUrl.length) {
      index = 0;
      banner.style.transition = "";
      banner.style.transform = ``
    } else {
      banner.style.transform = `translateX(-${100 * index}%)`;
    }
    index++;
  }, 2000)
}
onMounted(() => {
  autoCarousel();
})
</script>


<style scoped lang="scss">
.contain {
  overflow: hidden;

  div {
    display: flex;

    img {
      width: 100%;
    }
  }
}

</style>
