import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './modules/state'
import mutations from './modules/mutations'
import actions from './modules/actions'


//设置store管理的state/getter，mutations，actions等信息
const store = new Vuex.Store({
	
	state,mutations,actions
})

export default store