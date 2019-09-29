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
      <van-col span="5">
        <van-icon name="pending-payment" />待付款
      </van-col>
      <van-col span="5">
        <van-icon name="records" />待收货
      </van-col>
      <van-col span="5">
        <van-icon name="tosend" />待评价
      </van-col>
      <van-col span="5">
        <van-icon name="logistics" />退换/售后
      </van-col>
      <van-col span="4">
        <van-icon name="logistics" />我的订单
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group class="user-group">
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>

    <van-cell-group class="user-group">
      <van-cell icon="points" title="我的权益" is-link />
      <van-cell icon="gold-coin-o" title="我的勋章" is-link />
      <van-cell icon="gift-o" title="我的影响力" is-link />
    </van-cell-group>
  </div>
</template>

<script>
// 店铺收藏 商品收藏 浏览记录
// 订单，优惠券，客服，会员，签到，影响力，积分，勋章
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

<style lang="stylus" scoped>
.user {
  &-profile {
    background: url('https://img1.haoshiqi.net/assets/hsqimg/userInfo-bg.png') no-repeat;
    background-size: cover;
    width: 100%;
    height: 30vw;
    display: block;
  }

  &-group {
    margin-bottom: 16px;
  }

  &-links {
    padding: 16px 0;
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
