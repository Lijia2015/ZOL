<template>
	<div class="app-detail clearfix">
		<header>
		<i @click="backHome" class="header-back yo-ico">
			&#xf07d;
		</i>
		<div class="cate-content">
			<div @click="changeNav('goods')" :class="[type=='goods'?'curDiv':'']">
				商品
			</div>
			<div @click="changeNav('det')" :class="[type=='det'?'curDiv':'']">
				详情
			</div>
			<div @click="changeNav('cort')" :class="[type=='cort'?'curDiv':'']">
				评价
			</div>
		</div>
		<i class="header-back yo-ico">
		</i>
		</header>
		<router-view></router-view>
	</div>
</template>

<script>
	
	import {mapState} from 'vuex'
	
	export default{
		name:'app-detail',
		data(){
			return {
				type:'goods',
			};
		},
		computed:{
			...mapState(['user_info','footerShow'])
		},
		methods:{
			
			backHome(){
				this.$router.push('home')
				this.$store.commit('navShow')
			},
			changeNav(type){
				
				this.type = type;
				this.$router.replace(type)
			}
		}
	}
</script>

<style lang="scss" scoped>
	header{
		width: 100%;
		height: .48rem;
		border-bottom: 1px solid #d9d9d9;
    	background: #f5f5f5;
    	display: flex;
    	justify-content: space-between;
    	
    	.header-back{
    		padding-left: 0.05rem;
    		box-sizing: border-box;
    		display: block;
    		width: 0.78rem;
			height: 100%;
			text-align: left;
			line-height: 0.48rem;
			font-size: 0.18rem;
    	}
    	.cate-content{
    		flex: 1;
    		display: flex;
    		justify-content: space-between;
    		div{
    			width: 33%;
    			height: 100%;
    			line-height: 0.48rem;
    			text-align: center;
    			color: #333;
    			font-size: 0.15rem;
    			font-weight: bold;
    			box-sizing: border-box;
    		}
    		.curDiv{
    			border-bottom: solid 2px #ce1a1b;;
    		}
    	}
	}
</style>