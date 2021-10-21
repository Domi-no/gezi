<script>
	import {
		sessionType,
		getSession
	} from '@/utils/session';
	export default {
		data:function(){
			return{
				token:'',
				userInfo:''
			}
		},
		onLaunch: function() {
			
			this.token = uni.getStorageSync('storage_key');
			this.userInfo=uni.getStorageSync('userInfo')
			
			if(this.userInfo){
				this.$store.dispatch('handleUserInfo', JSON.parse(this.userInfo)).then(() => {})
			}
			// #ifdef  APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid,(wgtinfo)=>{
			     console.log(JSON.stringify(wgtinfo));
			     console.log("b版本好好",wgtinfo.version);//应用版本号
				// this.versionNumber=wgtinfo.version
				uni.setStorageSync("versionNumber", wgtinfo.version);
			})
			
			// #endif
			console.log(uni.getStorageSync('storage_key'))
			if(this.token){
			
				uni.reLaunch({
					url: '/pages/index/index',
					success: () => {
						// #ifdef  H5 || APP-PLUS
						plus.navigator.closeSplashscreen();
						// #endif
					}
				});
			}else{
				
				uni.reLaunch({
					url: "/pages/login/login",
					success: () => {
						// #ifdef  H5 || APP-PLUS
						 plus.navigator.closeSplashscreen();
						// #endif
					   
				    }
				});
			}
			
			
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
	
	// @font-face {
	//     font-family: 'myFont'; 
	//     src: url('@/static/font/PingFangSC-Medium.ttf'); //你的资源目录
	//   }
	// @font-face{
	// 	font-family:SimHei;
	// 	src: url('@/static/font/simhei.ttf');
	// }
	// @font-face{
	// 	font-family:Bold;
	// 	src: url('@/static/font/PingFang-Bold-2.ttf');
	// }
	
	 // #ifdef H5
	    .myFont{
	    		 // font-family: "myFont";
	    }
	 // #endif
	
</style>