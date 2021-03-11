<template>
	<view class="clockInContainer">
		<view class="informationCard">
			<view class="information_left">
				<view class="avatar">
					
				</view>
				<view class="name">
					<view class="">
						张三
					</view>
					<text>饲养员</text>
				</view>
			</view>
			<text class="cRule">考勤规则</text>
		</view>
		<view class="" style="padding: 41rpx 30rpx 0;">
			<view class="clockDetail">
				<view class="circle">
					
				</view>
				<view class="" style="margin-left: 13rpx;position: relative;top: -32rpx;">
					<view class="clock_time">
						上班时间&nbsp;&nbsp;&nbsp;09:00:00
					</view>
					<view class="clock_img">
						<image src="../../static/daiban/ydk.png" mode=""></image>已打卡&nbsp;&nbsp;&nbsp;08:52:40
					</view>
				</view>
				
			</view>
			<view class="clockDetail">
				<view class="circle">
					
				</view>
				<view class="" style="margin-left: 13rpx;position: relative;top: -32rpx;">
					<view class="clock_time">
						上班时间&nbsp;&nbsp;&nbsp;09:00:00
					</view>
					<view class="clock_img">
						<image src="../../static/daiban/ydk.png" mode=""></image>已打卡&nbsp;&nbsp;&nbsp;08:52:40
					</view>
				</view>
				
			</view>
			<view class="clockDetail">
				<view class="circle">
					
				</view>
				<view class="" style="margin-left: 13rpx;position: relative;top: -32rpx;">
					<view class="clock_time">
						上班时间&nbsp;&nbsp;&nbsp;09:00:00
					</view>
					<view class="clock_img">
						<image src="../../static/daiban/ydk.png" mode=""></image>已打卡&nbsp;&nbsp;&nbsp;08:52:40
					</view>
				</view>
				
			</view>
			<view class="clockDetail">
				<view class="circle">
					
				</view>
				<view class="" style="margin-left: 13rpx;position: relative;top: -32rpx;">
					<view class="clock_time">
						上班时间&nbsp;&nbsp;&nbsp;09:00:00
					</view>
					<view class="clock_img">
						<image src="../../static/daiban/ydk.png" mode=""></image>已打卡&nbsp;&nbsp;&nbsp;08:52:40
					</view>
				</view>
				
			</view>
		</view>
		<view class="clockBtn">
			<view class="oClockBtn">
				<view class="iClockBtn">
					<view class="">
						上班打卡
					</view>
					<text>09:00:00</text>
				</view>
			</view>
		</view>
		<view class="wifiClock">
			<image src="../../static/daiban/zdwz.png" mode=""></image>已进入打卡范围：和天下鸽业WIFI
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picSrc:['../../static/daiban/ydk.png','../../static/daiban/wdk.png','../../static/daiban/dkcs.png','../../static/daiban/zdwz.png']
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.clockInContainer{
	min-height: calc(100vh);
	background-color: #F4F6FA;
	.informationCard{
		width: 100%;
		height: 120rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		border-top: 2rpx solid #F4F6FA;
		.information_left{
			display: flex;
			margin: auto 0;
			.avatar{
				width: 87rpx;
				height: 88rpx;
				border-radius: 50%;
				background-color: #fac;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.name{
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				margin-left: 20rpx;
				text{
					font-size: 24rpx;
					font-weight: 500;
					color: #979797;
				}
			}
		}
		.cRule{
			line-height: 120rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #377BE4;
		}
	}
	.clockDetail{
		height: 90rpx;
		position: relative;	
		// padding-left: 33rpx;
		border-left: 2rpx solid #E4E5E9;
		display: flex;
		margin-top: 40rpx;
		.clock_time{
			font-size: 24rpx;
			font-weight: 500;
			color: #151515;
			// line-height: 22rpx;
		}
		.clock_img{
			font-size: 24rpx;
			font-weight: 500;
			color: #17631E;
			margin-top: 20rpx;
			image{
				width: 20rpx;
				height: 26rpx;
				margin-right: 13rpx;
			}
		}
		.circle{
			width: 20rpx;
			height: 20rpx;
			position: relative;
			top: -26rpx;
			left: -10rpx;
			background: #F4F6FA;
			border: 2rpx solid #377BE4;
			border-radius: 50%;
		}
	}
	.clockBtn{
		width: 290rpx;
		height: 290rpx;
		background:rgba(55, 123, 228, 0.1);
		border-radius: 50%;
		margin: 30rpx auto 0;
		.oClockBtn{
			width: 250rpx;
			height: 250rpx;
			background: rgba(55, 123, 228, 0.25);
			border-radius: 50%;
			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			.iClockBtn{
				width: 220rpx;
				height: 220rpx;
				background:rgba(55, 123, 228, 1);
				border-radius: 50%;
				position: relative;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				text-align: center;
				font-size: 36rpx;
				font-weight: 500;
				color: #FFFFFF;
				padding-top: 56rpx;
				text{
					display: block;
					font-size: 30rpx;
					margin-top: 25rpx;
				}
			}
		}
	}
	.wifiClock{
		height: 32rpx;
		margin: 62rpx auto 0;
		text-align: center;
		image{
			width: 26rpx;
			height: 32rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #151515;
			margin-right: 11rpx;
		}
	}
}
</style>
