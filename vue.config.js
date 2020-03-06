module.exports = {
  lintOnSave: false,
  devServer:{
	port:8081,
	proxy:{
		'/mock':{
			target:'http://127.0.0.1:9061',
			ws:false,
			//将主机头的原点改为UR
			changeOrigin:false
		}
	}
  }
}
