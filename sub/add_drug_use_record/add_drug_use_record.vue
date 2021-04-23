<template>
	<view class="addNewDrugUseRecordContainer">
		<view class="dWTopBox">
			<text>记录时间</text><text>{{messageChangeData.time||dataForm.record_time}}</text>
		</view>

		<view class="leaveType">
			<view class="">
				用药鸽仓<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox" @click="choiceWarehouseNumber">
				<text>{{messageChangeData.name||drugUseRecordPigeonBin}}</text>
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
		</view>
		<view class="leaveReason">
			<view class="">
				症状描述<image class="star" :src="starSrc[0]" mode=""></image>
			</view>
			<textarea @input="symptomValue"  :value="dataForm.symptom" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			</view>
		<view >
			<view class="leaveTime">
				<view class="typeName">
					生病数量<image class="star" :src="starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<input type="number" @input="numberChange" :value="dataForm.number"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="" @click="showDrugUseTime">
					<view class="typeName" >
						开始用药时间<image class="star" :src="starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox"  @click="">
						<text>{{dataForm.usage_time}}</text>
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
				</view>
				<view class="typeName">
					用药天数<image class="star" :src="starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="drugDayChange"  :value="dataForm.day"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				
			</view>
			
			
			<view class="leaveTime">
				<view class="" @click="showDrugNamePopup">
					<view class="typeName">
						药品名称<image class="star" :src="starSrc[0]" mode=""></image>
					</view>
					<view class="choiceBox" @click="">
						<text>{{nameOfDrug}}</text>
						<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
					</view>
				</view>
				<view class="" @click="showDrugFactoryPopup">
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
					<input type="number" @input="dosageChange" :value="dataForm.dosage"   placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					用药审批人<image class="star" :src="starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="" @input="approvalChange" :value="dataForm.approval"    placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				
			</view>
			
		</view>
		<view :class="{leaveSubmit:true,isSubBg:isdWsub}" @click="cSubBtn">
			提交
		</view>
		
		<lb-picker ref="drug_warehouse" mode="multiSelector" :props="myProps" :list="warehouseList" :level="2" radius="20rpx" confirm-color="#377BE4" @confirm='warehouseValue'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="drug_time" mode="dateSelector"  :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='drug_useTime'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		
		<lb-picker ref="drugName" :list="drugNameList" radius="20rpx" confirm-color="#377BE4" @confirm='drugNameChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="drugFactory" :list="drugFactoryData" radius="20rpx" confirm-color="#377BE4" @confirm='drugFactoryChange'>
					 <view slot="confirm-text" >完成</view>
		</lb-picker>
		<lb-picker ref="drugBatchNumber" :list="batchNumberData" radius="20rpx" confirm-color="#377BE4" @confirm='drugBatchNumberChange'>
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
				
				isSub:false,
				visible:false,
				warehouseList: [],
				myProps: {
				     label: 'name',
				     value: 'id',
				   },
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
				// daysOfMedication:'',
				nameOfDrug:'请选择',
				dURManufacturer:'请选择',
				drugBatchNumber:'请选择',
				// drugDosage:'',
				// dURApprovedBy:'',
				starSrc:['../../static/daiban/star.png','../../static/daiban/n_s_star.png'],
				drugData:'',
				drugNameList:[],
				drugFactoryList:[],
				drugFactoryData:[],
				batchNumberList:[],
				batchNumberData:[],
				dataForm:{
					uid:'',
					record_id:'',
					record_time:'',
					block_id:'',
					symptom:'',
					number:'',
					usage_time:'请选择',
					day:'',
					drugs_id:'',
					approval:'',
					feedback:'',
					dosage:''
					
				},
				allFactoryData:[],
				messageChangeData:{},
				hQuery:false
				
				
			}
		},
		methods: {
			getDrugData(){
				this.$http.post('/Work/multiple.html',{uid:this.userInfo.id})
				.then((res)=>{
					console.log(res)
					this.drugData =res.data
					Object.keys(this.drugData).forEach((value, index)=>{
						console.log(value, index,this.drugData[value]);
						this.drugNameList.push(value)
						console.log(this.drugNameList)
					});
				}).catch((err)=>{
					// console.log(err)
				})
			},
			getFixBoxData(){
				this.$http.post('/Grain/fixBlock.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
						
						Object.keys(res.data).forEach((value, index)=>{
							console.log(value, index,res.data[value]);
							this.warehouseList.push({name:value,children:res.data[value]})
						});
						console.log(this.warehouseList)
					}).catch((err) => {
						
					})
			},
			getAllFactory(){
				this.$http.post('/Work/AllFactory.html',{uid:this.userInfo.id})
				.then((res)=>{
					console.log(res.data)
					this.allFactoryData = res.data
				}).catch((err)=>{
					
				})
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				 this.dataForm.record_time=times
				
			},
			reasonChange(){
			 this.$refs.reason.show()
			},
			onCancel(){
				console.log(this)
			},
			onConfirm(e){
				this.reasonValue=e.result
				
			},
			cSubBtn(){
				this.messageChangeData.record_id ? this.dataForm.record_id =this.messageChangeData.record_id:''
				console.log(this.messageChangeData.record_id)
				
				console.log(this.dataForm.block_id)
				// 
				if(!this.isdWsub){
					return false
				}
				this.$http.post('/Work/upRecord.html',{...this.dataForm})
				.then((res) => {
						console.log(res)
						if(res.code == 200){
							uni.showToast({
								title:'提交成功',
								icon: 'none'
							})
							setTimeout(()=>{
								uni.navigateBack({
								    delta: 1
								});
							},1000)
						}else{
							uni.showToast({
								title:res.message,
								icon: 'none'
							})
						}
					}).catch((err) => {
						
					})
			},
			
			symptomValue({detail:{value}}){
				this.dataForm.symptom=value
			},
			numberChange({detail:{value}}){
				this.dataForm.number=value
			},
			drugDayChange({detail:{value}}){
				this.dataForm.day=value
			},
			dosageChange({detail:{value}}){
				this.dataForm.dosage=value
			},
			approvalChange({detail:{value}}){
				this.dataForm.approval=value
			},
			choiceWarehouseNumber(){
				if(this.messageChangeData.record_id){
					return false
				}
				this.$refs.drug_warehouse.show()
			},
			showDrugUseTime(){
				this.$refs.drug_time.show()
			},
			ShowDrugBatchNumberPopup(){
				this.$refs.drugBatchNumber.show()
			},
			showDrugNamePopup(){
				this.$refs.drugName.show()
			},
			showDrugFactoryPopup(){
				this.$refs.drugFactory.show()
			},
			warehouseValue(e){
				console.log(e.item[1])
				this.drugUseRecordPigeonBin = e.item[1].name
				this.dataForm.block_id=e.item[1].id
				
			},
			drug_useTime(e){
				console.log(e.value)
				this.dataForm.usage_time=e.value
			},
			drugBatchNumberChange(e){
				console.log(e)
				this.drugBatchNumber=e.value
				console.log(this.batchNumberList[0])
				Object.keys(this.batchNumberList[0]).forEach((value, index)=>{
				console.log(value, index,this.batchNumberList[0][value]);
					
					if(e.value === value){
						this.dataForm.drugs_id=this.batchNumberList[0][value].drugs_id
						console.log(this.dataForm.drugs_id)
					}
				});
			},
			drugNameChange(e){
				console.log(e)
				this.nameOfDrug=e.value
				Object.keys(this.drugData).forEach((value, index)=>{
					console.log(value, index,this.drugData[value]);
					
					if(e.value === value){
						this.drugFactoryList.push(this.drugData[value])
						console.log(this.drugFactoryList[0])
					}
				});
				this.drugFactoryData=[]
				Object.keys(this.drugFactoryList[0]).forEach((value, index)=>{
					console.log(value, index,this.drugFactoryList[0][value]);
					
					this.drugFactoryData.push(value)
					console.log(this.drugFactoryData)
				});
			},
			drugFactoryChange(e){
				console.log(e)
				this.dURManufacturer=e.value
				Object.keys(this.drugFactoryList[0]).forEach((value, index)=>{
					console.log(value, index,this.drugFactoryList[0][value]);
					if(e.value === value){
						this.batchNumberList.push(this.drugFactoryList[0][value])
						console.log(this.batchNumberList)
					}
				});
				this.batchNumberData=[]
				Object.keys(this.batchNumberList[0]).forEach((value, index)=>{
					console.log(value, index,this.batchNumberList[0][value]);
					
					this.batchNumberData.push(value)
					
					console.log(this.batchNumberData)
				});
			},
			getRecordsForm(){
				this.$http.post('/Work/RecordMe.html', {record_id: this.dataForm.record_id,})
				.then((res) => {
						console.log(res)
						this.dataForm=res.data[0]
						this.dURManufacturer=res.data[0].production
						this.drugBatchNumber=res.data[0].batch_number
						this.nameOfDrug=res.data[0].drugs_name
						
				}).catch((err) => {
					
				})
			}
		},
		computed:{
			isdWsub(){
				let {
					symptom,
					number,
					usage_time,
					day,
					approval,
					dosage,
					drugs_id,
					block_id,
				} = this.dataForm
				console.log(this.dataForm.block_id)
				let {drugUseRecordPigeonBin,nameOfDrug,dURManufacturer,drugBatchNumber} =  this
				console.log(block_id,usage_time,drugs_id,dosage,approval,day,number,symptom)
				if(block_id !== '' && usage_time !== '请选择' && drugs_id !== '' && dosage && approval && day && number && symptom ){
					return true
				}
			},
			...mapState({
				userInfo: (state) => state.user.userInfo
			})
		},
		created() {
			if(this.hQuery){
				this.getRecordsForm()
			}else{
					this.getToday()
			}
			this.getDrugData()
			this.dataForm.uid=this.userInfo.id
			this.getToday()
			this.getAllFactory()
			this.getFixBoxData()
			
		},
		onShow() {
			if(this.hQuery){
				this.getRecordsForm()
			}else{
					this.getToday()
			}
		},
		onLoad(e) {
			e.query ? this.messageChangeData= JSON.parse(e.query):''
			
			e.query ? this.dataForm.record_id = JSON.parse(e.query).record_id:''
			e.query ? this.hQuery=true : this.hQuery=false
			console.log(this.messageChangeData,'434')
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
	/*  #ifdef  MP-WEIXIN */
	min-height: calc(100vh);
	/*  #endif  */
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
