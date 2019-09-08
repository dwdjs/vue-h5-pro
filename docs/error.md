# 关于错误页

考虑以下场景需求，如 404 的场景

- 错误发送，触发视图更改但不应更改当前URL（更友好）
- 可以有条件地控制加载错误组件
- 路由层控制显示

参考：

- https://github.com/raniesantos/vue-error-page
- https://juejin.im/post/5b019ad7f265da0ba567d259
- https://stackoverflow.com/questions/45619407/how-to-create-a-404-component-in-vuejs-using-vue-router
- http://jartto.wang/2018/11/20/js-exception-handling/
