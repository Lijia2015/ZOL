<template>
	<div class="app-footer">
		<div  class="foot-nav" @click="changeNav('home')" :class="[type=='home'?'foot-cur':'']">
			<i class="yo-ico">&#xe640;</i>
			<span>首页</span>
		</div >
		<div  class="foot-nav"@click="changeNav('category')" :class="[type=='category'?'foot-cur':'']">
			<i class="yo-ico">&#xe6b2;</i>
			<span>分类</span>
		</div>
		
		<div class='foot-nav' @click="isLogin('car')" :class="[type=='car'?'foot-cur':'']">
			<i class="yo-ico">&#xe621;</i>
			<span>购物车</span>
		</div>
		
		<div class='foot-nav' @click="isLogin('mine')" :class="[type=='mine'?'foot-cur':'']">
			<i class="yo-ico">&#xe68f;</i>
			<span>我的</span>
		</div>
   </div>
</template>

<script>
	
	import {mapState} from 'vuex'
	
	export default {
		name:"app-footer",
		data(){
			return{
				type : '',
				navs:[
					{id:1,name:'首页',path:'home'},
					{id:2,name:'分类',path:'category'},
					{id:3,name:'购物车',path:'car'},
					{id:4,name:'我的',path:'mine'},
				],
			}
		},
		computed:{
			...mapState(['user_info'])
		},
		methods:{
			changeNav(name){
				this.type = name
				this.$router.push(name)
			},
			isLogin(name){
				console.log(this.user_info)
//				console.log(JSON.parse(this.user_info))
				if(this.user_info == ''){
					this.$router.push('/login')
				}else if(JSON.parse(localStorage.user_info).user_name){
					this.type = name
					this.$router.push(name)
				}else{
					this.$router.push('/login')
				}
			},
			
		},
	}
</script>

<style lang="scss">

</style>