<template>
	<div class="show">
		<ul class="goodList">
			<li v-for="good in list">
				<img v-bind:src="good.img"/>
				<p>{{good.goodName}}</p>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:"show",
		data(){
			var _this = this;
			var url = "";
			if(_this.goodId==1){
				url = "json/bjb.json";
			}else if(_this.goodId==2){
				url = "json/sj.json";
			}else{
				url = "json/sj.json";
			}
			this.$http.get(url).then(function(res){
				_this.list=res.data;
			})
			return{
				list:[]
			}
		},
		props:{
			goodId:Number
		},
		// 监听参数的改变
		watch:{
			goodId(){
				var _this =this;
				var url = "";
				if(_this.goodId==1){
					url = "json/bjb.json";
				}else if(_this.goodId==2){
					url = "json/sj.json";
				}
				
				this.$http.get(url).then(function(res){
					_this.list=res.data;
				})
				return{
					list:[]
				}
			}
		}
	}
</script>

<style type="text/css">
	.goodList li{
		width: 200px;
		height: 200px;
		list-style: none;
		float: left;
		font-size: 9px;
		color: red;
		margin-bottom: 30px;
	}
</style>
