<template>
  <div class="app-nav">
     nav
  </div>
</template>

<script>
	import axios from 'axios'
	export default {
	    name:"app-nav",
	    data:function(){
        return {
        }
    },
	    methods:{
        getData(){
            let that = this
            axios.get('/static/JSONS/GoodSAS.json').then((res)=>{
            	
                console.log(res)
                
            }).catch((err)=>{
            	
            	console.log(err)
            	
            })
        },
    },
    created(){
        this.getData()
    },
	}
</script>
<style>
	
</style>