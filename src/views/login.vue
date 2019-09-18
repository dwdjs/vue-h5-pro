<template>
  <div class="page-login full">
    <div class="banner"><img class="auto" src="https://img1.haoshiqi.net/assets/hsqimg/userInfo-bg.png" alt=""></div>
    <v-login class="login-box">login</v-login>

    <div class="socials-login">
      <div class="socials-login-title">其他登录方式</div>
      <v-third-login :list="socials" />
    </div>
  </div>
</template>

<script>
import VLogin from '@/components/v-login'
import VThirdLogin from '@/components/v-third-login'

export default {
  components: {
    [VLogin.name]: VLogin,
    [VThirdLogin.name]: VThirdLogin,
  },

  data() {
    return {
      socials: ['wechat', 'alipay'],
    }
  },

  created() {
  },

}
</script>

<style lang="less" scoped>
.page-login {
  background: white;
}
img.auto {
  max-width: 100%;
}
.login-box {
  margin: 10px 0;
  padding: 0 16px;
}
.socials-login {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 40px;
  padding: 0 16px;
}
.socials-login-title {
  text-align: center;
  margin: 40px auto 20px;
}
</style>
