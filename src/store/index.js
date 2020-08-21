import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 状態`Auth`と状態`Board`をvuexのstateで一元管理できるよう定義する
const state = {
  auth: { // 状態`Auth`
    token: null, // `token`はnillで初期化
    userId: null // 状態`TaskList`は空で初期化
  }
}

export default new Vuex.Store({
  getters,
  actions,
  mutations
  // strict: process.env.NODE_ENV != 'production'
})
