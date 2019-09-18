
//
import router from '@/router'

export default {
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
}
