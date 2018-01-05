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
//          http://m.zol.com/index.php?c=Shop_IndexV2&a=AjaxGetGoods&pos=1&page=2
            axios.get('http://localhost:8080/zol/index.php',{
                params:{
                	c:'Shop_IndexV2',
									a:'AjaxGetGoods',
									pos:2,
									page:2
                }
            }).then((response)=>{
                console.log(response)
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