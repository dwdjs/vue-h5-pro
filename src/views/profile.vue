<template>
  <div class="page-profile">
    <div class="user-profile">
      <div v-if="isLogin">
        用户信息
      </div>
      <div v-else data-link="login" @click="goNext">
        未登录
      </div>
    </div>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from '@dwdjs/vant'

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },

  data() {
    return {
      isLogin: false,
    }
  },

  methods: {
    goNext(e) {
      const { link } = e.currentTarget.dataset

      this.$forward(link)
    },
  },
}
</script>

<style lang="less" scoped>
.user {
  &-profile {
    background: url('https://img1.haoshiqi.net/assets/hsqimg/userInfo-bg.png') no-repeat;
    background-size: cover;
    width: 100%;
    height: 30vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
