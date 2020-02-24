<template>
	<div>
		<div v-if="kk==1">
			1111111
		</div>
		<div v-if="kk==2">
			22222
		</div>
		
	</div>
</template>

<script type="text/javascript">
	import Msg from './msg.js'
	export default{
		data(){
			return{
				kk:0
			}
		},
		mounted:function(){
			var _this=this
			Msg.$on('val',function(m){
				_this.kk=m;
			})
		}
	}
</script>

<style>
</style>
