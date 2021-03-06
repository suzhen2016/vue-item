import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'
import first from './modules/first'
import activities from './modules/activities'
import book from './modules/book'
import subject from './modules/subject'
import group from './modules/group'
import search from './modules/search'
import user from './modules/user'

Vue.use(Vuex)
// 定义store的构造函数的参数
export default new Vuex.Store({
  modules: {
    movie,
    first,
    activities,
    book,
    subject,
    group,
    search,
    user
  }
})
