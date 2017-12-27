<template>
	<div class="app-main">
		<app-header></app-header>
		<app-content></app-content>
		<app-footer></app-footer>
	</div>
</template>

<script>
	
	import AppHeader from '../header/AppHeader'
	import AppContent from '../content/AppContent'
	import AppFooter from '../footer/AppFooter'
	
	export default{
		name:'app-main',
		components:{
			AppHeader,
			AppContent,
			AppFooter
		},
	}
</script>

<style lang="scss">
	
	
</style>