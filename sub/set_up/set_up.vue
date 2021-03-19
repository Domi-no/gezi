<template>
	<view class="setUpContainer">
		<view class="s_u_option">
			<view class="" @click="toChangePasswordPage">
				<text>修改密码</text><image class="changePasswordImg" src="../../static/cage/cage_b_zk.png" mode=""></image>
			</view>
			<view class="" @click="clearCache">
				<text>清除缓存</text><text class="cacheSize">1.23MB</text>
			</view>
			<view class="" @click="checkForUpdates">
				<text>检查更新</text><text class="edition">1.1.1</text>
			</view>
		</view>
		<view class="signOut" @click="signOut">退出登录</view>
		<view class="setUpTips" v-show="isShowTips">
			{{tipsValue}}
		</view>
		<neil-modal 
		    :show="show" 
		    @close="closeModal" 
		    title="" 
			:align="'center'"
		    content="确认退出吗"
		    @cancel="canCelBtn('cancel')" 
		    @confirm="signOutBtn('confirm')">
		</neil-modal>
	</view>
</template>

<script>
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
				show:false
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
			}
		},
			
		watch:{
			isShowTips(){
				console.log(this.isShowTips)
				this.isShowTips ? setTimeout(()=>{this.isShowTips=false},1000):''
			}
		}
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
