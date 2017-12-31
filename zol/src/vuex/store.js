import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './modules/state'

//设置store管理的state/getter，mutations，actions等信息
const store = new Vuex.Store({
	
	state,
})

export default store