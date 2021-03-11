<template>
	<view class="drug_use_calendar_container">
		<view>
		    <uni-calendar 
		    :insert="true"
		    :lunar="false" 
			:showMonth="false"
			:ymTime="time"
			:box="1"
		    :start-date="'2019-3-2'"
		    :end-date="'2019-5-20'"
		    @change="change"
			:name="'药用'"
		     />
		</view>
		<view class="explain">
			<image src="../../static/daiban/yimiao.png" mode=""></image>表示当日有疫苗使用
		</view>
		<view class="usageRecordBox">
			<view class="usageRecordTitle">
				使用记录
			</view>
			<!-- <view class="noRecord">今日没有疫苗使用记录~</view> -->
			<view class="" style="margin-top: 9rpx;">
				<view class="usageRecordItem">
					<view class="usageRecordItemLeft">
						<image src="../../static/daiban/g_g.png" mode=""></image>
						<view class="" style="margin-left: 13rpx;">
							<view class="usageRecordItemName">
								生产仓12
							</view>
							<text class="usageRecordItemTime">2018-12-11</text>
						</view>
					</view>
					<view class="" style="display: flex;">
						<view class="usageRecordItemBtn" style="margin-right: 40rpx;">
							{{'反馈'}}
						</view>
						<view class="usageRecordItemBtn" @click="toDUDPage()">
							查看
						</view>
					</view>
				</view>
				<view class="usageRecordItem">
					<view class="usageRecordItemLeft">
						<image src="../../static/daiban/r_g.png" mode=""></image>
						<view class="" style="margin-left: 13rpx;">
							<view class="usageRecordItemName">
								育雏仓4
							</view>
							<text class="usageRecordItemTime">2018-12-11</text>
						</view>
					</view>
					<view class="" style="display: flex;">
						<view class="usageRecordItemBtn" style="margin-right: 40rpx;" @click="toDUFeedBackPage()">
							{{'反馈'}}
						</view>
						<view class="usageRecordItemBtn">
							查看
						</view>
					</view>
				</view>
				<view class="usageRecordItem">
					<view class="usageRecordItemLeft">
						<image src="../../static/daiban/b_g.png" mode=""></image>
						<view class="" style="margin-left: 13rpx;">
							<view class="usageRecordItemName">
							飞棚管理仓36
							</view>
							<text class="usageRecordItemTime">2018-12-11</text>
						</view>
					</view>
					<view class="" style="display: flex;">
						<view class="usageRecordItemBtn" style="margin-right: 40rpx;">
							{{'反馈'}}
						</view>
						<view class="usageRecordItemBtn">
							查看
						</view>
					</view>
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
				time:["2021-03-01",'2021-03-07']
			}
		},
		methods: {
			  change(e){
			            console.log(e.fulldate)
			        },
					addSvRecord(){
						uni.navigateTo({
							url: '/sub/add_drug_use_record/add_drug_use_record'
						});
					},
					toDUDPage(){
						uni.navigateTo({
							url: '/sub/drug_use_detail/drug_use_detail'
						});
						
					},
					toDUFeedBackPage(){
						uni.navigateTo({
							url: '/sub/drug_use_feedBack/drug_use_feedBack'
						});
						
					}
		}
	}
</script>

<style lang="scss" scoped>
.drug_use_calendar_container{
	min-height: calc(100vh - 88rpx);
	
	.explain{
		font-size: 22rpx;
		font-weight: 500;
		color: #979797;
		padding-left: 30rpx;
		padding-bottom: 17rpx;
		background-color: #fff;
		image{
			width: 22rpx;
			height: 26rpx;
			margin-right: 12rpx;
			position: relative;
			top: 4rpx;
		}
	}
	.usageRecordBox{
		border-top: 20rpx solid #F4F6FA;
		padding: 40rpx 30rpx 45rpx;
		.usageRecordTitle{
			font-size: 36rpx;
			font-weight: bold;
			color: #151515;
			
		}
		.noRecord{
			text-align: center;
			font-size: 24rpx;
			font-weight: 500;
			color: #979797;
			margin-top: 50rpx;
		}
		.usageRecordItem{
			width: 690rpx;
			height: 120rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 1rpx 6rpx 0rpx rgba(0, 0, 0, 0.1);
			border-radius: 10rpx;
			margin-top: 20rpx;
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
			.usageRecordItemLeft{
				display: flex;
			}
			image{
				width: 40rpx;
				height: 40rpx;
			}
			.usageRecordItemName{
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
			}
			.usageRecordItemTime{
				font-size: 24rpx;
				font-weight: 500;
				color: #979797;
			}
			.usageRecordItemBtn{
				width: 120rpx;
				height: 48rpx;
				line-height: 48rpx;
				background: #FFFFFF;
				border: 1rpx solid #377BE4;
				border-radius: 24rpx;
				font-size: 24rpx;
				text-align: center;
				font-weight: 500;
				color: #377BE4;
				position: relative;
				right: 0;
				bottom: -30rpx;
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
