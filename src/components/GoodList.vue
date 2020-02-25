<template>
	<div class="show">
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">广告牌&发光字</h3>
			</div>
			<div class="panel-body">
				<li v-for="good in list">
					<div class="col-md-3">
						<div class="thumbnail">
							<router-link to="#">
								<img v-bind:src="good.img" />
								<p>{{good.goodName}}</p>
							</router-link>
						</div>
					</div>
				</li>	
			</div>
		</div>
		
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
	.panel-body li{
		list-style: none;
	}
</style>
