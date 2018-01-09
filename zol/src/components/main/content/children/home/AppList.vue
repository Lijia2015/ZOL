<template>
	<div class="app-list main-box">
		<header>
			精选优品
		</header>
		<div class="app-nav clearfix">
			<div class="nav-item" :key='nav.id' v-for="nav in navs" @click="changeType(nav.id)" :class="[type==nav.id?'cur-item':'']">
				{{nav.name}}
			</div>
		</div>
		<div class="list-content clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			<div class="item" v-for="good in goods">
				<a :href="good.goods_url">
					<img :src="good.goods_pic"/>
					<p>
						<span v-if="good.tag">{{good.tag}}</span>
						{{good.goods_name}}
					</p>
					<p class="price">￥{{good.goods_price}}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	
	//1:数据请求
	import axios from 'axios';
	
	//加载提示
	import { Indicator } from 'mint-ui'
	
	//加载结果提示
	import { Toast } from 'mint-ui'
	
	export default{
		name:'app-list',
		data(){
			return {
				navs:[
					{name:'手机',id:1},
					{name:'电脑',id:2},
					{name:'相机',id:3},
					{name:'DIY',id:4}
				],
				goods:[],
				page:1,
				type:1,
				isOver:false,
				loading:false,
			};
		},
		methods:{
			dataLoad(){
				
				Indicator.open({
				  text: '客官请稍等...',
				  spinnerType: 'triple-bounce'
				});
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
					
					console.log(res.data)
					Indicator.close();
					that.goods = that.goods.concat(res.data.info.data);
					that.loading = false;
					
					if(res.data.isEnd == '1'){
						that.isOver = true
						
						Toast({
						  message: '没有更多数据',
						  position:'bottom'
						});
						
						return false
					}
					
					that.page++
					
				}).catch(function(error){
					Indicator.close();
					console.log(error)
					
				})
				
			},
			changeType(type){
				
				this.goods = [];
				this.type = type;
				this.page = 1;
				this.loading = false;
				this.isOver = false;
				this.dataLoad();
			},
			loadMore(){
				if(this.isOver){
	        	  return false;
	        	}else{
	        		this.loading = false;
					this.dataLoad();
	        	}
				
			},
		},
	}
</script>

<style lang="scss" scoped>
	
	.app-list{
		border-top: solid 0.1rem #f5f5f5;
		header{
			height: 0.4rem;
			line-height: 0.4rem;
			color: #333;
			font-size: 0.16rem;
			text-align: center;
			border-bottom: solid 1px #f5f5f5;
		}
		.app-nav{
			background: white;
			width: 100%;
			height: 0.45rem;
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
		.list-content{
			display: flex;
			flex-flow: wrap;
			.item{
				width: 50%;
				padding: 0.1rem;
				box-sizing: border-box;
				border: solid 1px #ebebeb;
				img{
					width: 100%;
				}
				p{
					color: #666;
					font-size: 0.12rem;
					width: 100%;
					span{
						border: 1px solid #e40522;
						color: #e40522;
						padding: 0 .05rem;
						
					}
					display: -webkit-box;
		            -webkit-box-orient: vertical;
		            -webkit-line-clamp: 2;
		            overflow: hidden;
				}
				.price{
					color: #e40522;
					font-size: 0.16rem;
					font-weight: bold;
				}
			}
		}
		
	}
	
</style>