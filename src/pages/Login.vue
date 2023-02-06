<template>
  <div>手机号登录</div>
  <!--   @failed="onFailed" @submit="submit"-->
  <van-form class="form">
    <van-cell-group inset>
      <van-field v-model="phone" label="手机号" placeholder="请输入手机号"
      ></van-field>
      <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary" @click="sendSms" :disabled="phone.length!=11">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" :disabled="!sms||phone.length!=11" @click="submit">
        提交
      </van-button>
    </div>
  </van-form>
  <van-button @click="touristLogin" round block>游客登录</van-button>
</template>


<script setup>
import {getCurrentInstance, ref} from "vue";
import {showFailToast, showSuccessToast, showToast} from "vant";
import {useRouter} from "vue-router";
import request from "../utils/Request.js";

const router = useRouter();
const {proxy} = getCurrentInstance();
// 手机号
const phone = ref("");
// 验证码
const sms = ref("");

// 验证规则
// 手机号验证规则
const rulePhone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;

// 表单提交方法
const submit = async () => {
  // 验证手机号与验证码是否匹配
  // let result = await request.post(`/login?email=A2673760057@163.com&password=20030711.a`)


  // let result = await proxy.$Request.get(`/captcha/verify?phone=${phone.value}&captcha=${sms.value}`);
  let result = await request(`/login/cellphone?phone=${phone.value}&captcha=${sms.value}`)
  console.log('login')
  // 登录成功
  if (result.code === 200) {
    showSuccessToast('登录成功');

    router.push('/find');
  } else {
    showFailToast('手机号或验证码不正确');
  }
}
// 表单提交失败函数
const onFailed = () => {
  console.log("手机号不正确");
}
// 发送验证码
const sendSms = async () => {
  // 判断手机号是否正确
  if (!rulePhone.test(phone.value)) {
    showToast('手机号码不正确');
  }
  // 发送验证码
  let result = await request(`/captcha/sent?phone=${phone.value}`);
  // todo 验证码发送后设置倒计时
  if (result.code === 200) {

  }
}
// 游客登录
const touristLogin = async () => {
  let result = await request('/register/anonimous');
  // 登录成功
  if (result.code === 200) {
    showSuccessToast('登录成功');
    router.push('/find');
  } else {
    showFailToast('手机号或验证码不正确');
  }
}


</script>


<style scoped lang="scss">
.form {
  margin-top: 100px;
}
</style>
