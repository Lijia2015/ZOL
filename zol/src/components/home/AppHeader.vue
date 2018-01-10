<template>
	
	<div class="app-header">
		<app-position v-show="positionShow"></app-position>
		<header>
	   		<div class="logo">
	   			
	   		</div>
	   		<span @click="isShow">
	   			{{city}}
	   			<i v-if="!positionShow" class="yo-ico">&#xf031;</i>
	   			<i v-else class="yo-ico">&#xf027;</i>
	   		</span>
	   		<div class="search">
	   			<i class="yo-ico">&#xf067;</i>
	   			<input type="text" placeholder="iphone7"/>
	   		</div>
	   		<a @click ='goLogin' class="login">
	   			<em v-if="loginShow">登录</em>
	   			<i v-else class="yo-ico my-mine">&#xe68f;</i>
	   		</a>
	   </header>
	   
	</div>
</template>
<script>
	import AppPosition from '../position/AppPosition'
	import {mapState,mapActions} from 'vuex'
	
	
	export default {
		name:"app-header",
		components:{AppPosition},
		data(){
			return{
//				
			}
		},
		computed:{
        	...mapState(['city','positionShow','user_info','loginShow'])
        },
        methods:{
        	...mapActions(['getPosition']),
        	isShow(){
        		this.$store.commit('isShow')
        	},
        	goLogin(params){
        		if(this.user_info == ''){
					this.$store.commit('navHide')
					this.$router.push({name:'login'})
					return
				}
        		let login_info = JSON.parse(localStorage.user_info)
        		if(login_info.user_name.length){
        			
        			this.$store.commit('loginShow')
					this.$router.push({name:'mine'})
        		}else{
					this.$router.push({name:'login'})
        			
        		}
        	},
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
			
		    width: 0.515rem;
		    height: 0.24rem;
		    background: url('/static/images/logo.png') no-repeat 50% 50%;
		    background-size: 0.515rem 0.24rem;
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
				font-size: 18px;
				opacity: .7;
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
				height: .2rem;
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
		.my-mine{
			font-size: 20px;
			opacity: .6;
		}
	}
</style>
