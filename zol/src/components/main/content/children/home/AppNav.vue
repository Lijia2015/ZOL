<template>
  <div class="app-nav clearfix">
     <!--精选好店-->
     <div class="good-stores category-content clearfix">
     		<header>
     			<div>
     				精选好店
     			</div>
     			<a :href="storesLink">更多 ></a>
     		</header>
     		<div class="store-container clearfix">
     			<div class="store-item clearfix" v-for="store in stores">
     				<a :href="store.link">
     					<img :src="store.imgUrl">
     				</a>
     				<div class="info">
							  <span>{{store.name}}</span>
							  <p>
							  	<a :href="store.address">查看地址 ></a>
							  </p>  
     				</div>
     			</div>
     		</div>
     </div>
     
     <!--身边好物-->
     <div class="near-goods category-content clearfix">
     		<header>
     			身边好物<span>身边的好物就在这里</span>
     		</header>
     		<div class="goods-container clearfix">
     			<div class="goods-item" v-for="goods in nearGoods">
     				
     				<a :href="'http://m.zol.com/index.php?c=Shop_Detail&goodsId='+goods.id">
     					<img :src="goods.imgUrl"/>
     					<span>{{goods.name}}</span>
     					<span class="desc">{{goods.desc}}</span>
     					<span><button>去看看</button></span>
     				</a>
     			</div>
     		</div>
     </div>
     
     <!--团购-->
     <div class="group-goods category-content clearfix">
     	<header>
     		<div>
     				团购
     		</div>
     		<a :href="tuanLink">更多 ></a>
     	</header>
     	<div class="recommend clearfix">
     		<a :href="recommend.link">
     			<img :src="recommend.imgUrl"/>
     		</a>
     		<span>{{recommend.node}}</span>
     	</div>
     	<div class="group-container clearfix">
     		
     		<a :href="group.link" v-for="group in groupShops">
     			<div class="group-item clearfix">
     				<img :src="group.imgUrl"/>
     			</div>
     			<div class="price">
     				<span>￥{{group.curPrice}}</span>
     				<span class="old">￥{{group.oldPrice}}</span>
     			</div>
     			
     		</a>
     		
     	</div>
     </div>
     
     <!--同城购-->
     <div class="city-shopping category-content clearfix">
     	<header>同城购</header>
     	<div class="cnv">
     		<p>
     			<img :src="cityShop.storeIcon"/>
     			<span>{{cityShop.storeName}}</span>
     		</p>
     		
     		<a :href="cityShop.inStoreLink">更多 ></a>
     	</div>
     	<div class="img-container clearfix">
     		<a :href="item.link" v-for="item in cityItems">
     			<img :src="item.imgUrl"/>
     		</a>
     	</div>
     	<div class="good-container clearfix">
     		<a :href="good.link" v-for="good in goods">
     			<div class="good-item clearfix" >
	     			<img :src="good.imgUrl"/>
	     			<span>{{good.name}}</span>
	     			<div class="price">￥{{good.price}}</div>
	     		</div>
     		</a>
     		
     	</div>
     </div>
     
     <!--z智选-->
     <div class="mock-content category-content clearfix">
     	<header>Z智选</header>
     	<div class="mock-tip clearfix">
     		<a :href="tipPic.link">
     			<img :src="tipPic.imgUrl"/>
     		</a>
     	</div>
     	<div class="mock-container clearfix">
     		<div v-for="select in selects" :class="[select.sign?'sign':'']">
     			<a :href="select.link">
	     			<img :src="select.imgUrl"/>
	     		</a>
     		</div>
     		
     	</div>
     </div>
     
     <!--品牌精选-->
     <div class="brand-content category-content clearfix">
     	<header>品牌精选</header>
     </div>
  </div>
</template>

<script>
	import axios from 'axios'
	export default {
	    name:"app-nav",
	    data:function(){
        return {
        	stores:[],
        	storesLink:'',
        	nearGoods:[],
        	tuanLink:"",
        	groupShops:[],
        	recommend:{},
        	cityShop:{},
        	cityItems:[],
        	goods:[],
        	tipPic:{},
        	selects:{},
        	barands:[],
        	bTipPic:{},
        
        }
    },
	    methods:{
        getData(){
            let that = this
            axios.get('/static/JSONS/GoodSAS.json').then((res)=>{
        
                console.log(res)
                //精选好店
                that.stores = res.data.data.stores
                that.storesLink = res.data.data.storesLink
                
                //身边好物
                that.nearGoods = res.data.data.goods
                
                //团购
                that.tuanLink = res.data.data.tuanLink
                that.recommend = res.data.data.recommend
                that.groupShops = res.data.data.groupShop
                
                //同城购
                that.cityShop = res.data.data.cityShop
                that.cityItems = res.data.data.cityShop.goodImgs
                that.goods = res.data.data.cityShop.goods
                
                //Z智选
                that.tipPic = res.data.data.mockSelect.tipPic
                that.selects = res.data.data.mockSelect.selects
                
                //品牌精选
                that.barands = res.data.data.brandSelect.barands
                that.bTipPic = res.data.databrandSelect.bTipPic
                
            }).catch((err)=>{
            	
            	console.log(err)
            	
            })
        },
    },
    created(){
        this.getData()
    },
	}
</script>
<style lang="scss" scoped>
	
	.category-content{
		border-top: solid 0.1rem #f5f5f5;
		padding: 0 0.1rem 0.1rem;
	}
	header{
	
		height: 0.4rem;
		line-height: 0.4rem;
		color: #333;
		font-size: 0.16rem;
		a{
			font-size: 0.12rem;
			color: #7e7e7e;
		}
		span{
			font-size: 0.12rem;
			color: #666;
			padding-left: 0.05rem;
		}
	}
	.good-stores{
		
		header{
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.store-container{
			display: flex;
			align-items: center;
			.store-item{
				width: 50%;
				display:flex;
				img{
					width: 0.8rem;
				}
				.info{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					span{
						font-size: 0.13rem;
						color: #333;
					}
					p{
						a{
							color: #999;
							font-size: 0.12rem;
						}
					}
				}
			}
		}
	}
	
	.near-goods{
		.goods-container{
			display: flex;
			.goods-item{
				width: 25%;
				display: flex;
				justify-content:center;
				flex-direction: column;
				align-items: center;
				font-size:0.12rem;
				a{
					color: #333;
				}
				img{
					width: 0.8rem;
				}
				span{
					display: block;
					width: 0.8rem;
					height: 0.2rem;
					line-height: 0.2rem;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					text-align: center;
					button{
						height: 100%;
						width: 0.55rem;
						border: #00FF1E none;
						background:#ce1a1b;
						color: white;
						border-radius: 3px;
					}
				}
				.desc{
					color: #ce1a1b;
					height: 0.24rem;
					line-height: 0.24rem;
				}
			}
		}
	}
	
	.group-goods{
		header{
			position:relative;
			div{
				text-align: center;
			}
			a{
				display: inline-block;
				position: absolute;
				top: 0;
				right: 0;
			}
		}
		.recommend{
			position: relative;
			img{
				width: 100%;
			}
			span{
				position: absolute;
				left: 0;
				top: 0.05rem;
				background: rgba(0,0,0,0.5);
				display: inline-block;
				height: 0.2rem;
				padding: 0 0.15rem;
				color: white;
				border-top-right-radius: 0.1rem;
				border-bottom-right-radius: 0.1rem;
			}
		}
		.group-container{
			display: flex;
			overflow-x: scroll;
			a{
				color: white;
				display: inline-block;
				position:relative;
				.group-item{
					display: flex;
					align-items:center;
					height:1rem;
					width: 1rem;
					margin-right:2px;
					img{
						width: 100%;
					}
				}
				.price{
					font-size: 0.12rem;
					line-height: 0.2rem;
					width: 1rem;
					height: 0.2rem;
					background: rgba(0,0,0,0.7);
					position: absolute;
					left: 0;
					bottom: 0;
					span{
						padding-left: 0.05rem;
					}
					.old{
						color: #999;
						text-decoration: line-through;
					}
				}
			}
			
		}
	}
	
	.city-shopping{
		header{
			text-align: center;
		}
		.cnv{
			height: 0.4rem;
			border-top: solid 1px #ebebeb;
			line-height: 0.4rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-content: center;
			p{
				img{
					width: 0.2rem;
				}
			}
			a{
				font-size: 0.12rem;
				color: #7e7e7e;
			}
		}
		.img-container{
			height: 1.115rem;
			display: flex;
			overflow-x: scroll;
			align-items: center;
			a{
				margin-right:2px;
				img{
					height: 1.115rem;
				}
			}
			
		}
		.good-container{
			display: flex;
			overflow-x: scroll;
			a{
				color: #333;
				display:inline-block;
				width: 25%;
				.good-item{
					width:100%;
					display:flex;
					flex-direction: column;
					align-items: center;
					img{
						height: 0.85rem;
					}
					span{
						font-size: 0.12rem;
						display: inline-block;
						width: 100%;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					.price{
						
						padding-top: 0.15rem;
						padding-bottom: 0.05rem;
						color: #ce1a1b;
						font-size: 0.17rem;
						font-weight: bold;
					}
				}
			}
		}
	}
	
	.mock-content{
		header{
			text-align: center;
		}
		.mock-tip{
			img{
				width: 100%;
			}
			
		}
		.mock-container{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			div{
				width: 50%;
				img{
					width: 100%;
				}
			}
			.sign{
				width: 25%;
			}
			
		}
	}
	
	.brand-content{
		header{
			text-align: center;
		}
	}
	
</style>