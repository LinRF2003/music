<template>
  <div>手机号登录</div>
  <van-form @failed="onFailed">
    <van-cell-group inset>
      <van-field v-model="phone" label="手机号" placeholder="请输入手机号"
                 :rules="rules.phone"></van-field>
      <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" @click="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>


<script setup>
import {getCurrentInstance, ref} from "vue";

const {proxy} = getCurrentInstance();
// 手机号
const phone = ref("")
// 验证码
const sms = ref(null)

// 验证规则
const rules = {
  phone: [{
    required: true, message: '手机号不能为空'
  }, {
    pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, message: '手机号不正确'
  }]
}
// 表单提交方法
const submit = () => {
  console.log("表单提交成功")
}
// 表单提交失败函数
const onFailed = () => {
  console.log("提交失败")
}

const a = async () => {

  let result = await proxy.$Request.get("/playlist/catlist")
  console.log(result)
}


</script>


<style scoped lang="scss">

</style>
