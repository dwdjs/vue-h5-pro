<template>
  <div :class="['v-tab__pane', { 'v-tab__pane--select': key === $parent.curActive }]">
    <slot />
  </div>
</template>

<script>
import findParent from './findParent'

export default {
  name: 'v-tab-item',

  mixins: [findParent],

  props: {
    title: {
      type: String,
      required: true,
    },
    disabled: Boolean,
  },

  data() {
    this.findParentByComponentName('VTab')
    const nextIndex = this.parentGroup.tabs.length
    this.updateParentData(nextIndex)
    return {
      key: nextIndex,
    }
  },

  watch: {
    title() {
      this.updateParentData()
    },
    disabled() {
      this.updateParentData()
    },
  },

  methods: {
    updateParentData(nextIndex) {
      const index = arguments.length ? nextIndex : this.key
      this.parentGroup.tabs.splice(index, 1, {
        title: this.title,
        disabled: this.disabled,
        index,
      })
    },
  },
}
</script>
