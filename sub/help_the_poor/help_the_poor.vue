<template>
	<view class="help_the_poorContainer">
		<view class="helpThePoorItem">
			<view class="titleBox">
				和平鸽是和平、友谊、团结和圣洁的象征。世界很多城市和广场上都有和平鸽的雕像。
			</view>
			<image src="" mode=""></image>
			<view class="timeBox">
				2020-12-4
			</view>
		</view>
		<view class="helpThePoorItem">
			<view class="titleBox">
				和平鸽是和平、友谊、团结和圣洁的象征。世界很多城市和广场上都有和平鸽的雕像。
			</view>
			<image src="" mode=""></image>
			<view class="timeBox">
				2020-12-4
			</view>
		</view>
		<view class="rankingNoMore">
			已经到底了~. ~
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
			
		}
	}
</script>

<style lang="scss" scoped>
.help_the_poorContainer{
	padding: 0 30rpx 60rpx;
	.helpThePoorItem{
		padding: 35rpx 0 15rpx;
		border-bottom: 2rpx solid #E4E5E9;
		.titleBox{
			font-size: 30rpx;
			font-weight: bold;
			color: #343434;
			line-height: 40rpx;
		}
		image{
			width: 690rpx;
			height: 388rpx;
			margin: 16rpx auto 10rpx;
			background-color: #fac;
		}
		.timeBox{
			font-size: 22rpx;
			font-weight: 400;
			color: #979797;
			line-height: 30rpx;
		}
	}
	.rankingNoMore{
		font-size: 24rpx;
		font-weight: 500;
		color: #979797;
		text-align: center;
		margin: 57rpx auto 0;
	}
}
</style>
