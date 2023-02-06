<template>
  <div class="layer">
    <div id="contain">
      <div class="item" v-for="item in recommendedSongSheetList">
        <img :src="item.picUrl">
        <div>{{item.name}}</div>
        <div>playCount：24988430</div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {nextTick, onMounted} from "vue";

const props = defineProps({recommendedSongSheetList: Object})
onMounted(() => {
  // todo 移动离开时增加过渡，数据修改为可变数据

  let contain = document.getElementById('contain')

  contain.addEventListener('touchstart', (e) => {
        contain.style.transition='';
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
          contain.style.left = '10px'
          contain.style.transition=' all 1s';
          return;
        }
        if(contain.offsetLeft < -290){
          contain.style.left = '-290px'
          contain.style.transition=' all 1s';
          return;
        }
        contain.addEventListener('touchmove', (e) => {

        })
      }
      ,
      false
  );

})


// touchstart 手指按到屏幕上
// touchmove 手指在屏幕上滑动
// touchend 手指离开屏幕
// touchcancle 特殊情况下关闭/退出时触发
</script>


<style scoped lang="scss">
.layer {
  overflow: hidden;


  #contain {
    display: flex;
    font-size: 12px;
    //overflow: hidden;
    position: relative;
    left: 10px;

    .item {
      min-width: 35%;
      padding: 5px;
      img {
        border-radius: 10px;
        width: 100%;
      }
    }

  }
}

</style>
