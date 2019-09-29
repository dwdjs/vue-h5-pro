<template>
  <div class="index-first">
    <div class="index-banner">
      <img class="auto" src="https://placekitten.com/750/300" alt="banner">
    </div>

    <div class="category">
      <div class="category-item">item</div>
      <div class="category-item">item</div>
      <div class="category-item">item</div>
      <div class="category-item">item</div>
      <div class="category-item">item</div>
      <div class="category-item">item</div>
      <div class="category-item">item</div>
      <div class="category-item">item</div>
      <div class="category-item">item</div>
      <div class="category-item">item</div>
    </div>

    <van-cell-group title="demo">
      <van-cell
        title="详情页"
        data-link="detail"
        is-link
        @click.native="goNext"
      />
      <van-cell
        title="购物车"
        data-link="cart"
        is-link
        @click.native="goNext"
      />
      <van-cell
        title="个人中心"
        data-link="profile"
        is-link
        @click.native="goNext"
      />
      <van-cell
        title="详情页"
        data-link="detail"
        is-link
        @click.native="goNext"
      />
      <van-cell
        title="购物车"
        data-link="cart"
        is-link
        @click.native="goNext"
      />
      <van-cell
        title="个人中心"
        data-link="profile"
        is-link
        @click.native="goNext"
      />
    </van-cell-group>
  </div>
</template>

<script>
import { Col, Icon, Cell, CellGroup } from '@dwdjs/vant'

export default {
  name: 'IndexFirst',
  components: {
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },

  methods: {
    goNext(e) {
      const { link } = e.currentTarget.dataset

      switch (link) {
        case 'detail':
        case 'cart':
        case 'profile':
          this.$router.push(`${link}`)
          break
        default:
        // do nothing...
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.demo {
  &-group {
    margin-bottom: 15px;
  }
}

.index-banner {
  width: 100%;
  overflow: hidden;
}

.category {
  display: flex;
  flex-flow: row wrap;

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 20%;
  }
}
</style>
