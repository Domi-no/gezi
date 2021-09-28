<template>
	<view class="myFont alertContainer">
		<view class="">
			<view class="alert_item" v-for="(item,index) in alarmList" :key="index">
				<view class="alert_item_title">
					<text class="alert_time">{{item.time}}</text>
					<text v-if="item.type !== '未处理'" class="Processed">已处理</text>
					<text v-else class="untreated">未处理!</text>	
				</view>
				<!-- 判断数据是否有需补足和死淘  不同仓库需要上边框-->
				<view class="alert_content" v-for="(i,idx) in item.data" :key="idx">
					<view class="a_containe_detail" v-for="(ite,inde) in i.chData" :key="inde">
						<view class="a_containe_detail_bc" v-if="ite.glData['种鸽需补足']">
							<text>种鸽需补充</text><text>{{i.chName}}</text><text>鸽笼编号：{{ite.glName}}</text><text></text>
						</view>
						<view class="a_containe_detail_bc" v-if="ite.glData['无产能异常']" >
							<text>无产能异常</text><text>{{ite.glData['无产能异常'].block_name}}</text><text>鸽笼编号：{{ite.glData['无产能异常'].name}}</text><text></text>
						</view>
						<view class="a_containe_detail_bc" v-if="ite.glData['死精蛋异常']" >
							<text>死精蛋异常</text><text>{{ite.glData['死精蛋异常'].block_name}}</text><text>鸽笼编号：{{ite.glData['死精蛋异常'].name}}</text><text></text>
						</view>
						<view class="a_containe_detail_bc" v-if="ite.glData['病残率异常']" >
							<text>病残率异常</text><text>{{i.chName}}</text><text>鸽笼编号：{{ite.glName}}</text><text></text>
						</view>
						<view class="a_containe_detail_bc" v-if="ite.glData['死淘率异常']" >
							<text>死淘率异常</text><text>{{i.chName}}</text><text>鸽笼编号：{{ite.glName}}</text><text></text>
						</view>
						<view class="a_containe_detail_st">
							<view  class="a_containe_detail_st_gz" v-if="ite.glData['死淘率异常']" >
								<text>死淘率异常</text><text>{{ite.glData['死淘率异常'].alias}}</text><text>死淘率{{ite.glData['死淘率异常'].ratio}}</text><text>{{ite.glData['死淘率异常'].death}}只</text>
							</view>
							<view  class="a_containe_detail_st_gz" v-if="ite.glData['病残率异常']" >
								<text>病残率异常</text><text>{{ite.glData['病残率异常'].alias}}</text><text>病残率{{ite.glData['病残率异常'].ratio}}</text><text>{{ite.glData['病残率异常'].death}}只</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="InTheEnd">
			已经到底了~. ~
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
				// 是否处理
			isHandled:true,
			alarmList:[]
			}
		},
		methods:{
			
			gitCallPoliceList(){
				this.$http.post('/CageData/callPolice.html', {uid: this.userInfo.id})
				.then((res) => {
					
					Object.keys(res.data).forEach((value, index)=>{
						
						this.alarmList.push({time:res.data[value].time,data:[],type:res.data[value].type})
						if(res.data[value].data){
							Object.keys(res.data[value].data).forEach((val, ind)=>{
								
									
								// console.log(val,res.data[value].data[val])
								
								this.alarmList[index].data.push({chName:val,chData:[]})
								if(res.data[value].data[val]){
									Object.keys(res.data[value].data[val]).forEach((valu, inde)=>{
										// console.log(valu,res.data[value].data[val][valu])
										
										
										
										this.alarmList[index].data[ind].chData.push({glName:valu,glData:res.data[value].data[val][valu]})
										
										
									// console.log(3)	
									
									
									});
								}
							});
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
			this.gitCallPoliceList()
		}
	}
</script>

<style lang="scss" scoped>
	.alertContainer {
		min-height: calc(100vh);
		background-color: #f4f6fa;
		padding-top: 1rpx;
		padding-bottom: 60rpx;
		font-weight: 500;
		.alert_item {
			margin-top: 20rpx;
			background-color: #fff;
			.alert_item_title {
				height: 88rpx;
				display: flex;
				justify-content: space-between;
				line-height: 88rpx;
				padding: 0 30rpx;
				border-bottom: 1rpx solid #f4f6fa;
				.alert_time {
					font-size: 30rpx;
					color: #151515;
				}
				// 未处理
				.untreated {
					font-size: 24rpx;
					color: #e64329;
				}
				// 已处理
				.Processed {
					font-size: 24rpx;
					color: #377be4;
				}
			}
			.alert_content{
				font-size: 28rpx;
				padding: 0 30rpx 0;
				.a_containe_detail{
					border-bottom: 2rpx solid #f4f6fa;
					.a_containe_detail_bc{
						height: 84rpx;
						line-height: 84rpx;
						display: flex;
						color: #343434;
						text:first-child{
							color: #e64329;
						}
						text:nth-child(2){
							min-width: 154rpx;
							margin: 0 0 0 60rpx;
						}
					}
					.a_containe_detail_st{
						.a_containe_detail_st_title{
							height: 57rpx;
							color: #343434;
							display: flex;
							text:first-child{
								color: #e64329;
								margin-right: 28rpx;
							}
							text:nth-child(2){
								min-width: 154rpx;
								margin: 0 0 0 60rpx;
							}
						}
						.a_containe_detail_st_gz{
							height: 56rpx;
							display: flex;
							text:first-child{
								visibility:hidden;
							}
							text:nth-child(2){
								min-width: 154rpx;
								margin: 0 0 0 60rpx;
							}
							text:nth-child(3){
								min-width: 225rpx;
								
							}
							text:nth-child(4){
								min-width: 60rpx;
								text-align: right;
								
							}
						}
					}
				}
			}
		}
		.InTheEnd{
			font-size: 24rpx;
			font-weight: 500;
			color: #979797;
			text-align: center;
			margin-top: 49rpx;
		}
	}
</style>
