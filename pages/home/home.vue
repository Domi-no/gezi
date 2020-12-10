<template>
	<view class="hContainer">
		<view class="sw">
			<view class="wrap">
				<u-swiper :list="list" indicator-pos="bottomRight" height="300"></u-swiper>
			</view>
			<view class="column">
				<view class="c_item">
					<image :src="c_img[0].src" mode=""></image>
					扶贫成果
				</view>
			</view>
		</view>
		<view class="focus_news">
			<view class="focus_head">
				<text class="c_news">
					公司要闻
				</text>
				<text class="more">更多&nbsp;></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'					
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
					}
				],
				c_img: [{
					src: '../../static/logo.png',
					text: '扶贫成果'
				}]
			}
		},
		methods: {

		},
		onShow() {
			console.log(1)
		}
	}
</script>

<style lang="scss" scoped>
	.hContainer {
		.sw {
			height: 560rpx;
			background-color: #fff;

			.wrap {
				padding: 35rpx 30rpx 0;
			}
			.column{
				margin: 45rpx 0 0 87rpx;
				.c_item{
					width: 126rpx;
					text-align: center;
					font-size: 26rpx;
					line-height: 22rpx;
					image{
						width: 100%;
						height: 126rpx;
					}
				}
			}
		}
		.focus_news{
			margin-top: 20rpx;
			height: 484rpx;
			padding: 0 30rpx;
			background-color: #fff;
			.focus_head{
				display: flex;
				justify-content: space-between;
				.c_news{
					font-size: 35rpx;
					color: #151515;
				}
				.more{
					font-size: 23rpx;
					color: #979797;
				}
			}
		}
	}
</style>
