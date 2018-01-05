<template>
	<div class="app-footer">
		<div class="foot-nav" @click="changeNav('home')" :class="[type=='home'?'foot-cur':'']">
			<i class="yo-ico">&#xe640;</i>
			<span>首页</span>
		</div>
		<div class="foot-nav" @click="changeNav('category')" :class="[type=='category'?'foot-cur':'']">
			<i class="yo-ico">&#xe6b2;</i>
			<span>分类</span>
		</div>
		
		<router-link v-if="!_user" to='/login' tag='div' class='foot-nav'>
			<i class="yo-ico">&#xe621;</i>
			<span>购物车</span>
		</router-link>
		
		<router-link v-if="!_user" to='/login' tag='div' class='foot-nav'>
			<i class="yo-ico">&#xe68f;</i>
			<span>我的</span>
		</router-link>
		
		<div v-if="_user" class="foot-nav" @click="lOrRChange('car')" :class="[type=='car'?'foot-cur':'']">
			<i class="yo-ico">&#xe621;</i>
			<span>购物车</span>
		</div>
		<div v-if="_user" class="foot-nav" @click="lOrRChange('mine')" :class="[type=='mine'?'foot-cur':'']">
			<i class="yo-ico">&#xe68f;</i>
			<span>我的</span>
		</div>
	</div>
</template>

<script>
	
	import {mapState} from 'vuex'
	
	export default{
		name:'app-footer',
		data(){
			return {
				type:'home',
				navs:[
					{id:1,name:'首页',path:'home'},
					{id:2,name:'分类',path:'category'},
					{id:3,name:'购物车',path:'car'},
					{id:4,name:'我的',path:'mine'},
				],
			};
		},
		/*
		//方法1
		computed:{//计算属性，动态获取state数据
			user(){
				return this.$store.state.user;
			},
		},
		*/
		
		/*
		//方法2
		//当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性,方法1会产生代码冗余，可以借助mapState辅助函数获取store中保存的状态
		computed:mapState(['user']),
		*/
		
		/*
		//方法3
		//方法2中，当组件本身的数据名与state中的数据名重复时，这时很容易造成数据混乱，为了不破坏state中原有的数据，在使用mapState函数时可以传入一个对象,给state数据起一个别名
		computed:mapState({
			
			//_user:'user',  //方法1：key-value键值对形式，key为别名，value为state里对应的数据
			
			_user(state){//方法2：函数形式，函数名为别名，参数为state，返回值为state里对应的数据名
				
				return state.user;
			}
		}),
		*/
		
		//方法4
		//如果我们在组件中有很多自己的业务逻辑需要计算属性，我们可以用对象展开运算符
		computed:{
			
			userStr(){//自己的业务逻辑
				
				return JSON.stringify(this.$store.state.user);
			},
			
			...mapState({//展开运算符，获取state数据
				
				_user(state){
					return state.user;
				},
			}),
			
		},
		methods:{
			changeNav(name){
				this.type = name;
				this.$router.push(name);
			},
			lOrRChange(name){
				this.type = name;
				this.$router.push(name);
			}
			
		},
	}
</script>

<style lang="scss">
</style>