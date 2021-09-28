<template>
	<view class="setUpContainer">
		<view class="s_u_option">
			<view class="" @click="toChangePasswordPage">
				<text>修改密码</text><image class="changePasswordImg" src="../../static/cage/cage_b_zk.png" mode=""></image>
			</view>
			<!-- #ifdef APP-PLUS ||H5 -->
			<view class="" @click="handleClearCache">
				<text>清除缓存</text><text class="cacheSize">{{fileSizeString}}</text>
			</view>
			
			
			<view class="" @click="getEditionData">
				<text>检查更新</text><text class="edition">{{versionNumber}}</text>
			</view>
			<!-- #endif -->
		</view>
		<view class="signOut" @click="signOut">退出登录</view>
		<view class="setUpTips" v-show="isShowTips">
			{{tipsValue}}
		</view>
		<neil-modal 
		    :show="show" 
		    @close="closeModal" 
		    title="确认退出吗" 
			:align="'center'"
		    content=""
		    @cancel="canCelBtn('cancel')" 
		    @confirm="signOutBtn('confirm')">
		</neil-modal>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {
		removeSession,
		sessionType
	} from '@/utils/session';
	import neilModal from '@/components/neil-modal/neil-modal.vue';
	export default {
		  components: {neilModal},
		data() {
			return {
				isShowTips:false,
				tipsValue:'',
				show:false,
				versionNumber:'',
				fileSizeString: "",
			}
		},
		methods: {
			signOut(){
				this.show=true
				
			},
			signOutBtn(){
				removeSession(sessionType.USER_INFO)
				
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},
			canCelBtn(){
				this.show= false
			},
			toChangePasswordPage(){
				uni.navigateTo({
					url: '/sub/change_password/change_password'
				});
			},
			clearCache(){
				this.tipsValue='已清除缓存'
				this.isShowTips=true
			},
			checkForUpdates(){
				this.tipsValue='已经是最新版本'
				this.isShowTips=true
			},
			closeModal(){
				this.show = false
			},
			getEditionData(){
				
				this.$http.post('/Rank/edition.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
				if(res.data.edition_num != this.versionNumber){
					uni.showToast({
						title: '请更新版本' ,
						icon: 'none'
					})
				}else{
					uni.showToast({
						title: '已经是最新版本' ,
						icon: 'none'
					})
				}
					}).catch((err) => {
						
				})
			},
			
			// 
			
			resetPassword(){
							uni.setStorage({ //将用户信息保存在本地
								key: 'userInfoss',
								data: "设置设置设置设置设置设置"
							})
						},
						chackAppUpdate(){
			//测试会不会清除本地账号等数据存储
			                uni.getStorage({
							    key: 'userInfoss',
							    success: function (res) {
							        console.log(res.data);
							    }
							});
							uni.showToast({
								title: '缓存清理'+this.fileSizeString,
								duration: 2000
							});
						},
						// 获取缓存
						formatSize() {
							let that = this;
							plus.cache.calculate(function(size) {
								let sizeCache = parseInt(size);
								if (sizeCache == 0) {
									that.fileSizeString = "0B";
								} else if (sizeCache < 1024) {
									that.fileSizeString = sizeCache + "B";
								} else if (sizeCache < 1048576) {
									that.fileSizeString = (sizeCache / 1024).toFixed(2) + "KB";
								} else if (sizeCache < 1073741824) {
									that.fileSizeString = (sizeCache / 1048576).toFixed(2) + "MB";
								} else {
									that.fileSizeString = (sizeCache / 1073741824).toFixed(2) + "GB";
								}
							});
							console.log(this.fileSizeString,'缓存1123')
						},
						// 清除缓存
						handleClearCache() {
							let that = this
							// that.$refs.popupSet.close()
							uni.showModal({
								title: '清除缓存',
								content: '您确定要清除缓存吗？',
								success: function(res) {
									if (res.confirm) {
										console.log('用户点击确定');
										that.clearCache()
									
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						},
						// 清理缓存
						clearCache() {
							let that = this;
							let os = plus.os.name;
							if (os == 'Android') {
								let main = plus.android.runtimeMainActivity();
								let sdRoot = main.getCacheDir();
								let files = plus.android.invoke(sdRoot, "listFiles");
								let len = files.length;
								for (let i = 0; i < len; i++) {
									let filePath = '' + files[i]; // 没有找到合适的方法获取路径，这样写可以转成文件路径  
									plus.io.resolveLocalFileSystemURL(filePath, function(entry) {
										if (entry.isDirectory) {
											entry.removeRecursively(function(entry) { //递归删除其下的所有文件及子目录  
												uni.showToast({
													title: '缓存清理完成',
													duration: 2000
												});
												that.formatSize(); // 重新计算缓存  
											}, function(e) {
												console.log(e.message)
											});
										} else {
											entry.remove();
										}
									}, function(e) {
										console.log('文件路径读取失败')
									});
								}
							} else { // ios  
								plus.cache.clear(function() {
									uni.showToast({
										title: '缓存清理完成',
										duration: 2000
									});
									that.formatSize();
								});
							}
						},
			
			
		},
			
		watch:{
			isShowTips(){
				console.log(this.isShowTips)
				this.isShowTips ? setTimeout(()=>{this.isShowTips=false},1000):''
			}
		},
		created() {
			// this.getTypeBlockData()
			
			// #ifdef  APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid,(wgtinfo)=>{
			     console.log(JSON.stringify(wgtinfo));
			     console.log("b版本好好",wgtinfo.version);//应用版本号
				this.versionNumber=wgtinfo.version
			})
			this.formatSize()
			// #endif
			console.log(this.fileSizeString,'缓存')
			                    
		},
		onLoad() {
					// #ifdef  APP-PLUS
					// this.formatSize()
					// #endif
					
				},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
	}
</script>

<style lang="scss" scoped>
.setUpContainer{
	height: calc(100vh);
	width: 100%;
	background-color: #F4F6FA;
	padding-top: 20rpx;
	position: relative;
	.s_u_option{
		background: #FFFFFF;
		view{
			width: 750rpx;
			height: 88rpx;
			line-height: 88rpx;
			padding: 0 29rpx;
			border-top: 1rpx solid #F4F6FA;
			font-size: 30rpx;
			font-weight: 500;
			color: #151515;
			display: flex;
			justify-content: space-between;
			.changePasswordImg{
				width: 12rpx;
				height: 22rpx;
				position: relative;
				top: 30rpx;
			}
			.cacheSize{
				font-size: 28rpx;
				font-weight: 500;
				color: #377BE4;
			}
			.edition{
				font-size: 28rpx;
			}
		}
		view:nth-child(1){
			border-top: 0;
		}
	}
	.signOut{
		position: absolute;
		bottom: 178rpx;
		left: 50%;
		transform: translateX(-50%);
		width: 630rpx;
		height: 88rpx;
		border: 1px solid #979797;
		border-radius: 44rpx;
		text-align: center;
		line-height: 88rpx;
		font-size: 34rpx;
		font-weight: 500;
		color: #979797;
	}
	.setUpTips{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 320rpx;
		height: 98rpx;
		background: #000000;
		opacity: 0.5;
		border-radius: 10rpx;
		text-align: center;
		font-size: 28rpx;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 98rpx;
		z-index: 99;
	}
}
</style>
