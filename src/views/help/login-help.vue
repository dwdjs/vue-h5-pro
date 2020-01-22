<template>
  <div class="page-login-help">
    <div class="help-list">
      <article v-for="(item, index) in qaList" :key="index" class="item van-hairline--bottom">
        <div class="question">{{ item.question }}</div>
        <div class="answer">{{ item.answer }}</div>
      </article>
    </div>

    <div class="help-tip">没找到相关问题？点此<span @click="goNext" class="link">联系客服</span></div>
  </div>
</template>

<script>
import qaList from '@/mock/login-help'

export default {
  data() {
    return {
      qaList,
    }
  },

  methods: {
    goNext() {
      this.$forward('service')
    },
  },
}
</script>

<style lang="stylus" scoped>
.page-login-help {
  background: #fff;
}

.help-list {
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
}
.question,
.answer {
  position: relative;
  padding: 10px 16px 10px 40px;

  &:before {
    content: 'Q:';
    position: absolute;
    margin-top: -4px;
    margin-left: -30px;
    font-size: 1.5em;
    color: #e3e5e9;
    font-style: italic;
  }
}
.answer:before {
  content: 'A:';
}

.help-tip {
  margin: 20px 0;
  text-align: center;
  font-size: 12px;
}
</style>
