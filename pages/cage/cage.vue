<template>
	<view class="myFont cage_container">
		<view class="cage_head">
			<view class="cage_pic">
				<view class="column" v-for="(item,idx) in cage_image" :key="idx" @click="toProductionPage(item.src)">
					<image :src="item.pic" mode=""></image>
					<view class="column_text">
						{{item.text}}
					</view>
				</view>
			</view>
		</view>
		<view class="_category">
			<view class="category_header">
				<view class="category_left">
					<text>2020-12-20</text>
					<image src="../../static/cage/cage_b_zk.png" mode=""></image>
				</view>
				<view class="category_right" @click="toPdata">
					<text>数据详情</text>
					<image src="../../static/cage/cage_s_zk.png" mode=""></image>
				</view>
			</view>
			<my-cageClassification></my-cageClassification>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cage_image: [{
						src: '/sub/production_records/production_records',
						pic: '../../static/cage/jl.png',
						text: '生产记录'
					}, {
						src: '/sub/charts/charts',
						pic: '../../static/cage/bb.png',
						text: '生产报表'
					},
					{
						src: '/sub/production_calendar/production_calendar',
						pic: '../../static/cage/rl.png',
						text: '生产日历'
					},
					{
						src: '/sub/abnormal_alarm/abnormal_alarm',
						pic: '../../static/cage/jb.png',
						text: '异常警报'
					}
				]
			}
		},
		methods: {
			toProductionPage(src) {
				uni.navigateTo({
					url: src
				})
			},
			toPdata() {
				uni.navigateTo({
					url: '../../sub/production_data/production_data'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cage_container {
		background-color: #fff;
		padding-top: 69rpx;

		.cage_head {
			height: 208rpx;
			padding: 0 30rpx;

			.cage_pic {
				display: flex;
				justify-content: space-around;
				text-align: center;

				.column {
					font-size: 24rpx;

					image {
						width: 120rpx;
						height: 120rpx;
					}

					.column_text {
						line-height: 10rpx;
					}
				}
			}
		}

		._category {
			border-top: 20rpx solid #f4f6fa;
			height: calc(100vh - 270rpx);
			padding: 40rpx 30rpx 0rpx;

			.category_header {
				position: relative;
				display: flex;
				justify-content: space-between;
				margin-bottom: 11rpx;

				.category_left {
					width: 199rpx;
					display: flex;
					justify-content: space-between;
					font-size: 30rpx;
					line-height: 25rpx;
					color: #151515;

					text {
						height: 30rpx;
					}

					image {
						width: 12rpx;
						height: 22rpx;
					}
				}

				.category_right {
					width: 117rpx;
					display: flex;
					justify-content: space-between;
					color: #979797;

					text {
						font-size: 24rpx;
						line-height: 32rpx;
					}

					image {
						padding-top: 5rpx;
						width: 12rpx;
						height: 22rpx;
					}
				}


			}


		}
	}
</style>
