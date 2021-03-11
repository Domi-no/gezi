<template>
	<view class="addNewDrugUseRecordContainer">
		<view class="dWTopBox">
			<text>记录时间</text><text>2020-12-21</text>
		</view>

		<view class="leaveType">
			<view class="">
				用药鸽仓<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox" @click="choiceWarehouseNumber">
				<text>{{drugUseRecordPigeonBin}}</text>
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
		</view>
		<view class="leaveReason">
			<view class="">
				症状描述<image class="star" :src="starSrc[0]" mode=""></image>
			</view>
			<textarea @input="dWremarks"  :value="DURdescriptionOfDisease" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			</view>
		<view >
			<view class="leaveTime">
				<view class="typeName">
					生病数量<image class="star" :src="starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<input type="number" @input="dWNum" :value="DURNumberOfSick"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="" @click="showDrugUseTime">
					<view class="typeName" >
						开始用药时间<image class="star" :src="starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox"  @click="">
						<text>{{startingTimeOfMedication}}</text>
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
				</view>
				<view class="typeName">
					用药天数<image class="star" :src="starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="dWPrice"  :value="daysOfMedication"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				
			</view>
			
			
			<view class="leaveTime">
				<view class="typeName">
					药品名称<image class="star" :src="starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<text>{{nameOfDrug}}</text>
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="">
					<view class="typeName">
						生产厂家<image class="star" :src="starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox">
						<text>{{dURManufacturer}}</text><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
				</view>
				<view class="" @click="ShowDrugBatchNumberPopup">
					<view class="typeName" >
						药品批号<image class="star" :src="starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox" >
						<text>{{drugBatchNumber}}</text>
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="leaveTime">
				
				<view class="typeName">
					药品用量<image class="star" :src="starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="" :value="drugDosage"   placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					用药审批人<image class="star" :src="starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="" :value="dURApprovedBy"    placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				
			</view>
			
		</view>
		<view :class="{leaveSubmit:true,isSubBg:isdWsub}" @click="cSubBtn">
			提交
		</view>
		
		<lb-picker ref="drug_warehouse" mode="multiSelector" :list="warehouseList" :level="2" radius="20rpx" confirm-color="#377BE4" @confirm='warehouseValue'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="drug_time" mode="dateSelector"  :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='drug_useTime'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="drugBatchNumber" :list="list" radius="20rpx" confirm-color="#377BE4" @confirm='drugBatchNumberChange'>
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
				
				isSub:false,
				visible:false,
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
				],
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
				drugUseRecordPigeonBin:'请选择',
				DURdescriptionOfDisease:'',
				DURNumberOfSick:'',
				startingTimeOfMedication:'请选择',
				daysOfMedication:'',
				nameOfDrug:'请选择',
				dURManufacturer:'请选择',
				drugBatchNumber:'请选择',
				drugDosage:'',
				dURApprovedBy:'',
				starSrc:['../../static/daiban/star.png','../../static/daiban/n_s_star.png'],
				
				
			}
		},
		methods: {
			reasonChange(){
			 this.$refs.reason.show()
			},
			dWNnit({detail:{value}}){
				this.unitVlue = value
			},
			dWNum({detail:{value}}){
				this.num = value
			},
			dWPrice({detail:{value}}){
				this.price =value
			},
			dWManager({detail:{value}}){
				this.managerName =value
			},
			dWSupplier({detail:{value}}){
				this.supplierName =value
			},
			dWCertifier({detail:{value}}){
				this.certifierName =value
			},
			dWprovider({detail:{value}}){
				this.providerName =value
			},
			dWremarks({detail:{value}}){
				this.remarks =value
			},
			onCancel(){
				console.log(this)
			},
			onConfirm(e){
				this.reasonValue=e.result
				
			},
			cSubBtn(){
				
			},
			choiceWarehouseNumber(){
				this.$refs.drug_warehouse.show()
			},
			showDrugUseTime(){
				this.$refs.drug_time.show()
			},
			ShowDrugBatchNumberPopup(){
				this.$refs.drugBatchNumber.show()
			},
			warehouseValue(e){
				console.log(e.item[1].label)
			},
			drug_useTime(e){
				console.log(e.item[1].label)
			},
			drugBatchNumberChange(e){
				console.log(e)
			}
		},
		computed:{
			isdWsub(){
				let {reasonValue,unitVlue,num,price,managerName,supplierName,certifierName,providerName,remarks}=this
				if(reasonValue !== '请选择' && unitVlue && num && price && supplierName && certifierName && providerName && remarks ){
					return true
				}
			},
			dWmoney(){
				let {num,price}=this
				return num&&price? num*price : 0
			}
		}
	}
</script>

<style lang="scss" scoped>
.addNewDrugUseRecordContainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	padding-bottom: 189rpx;
	color: #151515;
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
	.dWCentreBox{
		height: 88rpx;
		width: 100%;
		font-size: 30rpx;
		font-weight: 500;
		
		display: flex;
		justify-content: space-between;
		line-height: 88rpx;
		padding: 0 30rpx;
		background-color: #fff;
		border-top: 2rpx solid #F4F6FA;
		text:nth-child(2){
			font-size: 28rpx;
			// color: #343434;
		}
	}
	.leaveType{
		height: 140rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		font-weight: 500;
		color: #151515;
		padding: 26rpx 30rpx 0;
		
	}
	.manager{
		height: 140rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		font-weight: 500;
		border-top:2rpx solid #F4F6FA ;
		padding: 26rpx 30rpx 0;
	}
	.typeName{
		margin-top: 30rpx;
	}
	.choiceBox{
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		font-weight: 500;
		color: #979797;
		margin-top: 16rpx;
		height: 44rpx;
		input{
			height: 44rpx;
		}
		
	}
	.leaveTime{
		// height: 408rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		padding: 10rpx 30rpx 24rpx;
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
	.leaveSubmit{
		width: 670rpx;
		height: 88rpx;
		background: #D1D2D3;
		border-radius: 44rpx;
		text-align: center;
		line-height: 88rpx;
		margin: 100rpx auto;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
	.isSubBg{
		background-color: #377BE4;
	}
	.star{
		width: 12rpx;
		height: 12rpx;
		position: relative;
		top: -12rpx;
		left: 12rpx;
	}
	.zk{
		width: 12rpx;
		height: 22rpx;
		position: relative;
		top: 8rpx;
	}
	.typePop{
		width: 100%;
		height: 918rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 0px 0px;
		.typePopTitle{
			font-size: 30rpx;
			font-weight: 500;
			color: #377BE4;
			padding: 43rpx 30rpx 25rpx;
		}
		.leavePopname{
			border-top: 2rpx solid #E4E5E9;
			padding-left: 30rpx;
			.radioStyle{
				height: 100rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #151515;
				
			}
			.leave_line{
				width: 680rpx;
				height: 2rpx;
				background: #E4E5E9;
				margin-left: 40rpx;
			}
		}
	}
}
</style>
