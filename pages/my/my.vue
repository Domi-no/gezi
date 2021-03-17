<template>
	<view class="myContainer">
		<view class="my_userInfo">
			<view class="info_box">
				<view class="info_left">
					<view class="info_imageBox">
						<image :src="userInfo.avatar" mode=""></image>
					</view>
					<view class="info_nameBox" @click="log">
						<view class="name">
							{{userInfo.nick_name}}
						</view>
						<view>饲养员</view>
					</view>
				</view>
				<view class="info_work">
					<image class="info_work_image" src="../../static/my/kq.png" mode=""></image>
					<text class="info_work_dk" >上班已打卡</text>
				</view>
			</view>
		</view>
		<view class="operate_container">
			<view class="operate_container_box" @click="toOperatePage">
				<view class="operate_container_left">
					<image class="operate_container_left_image" src="../../static/my/dy.png" mode=""></image>
					<view class="operate_container_left_name_box">
						<text class="operate_container_left_name">配置打印机</text>
					</view>
				</view>
				<view class="operate_container_zk">
					<image class="operate_container_zk_image" src="../../static/my/zk.png" mode=""></image>
				</view>
			</view>
			<view class="operate_container_box" @click="toMessageCenter">
				<view class="operate_container_left">
					<image class="operate_container_left_image" src="../../static/my/dy.png" mode=""></image>
					<view class="operate_container_left_name_box">
						<text class="operate_container_left_name">消息中心</text>
					</view>
				</view>
				<view class="operate_container_zk">
					<view class="newsNum">
						13
					</view>
					<image class="operate_container_zk_image" src="../../static/my/zk.png" mode=""></image>
				</view>
			</view><view class="operate_container_box" @click="toFeedbackpage">
				<view class="operate_container_left">
					<image class="operate_container_left_image" src="../../static/my/dy.png" mode=""></image>
					<view class="operate_container_left_name_box">
						<text class="operate_container_left_name">意见反馈</text>
					</view>
				</view>
				<view class="operate_container_zk">
					<image class="operate_container_zk_image" src="../../static/my/zk.png" mode=""></image>
				</view>
			</view>
			<view class="operate_container_box" @click="toSetUpPage">
				<view class="operate_container_left">
					<image class="operate_container_left_image" src="../../static/my/dy.png" mode=""></image>
					<view class="operate_container_left_name_box">
						<text class="operate_container_left_name">设置</text>
					</view>
				</view>
				<view class="operate_container_zk">
					<image class="operate_container_zk_image" src="../../static/my/zk.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toOperatePage(){
				console.log(1)
			},		
			toMessageCenter(){
				uni.navigateTo({
					url: '/sub/message_center/message_center'
				});
			},
			toFeedbackpage(){
				uni.navigateTo({
					url: '/sub/feed_back/feed_back'
				});
			},
			toSetUpPage(){
				uni.navigateTo({
					url: '/sub/set_up/set_up'
				});
			},
			log(){
				console.log(1)
				console.log(this.userInfo)
			}
		},
		
		computed: {
			...mapState({
				userInfo: (state) => state.user.userInfo
			})
		},
	}
</script>

<style lang="scss" scoped>
.myContainer{
	width: 100%;
	background-color: #fff;
	.my_userInfo{
		height: 380rpx;
		width: 100%;
		background: url(../../static/my/bg.png);
		background-size: 100% 100%;
		padding: 116rpx 0 0 30rpx;
		.info_box{
			height: 128rpx;
			display: flex;
			justify-content: space-between;
			.info_left{
				width: 370rpx;
				display: flex;
				justify-content: space-between;
				
				.info_imageBox{
					width: 128rpx;
					height: 128rpx;
					// background-color: #fac;
					border-radius: 50%;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.info_nameBox{
					width: 210rpx;
					padding-top: 15rpx;
					color: #fff;
					.name{
						font-size: 42rpx;
						font-weight: bold;
						
					}
					.occupation{
						font-size: 28rpx;
						font-weight: 500;
						margin-top: 12rpx;
					}
					
				}
			}
			.info_work{
				width: 186rpx;
				height: 70rpx;
				background: rgba(0,0,0,0.1);
				// opacity: 0.1;
				border-radius: 35rpx 0rpx 0rpx 35rpx;
				margin: auto 0;
				display: flex;
				font-weight: 500;
				color: #fff;
				padding: 1rpx;
				.info_work_dk{
					font-size: 24rpx;
					line-height:70rpx;
				}
				.info_work_image{
					position: relative;
					top: -4rpx;
					width: 26rpx;
					height: 32rpx;
					margin: 24rpx 9rpx 0 23rpx;
					
				}
			}
		}
	}
	.operate_container{
		height: calc(100vh - 380rpx);
		position: relative;
		top: -54rpx;
		background-color: #fff;
		border-radius: 30px;
		padding: 1rpx 40rpx;
		.operate_container_box{
			height: 70rpx;
			display: flex;
			justify-content: space-between;
			margin-top: 61rpx;
			padding-top: 21rpx;
		}
		
		
		.operate_container_left{
			width: 220rpx;
			display: flex;
			justify-content: space-between;
			.operate_container_left_image{
				width: 32rpx;
				height: 32rpx;
			}
			.operate_container_left_name_box{
				width: 150rpx;
			}
			.operate_container_left_name{
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				line-height: 30rpx;
			}
		}
		.operate_container_zk{
			display: flex;
			.newsNum{
				height: 30rpx;
				padding: 0 13rpx;
				border-radius: 15rpx;
				background-color: #E64329;
				margin-right: 20rpx;
				color: #fff;
				text-align: center;
				line-height: 30rpx;
				font-size: 22rpx;
				position: relative;
				top: 4rpx;
			}
			.operate_container_zk_image{
				position: relative;
				top: 8rpx;
				width: 12rpx;
				height: 22rpx;
			}
		}
	}
}
</style>
