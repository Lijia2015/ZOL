
//定义状态管理数据
/*
 * user 记录用户的登录信息
 * 
 */

const state = {
	user_info:localStorage.user_info ? localStorage.user_info : '',
    city:'',
	positionShow: false,
	loginShow:true
}

export default state
