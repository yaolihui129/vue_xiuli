<template>
  <div class="home">
	<div>
		<img alt="Vue logo" src="../assets/logo.png">
		<h1>count:{{this.$store.state.count}}</h1>
		<button @click="countIncrease">点我</button>
	</div>
	
	<router-link class="ys1" to="/a">转向A组件</router-link>
	<router-link class="ys1" to="/b">转向B组件</router-link>
	<router-view></router-view>
  </div>
</template>

<script type="text/javascript">
	export default{
		methods:{
			countIncrease(){
				this.$store.commit('countIncrease')
			}
		}
	}
	
</script>

<style type="text/css">
	@import url("/");
</style>
