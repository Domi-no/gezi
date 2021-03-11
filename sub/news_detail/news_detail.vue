<template>
	<view class="myFont news_detail_container">
		<view class="news_detail_title">
			和平鸽是和平、友谊、团结和圣洁的象征。世界很多城市和广场上，都会建立起和平鸽的雕塑。
		</view>
		<view class="news_detail_time">2020-12-4</view>
		<view class="news_detail_content">
			直到纪元初，鸽子才被当做和平的象征。《旧约·创世纪》记载，上古洪水之后，诺亚从方舟上放出一只鸽子，让它去探明洪水是否退尽，上帝让鸽子衔回橄榄枝，已示洪水退尽，人间尚存希望。诺亚知道洪水已开始退去，平安就要来到。洪水退去后，在世间一切生灵面前呈现了长满绿色树木的山谷和开着鲜花的幽静小道。
		</view>
		<view class="news_detail_image">
			<image src="" mode=""></image>
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
.news_detail_container{
	background-color: #fff;
	padding: 26rpx 30rpx;
	.news_detail_title{
		font-size: 36rpx;
		font-weight: bold;
		color: #151515;
		line-height: 46rpx;
	}
	.news_detail_time{
		font-size: 28rpx;
		font-weight: 400;
		color: #979797;
		line-height: 30rpx;
		margin: 17rpx 0 30rpx;
	}
	.news_detail_content{
		font-size: 30rpx;
		font-weight: 500;
		color: #343434;
		line-height: 44rpx;
	}
	.news_detail_image{
		width: 690rpx;
		height: 388rpx;
		margin: 36rpx auto;
		image{
			width: 690rpx;
			height: 388rpx;
			background-color: #fac;
		}
	}
}
</style>
