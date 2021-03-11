<template>
	<view class="details_of_vaccine_use_container">
		
		<view class="navigationBar">
			<view class="goBackImg" >
				<image @click="goBack" src="../../static/daiban/back.png" mode=""></image>
			</view>
			<view class="nBtitle">
				疫苗使用详情
			</view>
			<view class="nBright" >
				<text @click="toRecordsPage">信息修改</text>
			</view>
		</view>
		<view class="" style="margin-top: 20rpx;">
			<view class="dDTopBox">
				<text>记录时间</text><text>2020-12-21</text>
			</view>
			<view class="dDTopBox" style="border-bottom: 0;">
				<text>仓号</text><text>生产仓23</text>
			</view>
		</view>
		<view class="" style="margin-top: 20rpx;">
			<view class="dDTopBox">
				<text>疫苗名称</text><text>疫苗一号</text>
			</view>
			<view class="dDTopBox">
				<text>使用原因</text><text>生病</text>
			</view>
			<view class="dDTopBox">
				<text>生产厂家</text><text>3号厂家</text>
			</view>
			<view class="dDTopBox">
				<text>生产日期</text><text>2020-12-12</text>
			</view>
			<view class="dDTopBox" style="border-bottom: 0;">
				<text>批号</text><text>321321</text>
			</view>
		</view>
		<view class="" style="margin-top: 20rpx;">
			<view class="dDTopBox">
				<text>用苗时间</text><text>2020-12-21</text>
			</view>
			<view class="dDTopBox" style="border-bottom: 0;">
				<text>接种数量</text><text>56</text>
			</view>
		</view>
		<view class="" style="margin-top: 20rpx;">
			<view class="dDTopBox">
				<text>免疫方法</text><text>方法一</text>
			</view>
			<view class="dDTopBox">
				<text>免疫计量</text><text>12</text>
			</view>
			<view class="dDTopBox">
				<text>免疫人员</text><text>王五</text>
			</view>
			<view class="dDTopBox">
				<text>饲养员</text><text>王五</text>
			</view>
			<view class="dDTopBox">
				<text>免疫工作负责人</text><text>王五</text>
			</view>
			<view class="dDTopBox" style="border-bottom: 0;">
				<text>接种单位负责人</text><text>王五</text>
			</view>
		</view>
		<view class="leaveReason">
			<view class="">
				备注
			</view>
			<textarea   :disabled="false" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
				    delta: 1
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
.details_of_vaccine_use_container{
	padding-top: 88rpx;
	padding-bottom: 136rpx;
	min-height: calc(100vh);
	background-color: #F4F6FA;
	.navigationBar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-around;
		
		padding: 0 30rpx;
		.goBackImg{
			width: 200rpx;
			height: 100%;
			image{
				width: 22rpx;
				height: 34rpx;
				position: relative;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		.nBtitle{
			width: 200rpx;
			font-size: 32rpx;
			font-weight: 700;
			color: #151515;
			text-align: center;
			line-height: 88rpx;
		}
		.nBright{
			width: 200rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #377BE4;
			text-align:right;
			line-height: 88rpx;
		}
	}
	.dDTopBox{
		height: 88rpx;
		width: 100%;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
		display: flex;
		justify-content: space-between;
		line-height: 88rpx;
		padding: 0 30rpx;
		background-color: #fff;
		border-bottom: 2rpx solid #F4F6FA;
		text:nth-child(2){
			font-size: 28rpx;
			color: #343434;
		}
	}
	.leaveReason{
		height: 320rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		font-size: 30rpx;
		font-weight: 500;
		
		padding: 26rpx 30rpx 0;
		textarea{
			width: 660rpx;
			height: 172rpx;
			border: 1rpx solid #D1D2D3;
			margin-top: 14rpx;
			padding: 19rpx 15rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #979797;
			line-height: 42rpx;
		}
	}
}
</style>
