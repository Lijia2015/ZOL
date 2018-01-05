<template>
  <div class="app-section section">
     <div class="section-one">
     	<a class="section-item">
     		<span class="tuangou"></span>
     		<p>团购</p>
     	</a>
     	<a class="section-item">
            <span></span>
            <p>Z智选</p>
        </a>
        <a class="section-item">
            <span></span>
            <p>维修</p>
        </a>
        <a class="section-item">
            <span></span>
            <p>领卷</p>
        </a>
     </div>
     <div class="section-one">
        <a class="section-item">
            <span></span>
            <p>手机</p>
        </a>
        <a class="section-item">
            <span></span>
            <p>电脑</p>
        </a>
        <a class="section-item">
            <span></span>
            <p>DIV</p>
        </a>
        <a class="section-item">
            <span></span>
            <p>相机</p>
        </a>
     </div>
     
  </div>
</template>

<script>
	
	export default {
	    name:"app-section",
	    data:function(){
	        return {
	        }
	    },
	}
</script>
<style lang="scss" scoped>
	.section{
		width: 100%;
		height: 1.72rem;
		.section-one{
			width: 100%;
			height: .82rem;
			display: flex;
			.section-item{
			  display: flex;
				height: 100%;
				width: .94rem;
				background: #fff;
				flex-direction: column;
			  align-items: center;
			  justify-content: center;
				span{
					display: block;
					width:.4rem;
					height: .4rem;
					border-radius: 50%;
					background:yellow;
				}
				p{
				    padding: .02rem;
				}
			}
		}
		a{
    color: #666;
    }
    .tuangou{
    }
	}
</style>