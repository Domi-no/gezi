<template>
	<view class="myFont pd_container">
		<view class="pd_title">
			<view class="pd_title_left">
				<text>2020-12-20</text>
				<image src="../../static/report/report_zk.png"></image>
			</view>
			<view class="pd_title_right">
				<text>所有仓</text>
				<image src="../../static/home/zk.png"></image>
			</view>
		</view>
		<view class="" v-for="(item,index) in list" :key="index">
			<view class="pd_splitLine">
			</view>
			<view class="pd_item">
				<view class="pd_item_title">
					<text class="pd_item_title_num">仓号2</text>
					<text class="pd_item_title_syy">饲养员:</text>
					<text class="pd_item_title_syy_mz">李大牛</text>
					<text class="pd_item_title_hg">护工:</text>
					<text class="pd_item_title_syy_mz">张三</text>
					<text class="pd_item_title_hl">耗料:</text>
					<text>100公斤</text>
					<image :src="pd_data?zkicon[0]:zkicon[1]" :class="pd_data?'xzk':'yzk'" @click="exhibitionHandler(index)"></image>
				</view>
				<view class="" v-show="pd_data">
					<view class="pd_item_content" v-for="(item,index) in list" :key="index">
						<view class="pd_pigeon_title">
							<view class="pd_pigeon_title_left">
								<text class="pd_pigeon_title_left_gz">种鸽</text><text class="pd_pigeon_title_left_jl">死亡率:0.5%</text>
							</view>
							<view class="pd_pigeon_title_right">
								<text class="pd_pigeon_title_right_cl">存栏</text>
								<text class="pd_pigeon_title_right_num">9899</text>
							</view>
						</view>
						<view class="pd_pigeon_bt">
							<view class="pd_pigeon_bt_state pd_l_mr">
								<view class="pd_pigeon_bt_state_text">
									<text class="text_m">残疾</text>
								</view><text class="pd_pigeon_bt_state_num">98</text>
							</view>
							<view class="pd_pigeon_bt_state pd_r_mr">
								<view class="pd_pigeon_bt_state_text">
									<text>转出</text>
								</view><text class="pd_pigeon_bt_state_num">7878</text>
							</view>
							<view class="pd_pigeon_bt_state pd_l_mr">
								<view class="pd_pigeon_bt_state_text">
									<text class="text_m">死亡</text>
								</view><text class="pd_pigeon_bt_state_num">112</text>
							</view>
							<view class="pd_pigeon_bt_state pd_r_mr">
								<view class="pd_pigeon_bt_state_text">
									<text>新增</text>
								</view>
								<text class="pd_pigeon_bt_state_num">4499</text>
							</view>
						</view>
					</view>
					<view class="pd_bt">
						<text v-if="record">今日未记录&nbsp;＞</text>
						<button v-else type="default">修改记录</button>
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
				pd_data: false,
				list: [1, 2, 3,4,5],
				record:true,
				zkicon:['../../static/report/bt_zk.png','../../static/report/report_zk.png']
			}
		},
		methods: {
			exhibitionHandler() {
				this.pd_data = !this.pd_data
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pd_container {
		background-color: #f4f6fa;
		height: calc(100vh);
		font-weight: 500;

		.pd_title {
			height: 88rpx;
			display: flex;
			justify-content: space-between;
			padding: 41rpx 30rpx 0;
			background-color: #fff;

			.pd_title_left {
				text {
					font-size: 30rpx;
					color: #151515;
				}

				image {
					width: 12rpx;
					height: 22rpx;
					margin-left: 9rpx;
				}
			}

			.pd_title_right {
				width: 93rpx;
				display: flex;
				justify-content: space-between;
				text {
					font-size: 24rpx;
					color: #979797;
					line-height: 22rpx;
				}

				image {
					width: 12rpx;
					height: 22rpx;
				}
			}
		}
		.pd_splitLine{
			background-color: #f4f6fa;
			height: 20rpx;
		}
		.pd_item {
			border-radius: 20rpx !important;
			background-color: #fff;

			.pd_item_title {
				height: 88rpx;
				line-height: 88rpx;
				padding: 0 30rpx;
				border-bottom: 1rpx solid #f4f6fa;

				.pd_item_title_num {
					font-size: 30rpx;
					color: #151515;
				}

				.pd_item_title_syy {
					margin-left: 53rpx;
					font-size: 22rpx;
					font-family: SimHei;
					font-weight: 400;
					color: #979797;
				}

				.pd_item_title_syy_mz {
					font-size: 22rpx;
				}

				.pd_item_title_hg {
					font-size: 22rpx;
					font-family: SimHei;
					font-weight: 400;
					color: #979797;
					margin-left: 19rpx;
				}

				.pd_item_title_hl {
					margin-left: 60rpx;
					font-family: SimHei;
					font-weight: 400;
					color: #979797;
				}

				.pd_item_title_zl {
					font-size: 22rpx;
				}

				.yzk {
					width: 12rpx;
					height: 22rpx;
					margin-left: 64rpx;
				}
				.xzk{
					width: 22rpx;
					height: 12rpx;
					margin-left: 49rpx;
				}
			}

			.pd_item_content {
				padding: 0 30rpx;

				.pd_pigeon_title {
					height: 88rpx;
					line-height: 88rpx;
					padding: 8rpx 0 0;
					display: flex;
					justify-content: space-between;
					border-top: 2rpx solid #f4f6fa;

					.pd_pigeon_title_left_gz {
						font-size: 30rpx;
						color: #151515;
					}

					.pd_pigeon_title_left_jl {
						width: 150rpx;
						height: 32rpx;
						margin-left: 20rpx;
						background-color: rgba(251, 226, 223, 0.7);
						border-radius: 4rpx;
						font-size: 22rpx;
						text-align: center;
						padding: 0 9rpx;
						color: #e96d59;
					}

					.pd_pigeon_title_right {
						.pd_pigeon_title_right_cl {
							margin-right: 13rpx;
							font-size: 24rpx;
							color: #979797;
						}

						.pd_pigeon_title_right_num {
							font-size: 30rpx;
							font-weight: 400;
							color: #343434;
						}
					}
				}

				.pd_pigeon_bt {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;

					.pd_pigeon_bt_state {
						height: 44rpx;
						font-size: 22rpx;
						color: #979797;

						.pd_pigeon_bt_state_text {
							width: 110rpx;
							display: inline-block;
							position: relative;

							text {
								position: absolute;
								top: -26rpx;
								right: 0;
							}

							.text_m {
								margin-right: 55rpx;
							}
						}

						.pd_pigeon_bt_state_num {
							font-size: 30rpx;
							font-weight: 400;
							color: #343434;
							font-family: SimHei;
							margin-left: 19rpx;
						}
					}

					.pd_r_mr {
						margin-right: 200rpx;
					}

					.pd_l_mr {
						margin-right: 120rpx;
					}
				}

			}

			.pd_bt {
				height: 93rpx;
				padding: 1rpx 30rpx;
				button {
					float: right;
					width: 200rpx;
					height: 70rpx;
					border: 1px solid #377be4;
					border-radius: 35rpx;
					font-size: 30rpx;
					color: #377be4;
					line-height: 70rpx;

				}
				text{
					float: right;
					line-height: 93rpx;
					font-size: 30rpx;
					color: #e64329;
				}
			}
		}

	}
</style>
