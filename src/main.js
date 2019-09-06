import Vue from 'vue'
import { loadJs } from '@dwdjs/utils'
import App from './App'
import router from '@/router'

import '@/registerServiceWorker'
import '@/permission'

import env from '@/config/env'

function initVue(time = 0) {
  // 把初始化渲染放到 setTimeout 里，延迟vue初始化，兼顾骨架屏
  setTimeout(() => {
    console.log('init Vue')
    /* eslint no-new: 0 */
    new Vue({
      el: '#app',
      router,
      render: h => h(App),
    })
  }, time)
}

if (!env.console) {
  initVue()
} else {
  const vConsole = 'https://unpkg.com/kit-debug@latest'
  loadJs(vConsole, {
    async: true,
    // defer: true,
    // first: true,
    onload() {
      /* eslint no-undef: 0 */
      if (typeof VConsole !== 'undefined') {
        window.vConsole = new VConsole()
      }
      console.log('vConsole loaded')

      initVue()
    },
  })
}
