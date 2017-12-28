<template>
	<div class="app-footer">
		<div class="foot-nav" @click="changeNav('home')" :class="[showType=='home'?'foot-cur':'']">
			<i class="yo-ico">&#xe640;</i>
			<span>首页</span>
		</div>
		<div class="foot-nav" @click="changeNav('category')" :class="[showType=='category'?'foot-cur':'']">
			<i class="yo-ico">&#xe6b2;</i>
			<span>分类</span>
		</div>
		<div class="foot-nav" @click="changeNav('car')" :class="[showType=='car'?'foot-cur':'']">
			<i class="yo-ico">&#xe621;</i>
			<span>购物车</span>
		</div>
		<div class="foot-nav" @click="changeNav('mine')" :class="[showType=='mine'?'foot-cur':'']">
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
				showType:'home',
				navs:[
					{id:1,name:'首页',path:'home',icon:'&#xe640;'},
					{id:2,name:'分类',path:'category',icon:'&#xe640;'},
					{id:3,name:'购物车',path:'car',icon:'&#xe640;'},
					{id:4,name:'我的',path:'mine',icon:'&#xe640;'},
				],
			};
		},
		methods:{
			
			changeNav(path){

				this.$router.push(path);
				this.showType = path;
			}
			
		},
	}
	

</script>

<style lang="scss">
</style>