
<template>
    <div class="app-position">
       
       <div class="title">
       	城市切换
       </div>       
       <ul class="global-city-box">
       		<li class="global">
       			{{city}}
       		</li>
       </ul>
       <div class="title">
       		同城覆盖城市
       </div>
       <ul class="city-box">
       		<li class="city" @click='changeCity(hot)' v-for='(hot,i) in hots'>
       			{{hot}}
       		</li>
       </ul> 
    </div>
</template> 

<script>
	import {mapState,mapMutations} from 'vuex'
    export default {
        name:'app-position',
        data:function(){
            return {
            	 hots:[
            	 '北京','成都','青岛','西安','郑州','石家庄','平顶山','上海',
            	 '德阳','邯郸','邢台','秦皇岛','衡水','沧州','承德','唐山',
            	 '开封','驻马店','安阳','新乡','廊坊','保定','宝鸡'
            	 ]
            }
        },
        computed:{
        	...mapState(['city'])
        },
        methods:{
        	...mapMutations(['getPosition']),
        	changeCity(city){
        		this.getPosition(city)
        		//跳转回main
        		this.$router.replace({name:'main'})
        	}
        }
    }
</script>
<style lang="scss" scoped>
	.app-position{
		width: 100%;
		position: fixed;
		top: .4rem;
		left: 0;
		z-index: 9999;
		background: rgba(255,255,255,0.9);
		
	    .title{
		    font-size: 14px;
		    line-height: 40px;
		    color: #999;
		    clear: both;
		    padding-left: .1rem;
	    }
	    .global-city-box{
	    	width: 100%;
	    	height: .3rem;
	    	
	    }
	    .global{
	    	width: .72rem;
	    	height: .3rem;
	    	background: #fff;
		    margin-left: .1rem;
	    	text-align: center;
	    	line-height: .3rem;
	    }
		.city-box{
			width: 100%;
			height: 2.4rem;
		    margin-left: .1rem;
		}
		.city{
			height: .3rem;
			padding: .1rem .22rem;
			/*width: .75rem;*/
			text-align: center;
			/*line-height: .3rem;*/
			background: #fff;
			float: left;
			margin:0 .15rem 0.1rem 0;
		}
    }
</style>
