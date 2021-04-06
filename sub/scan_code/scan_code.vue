<template>
	<view class="scan_code_container">
		<view class="scan_code_Top">
			<view class="">
				<text>当前仓号</text><text>生产仓1</text>
			</view>
			<view class="">
				<text>日期</text><text>2020-12-12</text>
			</view>
		</view>
		<view class="scan_code_wNBox">
			<view :class="currentId===index? 'currentClass' :'scan_code_wNItem'" v-for="(item,index) in 6" @click="currentBox(index,item)" :key="index">
				<view class="scan_codeHeader">
					<image src="../../static/home/scancode.png" mode=""></image><view>220号</view>
				</view>
				<view class="scan_codeDetailsBox">
						<view class="">
							<text>种鸽</text><text class="scNum">22</text>
						</view>
						<view class="">
							<text>种鸽</text><text class="scNum">22</text>
						</view>
						<view class="" style="margin-top: 6rpx;">
							<text>个种鸽</text><text class="scNum">2222</text>
						</view>
						<view class="" style="margin-top: 6rpx;">
							<text>种鸽</text><text class="scNum">222</text>
						</view>	
				</view>
			</view>
		</view>
		<view :class="{scan_code_btn:true,scan_code_sub:currentId !== ''}" @click="toRecordPage">
			确认
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentId:''
			}
		},
		methods: {
			currentBox(idx){
				this.currentId=idx
			},
			toRecordPage(){
				uni.navigateTo({
					url:'/sub/production_warehouse_change/production_warehouse_change'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.scan_code_container{
	background-color:#F4F6FA;
	min-height: calc(100vh - 88rpx);
	.scan_code_Top{
		view{
			height: 88rpx;
			border-top: 2rpx solid #F4F6FA;
			display: flex;
			justify-content: space-between;
			line-height: 88rpx;
			padding: 0 30rpx;
			font-size: 30rpx;
			color: #151515;
			font-weight: 500;
			background-color: #fff;
			text:nth-child(2){
				font-size: 28rpx;
				color: #343434;
			}
		}
	}
	.scan_code_wNBox{
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.scan_code_wNItem{
			width: 320rpx;
			height: 160rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 1rpx 6rpx 0rpx rgba(0, 0, 0, 0.1);
			border-radius: 10rpx;
			margin-top: 30rpx;
			
			
		}
		.currentClass{
			width: 320rpx;
			height: 160rpx;
			background: #FFFFFF;
			box-shadow: 3rpx 4rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);
			border-radius: 10rpx;
			margin-top: 30rpx;
		}
		.scan_codeHeader{
			display: flex;
			padding: 16rpx 14rpx;
			height: 40rpx;
			image{
				width: 40rpx;
				height: 40rpx;
			}
			view{
				padding: 0;
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				margin-left: 11rpx;
			}
		}
		.scan_codeDetailsBox{
			box-sizing: border-box;
			margin-top: 25rpx;
			display: flex;
			flex-wrap: wrap;
			padding-left: 30rpx;
			view{
				width: 140rpx;
				display: flex;
				text:nth-child(1){
					min-width: 80rpx;
					text-align: right;
					font-size: 24rpx;
					font-weight: 500;
					color: #676767;
				}
			}
			.scNum{
				color: #377BE4;
				margin-left: 11rpx;
				font-size: 28rpx;
				// min-width: 40rpx;
			}
		}
	}
	.scan_code_btn{
		width: 670rpx;
		height: 88rpx;
		background: #D1D2D3;
		border-radius: 44px;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
		text-align: center;
		line-height: 88rpx;
		position: absolute;
		bottom: 130rpx;
		left: 50%;
		transform: translateX(-50%);
	}
	.scan_code_sub{
		background: #377BE4;
	}
}
</style>
