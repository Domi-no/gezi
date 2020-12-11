<template>
	<view>
		<view class="_news">
			<view class="news_left">
				<view class="news_head">
					安全生产重于泰山
				</view>
				<view class="news_content">
					和平鸽是和平，友谊，团结，和圣洁的象征。世界很多城市和广场上,都会放那么一两只鸽子
				</view>
				<text class="news_time">2020-12-11</text>
			</view>
			<view class="news_right">
				<image src="" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	._news {
		height: 198rpx;
		border-bottom: 2rpx solid #e4e5e9;
		padding-top: 30rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;

		.news_left {
			width: 418rpx;
			color: #343434;

			.news_head {
				font-size: 30rpx;
				font-weight: 700;
			}

			.news_content {
				margin-top: 11rpx;
				font-size: 24rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}

			.news_time {
				margin-top: 10rpx;
				font-size: 22rpx;
				color: #979797;
			}
		}

		.news_right {
			image {
				width: 240rpx;
				height: 136rpx;
				border-radius: 10rpx;
				background-color: #fac;

			}
		}
	}
</style>
