<template>
	<view class="feedConsumptionContainer">
		<view class="sterilizeTime" @click="choiceTime">
			<view class="sterilizeTimeLeft">
				时间
			</view>
			<view class="sterilizeTimeRight">
				<text>{{date}}</text><image class="zk" src="../../static/daiban/b_zk.png" mode=""></image>
			</view>
		</view>
		<view class="sterilizeTime" @click="choiceWarehouseNumber">
			<view class="sterilizeTimeLeft">
				鸽仓类型
			</view>
			<view class="sterilizeTimeRight">
				<text>{{type_name||'全部'}}</text><image class="zk" src="../../static/daiban/b_zk.png" mode=""></image>
			</view>
		</view>
		<view class="">
			<view class="sterilizeItem" v-for="(i,idx) in dataList" :key="idx">
				<view class="sterilizeHead">
					<view class="warehouse">
						<image src="../../static/daiban/g_g.png" mode=""></image>{{i.name}}
					</view>
					<view class="name">
						{{i.date}}
					</view>
				</view>
				<view class="sterilizeDetail">
					<view class="">
						<text class="sterilizeDetailKey">饲料类型：<text class="sterilizeDetailValue">{{i.grain_name}}</text></text><text class="sterilizeDetailKey">领取重量：<text class="sterilizeDetailValue">{{i.number}}{{i.unit_price}}</text></text>
					</view>
					<view class="">
						<text class="sterilizeDetailKey">饲料发放人：<text class="sterilizeDetailValue">{{i.issuer}}</text></text><text></text>
					</view>
					<view class="">
						<text class="sterilizeDetailKey">备注：<text class="sterilizeDetailValue"></text></text><text></text>
					</view>
				</view>
			</view>
			
				
		</view>
		<view class="addSterilizeRecord" @click="toReceiveRrecordPage">
			<image src="../../static/daiban/jia.png" mode=""></image>
		</view>
		<lb-picker ref="time" mode="dateSelector"  :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='dateChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="warehouse" :props="myProps" :list="list" radius="20rpx" confirm-color="#377BE4" @confirm='typeNameChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
	</view>
</template>

<script>
	import LbPicker from '@/components/lb-picker'
	import {
		mapState
	} from 'vuex'
	export default {
		 components: {
		      LbPicker
		    },
		data() {
			return {
				list: [],
				myProps:{
					 label: 'type_name',
					 value: 'block_type',
				},
				warehouseList: [
				  {
				    label: '选项1',
				    value: '1',
				    children: [
				      {
				        label: '选项1-1',
				        value: '1-1',
				        children: [
				                  {
				                    label: '选项1-1-1',
				                    value: '1-1-1'
				                  }
				              ]
				      }
				    ]
				  }
				  
				],
				date:'',
				type_name:'',
				dataList:[],
			}
		},
		methods: {
			choiceWarehouseNumber(){
				this.$refs.warehouse.show()
			},
			choiceTime(){
				this.$refs.time.show()
			},
			dateChange(e){
				console.log(e.value)
				this.date=e.value
				this.getConsumeData()
			},
			typeNameChange(e){
				console.log(e)
				this.type_name=e.item.type_name
				this.getConsumeData()
			},
			toReceiveRrecordPage(){
				uni.navigateTo({
					url: '/sub/receive_record/receive_record'
				});
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				 // this.drugUseForm.time_y=Y
				this.date=times
				 console.log(D)	
			},
			getTypeBlockData(){
				this.$http.post('/Grain/typeBlock.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
					this.list=res.data
					}).catch((err) => {
						
				})
			},
			getConsumeData(){
				this.$http.post('/Grain/consume.html', {uid: this.userInfo.id,date:this.date,type_name:this.type_name})
				.then((res) => {
						console.log(res)
					this.dataList=res.data
					}).catch((err) => {
						
				})
			}
			
		},
		created() {
			this.getToday()
			this.getTypeBlockData()
			this.getConsumeData()
		},
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
		},
		onShow() {
			this.getConsumeData()
		}
	}
</script>


<style lang="scss" scoped>
.feedConsumptionContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	padding-bottom: 30rpx;
	.sterilizeTime{
		width: 100%;
		height: 88rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		line-height: 88rpx;
		.zk{
			width: 12rpx;
			height: 22rpx;
			position: relative;
			top: 2rpx;
		}
		.sterilizeTimeLeft{
			font-size: 30rpx;
			font-weight: 500;
			color: #151515;
		}
		.sterilizeTimeRight{
			font-size: 24rpx;
			font-weight: 500;
			color: #343434;
			text{
				margin-right: 19rpx;
			}
		}
	}
	.sterilizeTime:nth-child(2){
		border-top: 1rpx solid #F4F6FA;
	}
	.sterilizeItem{
		width: 100%;
		height: 260rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
		padding: 0 30rpx;
		.sterilizeHead{
			height: 80rpx;
			display: flex;
			justify-content: space-between;
			border-bottom: 2rpx solid #E4E5E9;
			line-height: 80rpx;
			.warehouse{
				height: 28rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				image{
					width: 40rpx;
					height: 40rpx;
					position: relative;
					top: 10rpx;
					margin-right: 13rpx;
				}
			}
			.name{
				font-size: 24rpx;
				font-weight: 500;
				color: #979797;
			}
		}
		.sterilizeDetail{
			height: 170rpx;
			display: flex;
			flex-direction:column ;
			justify-content: space-around;
			view{
				display: flex;
				justify-content: space-between;
				.sterilizeDetailKey{
					font-size: 24rpx;
					font-weight: 500;
					color: #979797;
				}
				.sterilizeDetailValue{
					color: #343434;
				}
			}
		}
	}
	.addSterilizeRecord{
		position: fixed;
		bottom: 188rpx;
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
