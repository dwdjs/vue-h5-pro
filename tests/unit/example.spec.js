import { shallowMount } from '@vue/test-utils'
import Example from '@/components/example.vue'

describe('example.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Example, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
