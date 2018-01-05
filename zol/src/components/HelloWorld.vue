<template>
	<div class="app-home main-box">
		
		<div class="app-nav">
			<div class="nav-item" :key='nav.id' v-for="nav in navs" @click="changeType(nav.id)" :class="[type==nav.id?'cur-item':'']">
				{{nav.name}}
			</div>
		</div>
		
	</div>
</template>

<script>
	
	//1:数据请求
	import axios from 'axios';
	
	export default{
		name:'app-home',
		data(){
			return {
				navs:[
					{name:'手机',id:1},
					{name:'电脑',id:2},
					{name:'相机',id:3},
					{name:'DIY',id:4}
				],
				page:1,
				type:1,
			};
		},
		methods:{
			dataLoad(){
				
				var that = this;
				
				axios.defaults.withCredentials = true;//传输cookie
				axios.get('http://localhost:8080/zol/index.php',{
					
					params:{
						c:'Shop_IndexV2',
						a:'AjaxGetGoods',
						pos:that.type,
						page:that.page
					}
					
				}).then(function(res){
					
					console.log(res.data.info)
					
				}).catch(function(error){
					
					console.log(error)
					
				})
				
			},
			changeType(type){
				
				this.type = type;
				this.page = 1;
				
				this.dataLoad();
			}
		},
		created(){
			
			this.dataLoad();
			
		}
	}
</script>

<style lang="scss" scoped>
	
	.app-home{
		
		.app-nav{
			height: 0.45rem;
			display: flex;
			.nav-item{
				width: 25%;
				text-align: center;
				line-height: 0.45rem;
				border-bottom: solid 1px #ebebeb;
			}
			.cur-item{
				box-sizing: border-box;
				border-width: 3px;
				border-color: #ce1a1b;
			}
		}
		
	}
	
</style>