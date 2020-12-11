<script>
	export default {
		onLaunch: function() {
		},
		onShow: function() {
		},
		onHide: function() { 	
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	
	@font-face {
	    font-family: 'myFont'; 
	    src: url('@/static/font/PingFangSC-Medium.ttf'); //你的资源目录
	    font-weight: normal;
	    font-style: normal;
	  }
	
	 // #ifdef H5
	    .myFont{
	    		 font-family: "myFont" !important;
	    }
	 // #endif
	
</style>
