<template>
	<view class="myFont">
		<view class="">
			<view class="cpt-mask" @click="ok" >
			</view>
		</view>
		<view class="d_container">
			<view class="">
				<view class="d_container_title">
					<text>异常警报</text>
				</view>
				<view class="d_containe_detail">
					<view class="d_containe_detail_bc">
						<text>种鸽需补充！</text><text>仓号2</text><text>鸽笼编号：</text><text>E区212</text>
					</view>
					<view class="d_containe_detail_st">
						<view class="d_containe_detail_st_title">
							<text>死淘异常！</text><text>仓号2</text><text>鸽笼编号：</text><text>E区212</text>
						</view>
						<view class="d_containe_detail_st_gz">
							<text>种鸽</text><text>死淘率</text><text>20只</text>
						</view>
						<view class="d_containe_detail_st_gz">
							<text>种鸽</text><text>死淘率</text><text>20只</text>
						</view>
						
					</view>
				</view>
			</view>
			<view class="d_btn_box">
				<view class="d_container_btn">
					<view class="d_container_btn_left">
						修改记录
					</view>
					<view class="d_container_btn_right" @click="ok">
						好的
					</view >
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
			ok(){
				console.log(1)
				this.$emit("closeM",'2')
			}
		}
	}
</script>

<style lang="scss">
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
		width: 580rpx;
		min-height: 220rpx;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 20;
		border-radius: 20rpx;
		font-weight: 500;
		.d_container_title{
			height: 122rpx;
			text-align: center;
			font-size: 34rpx;
			font-weight: bold;
			color: #151515;
			padding: 45rpx 30rpx 0;
		}
		.d_containe_detail_bc{
			padding: 0 30rpx 0;
			height: 62rpx;
			font-size: 24rpx;
			color: #343434;
			text:first-child {
				color: #e64329;
			}
			text:nth-child(2){
				margin:0 49rpx;
			}
			
		}
		.d_containe_detail_st{
			padding: 0 30rpx 0;
			min-height: 157rpx;
			font-size: 24rpx;
			.d_containe_detail_st_title{
				height: 38rpx;
				text:first-child {
					color: #e64329;
					margin-right: 24rpx;
				}
				text:nth-child(2){
					margin:0 49rpx;
				}
			}
			.d_containe_detail_st_gz{
				
				height: 46rpx;
				line-height: 46rpx;
				text:first-child {
					margin-left: 193rpx;
					margin-right: 22rpx;
				}
				text:nth-child(2){
					margin:0 77rpx 0 41rpx;
				}
			}
		}
		.d_container_btn{
			width: 580rpx;
			position: relative;
			bottom: 0;
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
				color: #e64329;
			}
			view{
				width: 290rpx;
			}
		}
	
	}
</style>
