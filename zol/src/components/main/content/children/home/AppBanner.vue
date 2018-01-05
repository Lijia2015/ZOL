<template>
	
	<div class="app-banner">
		<div class="banner-container swiper-container clearfix">
		    <div class="swiper-wrapper banner">
		    	<div :key='banner.id' class="swiper-slide" v-for="banner in banners">
		    		<img :src="banner.imgUrl"/>
		    	</div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
		<div class="navs-container clearfix">
			<div class="nav-item" v-for="nav in navs">
				<img :src="nav.imgUrl"/>
				<span>{{nav.name}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper';
	import axios from 'axios'
	export default {
		name:"app-banner",
		data(){
			return {
				banners:[],
				navs:[],
			};
		},
		methods:{
			getData(){
				
				let that = this;
				axios.get('/static/JSONS/home.json').then((res)=>{
					
					that.banners = res.data.data.banners;
					that.navs = res.data.data.navs;
					console.log(res)
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
		},
	    mounted(){
			this.getData();
		},
	}
</script>

<style lang="scss">
	.swiper-pagination-bullet{
		opacity: 1;
		background:#fff;
	}
	.swiper-pagination-bullet-active {
		background:red;
	}
	.banner{
		img{
			width: 100%;
		}
	}
	
	.navs-container{
		display: flex;
		flex-wrap: wrap;
		.nav-item{
			padding: 0.15rem 0;
			width: 25%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			img{
				width: 0.4rem;
			}
			span{
				color: #333;
				font-size: 0.12rem;
				padding-top: 0.02rem;
			}
		}
	}
	
	
</style>