<template>
  <div class="app-home main-box">
     <app-header></app-header>
     <app-banner></app-banner>
     <app-nav></app-nav>
   	<!--<router-view></router-view>-->
  </div>
</template>

<script>
	import AppHeader from './AppHeader.vue'
	import AppBanner from './AppBanner.vue'
	import AppNav from './AppNav.vue'
	export default {
	    name:"app-home",
	    components:{
	    	AppHeader,AppBanner,AppNav
	    }
	    
	}
</script>
<style>
	
</style>