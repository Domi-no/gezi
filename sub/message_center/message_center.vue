<template>
	<view class="messageCenterContainer">
		<view class="messageItem">
			<view class="messageTitle">
				<text>元旦放假通知</text><text>14:00</text>
			</view>
			<view class="messageContent">
				元旦，即公历的1月1日，是世界多数国家通称的“新年”。“元旦”意即“初始之日”。
			</view>
			<view class="ViewDetails" @click="toMessageDetail()">
				<text>查看详情</text><image src="../../static/cage/cage_b_zk.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toMessageDetail(id){
				uni.navigateTo({
					url: '/sub/message_detail/message_detail'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.messageCenterContainer{
		height: calc(100vh);
		background-color: #F4F6FA;
		padding-top: 10rpx;
		
		.messageItem{
			width: 670rpx;
			// height: 300rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			padding: 40rpx 26rpx 0 24rpx;
			margin: 30rpx auto 0;
			.messageTitle{
				display: flex;
				justify-content: space-between;
				text:nth-child(1){
					font-size: 30rpx;
					font-weight: bold;
					color: #151515;
				}
				text:nth-child(2){
					font-size: 24rpx;
					font-weight: 500;
					color: #979797;
				}
			}
			.messageContent{
				margin-top: 32rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #676767;
				line-height: 44rpx;
			}
			.ViewDetails{
				height: 81rpx;
				margin-top: 40rpx;
				padding-top: 27rpx;
				display: flex;
				justify-content: space-between;
				border-top: 2rpx solid #E4E5E9;
				text{
					font-size: 28rpx;
					font-weight: 500;
					color: #343434;
				}
				image{
					width: 12rpx;
					height: 22rpx;
					position: relative;
					top: 8rpx;
				}
			}
		}
	}

</style>
