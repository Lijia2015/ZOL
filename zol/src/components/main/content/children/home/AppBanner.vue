<template>
	<div class="app-banner swiper-container">
		
	    <div class="swiper-wrapper banner">
	    	<div class="swiper-slide"><img src="http://i4.mercrt.fd.zol-img.com.cn/g5/M00/07/07/ChMkJ1o8bp6IHLmvAAKnHhxEBlgAAjYfwMiHLkAAqc2104.jpg"/></div>
	        <div class="swiper-slide"><img src="http://i3.mercrt.fd.zol-img.com.cn/g5/M00/08/0C/ChMkJlpAX2WIfiNCAAIHYHjj0mQAAjdvQJmDBQAAgd4253.jpg"/></div>
	        <div class="swiper-slide"><img src="http://i2.mercrt.fd.zol-img.com.cn/g5/M00/02/0E/ChMkJ1ovvsWIUxD6AAJROjQ_kxoAAjGSANBOvEAAlFS768.jpg"/></div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
	    
	</div>
</template>
<script>
	import Swiper from 'swiper' 
	export default {
		name:"app-banner",
		
		mounted(){
	    	new Swiper('.app-banner',{
				loop:true,
				autoplay: {
					disableOnInteraction: false,
				},
				pagination:{
				    el: '.swiper-pagination',
				    clickable :true,
				},
			})
	    }
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
			height: 1.75rem;
		}
	}
	
</style>