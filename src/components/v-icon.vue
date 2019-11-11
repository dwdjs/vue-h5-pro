<script>
/**
 * Icon
 * @module packages/Icon
 * @desc 图标集，支持字体图标以及svg图标
 * @desc 语义化的矢量字体图标。
 * @rules 每个图标请使用语义化的命名，部分规则如下
 *   - 根据不同需要，选择不同的图标模式 mode
 *   - 实心和描线图标保持同名，用 -o 来区分，比如 question-circle（实心） 和 question-circle-o（描线）；
 *   - 命名顺序：[图标名]-[形状?]-[描线?]-[方向?]。
 * @param {string} [mode] - 传入图标类型 [font, svg, canvas, custom]
 * @param {string} type - icon 的 Name
 * @param {number} [size] - 尺寸, svg 传入宽高逗号间隔，iconfont 传入字体大小
 * @param {color} [color] - 传入颜色值
 *
 * @example
 * <Icon mode="svg" type="String" />
 * <Icon mode="font" type="String" />
 * <Icon mode="custom" type="String" />
 * <Icon mode="custom" type="arrow-right"></Icon>
 */

// 不在支持 svg
export default {
  name: 'v-icon',

  props: {
    prefixCls: {
      type: String,
      default: 'icon',
    },
    spin: Boolean,
    size: [String, Number],
    bg: String,
    color: String,
    reverse: Boolean,
    mode: {
      type: String,
      default: 'font',
      validator(value) {
        return ['font', 'svg', 'canvas', 'custom'].includes(value)
      },
    },
    shape: {
      type: String,
      validator(value) {
        return ['circle', 'radius', 'square'].includes(value)
      },
    },
    type: {
      type: String,
      required: true,
    },
  },

  computed: {
    classes() {
      const { prefixCls, mode, type, spin, shape, reverse } = this.$props

      // 默认为 class="iconfont icon-search"
      return {
        [`${prefixCls}${mode}`]: true,
        [`${prefixCls}-${type}`]: !!type,
        [`${prefixCls}-${reverse}`]: reverse,
        [`is-${shape}`]: !!shape,
        [`is-spin`]: spin || type === 'loading',
      }
    },
    styles() {
      const { size, color, bg } = this.$props
      return {
        fontSize: `${size / 100}vw`,
        color: color,
        backgroundColor: bg,
      }
    },
  },
  render(h) {
    const { mode } = this.$props
    let iconNode = null
    switch (mode) {
      case 'custom': {
        // 通过 css 实现的icon
        const { classes } = this
        const { size } = this.$props
        const styles = {
          transform: size ? `scale(${size})` : false,
        }
        iconNode = <span class={classes} style={styles} />
        break
      }
      case 'font':
      default: {
        const { classes, styles } = this
        iconNode = <i class={classes} style={styles} />
      }
    }

    return iconNode
  },
}
</script>

<style lang="stylus" scoped>
// icons.styl 中的 .icon-svg 样式放在这里，竟然没提取到公共样式中，引起覆盖 bug
// TODO 即使目前，.avatar-mask 样式也未提取到公共样式，这是很严重的问题
</style>
