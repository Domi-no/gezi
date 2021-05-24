<template>
	<view class="food_in_detailContainer">
		<!-- <view class="navigationBar">
			<view class="goBackImg" >
				<image @click="goBack" src="../../static/daiban/back.png" mode=""></image>
			</view>
			<view class="nBtitle">
				入库记录
			</view>
			<view class="nBright" >
				<text @click="toRecordsPage">信息修改</text>
			</view>
		</view> -->
		<view class="in_out_record_detailOutBox">
			<view class="">
				<text>记录时间</text><text>{{recordDetail.record_time}}</text>
			</view>
			<view class="">
				<text>物品名称</text><text>{{recordDetail.grain_name}}</text>
			</view>
			
		</view>
		<view class="in_out_record_detailOutBox">
			<view class="">
				<text>单位</text><text>{{recordDetail.unit}}</text>
			</view>
			<view class="">
				<text>数量</text><text>{{recordDetail.number}}</text>
			</view>
			<view class="">
				<text>单价</text><text>{{recordDetail.unit_price}}</text>
			</view>
			<view class="">
				<text>合计金额</text><text>{{recordDetail.price}}</text>
			</view>
		</view>
		<view class="in_out_record_detailOutBox">
			<view class="">
				<text>供货单位</text><text>{{recordDetail.supplier}}</text>
			</view>
			<view class="">
				<text>检验人</text><text>{{recordDetail.examiner}}</text>
			</view>
			
		</view>
		<view class="leaveReason">
			<view class="">
				备注
			</view>
			<textarea   @input="" :value="recordDetail.remarks" disabled="true" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				queryData:'',
				recordDetail:'',
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
				    delta: 1
				});
			},
			onNavigationBarButtonTap(){
				uni.navigateTo({
					url: '/sub/foods_warehousing/foods_warehousing?query='+ JSON.stringify(this.recordDetail)
				});
			},
			getIntoData(){
				this.$http.post('/Grain/getInto.html', {grain_id: this.queryData.grain_id})
				.then((res) => {
						console.log(res)
						this.recordDetail=res.data
						this.recordDetail.grain_id=this.queryData.grain_id
						// if(res.code == 200){
						// 	uni.showToast({
						// 		title:'提交成功',
						// 		icon: 'none'
						// 	})
						
						// }else{
						// 	uni.showToast({
						// 		title:'提交失败',
						// 		icon: 'none'
						// 	})
						// }
					}).catch((err) => {
						
				})
			}
		},
		onLoad({query}) {
			this.queryData=JSON.parse(query)
		},
		created() {
			
		},
		onShow() {
			this.getIntoData()
		}
	}
</script>

<style lang="scss" scoped>
	.food_in_detailContainer{
		background-color: #F4F6FA;
		min-height: calc(100vh);
		padding-top:1rpx;
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
