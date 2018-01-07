<template>
  <div id="app">
    <router-view :back = "back"></router-view>
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
