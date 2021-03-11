<template>
	<view class="drug_storage_record_container">
		<view class="navigationBar">
			<view class="goBackImg" >
				<image @click="goBack" src="../../static/daiban/back.png" mode=""></image>
			</view>
			<view class="nBtitle">
				入库记录
			</view>
			<view class="nBright" >
				<text @click="">信息修改</text>
			</view>
		</view>
		<view class="dWTopBox">
			<text>记录时间</text><text>2020-12-21</text>
		</view>
		<view class="dWTopBox">
			<text>药品名称</text><text>药品一号</text>
		</view>
		<view class="dWTopBox">
			<text>生产厂家</text><text>药品一号</text>
		</view>
		<view class="dWTopBox">
			<text>生产批号</text><text>123132</text>
		</view>
		
		<view >
			<view class="dWTopBox boxMargin">
				
				<text>单位</text><text>一号</text>
			</view>
			<view class="dWTopBox">
				<text>数量</text><text>1</text>
			</view>
			<view class="dWTopBox">
				<text>单价</text><text>2</text>
			</view>
			<view class="dWCentreBox">
				<text>合计金额</text><text>{{this.dWmoney}}元</text>
			</view>
			<view class="dWTopBox boxMargin">
				<text>供货单位</text><text>一号</text>
			</view>
			<view class="dWTopBox">
				<text>批准人</text><text>张三</text>
			</view>
			<view class="dWTopBox">
				<text>接货人</text><text>张三</text>
			</view>
			<view class="leaveReason">
				<view class="">
					备注
				</view>
				<textarea   @input="dWremarks" :disabled="true" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			</view>
		</view>
		
		
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				
				remarks:''
				
			}
		},
		methods: {
			
			dWremarks({detail:{value}}){
				this.remarks =value
			},
			goBack(){
				uni.navigateBack({
				    delta: 1
				});
			}
		},
		computed:{
			
			dWmoney(){
				let {num,price}=this
				return num&&price? num*price : 0
			}
		}
	}
</script>

<style lang="scss" scoped>
.drug_storage_record_container{
	min-height: calc(100vh);
	background-color: #F4F6FA;
	padding-top: 108rpx;
	padding-bottom: 372rpx;
	color: #151515;
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
	.notSelected{
		color: #979797 !important;
	}
	.dWTopBox{
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
	.dWCentreBox{
		height: 88rpx;
		width: 100%;
		font-size: 30rpx;
		font-weight: 500;
		
		display: flex;
		justify-content: space-between;
		line-height: 88rpx;
		padding: 0 30rpx;
		background-color: #fff;
		border-top: 2rpx solid #F4F6FA;
		text:nth-child(2){
			font-size: 28rpx;
			// color: #343434;
		}
	}
	.leaveType{
		height: 140rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
		padding: 26rpx 30rpx 0;
		
	}
	.manager{
		height: 140rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		font-weight: 500;
		border-top:2rpx solid #F4F6FA ;
		padding: 26rpx 30rpx 0;
	}
	.typeName{
		margin-top: 30rpx;
	}
	.choiceBox{
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		font-weight: 500;
		color: #979797;
		margin-top: 16rpx;
		height: 44rpx;
		input{
			height: 44rpx;
		}
		
	}
	.leaveTime{
		height: 408rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		padding: 10rpx 30rpx 0;
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
	.leaveSubmit{
		width: 670rpx;
		height: 88rpx;
		background: #D1D2D3;
		border-radius: 44rpx;
		text-align: center;
		line-height: 88rpx;
		margin: 100rpx auto;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
	.isSubBg{
		background-color: #377BE4;
	}
	.star{
		width: 12rpx;
		height: 12rpx;
		position: relative;
		top: -12rpx;
		left: 12rpx;
	}
	.zk{
		width: 12rpx;
		height: 22rpx;
		position: relative;
		top: 8rpx;
	}
	.typePop{
		width: 100%;
		height: 918rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 0px 0px;
		.typePopTitle{
			font-size: 30rpx;
			font-weight: 500;
			color: #377BE4;
			padding: 43rpx 30rpx 25rpx;
		}
		.leavePopname{
			border-top: 2rpx solid #E4E5E9;
			padding-left: 30rpx;
			.radioStyle{
				height: 100rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				
			}
			.leave_line{
				width: 680rpx;
				height: 2rpx;
				background: #E4E5E9;
				margin-left: 40rpx;
			}
		}
	}
	.boxMargin{
		margin-top: 20rpx;
	}
}
</style>

