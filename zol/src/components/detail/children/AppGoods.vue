<template>
	<div class="app-goods det-box clearfix">
		
		<div class="banner-container swiper-container clearfix">
		    <div class="swiper-wrapper banner">
		    	<div class="swiper-slide" v-for="banner in banners">
		    		<img :src="banner.imgUrl"/>
		    	</div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
		<div class="intro clearfix">
			<p class="name">{{name}}</p>
			<p class="desc">{{desc}}</p>
			<p class="price">￥{{price}}</p>
			<p class="detry">
				<span>运费 {{detry}}元</span>
				<span class="sellNum">销量{{sellNum}}件</span>
				<span class="start">发货地：{{start}}</span>
			</p>
		</div>
		<div class="foot">
			<span class="contact">联系卖家</span>
			<span class="yo-ico">&#xe621;</span>
			<span class="car" @click="addCar">加入购物车</span>
			<span class="shop" @click="addCar">立即购买</span>
		</div>
	</div>
</template>

<script>
	
	import Swiper from 'swiper'
	import axios from 'axios'
	import {mapState,mapMutations} from 'vuex'
	
	export default{
		name:'app-goods',
		data(){
			return {
				banners:[],
				name:"",
				desc:"",
				price:0,
				detry:0,
				sellNum:0,
				start:""
			}
		},
		computed:{
			...mapState(['user_info','footerShow','curGoods','shopCars'])
		},
		methods:{
			...mapMutations(['addGoodsNum','reduceGoodsNum']),
			getData(){
				let that = this;
				axios.get('static/JSONS/goods.json').then((res)=>{
					console.log(res)
					that.name = res.data.data.name
					that.desc = res.data.data.desc
					that.banners = res.data.data.banners
					that.price = res.data.data.price
					that.detry = res.data.data.detry
					that.sellNum = res.data.data.sellNum
					that.start = res.data.data.start
					that.$nextTick(function(){
						new Swiper('.banner-container',{
							loop:true,
							autoplay: {
								disableOnInteraction: false,
							},
							pagination:{
							    el: '.swiper-pagination',
							    clickable :true,
							},
						})
					})
					
				}).catch((err)=>{
					console.log(err);
				})
				
			},
			addCar(){
				if(this.user_info == ''){
					alert('客官，您还没有登录')
				}else{
					
					console.log(this.curGoods)
					
					this.$store.commit('addGoodsNum',this.curGoods)
				}
			}
		},
		mounted(){
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
	.app-goods{
		overflow-y: scroll;
		padding-bottom: 0.48rem;
	}
	
	.intro{
		padding-top: 0.1rem;
		font-size: 0.14rem;
		font-weight: bold;
		color: #333;
		border-bottom: solid #f5f5f5 1px;
		p{
			padding:0 0.1rem 0.1rem;
		}
		.desc{
			font-size: 0.14rem;
			color: #999;
			font-weight: bold;
		}
		.price{
			color: #f33;
			font-size: 0.18rem;
			line-height: 0.15rem;
			font-weight: normal;
		}
		.detry{
			color: #999;
			font-size: 0.12rem;
			font-weight: normal;
			.sellNum{
				padding-left: 0.5rem;
			}
			.start{
				float: right;
			}
		}
	}
	
	.foot{
		width: 100%;
		height: 0.48rem;
		border-top: solid #ddd 1px;
		border-bottom: solid #ddd 1px;
		background: #f8f8f8;
		position: fixed;
		z-index: 66;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		align-content: center;
		span{
			box-sizing: border-box;
			text-align: center;
			display: block;
			width: 28%;
			height: 100%;
			line-height: 0.48rem;
		}
		.yo-ico{
			width: 16%;
			font-size: 0.3rem;
			font-weight: bold;
		}
		.contact{
			border-right: solid 1px #ddd;
			color: #666;
			font-size: 0.13rem;
		}
		.car{
			background: #f60;
			font-size: 0.15rem;
			color: #fff;
			font-weight: bold;
		}
		.shop{
			background: #f22d00;
			font-size: 0.15rem;
			color: #fff;
			font-weight: bold;
		}
	}
	
</style>