<template>
	<view class="myFont productionCalendarContainer">
		<uni-calendar :insert="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'" @change="change" @monthChange="monthChange" @yearChange="yearChange" :showMonth="false"></uni-calendar>
		<!-- ei-calendar -->
		<!-- <view class="page">
			date: {{date}}
			<button @click="show = true">click</button>
			<ei-calendar :visible.sync="show" :disabledDate="disabledDate" v-model="date" :custom-date="customDate" format="YYYY-MM-DD">
			</ei-calendar>
		</view> -->
		<view class="pCbottom">
			<view class="">
				
			</view>
			<view style="display: flex;" @click="toRecordDetailPage"><text>数据详情</text><image src="../../static/cage/cage_s_zk.png" mode=""></image></view>
		</view>
		<view class="" v-for="(i,idx) in calendarList" :key="idx">
			<view class="_pigeon_type" v-if="i.alias === '种鸽'" >
				<view class="_pigeon_type_top">
					<view class="_pigeon_type_top_left">
						<view class="">
							<!-- 种鸽 -->
							<image src="../../static/daiban/ht_p.png" mode="" ></image>
							
						</view>
						<view class="_pigeon_type_top_left_zg">{{i.alias}}</view>
						<view class="_pigeon_type_top_left_mortality">死亡率：{{i.pct}}</view>
					</view>
					<view class="_pigeon_type_top_right" v-show="today===time">
						<text class="_pigeon_type_top_right_save">存栏</text>
						<text class="_pigeon_type_top_right_num">{{i.survival}}</text>
					</view>
				</view>
				<view class="_pigeon_type_bt">
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>残疾</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.disease}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>转出</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.shift_to}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>死亡</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.death}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>新增</text>
						</view>
						<text class="_pigeon_type_bt_item_num">{{i.added_wit}}</text>
					</view>
				</view>
			</view>
			<view class="_pigeon_type"  v-if="i.alias === '鸽蛋'">
				<view class="_pigeon_type_top">
					<view class="_pigeon_type_top_left">
						<image src="../../static/daiban/ht_b.png" mode=""></image>
						<view class="_pigeon_type_top_left_zg">鸽蛋</view>
						<view class="_pigeon_type_top_left_mortality">破损率：{{i.pct}}</view>
					</view>
					<view class="_pigeon_type_top_right" v-show="today===time">
						<text class="_pigeon_type_top_right_save">存栏</text>
						<text class="_pigeon_type_top_right_num">{{i.survival}}</text>
					</view>
				</view>
				<view class="_pigeon_type_bt">
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>破损</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.disease}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>入库</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.added_wit}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>臭蛋</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.death}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>转入孵化机</text>
						</view>
						<text class="_pigeon_type_bt_item_num">{{i.shift_to}}</text>
					</view>
				</view>
			</view>
			<view class="_pigeon_type"  v-if="i.alias === '乳鸽'">
				<view class="_pigeon_type_top">
					<view class="_pigeon_type_top_left">
						<image src="../../static/daiban/ht_g.png" mode=""></image>
						<view class="_pigeon_type_top_left_zg">乳鸽</view>
						<view class="_pigeon_type_top_left_mortality">死亡率：{{i.pct}}</view>
					</view>
					<view class="_pigeon_type_top_right" v-show="today===time">
						<text class="_pigeon_type_top_right_save">存栏</text>
						<text class="_pigeon_type_top_right_num">{{i.survival}}</text>
					</view>
				</view>
				<view class="_pigeon_type_bt">
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>残疾</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.disease}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>出售</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.sell}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>死亡</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.death}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>孵化机转入</text>
						</view>
						<text class="_pigeon_type_bt_item_num">{{i.shift_to}}</text>
					</view>
				</view>
			</view>
			<view class="_pigeon_type" v-if="i.alias === '童鸽'">
				<view class="_pigeon_type_top">
					<view class="_pigeon_type_top_left">
						<image src="../../static/daiban/ht_o.png" mode=""></image>
						<view class="_pigeon_type_top_left_zg">童鸽</view>
						<view class="_pigeon_type_top_left_mortality">死亡率：{{i.pct}}</view>
					</view>
					<view class="_pigeon_type_top_right" v-show="today===time">
						<text class="_pigeon_type_top_right_save">存栏</text>
						<text class="_pigeon_type_top_right_num">{{i.survival}}</text>
					</view>
				</view>
				<view class="_pigeon_type_bt">
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>残疾</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.disease}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>转至飞棚</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.shift_to}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>死亡</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.death}}</text>
					</view>
					
				</view>
			</view>
			
			<view class="_pigeon_type" v-if="i.alias === '青年鸽'">
				<view class="_pigeon_type_top">
					<view class="_pigeon_type_top_left">
						<image src="../../static/daiban/b_g.png" mode=""></image>
						<view class="_pigeon_type_top_left_zg">青年鸽</view>
						<view class="_pigeon_type_top_left_mortality">死亡率：{{i.pct}}</view>
					</view>
					<view class="_pigeon_type_top_right" v-show="today===time">
						<text class="_pigeon_type_top_right_save">存栏</text>
						<text class="_pigeon_type_top_right_num">{{i.survival}}</text>
					</view>
				</view>
				<view class="_pigeon_type_bt">
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>残疾</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.disease}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text">
							<text>转至飞棚</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.shift_to}}</text>
					</view>
					<view class="_pigeon_type_bt_item">
						<view class="_pigeon_type_bt_item_text leftBox">
							<text>死亡</text>
						</view><text class="_pigeon_type_bt_item_num">{{i.death}}</text>
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
				show: true,
				mode: 'date',
				date: '',
				customDate: [{
					cellClass: 'custom-cell',
					date: '2019-05-23',
					top: [{
							class: 'custom-cell-top-1',
							text: '①'
						},
						{
							class: 'custom-cell-top-2',
							text: '×'
						}
					]
				}],
				today:'',
				calendarList:[],
				time:'',
			}
		},
		methods: {
			change(e) {
				console.log(e);
				this.today=e.fulldate
				this.getCalendarData()
			},
			monthChange(e){
				console.log(e)
				
			},
			yearChange(e){
				console.log(e)
				
				
			},
			disabledDate(date) {
				const start = new Date('2019/5/10').getTime();
				const end = new Date('2019/6/21').getTime();
				return date.getTime() <= start || date.getTime() >= end;
			},
			toRecordDetailPage(){
				uni.navigateTo({
					url: '/sub/production_data/production_data'
				});
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				this.today=times
				this.time= times
					
			},
			getCalendarData(){
				this.$http.post('/CageData/calendar.html',{uid:this.userInfo.id,time:this.today})
				.then((res)=>{
					console.log(res)
					this.calendarList=res.data
				}).catch((err)=>{
					console.log(err)
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
			this.getCalendarData()
		}
	}
	
</script>

<style lang="scss" scoped>
	.calendar {
		height: 598rpx;
	}

	.page {
		background: #f8f8f8;
		height: 100vh;
		font-size: 28upx;
	}

	.custom-cell {
		color: #4cd964;
	}

	.custom-cell-top-1 {
		color: #007aff;
	}

	.custom-cell-top-2 {
		color: red;
	}
	.productionCalendarContainer{
		padding-bottom: 83rpx;
		.pCbottom{
			height: 83rpx;
			display: flex;
			justify-content: space-between;
			padding: 0 30rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #979797;
			line-height: 83rpx;
			border-top: 20rpx solid #F4F6FA;
			image{
				width: 12rpx;
				height: 22rpx;
				position: relative;
				top: 30rpx;
				// transform: translateY(-50%);
				margin-left: 10rpx;
			}
		}
		._pigeon_type {
			width: 690rpx;
			height: 210rpx;
			background: #FFFFFF;
			box-shadow: 0px 2rpx 10rpx 0px rgba(4, 10, 61, 0.1);
			border-radius: 20rpx;
			margin: 30rpx auto 0;
			._pigeon_type_top {
				height: 76rpx;
				border-bottom: 2rpx solid #e4e5e9;
				display: flex;
				justify-content: space-between;
				padding: 0rpx 30rpx 0;
				font-weight: 500;
				line-height: 76rpx;
				._pigeon_type_top_left {
					display: flex;
					image{
						width: 40rpx;
						height: 40rpx;
						
						margin:auto 12rpx auto 0;
					}
					._pigeon_type_top_left_zg {
						font-size: 30rpx;
						color: #151515;
					}
		
					._pigeon_type_top_left_mortality {
						
						height: 32rpx;
						background-color: rgba(251,226,223,0.7);
						border-radius: 4rpx;
						// text-align: center;
						margin-left: 20rpx;
						padding: 0 9rpx;
						color: #e96d59;
						font-size: 22rpx;
						margin:auto 0 auto 12rpx;
						line-height: 32rpx;
						
					}
				}
		
				._pigeon_type_top_right {
					._pigeon_type_top_right_save {
						font-size: 24rpx;
						color: #979797;
						margin-right: 13rpx;
					}
					
		
					._pigeon_type_top_right_num {
						font-size: 30rpx;
						color: #343434;
						font-weight: 300;
					}
				}
		
			}
			._pigeon_type_bt {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				padding: 30rpx;
			
				._pigeon_type_bt_item {
					height: 52rpx;
					font-size: 22rpx;
					margin-right: 125rpx;
					font-weight: 500;
					color: #979797;
					._pigeon_type_bt_item_text{
						width: 120rpx;
						display: inline-block;
						position: relative;
						text{
							position: absolute;
							top:-26rpx;
							right: 0;
						}
					}
					._pigeon_type_bt_item_num {
						font-size: 30rpx;
						font-weight: 400;
						color: #343434;
						font-family: SimHei;
						margin-left: 19rpx;
					}
					.leftBox{
						width: 100rpx !important;
					}
				}
			}
		
			
		
		}
	}
	
</style>
