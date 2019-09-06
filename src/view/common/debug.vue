<template>
  <div class="page-debug">
    <div>
      Debug 调试页面bb
      <button style="margin: 0;" class="fr btn" data-type="bridge">
        Bridge 调试
      </button>
    </div>
    <div class="list">
      <h3>切换 API</h3>
      <div class="content">
        <label class="btn">
          <input class="absolute-full" type="radio" v-model="apiEnv" data-type="env" value="prod" />Prod
        </label>
        <label class="btn">
          <input class="absolute-full" type="radio" v-model="apiEnv" data-type="env" value="beta" />Beta
        </label>
        <label class="btn">
          <input class="absolute-full" type="radio" v-model="apiEnv" data-type="env" value="dev" />Dev
        </label>
        <div class="flex-middle input-group input-group--append">
          <input
            class="input-text flex-1"
            type="text"
            v-model="apiBaseUrl"
            placeholder="示例: m.api.xxx.com"
          />
          <label class="btn input-group__append">
            <input
              class="absolute-full"
              type="radio"
              v-model="apiEnv"
              data-type="env"
              data-value="custom"
              value="custom"
            />使用此API
          </label>
        </div>
      </div>
      <h3>统计测试</h3>
      <div class="content">
        <button class="btn" data-type="tongji" data-value="init">初始化</button>
        <button class="btn" data-type="tongji" data-value="update">
          更新数据
        </button>
        <button class="btn" data-type="tongji" data-value="pv">统计PV</button>
        <button class="btn" data-type="tongji" data-value="cv">统计CV</button>
        <button class="btn" data-type="tongji" data-value="event">
          自定义事件
        </button>
        <button class="btn" data-type="tongji" data-value="custom">
          其他配置
        </button>
        <button class="btn" data-type="tongji" data-value="report">
          上报数据
        </button>
      </div>
      <h3>当前信息</h3>
      <div class="content">
        <textarea
          class="textarea"
          name="result"
          id=""
          style="height: 500px;"
          v-model="result"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { Tag } from '@dwdjs/vant';
import env from '@/config/env';

export default {
  components: {
    [Tag.name]: Tag,
  },
  data() {
    return {
      apiEnv: env.apiEnv,
      apiBaseUrl: env.apiBaseUrl,
      result: '',
    };
  },
  watch: {
    apiEnv(val, oldVal) {
      if (val === oldVal) return;
      if (val === 'custom' && !this.apiBaseUrl) return;
      this.$showToast(`切换API: ${oldVal} => ${val}`);
      // env.switchApi(val, this.apiBaseUrl);
      this.apiBaseUrl = env.apiBaseUrl;
    },
    // apiBaseUrl(val, oldVal) {
    //   // this.$showToast(`${oldVal} => ${val}`);
    //   // env.changeApi(val);
    // },
  },
  created() {
    this.result = [
      `location.href: ${location.href}`,
      `userAgent: ${navigator.userAgent}`,
      `platform: ${navigator.platform}`,
      `env: ${JSON.stringify(env, null, 2)}`,
    ].join('\n\n');
  },
  methods: {
    goNext(e) {
      const { type, value } = e.target.dataset;
      switch (type) {
        case 'bridge':
          this.$router.push('bridge');
          break;
        case 'clear':
          this.result = '';
          break;
        case 'tongji':
          // this.tongji(value);
          break;
        case 'env':
          if (value === 'custom') {
            // debugger;
            env.switchApi(value, this.apiBaseUrl);
          }
          // env.changeEnv(this.env);
          // this.env = env.stage;
          // this.apiBaseUrl = env.apiBaseUrl;
          break;
        default: {
          break;
        }
      }
    },
    // tongji(type) {
      // switch (type) {
      //   case 'init':
      //     tongji.init({
      //       siteId: 12,
      //     });
      //     break;
      //   case 'update':
      //     tongji.update({});
      //     break;
      //   case 'pv':
      //     tongji.pv(`debug${num++}`);
      //     break;
      //   case 'cv':
      //     tongji.cv(4, 'platform', device.system, 3);
      //     break;
      //   case 'event':
      //     tongji.event('click', `debug${num++}`);
      //     break;
      //   case 'custom':
      //     tongji.custom({});
      //     break;
      //   case 'report':
      //     tongji.report(true);
      //     break;
      //   default: {
      //     break;
      //   }
      // }
    // },
  },
}
</script>

<style lang="less" scoped>
.page-debug {
  margin-top: 40px;
  padding: 16px;
}
p {
  margin: 10px 0;
  font-size: 14px;
}
h3 {
  margin: 16px 0 16px;
}
.file {
  opacity: 0;
}
.input-text {
  padding: 2px 4px;
}
.btn {
  position: relative;
  display: inline-block;
  margin: 0 16px 16px 0;
  padding: 4px 16px;
  border-radius: 100px;
  border: 1px solid #c0c0c0;
  background-image: linear-gradient(to top, #fefefe, #c9c9c9);
  font-size: 14px;
  user-select: none;
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 2px 2px #ccc inset;
    // background-image: linear-gradient(to top, #fefefe, #c9c9c9);
  }
}

label.block {
  display: block;
}

.input-group {
  .input-text,
  .input-group__prepend,
  .input-group__append {
    display: inline-flex;
    align-items: center;
    height: 32px;
  }
}

.input-group__prepend {
  margin: 0 -1px 0 0;
  border-radius: 100px 0 0 100px;
}

.input-group__append {
  margin: 0 0 0 -1px;
  border-radius: 0 100px 100px 0;
}

input[type="radio"] {
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  border-radius: inherit;

  &:checked {
    background: rgba(0, 255, 192, 0.25);
  }
}

.textarea {
  width: 100%;
  padding: 8px 8px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
  }
}

</style>
