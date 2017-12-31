<template>
	<div class="app-login content-box login-box">
		<div class="app-header">
			<router-link to='/' tag='a' class="yo-ico">&#xe600;</router-link>
			<span>手机号快捷登录</span>
			<p></p>
		</div>
		<div class="login-content">
			<button @click="onToLogin">立即登录</button>
		</div>
	</div>
</template>

<script>
	
	export default{
		
		name:'app-login',
		methods:{
			onToLogin(){
				localStorage.user = JSON.stringify({nick:'FamilyLi',user:'15192023675',id:1})
				this.$store.commit('onLogin');//注意，这里的参数应该对应mutations里的事件属性
				
				setTimeout(function(){//登录成功后返回首页面，给以缓冲的时间间隔
					this.$router.push('home')
				}.bind(this),1000)
			}
		},
	}
	
</script>

<style lang="scss">
	.app-header{
		background: #f5f5f5;
	}
	
</style>