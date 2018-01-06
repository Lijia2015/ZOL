<template>
	<div class="app-main">
		<!--<app-position></app-position>-->
		<router-view :back="back"></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from './footer/AppFooter.vue'
//	import AppPosition from './position/AppPosition.vue'
	export default{
		name:"app-main",
		props:["back"],
		components:{AppFooter}
	}
</script>

<style>
</style>