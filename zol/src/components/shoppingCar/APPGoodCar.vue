<template>
	
	<transition leave-active-class="animated fadeOutLeft">
		<div class="app-good-car shopBox clearfix">
			<div class="shopping-list clearfix">
				<div class="shop-title">
					<div class="tD">
						<input  class="goods-radio" type="checkbox" value="">
						<div class="good-name">
		                    	迪信通官方旗舰店                                    
						</div>
					</div>
					<div class="edit" @click="editGoods(goods)">
							编辑
					</div>
				</div>
				<div class="good-content">
					<div class="goods-radio">
						<input type="checkbox" v-if="!goods.isEdit"/>
						<div v-else class="delBtn" @click="deleGoods(goods)">-</div>
					</div>
					<div class="good-img">
						<img :src="goods.goods_pic"/>
					</div>
					<div class="goods-info">
						<p class="goog-item-title">
	                        {{goods.goods_name}}                                              
						</p>
						<p class="item-PC">
							<span style="color: #f33">￥{{goods.goods_price}}</span> 
							<span>x{{goods.num}}</span>
						</p>
					</div>
				</div>
				<div class="servies">
					<div class="servies-title">服务:</div>
					<ul>
						<li v-for="(servie,i) in servies" :key="i">{{servie}}</li>
					</ul>
				</div>
				<div class="account">
					<div class="price-total"> 合计：<span>￥{{goods.num*goods.goods_price}}</span></div>
					<div @click="add" class="settlement-btn">去结算  ({{goods.num}}件)</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		name : "app-good-car",
		props:['goods'],
		data(){
			return{
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
			},
			editGoods(parmas){
				
				this.$store.commit('editGoodsCar',parmas);
			},
			deleGoods(parmas){
				
				this.$store.commit('removeGoodsCar',parmas);
			}
		}
	}
</script>

<style lang="scss" scoped> 
	
.shopping-list{
	width: 100%;
	border-top: .1rem solid #e6e6e6;
	.shop-title{
		width: 100%;
		height: .46rem;
		display: flex;
		justify-content: space-between;
		color: #333;
		.tD{
			display: flex;
			.goods-radio{
			
				width: 0.18rem;
				height: 0.18rem;
				margin: 0.15rem 0 0 0.1rem;
			}
			.good-name{
				width: 1.26rem;
				height: 100%;
				line-height: .46rem;
				margin:0 .1rem;	
			}
		}
		.edit{
			width: 0.46rem;
			height: 100%;
			text-align: right;
			line-height: .46rem;
			text-align: center;
		}
	}
	
	.good-content{
		height: 1rem;
		width: 100%;
		display: flex;
		align-items: center;
		align-content: center;
		background: #f7f7f7;
		border-bottom: 2px solid #fff;
		.goods-radio{
			height: 0.18rem;
			width: 0.18rem;
			margin-left: 0.1rem;
			margin-right: 0.1rem;
			input{
				width: 0.18rem;
				height: 0.18rem;
			}
			.delBtn{
				width: 0.18rem;
				height: 0.18rem;
				background: #f33;
				color: white;
				border: 0 none;
				text-align: center;
				border-radius: 50%;
				line-height: 0.18rem;
				font-size: 0.16rem;
			}
		}
		.good-img{
			height: 0.8rem;
			width: 0.8rem;
			line-height: 0.8rem;
			img{
				width: 0.6rem;
				height: 0.6rem;
			}
		}
		.goods-info{
			padding: 0 0.1rem;
			height: 0.8rem;
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: space-between;
			p{
				width: 100%;
				display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 2;
			    overflow: hidden;
			}
			.item-PC{
				display: flex;
				justify-content: space-between;
				align-items: center;
				align-content: center;
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
		height: 0.46rem;
		display: flex;
		font-size: 12px;
		justify-content: space-between;
		align-items: center;
		padding: 0.05rem 0.1rem;
		.price-total{
			height: 0.36rem;
			text-align: center;
			line-height: .36rem;
			span{
				color: #f33;
				font-size: 0.14rem;
			}
		}
		.settlement-btn{
			font-size: 14px;
			height: .36rem;
			padding: 0 0.1rem;
			background: #ff6700;
			border-radius: 2px;
			color: #fff;
			text-align: center;
			line-height: .36rem;
		}
	}
}
</style>