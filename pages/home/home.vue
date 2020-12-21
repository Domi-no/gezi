<template>
	<view class="myFont hContainer">
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
			<my-news style="border: 0;"></my-news>
		</view>
		<view class="rank">
			<view class="rank_head">
				<text class="gcph">鸽仓排行</text> <text class="cage_sum">鸽仓总数:&nbsp;1250</text>
			</view>
			<my-ranking class="r_c" :rankingList="rankingList"></my-ranking>
			<view class="h_bt">
				查看所有鸽仓排名
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
				}],
				rankingList:[1,2,3,4,5,6,7]
				
			}
		},
		methods: {
			toNewsList() {
				uni.navigateTo({
					url: '/sub/news_list/news_list?query='+this.rankingList
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
					display: flex;
					justify-content: space-between;
					width: 68rpx;
					padding-bottom: 6rpx;
					font-size: 23rpx;
					color: #979797;
					line-height: 23rpx;
					text {
						height: 23rpx;
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
			// min-height: calc(100vh - 1000rpx);

			.rank_head {
				font-size: 34rpx;
				display: flex;
				justify-content: space-between;
				font-weight: 700;

				.gcph {
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
			height: 100rpx;
			line-height: 100rpx;
			margin-top: 40rpx;
			text-align: center;
		}
	}
</style>
