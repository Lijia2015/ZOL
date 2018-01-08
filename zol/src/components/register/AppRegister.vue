<template>
	<div class="app-register" >
		<form @submit.prevent = 'changeUser({user_name:user_list.user_name,user_password:user_list.user_password})'>
			<header>
				<i @click="back" class="header-back yo-ico">
					&#xf07d;
				</i>
				<p>手机快速注册</p>
			</header>
			<section>
				<div class="register-tel">
					<p>
						<i style="font-size:16px;" class="yo-ico">&#xe68f;</i>
						<input v-model="user_list.user_name" type="tel" id="register-txt" placeholder="请输入手机号" />
					</p>
					<p>
						<i style="font-size:30px" class="yo-ico">&#xe60a;</i>
						<input type="text" placeholder="请输入短信验证码" />
						<span class="register-identifying">获取验证码</span>
					</p>
					<p>
						<i class="yo-ico">&#xe6b2;</i>
					<input v-model="user_list.user_password" type="password" id="password" placeholder="请设置登录密码，4~16位" />
					</p>
				</div>
				<div class="register">
					<input type="submit" id="register" value="注册中关村在线帐号">
				</div>
				<router-link class="go-login" to="login" tag="a">
					<p>已有账号登录</p>
					<i class="yo-ico">&#xf07f;</i>
				</router-link>
			</section>
		</form>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:"app-register",
		props:["back"],
		data(){
			return{
				user_list:{
					user_name:'',
					user_password:'',
				},
			}
		},
		computed:{
			...mapState(['user_info'])
		},
        methods:{
        	changeUser(params){
				if(params.user_name == ''){
					alert('登陆失败');
					return
				}else{
					this.$store.commit('register',params)
        			this.$router.push({name:'login'})
				}
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
    	.header-back{
    		display: block;
    		width: .47rem;
			height: 100%;
			text-align: center;
			line-height: .48rem;
			font-size: 18px;
    	}
    	p{
    		width: 2.95rem;
    		height: 100%;
    		text-align: center;
    		line-height: .48rem;
    		font-weight: 400;
    		font-size: 18px;
    	}
	}
	section{
		input{
			border: 0;
		}
		.register-tel{
			width: 100%;
			height: 1.38rem;
			background: #fff;
			
			p{
				width: 100%;
				height: .46rem;
				font-size: 16px;
				color: #333;
				display: flex;
				line-height: .46rem;
				#register-txt{
					width:3.29rem ;
					border-bottom: 0.01rem solid #d3d3d3;	
				}
				
				i{
					display: block;
					width: .46rem;
					height: .46rem;
					text-align: center;
					line-height: .46rem;
					font-size: 20px;
				}
				.register-identifying{
					display: block;
					width: 1rem;
					height: .29rem;
					font-size: 12px;
    				line-height: .29rem;
    				background:#b2b2b2;
    				border-radius: 2px;
    				text-align: center;
    				margin: 0.09rem 0 0 0.2rem;
    				color: #fff;
				}
				#password{
					width: 3.33rem;
					border-top: .01rem solid #d3d3d3;	
				}
			}
		}
		.register{
			display: flex;
			flex-direction: column;
			align-items: center;
			border-top: .01rem solid #d3d3d3;
			#register{
				display: block;
				width: 3.45rem;
				height: .4rem;
				text-align: center;
				line-height: .4rem;
				margin-top: .2rem;
				
			}
		}
		.go-login{
		    position: absolute;
		    bottom: .2rem;
		    width: 100%;
		    height: .45rem;
		    border-top: 1px solid #d3d3d3;
		    border-bottom: 1px solid #d3d3d3;
		    background: #fff;
		    font-size: 14px;
		    line-height: .45rem;
		    color: #333;
		    display: flex;
		    p{
		    	width: 3.17rem;
		    	height: 100%;
		    	margin-left: .2rem;
		    }
		    i{
		    	display: block;
		    	width: .48rem;
				height: 100%;
				text-align: center;
				line-height: .45rem;
				font-size: 18px;
		    }
		}
	}
</style>