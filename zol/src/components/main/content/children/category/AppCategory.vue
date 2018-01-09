<template>
	<div class="app-category main-box">
		<header>
			<div @click="back" class="header-back yo-ico">&#xf07d;</div>
			<p>全部分类</p>
		</header>
	</div>
</template>

<script>
	export default{
		name:"app-category",
		props:["back"]
	}
</script>


<style lang="scss" scoped>

	header{
		width: 100%;
		height: .42rem;
		background: #f9f9f9;
		text-align: center;
		line-height: .4rem;
		color: #333;
		font-size: 14px;
		.header-back{
			position: absolute;
			display: block;
			width: .4rem;
			height: .4rem;
			font-size: 18px;
			opacity: .7;
		}
	} 
</style>