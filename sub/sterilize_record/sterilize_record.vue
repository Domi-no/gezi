<template>
	<view class="sterilizeRecordcontainer">
		<view class="sterilizeBox">
			<view class="sterilizeOption">
				<text>消杀时间</text><text>{{sRdataForm.record_time}}</text>
			</view>
			<view class="sterilizeOption" @click="choiceSRBoxNumber">
				<view class="">
					仓号<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice">
					{{block_value||'请选择'}}<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption" @click="choiceMode">
				<view class="">
					消杀方式<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice">
					{{sRdataForm.mode||'请选择'}}<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption" @click="choiceDrugPopup">
				<view class="">
					选择药品<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice">
					{{drugName||'请选择'}}<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption" @click="choiceCorporateNamePopup">
				<view class="">
					生产厂家<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice">
					{{corporateName||'请选择'}}<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption" @click="choiceDrugBatchNumberPopup">
				<view class="">
					药品批号<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice">
					{{batchNumber||'请选择'}}<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption">
				<view class="">
					药品用量<image class="star" src="../../static/daiban/star.png" mode=""></image>
				</view>
				<view class="choice choiceInput">
					<input type="number" :value="sRdataForm.number"  @input="numberChange" placeholder="请输入" placeholder-class="placeH" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="sterilizeOption">
				<view class="">
					饲养员
				</view>
				<view class="">
					{{username}}
				</view>
			</view>
		</view>
		<view class="sterilizeRemarks">
			<view class="">
				备注
			</view>
			<textarea value=""  @input="remarksChange" :value="sRdataForm.remarks" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
		</view>
		<view :class="{submitSterilizeRecord:true,isSub:isSRsub}" @click="srSubmit">
			提交
		</view>
		 <lb-picker ref="warehouse" mode="multiSelector" :list="warehouseList" :level="2" radius="20rpx" confirm-color="#377BE4" @confirm='warehouseValue'>
			 <view slot="confirm-text" >完成</view>
		 </lb-picker>
		 <lb-picker ref="mode" :list="list" radius="20rpx" confirm-color="#377BE4" @confirm="modeChange">
		 			 <view slot="confirm-text" >完成</view>
		 </lb-picker>
		 <lb-picker ref="sRbox" mode="multiSelector" :props="myProps" :list="sRWarehouseList" :level="2" radius="20rpx" confirm-color="#377BE4" @confirm='sRBoxValue'>
		 			 <view slot="confirm-text" >完成</view>
		 </lb-picker>
		 <lb-picker ref="drugName" :list="drugList" :props="drugProps" radius="20rpx" confirm-color="#377BE4" @confirm="drugValue">
		 			 <view slot="confirm-text" >完成</view>
		 </lb-picker>
		 <lb-picker ref="corporateName" :list="corporateNameList" :props="drugProps" radius="20rpx" confirm-color="#377BE4" @confirm="corporateNameChange">
		 			 <view slot="confirm-text" >完成</view>
		 </lb-picker>
		 <lb-picker ref="batchNumber" :list="batchNumberList" :props="drugProps" radius="20rpx" confirm-color="#377BE4" @confirm="batchNumberValue">
		 			 <view slot="confirm-text" >完成</view>
		 </lb-picker>
		 <!-- <lb-picker ref="drugName" mode="multiSelector" :props="myProps" :list="drugList" :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='drugValue'>
		 			 <view slot="confirm-text" >完成</view>
		 </lb-picker> -->
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
				list: [
				  
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
				],
				
				sRWarehouseList:[],
				drugList:[],
				myProps: {
				     label: 'name',
				     value: 'id',
				},
				drugProps:{
					label: 'name',
					
				},
				block_value:'',
				corporateNameList:[],
				corporateName:'',
				drugName:'',
				batchNumber:'',
				batchNumberList:[],
				username:'',
				sRdataForm:{
					record_time:'',
					block_id:'',
					mode:'',
					drugs_id:'',
					number:'',
					remarks:'',
					// batchNumber:''
				}
			}
		},
		methods: {
			choiceWarehouseNumber(){
				this.$refs.sRbox.show()
			},
			choiceMode(){
				this.$refs.mode.show()
			},
			choiceSRBoxNumber(){
				this.$refs.sRbox.show()
			},
			choiceDrugPopup(){
				this.$refs.drugName.show()
			},
			choiceDrugBatchNumberPopup(){
				this.$refs.batchNumber.show()
			},
			choiceCorporateNamePopup(){
				this.$refs.corporateName.show()
			},
			modeChange(e){
				console.log(e)
				this.sRdataForm.mode=e.value
			},
			warehouseValue(e){
				console.log(e.item[1].label)
				this.sRdataForm
			},
			sRBoxValue(e){
				console.log(e.item[1])
				this.sRdataForm.block_id=e.item[1].id
				this.block_value = e.item[1].name
			},
			drugValue(e){
				console.log(e)
				this.drugName=e.item.name
				this.corporateNameList=e.item.children
				// this.sRdataForm.drugs_id=e.item.drugs_id
			},
			corporateNameChange(e){
				this.corporateName=e.item.name
				this.batchNumberList=e.item.children
				console.log(e)
			},
			batchNumberValue(e){
				console.log(e)
				this.batchNumber=e.item.name
				this.sRdataForm.drugs_id=e.item.id
			},
			numberChange({detail:{value}}){
				this.sRdataForm.number=parseInt(value.trim())
			},
			remarksChange({detail:{value}}){
				this.sRdataForm.remarks=value
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				 this.sRdataForm.record_time=times
			},
			getModeAll(){
				const {record_time}=this
				this.$http.post('/Sale/modeAll.html', {uid: this.userInfo.id,record_time})
				.then(({data}) => {
						console.log(data)
						this.list=data.mode
						this.username=data.username
					}).catch((err) => {
						
				})
			},
			getFixBoxData(){
				this.$http.post('/Grain/fixBlock.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
						
						Object.keys(res.data).forEach((value, index)=>{
							console.log(value, index,res.data[value]);
							this.sRWarehouseList.push({name:value,children:res.data[value]})
						});
						console.log(this.sRWarehouseList)
					}).catch((err) => {
						
					})
			},
			getDrugsName(){
				
				this.$http.post('/sale/define.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
					Object.keys(res.data).forEach((value, index)=>{
						this.drugList.push({name:value,children:[]})
						Object.keys(res.data[value]).forEach((val, ind)=>{
							this.drugList[index].children.push({name:val,children:[]})
							Object.keys(res.data[value][val]).forEach((valu, inde)=>{
								this.drugList[index].children[ind].children.push({name:valu,id:res.data[value][val][valu].drugs_id})
							});
						});
					});
					console.log(this.drugList)
					}).catch((err) => {
						
					})
			},
			srSubmit(){
				if(!this.isSRsub){
					return false
				}
				this.$http.post('/Sale/disinfectAdd.html', {uid: this.userInfo.id,...this.sRdataForm})
				.then((res) => {
						console.log(res)
						if(res.code == 200){
							uni.showToast({
								title: '提交成功',
								icon: 'none'
							})
							setTimeout(()=>{
								uni.navigateBack({
								    delta: 1
								});
							},1000)
						}else{
							uni.showToast({
								title: res.message,
								icon: 'none'
							})
						}
						
					}).catch((err) => {
						
					})
			}
			
			
		},
		
		computed:{
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
			isSRsub(){
				
				const {record_time,block_id,mode,drugs_id,number,remarks}=this.sRdataForm
				console.log(record_time,block_id,mode,drugs_id,number,remarks)
				return record_time&&block_id&&mode&&drugs_id&&number&&remarks ? true :false
			}
			
		},
		created() {
			this.getToday()
			this.getModeAll()
			this.getFixBoxData()
			this.getDrugsName()
		},
		onUnload() {
			
		}
	}
</script>

<style lang="scss" scoped>
.sterilizeRecordcontainer{
	min-height: calc(100vh - 88rpx);
	background-color: #F4F6FA;
	padding-top: 20rpx;
	/*  #ifdef  MP-WEIXIN */
	min-height: calc(100vh);
	/*  #endif  */
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
			border-bottom: 1rpx solid #F4F6FA;
			padding: 0 30rpx;
			.choice{
				font-size: 28rpx;
				font-weight: 500;
				color: #979797;
				
			}
			.choiceInput{
				display: flex;
				line-height: 88rpx;
				input{
					width: 83rpx;
					margin: auto 16rpx auto 0;
					font-size: 28rpx;
					font-weight: 500;
					color: #979797;
					text-align: center;
				}
				image{
					margin: auto 0;
				}
			}
			.placeH{
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
	.isSub{
		background-color: #377BE4;
		color: #fff;
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
