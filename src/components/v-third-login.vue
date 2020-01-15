<script>
// import Icon from '@/ui/Icon'
import { Button } from '@dwdjs/vant'
import VIcon from '@/components/v-icon'
// import env from '@/config/env'
import oAuth from '@/config/oauth'
// OAuth 登录流程
// 服务端只需要配置 clientId, clientName, authCallbackUrl 即可，
// 然后前端点击授权跳转到接口地址，触发授权流程，最终回跳到 authCallbackUrl

export default {
  name: 'v-third-login',
  components: {
    [Button.name]: Button,
    [VIcon.name]: VIcon,
  },
  props: {
    block: Boolean,
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
        <div
          class={ [`oauth-btn`, `oauth-${curData.type}`] }
          onClick={this.goOauth.bind(this, curData)}
        >
          <v-icon class="oauth-icon" type={ curData.icon } />
          <span class="oauth-text">{ curData.clientName }</span>
        </div>
      )
    })
    return <div class="social-login">{items}</div>
  },
}


</script>

<style lang="stylus" scoped>
.social-login {
  display: flex;
  margin: 10px 0;
  padding: 0 20px;

  &.is-block {
    flex-direction: column;

    .oauth-btn {
      display: flex;
      width: 100%;
      border-radius: 3px;
    }
    .oauth-icon {
      font-size: 1em;
    }

    .oauth-text {
      display: block;
    }
  }
}
.oauth-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #fff;
}
.oauth-icon {
  font-size: 1.5em;
}
.oauth-text {
  margin-left: 10px;
  display: none;
}

.oauth-wechat {
  background-color: #4cb131;
}
.oauth-alipay {
  background-color: #0a98dc;
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
