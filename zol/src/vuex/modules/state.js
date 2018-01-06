
//定义状态管理数据
/*
 * user 记录用户的登录信息
 * 
 */

const state = {
	
	user:localStorage.user?JSON.parse(localStorage.user):'',	
    city:'',
	positionShow: false
}

export default state
