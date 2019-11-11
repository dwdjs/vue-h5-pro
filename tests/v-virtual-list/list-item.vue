<script>
export default {
  name: 'v-virtual-list',
  props: {
    item: {
      type: Object,
      required: true,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  methods: {
  },
  render(h) {
    return h(
      this.tag,
      typeof this.$slots.default === 'function'
        ? this.$slots.default(this.item)
        : this.$slots.default
    )
  },
}
</script>
