<template>
  <div class="swiperbox">
    <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :centeredSlides="true"
        :pagination="{
				clickable: true
			}"
        :autoplay="{
				delay: 2500,
				disableOnInteraction: false
			}"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide v-for="item in props.bannersList"><img :src="item.pic"></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue'; // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import {Autoplay, Navigation, Pagination, A11y} from 'swiper';
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//默认滑动效果（这里面注释掉的可以不要）
// const onSwiper = swiper => {
// 	console.log(swiper);
// };
// const onSlideChange = e => {
// 	// swiper切换的时候执行的方法
// 	console.log('slide change', e.activeIndex);
// };
// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const modules = [Autoplay, Pagination, Navigation, A11y];
const props = defineProps({'bannersList':Array})

</script>

<style scoped lang="scss">
:deep(.swiper-wrapper) {
  text-align: center;
}

:deep(.swiper-pagination ) {
  position: relative;
  top: -24px;
  left: -30%;
}

:deep(.swiper-pagination-bullet) {
  width: 6px;
  height: 6px;
  background: #ffffff;
}

img {
  border-radius: 16px;
  width: 92%;
}

</style>