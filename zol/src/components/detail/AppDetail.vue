<template>
	<div class="app-detail main-box">
		<header>
		<i @click="backHome" class="header-back yo-ico">
			&#xf07d;
		</i>
		</header>
	</div>
</template>

<script>
	
	import {mapState} from 'vuex'
	
	export default{
		name:'app-detail',
		computed:{
			...mapState(['user_info','footerShow'])
		},
		methods:{
			
			backHome(){
				this.$router.push('home')
				this.$store.commit('navShow')
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
	}
</style>