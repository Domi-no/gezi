<template>
	<view class="addNewVaccineUseRecordContainer">
		<view class="dWTopBox">
			<text>记录时间</text><text>{{queryData.record_time|| addVaccineData.today}}</text>
		</view>
		
		<view class="leaveType">
			<view class="">
				仓号<image class="star" src="../../static/daiban/star.png" mode=""></image>
			</view>
			<view class="choiceBox" @click="vaccine_warehouseChange">
				<text>{{vaccineHouseValue}}</text>
				<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
			</view>
		</view>
		
		<view :class="{notSelected:whetherSelect}">
			<view class="leaveTime">
				<view class="typeName">
					疫苗名称<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="vaccineNameShow">
					<text>{{vaccineValue}}</text>
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					使用原因<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox"  @click="">
					<input type="" @input="vaccineUseReasonChange"  :value="addVaccineData.vaccineUseReason"   placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					生产厂家<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="vaccineFactoryShow">
					<text>{{vaccineFactoryName}}</text><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					生产日期<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="vaccineTimeShow">
					<text>{{vaccineTimeValue}}</text><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					批号<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="vaccineBatchNumberShow">
					<text>{{vaccineBatchValue}}</text><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			
			
			<view class="leaveTime">
				<view class="typeName">
					用苗时间<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="vaccine_timeShow">
					<text>{{addVaccineData.vaccineUseTime||'请选择'}}</text>
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					接种数量<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="vaccineNumberChange"  :value="addVaccineData.vaccineNumber"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="leaveTime">
				<view class="typeName">
					免疫方法<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox" @click="">
					<input type="" @input="methodChange" :value="addVaccineData.method"    placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
					<image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					免疫计量<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="number" @input="vaccineMeterageChange"  :value="addVaccineData.vaccineMeterage"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					免疫人员<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="" @input="personnelChange"  :value="addVaccineData.personnel"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					饲养员<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="" @input="breederChange"  :value="addVaccineData.breeder"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					免疫工作负责人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="" @input="approvalChange"  :value="addVaccineData.approval" placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
				<view class="typeName">
					接种单位负责人<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<view class="choiceBox">
					<input type="" @input="chargeChange"  :value="addVaccineData.charge"  placeholder="请输入" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" /><image class="zk" src="../../static/daiban/zk.png" mode=""></image>
				</view>
			</view>
			<view class="leaveReason">
				<view class="">
					备注<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<textarea   @input="remarksChange" :value="addVaccineData.remarks" placeholder="请输入备注" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			</view>
			<view class="leaveReason" v-show="isFeedBack === '反馈'">
				<view class="">
					反馈<image class="star" :src="whetherSelect?starSrc[1]:starSrc[0]" mode=""></image>
				</view>
				<textarea   @input="feedBackChange" :value="addVaccineData.feedback" placeholder="请输入反馈" placeholder-style="font-size: 28rpx;font-weight: 500;color: #979797;" />
			</view>
		</view>
		<view :class="{leaveSubmit:true,isSubBg:isdWsub}" @click="cSubBtn">
			提交
		</view>
		
			<lb-picker ref="vaccine_warehouse" :props="myProps" mode="multiSelector" :list="vaccineHouse" :level="2" radius="20rpx" confirm-color="#377BE4" @confirm='warehouseValue'>
						 <view slot="confirm-text" >完成</view>
			</lb-picker>
			
			<lb-picker ref="vaccineName" :list="vaccineNameList" radius="20rpx" confirm-color="#377BE4" @confirm='vaccineNameChange'>
						 <view slot="confirm-text" >完成</view>
			</lb-picker>	
			<lb-picker ref="vaccineFactory" :list="vaccineFactoryData" radius="20rpx" confirm-color="#377BE4" @confirm='vaccineFactoryChange'>
						 <view slot="confirm-text" >完成</view>
			</lb-picker>
			<lb-picker ref="vaccineTime" :list="vaccineTimeData" radius="20rpx" confirm-color="#377BE4" @confirm='vaccineTimeChange'>
						 <view slot="confirm-text" >完成</view>
			</lb-picker>
			<lb-picker ref="vaccineBatchNumber" :list="vaccinebatchNumberData" radius="20rpx" confirm-color="#377BE4" @confirm='vaccineBatchNumberChange'>
						 <view slot="confirm-text" >完成</view>
			</lb-picker>
			<lb-picker ref="vaccine_time" mode="dateSelector"  :level="3" radius="20rpx" confirm-color="#377BE4" @confirm='vaccine_useTimeChange'>
						 <view slot="confirm-text" >完成</view>
			</lb-picker>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	
	import LbPicker from '@/components/lb-picker'
	export default {
		components:{
		        LbPicker
		},
		data() {
			return {
				defaultProps:{"label":"name","value":"id"},
				isSub:false,
				visible:false,
				reasonOptions:[{name:'本厂使用',id:1},{name:'外销',id:2}],
				reasonValue:'请选择',
				starSrc:['../../static/daiban/star.png','../../static/daiban/n_s_star.png'],
				whetherSelect:false,
				unitVlue:'',
				num:'',
				price:'',
				managerName:'',
				supplierName:'',
				certifierName:'',
				providerName:'',
				remarks:'',
				// ---------------
				today:'',
				vaccineHouseValue:'请选择',
				vaccineHouseId:'',
				vaccineHouse:[],
				myProps: {
				label: 'name',
				value: 'id'
				},
				vaccineData:'',
				vaccineNameList:[],
				vaccineFactoryData:[],
				vaccineFactoryList:[],
				vaccinebatchNumberData:[],
				vaccineValue:'请选择',
				vaccineFactoryName:'请选择',
				vaccinebatchNumberData:[],
				vaccinebatchNumberList:'',
				vaccineTimeList:'',
				vaccineTimeData:[],
				vaccineTimeValue:'请选择',
				vaccineBatchValue:'请选择',
				drugs_id:'',
				vaccineUseTime:'请选择',
				vaccineUseReason:'',
				vaccineNumber:'',
				method:'',
				vaccineMeterage:'',
				personnel:'',
				approval:'',
				breeder:'',
				charge:'',
				isFeedBack:'',
				feedback:'',
				queryData:'',
				vaccineDetailData:'',
				addVaccineData:{
					vaccin_id:'',
					drugs_id:'',
					vaccineHouseId:'',
					today:'',
					charge:'',
					breeder:'',
					approval:'',
					remarks:'',
					personnel:'',
					vaccineMeterage:'',
					method:'',
					vaccineNumber:'',
					vaccineUseReason:'',
					vaccineUseTime:'',
					queryData:'',
					feedback:'',
					}
			}
		},
		methods: {
			vaccine_warehouseChange(){
				if(this.queryData.vaccin_id){
					return false
				}
			 this.$refs.vaccine_warehouse.show()
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
				if(!this.isdWsub){
					return false
				}
				
				const {drugs_id,vaccineHouseId,today,charge,breeder,approval,remarks,personnel,vaccineMeterage,method,vaccineNumber,vaccineUseReason,vaccineUseTime,queryData,feedback}=this.addVaccineData
				this.$http.post('/Vaccin/upRecord.html', {uid: this.userInfo.id,vaccin_id:this.queryData.vaccin_id||'',record_time:today,block_id:vaccineHouseId,symptom:vaccineUseReason,number:vaccineNumber,usage_time:vaccineUseTime,approval,charge,remarks,personnel,breeder,method,drugs_id,approval,dosage:vaccineMeterage,vaccin_id:this.queryData.vaccin_id,feedback})
				.then((res) => {
						console.log(res)
						if(res.code == 200){
							uni.showToast({
								title: '提交成功',
								icon: 'none'
							})
							// return false
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
			},
			vaccineNameShow(){
				this.$refs.vaccineName.show()
			},
			vaccineFactoryShow(){
				this.$refs.vaccineFactory.show()
			},
			vaccineTimeShow(){
				this.$refs.vaccineTime.show()
			},
			vaccineBatchNumberShow(){
				this.$refs.vaccineBatchNumber.show()
			},
			vaccine_timeShow(){
				this.$refs.vaccine_time.show()
			},
			getToday(){
				let Dates = new Date();
				 let Y = Dates.getFullYear();
				 let M = Dates.getMonth() + 1;
				 let D = Dates.getDate();
				 let times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;
				 this.addVaccineData.today=times
				 // this.drugUseForm.time_m = M < 10?  '0'+ M : M
				 // this.drugUseForm.time_y=Y
			},
			getFixBoxData(){
				this.$http.post('/Work/FactoryBlock.html', {uid: this.userInfo.id})
				.then((res) => {
						console.log(res)
						
						Object.keys(res.data).forEach((value, index)=>{
							console.log(value, index,res.data[value]);
							this.vaccineHouse.push({name:value,children:res.data[value]})
						});
						console.log(this.vaccineHouse)
					}).catch((err) => {
						
					})
			},
			getVaccineData(){
				this.$http.post('/Vaccin/define.html',{uid:this.userInfo.id})
				.then((res)=>{
					console.log(res)
					this.vaccineData =res.data
					Object.keys(this.vaccineData).forEach((value, index)=>{
						console.log(value, index,this.vaccineData[value]);
						this.vaccineNameList.push(value)
						console.log(this.vaccineNameList)
					});
				}).catch((err)=>{
					// console.log(err)
				})
			},
			warehouseValue(e){
				console.log(e.item[1])
				this.vaccineHouseValue=e.item[1].name
				this.addVaccineData.vaccineHouseId=e.item[1].id
			},
			vaccineBatchNumberChange(e){
				console.log(e)
				this.vaccineBatchValue=e.value
				console.log(this.vccinebatchNumberList)
				Object.keys(this.vccinebatchNumberList).forEach((value, index)=>{
					console.log(value, index,this.vccinebatchNumberList[value]);
					
					if(e.value === value){
						this.addVaccineData.drugs_id=this.vccinebatchNumberList[value].drugs_id
						console.log(this.drugs_id)
					}
				});
			},
			vaccineNameChange(e){
				console.log(e)
				this.vaccineValue=e.value
				Object.keys(this.vaccineData).forEach((value, index)=>{
					console.log(value, index,this.vaccineData[value]);
					
					if(e.value === value){
						this.vaccineFactoryList=this.vaccineData[value]
						console.log(this.vaccineFactoryList)
					}
				});
				this.vaccineFactoryData=[]
				Object.keys(this.vaccineFactoryList).forEach((value, index)=>{
					console.log(value, index,this.vaccineFactoryList[value]);
					
					this.vaccineFactoryData.push(value)
					console.log(this.vaccineFactoryData)
				});
			},
			vaccineFactoryChange(e){
				console.log(e)
				this.vaccineFactoryName=e.value
				console.log(this.vaccineFactoryList)
				Object.keys(this.vaccineFactoryList).forEach((value, index)=>{
					console.log(value, index,this.vaccineFactoryList[value]);
					if(e.value === value){
						this.vaccineTimeList=this.vaccineFactoryList[value]
						console.log(this.vaccineTimeList)
					}
				});
				this.vaccineTimeData=[]
				Object.keys(this.vaccineTimeList).forEach((value, index)=>{
					console.log(value, index,this.vaccineTimeList[value]);
					
					this.vaccineTimeData.push(value)
					
					console.log(this.vaccineTimeData)
				});
			},
			vaccineTimeChange(e){
				console.log(e)
				this.vaccineTimeValue=e.value
				console.log(this.vaccineFactoryList)
				Object.keys(this.vaccineTimeList).forEach((value, index)=>{
					console.log(value, index,this.vaccineTimeList[value]);
					if(e.value === value){
						this.vccinebatchNumberList=this.vaccineTimeList[value]
						console.log(this.vccinebatchNumberList)
					}
				});
				this.vaccinebatchNumberData=[]
				Object.keys(this.vccinebatchNumberList).forEach((value, index)=>{
					console.log(value, index,this.vccinebatchNumberList[value]);
					
					this.vaccinebatchNumberData.push(value)
					
					console.log(this.vaccinebatchNumberData)
				});
			},
			vaccine_useTimeChange(e){
				console.log(e)
				this.addVaccineData.vaccineUseTime=e.value
			},
			vaccineUseReasonChange({detail:{value}}){
				console.log(value)
				this.addVaccineData.vaccineUseReason=value
			},
			vaccineNumberChange({detail:{value}}){
				console.log(value)
				this.addVaccineData.vaccineNumber=parseInt(value.trim())
			},
			methodChange({detail:{value}}){
				this.addVaccineData.method=value
			},
			vaccineMeterageChange({detail:{value}}){
				this.addVaccineData.vaccineMeterage=value.trim()
			},
			personnelChange({detail:{value}}){
				this.addVaccineData.personnel=value
			},
			breederChange({detail:{value}}){
				this.addVaccineData.breeder=value
			},
			approvalChange({detail:{value}}){
				this.addVaccineData.approval=value
			},
			chargeChange({detail:{value}}){
				this.addVaccineData.charge=value
			},
			remarksChange({detail:{value}}){
				this.addVaccineData.remarks=value
			},
			feedBackChange({detail:{value}}){
				this.addVaccineData.feedback=value
			},
			getVaccineUseDetail(){
				console.log(this.query)
				this.$http.post('/Vaccin/RecordMe.html', {uid: this.userInfo.id,vaccin_id:this.queryData.vaccin_id})
				.then((res) => {
	 				
						this.vaccineDetailData=res.data[0]
						this.today=res.data[0].record_time
						this.addVaccineData.vaccineHouseId=res.data[0].block_id
						this.addVaccineData.vaccineUseReason=res.data[0].symptom
						this.addVaccineData.vaccineNumber=res.data[0].number
						this.addVaccineData.vaccineUseTime=res.data[0].usage_time
						this.addVaccineData.approval=res.data[0].approval
						this.addVaccineData.charge=res.data[0].charge
						this.addVaccineData.remarks=res.data[0].remarks
						this.addVaccineData.personnel=res.data[0].personnel
						this.addVaccineData.breeder=res.data[0].breeder
						this.addVaccineData.method=res.data[0].method
						this.addVaccineData.drugs_id=res.data[0].druge_id
						this.addVaccineData.approval=res.data[0].approval
						this.addVaccineData.vaccineMeterage = res.data[0].dosage
						console.log(this.addVaccineData.vaccineMeterage)
						this.addVaccineData.feedback=res.data[0].feedback
						this.vaccineBatchValue=res.data[0].batch_number
						this.vaccineFactoryName=res.data[0].production
						this.vaccineValue=res.data[0].drugs_name
				console.log(this.vaccineDetailData)
					}).catch((err) => {
						
					})
			},
		},
		computed:{
			isdWsub(){
				const {charge,breeder,approval,remarks,personnel,vaccineMeterage,method,vaccineNumber,vaccineUseReason,vaccineUseTime,vaccineBatchValue,vaccineTimeValue,vaccineFactoryName,vaccineValue,vaccineHouseValue}=this.addVaccineData
				if(vaccineHouseValue !== '请选择' &&vaccineValue !== '请选择' &&vaccineFactoryName !== '请选择'&&vaccineBatchValue !== '请选择'&&vaccineUseTime !== '请选择' &&vaccineTimeValue !== '请选择' && charge && breeder && approval && remarks && personnel && vaccineMeterage && method && vaccineNumber && vaccineUseReason ){
					return true
				}
			},
			dWmoney(){
				let {num,price}=this
				return num&&price? num*price : 0
			},
			...mapState({
				userInfo: (state) => state.user.userInfo
			}),
		},
		
		created() {
			
			
			// if(this.queryData.vaccin_id){
			// 	this.getVaccineUseDetail()
			// }else{
				
				
			// }
			this.getToday()
			this.getFixBoxData()
			this.getVaccineData()
		},
		onShow() {
			this.getToday()
			
			if(this.queryData.vaccin_id){
				this.getVaccineUseDetail()
			}else{
				
				
			}
			console.log(this.today)
		},
		onLoad({query}) {
			if(query){
				this.queryData = JSON.parse(query)
				JSON.parse(query).feedback? this.isFeedBack = JSON.parse(query).feedback : ''
				
				this.vaccineHouseValue=this.queryData.name
				console.log(this.queryData)
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
.addNewVaccineUseRecordContainer{
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
