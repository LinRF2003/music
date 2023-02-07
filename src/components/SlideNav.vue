<template>
  <div class="slide-nav">
    <div id="slide-nav">
      <div class="item" v-for="item in 10">
        <span class="icon-rili iconfont"></span>
        <p>每日推荐</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
  let contain = document.getElementById('slide-nav')

  contain.addEventListener('touchstart', (e) => {
        contain.style.transition = '';
        let clickX = e.changedTouches[0].screenX;
        let left = contain.offsetLeft;
        contain.addEventListener('touchmove', (e) => {

          contain.style.left = left - clickX + e.changedTouches[0].screenX + 'px';


        })
      }
      ,
      false
  );
  contain.addEventListener('touchend', (e) => {
        if (contain.offsetLeft > 0) {
          contain.style.left = '0px'
          contain.style.transition = ' all 1s';
          return;
        }
        if (contain.offsetLeft < -375) {
          contain.style.left = '-375px'
          contain.style.transition = ' all 1s';
          return;
        }
        contain.addEventListener('touchmove', (e) => {

        })
      }
      ,
      false
  );


})

</script>

<style scoped lang="scss">
.slide-nav {
  overflow-x: hidden;

  #slide-nav {
    display: flex;
    position: relative;

    .item {
      min-width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .iconfont {
        font-size: 30px;
        color: #ff0000;
      }

      p {
        line-height: 10px;
        font-size: 12px;
      }
    }
  }
}
</style>