<template>
	<view class="sterilizeContainer">
		<view class="sterilizeTime">
			<view class="sterilizeTimeLeft">
				时间
			</view>
			<view class="sterilizeTimeRight" @click="cSTimePopupShow">
				<text>{{record_time}}</text><image class="zk" src="../../static/daiban/b_zk.png" mode=""></image>
			</view>
		</view>
		<view class="">
			<view class="sterilizeItem" v-for="(item,idx) in disinfectList" :key="idx">
				<view class="sterilizeHead">
					<view class="warehouse">
						{{item.name}}
					</view>
					<view class="name">
						操作人：{{item.user_name}}
					</view>
				</view>
				<view class="sterilizeDetail">
					<view class="">
						<text>消杀方式</text><text>{{item.mode}}</text>
					</view>
					<view class="">
						<text>消杀药品</text><text>{{item.drugs_name}}</text>
					</view>
					<view class="">
						<text>用量</text><text>{{item.number+item.unit_price}}</text>
					</view>
				</view>
			</view>
			
				
		</view>
		<view class="addSterilizeRecord" @click="toSterilizeRrecordPage">
			<image src="../../static/daiban/jia.png" mode=""></image>
		</view>
		<lb-picker ref="cSTime" mode="dateSelector"  :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='record_timeChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
	</view>
</template>

<script>
	import LbPicker from '@/components/lb-picker';
	import {
		mapState
	} from 'vuex'
	export default {
		components:{
			LbPicker
		},
		data() {
			return {
				record_time:'',
				disinfectList:[],
			}
		},
		methods: {
			
			toSterilizeRrecordPage(){
				uni.navigateTo({
					url: '/sub/sterilize_record/sterilize_record'
				});
			},
			cSTimePopupShow(){
				this.$refs.cSTime.show()
			},
			record_timeChange(e){
				this.record_time=e.value
				this.getDisinfectList()
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				 this.record_time=times
			},
			getDisinfectList(){
				const {record_time}=this
				this.$http.post('/Sale/disinfectList.html', {uid: this.userInfo.id,record_time})
				.then((res) => {
						console.log(res)
						this.disinfectList=res.data
						// if(res.code == 200){
						// 	uni.showToast({
						// 		title:'审核成功',
						// 		icon: 'none'
						// 	})
						// 	this.isExamine=false
						// }else{
						// 	uni.showToast({
						// 		title:'审核失败',
						// 		icon: 'none'
						// 	})
						// }
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
			this.getDisinfectList()
		}
	}
</script>

<style lang="scss" scoped>
.sterilizeContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 4rpx;
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
	.sterilizeItem{
		width: 690rpx;
		height: 260rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 10rpx 0rpx rgba(0, 0, 0, 0.1);
		border-radius: 10rpx;
		margin: 30rpx auto 0;
		padding: 26rpx 20rpx 0;
		.sterilizeHead{
			display: flex;
			justify-content: space-between;
			border-bottom: 2rpx solid #E4E5E9;
			padding-bottom: 28rpx;
			.warehouse{
				height: 28rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				padding-left: 13rpx;
				border-left: 4rpx solid #377BE4;
				line-height: 24rpx;
			}
			.name{
				font-size: 24rpx;
				font-weight: 500;
				color: #377BE4;
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
				text{
					font-size: 24rpx;
					font-weight: 500;
					color: #979797;
				}
				text:nth-child(2){
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
