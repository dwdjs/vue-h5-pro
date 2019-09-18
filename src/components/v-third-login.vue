<script>
// import Icon from '@/ui/Icon'
import { Button } from '@dwdjs/vant'
// import env from '@/config/env'
import oAuth from '@/config/oauth'
// OAuth 登录流程
// 服务端只需要配置 clientId, clientName, authCallbackUrl 即可，
// 然后前端点击授权跳转到接口地址，触发授权流程，最终回跳到 authCallbackUrl

export default {
  name: 'VThirdLogin',
  components: {
    [Button.name]: Button,
  },
  props: {
    list: {
      type: Array,
      authScope: String,
      default: () => [],
    },
  },
  data() {
    return { }
  },
  computed: {
    supportList() {
      return this.$props.list.filter(item => {
        // if (item === 'wechat') return false
        return true
      })
    },
  },
  created() {
    // 根据环境过滤不支持的授权登录类型
  },
  methods: {
    goOauth(data) {
      // const { authUrl, ...rest } = oAuth[type]
      // switch(type) {
      //   case 'wechat':
      //     this.$forward(authUrl, rest)
      //     break
      //   case 'alipay':
      //     break
      //   default:
      //     // do nothing...
      // }
      // 拼接跳转 URL
      location.href = data.authUrl
    },
  },
  render(h) {
    // https://alligator.io/vuejs/jsx-render-functions/
    // <span class="oauth-btn-icon">{<Icon type={item.type} />}</span>
    const items = this.supportList.map(type => {
      const curData = oAuth[type]
      return (
        <van-button
          type="primary"
          size="large"
          class="oauth-btn"
          color={curData.color}
          onClick={this.goOauth.bind(this, curData)}
        >{ curData.clientName }</van-button>
      )
    })
    return <div class="social-login">{items}</div>
  },
}


</script>

<style scoped>
.oauth-btn {
  margin: 10px auto;
}
/* .social-login {
  display: flex;
  align-items: center;
  justify-content: center;
}
.oauth-btn {
  margin-top: -8px;
  padding: 4px 16px;
  font-size: 20px;
  color: #9b9b9b;
}
.oauth-btn-text {
  display: none;
} */
</style>
