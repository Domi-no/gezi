<template>
	<view class="recordsContainer">
		<view class="records_top">
			<view class="records_top_i">
				<text class="records_top_i_left">仓号</text>
				<view class="records_top_i_right">
					<text class="records_top_i_right_text">仓号1</text>
					<image src="../../static/report/report_zk.png" mode=""></image>
				</view>
			</view>
			<view class="records_top_i">
				<text class="records_top_i_left">组号</text>
				<view class="records_top_i_right">
					<text class="records_top_i_right_text">233</text>
					<image src="../../static/report/report_zk.png" mode=""></image>
				</view>
			</view>
			<view class="records_top_i">
				<text class="records_top_i_left">日期</text><text class="records_top_i_right">2020-12-02</text>
			</view>
		</view>
		<view class="records_breedingPigeon">
			<view class="records_breedingPigeon_title">
				<view class="">
					<text class="records_breedingPigeon_title_zg">种鸽</text>
					<text class="records_breedingPigeon_title_cl">存栏
					<text class="records_breedingPigeon_title_num">9999</text>只</text>
				</view>
				<text class="records_breedingPigeon_title_careful">注意！需要补足种鸽！</text>
			</view>
			<!--  -->
			<view class="records_breedingPigeon_i">
				<text class="records_breedingPigeon_i_left">病残淘汰</text>
				<view class="records_breedingPigeon_i_right">
					<text class="records_breedingPigeon_i_right_as">一</text>
					<input type="text" value="" placeholder="数量"/>
					<text class="records_breedingPigeon_i_right_as">+</text>
					<text class="records_breedingPigeon_i_right__">只</text>
				</view>
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
	.recordsContainer {
		background-color: #f4f6fa;
		padding-top: 20rpx;
		.records_top {
			background-color: #fff;
			.records_top_i {
				height: 88rpx;
				line-height: 80rpx;
				padding: 0 30rpx;
				display: flex;
				justify-content: space-between;
				border-bottom: 2rpx solid #f4f6fa;
				.records_top_i_left{
					font-size: 30rpx;
					color: #151515;
					font-weight: 500rpx;
				}
				.records_top_i_right {
					font-size: 28rpx;
					font-weight: 500;
					color: #343434;
					.records_top_i_right_text{
						margin-right: 20rpx;
					}
					image {
						width: 12rpx;
						height: 22rpx;
					}
				}
			}

		}
		.records_breedingPigeon{
			margin-top: 39rpx;
			.records_breedingPigeon_title{
				height: 88rpx;
				line-height: 88rpx;
				background-color: #fff;
				padding: 0 30rpx;
				display: flex;
				justify-content: space-between;
				.records_breedingPigeon_title_zg{
					font-size: 30rpx;
					font-weight: 500;
					color: #151515;
				}
				.records_breedingPigeon_title_cl{
					margin-left: 59rpx;
					font-size: 28rpx;
					font-weight: 500;
					color: #343434;
					.records_breedingPigeon_title_num{
						margin: 0 20rpx;
						color: #377be4;
						font-family: SimHei;
						font-weight: 400;
					}
				}
				.records_breedingPigeon_title_careful{
					font-size: 24rpx;
					font-weight: 500;
					color: #e64329;
				}
			}
			.records_breedingPigeon_i{
				height: 88rpx;
				line-height: 88rpx;
				padding: 0 30rpx;
				font-size: 22rpx;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				margin-top: 2rpx;
				.records_breedingPigeon_i_left{
					font-size: 30rpx;
					font-weight: 500;
					color: #151515;
				}
				.records_breedingPigeon_i_right{
					.records_breedingPigeon_i_right_as{
						font-size: 28rpx;
					}
					input{
						width: 100rpx;
						font-size: 28rpx;
						font-weight: 500;
						color: #377be4;
						margin-top: 20rpx;
						display: inline-block;
					}
					.records_breedingPigeon_i_right__{
						font-size: 28rpx;
						font-weight: 500;
						color: #343434;
					}
				}
			}
		}
	}
</style>
