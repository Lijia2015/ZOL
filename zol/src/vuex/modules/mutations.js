
//更改 Vuex 的 store 中状态的唯一方法是提交 mutation，Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
/**/

const mutations = {
	//注册
	register(state,user_info){
		//更改state中的user数据
		state.user_info = user_info
		localStorage.user_info = JSON.stringify(user_info)
	},
	
//	login(state,user_info){
//		let login_info = JSON.parse(localStorage.user_info)
//		if(login_info.user_name == user_info.user_name && login_info.user_password == user_info.user_password){
//			alert("登陆成功")
//		}else{
//			alert("登陆失败")
//		}
//	},
	
	
	//定位
	getPosition(state,city){
		state.city = city
	},
	//定位组件的显示隐藏
	isShow(state){
		state.positionShow = !state.positionShow
	},
	loginShow(state){
		let login_info = JSON.parse(localStorage.user_info)
		if(login_info.user_name.length){
			state.loginShow = false
		}else{
			state.loginShow = true
		}
	},
	navShow(state){
		
		state.footerShow = true
	},
	navHide(state){
		
		state.footerShow = false
	}
}

export default mutations
