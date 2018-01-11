<template>
  <div id="app">
  	
    <router-view :back = "back"></router-view>
    
    <app-footer></app-footer>
  </div>
</template>

<script>
	
	import AppFooter from './components/footer/AppFooter'
	
	export default {
		methods:{
			back(){
				this.$router.go(-1);
			},
		},
		components:{
			AppFooter
		}
	}
</script>

<style lang="scss">
	
</style>
