<template>
	<div class="app-mine my main-box">
		<header>
			<div @click="back" class="header-back yo-ico">
				&#xf07d;
			</div>
			<p>Z商城买家中心</p>
			<div class="out">
				退出
			</div>
		</header>
		<div class="pre-head">
			<div class="pre">
				<div class="head-img">
					<img src="https://icon.zol-img.com.cn/group/detail_images/zoler.jpg">
				</div>
				<p class="user">
					{{JSON.parse(user_info).user_name}}
				</p>
				
			</div>
			<div class="acount">
				<p>账号管理</p>
				<i class="yo-ico">&#xf07f;</i>
			</div>
		</div>
		<div class="my-order">
			<p class="order">我的订单</p>
		</div>
		<div class="nav">
			<div class="nav-item">
				<i class="yo-ico">
					&#xe665;
				</i>
				<a>待付款</a>
			</div>
			<div class="nav-item">
				<i class="yo-ico">
					&#xe629;
				</i>
				<a>待发货</a>
			</div>
			<div class="nav-item">
				<i class="yo-ico">
					&#xe670;
				</i>
				<a>待收货</a>
			</div>
			<div class="nav-item">
				<i class="yo-ico">
					&#xe632;
				</i>
				<a>待评价</a>
			</div>
			<div class="nav-item">
				<i class="yo-ico">
					&#xe61b;
				</i>
				<a>
				全部订单<span class="icon-right yo-ico">
					&#xf07f;
				</span>
					
				</a>
			</div>
		</div>
		
		<div class="enter">
			<a v-for="enter in enters" class="enter-item">
				{{enter}}
				<span class="enter-icon yo-ico">
					&#xf07f;
				</span>
			</a>
		</div>
	</div>
</template>

<script>

	import {mapState} from 'vuex'
	export default{
		name:'app-mine',
		data(){
			return{
				enters:["退款/售后","收货地址管理","我的优惠券","客服电话：400-688-1999"]
			}
		},
		props:["back"],
		computed:{
			...mapState(['user_info'])
		},
	}
</script>

<style lang="scss" scoped>
	header{
		width: 100%;
		height: .46rem;
		border-top: 1px solid #b2b2b2;
    	background: #cd2934;
    	text-align: center;
    	color: #fff;
    	font-size: 18px;
    	position: relative;
    	p{
    		line-height: .46rem;
    	}
    	.header-back{
    		position: absolute;
    		width: .46rem;
			height: .45rem;
			line-height: .45rem;
			text-align: left;
			font-size: 22px;
			opacity: .7;
    	}
    	.out{
    		position: absolute;
    		top: 0;
    		right: 0;
    		text-align: center;
    		width: .44rem;
    		font-size: 16px;
    		line-height: .46rem;
    	}
	}
	.pre-head{
		width: 100%;
		height: 1.39rem;
		background: #d5e0f6;
	    background-image: linear-gradient(to top right, #e5ded8,#e5d4da,#d5e0f6);
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    position: relative;
	  .pre{
	      width: .98rem;
	      height: .98rem;
	      display: flex;
	      flex-direction:column ;
	      justify-content: space-around;
	    .head-img{
    	  	margin: 0 auto;
    	    width: .7rem;
    	    height: .7rem;
    	    background: #ebebf4;
        	display:flex;
        	justify-content: center;
        	align-items: center;
        	align-items: center;
    	    img{
        	 width:.6rem; 
        	 height:.6rem;
        	 border-radius: 50%;
    	    }
    	  }
    	  .user{
    	  	width: .97rem;
    	  	height: .16rem;
    	  	text-align: center;
    	  	line-height:.16rem ;
    	  }   
	  }
	  .acount{
	  	width: .72rem;
	  	height: .2rem;
	  	position: absolute;
	  	right: 0;
	  	top: 0;
	  	display: flex;
	  	align-items: center;
	  	padding-top: .2rem;	  
		i{
			display: block;
			width: .1rem;
			height: .15rem;
			text-align: center;
			line-height: .15rem;
			color: #fff;
			margin:0 .01rem;
		}
	  }     
	}
	.my-order{
		width: 100%;
		height: .38rem;
		background: #fff;
		font-size: 14px;
		padding: 0 .1rem;
		.order{
			width: .6rem;
			height: 100%;
			color: #e03f3f;
		    border-bottom: 0.02rem solid #e03f3f;
		    display: flex;
		    justify-content: center;
		    align-items: center;
		}
	}
	.nav{
		width: 100%;
		height: .97rem;
		display: flex;
		border-top: .01rem solid #e6e6e6;
		border-bottom: .1rem solid #e6e6e6;
        align-items: center;
        a{
            font-size:13px ;
            color: #333;
        }
		.nav-item{
			width: .75rem;
			height: .6rem;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			position: relative;
			&:last-child{
				border-left: 1px dashed #e6e6e6;
			}
			i{
				display: block;
				width: .3rem;
				height: .3rem;
				text-align: center;
				line-height: .3rem;
				font-size: 24px;
				opacity: .5;
			}
			.icon-right{
				position: absolute;
				bottom: .08rem;
				right: 0;
				height: .1rem;
				width: .1rem;
				font-size: 12px;
			}
		}
	}
	.enter-item{
		width: 100%;
		height: .44rem;
		background: #fff;
		color: #333;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e6e6e6;
		margin-left: .1rem;
		span{
			height: 100%;
			width: .2rem;
			margin-right: .2rem;
			text-align: right;
			line-height: .44rem;
			color: #ccc;
			font-size: 18px;
		}
	}
</style>