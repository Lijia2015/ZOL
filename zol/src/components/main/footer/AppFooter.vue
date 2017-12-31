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
		
		<router-link v-if="!user" to='/login' tag='div' class='foot-nav'>
			<i class="yo-ico">&#xe621;</i>
			<span>购物车</span>
		</router-link>
		
		<router-link v-if="!user" to='/login' tag='div' class='foot-nav'>
			<i class="yo-ico">&#xe68f;</i>
			<span>我的</span>
		</router-link>
		
		<div v-if="user" class="foot-nav" @click="lOrRChange('car')" :class="[type=='car'?'foot-cur':'']">
			<i class="yo-ico">&#xe621;</i>
			<span>购物车</span>
		</div>
		<div v-if="user" class="foot-nav" @click="lOrRChange('mine')" :class="[type=='mine'?'foot-cur':'']">
			<i class="yo-ico">&#xe68f;</i>
			<span>我的</span>
		</div>
	</div>
</template>

<script>

	export default{
		name:'app-footer',
		data(){
			return {
				type:'home',
				user:localStorage.user?JSON.parse(localStorage.user):'',
				navs:[
					{id:1,name:'首页',path:'home'},
					{id:2,name:'分类',path:'category'},
					{id:3,name:'购物车',path:'car'},
					{id:4,name:'我的',path:'mine'},
				],
			};
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