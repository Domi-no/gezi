<template>
	<view class="details_of_vaccine_use_container">
		<!-- #ifdef MP-WEIXIN -->
	<!-- <view class="navigationBar">
		<view class="goBackImg" >
			<image @click="goBack" src="../../static/daiban/back.png" mode=""></image>
		</view>
		<view class="nBtitle">
			疫苗使用详情
		</view>
		<view class="nBright" >
			<text @click="toChangeMessagePage">信息修改</text>
		</view>
	</view> -->
		<!-- #endif -->
		
		<view class="" >
			<view class="dDTopBox">
				<text>记录时间</text><text>{{query.usage_time}}</text>
			</view>
			<view class="dDTopBox" style="border-bottom: 0;">
				<text>仓号</text><text>{{query.name}}</text>
			</view>
		</view>
		<view class="" style="margin-top: 20rpx;">
			<view class="dDTopBox">
				<text>疫苗名称</text><text>{{vaccineDetailData.drugs_name}}</text>
			</view>
			<view class="dDTopBox">
				<text>使用原因</text><text>{{vaccineDetailData.symptom}}</text>
			</view>
			<view class="dDTopBox">
				<text>生产厂家</text><text>{{vaccineDetailData.production}}</text>
			</view>
			<view class="dDTopBox">
				<text>生产日期</text><text>{{vaccineDetailData.producedate}}</text>
			</view>
			<view class="dDTopBox" style="border-bottom: 0;">
				<text>批号</text><text>{{vaccineDetailData.batch_number}}</text>
			</view>
		</view>
		<view class="" style="margin-top: 20rpx;">
			<view class="dDTopBox">
				<text>用苗时间</text><text>{{vaccineDetailData.usage_time}}</text>
			</view>
			<view class="dDTopBox" style="border-bottom: 0;">
				<text>接种数量</text><text>{{vaccineDetailData.number}}</text>
			</view>
		</view>
		<view class="" style="margin-top: 20rpx;">
			<view class="dDTopBox">
				<text>免疫方法</text><text>{{vaccineDetailData.method}}</text>
			</view>
			<view class="dDTopBox">
				<text>免疫计量</text><text>{{vaccineDetailData.dosage}}</text>
			</view>
			<view class="dDTopBox">
				<text>免疫人员</text><text>{{vaccineDetailData.personnel}}</text>
			</view>
			<view class="dDTopBox">
				<text>饲养员</text><text>{{vaccineDetailData.breeder}}</text>
			</view>
			<view class="dDTopBox">
				<text>免疫工作负责人</text><text>{{vaccineDetailData.approval}}</text>
			</view>
			<view class="dDTopBox" style="border-bottom: 0;">
				<text>接种单位负责人</text><text>{{vaccineDetailData.charge}}</text>
			</view>
		</view>
		<view class="leaveReason">
			<view class="">
				备注
			</view>
			<textarea   disabled="true" :value="vaccineDetailData.feedback"  placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
		</view>
			<!-- #ifdef MP-WEIXIN -->
		<view class="messageChangeBtn" @click="toChangeMessagePage">
			信息修改
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				query:'',
				vaccineDetailData:''
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
				    delta: 1
				});
			},
			getVaccineUseDetail(){
				console.log(this.query)
				this.$http.post('/Vaccin/RecordMe.html', {uid: this.userInfo.id,vaccin_id:this.query.vaccin_id})
				.then((res) => {
						console.log(res)
						this.vaccineDetailData=res.data[0]
				
					}).catch((err) => {
						
					})
			},
			toChangeMessagePage(){
				uni.navigateTo({
					url: '/sub/add_vaccine_use_record/add_vaccine_use_record?query=' + JSON.stringify(this.query)
				});
			},
			onNavigationBarButtonTap(){
				console.log(this.query)
				uni.navigateTo({
					url: '/sub/add_vaccine_use_record/add_vaccine_use_record?query=' + JSON.stringify(this.query)
				});
			},
		
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			
		},
		created() {
			
		},
		onShow() {
			this.getVaccineUseDetail()
		},
		onLoad({query}) {
			console.log(JSON.parse(query))
			this.query=JSON.parse(query),
			this.query.feedback="已反馈"
			console.log(query)
		}
	}
</script>

<style lang="scss" scoped>
.details_of_vaccine_use_container{
	padding-top: 20rpx;
	/*  #ifdef  MP-WEIXIN  */
	padding-top: 20rpx;
	/*  #endif  */
	padding-bottom: 136rpx;
	min-height: calc(100vh);
	background-color: #F4F6FA;
	.navigationBar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		 // height: var(--status-bar-height);
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
	.messageChangeBtn{
		width: 670rpx;
		height: 88rpx;
		background: #377BE4;
		border-radius: 44rpx;
		text-align: center;
		line-height: 88rpx;
		margin: 80rpx auto 30rpx;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
}
</style>
