<template>
	<view class="sterilizeContainer">
		<view class="sterilizeTime">
			<view class="sterilizeTimeLeft">
				时间
			</view>
			<view class="sterilizeTimeRight">
				<text>2020-12-25</text><image class="zk" src="../../static/daiban/b_zk.png" mode=""></image>
			</view>
		</view>
		<view class="">
			<view class="sterilizeItem">
				<view class="sterilizeHead">
					<view class="warehouse">
						生产仓23
					</view>
					<view class="name">
						操作人：张三
					</view>
				</view>
				<view class="sterilizeDetail">
					<view class="">
						<text>消杀方式</text><text>电子喷雾剂</text>
					</view>
					<view class="">
						<text>消杀药品</text><text>百毒杀</text>
					</view>
					<view class="">
						<text>用量</text><text>100ml</text>
					</view>
				</view>
			</view>
			
				
		</view>
		<view class="addSterilizeRecord" @click="toSterilizeRrecordPage">
			<image src="../../static/daiban/jia.png" mode=""></image>
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
			
			toSterilizeRrecordPage(){
				uni.navigateTo({
					url: '/sub/sterilize_record/sterilize_record'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.sterilizeContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 4rpx;
	padding-bottom: 30rpx;
	.sterilizeTime{
		width: 100%;
		height: 88rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		line-height: 88rpx;
		.zk{
			width: 12rpx;
			height: 22rpx;
			position: relative;
			top: 2rpx;
		}
		.sterilizeTimeLeft{
			font-size: 30rpx;
			font-weight: 500;
			color: #151515;
		}
		.sterilizeTimeRight{
			font-size: 24rpx;
			font-weight: 500;
			color: #343434;
			text{
				margin-right: 19rpx;
			}
		}
	}
	.sterilizeItem{
		width: 690rpx;
		height: 260rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 10rpx 0rpx rgba(0, 0, 0, 0.1);
		border-radius: 10rpx;
		margin: 30rpx auto 0;
		padding: 26rpx 20rpx 0;
		.sterilizeHead{
			display: flex;
			justify-content: space-between;
			border-bottom: 2rpx solid #E4E5E9;
			padding-bottom: 28rpx;
			.warehouse{
				height: 28rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				padding-left: 13rpx;
				border-left: 4rpx solid #377BE4;
				line-height: 24rpx;
			}
			.name{
				font-size: 24rpx;
				font-weight: 500;
				color: #377BE4;
			}
		}
		.sterilizeDetail{
			height: 170rpx;
			display: flex;
			flex-direction:column ;
			justify-content: space-around;
			view{
				display: flex;
				justify-content: space-between;
				text{
					font-size: 24rpx;
					font-weight: 500;
					color: #979797;
				}
				text:nth-child(2){
					color: #343434;
				}
			}
		}
	}
	.addSterilizeRecord{
		position: fixed;
		bottom: 188rpx;
		right: 50rpx;
		width: 100rpx;
		height: 100rpx;
		background: #377BE4;
		box-shadow: 0px 15rpx 20rpx 0px rgba(55, 123, 228, 0.2);
		border-radius: 50%;
		image{
			width: 48rpx;
			height: 48rpx;
			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
	}
}
</style>
