import { shallowMount } from '@vue/test-utils'
import Username from '@/components/username'

// https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html
// https://vue-test-utils.vuejs.org/zh/guides/

// 每个 it 只做一个断言
// 只提供测试需要的最小化数据
// 把重复的逻辑重构到了一个工厂函数中
const factory = (values = {}) => {
  return shallowMount(Username, {
    data () {
      return {
        ...values,
      }
    },
  })
}

describe('Username', () => {
  it('renders a welcome message', () => {
    const wrapper = factory()

    expect(wrapper.find('.message').text()).toEqual('Welcome to the Vue.js cookbook')
  })

  it('renders an error when username is less than 7 characters', () => {
    const wrapper = factory({ username: '' })

    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('renders an error when username is whitespace', () => {
    const wrapper = factory({ username: ' '.repeat(7) })

    // 确认错误信息被渲染了
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('does not render an error when username is 7 characters or more', () => {
    const wrapper = factory({ username: 'Lachlan' })

    // 断言错误信息不再显示了
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
