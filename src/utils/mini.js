
//
import router from '@/router'
import { ImagePreview } from '@dwdjs/vant'

export default {
  back() {
    router.back()
  },
  forward(url, { replace, back, ...query } = {}) {
    const type = !replace ? 'push' : 'replace'
    console.log(url, query)
    router[type](
      {
        path: url,
        query,
      }
    )
  },
  popup(type) {
    // 弹出页面
    console.log(type)
  },
  preview(images, startPosition) {
    ImagePreview({
      images,
      startPosition,
      onClose() {},
    })
  },
}
