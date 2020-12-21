<template>
	<view>
		<view class="">
			<view class="cpt-mask" >
			</view>
		</view>
		<view class="d_container">
			<view class="d_container_top">
				<text>当日最多可修改3次记录</text>
			</view>
			<view class="d_container_bt">
				今日剩余修改次数 <text>3</text>
			</view>
			<view class="d_container_btn">
				<view class="d_container_btn_left">
					取消
				</view>
				<view class="d_container_btn_right">
					确认
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
		},
		methods:{
			closePicker(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cpt-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000000;
		opacity: 0.4;
		z-index: 1;
	}


	.d_container {
		width: 540rpx;
		height: 280rpx;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: 20;
		border-radius: 20rpx;
		.d_container_top{
			height: 122rpx;
			text-align: center;
			font-size: 34rpx;
			font-weight: bold;
			color: #151515;
			padding-top: 45rpx;
		}
		.d_container_bt{
			font-size: 28rpx;
			font-weight: 500;
			color: #343434;
			text{
				margin-left: 25rpx;
				color: #377be4;
			}
		}
		.d_container_btn{
			height: 88rpx;
			border-top: 1rpx solid #e4e5e9;
			margin-top: 33rpx;
			display: flex;
			line-height: 88rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #377be4;
			.d_container_btn_left{
				border-right: 1rpx solid #e4e5e9;
			}
			view{
				flex: 1;
			}
		}

	}
</style>
