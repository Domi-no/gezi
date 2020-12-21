<template>
	<view class="reportContainer">
		<view class="report_head">
			<view class="report_head_left">
				<text>所有仓</text>
				<image src="@/static/report/report_zk.png" mode=""></image>
			</view>
			<view class="report_head_right">
				打印报表
			</view>
		</view>
		<view class="report_time">

		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.reportContainer {
		background-color: #fff;

		.report_head {
			width: 750rpx;
			height: 88rpx;
			padding: 30rpx;
			margin: 1rpx 0;
			display: flex;
			justify-content: space-between;
			border-top: 2rpx solid #f4f6fa;

			.report_head_left {
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;

				image {
					margin-left: 9rpx;
					width: 12rpx;
					height: 22rpx;
				}
			}

			.report_head_right {
				font-size: 24rpx;
				font-weight: 500;
				color: #377be4;
			}
		}

		.report_time {
			height: 88rpx;
			background-color: #fac;
			border-top: 3rpx solid #f4f6fa;
		}
	}
</style>
