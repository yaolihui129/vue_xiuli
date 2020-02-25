<template>
	<div>
		<Header></Header>
		<div class="container">
			<!-- <Left></Left> -->
			<div class="row">	
				<div class="col-md-3">
					<div class="panel panel-info">
						<div class="panel-body">
							<h2>临城-秀丽广告</h2>
							<hr />
							<h4>热线:0319-7186126</h4>
							<hr />
							<h4>手机:13463925200</h4>
							<hr />
							<h4>Q Q: 2830690782</h4>
							<hr />
							<h4>网址:xiuliguanggao.com</h4>
						</div>
					</div>
				</div>	
				<img class="col-md-9" src="../../public/img/title.jpg" />
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-danger">
						<div class="panel-heading">
							<h3 class="panel-title">主营业务</h3>
						</div>
						<div class="panel-body">
							<h4>广告类：</h4>
							<p>大型室外广告牌、楼体亮化工程、LED显示屏、展板展架、条幅吊旗、锦旗授带、写真喷绘、铜牌铜字、钛金字、发光字、PVC字</p>
							<h4>文印类：</h4>
							<p>打字复印、彩喷彩页、快照证书、书本装订、中高档胸卡、桌牌菜单、名片、充值卡、印制单据</p>
						</div>
					</div>
				</div>
				
			</div>
			<div class="row">
				<Right></Right>
			</div>
		</div>
		<div>
			<Footer></Footer>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	import Header from '../components/layout/Header.vue'
	import Left from '../components/layout/Left.vue'
	import Right from '../components/layout/Right.vue'
	import Footer from '../components/layout/Footer.vue'
	export default{
		components:{
			Header,
			Left,
			Right,
			Footer
		}
	}
		
</script>
