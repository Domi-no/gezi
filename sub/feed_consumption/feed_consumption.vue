<template>
	<view class="feedConsumptionContainer">
		<view class="sterilizeTime" @click="choiceTime">
			<view class="sterilizeTimeLeft">
				时间
			</view>
			<view class="sterilizeTimeRight">
				<text>2020-12-25</text><image class="zk" src="../../static/daiban/b_zk.png" mode=""></image>
			</view>
		</view>
		<view class="sterilizeTime" @click="choiceWarehouseNumber">
			<view class="sterilizeTimeLeft">
				鸽仓类型
			</view>
			<view class="sterilizeTimeRight">
				<text>生产仓</text><image class="zk" src="../../static/daiban/b_zk.png" mode=""></image>
			</view>
		</view>
		<view class="">
			<view class="sterilizeItem">
				<view class="sterilizeHead">
					<view class="warehouse">
						<image src="../../static/daiban/g_g.png" mode=""></image>生产仓23
					</view>
					<view class="name">
						2020-12-25
					</view>
				</view>
				<view class="sterilizeDetail">
					<view class="">
						<text class="sterilizeDetailKey">饲料类型：<text class="sterilizeDetailValue">玉米</text></text><text class="sterilizeDetailKey">领取重量：<text class="sterilizeDetailValue">10公斤</text></text>
					</view>
					<view class="">
						<text class="sterilizeDetailKey">饲料发放人：<text class="sterilizeDetailValue">张三</text></text><text></text>
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
		<lb-picker ref="time" mode="dateSelector"  :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='warehouseValue'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="warehouse" :list="list" radius="20rpx" confirm-color="#377BE4">
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
	</view>
</template>

<script>
	import LbPicker from '@/components/lb-picker'
	export default {
		 components: {
		      LbPicker
		    },
		data() {
			return {
				list: [
				  {
				    label: '选项1',
				    value: '1'
				  },
				  {
				    label: '选项2',
				    value: '2'
				  }
				],
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
				  },
				  {
				    label: '选项2',
				    value: '2',
				    children: [
				      {
				        label: '选项2-1',
				        value: '2-1',
				        children: [
				                  {
				                    label: '选项2-1-1',
				                    value: '2-1-1'
				                  }
				                ]
				      }
				    ]
				  }
				]
			}
		},
		methods: {
			choiceWarehouseNumber(){
				this.$refs.warehouse.show()
			},
			choiceTime(){
				this.$refs.time.show()
			},
			warehouseValue(e){
				console.log(e.item[1].label)
			},
			toReceiveRrecordPage(){
				uni.navigateTo({
					url: '/sub/receive_record/receive_record'
				});
			}
			
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
