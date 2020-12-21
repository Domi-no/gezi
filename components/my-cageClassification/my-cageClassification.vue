<template>
	<view class="myCageClassification">
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
			<view class="_pigeon_type_bt">
				<view class="_pigeon_type_bt_item">
					<view class="_pigeon_type_bt_item_text">
						<text>残疾</text>
					</view><text class="_pigeon_type_bt_item_num">98</text>
				</view>
				<view class="_pigeon_type_bt_item">
					<view class="_pigeon_type_bt_item_text">
						<text>转出</text>
					</view><text class="_pigeon_type_bt_item_num">7878</text>
				</view>
				<view class="_pigeon_type_bt_item">
					<view class="_pigeon_type_bt_item_text">
						<text>死亡</text>
					</view><text class="_pigeon_type_bt_item_num">112</text>
				</view>
				<view class="_pigeon_type_bt_item">
					<view class="_pigeon_type_bt_item_text">
						<text>专职飞新增</text>
					</view>
					<text class="_pigeon_type_bt_item_num">4499</text>
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

<style lang="scss" scoped>
	.myCageClassification{
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
		
				._pigeon_type_top_left {
					._pigeon_type_top_left_zg {
						font-size: 30rpx;
						color: #151515;
					}
		
					._pigeon_type_top_left_mortality {
						width: 150rpx;
						height: 32rpx;
						background-color: rgba(251,226,223,0.7);
						border-radius: 4rpx;
						text-align: center;
						margin-left: 20rpx;
		
						text {
							font-size: 22rpx;
							margin: 0 9rpx;
							color: #e96d59;
						}
					}
				}
		
				._pigeon_type_top_right {
					._pigeon_type_top_right_save {
						font-size: 24rpx;
						color: #979797;
						margin-right: 13rpx;
					}
					
		
					._pigeon_type_top_right_num {
						font-size: 30rpx;
						color: #343434;
						font-weight: 300;
					}
				}
		
			}
			._pigeon_type_bt {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				padding: 30rpx;
			
				._pigeon_type_bt_item {
					height: 52rpx;
					font-size: 22rpx;
					margin-right: 125rpx;
					font-weight: 500;
					color: #979797;
					._pigeon_type_bt_item_text{
						width: 120rpx;
						display: inline-block;
						position: relative;
						text{
							position: absolute;
							top:-26rpx;
							right: 0;
						}
					}
					._pigeon_type_bt_item_num {
						font-size: 30rpx;
						font-weight: 400;
						color: #343434;
						font-family: SimHei;
						margin-left: 19rpx;
					}
				}
			}
		
			
		
		}
		
	}
</style>
