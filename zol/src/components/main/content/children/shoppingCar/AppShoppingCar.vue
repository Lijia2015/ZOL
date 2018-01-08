<template>
	<div class="app-shopCar main-box">
		<header>
			购物车（0）
		</header>
		<div class="caption" @click="mainShow">
			<p><i class="zhu"></i>购买前，我们推荐您阅读</p>
			<span v-if="!isShow" class="yo-ico">&#xf031;</span>
			<span v-else class="yo-ico">&#xf027;</span>
			<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
				<div class="mask" v-if="isShow">
					<div class="main" >
						<ol>
							<li>1.在您购买过程中,系统会给您填写的手机号发送确认短信,以方便您查询订单以及付款,请您务必保留。</li>
							<li>2.您的货款将打到中关村商城账户，在您确认收货后货款才会打到商家账户，保障消费者权益最大化。</li>
							<li>3.自商家发货起的10天内，如您收到商品并确认无误请您确认收货，商家发货超过10天如您未确认收货，货款将打到商家账户。</li>
						</ol>
						<p>如有疑问，请致电中关村商城官方客服电话：</p>
						<a href="tel:400-688-1999" class="tel">400-688-1999</a>
					</div>
				</div>
			</transition>
		</div>
		<div class="shopping-cart-empty">
			<p>
				购物车空空如也，快去逛逛吧！
				<i class="car-icon yo-ico">&#xe621;</i>
			</p>
			<a href=""></a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'app-shopCar',
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			mainShow(){
				this.isShow = !this.isShow
			}
		}
	}
</script>

<style lang="scss" scoped>

header{
	width: 100%;
	height: .44rem;
	background: #ededed;
	color: #333;
	text-align: center;
	line-height: .44rem;
	font-size: 16px;
}

.caption {
    height: 44px;
    width: 100%;
    line-height: 44px;
    font-size: 14px;
    color: #1f94f5;
    text-align: center;
    border-top:1px solid #bfbfbf;
    border-bottom: 1px solid #ddd;
    display: flex;
    background: #fff;
    position: relative;
    >p{
    	width: 3.5rem;
    	height: 100%;
	    &:before{
		    margin: 12px 8px 0 0;
		    content: "\6ce8";
		    width: 16px;
		    height: 16px;
		    line-height: 16px;
		    display: inline-block;
		    vertical-align: top;
		    font-size: 11px;
		    border-radius: 9px;
		    color: #1f94f5;
		    border: 1px solid #2497f5;
	    }
    }
    span{
    	color: #ccc;
    }
    
}
.mask{
	position: absolute;
    left: 0;
    top: 44px;
    width: 3.75rem;
    height: 5.3rem;
    background: rgba(0,0,0,0.6);
    z-index: 999;
}
.main {
    position: absolute;
    left: 0;
    top: 0;
    width: 3.75rem;
    height: 3.17rem;
    background: #fff;
    z-index: 999;
    text-align: left;
    color: #666;
    padding-left: 15px;
    ol{
    	display:flex;
		flex-direction: column;
    	li{
    		position: relative;
    		width: 3.35rem;
		    margin-top: 5px;
		    font-size: 14px;
		    line-height: 20px;
		    text-align: left;
    		color: #666;
    	}
    }
    .tel {
	    margin-top: 10px;
	    width: 3.35rem;
	    height: 40px;
	    line-height: 40px;
	    text-align: center;
	    display: block;
	    font-size: 14px;
	    border-radius: 2px;
	    color: #fff;
	    background: #f60;
	}
}
.shopping-cart-empty {
    padding: 86px 0 0;
    p{
	    position: relative;
	    padding: 117px 0 0;
	    font-size: 14px;
	    line-height: 40px;
	    color: #999;
	    text-align: center;
	    .car-icon{
	    	position: absolute;
	    	display: block;
		    top: 0;
		    left: 50%;
		    margin: 0 0 0 -50px;
		    width: 1rem;
		    height: 1rem;
		    text-align: center;
		    line-height: 1rem;
		    font-size: 50px;
		    opacity: .7;
		    border-radius: 50%;
		    background: #f7f7f7;
	    }
	    /*.car-icon{
    	    position: absolute;
		    top: 25px;
		    left: 50%;
		    margin: 0 0 0 -32px;
		    content: "";
		    display: block;
		    width: 56px;
		    height: 56px;
		    background-size: 56px 56px;
		    background: yellow;
	    }*/
	}
}
</style>