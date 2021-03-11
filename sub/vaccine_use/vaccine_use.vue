<template>
	<view class="vaccine_use_container">
		<view class="vaccine_use_top_box">
			<text>2020-12-22</text>
			<view class="" @click="toCalendarPage()">
				日历<image src="../../static/daiban/blue_zk.png" mode=""></image>
			</view>
		</view>
		<view class="vaccineUseSecordItem">
			<view class="vU_title">
				<view class="">
					<image src="../../static/daiban/nian.png" mode=""></image>本年疫苗使用记录
				</view>
				<text>共计56次</text>
			</view>
			<view class="vU_time">
				<image src="../../static/daiban/time.png" mode=""></image>2020年1月~12月
			</view>
			<view class="vU_view_detailsBtnBox">
				<view class="">
					
				</view>
				<view class="vU_view_detailsBtn" @click="toAVUDetailsPage()">
					查看详情
				</view>
			</view>
		</view>
		<view class="vaccineUseSecordItem">
			<view class="vU_title">
				<view class="">
					<image src="../../static/daiban/yue.png" mode=""></image>本年疫苗使用记录
				</view>
				<text>共计56次</text>
			</view>
			<view class="vU_time">
				<image src="../../static/daiban/time.png" mode=""></image>2020年1月~12月
			</view>
			<view class="vU_view_detailsBtnBox">
				<view class="">
					
				</view>
				<view class="vU_view_detailsBtn">
					查看详情
				</view>
			</view>
		</view>
		<view class="vaccineUseSecordItem">
			<view class="vU_title">
				<view class="">
					<image src="../../static/daiban/ji.png" mode=""></image>本年疫苗使用记录
				</view>
				<text>共计56次</text>
			</view>
			<view class="vU_time">
				<image src="../../static/daiban/time.png" mode=""></image>2020年1月~12月
			</view>
			<view class="vU_view_detailsBtnBox">
				<view class="">
					
				</view>
				<view class="vU_view_detailsBtn">
					查看详情
				</view>
			</view>
		</view>
		<view class="addSterilizeRecord" @click="addSvRecord">
			<image src="../../static/daiban/jia.png" mode=""></image>
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
			addSvRecord(){
				uni.navigateTo({
					url: '/sub/add_vaccine_use_record/add_vaccine_use_record'
				});
			},
			toAVUDetailsPage(){
				
				uni.navigateTo({
					url: '/sub/all_vaccine_use_record/all_vaccine_use_record'
				});
			},
			toCalendarPage(){
				uni.navigateTo({
					url: '/sub/vaccine_use_calendar/vaccine_use_calendar'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.vaccine_use_container{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	.vaccine_use_top_box{
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		background: #FFFFFF;
		border-top: 2rpx solid #F4F6FA;
		font-size: 28rpx;
		font-weight: 500;
		color: #377BE4;
		padding: 0 30rpx;
		margin-bottom: 10rpx;
		display: flex;
		justify-content: space-between;
		text{
			font-size: 30rpx;
			font-weight: 500;
			color: #151515;
		}
		image{
			width: 12rpx;
			height: 22rpx;
			margin-left: 18rpx;
		}
	}
	.vaccineUseSecordItem{
		width: 690rpx;
		height: 180rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 10rpx 0rpx rgba(4, 10, 61, 0.07);
		border-radius: 20rpx;
		margin: 30rpx auto 0;
		padding: 24rpx 30rpx 0;
		.vU_title{
			height: 30rpx;
			line-height: 30rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #151515;
			display: flex;
			justify-content: space-between;
			
			image{
				width: 26rpx;
				height: 28rpx;
				margin-right: 13rpx;
				position: relative;
				top: 4rpx;
			}
			text{
				font-size: 24rpx;
				font-weight: 500;
				color: #E64329;
			}
		}
		.vU_time{
			font-size: 24rpx;
			font-weight: 500;
			color: #979797;
			margin-top: 14rpx;
			image{
				width: 24rpx;
				height: 24rpx;
				margin-right: 13rpx;
				position: relative;
				top: 4rpx;
			}
		}
		
		.vU_view_detailsBtnBox{
			display: flex;
			justify-content: space-between;
			.vU_view_detailsBtn{
				width: 140rpx;
				height: 48rpx;
				background: #FFFFFF;
				border: 1rpx solid #377BE4;
				border-radius: 24rpx;
				font-size: 24rpx;
				font-weight: 500;
				color: #377BE4;
				text-align: center;
				line-height: 48rpx;
				margin-top: 14rpx;
			}
		}
	}
	.addSterilizeRecord{
		position: fixed;
		bottom: 80rpx;
		right: 50rpx;
		width: 100rpx;
		height: 100rpx;
		background: #377BE4;
		box-shadow: 0px 15rpx 20rpx 0px rgba(55, 123, 228, 0.2);
		border-radius: 50%;
		image{
			width: 48rpx;
			height: 48rpx;
			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
	}
}
</style>
