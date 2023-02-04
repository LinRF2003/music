<template>

</template>


<script setup>
import { getCurrentInstance, ref} from "vue";
const { proxy } = getCurrentInstance();
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const a = async () => {
  let result = await proxy.$Request.get("/playlist/catlist")
  console.log(result)
}


</script>


<style scoped>

</style>
