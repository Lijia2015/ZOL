<template>
	<div class="app-cort det-box clearfix">
		<div class="cort-content clearfix">
			<div class="rate-box comment-item">
				<div class="rate-num">
					<span>
						<i>{{rate*100}}</i>%
					</span>
					<span>好评率</span>
				</div>
			</div>
			
			<div :key='cort.id' class="comment-item item" v-for="cort in corts">
				<div class="item-head">
					<div class="content">
						<div class="user">
							<img :src="cort.logo"/>
							<span>{{cort.user}}</span>
						</div>
						<div class="address">{{cort.address}}</div>
					</div>
				</div>
				<div class="content-box">
					<div class="content">
						<p class="msg">{{cort.content}}</p>
						<p>{{cort.time}}</p>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	
	import axios from 'axios'
	
	export default{
		name:'app-cort',
		data(){
			return {
				corts:[],
				rate:0
			};
		},
		methods:{
			getData(){
				let that = this
				
				axios.get('/static/JSONS/comment.json').then((res)=>{
					console.log(res);
					
					that.corts = res.data.data
					that.rate = res.data.rate
					
				}).catch((err)=>{
					console.log(err);
				})
			}
		},
		created(){
			this.getData();
		}
	}
</script>

<style lang="scss" scoped>
	.app-cort{
		overflow-y: scroll;
	}
	.cort-content{
		height: 100%;
		.rate-box{
			height: 0.94rem;
			padding: 0.13rem 0.1rem 0.15rem;
			.rate-num{
				height: 0.54rem;
				width: 0.54rem;
				border: 1px solid #ce1a1b;
    			color: #ce1a1b;
    			border-radius: 50%;
    			display: flex;
    			flex-direction: column;
    			align-items: center;
    			align-content: center;
    			font-size: 0.12rem;
    			i{
    				font-size: 0.18rem;
    				font-weight: bold;
    			}
			}
		}
		.comment-item{
			
			border-bottom: solid 0.1rem #efefef;
		}
		.item{
			.content{
				padding: 0 0.1rem;
			}
			.item-head{
				height: 0.49rem;
				border-bottom: solid 0.01rem #efefef;
				.content{
					display: flex;
					justify-content: space-between;
					align-items: center;
					line-height:0.49rem;
					font-size: 0.13rem;
					.user{
						
						display: flex;
						align-items: center;
						img{
							width: 0.25rem;
							height: 0.25rem;
							border-radius: 50%;
						}
						span{
							padding-left: 0.1rem;
							color: #333;
						}
					}
					.address{
						color: #999;
					}
				}
			}
			.content-box{
				padding: 0.08rem 0;
				.content{
					color: #999;
					font-size: 0.12rem;
				}
				.msg{
					font-size: 0.14rem;
					color: #333;
					font-weight: 500;
					padding-bottom: 0.08rem;
				}
			}
		}
		
	}
</style>