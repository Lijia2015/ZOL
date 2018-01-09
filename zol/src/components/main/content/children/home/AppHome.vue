<template>
  <div class="app-home main-box">
     <app-header></app-header>
     <app-banner></app-banner>
     <app-nav></app-nav>
     <app-list></app-list>
  </div>
</template>

<script>
	
	import AppHeader from './AppHeader.vue'
	import AppBanner from './AppBanner.vue'
	import AppNav from './AppNav.vue'
	import AppList from './AppList.vue'
	
	export default {
	    name:"app-home",
	    components:{
	    	AppHeader,AppBanner,AppNav,AppList
	    },
	}
</script>
<style>
	
</style>