<template>
	
	<div class="app-header">
		<app-position v-show="positionShow"></app-position>
		<header>
	   		<div class="logo">
	   			
	   		</div>
	   		<span @click="isShow">
	   			{{city}}
	   			<i class="fa fa-angle-down"></i>
	   		</span>
	   		<div class="search">
	   			<i class="fa fa-search"></i>
	   			<input type="text" placeholder="iphone7"/>
	   		</div>
	   		<router-link to="/login" tag="a" class="login">
	   			登录
	   		</router-link>
	   </header>
	   
	</div>
</template>
<script>
	import AppPosition from './AppPosition'
	import {mapState,mapActions} from 'vuex'
	
	
	export default {
		name:"app-header",
		components:{AppPosition},
		computed:{
        	...mapState(['city','positionShow'])
        },
        methods:{
        	...mapActions(['getPosition']),
        	isShow(){
        		this.$store.commit('isShow')
        	}
        },
        mounted(){
        	//开始定位
        	this.getPosition()
        }
	}
</script>

<style lang="scss" scoped>
	.app-header{
		height: .4rem;
	}
	header{
		height: .4rem;
		background: #ce1a1b;
		display: flex;
		align-items: center;
		color: #fff;
		font-size: 12px;
		.logo{
			margin-left: .1rem;
			width: .55rem;
			height: .4rem;
			background:url(//icon.zol-img.com.cn/newshop/wap/shop/indexV2/logo.png) no-repeat 50% 50%;
			background-size: 0.6rem .2rem;
		}
		span{
			display: flex;
			width: .6rem;
			height: .3rem;
			/*text-align: center;*/
			line-height: .3rem;
			align-items: center;
			justify-content: center;
			i{
				display: block;
				width: .15rem;
				height: .15rem;
				background: yellow;
				text-align: center;
				line-height: .15rem;
			}
		}
		.search{
			width: 2rem;
			height: .3rem;
			display: flex;
			align-items: center;
			background: #a90102;
			border-radius: .08rem;
			i{
				width: .18rem;
				height: .18rem;
				background: yellow;
				color: #ccc;
				font-size: 18px;
				opacity: 0.7;
				margin:0 0.05rem;
			}
			::-moz-placeholder { /* Mozilla Firefox 19+ */
			    color: #fc8889;opacity:1;
			}
			
			input:-ms-input-placeholder{
			    color: #fc8889;opacity:1;
			}
			
			input::-webkit-input-placeholder{
			    color: #fc8889;opacity:1;
			}
			input{
				border:0;
				background: #a90102;
				height: 100%;
			}
		}
		.login{
			width: .5rem;
			height: 100%;
			line-height: .4rem;
			text-align: center;
			color: #fff;
			font-size: 14px;
		}
	}
</style>
