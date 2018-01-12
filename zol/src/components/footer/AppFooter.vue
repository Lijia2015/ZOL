<template>
	<div class="app-footer" v-if="footerShow">
		<div  class="foot-nav" @click="changeNav('home')" :class="[navType=='home'?'foot-cur':'']">
			<i class="yo-ico">&#xe640;</i>
			<span>首页</span>
		</div >
		<div  class="foot-nav"@click="changeNav('category')" :class="[navType=='category'?'foot-cur':'']">
			<i class="yo-ico">&#xe600;</i>
			<span>分类</span>
		</div>
		
		<div class='foot-nav' @click="isLogin('car')" :class="[navType=='car'?'foot-cur':'']">
			<i class="yo-ico">&#xe621;</i>
			<span>购物车</span>
		</div>
		
		<div class='foot-nav' @click="isLogin('mine')" :class="[navType=='mine'?'foot-cur':'']">
			<i class="yo-ico">&#xe68f;</i>
			<span>我的</span>
		</div>
   </div>
</template>

<script>
	
	import {mapState} from 'vuex'
	
	export default {
		name:"app-footer",
		data(){
			return{
				type:'home',
				navs:[
					{id:1,name:'首页',path:'home'},
					{id:2,name:'分类',path:'category'},
					{id:3,name:'购物车',path:'car'},
					{id:4,name:'我的',path:'mine'},
				],
			}
		},
		computed:{
			...mapState(['user_info','footerShow','navType'])
		},
		methods:{
			changeNav(name){
				this.$store.commit('changeNavType',name)
				this.$router.push(name)
			},
			isLogin(name){
				
				if(!this.user_info){
					this.$store.commit('navHide')
					this.$router.push('login')
				}else {
					this.$store.commit('changeNavType',name)
					this.$router.push(name)
				}
			},
			
		},
	}
</script>

<style lang="scss">
	.app-footer {
	    height: 0.49rem;
	    width: 100%;
	    border-top: solid 1px #E0E0E0;
	    background: rgba(255,255,255,0.8);
	    position: fixed;
	    left: 0;
	    bottom: 0;
	    display: flex;
	    justify-content:space-around;
	    align-items:center;
	    .foot-nav {
	        color: #666;
	        display: flex;
	        flex-direction:column;
	        align-items:center;
	        i {
	            font-size: 0.18rem;
	        }
	        span {
	            font-size: 0.12rem;
	        }
	    }
	    .foot-cur {
	        color: #ce1a1b;
	    }
	}
</style>