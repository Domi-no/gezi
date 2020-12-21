<template>
	<view class="myFont">
		<view class="">
			<view class="cpt-mask" @click="$emit('closeM')">
			</view>
		</view>
		<view class="d_container">
			<view class="d_container_title">
				<text>确认提交日记录？</text>
			</view>
			<view class="d_container_btn">
				<view class="d_container_btn_left" @click="$emit('closeM')">
					取消
				</view>
				<view class="d_container_btn_right">
					确定
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
		height: 230rpx;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: 20;
		border-radius: 20rpx;
		.d_container_title{
			height: 140rpx;
			text-align: center;
			font-size: 34rpx;
			font-weight: bold;
			color: #151515;
			padding-top: 49rpx;
		}
		
		.d_container_btn{
			width: 540rpx;
			position: relative;
			bottom: 0rpx;
			left: 0;
			height: 88rpx;
			border-top: 1rpx solid #e4e5e9;
			text-align: center;
			display: flex;
			line-height: 88rpx;
			font-size: 30rpx;
			color: #377be4;
			.d_container_btn_left{
				border-right: 1rpx solid #e4e5e9;
			}
			view{
				width: 270rpx;
			}
		}

	}
</style>

