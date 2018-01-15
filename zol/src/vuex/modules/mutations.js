
//更改 Vuex 的 store 中状态的唯一方法是提交 mutation，Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
/**/

const mutations = {
	//注册
	register(state,user_info){
		//更改state中的user数据
		localStorage.user_info = JSON.stringify(user_info)
	},
	
	//登录状态
	loginState(state){
		state.user_info = localStorage.user_info ? localStorage.user_info : ''
	},
	
	
	//定位
	getPosition(state,city){
		state.city = city
	},
	//定位组件的显示隐藏
	isShow(state){
		state.positionShow = !state.positionShow
	},
	
	//首页登录显示状态
	loginShow(state){
		if(localStorage.user_info){
			state.loginShow = false
		}else{
			state.loginShow = true
		}
	},
	
	//底部导航的显示
	navShow(state){
		state.footerShow = true
	},
	
	//底部导航的隐藏
	navHide(state){
		state.footerShow = false
	},
	
	//跳转详情
	jumpDetail(state,parmas){
		parmas.num = 0;
		parmas.isEdit = false;
		state.curGoods = parmas;
	},
	
	//底部导航的切换效果
	changeNavType(state,type){
		localStorage.navType = type
		state.navType = localStorage.navType
	},
	
	//初始化购物车
	initGoogCar(state){
		state.shopCars = [];
	},
	
	//加入购物车
	addGoodsNum(state,params){
		
		let isHas = state.shopCars.some((item)=>{//判断购物车中是否含有当前的商品
			
			if(item.goods_id == params.goods_id){
				
				item.num ++;
				
				return true;
				
			}else{
				
				return false;
			}
			
		});
		
		if(!isHas){
			
			params.num = 1;
			
			state.shopCars.push(params)
		}
		
		//与数据库数据同步一下
		localStorage.shopCars = JSON.stringify(state.shopCars);
	},
	
	//编辑购车
	editGoodsCar(state,params){
		
		state.shopCars.some((item)=>{//判断购物车中是否含有当前的商品
			
			if(item.goods_id == params.goods_id){
				
				item.isEdit = !item.isEdit;
				
				return true;
				
			}else{
				
				return false;
			}
			
		});
		
		//与数据库数据同步一下
		localStorage.shopCars = JSON.stringify(state.shopCars);
	},
	
	//删除购物车
	removeGoodsCar(state,params){
		
		let len = state.shopCars.length;
		
		for(var i = 0; i < len; i++){
			
			if(state.shopCars[i].goods_id == params.goods_id){
				state.shopCars.splice(i,1);
				break;
			}
		}
		localStorage.shopCars = JSON.stringify(state.shopCars);
	}
	
}

export default mutations
