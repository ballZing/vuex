# Vuex

## 1.概念
在Vue中实现集中式状态(数据)管理的一个Vue插件，对Vue应用中多个组件的共享状态进行集中式的管理(读/写)，也是一种组件间通信的方式，且适用于任意组件间通信

## 2.何时使用
多个组件需要共享数据时

## 3.搭建Vuex环境
1. 在src文件夹中创建store/index.js文件
```JavaScript
// 引入Vue核心库
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)
// 准备actions对象——响应组件中用户的动作
const actions = {}
// 准备mutations对象——修改state中的数据
const mutations = {}
// 准备state对象——保存具体的数据
const state = {}
// 创建并暴露store
export default new Vuex.Store({
    actions,mutations,state
})
```
2. 在main.js中创建vm时传入store配置项
```JavaScript
// 引入store
import store from './store'
................................................................
// 创建vm
new Vue({
    store,
    render: h => h(App)
})
```
## 4.基本使用
1. 初始化数据、配置actions、配置mutations、操作文件store.js
```JavaScript
// 引入Vue核心库
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)
// 准备actions对象——响应组件中用户的动作
const actions = {
    xxx(context, value) {
        context.commit('XXX', value)
    }
}
// 准备mutations对象——修改state中的数据
const mutations = {
    XXX(state, value) {
        // 进行数据操作
    }
}
// 准备state对象——保存具体的数据
const state = {
    // 存放数据
}
// 创建并暴露store
export default new Vuex.Store({
    actions,mutations,state
})
```
2. 组件中读取vuex中的数据：> $store.state.sum
3. 组件中修改vuex中的数据：> $store.dispatch('xxx', 数据)或者 $store.commit('XXX', 数据)

## 5.getters的使用
1. 概念：当state中的数据需要经过加工后使用时，可以使用getters加工
2. 在<span style="background-color:gray">store.js</span>中追加<span style="background-color:gray">getters</span>配置
```javascript
const getters = {
    xxx() {
        return ...
    }
}
```
3. 组件中读取数据 ```$store.getters.xxx```