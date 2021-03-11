<template>
	<view class="harmlessTreatmentContainer">
		<view class="hTTopBox">
			<text>时间</text><view>2020-12-25<image src="../../static/daiban/b_zk.png" mode=""></image></view>
		</view>
		<view class="" style="margin-top: 20rpx;">
			<view class="hTItem" @click="toTFInputPage('种鸽')">
				<view class="ht_left_box">
					<view class="ht_left_Img">
						<image src="../../static/daiban/ht_p.png" mode=""></image>
					</view>
					<view class="ht_left_detail">
						<view class="ht_left_detail_top">
							<text class="ht_num">种鸽死亡：0</text><text class="isHandle">未处理</text>
						</view>
						<text class="hTRemarks">备注：</text>
					</view>
				</view>
				
				<image class="ht_zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="hTItem" @click="toTFInputPage('臭蛋')">
				<view class="ht_left_box">
					<view class="ht_left_Img">
						<image src="../../static/daiban/ht_b.png" mode=""></image>
					</view>
					<view class="ht_left_detail">
						<view class="ht_left_detail_top">
							<text class="ht_num">臭蛋数量：0</text><text class="isHandle">未处理</text>
						</view>
						<text class="hTRemarks">备注：</text>
					</view>
				</view>
				
				<image class="ht_zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="hTItem" @click="toTFInputPage('乳鸽')">
				<view class="ht_left_box">
					<view class="ht_left_Img">
						<image src="../../static/daiban/ht_g.png" mode=""></image>
					</view>
					<view class="ht_left_detail">
						<view class="ht_left_detail_top">
							<text class="ht_num">乳鸽死亡：0</text><text class="isHandle">未处理</text>
						</view>
						<text class="hTRemarks">备注：</text>
					</view>
				</view>
				
				<image class="ht_zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="hTItem" @click="toTFInputPage('童鸽')">
				<view class="ht_left_box">
					<view class="ht_left_Img">
						<image src="../../static/daiban/ht_o.png" mode=""></image>
					</view>
					<view class="ht_left_detail">
						<view class="ht_left_detail_top">
							<text class="ht_num">童鸽死亡：0</text><text class="isHandle">未处理</text>
						</view>
						<text class="hTRemarks">备注：</text>
					</view>
				</view>
				
				<image class="ht_zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
			<view class="hTItem" @click="toTFInputPage('青年鸽')">
				<view class="ht_left_box">
					<view class="ht_left_Img">
						<image src="../../static/daiban/b_g.png" mode=""></image>
					</view>
					<view class="ht_left_detail">
						<view class="ht_left_detail_top">
							<text class="ht_num">青年鸽死亡：0</text><text class="isHandle">未处理</text>
						</view>
						<text class="hTRemarks">备注：</text>
					</view>
				</view>
				
				<image class="ht_zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
		</view>
		<view class="handlerBox" v-show="false">
			<view class="toExamineBox">
				<view class="leaveReason">
					<view class="">
						审核结果：<text style="color: #E64329;">未通过</text><text style="color: #1D8A27;">通过</text><text style="color: #377BE4;">审核中</text>
					</view>
					<textarea   @input="dWremarks"  placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
				</view>
			</view>
			<view class="htSubmit">
				提交
			</view>
		</view>
		<view class="leaveReason">
			<view class="">
				审核结果
			</view>
			<textarea   @input="dWremarks"  placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			<view class="examineBtnBox">
				<view class="refuseBtn">
					拒绝
				</view>
				<view class="adoptBtn">
					通过
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
			toTFInputPage(name){
				uni.navigateTo({
					url:'/sub/t_f_change/t_f_change?query='+name
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
.harmlessTreatmentContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	
	.hTTopBox{
		width: 100%;
		height: 88rpx;
		background: #FFFFFF;
		padding: 0 30rpx;
		line-height: 88rpx;
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
		border-top: 2rpx solid #F4F6FA;;
		image{
			width: 12rpx;
			height: 22rpx;
			margin-left: 19rpx;
			position: relative;
			top: 2rpx;
		}
		view{
			font-size: 24rpx;
			color: #343434;
		}
	}
	.hTItem{
		width: 100%;
		height: 120rpx;
		background: #FFFFFF;
		border-top: 2rpx solid #F4F6FA;
		display: flex;
		justify-content: space-between;
		padding: 20rpx 30rpx 0;
		.ht_left_box{
			display: flex;
			justify-content: space-between;
		}
		.ht_left_Img{
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
		.ht_left_detail{
			width: 284rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #979797;
			margin-left: 19rpx;
			.ht_left_detail_top{
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				font-weight: 500;
				.ht_num{
					color: #151515;
				}
				
			}
			.hTRemarks{
				display: block;
				margin-top: 14rpx;
			}
		}
		.ht_zk{
			width: 12rpx;
			height: 22rpx;
			position: relative;
			top: 50%;
			transform: translateY(-22rpx);
		}
	}
	.hTItem:first-child{
		border-top: 0;
	}
	.htSubmit{
		width: 670rpx;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		margin: 100rpx auto 46rpx;
		background: #377BE4;
		border-radius: 44rpx;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
	.handlerBox{
		padding-bottom: 46rpx;
	}
	.toExamineBox{
		min-height: 180rpx;
	}
	.leaveReason{
		// height: 320rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		font-size: 30rpx;
		font-weight: 500;
		
		padding: 26rpx 30rpx 42rpx;
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
		.examineBtnBox{
			width: 550rpx;
			height: 64rpx;
			display: flex;
			font-size: 34rpx;
			font-weight: 500;
			
			margin: 100rpx auto 70rpx;
			text-align: center;
			justify-content: space-between;
			view{
				width: 200rpx;
				height: 64rpx;
				border-radius: 32rpx;
				line-height: 64rpx;
			}
			.refuseBtn{
				border: 2rpx solid #E64329;
				color: #E64329;
			}
			.adoptBtn{
				border: 2rpx solid #1D8A27;
				color: #1D8A27;
			}
		}
	}
}
</style>
