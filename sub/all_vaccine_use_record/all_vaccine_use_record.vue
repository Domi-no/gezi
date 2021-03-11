<template>
	<view class="allVaccineUseRecordContainer">
		<view class="allVaccineUseRecordTitle">
			本年疫苗使用记录
		</view>
		<view class="aVUROptionBox">
			<view class="allVaccineUseRecordTime">
				2018年12月
			</view>
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
					<view class="usageRecordItemBtn" @click="toVUDPage()">
						查看
					</view>
				</view>
			</view>
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
					<view class="usageRecordItemBtn" @click="toVUDPage()">
						查看
					</view>
				</view>
			</view>
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
					<view class="usageRecordItemBtn" @click="toVUDPage()">
						查看
					</view>
				</view>
			</view>
		</view>
		<view class="aVUROptionBox">
			<view class="allVaccineUseRecordTime">
				2018年12月
			</view>
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
					<view class="usageRecordItemBtn" @click="toVUDPage()">
						查看
					</view>
				</view>
			</view>
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
					<view class="usageRecordItemBtn" @click="toVUDPage()">
						查看
					</view>
				</view>
			</view>
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
					<view class="usageRecordItemBtn" @click="toVUDPage()">
						查看
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.allVaccineUseRecordContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F2F4F9;
	padding-top: 26rpx;
	.allVaccineUseRecordTitle{
		font-size: 30rpx;
		font-weight: bold;
		color: #151515;
		padding-left: 30rpx;
		
	}
	.aVUROptionBox{
		margin-bottom: 40rpx;
		.allVaccineUseRecordTime{
			font-size: 24rpx;
			font-weight: 500;
			color: #676767;
			padding-left: 30rpx;
			margin-top: 20rpx;
			margin-bottom: 19rpx;
		}
		.usageRecordItem{
			width: 100%;
			height: 120rpx;
			background: #FFFFFF;
			padding: 20rpx 30rpx;
			display: flex;
			justify-content: space-between;
			border-top: 2rpx solid #F2F4F9;
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
		.usageRecordItem:first-child{
			border-top: 0;
		}
	}
	
}
</style>
