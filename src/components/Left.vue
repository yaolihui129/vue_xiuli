<template>
	<div>
		<div class="title">热门推荐</div>
		<ul class="menu">
			<li @click="menu1">笔记本电脑</li>
			<li @click="menu2">手机</li>
			<li @click="menu3">服饰</li>
			<li @click="menu4">手表</li>
			
		</ul>
	</div>
</template>

<script type="text/javascript">
	import Msg from './msg.js'
	export default{
		methods:{
			menu1:function(){
				Msg.$emit("val","1");
			},
			menu2:function(){
				Msg.$emit("val","2");
			},
		}
	}
</script>

<style type="text/css">
	.title{
		width: 100px;
		color: red;
		height: 50px;
		line-height: 50px;
	}
	.menu li{
		list-style: none;
		height: 50px;
		margin-bottom: 2px;
		background-color: white;
		line-height: 50px;
		cursor: pointer;
	}
</style>
