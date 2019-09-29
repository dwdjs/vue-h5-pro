# 分类页面

分类顶部为搜索入口

## 简单实现

适用于内容分类数据较多，只展示当前分类内容即可，无交互

## 强交互实现

适用于分类内容较少，右侧内容全部展示，左侧点击锚点定位右侧内容，或可粘性布局

- 可简单使用 Element.scrollIntoView 辅助滚动侦听实现
  - iOS 不支持smooth 且 pc 端动画效果太慢不理想
  - iOS 移动端浏览器点击做锚点定位时，把 top-search 移出可视区域了（微信没问题）
  - 所以此方案就不要动画了
- 强交互实现，可参考饿了么菜单效果，交互动画全自主实现
  - 左侧选中分类，自动调整位置，显示在可视区域
  - 右侧有吸顶效果，滚动时对应显示左侧分类

参考：

- https://www.jianshu.com/p/32bef36a68a0
- https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
