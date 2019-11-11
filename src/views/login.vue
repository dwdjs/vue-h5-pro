<template>
  <div class="page-login full">
    <div class="banner" :style="`backgroundImage: url(${banner})`" />
    <v-login class="login-box">login</v-login>

    <div class="socials-login">
      <div class="socials-login-title">其他登录方式</div>
      <v-third-login :list="socials" />
      <div class="agreement-tip">登录即代表您已同意 <span class="link">《xx隐私协议》</span></div>
    </div>
  </div>
</template>

<script>
// banner 位置可以放广告，默认放 logo
// 登录即代表您已同意 xx隐私政策
// 未注册的手机号验证后将自动创建 xx 账号
// 点击'返回'将中断注册，确定返回
// 短信验证码登录/收集快速注册/账号密码登录
import VLogin from '@/components/v-login'
import VThirdLogin from '@/components/v-third-login'

export default {
  name: 'login',

  components: {
    [VLogin.name]: VLogin,
    [VThirdLogin.name]: VThirdLogin,
  },

  data() {
    return {
      banner: 'https://nodejs.org/static/images/logo.svg',
      socials: ['wechat', 'alipay'],
    }
  },

  created() {
  },

}
</script>

<style lang="stylus" scoped>
.page-login {
  background: white;
  padding-bottom: 50vw;
}
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.banner {
  margin: 20px;
}
.login-box {
  margin: 20px auto;
}
.login-box {
  margin: 10px 0;
  padding: 0 16px;
}
.socials-login {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 10px;
  padding: 0 16px;
}
.socials-login-title {
  text-align: center;
  margin: 40px auto 20px;
}

.agreement-tip {
  font-size: 12px;
  text-align: center;
  color: #b8b8b8;
}
</style>
