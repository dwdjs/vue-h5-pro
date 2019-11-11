<template>
  <div class="page-detail detail">
    <div class="detail-header">
      <div class="back" @click="$back">></div>
    </div>

    <van-swipe class="detail-swipe" :autoplay="3000">
      <van-swipe-item
        v-for="(thumb, index) in detail.thumb"
        :key="thumb"
        @click.native="$preview(detail.thumb, index)"
      >
        <img :src="thumb">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="price-wrap">
          <span class="price-desc" alt="描述">{{ detail.priceDesc }}</span>
          <span class="price detail-price B" v-html="formatPrice(detail.price)" />
          <span class="del-price">{{ detail.marketPrice | price }}</span>
          <!-- <span class="price-fresh"></span>
          <span class="price-tags"></span>
          <span class="price-help"></span>
          <span class="vip-price"></span>
          <span class="newer-price"></span> -->
          <!-- <span class="favour">收藏</span>
          <span class="cheaper-info">降价提醒</span> -->
        </div>
        <div class="detail-title">{{ detail.title }}</div>
      </van-cell>
      <van-cell class="detail-express">
        <van-col span="10">运费：{{ detail.express }}</van-col>
        <van-col span="14">剩余：{{ detail.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <div class="detail-tags">标签</div>
    <div class="detail-activity">满减折扣等活动信息，最多显示两行，点击展开等</div>

    <van-cell-group class="detail-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="detail-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="detail-cell-group">
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
// 顶部图片位
//  - 点击支持全屏预览(白色全遮罩+来路动画)
//  - 支持视频播放（原位置），滚动后缩小悬浮
//  - 支持双倍滚动隐藏，更快展示产品介绍 参考 JD
// 左右间距 10px
// 支持优惠提示
// 支持多 sku 选择
// 支持配送地址选择
// 支持评价展示、店铺展示、精品推荐/排行榜、详情、推荐（同店好货/看了又看）
// 滚动后并触发header吸顶 tab（商品/评价/详情/推荐），支持定位跳转
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
  name: 'detail',

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

  filters: {
    price(v) {
      return (v / 100).toFixed(2)
    },
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
      detail: {
        // 数据结构见下方文档
        title: '美国伽力果（约680g/3个）',
        priceDesc: '开学季',
        price: 2680,
        marketPrice: 4680,
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
      // 价格三部分，
      const temp = (this.detail.price / 100).toFixed(2).split('.')
      return `¥<em>${temp[0]}</em>.${temp[1]}`
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
.page-detail {
  background: #f2f2f2;
}

.detail {
  padding-bottom: 50PX;

  &-header {
    position: fixed;
    z-index: 10;
  }

  .back {
    display: inline-flex;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background: #fff;
    align-items: center;
    justify-content: center;
  }

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  .price-wrap {
    padding-top: 6px;
    padding-bottom: 0;
    position: relative;
    font-size: 12px;
  }

  .price-desc + .price {
    margin-left: 4px;
  }

  &-price {
    color: #e4393c;
    font-size: 16px;
    >>> > em {
      font-size: 24px;
      font-style: normal;
    }
  }

  .del-price {
    margin-left: 4px;
    text-decoration: line-through;
    color: #999;
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
