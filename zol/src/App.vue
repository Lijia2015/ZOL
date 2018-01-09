<template>
  <div id="app">
  	<keep-alive>
    	<router-view :back = "back"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
	methods:{
		back(){
			this.$router.go(-1);
		},
	},

	
}
</script>

<style lang="scss">
	
</style>
