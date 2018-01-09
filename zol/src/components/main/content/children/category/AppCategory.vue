<template>
	<div class="app-category main-box">
		<header>
			<div @click="back" class="header-back yo-ico">&#xf07d;</div>
			<p>全部分类</p>
		</header>
		<div class="category-container clearfix">
			<div class="nav-content">
				<div class="item" v-for="nav in navs" @click="changeType(nav.type)" :class="[nav.type==type?'curNav':'']">
					{{nav.category}}
				</div>
			</div>
			<div class="item-content clearfix" v-for="nav in navs" v-if="nav.type==type">
				<div  class="item-list clearfix" v-for="cate in nav.cates">
					<h3>{{cate.name}}</h3>
					<div class="cate-content clearfix">
						<div class="cate-item clearfix" v-for="item in cate.items">
							<a :href="item.link">
								<img :src="item.imgUrl"/>
								<p>{{item.name}}</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import axios from 'axios'
	
	export default{
		name:"app-category",
		props:["back"],
		data(){
			return{
				navs:[],
				type:'hot'
			};
		},
		methods:{
			
			getData(){
				let that = this;
				axios.get("/static/JSONS/category.json").then((res)=>{
					
					that.navs = res.data.data;
					
					console.log(res.data.data);
					
				}).catch((err)=>{
					console.log(err);
				})
			},
			changeType(type){
				
				this.type = type;
			}
			
		},
		mounted(){
			
			this.getData()
		}
		
	}
</script>


<style lang="scss" scoped>
	
	.main-box{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		header{
			width: 100%;
			height: .42rem;
			background: #f9f9f9;
			text-align: center;
			line-height: .4rem;
			color: #333;
			font-size: 14px;
			border-bottom: solid 1px #ebebeb;
			.header-back{
				position: absolute;
				display: block;
				width: .4rem;
				height: .4rem;
				font-size: 18px;
				opacity: .7;
			}
		}
		.category-container{
			flex: 1;
			display: flex;
			.nav-content{
				width: 0.85rem;
				.item{
					font-size: 0.13rem;
					font-weight: 900;
					text-align: center;
					line-height: 0.49rem;
					height: 0.49rem;
					background-color: #f9f9f9;
    				border-right: 1px solid #e0e0e0;
   					border-bottom: 1px solid #e0e0e0;
				}
				.curNav{
					background-color: #fff;
    				border-right: 1px solid #fff;
    				color: #ce1a1b;
				}
			}
			.item-content{
				flex: 1;
				padding: 0.15rem 0.05rem 0 0.1rem;
				overflow-y: scroll;
				.item-list{
					h3{
						font-weight: normal;
						font-size: 0.12rem;
						color: #999;
						padding-bottom: 0.05rem;
					}
					.cate-content{
						width: 100%;
						display: flex;
						flex-flow: wrap;
						align-items: center;
						padding-bottom: 0.2rem;
						.cate-item{
							width:33%;
							display:flex;
							flex-direction: column;
							align-items: center;
							padding-bottom:0.05rem;
							img{
								width: 100%;
							}
							p{
								color: #333;
								font-weight: 900;
								font-size: 0.13rem;
								text-align: center;
								width: 100%;
								white-space: nowrap;
							    overflow: hidden;
							    text-overflow: ellipsis;
							}
						}
					}
				}
			}
		}
	}
	
	 
</style>