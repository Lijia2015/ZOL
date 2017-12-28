<template>
	<div class="app-footer">
		<div :key='nav.id' class="foot-nav" v-for="nav in navs" @click="changeNav(nav.path)">
			<i></i>
			<span>{{nav.name}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'app-footer',
		data(){
			return {
				
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
				
				this.$router.push(name);
			}
			
		},
	}
</script>

<style lang="scss">
</style>