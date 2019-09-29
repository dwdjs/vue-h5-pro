<template>
  <div class="login-box">
    <form class="login-form">
      <div class="input-field">
        <div class="value">
          <input
            type="text"
            class="input-text"
            placeholder="用户名/邮箱/已验证手机"
            autocomplete="false"
            required
          >
        </div>
      </div>
      <div class="input-field">
        <div class="value">
          <input
            type="password"
            class="input-text"
            placeholder="用户名/邮箱/已验证手机"
            autocomplete="false"
            required
          >
        </div>
      </div>

      <div class="btn-field">
        <van-button
          type="primary"
          size="large"
          class="login-btn"
        >登录</van-button>
      </div>
    </form>
  </div>
</template>

<script>
// 手机号登录，绑定
import { Button, Field, CellGroup } from '@dwdjs/vant'
// import env from '@/config/env'
// import { modelApis } from '@/api/api.config'

// const oauthUrl = ''

export default {
  name: 'VLogin',

  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
  },

  data() {
    return {
      username: '',
      password: '',
    }
  },
}
</script>

<style lang="stylus" scoped>
.input-text {
  width: 100%;
  line-height: 1;
  margin-bottom: 10px;
  padding: 4px 10px;
  font-size: 14px;
}

</style>
