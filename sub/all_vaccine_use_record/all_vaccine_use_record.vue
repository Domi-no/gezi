<template>
	<view class="allVaccineUseRecordContainer">
		<view class="allVaccineUseRecordTitle">
			本{{title}}疫苗使用记录
		</view>
		<view class="aVUROptionBox" v-for="(item,idx) in monthList" :key="idx">
			<view class="allVaccineUseRecordTime">
				{{year+'年'+item}}
			</view>
			<view class="usageRecordItem" v-for="(i,index) in monthData[idx]" :key="index">
				<view class="usageRecordItemLeft">
					<image src="../../static/daiban/g_g.png" mode=""></image>
					<view class="" style="margin-left: 13rpx;">
						<view class="usageRecordItemName">
							{{i.name}}
						</view>
						<text class="usageRecordItemTime">{{i.usage_time}}</text>
					</view>
				</view>
				<view class="" style="display: flex;">
					<view :class="i.feedback=== '已反馈' ? 'usageRecordItemBtned' : 'usageRecordItemBtn'" style="margin-right: 40rpx;" @click="toAddVaccinePage(i)">
						{{i.feedback}}
					</view>
					<view class="usageRecordItemBtn" @click="toVUDPage(i)">
						查看
					</view>
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				text:'',
				year:'',
				monthList:[],
				newData:'',
				monthData:[]
			}
		},
		methods: {
			getVaccineUseRecord(){
				this.monthList=[]
				this.monthData=[]
				this.$http.post('/Vaccin/census.html', {uid: this.userInfo.id,type:0,text:this.text})
				.then((res) => {
						Object.keys(res.data).forEach((value, index)=>{
							this.year=value
							this.newData=res.data[value]
						});
						Object.keys(this.newData).forEach((value, index)=>{
							
							this.monthList.push(value)
							this.monthData.push(this.newData[value])
						});
						
					}).catch((err) => {
						
					})
			},
			toAddVaccinePage(i){
			
				// return false
				if(i.feedback === '已反馈'){
					return false
				}
				uni.navigateTo({
					url: '/sub/add_vaccine_use_record/add_vaccine_use_record?query=' + JSON.stringify(i)
				});
				
			},
			toVUDPage(i){
				
				// return false
				uni.navigateTo({
					 url: '/sub/details_of_vaccine_use/details_of_vaccine_use?query=' + JSON.stringify(i)
				}); 
			}
		},
		onLoad({query}) {
			
			this.text=query
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			title(){
				if(this.text === 'y'){
					return '年'
				}else if(this.text=== 's'){
					return '季'
				}else if(this.text === 'm'){
					return '月'
				}
			}
		},
		created() {
		
		},
		onShow() {
				this.getVaccineUseRecord()
		}
	}
</script>

<style lang="scss" scoped>
.allVaccineUseRecordContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F2F4F9;
	padding-top: 26rpx;
	padding-bottom: 64rpx;
	/*  #ifdef  MP-WEIXIN */
	min-height: calc(100vh);
	/*  #endif  */
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
			.usageRecordItemBtned{
				width: 120rpx;
				height: 48rpx;
				line-height: 48rpx;
				background: #FFFFFF;
				border: 1rpx solid #C4C4C4;
				border-radius: 24rpx;
				font-size: 24rpx;
				text-align: center;
				font-weight: 500;
				color: #C4C4C4;
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
