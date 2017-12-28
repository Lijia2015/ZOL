<template>
	<div class="app-main content-box">
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
	
	import AppFooter from './footer/AppFooter'
	
	export default{
		name:'app-main',
		components:{AppFooter}
	}
</script>

<style lang="scss">
	
	
</style>