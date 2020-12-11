<template>
	<view class="myFont cage_container">
		<view class="cage_head">
			<view class="cage_pic">
				<view class="column" v-for="(item,idx) in cage_image" :key="idx">
					<image :src="item.src" mode=""></image>
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
				<view class="category_right">
					<text>数据详情</text>
					<image src="../../static/cage/cage_s_zk.png" mode=""></image>
				</view>
			</view>
			<view class="_pigeon_type">
				<view class="_pigeon_type_top">
					<view class="_pigeon_type_top_left">
						<text class="_pigeon_type_top_left_zg">种鸽</text>
						<text class="_pigeon_type_top_left_mortality"><text>死亡率：0.5%</text></text>
					</view>
					<view class="_pigeon_type_top_right">
						<text class="_pigeon_type_top_right_save">存栏</text>
						<text class="_pigeon_type_top_right_num">9999</text>
					</view>
				</view>
				<!-- -----12.11 home图标  平方字体 字体大小-->
				<view class="_pigeon_type_bt">
					<view class="_pigeon_type_bt_cj">
						<text>破损</text><text>98</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cage_image: [{
						src: '../../static/cage/jl.png',
						text: '生产记录'
					}, {
						src: '../../static/cage/bb.png',
						text: '生产报表'
					},
					{
						src: '../../static/cage/rl.png',
						text: '生产日历'
					},
					{
						src: '../../static/cage/jb.png',
						text: '异常警报'
					}
				]
			}
		},
		methods: {

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
					font-size: 30rpx;
					line-height: 32rpx;
					color: #151515;

					image {

						margin-left: 10rpx;
					}
				}

				.category_right {
					font-size: 24rpx;
					color: #979797;

					text {
						margin-right: 10rpx;
					}
				}

				image {
					position: absolute;
					top: 7rpx;
					width: 12rpx;
					height: 22rpx;
				}
			}

			._pigeon_type {
				width: 690rpx;
				height: 210rpx;
				box-shadow: 0rpx 2rpx 10rpx 0rpx rgba(4, 10, 61, 0.1);
				margin-top: 30rpx;

				._pigeon_type_top {
					height: 76rpx;
					border-bottom: 2rpx solid #e4e5e9;
					display: flex;
					justify-content: space-between;
					padding: 26rpx 30rpx 0;
					font-weight: 500;
					._pigeon_type_top_left{
						._pigeon_type_top_left_zg {
							font-size: 30rpx;
							color: #151515;
						}
						
						._pigeon_type_top_left_mortality {
							width: 150rpx;
							height: 32rpx;
							background: #e96d59;
							opacity: 0.2;
							border-radius: 4rpx;
							text {
								width: 131rpx;
								height: 22rpx;
								font-size: 22rpx;
								color: #e96d59;
							}
						}
					}
					
				}
				._pigeon_type_top_right{
					._pigeon_type_top_right_save{
						font-size: 24rpx;
						color: #979797;
						margin-right: 13rpx;
					}
					._pigeon_type_top_right_num{
						font-size: 30rpx;
						color: #343434;
						font-weight: 300;
					}
				}
			}
		}
	}
</style>
