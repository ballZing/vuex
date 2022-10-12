// 该文件用于创建vuex中最为核心的store

import Vue from 'vue';
import Vuex from 'vuex';
// 准备actions——用于响应组件中的动作
const actions = {
    addOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('ADD', value)
        }
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value)
        }, 1000)
    }
}
// 准备mutations——用于操作数据（state）
const mutations = {
    ADD(state, value) {
        state.sum += value
    },
    REDUCE(state, value) {
        state.sum -= value
    }
}
// 准备state——用于存储数据（state）
const state = {
    sum: 0,
    school: 'atguigu', 
    subject: '前端'
}
// 准备getter——用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

Vue.use(Vuex)
const store = new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters: getters
})

// 暴露store
export default store