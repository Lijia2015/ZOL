<template>
	<div class="app-good-car shopBox">
			<div class="shopping-list">
				<div class="shop-title">
					<input  class="goods-radio" type="checkbox" value="">
					<div class="good-name">
                    	迪信通官方旗舰店                                    
					</div>
					<div class="edit">
						编辑
					</div>
				</div>
				<div class="good-content">
					<input  class="goods-radio" type="checkbox" value="">
					<div class="good-detail">
						<div class="good-img">
							<img :src="curGoods.goods_pic"/>
							
						</div>
						<div class="good-item">
							<p class="goog-item-title">
                         {{curGoods.goods_name}}                                              
							</p>
							<p class="good-suit">
                            	黑色行货32GB非合约机官方标配                        
							</p>
							<div class="good-price">
								<span style="color: #f33">￥{{curGoods.goods_price}}</span> 
								<span>x1</span> 
							</div>
						</div>
					</div>
				</div>


				<div class="servies">
					<div class="servies-title">服务:</div>
					<ul>
						<li v-for="(servie,i) in servies" :key="i">{{servie}}</li>
					</ul>
				</div>

				<div class="account">
					<div class="price-total"> 合计：<span style="color:#f33;">￥1099</span></div>
					<div @click="add" class="settlement-btn">去结算  (0件)</div>
				</div>
				
			</div>
		</div>
	
	
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		name : "app-good-car",
		data(){
			return{
				isShow:false,
				servies:[
					'先行赔付','行货保证','无忧退换','发票保障','顺丰包邮','同城三小时送达'
				]
			}
		},
		computed:{
        	...mapState(['curGoods'])
        },
		methods:{
			add(){
				console.log(this.curGoods.goods_name)
			}
		}
	}
</script>

<style lang="scss" scoped> 
	
.shopping-list{
	width: 100%;
	height: 2.4rem;
	border-top: .1rem solid #e6e6e6;
	.shop-title{
		width: 100%;
		height: .46rem;
		display: flex;
		color: #333;
		.goods-radio{
			font-size: 16px;
			width: .18rem;
			height: .18rem;
			margin: .15rem 0 0 .1rem;
		}
		.good-name{
			width: 1.26rem;
			height: 100%;
			line-height: .46rem;
			margin:0 .1rem;	
		}

		.edit{
			width: 1.8rem;
			height: 100%;
			text-align: right;
			line-height: .46rem;
		}
	}
	
	.good-content{
		width: 100%;
		height: 1rem;
		display: flex;
		background: #f7f7f7;
		border-bottom: 2px solid #fff;
		img{
			width: 100%;
			height: 100%;
		}
		.goods-radio{
			font-size: 16px;
			width: .18rem;
			height: .18rem;
			margin: .4rem 0 0 .1rem;
		}
		.good-detail{
			width: 3.41rem;
			height: 100%;
			display: flex;
			.good-img{
				width: .8rem;
				height: .8rem;
				background: blue;
				margin:0 .1rem;
			}
			.good-item{
				width: 2.51rem;
				height: 100%;
				.good-price{
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
			}
		}
	}
	.servies{
		display: flex;
		width: 100%;
		height: .42rem;
		background: #f7f7f7;
		
		.servies-title{
			width: .4rem;
			height: 100%;
			line-height: .42rem;
			margin: 0 .1rem;
		}
		ul{
			width: 3rem;
			height: 100%;
			
			li{
				font-size: 12px;
				height: .16rem;
				float: left;
				margin-right: .275rem;
			}
		}
	}
	.account{
		width: 100%;
		height: .46rem;
		display: flex;
		font-size: 12px;
		justify-content: space-between;
		align-items: center;
		.price-total{
			height: 100%;
			width: .8rem;
			text-align: center;
			line-height: .46rem;
			margin-left:.1rem; 
		}
		.settlement-btn{
			font-size: 14px;
			height: .36rem;
			width: 1.2rem;
			background: #b3b3b3;
			border-radius: 2px;
			color: #fff;
			text-align: center;
			line-height: .36rem;
			margin-right: .1rem;
		}
	}
}
</style>