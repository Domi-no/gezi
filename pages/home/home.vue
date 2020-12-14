<template>
	<view class="hContainer">
		<view class="sw">
			<view class="wrap">
				<u-swiper :list="list" indicator-pos="bottomRight" height="300"></u-swiper>
			</view>
			<view class="column">
				<view class="c_item" v-for="(item,idx) in c_img" :key="idx">
					<image :src="item.src" mode=""></image>
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="focus_news">
			<view class="focus_head">
				<text class="c_news">
					公司要闻
				</text>
				<view class="more" @click="toNewsList">
					<text>更多</text>
					<image class="zk" src="../../static/home/zk.png" />
				</view>
			</view>
			<my-news></my-news>
		</view>
		<view class="rank">
			<view class="rank_head">
				<text class="gcph">鸽仓排行</text> <text class="cage_sum">鸽仓总数:&nbsp;1250</text>
			</view>
			<my-ranking class="r_c" ></my-ranking>
			<view class="h_bt">
				没有更多了
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
					src: '../../static/home/fp.png',
					text: '扶贫成果'
				}, {
					src: '../../static/home/js.png',
					text: '养鸽技术'
				}, {
					src: '../../static/home/fz.png',
					text: '鸽病防治'
				}]
			}
		},
		methods: {
			toNewsList(){
				uni.navigateTo({
					url: '/sub/news_list/news_list'
				})
			},
			
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

			.column {
				margin: 45rpx 0 0 0;
				display: flex;
				justify-content: space-around;

				.c_item {
					width: 126rpx;
					text-align: center;
					font-size: 26rpx;
					line-height: 22rpx;

					image {
						width: 100%;
						height: 126rpx;
					}
				}
			}
		}

		.focus_news {
			margin-top: 20rpx;
			height: 484rpx;
			padding: 40rpx 30rpx 0;
			background-color: #fff;

			.focus_head {
				display: flex;
				justify-content: space-between;

				.c_news {
					font-size: 35rpx;
					font-weight: 700;
					color: #151515;
					font-family: Bold;
				}

				.more {
					padding-bottom: 6rpx;
					font-size: 23rpx;
					color: #979797;

					text {
						height: 23rpx;
						margin-right: 10rpx;
					}

					.zk {
						width: 12rpx;
						height: 23rpx;
					}


				}
			}

			
		}

		.rank {
			margin-top: 20rpx;
			padding: 40rpx 30rpx 0;
			background-color: #FFFFFF;

			.rank_head {
				font-size: 34rpx;
				display: flex;
				justify-content: space-between;
				font-weight: 700;
				.gcph{
					font-family: Bold;
				}

				.cage_sum {
					font-size: 23rpx;
					font-weight: 400;
				}
			}

			.r_c {
				margin-top: 30rpx;
			}
		}

		.h_bt {
			margin-top: 40rpx;
			text-align: center;
		}
	}
</style>
