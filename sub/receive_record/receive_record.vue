<template>
	<view class="sterilizeRecordcontainer">
		<view class="sterilizeBox">
			<view class="sterilizeOption">
				<text>领取时间</text><text>2020-12-21</text>
			</view>
			<view class="sterilizeOption" @click="choiceWarehouseNumber">
				<view class="">
					发放人<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice">
					请选择<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption">
				<view class="">
					仓号<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice">
					请选择<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption" @click="choiceDrugs">
				<view class="">
					重量<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice">
					请选择<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption">
				<view class="">
					饲料名称<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice">
					请输入<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			
			
		</view>
		<view class="sterilizeRemarks">
			<view class="">
				备注
			</view>
			<textarea value=""  @input=""  placeholder="请输入请假事由" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
		</view>
		<view class="submitSterilizeRecord">
			提交
		</view>
		 <lb-picker ref="warehouse" mode="multiSelector" :list="warehouseList" :level="2" radius="20rpx" confirm-color="#377BE4" @confirm='warehouseValue'>
			 <view slot="confirm-text" >完成</view>
		 </lb-picker>
		 <lb-picker ref="drugs" :list="list" radius="20rpx" confirm-color="#377BE4">
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
			choiceDrugs(){
				this.$refs.drugs.show()
			},
			warehouseValue(e){
				console.log(e.item[1].label)
			}
		}
	}
</script>

<style lang="scss" scoped>
.sterilizeRecordcontainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	.sterilizeBox{
		background-color: #fff;
		
		.sterilizeOption{
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 88rpx;
			background: #FFFFFF;
			line-height: 88rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #151515;
			padding: 0 30rpx;
			border-bottom: 1rpx solid #F4F6FA;
			.choice{
				font-size: 28rpx;
				font-weight: 500;
				color: #979797;
			}
		}
		.sterilizeOption:last-child{
			border-bottom: 0;
		}
		
	}
	.sterilizeRemarks{
		height: 320rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
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
	.submitSterilizeRecord{
		width: 670rpx;
		height: 88rpx;
		background: #D1D2D3;
		border-radius: 44rpx;
		margin: 100rpx auto 0;
		line-height: 88rpx;
		text-align: center;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
	.star{
		width: 12rpx;
		height: 12rpx;
		position: relative;
		top: -12rpx;
		left: 8rpx;
	}
	.zk{
		width: 12rpx;
		height: 22rpx;
		margin-left: 17rpx;
	}
}
</style>
