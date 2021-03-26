<template>
	<view class="in_out_record_detailContainer">
		<view class="navigationBar">
			<view class="goBackImg" >
				<image @click="goBack" src="../../static/daiban/back.png" mode=""></image>
			</view>
			<view class="nBtitle">
				入库记录
			</view>
			<view class="nBright" >
				<text @click="toRecordsPage">信息修改</text>
			</view>
		</view>
		<view class="in_out_record_detailOutBox">
			<view class="">
				<text>记录时间</text><text>{{recordsDetailData.record_time}}</text>
			</view>
			<view class="">
				<text>药品名称</text><text>{{recordsDetailData.drugs_name}}</text>
			</view>
			<view class="">
				<text>生产厂家</text><text>{{recordsDetailData.production}}</text>
			</view>
			<view class="">
				<text>生产批号</text><text>{{recordsDetailData.batch_number}}</text>
			</view>
		</view>
		<view class="in_out_record_detailOutBox">
			<view class="">
				<text>单位</text><text>{{recordsDetailData.unit}}</text>
			</view>
			<view class="">
				<text>数量</text><text>{{recordsDetailData.number}}</text>
			</view>
			<view class="">
				<text>单价</text><text>{{recordsDetailData.unit_price}}</text>
			</view>
			<view class="">
				<text>合计金额</text><text>{{recordsDetailData.price	}}</text>
			</view>
		</view>
		<view class="in_out_record_detailOutBox">
			<view class="">
				<text>供货单位</text><text>{{recordsDetailData.supplier}}</text>
			</view>
			<view class="">
				<text>批准人</text><text>{{recordsDetailData.approved}}</text>
			</view>
			<view class="">
				<text>接货人</text><text>{{recordsDetailData.receiver}}</text>
			</view>
		</view>
		<view class="leaveReason">
			<view class="">
				备注
			</view>
			<textarea   @input="" :value="recordsDetailData.remarks" disabled="true"  placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				queryData:'',
				recordsDetailData:'',
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
				    delta: 1
				});
			},
			toRecordsPage(){
				console.log(this.recordsDetailData)
				uni.navigateTo({
					url:'../drugs_warehousing/drugs_warehousing?query='+JSON.stringify(this.recordsDetailData)
				})
			},
			getIntoData(){
				console.log(this.queryData)
				this.$http.post('/Vaccin/getInto.html', {log_id: this.queryData.log_id})
				.then((res) => {
						console.log(res)
					this.recordsDetailData=res.data
						this.recordsDetailData.log_id=this.queryData.log_id
					}).catch((err) => {
						
				})
			}
		},
		onLoad({query}) {
			this.queryData=JSON.parse(query)
			
		},
		created() {
			this.getIntoData()
		}
		
	}
</script>

<style lang="scss" scoped>
	.in_out_record_detailContainer{
		background-color: #F4F6FA;
		min-height: calc(100vh);
		padding-top: 88rpx;
		padding-bottom: 88rpx;
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
		.in_out_record_detailOutBox{
			margin-top: 20rpx;
			view{
				height: 88rpx;
				display: flex;
				justify-content: space-between;
				padding: 0 30rpx;
				line-height: 88rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				border-top: 1rpx solid #F4F6FA;
				background-color: #fff;
				text:nth-child(2){
					font-size: 28rpx;
				}
			}
			view:first-child{
				border-top: 0;
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
