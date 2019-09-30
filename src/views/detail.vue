<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <div class="detail-tags">标签</div>
    <div class="detail-activity">满减折扣等活动信息，最多显示两行，点击展开等</div>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-icon>
      <van-goods-action-button type="warning" @click="sorry">
        加入购物车
      </van-goods-action-button>
      <van-goods-action-button type="danger" @click="popSku">
        立即购买
      </van-goods-action-button>
    </van-goods-action>


    <van-sku
      v-model="show"
      :sku="skuData.sku"
      :goods="skuData.goods_info"
      :goods-id="skuData.goods_id"
      :hide-stock="skuData.sku.hide_stock"
      :quota="skuData.quota"
      :quota-used="skuData.quota_used"
      :close-on-click-overlay="closeOnClickOverlay"
      :message-config="messageConfig"
      :custom-sku-validator="customSkuValidator"
      disable-stepper-input
      reset-stepper-on-hide
      safe-area-inset-bottom
      reset-selected-sku-on-hide
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sku,
} from '@dwdjs/vant'
import skuData from '@/mock/sku'

export default {
  name: 'Detail',

  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Sku.name]: Sku,
  },

  data() {
    this.skuData = skuData
    return {
      show: false,
      // sku: {
      //   // 数据结构见下方文档
      // },
      messageConfig: {
        // 数据结构见下方文档
      },
      closeOnClickOverlay: true,
      customSkuValidator: () => '请选择xxx',
      goods: {
        // 数据结构见下方文档
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [
          'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
          'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg',
        ],
      },
    }
  },

  methods: {
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2)
    },

    onClickCart() {
      this.$router.push('cart')
    },

    sorry() {
      Toast('暂无后续逻辑~')
    },
    popSku() {
      this.show = true
    },

    onBuyClicked(data) {
      this.$toast('buy:' + JSON.stringify(data))

      this.$forward('order-commit', {
        id: data.goodsId,
      })
    },

    onAddCartClicked(data) {
      this.$toast('add cart:' + JSON.stringify(data))
    },
  },
}
</script>

<style lang="stylus" scoped>
.goods {
  padding-bottom: 50PX;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>
