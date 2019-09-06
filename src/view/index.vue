<template>
  <div class="page-index">

    <van-cell-group title="demo">
      <van-cell title="详情页" @click.native="goNext" data-link="detail" is-link />
      <van-cell title="购物车" @click.native="goNext" data-link="cart" is-link />
      <van-cell title="个人中心" @click.native="goNext" data-link="profile" is-link />
    </van-cell-group>


  </div>
</template>

<script>
import { Col, Icon, Cell, CellGroup } from '@dwdjs/vant';

export default {
  components: {
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },

  methods: {
    goNext(e) {
      const { link } = e.currentTarget.dataset;

      switch(link) {
        case 'detail':
        case 'cart':
        case 'profile':
          this.$router.push(`${link}`)
          break;
        default:
          // do nothing...
      }
    },
  },
};
</script>

<style lang="less" scoped>
.demo {

  &-group {
    margin-bottom: 15px;
  }
}
</style>
