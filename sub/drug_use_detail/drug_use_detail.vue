<template>
	<view class="addNewDrugUseRecordContainer">
		<!-- #ifdef MP-WEIXIN -->
		<view class="navigationBar">
			<view class="goBackImg" >
				<image @click="goBack" src="../../static/daiban/back.png" mode=""></image>
			</view>
			<view class="nBtitle">
				药品使用详情
			</view>
			<view class="nBright" >
				<text @click="toChangeMessagePage">信息修改</text>
			</view>
		</view>
		<!-- #endif -->
		
		<view class="dWTopBox">
			<text>记录时间</text><text>{{messageChangeForm.time}}</text>
		</view>
		<view class="dWTopBox">
			<text>用药鸽仓</text><text>{{messageChangeForm.name}}</text>
		</view>
		<view class="leaveReason">
			<view class="">
				症状描述
			</view>
			<textarea   :disabled="true" placeholder="" :value="drugUseDetailForm.symptom" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
		</view>
		<view class="" style="margin-top: 20rpx;">
			<view class="dWTopBox">
				<text>生病数量</text><text>{{drugUseDetailForm.number}}</text>
			</view>
			<view class="dWTopBox">
				<text>开始用药时间</text><text>{{drugUseDetailForm.usage_time}}</text>
			</view>
			<view class="dWTopBox">
				<text>用药天数</text><text>{{drugUseDetailForm.day}}</text>
			</view>
		</view>
		<view class=""  style="margin-top: 20rpx;">
			<view class="dWTopBox">
				<text>药品名称</text><text>{{drugUseDetailForm.drugs_name}}</text>
			</view>
			<view class="dWTopBox">
				<text>生产厂家</text><text>{{drugUseDetailForm.production}}</text>
			</view>
			<view class="dWTopBox">
				<text>药品批号</text><text>{{drugUseDetailForm.batch_number}}</text>
			</view>
		</view>
		<view class=""  style="margin-top: 20rpx;">
			<view class="dWTopBox">
				<text>药品用量</text><text>{{drugUseDetailForm.dosage}}</text>
			</view>
			<view class="dWTopBox">
				<text>用药审批人</text><text>{{drugUseDetailForm.approval}}</text>
			</view>
		</view>
		
		<view class="leaveReason">
			<view class="">
				用药反馈
			</view>
			<textarea    :value="drugUseDetailForm.feedback"   disabled="true" />
		</view>

	</view>
</template>

<script>
	export default {
		
		 
		data() {
			return {
				id:'',
				time:'',
				name:'',
				starSrc:['../../static/daiban/star.png','../../static/daiban/n_s_star.png'],
				drugUseDetailForm:{},
				messageChangeForm:{
					time:'',
					name:'',
					block_id:'',
					record_id:''
				}
				
			}
		},
		methods:{
			toChangeMessagePage(){
				const messageForm =JSON.stringify(this.messageChangeForm)
				uni.navigateTo({
					url: '/sub/add_drug_use_record/add_drug_use_record?query=' + messageForm
				});
			},
			onNavigationBarButtonTap(){
				console.log()
				const messageForm =JSON.stringify(this.messageChangeForm)
				uni.navigateTo({
					url: '/sub/add_drug_use_record/add_drug_use_record?query=' + messageForm
				});
			},
			goBack(){
				uni.navigateBack({
				    delta: 1
				});
			},
			getRecordsForm(){
				this.$http.post('/Work/RecordMe.html', {record_id: this.id,})
				.then((res) => {
						console.log(res)
						this.drugUseDetailForm=res.data[0]
						console.log(this.drugUseDetailForm)
						this.messageChangeForm.block_id = res.data[0].block_id
						this.messageChangeForm.record_id=res.data[0].record_id
				}).catch((err) => {
					
				})
			}
		},
		onLoad(e) {
			console.log(e)
		
			this.id=JSON.parse(e.query).record_id
			this.messageChangeForm.name=JSON.parse(e.query).type_name
			this.messageChangeForm.time=JSON.parse(e.query).usage_time
			console.log(this.messageChangeForm)
		},
		created() {
			// this.getRecordsForm()
		},
		onShow() {
			this.getRecordsForm()
		}
		
	}
</script>

<style lang="scss" scoped>
.addNewDrugUseRecordContainer{
	min-height: calc(100vh);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	/*  #ifdef  MP-WEIXIN  */
	padding-top: 100rpx;
	/*  #endif  */
	padding-bottom: 189rpx;
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
