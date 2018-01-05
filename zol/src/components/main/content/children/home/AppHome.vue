<template>
  <div class="app-home">
     <app-header></app-header>
     <app-banner></app-banner>
     <app-section></app-section>
     <app-nav></app-nav>
   	<router-view></router-view>
  </div>
</template>

<script>
	import AppHeader from './AppHeader.vue'
	import AppBanner from './AppBanner.vue'
	import AppSection from './AppSection.vue'
	import AppNav from './AppNav.vue'
	export default {
	    name:"app-home",
	    components:{
	    	AppHeader,AppBanner,AppSection,AppNav
	    }
	    
	}
</script>
<style>
	
</style>