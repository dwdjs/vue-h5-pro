<template>
  <div class="page-fire">
    <div class="show-type">List</div>
    <div :class="classList.list" class="pro-list column-3">
      <article
        v-for="(item, index) in list"
        :key="item.biz_id"
        :class="classList.item"
        :data-id="item.biz_id"
        :data-index="index"
        @click="goNext($event)"
        data-link="detail"
        class="item"
      >
        <div class="media-wrap">
          <img :src="item.thumbnail" :alt="item.title" class="cover full">
        </div>
        <div class="main">
          <div class="flex-start">
            <div class="title max-line-2">{{ item.title }}</div>
            <!-- <div class="desc"></div> -->
            <div class="tags">
              <span v-for="tag in item.tags" :key="tag.text" :style="`backgroundColor: ${tag.background}`" class="tag">{{ tag.text }}</span>
            </div>
          </div>
          <div class="flex-end width-full">
            <div class="price-box flex">
              <div class="cur-price">&yen;24.90</div>
              <del class="del-price">&yen;{{ item.market_price | price }}</del>
            </div>
          </div>
        </div>
      </article>
    </div>
    <!-- <v-virtual-list :data-source="list" :height="240" :item-height="50">
      <template scope="{ data }">
        <div class="virtual-list-item__cell">{{ data && data.content }} ,</div>
      </template>
    </v-virtual-list> -->
  </div>
</template>

<script>
// import VVirtualList from '@/components/v-virtual-list/list'
// import VVirtualListItem from '@/components/v-virtual-list/list-item'
// export default {
//   components: {
//     [VVirtualList.name]: VVirtualList,
//     [VVirtualListItem.name]: VVirtualListItem,
//   },
// }
import skuList from '@/mock/sku-list'

export default {
  name: 'fire',

  filters: {
    price(value) {
      return (value / 100).toFixed(2)
    },
  },
  data() {
    return {
      list: skuList,
      listType: 'grid',
    }
  },

  computed: {
    classList() {
      const { listType } = this
      return {
        list: {
          [`view-${listType}`]: true,
        },
        item: {
          [`item-${listType}`]: true,
        },
      }
    },
  },

  created() {
    console.log(this.$options.name)
  },

  methods: {
    goNext(e) {
      const { id, index, link } = e.currentTarget.dataset
      this.$forward(link, { id, index })
    },
  },
}
</script>

<style lang="stylus" scoped>
.page-fire {
  background: #ddd;
}

// 支持控制是否显示封面、标题、描述、标签、价格
.pro-list {
  .item {
    margin-bottom: 10px;
    background: #fff;
  }
  .item-list {
    display: flex;
  }
  .item-grid {
    display: flex;
    flex-direction: column;
  }
  .main {
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-flow: row wrap;
  }

  .title {
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .tag {
    display: inline-block;
    margin: 0 4px 4px 0;
  }
}

// 横向排版
.view-list {
  margin: 10px;
  .media-wrap {
    width: 140px;
    height: 140px;
    flex-shrink: 0;
    // margin-right: 10px;
  }
}
// 网格排版(默认自适应排版)，可指定列数
.view-grid {
  display: flex;
  flex-flow: row wrap;

  // .media-wrap {

  // }

  // 默认两列，按全局 375 px宽度计算
  // 两列: 间距 10*3 344/2 172
  // 三列: 间距 10*4 335/3 111
  .item,
  &.column-2 .item {
    margin: 0 10px 10px 0;
    width: 172px;

    &:nth-of-type(2n+1) {
      margin-right: 10px;
    }
  }

  &.column-1 .item {
    margin: 0 10px 10px 10px;
    width: 365px;
  }

  &.column-3 .item {
    margin: 0 10px 10px 0;
    width: 111px;
    &:nth-of-type(3n+1) {
      margin-left: 10px;
    }
  }
}
</style>
