<template>
	<div>
		<aside class="main-sidebar">
			<!-- sidebar: style can be found in sidebar.less -->
			<section class="sidebar">
				<!-- Sidebar user panel -->
				<div class="user-panel">
					<div class="pull-left image">
						<img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
					</div>
					<div class="pull-left info">
						<p>Yaolh</p>
						<a href="#">
							<i class="fa fa-circle text-success">在线</i> 
						</a>
					</div>
				</div>
				
				<!-- search form -->
				<form action="#" method="get" class="sidebar-form">
					<div class="input-group">
						<input type="text" name="q" class="form-control" placeholder="Search...">
						<span class="input-group-btn">
							<button type="submit" name="search" id="search-btn" class="btn btn-flat">
								<i class="fa fa-search"></i>
							</button>
						</span>
					</div>
				</form>
				<!-- /.search form -->
				<ul class="sidebar-menu">
					<!-- <li class="active treeview">
						<a href="#">
							<i class="fa fa-dashboard"></i> 
							<span>Dashboard</span>
							<span class="pull-right-container">
								<i class="fa fa-angle-left pull-right"></i>
							</span>
						</a>
						<ul class="treeview-menu">
							<li @click="menu1">
								<i class="fa fa-circle-o"> 笔记本电脑</i>
							</li>
							<li class="active" @click="menu2">
								<i class="fa fa-circle-o">手机</i>
							</li>
						</ul>
						
					</li>	 -->
					<li class="treeview" @click="menu1" >
						<i class="fa fa-dashboard"> 笔记本电脑</i>
					</li>
					<li class="treeview" @click="menu2">
						<i class="fa fa-dashboard">手机</i>
					</li>
				</ul>	  
			</section>		
		</aside>
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

