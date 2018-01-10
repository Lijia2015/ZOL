<template>
	<div class="app-login">
		<form @submit.prevent="onlogin({user_name:user_list.user_name,user_password:user_list.user_password})">
			<header>
				<i @click="backHome" class="header-back yo-ico">
					&#xf07d;
				</i>
				<p>手机号快捷登录</p>
			</header>
			<section>
				<div class="tel">
					<p>
						<i class="yo-ico">&#xe68f;</i>
						<input v-model="user_list.user_name" type="tel" id="txt" placeholder="请输入手机号" />
					</p>
					<p>
						<i class="yo-ico">&#xe60a;</i>
						<input v-model="user_list.user_password" type="text" placeholder="请输入短信验证码" />
						<span class="identifying">获取验证码</span>
					</p>
				</div>
				<p class="Reminder">
					温馨提示：未注册ZOL账号的手机号，手机号快捷登录时，将自动注册ZOL账号
				</p>
				<div class="btns">
					<input type="submit" id="login" value="立即登录" />
					<a href="#" class="else-login">已有账号登录</a>
					<div class="need-help">
						<a href="#">忘记密码</a>
						<router-link to='/register' tag="a">
							注册账号
						</router-link>
						<!--<a href="/register">注册账号</a>-->
					</div>
				</div>
				<div class="other-way">
					<p>使用第三方帐号登录</p>
					<ul class="other-login-way">
						<li>
							<a href="http://service.zol.com.cn/user/api/qq/libs/oauth/redirect_to_login.php?comewap=1&amp;from=400&amp;backurl=http%3A%2F%2Fm.zol.com%2F" class="qq">
								<img src="/static/images/iconts/tencent.png"/>
							</a>
						</li>
						<li>
							<a href="http://service.zol.com.cn/user/api/sina/jump.php?comewap=1&amp;from=400&amp;backurl=http%3A%2F%2Fm.zol.com%2F" class="weibo">
								<img src="/static/images/iconts/sina.png"/>
							</a>
						</li>
						<li>
							<a href="http://service.zol.com.cn/user/api/baidu/jump.php?comewap=1&amp;from=400&amp;backurl=http%3A%2F%2Fm.zol.com%2F&amp;display=mobile" class="baidu">
								<img src="/static/images/iconts/baidu.png"/>
							</a>
						</li>
					</ul>
				</div>
				
			</section>
		</form>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import { Toast } from 'mint-ui';
	export default {
		name:"app-login",
		props:["back"],
		data(){
			return{
				user_list:{
					user_name:'',
					user_password:''
				}
			}
		},
		computed:{
			...mapState(['user_info','loginShow','footerShow'])
		},
		methods:{
			onlogin(params){
				if(this.user_info == ''){
					Toast('登陆失败');
					return
				}
				let login_info = JSON.parse(localStorage.user_info)
				let that = this
				setTimeout(()=>{
					
					if(login_info.user_name == params.user_name && login_info.user_password == params.user_password){
						Toast("登陆成功")
						that.$store.commit('loginShow')
						that.$store.commit('navShow')
						that.$router.push({name:'home'})
					}else{
						Toast('登陆失败');
					}
					
				})
			},
			backHome(){
				this.$store.commit('navShow')
				this.$router.push({name:'home'})
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
    		width: .48rem;
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
		.tel{
			width: 100%;
			height: .92rem;
			background: #fff;
			
			p{
				width: 100%;
				height: .46rem;
				font-size: 16px;
				color: #333;
				display: flex;
				line-height: .46rem;
				#txt{
					width:3.29rem ;
					border-bottom: 1px solid #d3d3d3;	
				}
				
				i{
					display: block;
					width: .46rem;
					height: .46rem;
					text-align: center;
					line-height: .46rem;
					font-size: 18px;
				}
				.identifying{
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
			}
		}
		.Reminder{
			width: 100%;
			height: .45rem;
			padding: 5px 15px 0;
		    font-size: 12px;
		    line-height: 20px;
		    color: #999;
		    border-top: 1px solid #d3d3d3;
		}
		.btns{
			display: flex;
			flex-direction: column;
			align-items: center;
			#login,.else-login{
				display: block;
				width: 3.45rem;
				height: .4rem;
				text-align: center;
				line-height: .4rem;
				margin-top: .2rem;
			}
			#login{
				background: #b2b2b2;
	    		color: #fff;	
			}
			.else-login{
			    border: 1px solid #f22e00;
			    font-size: 15px;
			    color: #f22e00;
			}
			.need-help{
				width: 3.45rem;
				height: .2rem;
				display: flex;
				justify-content: space-between;
				margin-top: .1rem;
			}
		}
		.other-way{
			margin-top: .6rem;
			p{
				width: 100%;
				height: .21rem;
				text-align: center;
			}
			p:before,p:after {
			    content: "";
			    display: inline-block;
			    height: 1px;
			    width: .5rem;
			    margin: .1rem .08rem 0 0;
			    background-color: #999;
			    font: 0/0 arial;
			    vertical-align: top;
			}
			.other-login-way{
				width: 2rem;
				height: .4rem;
				display: flex;
				text-align: center;
				margin: 0.2rem auto;
				justify-content: space-around;
				li{
					width: 0.4rem;
					height: 0.4rem;
					a{
						display: inline-block;
						height: 100%;
						width: 100%;
						img{
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>