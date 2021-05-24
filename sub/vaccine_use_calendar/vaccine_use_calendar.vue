<template>
	<view class="vaccine_use_calendar_container">
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
			@monthChange="monthChange"
			@yearChange="yearChange"
			:name="'疫苗'"
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
				<view class="" v-for="(item,idx) in dayList[0]" :key="idx">
					<view class="usageRecordItem" v-if="item.type_name=== '生产仓'" >
						<view class="usageRecordItemLeft">
							<image src="../../static/daiban/g_g.png" mode=""></image>
							<view class="" style="margin-left: 13rpx;">
								<view class="usageRecordItemName">
									{{item.name}}
								</view>
								<text class="usageRecordItemTime">{{item.usage_time}}</text>
							</view>
						</view>
						<view class="" style="display: flex;">
							<view :class="item.text !== '已反馈' ? 'usageRecordItemBtn' : 'usageRecordItemBtned'" style="margin-right: 40rpx;" @click="toVUFeedBackPage(item)">
								{{item.text}}
							</view>
							<view class="usageRecordItemBtn" @click="toVUDPage(item)">
								查看
							</view>
						</view>
					</view>
					<view class="usageRecordItem" v-if="item.type_name=== '育雏仓'" >
						<view class="usageRecordItemLeft">
							<image src="../../static/daiban/r_g.png" mode=""></image>
							<view class="" style="margin-left: 13rpx;">
								<view class="usageRecordItemName">
									{{item.name}}
								</view>
								<text class="usageRecordItemTime">{{item.usage_time}}</text>
							</view>
						</view>
						<view class="" style="display: flex;">
							<view :class="item.text !== '已反馈' ? 'usageRecordItemBtn' : 'usageRecordItemBtned'" style="margin-right: 40rpx;" @click="toVUFeedBackPage(item)">
								{{item.text}}
							</view>
							<view class="usageRecordItemBtn" @click="toVUDPage(item)">
								查看
							</view>
						</view>
					</view>
					<view class="usageRecordItem" v-if="item.type_name=== '飞鹏管理仓'" >
						<view class="usageRecordItemLeft">
							<image src="../../static/daiban/b_g.png" mode=""></image>
							<view class="" style="margin-left: 13rpx;">
								<view class="usageRecordItemName">
									{{item.name}}
								</view>
								<text class="usageRecordItemTime">{{item.usage_time}}</text>
							</view>
						</view>
						<view class="" style="display: flex;">
							<view :class="item.text !== '已反馈' ? 'usageRecordItemBtn' : 'usageRecordItemBtned'" style="margin-right: 40rpx;" @click="toVUFeedBackPage(item)">
								{{item.text}}
							</view>
							<view class="usageRecordItemBtn" @click="toVUDPage(item)">
								查看
							</view>
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
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				time:[],
				dataFrom:{
					usage_y:'',
					usage_m:''
				},
				vaccineUseData:'',
				vaccineList:'',
				today:'',
				dayList:[],
				backDay:'',
			}
		},
		methods: {
			change(e){  
			  	this.dayList=[]
				this.backDay=e
			  	console.log(this.time)
			  	console.log(this.vaccineUseData)
			  	this.today=e.date
				if(this.vaccineUseData){
					Object.keys(this.vaccineUseData).forEach((value, index)=>{
						// console.log(value, index,this.drugUseList[value]);
						if(value == this.today){	
							this.dayList.push(this.vaccineUseData[value])	
						}
						console.log(this.dayList)
					});
				}
			  	
			  
			},
			addSvRecord(){
			 uni.navigateTo({
				 url: '/sub/add_vaccine_use_record/add_vaccine_use_record'
			 });
			},
			toVUDPage(i){
			 
			
			 uni.navigateTo({
				 url: '/sub/details_of_vaccine_use/details_of_vaccine_use?query=' + JSON.stringify(i)
			 }); 
			},
			toVUFeedBackPage(i){
			if(i.text === '已反馈'){
				return false
			}
			uni.navigateTo({
				url: '/sub/add_vaccine_use_record/add_vaccine_use_record?query=' + JSON.stringify(i)
			});
			 
			},
			monthChange(e){
				console.log(e)
				this.dataFrom.usage_m=e
				this.getVYCData()
			},
			yearChange(e){
				console.log(e)
				this.dataFrom.usage_y=e
				
				this.getVYCData()
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 this.dataFrom.usage_m = M < 10?  '0'+ M : M
				 this.dataFrom.usage_y=Y
				 this.today=D
				 console.log(this.today)
				 console.log(D)
				
			},
			getVYCData(){
				this.time=[]
				this.dayList=[]
				this.vaccineUseData=''
				console.log(this.dayList)
				this.$http.post('/Vaccin/takeNotes.html', {uid: this.userInfo.id,...this.dataFrom})
				.then((res) => {
						console.log(res)
						this.vaccineUseData=res.data.day
						Object.keys(this.vaccineUseData).forEach((value, index)=>{
							console.log(value, index,this.vaccineUseData[value],this.today);
							
							this.time.push(this.vaccineUseData[value][0].usage_time)
							if(value == this.today){
								this.dayList=[]
								this.dayList.push(this.vaccineUseData[value])
							}
							
						});
					
					}).catch((err) => {
						
					})
			}
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
		},
		created() {
			this.getToday()
			// this.getVYCData()
			
		},
		onShow() {
			this.getToday()
			this.getVYCData()
			this.change(this.backDay)
		}
	}
</script>

<style lang="scss" scoped>
.vaccine_use_calendar_container{
	min-height: calc(100vh - 88rpx);
	/*  #ifdef  MP-WEIXIN */
	min-height: calc(100vh);
	/*  #endif  */
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
