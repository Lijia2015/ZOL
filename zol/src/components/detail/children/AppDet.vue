<template>
	<div class="app-det det-box clearfix">
		<div class="img-content" v-for="det in dets">
			<img :src="det.imgUrl"/>
		</div>
	</div>
</template>

<script>
	
	import axios from 'axios'
	
	export default{
		name:'app-det',
		data(){
			return {
				dets:[]
			}
		},
		methods:{
			getData(){
				let that = this;
				
				axios.get('/static/JSONS/det.json').then((res)=>{
					console.log(res)
					that.dets = res.data.data
				}).catch((err)=>{
					console.log(err)
				})
				
			}
		},
		mounted(){
			this.getData();
		},
	}
</script>

<style lang="scss" scoped>

	.app-det{
		overflow-y: scroll;
	}
	.img-content{
		border: solid #efefef 0.1rem;
		img{
			width: 100%;
		}
	}
</style>